"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTR = void 0;
const node_crypto_1 = require("node:crypto");
class CTR {
    constructor(key, iv) {
        if (!Buffer.isBuffer(key) || !Buffer.isBuffer(iv) || iv.length !== 16) {
            throw new Error("Key and iv need to be a buffer");
        }
        this.cipher = (0, node_crypto_1.createCipheriv)("AES-256-CTR", key, iv);
    }
    encrypt(data) {
        return Buffer.from(this.cipher.update(data));
    }
}
exports.CTR = CTR;
