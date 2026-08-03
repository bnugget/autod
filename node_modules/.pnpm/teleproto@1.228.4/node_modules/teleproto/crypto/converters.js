"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) sanyok12345. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.txt in the project root for details.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ab2i = exports.i2ab = exports.isBigEndian = void 0;
exports.i2abLow = i2abLow;
exports.i2abBig = i2abBig;
exports.ab2iLow = ab2iLow;
exports.ab2iBig = ab2iBig;
/**
 * Uint32Array -> ArrayBuffer (little-endian OS)
 * Writes each uint32 in big-endian byte order for stable, platform-independent representation.
 */
function i2abLow(buf) {
    const out = new Uint8Array(buf.length * 4);
    let o = 0;
    for (let j = 0; j < buf.length; j++) {
        const v = buf[j] >>> 0;
        out[o++] = (v >>> 24) & 0xff;
        out[o++] = (v >>> 16) & 0xff;
        out[o++] = (v >>> 8) & 0xff;
        out[o++] = v & 0xff;
    }
    return out.buffer;
}
/**
 * Uint32Array -> ArrayBuffer (big-endian OS)
 * Direct buffer view is already in the desired memory layout.
 */
function i2abBig(buf) {
    return buf.buffer;
}
/**
 * ArrayBuffer -> Uint32Array (little-endian OS)
 * Reads big-endian bytes into uint32 values.
 */
function ab2iLow(ab) {
    const src = ab instanceof Uint8Array ? ab : new Uint8Array(ab);
    const len = src.length;
    if (len % 4 !== 0)
        throw new RangeError("Byte length must be a multiple of 4");
    const out = new Uint32Array(len / 4);
    for (let i = 0, w = 0; i < len; i += 4) {
        out[w++] =
            ((src[i] << 24) >>> 0) ^
                ((src[i + 1] << 16) >>> 0) ^
                ((src[i + 2] << 8) >>> 0) ^
                (src[i + 3] >>> 0);
    }
    return out;
}
/**
 * ArrayBuffer -> Uint32Array (big-endian OS)
 */
function ab2iBig(ab) {
    return ab instanceof Uint8Array
        ? new Uint32Array(ab.buffer, ab.byteOffset, Math.floor(ab.byteLength / 4))
        : new Uint32Array(ab);
}
/** Runtime endianness check (true if big-endian). */
exports.isBigEndian = new Uint8Array(new Uint32Array([0x01020304]).buffer)[0] === 0x01;
exports.i2ab = exports.isBigEndian ? i2abBig : i2abLow;
exports.ab2i = exports.isBigEndian ? ab2iBig : ab2iLow;
