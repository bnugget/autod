import bigInt from "big-integer";
export type RegisterResult = "success" | "duplicate" | "tooOld";
export declare class ReceivedIdsManager {
    private readonly ids;
    registerMsgId(msgId: bigInt.BigInteger): RegisterResult;
    shrink(): void;
    clear(): void;
    private lowerBound;
}
