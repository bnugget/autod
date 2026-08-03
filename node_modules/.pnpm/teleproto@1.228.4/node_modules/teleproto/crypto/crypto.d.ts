export declare class CTR {
    private cipher;
    private decipher;
    constructor(key: Buffer, iv: Buffer, algorithm: string);
    update(plainText: Buffer): any;
    encrypt(plainText: Buffer): any;
    decrypt(cipherText: Buffer): any;
}
export declare function createDecipher(algorithm: string, key: Buffer, iv: Buffer): CTR;
export declare function createCipher(algorithm: string, key: Buffer, iv: Buffer): CTR;
export declare function randomBytes(count: number): NonSharedBuffer;
export declare class Hash {
    private readonly hash;
    constructor(algorithm: string);
    update(data: Buffer): void;
    digest(): any;
}
export declare function pbkdf2Sync(password: any, salt: any, iterations: any, keylen: any, digest: any): NonSharedBuffer;
export declare function createHash(algorithm: string): Hash;
