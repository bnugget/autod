"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundedSemaphore = exports.OrderedWriter = void 0;
class OrderedWriter {
    constructor(writer) {
        this.nextIdx = 0;
        this._stash = new Map();
        this._draining = Promise.resolve();
        this._writer = writer;
    }
    async write(idx, data, after) {
        if (idx < this.nextIdx)
            return;
        this._stash.set(idx, data);
        this._draining = this._draining.then(() => this._drain(after));
        await this._draining;
    }
    async _drain(after) {
        while (this._stash.has(this.nextIdx)) {
            const buf = this._stash.get(this.nextIdx);
            this._stash.delete(this.nextIdx);
            // Empty parts still advance nextIdx — otherwise a single zero-byte
            // response (e.g. server-side EOF that's earlier than our advertised
            // size) would freeze the drain and orphan every later part.
            if (buf.length > 0) {
                await this._writer.write(buf);
            }
            this.nextIdx++;
            if (after && buf.length > 0) {
                await after(buf.length);
            }
        }
    }
    reset(toIdx) {
        this.nextIdx = toIdx;
        for (const k of [...this._stash.keys()]) {
            if (k < toIdx)
                this._stash.delete(k);
        }
    }
}
exports.OrderedWriter = OrderedWriter;
class BoundedSemaphore {
    constructor(capacity) {
        this._waiters = [];
        if (capacity < 1)
            throw new Error("BoundedSemaphore capacity must be >= 1");
        this._available = capacity;
    }
    async acquire() {
        if (this._available > 0) {
            this._available--;
            return;
        }
        await new Promise((resolve) => this._waiters.push(resolve));
    }
    release() {
        const next = this._waiters.shift();
        if (next) {
            next(); // slot transferred, counter untouched
            return;
        }
        this._available++;
    }
}
exports.BoundedSemaphore = BoundedSemaphore;
