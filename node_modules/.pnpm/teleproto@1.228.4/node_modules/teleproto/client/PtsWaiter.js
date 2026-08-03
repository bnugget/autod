"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PtsWaiter = exports.WAIT_FOR_SKIPPED_TIMEOUT_MS = void 0;
exports.WAIT_FOR_SKIPPED_TIMEOUT_MS = 1000;
class PtsWaiter {
    constructor(host) {
        this.host = host;
        this.good = 0;
        this.last = 0;
        this.count = 0;
        this.requestingFlag = false;
        this.waitingForSkipped = false;
        this.waitingForShortPoll = false;
        this.applyingSkippedDepth = 0;
        this.skippedKey = 0;
        this.queue = [];
    }
    inited() {
        return this.good > 0;
    }
    current() {
        return this.good;
    }
    init(pts) {
        this.good = pts;
        this.last = pts;
        this.count = pts;
        this.clearSkippedUpdates();
    }
    requesting() {
        return this.requestingFlag;
    }
    setRequesting(value) {
        this.requestingFlag = value;
        if (value)
            this.clearSkippedUpdates();
    }
    isWaitingForSkipped() {
        return this.waitingForSkipped;
    }
    isWaitingForShortPoll() {
        return this.waitingForShortPoll;
    }
    setWaitingForSkipped(ms) {
        if (ms >= 0) {
            this.waitingForSkipped = true;
            this.host.onWaitForSkipped(ms);
        }
        else {
            this.waitingForSkipped = false;
            this.checkForWaiting();
        }
    }
    setWaitingForShortPoll(ms) {
        if (ms >= 0) {
            this.waitingForShortPoll = true;
            this.host.onWaitForShortPoll(ms);
        }
        else {
            this.waitingForShortPoll = false;
            this.checkForWaiting();
        }
    }
    updated(pts, count, payload) {
        if (this.requestingFlag || this.applyingSkippedDepth > 0) {
            return true;
        }
        if (count > 0 && pts <= this.good) {
            return false;
        }
        if (this.check(pts, count)) {
            return true;
        }
        this.enqueue(pts, payload);
        return false;
    }
    updateAndApply(pts, count, payload, applyUpdate, applyUpdates) {
        if (!this.updated(pts, count, payload))
            return false;
        if (!this.waitingForSkipped || this.queue.length === 0) {
            if (payload.tag === "update" && payload.update)
                applyUpdate(payload.update);
            else if (payload.tag === "updates" && payload.updates)
                applyUpdates(payload.updates);
            return true;
        }
        this.enqueue(pts, payload);
        this.applySkippedUpdates(applyUpdate, applyUpdates);
        return true;
    }
    applySkippedUpdates(applyUpdate, applyUpdates) {
        if (!this.waitingForSkipped)
            return;
        this.setWaitingForSkipped(-1);
        if (this.queue.length === 0)
            return;
        this.applyingSkippedDepth++;
        try {
            for (const entry of this.queue) {
                if (entry.tag === "update" && entry.update)
                    applyUpdate(entry.update);
                else if (entry.tag === "updates" && entry.updates)
                    applyUpdates(entry.updates);
            }
        }
        finally {
            this.applyingSkippedDepth--;
            this.clearSkippedUpdates();
        }
    }
    clearSkippedUpdates() {
        this.queue.length = 0;
    }
    check(pts, count) {
        if (!this.inited()) {
            this.init(pts);
            return true;
        }
        this.last = Math.max(this.last, pts);
        this.count += count;
        if (this.last === this.count) {
            this.good = this.last;
            return true;
        }
        if (this.last < this.count) {
            this.setWaitingForSkipped(1);
            return false;
        }
        this.setWaitingForSkipped(exports.WAIT_FOR_SKIPPED_TIMEOUT_MS);
        return false;
    }
    enqueue(pts, payload) {
        const entry = Object.assign({ pts, tieBreaker: ++this.skippedKey }, payload);
        const idx = this.lowerBoundOf(entry);
        this.queue.splice(idx, 0, entry);
    }
    lowerBoundOf(entry) {
        let lo = 0;
        let hi = this.queue.length;
        while (lo < hi) {
            const mid = (lo + hi) >>> 1;
            const cur = this.queue[mid];
            const lt = cur.pts < entry.pts ||
                (cur.pts === entry.pts && cur.tieBreaker < entry.tieBreaker);
            if (lt)
                lo = mid + 1;
            else
                hi = mid;
        }
        return lo;
    }
    checkForWaiting() {
        if (!this.waitingForSkipped && !this.waitingForShortPoll) {
            this.host.onWaitForSkipped(-1);
        }
    }
}
exports.PtsWaiter = PtsWaiter;
