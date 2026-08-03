"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hash = exports.CTR = void 0;
exports.createDecipher = createDecipher;
exports.createCipher = createCipher;
exports.randomBytes = randomBytes;
exports.pbkdf2Sync = pbkdf2Sync;
exports.createHash = createHash;
const node_crypto_1 = require("node:crypto");
class CTR {
    constructor(key, iv, algorithm) {
        this.cipher = (0, node_crypto_1.createCipheriv)(algorithm, key, iv);
        this.decipher = (0, node_crypto_1.createDecipheriv)(algorithm, key, iv);
    }
    update(plainText) {
        return this.encrypt(plainText);
    }
    encrypt(plainText) {
        return this.cipher.update(plainText);
    }
    decrypt(cipherText) {
        return this.decipher.update(cipherText);
    }
}
exports.CTR = CTR;
function createDecipher(algorithm, key, iv) {
    if (algorithm.includes("ECB")) {
        throw new Error("ECB mode is not supported");
    }
    return new CTR(key, iv, algorithm);
}
function createCipher(algorithm, key, iv) {
    if (algorithm.includes("ECB")) {
        throw new Error("ECB mode is not supported");
    }
    return new CTR(key, iv, algorithm);
}
function randomBytes(count) {
    return (0, node_crypto_1.randomBytes)(count);
}
class Hash {
    constructor(algorithm) {
        this.hash = (0, node_crypto_1.createHash)(algorithm);
    }
    update(data) {
        this.hash.update(data);
    }
    digest() {
        return this.hash.digest();
    }
}
exports.Hash = Hash;
function pbkdf2Sync(password, salt, iterations, keylen, digest) {
    return (0, node_crypto_1.pbkdf2Sync)(password, salt, iterations, keylen, digest);
}
function createHash(algorithm) {
    return new Hash(algorithm);
}
