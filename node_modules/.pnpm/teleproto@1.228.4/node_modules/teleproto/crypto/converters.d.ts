/**
 * Uint32Array -> ArrayBuffer (little-endian OS)
 * Writes each uint32 in big-endian byte order for stable, platform-independent representation.
 */
export declare function i2abLow(buf: Uint32Array): ArrayBufferLike;
/**
 * Uint32Array -> ArrayBuffer (big-endian OS)
 * Direct buffer view is already in the desired memory layout.
 */
export declare function i2abBig(buf: Uint32Array): ArrayBufferLike;
/**
 * ArrayBuffer -> Uint32Array (little-endian OS)
 * Reads big-endian bytes into uint32 values.
 */
export declare function ab2iLow(ab: ArrayBufferLike | Uint8Array): Uint32Array;
/**
 * ArrayBuffer -> Uint32Array (big-endian OS)
 */
export declare function ab2iBig(ab: ArrayBufferLike | Uint8Array): Uint32Array;
/** Runtime endianness check (true if big-endian). */
export declare const isBigEndian: boolean;
export declare const i2ab: typeof i2abBig;
export declare const ab2i: typeof ab2iBig;
