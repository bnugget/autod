"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenderSlot = exports.SlotRemovedError = void 0;
/**
 * Thrown by long-running waiters when their slot is taken out of service
 * (DC purge, auth key broken, pool shutdown). Callers should treat it as a
 * retry signal — getting a fresh slot will succeed.
 */
class SlotRemovedError extends Error {
    constructor(reason) {
        super(`sender slot removed: ${reason}`);
        this.name = "SlotRemovedError";
    }
}
exports.SlotRemovedError = SlotRemovedError;
/**
 * Wraps a single MTProtoSender with on-demand (re)connect, an in-flight
 * counter for idle-timeout bookkeeping, and a one-shot "this slot is dead"
 * signal that pending requests can race against.
 */
class SenderSlot {
    constructor(opts) {
        this._deathListeners = new Set();
        this._active = 0;
        this.dcId = opts.dcId;
        this._opts = opts;
    }
    get state() {
        var _a;
        if (this._dead)
            return "dead";
        if ((_a = this._sender) === null || _a === void 0 ? void 0 : _a.isConnected())
            return "ready";
        if (this._connectPromise)
            return "connecting";
        return "idle";
    }
    get sender() {
        return this._sender;
    }
    /**
     * Resolve to a connected sender. Concurrent callers share the same
     * connect attempt; if the slot has been marked dead, rejects with
     * {@link SlotRemovedError}.
     */
    async ensureConnected() {
        if (this._dead) {
            throw new SlotRemovedError(this._dead);
        }
        if (this._sender && this._sender.isConnected()) {
            return this._sender;
        }
        if (this._connectPromise) {
            return this._connectPromise;
        }
        this._clearIdle();
        this._connectPromise = (async () => {
            try {
                const sender = await this._opts.connect(this);
                if (this._dead) {
                    try {
                        await sender.disconnect();
                    }
                    catch (_a) { }
                    throw new SlotRemovedError(this._dead);
                }
                this._sender = sender;
                if (this._active === 0)
                    this._armIdle();
                return sender;
            }
            catch (err) {
                if (this._dead) {
                    if (!(err instanceof SlotRemovedError)) {
                        throw new SlotRemovedError(this._dead);
                    }
                    throw err;
                }
                throw err;
            }
            finally {
                this._connectPromise = undefined;
            }
        })();
        return this._connectPromise;
    }
    /** Increment the in-flight counter and pause the idle timer. */
    enter() {
        this._active++;
        this._clearIdle();
    }
    /** Decrement the in-flight counter and re-arm the idle timer when idle. */
    leave() {
        if (this._active > 0)
            this._active--;
        if (this._active === 0 && this.state === "ready")
            this._armIdle();
    }
    /** Subscribe to a one-shot "this slot died" callback. */
    onDeath(listener) {
        if (this._dead) {
            listener(this._dead);
            return () => { };
        }
        this._deathListeners.add(listener);
        return () => this._deathListeners.delete(listener);
    }
    /**
     * Permanently retire this slot. Idempotent — repeat calls return
     * immediately. The underlying sender is disconnected on a best-effort
     * basis; failures are swallowed because the slot is about to be GC'd.
     */
    async markDead(reason) {
        if (this._dead)
            return;
        this._dead = reason;
        this._clearIdle();
        for (const listener of this._deathListeners) {
            try {
                listener(reason);
            }
            catch (_a) { }
        }
        this._deathListeners.clear();
        const s = this._sender;
        this._sender = undefined;
        if (s) {
            try {
                await s.disconnect();
            }
            catch (_b) { }
        }
    }
    _clearIdle() {
        if (this._idleTimer) {
            clearTimeout(this._idleTimer);
            this._idleTimer = undefined;
        }
    }
    _armIdle() {
        if (this.state !== "ready")
            return;
        this._clearIdle();
        if (this._opts.idleTimeoutMs <= 0)
            return;
        this._idleTimer = setTimeout(() => {
            this._idleTimer = undefined;
            this._idleTick();
        }, this._opts.idleTimeoutMs);
    }
    _idleTick() {
        if (this.state !== "ready" || this._active > 0)
            return;
        if (this._sender && this._sender.hasPendingWork) {
            this._armIdle();
            return;
        }
        const s = this._sender;
        this._sender = undefined;
        if (s) {
            s.disconnect().catch(() => { });
        }
    }
}
exports.SenderSlot = SenderSlot;
