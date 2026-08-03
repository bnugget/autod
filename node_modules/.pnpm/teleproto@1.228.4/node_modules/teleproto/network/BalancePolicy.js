"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancePolicy = exports.UPLOAD_BALANCE = exports.DOWNLOAD_BALANCE = void 0;
exports.DOWNLOAD_BALANCE = {
    partSize: 512 * 1024,
    startWindow: 2 * 1024 * 1024,
    maxWindow: 4 * 1024 * 1024,
    startSessions: 2,
    maxSessions: 8,
    slowRequestMs: 8000,
    removeAfterTimeouts: 4,
    addSessionGateMs: 2000,
};
exports.UPLOAD_BALANCE = {
    partSize: 512 * 1024,
    startWindow: 2 * 1024 * 1024,
    maxWindow: 2 * 1024 * 1024,
    startSessions: 4,
    maxSessions: 8,
    slowRequestMs: 8000,
    removeAfterTimeouts: 4,
    addSessionGateMs: 2000,
};
class BalancePolicy {
    constructor(opts, now = Date.now) {
        this._sessions = [];
        this._removeTimes = 0;
        this._nextId = 0;
        this.opts = opts;
        this._now = now;
        this._lastAddAt = now();
        const count = Math.max(1, opts.startSessions || 1);
        for (let i = 0; i < count; i++) {
            this._sessions.push(this._fresh());
        }
    }
    _fresh() {
        return {
            id: this._nextId++,
            requested: 0,
            window: this.opts.startWindow,
            timeouts: 0,
        };
    }
    _byId(id) {
        return this._sessions.find((s) => s.id === id);
    }
    get sessionCount() {
        return this._sessions.length;
    }
    get sessionIds() {
        return this._sessions.map((s) => s.id);
    }
    pick(bytes) {
        let best = -1;
        let bestLoad = Infinity;
        for (const s of this._sessions) {
            if (s.requested + bytes <= s.window && s.requested < bestLoad) {
                best = s.id;
                bestLoad = s.requested;
            }
        }
        return best;
    }
    start(id, bytes) {
        const s = this._byId(id);
        if (!s)
            return { wasFull: false };
        s.requested += bytes;
        return { wasFull: s.requested >= s.window };
    }
    succeed(id, bytes, wasFull, durationMs) {
        const s = this._byId(id);
        if (s) {
            s.requested = Math.max(0, s.requested - bytes);
            s.timeouts = 0;
        }
        if (durationMs >= this.opts.slowRequestMs) {
            this._slow(id);
            return { addedSession: false, addedId: -1 };
        }
        if (!s || !wasFull)
            return { addedSession: false, addedId: -1 };
        const now = this._now();
        if (s.window < this.opts.maxWindow) {
            s.window = Math.min(s.window + this.opts.partSize, this.opts.maxWindow);
            return { addedSession: false, addedId: -1 };
        }
        const gate = this.opts.addSessionGateMs * (this._removeTimes + 1);
        if (this._sessions.length < this.opts.maxSessions &&
            now - this._lastAddAt >= gate) {
            const fresh = this._fresh();
            this._sessions.push(fresh);
            this._lastAddAt = now;
            return { addedSession: true, addedId: fresh.id };
        }
        return { addedSession: false, addedId: -1 };
    }
    fail(id, bytes) {
        const s = this._byId(id);
        if (s)
            s.requested = Math.max(0, s.requested - bytes);
        return this._slow(id);
    }
    _slow(id) {
        const s = this._byId(id);
        if (!s)
            return { removedId: -1 };
        s.timeouts++;
        if (s.timeouts >= this.opts.removeAfterTimeouts &&
            this._sessions.length > 1) {
            this._sessions.splice(this._sessions.indexOf(s), 1);
            this._removeTimes++;
            return { removedId: id };
        }
        return { removedId: -1 };
    }
    remove(id) {
        const s = this._byId(id);
        if (!s || this._sessions.length <= 1)
            return false;
        this._sessions.splice(this._sessions.indexOf(s), 1);
        this._removeTimes++;
        return true;
    }
    release(id, bytes) {
        const s = this._byId(id);
        if (s)
            s.requested = Math.max(0, s.requested - bytes);
    }
    get totalRequested() {
        return this._sessions.reduce((a, s) => a + s.requested, 0);
    }
}
exports.BalancePolicy = BalancePolicy;
