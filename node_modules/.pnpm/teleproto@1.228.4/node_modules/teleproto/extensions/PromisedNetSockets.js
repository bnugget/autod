"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromisedNetSockets = void 0;
const net = __importStar(require("node:net"));
const socks_1 = require("socks");
const closeError = new Error("NetSocket was closed");
const DEFAULT_KEEP_ALIVE_INTERVAL = 30000;
/**
 * Promise-based TCP socket wrapper used as the network transport layer.
 *
 * When a {@link SocksProxyType} proxy is provided, connections are tunneled
 * through the SOCKS proxy via the `socks` package. MTProxy connections are
 * handled at a higher level by {@link TCPMTProxy} and do not affect this class.
 */
class PromisedNetSockets {
    constructor(proxy, keepAliveInterval) {
        this.client = undefined;
        this.closed = true;
        this.chunks = [];
        this.headOffset = 0;
        this.available = 0;
        this.keepAliveInterval =
            keepAliveInterval !== null && keepAliveInterval !== void 0 ? keepAliveInterval : DEFAULT_KEEP_ALIVE_INTERVAL;
        if (proxy) {
            // we only want to use this when it's not an MTProto proxy.
            if (!("MTProxy" in proxy)) {
                if (!proxy.ip || !proxy.port || !proxy.socksType) {
                    throw new Error(`Invalid sockets params: ip=${proxy.ip}, port=${proxy.port}, socksType=${proxy.socksType}`);
                }
                this.proxy = proxy;
            }
        }
    }
    async readExactly(number) {
        const parts = [];
        let need = number;
        while (need > 0) {
            const part = await this.read(need);
            parts.push(part);
            need -= part.length;
        }
        return parts.length === 1 ? parts[0] : Buffer.concat(parts);
    }
    async read(number) {
        if (this.closed) {
            throw closeError;
        }
        await this.canRead;
        if (this.closed) {
            throw closeError;
        }
        const toReturn = this._consume(Math.min(number, this.available));
        if (this.available === 0) {
            this.canRead = new Promise((resolve) => {
                this.resolveRead = resolve;
            });
        }
        return toReturn;
    }
    async readAll() {
        if (this.closed || !(await this.canRead)) {
            throw closeError;
        }
        const toReturn = this._consume(this.available);
        this.canRead = new Promise((resolve) => {
            this.resolveRead = resolve;
        });
        return toReturn;
    }
    _consume(n) {
        if (n <= 0) {
            return Buffer.alloc(0);
        }
        const head = this.chunks[0];
        if (head && head.length - this.headOffset >= n) {
            const out = head.subarray(this.headOffset, this.headOffset + n);
            this.headOffset += n;
            this.available -= n;
            if (this.headOffset === head.length) {
                this.chunks.shift();
                this.headOffset = 0;
            }
            return out;
        }
        const out = Buffer.alloc(n);
        let written = 0;
        while (written < n) {
            const chunk = this.chunks[0];
            const take = Math.min(chunk.length - this.headOffset, n - written);
            chunk.copy(out, written, this.headOffset, this.headOffset + take);
            written += take;
            this.headOffset += take;
            if (this.headOffset === chunk.length) {
                this.chunks.shift();
                this.headOffset = 0;
            }
        }
        this.available -= n;
        return out;
    }
    /**
     * Creates a new connection
     * @param port
     * @param ip
     * @returns {Promise<void>}
     */
    async connect(port, ip) {
        this.chunks = [];
        this.headOffset = 0;
        this.available = 0;
        let connected = false;
        if (this.proxy) {
            const info = await socks_1.SocksClient.createConnection({
                proxy: {
                    host: this.proxy.ip,
                    port: this.proxy.port,
                    type: this.proxy.socksType,
                    userId: this.proxy.username,
                    password: this.proxy.password,
                },
                command: "connect",
                timeout: (this.proxy.timeout || 5) * 1000,
                destination: {
                    host: ip,
                    port: port,
                },
            });
            this.client = info.socket;
            connected = true;
        }
        else {
            this.client = new net.Socket();
        }
        this.canRead = new Promise((resolve) => {
            this.resolveRead = resolve;
        });
        this.closed = false;
        return new Promise((resolve, reject) => {
            if (this.client) {
                const tune = (socket) => {
                    socket.setNoDelay(true);
                    socket.setKeepAlive(this.keepAliveInterval > 0, Math.max(0, this.keepAliveInterval));
                };
                if (connected) {
                    tune(this.client);
                    this.receive();
                    resolve(this);
                }
                else {
                    this.client.connect(port, ip, () => {
                        tune(this.client);
                        this.receive();
                        resolve(this);
                    });
                }
                this.client.on("error", reject);
                this.client.on("close", () => {
                    if (this.client && this.client.destroyed) {
                        if (this.resolveRead) {
                            this.resolveRead(false);
                        }
                        this.closed = true;
                    }
                });
            }
        });
    }
    write(data) {
        if (this.closed) {
            throw closeError;
        }
        if (this.client) {
            this.client.write(data);
        }
    }
    async close() {
        const socket = this.client;
        this.closed = true;
        if (!socket)
            return;
        const closed = new Promise((resolve) => {
            if (socket.destroyed)
                resolve();
            else
                socket.once("close", () => resolve());
        });
        socket.destroy();
        socket.unref();
        await closed;
    }
    async receive() {
        if (this.client) {
            this.client.on("data", (chunk) => {
                this.chunks.push(chunk);
                this.available += chunk.length;
                if (this.resolveRead) {
                    this.resolveRead(true);
                }
            });
        }
    }
    toString() {
        return "PromisedNetSocket";
    }
}
exports.PromisedNetSockets = PromisedNetSockets;
