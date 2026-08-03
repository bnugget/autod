"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSession = void 0;
const Memory_1 = require("./Memory");
const store2_1 = __importDefault(require("store2"));
const AuthKey_1 = require("../crypto/AuthKey");
const node_localstorage_1 = require("node-localstorage");
/**
 * Persistent session that stores auth keys and entity data on disk using `node-localstorage`.
 *
 * Creates a directory named after the session in the current working directory.
 * Suitable for long-running server applications where session data must survive restarts.
 *
 * @example
 * ```ts
 * const session = new StoreSession("my_session");
 * const client = new TelegramClient(session, apiId, apiHash, {});
 * ```
 */
class StoreSession extends Memory_1.MemorySession {
    constructor(sessionName, divider = ":") {
        super();
        if (sessionName === "session") {
            throw new Error("Session name can't be 'session'. Please use a different name.");
        }
        this.store = store2_1.default.area(sessionName, new node_localstorage_1.LocalStorage("./" + sessionName));
        if (divider == undefined) {
            divider = ":";
        }
        this.sessionName = sessionName + divider;
    }
    async load() {
        let authKey = this.store.get(this.sessionName + "authKey");
        if (authKey && typeof authKey === "object") {
            this._authKey = new AuthKey_1.AuthKey();
            if ("data" in authKey) {
                authKey = Buffer.from(authKey.data);
            }
            await this._authKey.setKey(authKey);
        }
        const dcId = this.store.get(this.sessionName + "dcId");
        if (dcId) {
            this._dcId = dcId;
        }
        const port = this.store.get(this.sessionName + "port");
        if (port) {
            this._port = port;
        }
        const serverAddress = this.store.get(this.sessionName + "serverAddress");
        if (serverAddress) {
            this._serverAddress = serverAddress;
        }
        const testServers = this.store.get(this.sessionName + "testServers");
        if (testServers != null) {
            super.testServers = !!testServers;
        }
        // Reload cached per-DC (non-main) auth keys so we don't have to do a
        // fresh DH handshake every process start.
        const dcKeys = this.store.get(this.sessionName + "dcAuthKeys");
        if (dcKeys && typeof dcKeys === "object") {
            for (const [k, v] of Object.entries(dcKeys)) {
                const id = Number(k);
                if (!Number.isFinite(id) || !v || typeof v !== "object")
                    continue;
                let buf;
                if (Buffer.isBuffer(v))
                    buf = v;
                else if ("data" in v)
                    buf = Buffer.from(v.data);
                if (!buf)
                    continue;
                const key = new AuthKey_1.AuthKey();
                await key.setKey(buf);
                this._dcAuthKeys.set(id, key);
            }
        }
    }
    setAuthKey(authKey, dcId) {
        super.setAuthKey(authKey, dcId);
        if (dcId !== undefined && dcId !== this._dcId) {
            // Persist non-main DC keys as a plain {dcId: Buffer} map so a
            // later process can reuse them and avoid hitting Telegram's
            // per-account auth-key cap.
            const snapshot = {};
            for (const [id, k] of this._dcAuthKeys) {
                const raw = k.getKey();
                if (raw)
                    snapshot[String(id)] = raw;
            }
            this.store.set(this.sessionName + "dcAuthKeys", snapshot);
        }
    }
    setDC(dcId, serverAddress, port) {
        this.store.set(this.sessionName + "dcId", dcId);
        this.store.set(this.sessionName + "port", port);
        this.store.set(this.sessionName + "serverAddress", serverAddress);
        super.setDC(dcId, serverAddress, port);
    }
    set testServers(value) {
        super.testServers = value;
        this.store.set(this.sessionName + "testServers", value);
    }
    get testServers() {
        return super.testServers;
    }
    set authKey(value) {
        this._authKey = value;
        this.store.set(this.sessionName + "authKey", value === null || value === void 0 ? void 0 : value.getKey());
    }
    get authKey() {
        return this._authKey;
    }
    delete() {
        this.store.clearAll();
        super.delete();
    }
    processEntities(tlo) {
        const rows = this._entitiesToRows(tlo);
        if (!rows) {
            return;
        }
        for (const row of rows) {
            this.store.set(this.sessionName + row[0], row);
        }
    }
    getEntityRowsById(id, exact = true) {
        return this.store.get(this.sessionName + id.toString());
    }
}
exports.StoreSession = StoreSession;
