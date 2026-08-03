import bigInt from "big-integer";
import { Api } from "../tl";
import { TLMessage } from "../tl/core";
import { Logger } from "../extensions";
import { PendingState } from "../extensions/PendingState";
import { MTProtoState } from "./MTProtoState";
import { Dcenter } from "./Dcenter";
import { RequestState } from "./RequestState";
export interface SenderActions {
    readonly log: Logger;
    /** Requests that were written to the wire and await an answer */
    readonly pendingState: PendingState;
    /** Recently sent acks, resendable on bad_server_salt */
    readonly lastAcks: RequestState[];
    readonly state: MTProtoState;
    readonly dcenter?: Dcenter;
    readonly isMainSender: boolean;
    /** Schedules an acknowledgment for a received message id */
    ack(msgId: bigInt.BigInteger): void;
    /** Appends a service reply to the outgoing queue */
    enqueue(state: RequestState): void;
    /** Puts states back at the head of the queue for resending */
    requeue(states: RequestState[]): void;
    /** The server told us our auth key is unusable */
    onBadAuthKey(shouldSkipForMain: boolean): void;
    /** The server started a new session re-init on the next request */
    markNeedsInitConnection(): void;
    /** Hands an update (or a synthetic gap marker) to the client */
    dispatchUpdate(update: Api.TypeUpdates): void;
}
/**
 * Routes every decrypted MTProto message to its protocol reaction
 * (https://core.telegram.org/mtproto/service_messages)
 */
export declare class MtpDispatcher {
    private readonly sender;
    private _lastSessionUniqueId?;
    private readonly handlers;
    constructor(sender: SenderActions);
    process(message: TLMessage): Promise<void>;
    private popStates;
    private handleRPCResult;
    private handleContainer;
    private handleGzipPacked;
    private handleUpdate;
    private handlePong;
    private handleBadServerSalt;
    private handleBadNotification;
    private handleDetailedInfo;
    private handleNewDetailedInfo;
    private handleNewSessionCreated;
    private handleAck;
    private handleFutureSalts;
    private handleStateForgotten;
    private handleMsgAll;
}
