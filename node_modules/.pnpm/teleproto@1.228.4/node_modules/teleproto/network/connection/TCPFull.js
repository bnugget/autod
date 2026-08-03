"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionTCPFull = exports.FullPacketCodec = void 0;
const Connection_1 = require("./Connection");
const Helpers_1 = require("../../Helpers");
const errors_1 = require("../../errors");
class FullPacketCodec extends Connection_1.PacketCodec {
    constructor(connection) {
        super(connection);
        this._sendCounter = 0; // Telegram will ignore us otherwise
    }
    encodePacket(data) {
        // https://core.telegram.org/mtproto#tcp-transport
        // total length, sequence number, packet and checksum (CRC32)
        const length = data.length + 12;
        const e = Buffer.alloc(8);
        e.writeInt32LE(length, 0);
        e.writeInt32LE(this._sendCounter, 4);
        data = Buffer.concat([e, data]);
        const crc = Buffer.alloc(4);
        crc.writeUInt32LE((0, Helpers_1.crc32)(data), 0);
        this._sendCounter += 1;
        return Buffer.concat([data, crc]);
    }
    /**
     *
     * @param reader {PacketReader}
     * @returns {Promise<*>}
     */
    async readPacket(reader) {
        const lenBuf = await reader.readExactly(4);
        if (lenBuf === undefined) {
            // Return empty buffer in case of issue
            return Buffer.alloc(0);
        }
        const packetLen = lenBuf.readInt32LE(0);
        if (packetLen < 0) {
            throw new errors_1.InvalidBufferError(lenBuf);
        }
        const seqBuf = await reader.readExactly(4);
        let body = await reader.readExactly(packetLen - 8);
        const checksum = body.slice(-4).readUInt32LE(0);
        body = body.slice(0, -4);
        const validChecksum = (0, Helpers_1.crc32)(Buffer.concat([lenBuf, seqBuf, body]));
        if (!(validChecksum === checksum)) {
            throw new errors_1.InvalidChecksumError(checksum, validChecksum);
        }
        return body;
    }
}
exports.FullPacketCodec = FullPacketCodec;
class ConnectionTCPFull extends Connection_1.Connection {
    constructor() {
        super(...arguments);
        this.PacketCodecClass = FullPacketCodec;
    }
}
exports.ConnectionTCPFull = ConnectionTCPFull;
