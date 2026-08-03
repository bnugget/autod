import { Connection } from "../network";
import { Session } from "../sessions";
import { Logger } from "../extensions";
import type { SocketFactory } from "../extensions/SocketInterface";
import { Api } from "../tl";
import type { AuthKey } from "../crypto/AuthKey";
import { EntityCache } from "../entityCache";
import type { EntityCacheOptions } from "../entityCache";
import type { ParseInterface } from "./messageParse";
import type { EventBuilder } from "../events/common";
import { MTProtoSender } from "../network";
import { DcenterRegistry } from "../network/Dcenter";
import { Network } from "../network/Network";
import type { SessionLease } from "../network/Network";
import { MediaScheduler, MediaSchedulerOptions } from "../network/MediaScheduler";
import { ProxyInterface } from "../network/connection/TCPMTProxy";
import { LogLevel } from "../extensions/Logger";
import Deferred from "../extensions/Deferred";
import { UpdateManager } from "./UpdateManager";
export declare const PROD_DC_IPV4: {
    readonly [id: number]: string;
};
export declare const PROD_DC_IPV6: {
    readonly [id: number]: string;
};
export declare const TEST_DC_IPV4: {
    readonly [id: number]: string;
};
export declare const TEST_DC_IPV6: {
    readonly [id: number]: string;
};
export declare const WEBSOCKET_DC_HOSTS: {
    readonly [id: number]: string;
};
export declare function webSocketDcAddress(dcId: number, mediaCluster?: boolean): string | undefined;
/**
 * Interface for creating a new client.
 * All of these have a default value and you should only change those if you know what you are doing.
 */
