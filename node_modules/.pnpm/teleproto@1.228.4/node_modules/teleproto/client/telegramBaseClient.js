"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramBaseClient = exports.WEBSOCKET_DC_HOSTS = exports.TEST_DC_IPV6 = exports.TEST_DC_IPV4 = exports.PROD_DC_IPV6 = exports.PROD_DC_IPV4 = void 0;
exports.webSocketDcAddress = webSocketDcAddress;
const Version_1 = require("../Version");
const connection_1 = require("../network/connection");
const sessions_1 = require("../sessions");
const extensions_1 = require("../extensions");
const tl_1 = require("../tl");
const os_1 = __importDefault(require("os"));
const entityCache_1 = require("../entityCache");
const markdown_1 = require("../extensions/markdown");
const network_1 = require("../network");
const Dcenter_1 = require("../network/Dcenter");
const Network_1 = require("../network/Network");
const MediaScheduler_1 = require("../network/MediaScheduler");
const registry_1 = require("../tl/runtime/registry");
const TCPMTProxy_1 = require("../network/connection/TCPMTProxy");
const Deferred_1 = __importDefault(require("../extensions/Deferred"));
const UpdateManager_1 = require("./UpdateManager");
// An idle media session is torn down and rebuilt lazily on next use (the
// main session never idles — it pings). With per-connection PFS keys a
// rebuild costs a full DH handshake (network + server time, ~0.5-1s), so
// the reclaim window follows mtcute's 60s rather than tdesktop's 15s —
// bursty traffic (one photo per minute) stays warm instead of paying the
// handshake on every burst.
const SESSION_IDLE_TIMEOUT_MS = 60000;
const SESSION_STARTUP_DELAY_MS = 800;
const PROD_DEFAULT_DC_ID = 2;
const TEST_DEFAULT_DC_ID = 2;
exports.PROD_DC_IPV4 = {
    1: "149.154.175.50",
    2: "149.154.167.51",
    3: "149.154.175.100",
    4: "149.154.167.91",
    5: "149.154.171.5",
};
exports.PROD_DC_IPV6 = {
    1: "2001:0b28:f23d:f001:0000:0000:0000:000a",
    2: "2001:067c:04e8:f002:0000:0000:0000:000a",
    3: "2001:0b28:f23d:f003:0000:0000:0000:000a",
    4: "2001:067c:04e8:f004:0000:0000:0000:000a",
    5: "2001:0b28:f23f:f005:0000:0000:0000:000a",
};
exports.TEST_DC_IPV4 = {
    1: "149.154.175.10",
    2: "149.154.167.40",
    3: "149.154.175.117",
};
exports.TEST_DC_IPV6 = {
    1: "2001:0b28:f23d:f001:0000:0000:0000:000e",
    2: "2001:067c:04e8:f002:0000:0000:0000:000e",
    3: "2001:0b28:f23d:f003:0000:0000:0000:000e",
};
const DC_PORT = 443;
exports.WEBSOCKET_DC_HOSTS = {
    1: "pluto",
    2: "venus",
    3: "aurora",
    4: "vesta",
    5: "flora",
};
function webSocketDcAddress(dcId, mediaCluster = false) {
    const host = exports.WEBSOCKET_DC_HOSTS[dcId];
    if (!host)
        return undefined;
    return `${host}${mediaCluster ? "-1" : ""}.web.telegram.org`;
}
/**
 * Returns `true` if `address` is a known test-DC seed, `false` if it's a known
 * production-DC seed, and `undefined` if the address isn't recognised (custom
 * DC, IPv6 we haven't tabulated, post-`help.GetConfig` rebalanced address, etc.).
 */
