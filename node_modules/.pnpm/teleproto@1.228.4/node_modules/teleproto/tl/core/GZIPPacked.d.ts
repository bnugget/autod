import type { BinaryReader } from "../../extensions";
export declare class GZIPPacked {
    static CONSTRUCTOR_ID: number;
    static classType: string;
    data: Buffer;
    private CONSTRUCTOR_ID;
    private classType;
    constructor(data: Buffer);
    static gzipIfSmaller(contentRelated: boolean, data: Buffer): Promise<Buffer<ArrayBufferLike>>;
    static gzip(input: Buffer): Buffer<ArrayBuffer>;
    static ungzip(input: Buffer): NonSharedBuffer;
    toBytes(): Promise<Buffer<ArrayBuffer>>;
    static read(reader: BinaryReader): Promise<Buffer<ArrayBuffer>>;
    static fromReader(reader: BinaryReader): Promise<GZIPPacked>;
}
