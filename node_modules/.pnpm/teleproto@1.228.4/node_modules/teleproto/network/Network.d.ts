import { SenderSlot } from "./SenderSlot";
import { Dcenter } from "./Dcenter";
import { ShiftedDcId } from "./core_types";
import type { MTProtoSender } from "./MTProtoSender";
import type { TelegramBaseClient } from "../client/telegramBaseClient";
export interface NetworkOptions {
    idleTimeoutMs: number;
    sessionStartupDelayMs: number;
}
export interface SessionLease {
    sender: MTProtoSender;
    release: () => void;
}
export declare class Network {
    private readonly _client;
    private readonly _opts;
    private readonly _slots;
    private readonly _connectChains;
    private readonly _lastConnectAt;
    private _closed;
    constructor(client: TelegramBaseClient, opts: NetworkOptions);
    dcenter(dcId: number): Dcenter;
    getSession(shiftedDcId: ShiftedDcId): SenderSlot;
    lease(dcId: number): Promise<SessionLease>;
    removeSession(shiftedDcId: ShiftedDcId): void;
    private _makeSlot;
    private _gatedConnect;
    private _onSenderBreak;
    purge(): Promise<void>;
    close(): Promise<void>;
}