export interface TelegramClientParams {
    /** The connection instance to be used when creating a new connection to the servers. It must be a type.<br/>
    * Defaults to {@link ConnectionTCPFull}.
     */
    connection?: typeof Connection;
    /**
     * Whether to connect to the servers through IPv6 or not. By default this is false.
     */
    useIPV6?: boolean;
    /**
     * Whether to connect to Telegram's test environment instead of production.
     *
     * When `true`:
     * - The client starts from test DC2 (`149.154.167.40`). DC routing follows the same
     *   path as production: `help.GetConfig` is the runtime source of truth, with the
     *   built-in test seed table (DC1/DC2/DC3) used as a fallback.
     * - You must use a test phone number of the form `99966<dc><4 digits>`; the login
     *   code is the DC digit repeated 5 times (e.g. `22222` for DC2).
     * - Test sessions are not interchangeable with production sessions.
     *
     * Defaults to `false`.
     */
    testServers?: boolean;
    /**
     * The timeout in seconds for establishing a TCP connection to a DC.
     * An address that exceeds it is closed, the attempt fails fast and the
     * next attempt rotates to an alternative address of that DC.
     */
    timeout?: number;
    /**
     * How many times a request should be retried.<br/>
     * Request are retried when Telegram is having internal issues (due to INTERNAL error or RPC_CALL_FAIL error),<br/>
     * when there is a errors.FloodWaitError less than floodSleepThreshold, or when there's a migrate error.<br/>
     * defaults to 5.
     */
    requestRetries?: number;
    /**
     * How many times the connection should retry, either on the initial connection or when Telegram disconnects us.<br/>
     * May be set to a negative or undefined value for infinite retries, but this is not recommended, since the program can get stuck in an infinite loop.<br/>
     * defaults to 5
     */
    connectionRetries?: number;
    /**
     * How many times to reconnect before giving up. This happens after the initial connection is finished<br/>
     * defaults to infinity
     */
    reconnectRetries?: number;
    /**
     * Proxy configuration for routing all connections through a proxy server.
     *
     * Supports two proxy types:
     * - **MTProxy** (`{ MTProxy: true, ip, port, secret }`) — Telegram's own obfuscated proxy.
     *   Automatically switches the connection to {@link ConnectionTCPMTProxyAbridged}.
     * - **SOCKS4/5** (`{ socksType: 4 | 5, ip, port }`) — general-purpose SOCKS proxy.
     *   SOCKS5 supports optional `username`/`password` authentication.
     *
     * @see {@link ProxyInterface} for detailed type definitions and examples.
     */
    proxy?: ProxyInterface;
    /**
     * How many times we should retry borrowing a sender from another DC when it fails. defaults to 5
     */
    downloadRetries?: number;
    /** The delay in milliseconds to sleep between automatic reconnections. defaults to 1000*/
    retryDelay?: number;
    /**Whether reconnection should be retried connection_retries times automatically if Telegram disconnects us or not. defaults to true */
    autoReconnect?: boolean;
    /** does nothing for now */
    sequentialUpdates?: boolean;
    /** The threshold below which the library should automatically sleep on flood wait and slow mode wait errors (inclusive).<br/>
     *  For instance, if a FloodWaitError for 17s occurs and floodSleepThreshold is 20s, the library will sleep automatically.<br/>
     *  If the error was for 21s, it would raise FloodWaitError instead. defaults to 60 sec.*/
    floodSleepThreshold?: number;
    /**
     * Device model to be sent when creating the initial connection. Defaults to os.type().toString().
     */
    deviceModel?: string;
    /**
     * System version to be sent when creating the initial connection. defaults to os.release().toString() -.
     */
    systemVersion?: string;
    /**
     * App version to be sent when creating the initial connection. Defaults to 1.0.
     */
    appVersion?: string;
    /**
     * Language code to be sent when creating the initial connection. Defaults to 'en'.
     */
    langCode?: string;
    /**
     * System lang code to be sent when creating the initial connection. Defaults to 'en'.
     */
    systemLangCode?: string;
    /**
     * Instance of Logger to use. <br />
     * If a `Logger` is given, it'll be used directly. If nothing is given, the default logger will be used. <br />
     * To create your own Logger make sure you extends teleproto logger {@link Logger} and override `log` method.
     */
    baseLogger?: Logger;
    /**
     * Limits how many downloads happen at the same time.
     */
    maxConcurrentDownloads?: number;
    /**
     * Whether to check for tampering in messages or not.
     */
    securityChecks?: boolean;
    /**
     * What type of network connection to use.
     */
    networkSocket?: SocketFactory;
    /**
     * TCP keep-alive probe interval in milliseconds. Defaults to 30000.
     * Set to 0 to disable keep-alive probes.
     */
    keepAliveInterval?: number;
    /**
     * Callback for handling reCAPTCHA verification.
     * It should return the token obtained after solving the CAPTCHA.
     */
    reCaptchaCallback?: (siteKey: string) => Promise<string>;
    downloadPool?: Partial<MediaSchedulerOptions> & {
        inflightPerDc?: number;
        maxSessions?: number;
        sessions?: number;
        idleTimeoutMs?: number;
        sessionStartupDelayMs?: number;
    };
    /**
     * Bounds the in-memory entity cache (the hot working set of resolved
     * peers; the session remains the storage tier).
     *
     * omitted / `true` - default limit (4096 peers per user/chat segment);
     * `false` - disabled, peers are resolved straight from the session store;
     * `{ max?, ttl? }` - explicit policy, `ttl` in milliseconds, `{ max: 0 }` for an unbounded cache.
     */
    entityCache?: EntityCacheOptions;
}
export declare abstract class TelegramBaseClient<S extends Session = Session> {
    /** The current teleproto version. */
    __version__: string;
    /** @hidden */
    _config?: Api.Config;
    /** @hidden */
    _appConfig?: {
        [key: string]: any;
    };
    /** @hidden */
    _log: Logger;
    /** @hidden */
    _floodSleepThreshold: number;
    session: S;
    apiHash: string;
    apiId: number;
    /** @hidden */
    _requestRetries: number;
    /** @hidden */
    _downloadRetries: number;
    /** @hidden */
    _connectionRetries: number;
    /** @hidden */
    _reconnectRetries: number;
    /** @hidden */
    _retryDelay: number;
    /** @hidden */
    _timeout: number;
    /** @hidden */
    _autoReconnect: boolean;
    /** @hidden */
    _connection: typeof Connection;
    /** @hidden */
    _initRequest: Api.InitConnection;
    /** @hidden */
    _sender?: MTProtoSender;
    /** @hidden */
    _floodWaitedRequests: any;
    /** @hidden */
    _bot?: boolean;
    /** @hidden */
    _useIPV6: boolean;
    /** @hidden */
    _testServers: boolean;
    /** @hidden */
    _selfInputPeer?: Api.InputPeerUser;
    /** @hidden */
    _errorHandler?: (error: Error) => Promise<void>;
    /** @hidden */
    _eventBuilders: [EventBuilder, CallableFunction][];
    /** @hidden */
    _entityCache: EntityCache;
    /** @hidden */
    _lastRequest?: number;
    /**
     * Epoch ms of the last message decrypted on ANY session. Distinguishes a
     * genuinely dead main connection from a ping that merely timed out because
     * the single JS thread was busy decrypting media — if data is still
     * arriving, the stack is alive and a ping hiccup must not force a reconnect.
     * @hidden
     */
    _lastReceivedAt: number;
    /** @hidden */
    _parseMode?: ParseInterface;
    /** @hidden */
    _reCaptchaCallback?: (siteKey: string) => Promise<string>;
    /** @hidden */
    _ALBUMS: Map<string, [NodeJS.Timeout, Api.TypeUpdate[]]>;
    /** All MTProto sessions, keyed by ShiftedDcId (tdesktop's Instance). @hidden */
    _network: Network;
    /**
     * Connect failures per `"dcId:mediaCluster"`, used to rotate through a
     * DC's published addresses — one dead IP must not blackhole the DC.
     * @hidden
     */
    _dcConnectFailures: Map<string, number>;
    /** File-part scheduler shared by downloads and uploads. @hidden */
    _media: MediaScheduler;
    /**
     * Shared per-DC state (auth key + server salt), tdesktop's `Dcenter`.
     * Every sender of one DC reads/writes here so fresh sessions start with a
     * valid salt and share one auth key.
     * @hidden
     */
    readonly _dcenters: DcenterRegistry;
    /** @hidden */
    _loopStarted: boolean;
    /** @hidden */
    _reconnecting: boolean;
    /** @hidden */
    _destroyed: boolean;
    /** @hidden */
    _isSwitchingDc: boolean;
    /** @hidden */
    protected _proxy?: ProxyInterface;
    /**
     * Retained for contract compatibility; concurrency of file transfers is
     * governed by the download pool (MediaScheduler), not this number.
     * @hidden
     */
    _maxConcurrentDownloads: number;
    /** @hidden */
    _securityChecks: boolean;
    networkSocket: SocketFactory;
    /** @hidden */
    _keepAliveInterval?: number;
    _connectedDeferred: Deferred<void>;
    /** Centralised pts/qts/seq tracker and gap recovery driver. */
    updateManager: UpdateManager;
    constructor(session: string | S, apiId: number, apiHash: string, clientParams: TelegramClientParams);
    /**
     * The in-memory entity cache. Exposes `size`, `has`, `delete` and
     * `clear` so stale peers can be invalidated without touching internals.
     * See {@link TelegramClientParams.entityCache} for bounding it.
     */
    get entityCache(): EntityCache;
    get floodSleepThreshold(): number;
    set floodSleepThreshold(value: number);
    set maxConcurrentDownloads(value: number);
    _initSession(): Promise<void>;
    get connected(): boolean | undefined;
    disconnect(): Promise<void>;
    /** @hidden */
    _teardownUpdateState(): void;
    get disconnected(): boolean;
    _disconnect(): Promise<void>;
    /**
     * Disconnects all senders and removes all handlers
     * Disconnect is safer as it will not remove your event handlers
     */
    destroy(): Promise<void>;
    /** @hidden */
    _authKeyCallback(authKey: AuthKey | undefined, dcId: number): Promise<void>;
    _connectSender(sender: MTProtoSender, dcId: number, connection?: Connection, mediaCluster?: boolean): Promise<MTProtoSender>;
    /** @hidden */
    _makeSender(dcId: number, onBreak: (dcId: number) => void, authKey?: AuthKey, autoReconnect?: boolean, tempBinding?: import("../network/MTProtoSender").SenderTempBinding): MTProtoSender;
    getSender(dcId: number): Promise<MTProtoSender>;
    _leaseSender(dcId: number): Promise<SessionLease>;
    getDC(dcId: number, download: boolean): Promise<{
        id: number;
        ipAddress: string;
        port: number;
    }>;
    invoke<R extends Api.AnyRequest>(request: R): Promise<R["__response"]>;
    setLogLevel(level: LogLevel): void;
    get logger(): Logger;
    /**
     * Custom error handler for the client
     * @example
     * ```ts
     * client.onError = async (error)=>{
     *         console.log("error is",error)
     *     }
     * ```
     */
    set onError(handler: (error: Error) => Promise<void>);
}
