declare class IGE {
    private key;
    private iv;
    constructor(key: Buffer, iv: Buffer);
    private xorBlock;
    encryptIge(plainText: Buffer): Buffer;
    decryptIge(cipherText: Buffer): Buffer;
}
export { IGE };
