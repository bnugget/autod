export interface BalancePolicyOptions {
    partSize: number;
    startWindow: number;
    maxWindow: number;
    startSessions: number;
    maxSessions: number;
    slowRequestMs: number;
    removeAfterTimeouts: number;
    addSessionGateMs: number;
}
export declare const DOWNLOAD_BALANCE: BalancePolicyOptions;
export declare const UPLOAD_BALANCE: BalancePolicyOptions;
export declare class BalancePolicy {
    readonly opts: BalancePolicyOptions;
    private readonly _now;
    private readonly _sessions;
    private _removeTimes;
    private _lastAddAt;
    private _nextId;
    constructor(opts: BalancePolicyOptions, now?: () => number);
    private _fresh;
    private _byId;
    get sessionCount(): number;
    get sessionIds(): number[];
    pick(bytes: number): number;
    start(id: number, bytes: number): {
        wasFull: boolean;
    };
    succeed(id: number, bytes: number, wasFull: boolean, durationMs: number): {
        addedSession: boolean;
        addedId: number;
    };
    fail(id: number, bytes: number): {
        removedId: number;
    };
    private _slow;
    remove(id: number): boolean;
    release(id: number, bytes: number): void;
    get totalRequested(): number;
}
