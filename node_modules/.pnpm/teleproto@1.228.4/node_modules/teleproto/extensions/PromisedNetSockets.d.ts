import { ProxyInterface } from "../network/connection/TCPMTProxy";
/**
 * Promise-based TCP socket wrapper used as the network transport layer.
 *
 * When a {@link SocksProxyType} proxy is provided, connections are tunneled
 * through the SOCKS proxy via the `socks` package. MTProxy connections are
 * handled at a higher level by {@link TCPMTProxy} and do not affect this class.
 */
export declare class PromisedNetSockets {
    private client?;
    private closed;
    private chunks;
    private headOffset;
    private available;
    private canRead?;
    private resolveRead;
    private proxy?;
    private keepAliveInterval;
    constructor(proxy?: ProxyInterface, keepAliveInterval?: number);
    readExactly(number: number): Promise<Buffer<ArrayBufferLike>>;
    read(number: number): Promise<Buffer<ArrayBufferLike>>;
    readAll(): Promise<Buffer<ArrayBufferLike>>;
    private _consume;
    /**
     * Creates a new connection
     * @param port
     * @param ip
     * @returns {Promise<void>}
     */
    connect(port: number, ip: string): Promise<unknown>;
    write(data: Buffer): void;
    close(): Promise<void>;
    receive(): Promise<void>;
    toString(): string;
}
