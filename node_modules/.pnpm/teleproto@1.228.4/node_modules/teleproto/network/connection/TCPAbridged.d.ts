import { Connection, PacketCodec } from "./Connection";
import type { PacketReader } from "../../extensions/SocketInterface";
export declare class AbridgedPacketCodec extends PacketCodec {
    static tag: Buffer<ArrayBuffer>;
    static obfuscateTag: Buffer<ArrayBuffer>;
    private tag;
    obfuscateTag: Buffer;
    constructor(props: any);
    encodePacket(data: Buffer): Buffer<ArrayBuffer>;
    readPacket(reader: PacketReader): Promise<Buffer>;
}
/**
 * This is the mode with the lowest overhead, as it will
 * only require 1 byte if the packet length is less than
 * 508 bytes (127 << 2, which is very common).
 */
export declare class ConnectionTCPAbridged extends Connection {
    PacketCodecClass: typeof AbridgedPacketCodec;
}
