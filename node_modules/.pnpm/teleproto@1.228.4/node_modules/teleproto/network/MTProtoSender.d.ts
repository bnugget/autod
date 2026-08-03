/**
 * MTProto Mobile Protocol sender
 * (https://core.telegram.org/mtproto/description)
 * This class is responsible for wrapping requests into `TLMessage`'s,
 * sending them over the network and receiving them in a safe manner.
 *
 * Automatic reconnection due to temporary network issues is a concern
 * for this class as well, including retry of messages that could not
 * be sent successfully.
 *
 * A new authorization key will be generated on connection if no other
 * key exists yet.
 */
import { AuthKey } from "../crypto/AuthKey";
import { Dcenter } from "./Dcenter";
import { Logger } from "../extensions";
import { Api } from "../tl";
import { RequestState } from "./RequestState";
import { Connection } from "./connection";
import { UpdateConnectionState } from "./UpdateConnectionState";
import type { TelegramClient } from "../client/TelegramClient";
import { PendingState } from "../extensions/PendingState";
export type SenderTempBinding = NonNullable<DEFAULT_OPTIONS["tempBinding"]>;
export type SenderLifecycle = "disconnected" | "connecting" | "connected" | "reconnecting" | "dead";
interface DEFAULT_OPTIONS {
    logger: Logger;
    retries: number;
    reconnectRetries: number;
    delay: number;
    autoReconnect: boolean;
    connectTimeout: number | null;
    authKeyCallback?: (authKey: AuthKey | undefined, dcId: number) => Promise<void> | void;
    updateCallback?: (client: TelegramClient, update: UpdateConnectionState | Api.TypeUpdates) => void;
    autoReconnectCallback?: () => Promise<void> | void;
    isMainSender: boolean;
    dcId: number;
    client: TelegramClient;
    onConnectionBreak?: (dcId: number) => void;
    securityChecks: boolean;
    dcenter?: Dcenter;
    tempBinding?: {
        permAuthKey: AuthKey;
        dcParam: number;
        expiresIn: number;
        onFailed: (err: unknown) => void;
    };
}
export declare class MTProtoSender {
    static DEFAULT_OPTIONS: {
        reconnectRetries: number;
        retries: number;
        delay: number;
        autoReconnect: boolean;
        connectTimeout: null;
        authKeyCallback: undefined;
        updateCallback: undefined;
        autoReconnectCallback: undefined;
        onConnectionBreak: undefined;
        securityChecks: boolean;
    };
    _connection?: Connection;
    private readonly _log;
    private _dcId;
    private readonly _retries;
    private _reconnectRetries;
    private _currentRetries;
    private readonly _delay;
    private _connectTimeout;
    private _autoReconnect;
    private readonly _authKeyCallback?;
    _updateCallback?: DEFAULT_OPTIONS["updateCallback"];
    private readonly _autoReconnectCallback?;
    private readonly _isMainSender;
    private _lifecycle;
    readonly authKey: AuthKey;
    private readonly _state;
    private _queued;
    private _io?;
    private _wakeWriter?;
    _pendingState: PendingState;
    private readonly _pendingAck;
    private readonly _lastAcks;
    private readonly _dispatcher;
    private readonly _client;
    private readonly _onConnectionBreak?;
    _authenticated: boolean;
    _needsInitConnection: boolean;
    private _securityChecks;
    private readonly _dcenter?;
    private readonly _tempBinding?;
    private _tempBound;
    /**
     * @param authKey
     * @param opts
     */
    constructor(authKey: undefined | AuthKey, opts: DEFAULT_OPTIONS);
    set dcId(dcId: number);
    get dcId(): number;
    /**
     * Connects to the specified given connection using the given auth key.
     */
    connect(connection: Connection, force: boolean): Promise<boolean>;
    isConnected(): boolean;
    get lifecycle(): SenderLifecycle;
    get userDisconnected(): boolean;
    set userDisconnected(value: boolean);
    get _userConnected(): boolean;
    get isReconnecting(): boolean;
    get _disconnected(): boolean;
    get isConnecting(): boolean;
    get hasPendingWork(): boolean;
    /**
     * Cleanly disconnects the instance from the network, cancels
     * all pending requests, and closes the send and receive loops.
     */
    disconnect(): Promise<void>;
    /**
     * TCP dial bounded by the client's `timeout` option. Without this an
     * unreachable DC address blocks for the OS default (~75s on macOS),
     * silently burning every request deadline stacked behind the connect.
     */
    private _connectWithTimeout;
    private _failAllPending;
    send(request: Api.AnyRequest): Promise<unknown> | undefined;
    /**
     * Checks if a request is a high-level API request (not MTProto service).
     * API requests extend Request<T> and have a `readResult` method.
     */
    private _isApiRequest;
    addStateToQueue(state: RequestState): void;
    private _buildInitConnection;
    private _enqueue;
    private _requeue;
    private _wakeUp;
    /**
     * Performs the actual connection, retrying, generating the
     * authorization key if necessary, and starting the send and
     * receive loops.
     * @returns {Promise<void>}
     * @private
     */
    _connect(): Promise<void>;
    _disconnect(): Promise<void>;
    private _startIo;
    private _stopIo;
    private _writeLoop;
    private _readLoop;
    _handleBadAuthKey(shouldSkipForMain?: boolean): void;
    reconnect(): void;
    _reconnect(): Promise<void>;
}
export {};
