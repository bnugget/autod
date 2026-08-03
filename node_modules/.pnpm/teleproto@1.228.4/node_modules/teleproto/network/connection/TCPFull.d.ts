import { Connection, PacketCodec } from "./Connection";
import type { PacketReader } from "../../extensions/SocketInterface";
export declare class FullPacketCodec extends PacketCodec {
    private _sendCounter;
    constructor(connection: any);
    encodePacket(data: Buffer): Buffer<ArrayBuffer>;
    /**
     *
     * @param reader {PacketReader}
     * @returns {Promise<*>}
     */
    readPacket(reader: PacketReader): Promise<Buffer>;
}
export declare class ConnectionTCPFull extends Connection {
    PacketCodecClass: typeof FullPacketCodec;
}
