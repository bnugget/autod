import bigInt from "big-integer";
import type { AuthKey } from "../crypto/AuthKey";
import { TLMessage } from "../tl/core";
import type { BinaryWriter } from "../extensions";
export declare class MTProtoState {
    private readonly authKey?;
    private _log;
    timeOffset: number;
    salt: bigInt.BigInteger;
    private id;
    _sequence: number;
    private _lastMsgId;
    private receivedIds;
    private securityChecks;
    constructor(authKey?: AuthKey, loggers?: any, securityChecks?: boolean);
    get sessionId(): bigInt.BigInteger;
    reset(): void;
    /**
     * Calculate the key based on Telegram guidelines, specifying whether it's the client or not
     * @param authKey
     * @param msgKey
     * @param client
     * @returns {{iv: Buffer, key: Buffer}}
     */
    _calcKey(authKey: Buffer, msgKey: Buffer, client: boolean): {
        key: Buffer<ArrayBuffer>;
        iv: Buffer<ArrayBuffer>;
    };
    /**
     * Writes a message containing the given data into buffer.
     * Returns the message id.
     * @param buffer
     * @param data
     * @param contentRelated
     * @param afterId
     */
    writeDataAsMessage(buffer: BinaryWriter, data: Buffer, contentRelated: boolean, afterId?: bigInt.BigInteger, predeterminedMsgId?: bigInt.BigInteger): Promise<bigInt.BigInteger>;
    /**
     * Encrypts the given message data using the current authorization key
     * following MTProto 2.0 guidelines core.telegram.org/mtproto/description.
     * @param data
     */
    encryptMessageData(data: Buffer): Promise<Buffer<ArrayBuffer>>;
    /**
     * Inverse of `encrypt_message_data` for incoming server messages.
     * @param body
     */
    decryptMessageData(body: Buffer): Promise<TLMessage>;
    /**
     * Generates a new unique message ID based on the current
     * time (in ms) since epoch, applying a known time offset.
     * @private
     */
    _getNewMsgId(): bigInt.BigInteger;
    /**
     * Updates the time offset to the correct
     * one given a known valid message ID.
     * @param correctMsgId {BigInteger}
     */
    updateTimeOffset(correctMsgId: bigInt.BigInteger): number;
    /**
     * Generates the next sequence number depending on whether
     * it should be for a content-related query or not.
     * @param contentRelated
     * @private
     */
    _getSeqNo(contentRelated: boolean): number;
}
