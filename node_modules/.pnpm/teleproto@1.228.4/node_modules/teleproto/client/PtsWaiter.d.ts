import type { Api } from "../tl";
export declare const WAIT_FOR_SKIPPED_TIMEOUT_MS = 1000;
export type SkippedTag = "update" | "updates";
export interface SkippedEntry {
    pts: number;
    tieBreaker: number;
    tag: SkippedTag;
    update?: Api.TypeUpdate;
    updates?: Api.TypeUpdates;
}
export interface PtsWaiterHost {
    onWaitForSkipped(ms: number): void;
    onWaitForShortPoll(ms: number): void;
}
export declare class PtsWaiter {
    private readonly host;
    private good;
    private last;
    private count;
    private requestingFlag;
    private waitingForSkipped;
    private waitingForShortPoll;
    private applyingSkippedDepth;
    private skippedKey;
    private readonly queue;
    constructor(host: PtsWaiterHost);
    inited(): boolean;
    current(): number;
    init(pts: number): void;
    requesting(): boolean;
    setRequesting(value: boolean): void;
    isWaitingForSkipped(): boolean;
    isWaitingForShortPoll(): boolean;
    setWaitingForSkipped(ms: number): void;
    setWaitingForShortPoll(ms: number): void;
    updated(pts: number, count: number, payload: Omit<SkippedEntry, "pts" | "tieBreaker">): boolean;
    updateAndApply(pts: number, count: number, payload: Omit<SkippedEntry, "pts" | "tieBreaker">, applyUpdate: (update: Api.TypeUpdate) => void, applyUpdates: (updates: Api.TypeUpdates) => void): boolean;
    applySkippedUpdates(applyUpdate: (update: Api.TypeUpdate) => void, applyUpdates: (updates: Api.TypeUpdates) => void): void;
    clearSkippedUpdates(): void;
    private check;
    private enqueue;
    private lowerBoundOf;
    private checkForWaiting;
}
