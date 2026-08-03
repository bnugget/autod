import { ObfuscatedConnection } from "./Connection";
import { AbridgedPacketCodec } from "./TCPAbridged";
import { Logger } from "../../extensions";
import type { SocketFactory } from "../../extensions/SocketInterface";
interface BasicProxyInterface {
    /** Proxy server IP address. */
    ip: string;
    /** Proxy server port. */
    port: number;
    /** Connection timeout in seconds. Defaults to 5. */
    timeout?: number;
    /** Username for proxy authentication (SOCKS5 only). */
    username?: string;
    /** Password for proxy authentication (SOCKS5 only). */
    password?: string;
}
/**
 * Configuration for Telegram MTProxy connections.
 *
 * MTProxy is Telegram's own proxy protocol that obfuscates traffic to look like
 * regular HTTPS. When used, the client automatically switches to
 * {@link ConnectionTCPMTProxyAbridged} and notifies Telegram about the proxy
 * via `InputClientProxy` in the `InitConnection` request.
 *
 * @example
 * ```ts
 * const client = new TelegramClient(session, apiId, apiHash, {
 *     proxy: {
 *         MTProxy: true,
 *         ip: "178.62.232.110",
 *         port: 443,
 *         secret: "dd0123456789abcdef0123456789abcdef",
 *     },
 * });
 * ```
 */
export type MTProxyType = BasicProxyInterface & {
    /**
     * The proxy secret (hex or base64 encoded). Three formats are accepted:
     * - 16-byte plain secret.
     * - 17 bytes with a leading `dd` byte — random-padding mode.
     * - A leading `ee` byte + 16 bytes of secret + UTF-8 SNI domain bytes —
     *   fake-TLS mode. The connection is wrapped in a spoofed TLS 1.2
     *   handshake and all MTProxy bytes are tunneled inside TLS
     *   application_data records.
     */
    secret: string;
    /** Must be `true` to identify this as an MTProxy configuration. */
    MTProxy: true;
};
/**
 * Configuration for SOCKS4/SOCKS5 proxy connections.
 *
 * SOCKS proxies are handled at the socket level via the `socks` package and
 * work transparently with any connection type. SOCKS5 supports username/
 * password authentication.
 *
 * @example
 * ```ts
 * const client = new TelegramClient(session, apiId, apiHash, {
 *     proxy: {
 *         socksType: 5,
 *         ip: "127.0.0.1",
 *         port: 1080,
 *         username: "user",
 *         password: "pass",
 *     },
 * });
 * ```
 */
export type SocksProxyType = BasicProxyInterface & {
    /** SOCKS protocol version: `4` for SOCKS4 or `5` for SOCKS5. */
    socksType: 4 | 5;
};
/**
 * Union type for all supported proxy configurations. Pass to
 * `TelegramClientParams.proxy` to route all connections through a proxy.
 */
export type ProxyInterface = MTProxyType | SocksProxyType;
interface TCPMTProxyInterfaceParams {
    ip: string;
    port: number;
    dcId: number;
    loggers: Logger;
    proxy: ProxyInterface;
    socket: SocketFactory;
}
/**
 * Generates the MTProxy obfuscation header and wraps every subsequent
 * read/write in AES-CTR. MTProxy derives mirrored CTR streams from the same
 * 64-byte header — bytes 8..56 supply the client→server key/iv, and the
 * reversed copy supplies the server→client side.
 *
 * @internal
 */
declare class MTProxyIO {
    header?: Buffer;
    private readonly stream;
    private readonly packetCodec;
    private readonly secret;
    private readonly dcId;
    private encryptor?;
    private decryptor?;
    constructor(connection: TCPMTProxy);
    initHeader(): Promise<void>;
    read(n: number): Promise<Buffer>;
    readExactly(n: number): Promise<Buffer>;
    write(data: Buffer): void;
}
/**
 * Connection that routes traffic through a Telegram MTProxy server. Connects
 * to the proxy address (not Telegram directly), performs the MTProxy
 * obfuscated handshake, and tunnels MTProto traffic through with AES-CTR
 * encryption. When the secret carries a fake-TLS prefix the underlying
 * socket is first wrapped in a {@link FakeTlsSocket}.
 *
 * Not intended to be used directly — use {@link ConnectionTCPMTProxyAbridged}
 * instead, or pass an {@link MTProxyType} config to `TelegramClientParams.proxy`
 * and the client will select the correct connection class automatically.
 */
export declare class TCPMTProxy extends ObfuscatedConnection {
    ObfuscatedIO: typeof MTProxyIO;
    _secret: Buffer;
    _fakeTlsDomain?: string;
    constructor({ dcId, loggers, proxy, socket, }: TCPMTProxyInterfaceParams);
    _initConn(): Promise<void>;
}
/**
 * MTProxy connection using the Abridged packet codec — automatically selected
 * when `proxy.MTProxy` is `true`.
 */
export declare class ConnectionTCPMTProxyAbridged extends TCPMTProxy {
    PacketCodecClass: typeof AbridgedPacketCodec;
}
export {};