function inferSessionEnv(address) {
    for (const ip of Object.values(exports.TEST_DC_IPV4))
        if (ip === address)
            return true;
    for (const ip of Object.values(exports.TEST_DC_IPV6))
        if (ip === address)
            return true;
    for (const ip of Object.values(exports.PROD_DC_IPV4))
        if (ip === address)
            return false;
    for (const ip of Object.values(exports.PROD_DC_IPV6))
        if (ip === address)
            return false;
    return undefined;
}
const clientParamsDefault = {
    connection: connection_1.ConnectionTCPFull,
    networkSocket: extensions_1.PromisedNetSockets,
    useIPV6: false,
    testServers: false,
    timeout: 10,
    requestRetries: 5,
    connectionRetries: Infinity,
    reconnectRetries: Infinity,
    retryDelay: 1000,
    downloadRetries: 5,
    autoReconnect: true,
    sequentialUpdates: false,
    floodSleepThreshold: 60,
    deviceModel: "",
    systemVersion: "",
    appVersion: "",
    langCode: "en",
    systemLangCode: "en",
    _securityChecks: true,
};
class TelegramBaseClient {
    constructor(session, apiId, apiHash, clientParams) {
        var _a, _b, _c, _d;
        /** The current teleproto version. */
        this.__version__ = Version_1.version;
        /**
         * Epoch ms of the last message decrypted on ANY session. Distinguishes a
         * genuinely dead main connection from a ping that merely timed out because
         * the single JS thread was busy decrypting media — if data is still
         * arriving, the stack is alive and a ping hiccup must not force a reconnect.
         * @hidden
         */
        this._lastReceivedAt = 0;
        /** @hidden */
        this._ALBUMS = new Map();
        /**
         * Connect failures per `"dcId:mediaCluster"`, used to rotate through a
         * DC's published addresses — one dead IP must not blackhole the DC.
         * @hidden
         */
        this._dcConnectFailures = new Map();
        /**
         * Shared per-DC state (auth key + server salt), tdesktop's `Dcenter`.
         * Every sender of one DC reads/writes here so fresh sessions start with a
         * valid salt and share one auth key.
         * @hidden
         */
        this._dcenters = new Dcenter_1.DcenterRegistry();
        const explicitConnection = clientParams.connection !== undefined;
        clientParams = Object.assign(Object.assign({}, clientParamsDefault), clientParams);
        if (!apiId || !apiHash) {
            throw new Error("Your API ID or Hash cannot be empty or undefined");
        }
        if (clientParams.baseLogger) {
            this._log = clientParams.baseLogger;
        }
        else {
            this._log = new extensions_1.Logger();
        }
        this._log.info("Running teleproto version " + Version_1.version);
        if (session && typeof session == "string") {
            session = new sessions_1.StoreSession(session);
        }
        if (!(session instanceof sessions_1.Session)) {
            throw new Error("Only StringSession and StoreSessions are supported currently :( ");
        }
        this._floodSleepThreshold = clientParams.floodSleepThreshold;
        this.session = session;
        this.apiId = apiId;
        this.apiHash = apiHash;
        this._useIPV6 = clientParams.useIPV6;
        this._testServers = clientParams.testServers;
        this._requestRetries = clientParams.requestRetries;
        this._downloadRetries = clientParams.downloadRetries;
        this._connectionRetries = clientParams.connectionRetries;
        this._reconnectRetries = clientParams.reconnectRetries;
        this._retryDelay = clientParams.retryDelay || 0;
        this._timeout = clientParams.timeout;
        this._autoReconnect = clientParams.autoReconnect;
        this._proxy = clientParams.proxy;
        this._maxConcurrentDownloads = clientParams.maxConcurrentDownloads || 1;
        this.networkSocket = clientParams.networkSocket || extensions_1.PromisedNetSockets;
        this._keepAliveInterval = clientParams.keepAliveInterval;
        this._reCaptchaCallback = clientParams.reCaptchaCallback;
        if (!(clientParams.connection instanceof Function)) {
            throw new Error("Connection should be a class not an instance");
        }
        this._connection = clientParams.connection;
        if (!explicitConnection && this.networkSocket.isWebSocket) {
            this._connection = connection_1.ConnectionTCPObfuscated;
        }
        let initProxy;
        if (this._proxy && "MTProxy" in this._proxy) {
            this._connection = TCPMTProxy_1.ConnectionTCPMTProxyAbridged;
            initProxy = new tl_1.Api.InputClientProxy({
                address: this._proxy.ip,
                port: this._proxy.port,
            });
        }
        this._initRequest = new tl_1.Api.InitConnection({
            apiId: this.apiId,
            deviceModel: clientParams.deviceModel || os_1.default.type().toString() || "Unknown",
            systemVersion: clientParams.systemVersion || os_1.default.release().toString() || "1.0",
            appVersion: clientParams.appVersion || "1.0",
            langCode: clientParams.langCode || clientParamsDefault.langCode,
            langPack: "", // this should be left empty.
            systemLangCode: clientParams.systemLangCode ||
                clientParamsDefault.systemLangCode,
            proxy: initProxy,
        });
        this._eventBuilders = [];
        this._floodWaitedRequests = {};
        this._bot = undefined;
        this._selfInputPeer = undefined;
        this._securityChecks = !!clientParams.securityChecks;
        this._entityCache = new entityCache_1.EntityCache(clientParams.entityCache);
        this._config = undefined;
        this._loopStarted = false;
        this._reconnecting = false;
        this._destroyed = false;
        this._isSwitchingDc = false;
        this._connectedDeferred = new Deferred_1.default();
        this._parseMode = markdown_1.MarkdownParser;
        this.updateManager = new UpdateManager_1.UpdateManager(this);
        this._network = new Network_1.Network(this, {
            idleTimeoutMs: (_b = (_a = clientParams.downloadPool) === null || _a === void 0 ? void 0 : _a.idleTimeoutMs) !== null && _b !== void 0 ? _b : SESSION_IDLE_TIMEOUT_MS,
            sessionStartupDelayMs: (_d = (_c = clientParams.downloadPool) === null || _c === void 0 ? void 0 : _c.sessionStartupDelayMs) !== null && _d !== void 0 ? _d : SESSION_STARTUP_DELAY_MS,
        });
        this._media = new MediaScheduler_1.MediaScheduler(this, this._network, clientParams.downloadPool);
    }
    /**
     * The in-memory entity cache. Exposes `size`, `has`, `delete` and
     * `clear` so stale peers can be invalidated without touching internals.
     * See {@link TelegramClientParams.entityCache} for bounding it.
     */
    get entityCache() {
        return this._entityCache;
    }
    get floodSleepThreshold() {
        return this._floodSleepThreshold;
    }
    set floodSleepThreshold(value) {
        this._floodSleepThreshold = Math.min(value || 0, 24 * 60 * 60);
    }
    set maxConcurrentDownloads(value) {
        this._maxConcurrentDownloads = value;
    }
    // region connecting
    async _initSession() {
        await this.session.load();
        if (!this.session.serverAddress) {
            this.session.testServers = this._testServers;
            const dcId = this._testServers
                ? TEST_DEFAULT_DC_ID
                : PROD_DEFAULT_DC_ID;
            const ipv4Table = this._testServers ? exports.TEST_DC_IPV4 : exports.PROD_DC_IPV4;
            const ipv6Table = this._testServers ? exports.TEST_DC_IPV6 : exports.PROD_DC_IPV6;
            this.session.setDC(dcId, this._useIPV6 ? ipv6Table[dcId] : ipv4Table[dcId], DC_PORT);
        }
        else {
            // Best-effort environment check: infer the session's environment from its
            // saved DC IP and warn if it disagrees with `clientParams.testServers`.
            // We can't do better without persisting the flag, and we don't want to
            // change the on-disk session format.
            const sessionEnv = inferSessionEnv(this.session.serverAddress);
            if (sessionEnv !== undefined && sessionEnv !== this._testServers) {
                this._log.warn(`testServers mismatch: client constructed with testServers=${this._testServers}, ` +
                    `but the session's saved address (${this.session.serverAddress}) looks like ` +
                    `${sessionEnv ? "test" : "production"}. Sessions are not portable between ` +
                    `environments — use a separate session for each.`);
            }
            this.session.testServers = this._testServers;
            this._useIPV6 = this.session.serverAddress.includes(":");
        }
        if (this.networkSocket.isWebSocket) {
            if (!this.session.serverAddress.endsWith(".web.telegram.org")) {
                const address = webSocketDcAddress(this.session.dcId);
                if (address) {
                    this.session.setDC(this.session.dcId, address, DC_PORT);
                }
            }
        }
        else if (this.session.serverAddress.endsWith(".web.telegram.org")) {
            const ipv4Table = this._testServers ? exports.TEST_DC_IPV4 : exports.PROD_DC_IPV4;
            const ipv6Table = this._testServers ? exports.TEST_DC_IPV6 : exports.PROD_DC_IPV6;
            const ip = (this._useIPV6 ? ipv6Table : ipv4Table)[this.session.dcId];
            if (ip) {
                this.session.setDC(this.session.dcId, ip, DC_PORT);
            }
        }
    }
    get connected() {
        return this._sender && this._sender.isConnected();
    }
    async disconnect() {
        await this._disconnect();
        await this._media.purge();
        await this._network.purge();
        this._teardownUpdateState();
    }
    /** @hidden */
    _teardownUpdateState() {
        for (const [timer] of this._ALBUMS.values()) {
            clearTimeout(timer);
        }
        this._ALBUMS.clear();
        this.updateManager.stop();
        for (const [builder] of this._eventBuilders) {
            builder.resolved = false;
        }
    }
    get disconnected() {
        return !this._sender || this._sender._disconnected;
    }
    async _disconnect() {
        var _a;
        this._loopStarted = false;
        await ((_a = this._sender) === null || _a === void 0 ? void 0 : _a.disconnect());
    }
    /**
     * Disconnects all senders and removes all handlers
     * Disconnect is safer as it will not remove your event handlers
     */
    async destroy() {
        this._destroyed = true;
        await this.disconnect();
        await this._media.close();
        await this._network.close();
        this._eventBuilders = [];
    }
    /** @hidden */
    async _authKeyCallback(authKey, dcId) {
        this.session.setAuthKey(authKey, dcId);
        await this.session.save();
    }
    async _connectSender(sender, dcId, connection, mediaCluster = false) {
        var _a;
        const useMediaCluster = mediaCluster && !!sender.authKey.getKey();
        if (!connection) {
            const dc = await this.getDC(dcId, useMediaCluster);
            connection = new this._connection({
                ip: dc.ipAddress,
                port: dc.port,
                dcId: dcId,
                loggers: this._log,
                proxy: this._proxy,
                socket: this.networkSocket,
                keepAliveInterval: this._keepAliveInterval,
                testServers: this._testServers,
            });
        }
        try {
            const needAuth = this.session.dcId !== dcId && !sender._authenticated;
            let innerQuery;
            if (needAuth) {
                this._log.info(`Exporting authorization for data center ${dcId} with layer ${registry_1.LAYER}`);
                const auth = await this.invoke(new tl_1.Api.auth.ExportAuthorization({ dcId: dcId }));
                innerQuery = new tl_1.Api.auth.ImportAuthorization({
                    id: auth.id,
                    bytes: auth.bytes,
                });
            }
            else {
                innerQuery = new tl_1.Api.help.GetConfig();
            }
            await sender.connect(connection, false);
            const initConn = new tl_1.Api.InitConnection({
                apiId: this._initRequest.apiId,
                deviceModel: this._initRequest.deviceModel,
                systemVersion: this._initRequest.systemVersion,
                appVersion: this._initRequest.appVersion,
                langCode: this._initRequest.langCode,
                langPack: this._initRequest.langPack,
                systemLangCode: this._initRequest.systemLangCode,
                proxy: this._initRequest.proxy,
                query: innerQuery,
            });
            await sender.send(new tl_1.Api.InvokeWithLayer({ layer: registry_1.LAYER, query: initConn }));
            sender._authenticated = true;
            sender._needsInitConnection = false;
            return sender;
        }
        catch (err) {
            if (err.errorMessage === "DC_ID_INVALID") {
                sender._authenticated = true;
                sender.userDisconnected = false;
                return sender;
            }
            const failKey = `${dcId}:${useMediaCluster}`;
            this._dcConnectFailures.set(failKey, ((_a = this._dcConnectFailures.get(failKey)) !== null && _a !== void 0 ? _a : 0) + 1);
            sender.disconnect().catch(() => { });
            throw err;
        }
    }
    /** @hidden */
    _makeSender(dcId, onBreak, authKey, autoReconnect = true, tempBinding) {
        return new network_1.MTProtoSender(authKey !== null && authKey !== void 0 ? authKey : this.session.getAuthKey(dcId), {
            logger: this._log,
            dcId,
            retries: this._connectionRetries,
            delay: this._retryDelay,
            autoReconnect: autoReconnect && this._autoReconnect,
            connectTimeout: this._timeout,
            authKeyCallback: this._authKeyCallback.bind(this),
            isMainSender: false,
            onConnectionBreak: onBreak,
            client: this,
            securityChecks: this._securityChecks,
            reconnectRetries: this._reconnectRetries,
            dcenter: this._dcenters.get(dcId),
            tempBinding,
        });
    }
    getSender(dcId) {
        return dcId
            ? this._network.getSession(dcId).ensureConnected()
            : Promise.resolve(this._sender);
    }
    _leaseSender(dcId) {
        return dcId
            ? this._network.lease(dcId)
            : Promise.resolve({ sender: this._sender, release: () => { } });
    }
    // endregion
    async getDC(dcId, download) {
        throw new Error("Cannot be called from here!");
    }
    invoke(request) {
        throw new Error("Cannot be called from here!");
    }
    setLogLevel(level) {
        this._log.setLevel(level);
    }
    get logger() {
        return this._log;
    }
    /**
     * Custom error handler for the client
     * @example
     * ```ts
     * client.onError = async (error)=>{
     *         console.log("error is",error)
     *     }
     * ```
     */
    set onError(handler) {
        this._errorHandler = async (error) => {
            try {
                await handler(error);
            }
            catch (e) {
                e.message = `Error ${e.message} thrown while handling top-level error: ${error.message}`;
                this._log.error(e.message, e);
            }
        };
    }
}
exports.TelegramBaseClient = TelegramBaseClient;
