import type { ProxyInterface } from "../network/connection/TCPMTProxy";
interface WebSocketLike {
    binaryType: string;
    send(data: Uint8Array): void;
    close(code?: number): void;
    onopen: ((ev?: unknown) => void) | null;
    onmessage: ((ev: {
        data: ArrayBuffer | string;
    }) => void) | null;
    onclose: ((ev?: unknown) => void) | null;
    onerror: ((ev?: unknown) => void) | null;
}
type WebSocketCtor = new (url: string, protocols?: string | string[]) => WebSocketLike;
export declare class PromisedWebSockets {
    static readonly isWebSocket = true;
    static webSocketImpl?: WebSocketCtor;
    private client?;
    private closed;
    private chunks;
    private headOffset;
    private available;
    private canRead?;
    private resolveRead;
    constructor(proxy?: ProxyInterface, _keepAliveInterval?: number);
    readExactly(number: number): Promise<Buffer<ArrayBufferLike>>;
    read(number: number): Promise<Buffer<ArrayBufferLike>>;
    readAll(): Promise<Buffer<ArrayBufferLike>>;
    private _consume;
    connect(port: number, ip: string, testServers?: boolean): Promise<this>;
    write(data: Buffer): void;
    close(): Promise<void>;
    toString(): string;
}
export {};
