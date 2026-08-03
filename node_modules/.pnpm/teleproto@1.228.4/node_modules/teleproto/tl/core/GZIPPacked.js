"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GZIPPacked = void 0;
const helpers_1 = require("../runtime/helpers");
const zlib_1 = require("zlib");
class GZIPPacked {
    constructor(data) {
        this.data = data;
        this.CONSTRUCTOR_ID = 0x3072cfa1;
        this.classType = "constructor";
    }
    static async gzipIfSmaller(contentRelated, data) {
        if (contentRelated && data.length > 512) {
            const gzipped = await new GZIPPacked(data).toBytes();
            if (gzipped.length < data.length) {
                return gzipped;
            }
        }
        return data;
    }
    static gzip(input) {
        return Buffer.from(input);
        // TODO this usually makes it faster for large requests
        //return Buffer.from(deflate(input, { level: 9, gzip: true }))
    }
    static ungzip(input) {
        return (0, zlib_1.unzipSync)(input);
    }
    async toBytes() {
        const g = Buffer.alloc(4);
        g.writeUInt32LE(GZIPPacked.CONSTRUCTOR_ID, 0);
        return Buffer.concat([
            g,
            (0, helpers_1.serializeBytes)(await GZIPPacked.gzip(this.data)),
        ]);
    }
    static async read(reader) {
        const constructor = reader.readInt(false);
        if (constructor !== GZIPPacked.CONSTRUCTOR_ID) {
            throw new Error("not equal");
        }
        return GZIPPacked.gzip(reader.tgReadBytes());
    }
    static async fromReader(reader) {
        const data = reader.tgReadBytes();
        return new GZIPPacked(await GZIPPacked.ungzip(data));
    }
}
exports.GZIPPacked = GZIPPacked;
GZIPPacked.CONSTRUCTOR_ID = 0x3072cfa1;
GZIPPacked.classType = "constructor";
