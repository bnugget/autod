import { MTProtoSender } from "./MTProtoSender";
import { Logger } from "../extensions";
export type SenderSlotState = "idle" | "connecting" | "ready" | "dead";
export type SenderSlotDeathReason = "auth-broken" | "manual" | "pool-closed";
export interface SenderSlotOptions {
    dcId: number;
    /**
     * After this many milliseconds with zero in-flight work the slot will
     * disconnect its underlying sender. The next {@link SenderSlot.ensureConnected}
     * call will transparently reconnect.
     */
    idleTimeoutMs: number;
    log: Logger;
    connect: (slot: SenderSlot) => Promise<MTProtoSender>;
}
/**
 * Thrown by long-running waiters when their slot is taken out of service
 * (DC purge, auth key broken, pool shutdown). Callers should treat it as a
 * retry signal — getting a fresh slot will succeed.
 */
export declare class SlotRemovedError extends Error {
    constructor(reason: SenderSlotDeathReason);
}
/**
 * Wraps a single MTProtoSender with on-demand (re)connect, an in-flight
 * counter for idle-timeout bookkeeping, and a one-shot "this slot is dead"
 * signal that pending requests can race against.
 */
export declare class SenderSlot {
    readonly dcId: number;
    private _dead?;
    private _sender?;
    private _connectPromise?;
    private _idleTimer?;
    private _deathListeners;
    private _active;
    private readonly _opts;
    constructor(opts: SenderSlotOptions);
    get state(): SenderSlotState;
    get sender(): MTProtoSender | undefined;
    /**
     * Resolve to a connected sender. Concurrent callers share the same
     * connect attempt; if the slot has been marked dead, rejects with
     * {@link SlotRemovedError}.
     */
    ensureConnected(): Promise<MTProtoSender>;
    /** Increment the in-flight counter and pause the idle timer. */
    enter(): void;
    /** Decrement the in-flight counter and re-arm the idle timer when idle. */
    leave(): void;
    /** Subscribe to a one-shot "this slot died" callback. */
    onDeath(listener: (reason: SenderSlotDeathReason) => void): () => void;
    /**
     * Permanently retire this slot. Idempotent — repeat calls return
     * immediately. The underlying sender is disconnected on a best-effort
     * basis; failures are swallowed because the slot is about to be GC'd.
     */
    markDead(reason: SenderSlotDeathReason): Promise<void>;
    private _clearIdle;
    private _armIdle;
    private _idleTick;
}
