import { Logger } from "../../extensions";
import type { PacketReader, SocketFactory, SocketInterface } from "../../extensions/SocketInterface";
import { AbridgedPacketCodec } from "./TCPAbridged";
import { FullPacketCodec } from "./TCPFull";
import { ProxyInterface } from "./TCPMTProxy";
interface ConnectionInterfaceParams {
    ip: string;
    port: number;
    dcId: number;
    loggers: Logger;
    proxy?: ProxyInterface;
    socket: SocketFactory;
    keepAliveInterval?: number;
    testServers?: boolean;
}
/**
 * Thin transport pipe: codec framing over one socket.
 *
 * There are deliberately no internal loops, queues or buffers here the
 * sender owns exactly one reader and one writer, so `send()` and `recv()`
 * talk to the codec and socket directly. Transport-level failures (including
 * MTProto transport errors such as -404) propagate to the caller as thrown
 * errors from these two methods.
 */
declare class Connection {
    PacketCodecClass?: typeof AbridgedPacketCodec | typeof FullPacketCodec;
    readonly _ip: string;
    readonly _port: number;
    _dcId: number;
    _log: Logger;
    _proxy?: ProxyInterface;
    _keepAliveInterval?: number;
    _testServers?: boolean;
    _connected: boolean;
    protected _codec: any;
    protected _obfuscation: any;
    socket: SocketInterface;
    constructor({ ip, port, dcId, loggers, proxy, socket, keepAliveInterval, testServers, }: ConnectionInterfaceParams);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    send(data: Buffer): Promise<void>;
    recv(): Promise<any>;
    isConnected(): boolean;
    _initConn(): Promise<void>;
    _send(data: Buffer): Promise<void>;
    _recv(): Promise<any>;
    toString(): string;
}
declare class ObfuscatedConnection extends Connection {
    ObfuscatedIO: any;
    _initConn(): Promise<void>;
    _send(data: Buffer): Promise<void>;
    _recv(): Promise<any>;
}
declare class PacketCodec {
    private _conn;
    constructor(connection: Connection);
    encodePacket(data: Buffer): void;
    readPacket(reader: PacketReader): Promise<Buffer>;
}
export { Connection, PacketCodec, ObfuscatedConnection };
