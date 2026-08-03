"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionTCPAbridged = exports.AbridgedPacketCodec = void 0;
const Helpers_1 = require("../../Helpers");
const Connection_1 = require("./Connection");
const errors_1 = require("../../errors");
const big_integer_1 = __importDefault(require("big-integer"));
const TRANSPORT_ERROR_HEAD = new Set([
    0x6c, // -404
    0x53, // -429
    0x44, // -444
]);
const TRANSPORT_ERROR_CODES = new Set([-404, -429, -444]);
class AbridgedPacketCodec extends Connection_1.PacketCodec {
    constructor(props) {
        super(props);
        this.tag = AbridgedPacketCodec.tag;
        this.obfuscateTag = AbridgedPacketCodec.obfuscateTag;
    }
    encodePacket(data) {
        let length = data.length >> 2;
        let temp;
        if (length < 127) {
            const b = Buffer.alloc(1);
            b.writeUInt8(length, 0);
            temp = b;
        }
        else {
            temp = Buffer.concat([
                Buffer.from("7f", "hex"),
                (0, Helpers_1.readBufferFromBigInt)((0, big_integer_1.default)(length), 3),
            ]);
        }
        return Buffer.concat([temp, data]);
    }
    async readPacket(reader) {
        const readData = await reader.readExactly(1);
        let length = readData[0];
        if (length >= 127) {
            length = Buffer.concat([
                await reader.readExactly(3),
                Buffer.alloc(1),
            ]).readInt32LE(0);
        }
        else if (TRANSPORT_ERROR_HEAD.has(length)) {
            const tail = await reader.readExactly(3);
            const candidate = Buffer.concat([Buffer.from([length]), tail]);
            if (TRANSPORT_ERROR_CODES.has(candidate.readInt32LE(0))) {
                throw new errors_1.InvalidBufferError(candidate);
            }
            const rest = await reader.readExactly((length << 2) - 3);
            return Buffer.concat([tail, rest]);
        }
        return reader.readExactly(length << 2);
    }
}
exports.AbridgedPacketCodec = AbridgedPacketCodec;
AbridgedPacketCodec.tag = Buffer.from("ef", "hex");
AbridgedPacketCodec.obfuscateTag = Buffer.from("efefefef", "hex");
/**
 * This is the mode with the lowest overhead, as it will
 * only require 1 byte if the packet length is less than
 * 508 bytes (127 << 2, which is very common).
 */
class ConnectionTCPAbridged extends Connection_1.Connection {
    constructor() {
        super(...arguments);
        this.PacketCodecClass = AbridgedPacketCodec;
    }
}
exports.ConnectionTCPAbridged = ConnectionTCPAbridged;
