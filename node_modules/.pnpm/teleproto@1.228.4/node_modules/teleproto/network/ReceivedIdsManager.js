"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceivedIdsManager = void 0;
const ID_BUFFER_SIZE = 400;
class ReceivedIdsManager {
    constructor() {
        this.ids = [];
    }
    registerMsgId(msgId) {
        const idx = this.lowerBound(msgId);
        if (idx < this.ids.length && this.ids[idx].eq(msgId)) {
            return "duplicate";
        }
        if (this.ids.length >= ID_BUFFER_SIZE && msgId.lesser(this.ids[0])) {
            return "tooOld";
        }
        this.ids.splice(idx, 0, msgId);
        return "success";
    }
    shrink() {
        while (this.ids.length > ID_BUFFER_SIZE)
            this.ids.shift();
    }
    clear() {
        this.ids.length = 0;
    }
    lowerBound(msgId) {
        let lo = 0;
        let hi = this.ids.length;
        while (lo < hi) {
            const mid = (lo + hi) >>> 1;
            if (this.ids[mid].lesser(msgId))
                lo = mid + 1;
            else
                hi = mid;
        }
        return lo;
    }
}
exports.ReceivedIdsManager = ReceivedIdsManager;
