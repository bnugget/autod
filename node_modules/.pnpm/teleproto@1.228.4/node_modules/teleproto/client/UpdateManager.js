"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManager = void 0;
const tl_1 = require("../tl");
const utils = __importStar(require("../Utils"));
const Helpers_1 = require("../Helpers");
const updates_1 = require("./updates");
const PtsWaiter_1 = require("./PtsWaiter");
const NO_UPDATES_TIMEOUT_MS = 15 * 60 * 1000;
const FAIL_DIFFERENCE_INITIAL_S = 1;
const FAIL_DIFFERENCE_CAP_S = 64;
const CHANNEL_DIFFERENCE_LIMIT = 100;
const RECENT_MESSAGE_BUFFER_SIZE = 1000;
function isCommonPtsUpdate(update) {
    return (update instanceof tl_1.Api.UpdateNewMessage ||
        update instanceof tl_1.Api.UpdateDeleteMessages ||
        update instanceof tl_1.Api.UpdateReadHistoryInbox ||
        update instanceof tl_1.Api.UpdateReadHistoryOutbox ||
        update instanceof tl_1.Api.UpdateWebPage ||
        update instanceof tl_1.Api.UpdateReadMessagesContents ||
        update instanceof tl_1.Api.UpdateEditMessage ||
        update instanceof tl_1.Api.UpdateFolderPeers ||
        update instanceof tl_1.Api.UpdatePinnedMessages);
}
function isChannelPtsUpdate(update) {
    return (update instanceof tl_1.Api.UpdateNewChannelMessage ||
        update instanceof tl_1.Api.UpdateEditChannelMessage ||
        update instanceof tl_1.Api.UpdateDeleteChannelMessages ||
        update instanceof tl_1.Api.UpdateChannelWebPage ||
        update instanceof tl_1.Api.UpdatePinnedChannelMessages);
}
function getChannelId(update) {
    var _a;
    const u = update;
    if (u.channelId)
        return u.channelId.toString();
    const peer = (_a = u.message) === null || _a === void 0 ? void 0 : _a.peerId;
    if (peer instanceof tl_1.Api.PeerChannel)
        return peer.channelId.toString();
    return undefined;
}
function hasQts(update) {
    return typeof update.qts === "number";
}
class UpdateManager {
    constructor(client) {
        this.lastUpdateTime = 0;
        this.channels = new Map();
        this.pendingSeq = [];
        this.recentMessageKeys = new Set();
        this.recentMessageQueue = [];
        this.fetchingDifference = false;
        this.failTimeoutS = FAIL_DIFFERENCE_INITIAL_S;
        this.channelFailTimeoutS = new Map();
        this.channelFailRetryTimers = new Map();
        this.running = false;
        this.client = client;
        this.globalPts = this.makeGlobalWaiter();
    }
    start() {
        this.running = true;
    }
    stop() {
        this.running = false;
        this.globalPts.clearSkippedUpdates();
        this.globalPts.setRequesting(false);
        if (this.globalPtsTimer) {
            clearTimeout(this.globalPtsTimer);
            this.globalPtsTimer = undefined;
        }
        if (this.failRetryTimer) {
            clearTimeout(this.failRetryTimer);
            this.failRetryTimer = undefined;
        }
        if (this.seqGapTimer) {
            clearTimeout(this.seqGapTimer);
            this.seqGapTimer = undefined;
        }
        for (const t of this.channelFailRetryTimers.values())
            clearTimeout(t);
        this.channelFailRetryTimers.clear();
        for (const tracker of this.channels.values()) {
            if (tracker.timer)
                clearTimeout(tracker.timer);
            tracker.pts.clearSkippedUpdates();
            tracker.pts.setRequesting(false);
        }
        this.channels.clear();
        this.pendingSeq.length = 0;
        this.fetchingDifference = false;
        this.failTimeoutS = FAIL_DIFFERENCE_INITIAL_S;
        this.channelFailTimeoutS.clear();
    }
    onUpdates(update, noDispatch = false) {
        if (!this.running)
            return;
        try {
            this.lastUpdateTime = Date.now();
            this.client._entityCache.add(update);
            void this.saveEntities(update);
            if (noDispatch)
                this.markNoDispatch(update);
            if (update instanceof tl_1.Api.Updates || update instanceof tl_1.Api.UpdatesCombined) {
                this.handleContainer(update);
            }
            else if (update instanceof tl_1.Api.UpdateShort) {
                if (this.state)
                    this.state.date = update.date;
                this.feedUpdate(update.update, { others: null });
            }
            else if (update instanceof tl_1.Api.UpdateShortMessage || update instanceof tl_1.Api.UpdateShortChatMessage) {
                this.handleShortMessage(update);
            }
            else if (update instanceof tl_1.Api.UpdateShortSentMessage) {
                this.handleShortSentMessage(update);
            }
            else if (update.className === "UpdatesTooLong") {
                this.client._log.warn("Received UpdatesTooLong, requesting common difference");
                this.scheduleCommonDifference();
            }
            else {
                this.feedUpdate(update, { others: null });
            }
        }
        catch (e) {
            this.client._log.error(`Error in onUpdates: ${e}`);
        }
    }
    markNoDispatch(update) {
        const mark = (obj) => Object.defineProperty(obj, "_noDispatch", {
            value: true,
            configurable: true,
        });
        mark(update);
        if (update instanceof tl_1.Api.Updates || update instanceof tl_1.Api.UpdatesCombined) {
            for (const u of update.updates)
                mark(u);
        }
        else if (update instanceof tl_1.Api.UpdateShort) {
            mark(update.update);
        }
    }
    handleShortSentMessage(update) {
        if (!this.state || this.fetchingDifference)
            return;
        this.globalPts.updateAndApply(update.pts, update.ptsCount, { tag: "update", update: update }, () => {
            if (this.state)
                this.state.pts = this.globalPts.current();
        }, () => { });
        this.state.date = update.date;
    }
    applyAffected(pts, ptsCount, channelId) {
        if (!this.running || !this.state || this.fetchingDifference)
            return;
        if (channelId) {
            const tracker = this.getOrCreateChannel(channelId);
            if (tracker.pts.requesting())
                return;
            if (!tracker.pts.inited()) {
                tracker.pts.init(pts);
                return;
            }
            tracker.pts.updateAndApply(pts, ptsCount, { tag: "update" }, () => { }, () => { });
            return;
        }
        this.globalPts.updateAndApply(pts, ptsCount, { tag: "update" }, () => { }, () => { });
        this.state.pts = this.globalPts.current();
    }
    async catchUp() {
        try {
            if (!this.state) {
                const s = await this.client.api.updates.getState();
                this.state = { pts: s.pts, qts: s.qts, date: s.date, seq: s.seq };
                this.globalPts.init(s.pts);
                this.client._log.debug("Initialized update state");
                return;
            }
            this.client._log.debug("Catching up on missed updates...");
            await this.fetchCommonDifference();
            this.client._log.debug("Catch up complete");
        }
        catch (e) {
            this.client._log.error(`Error during catch up: ${e}`);
        }
    }
    async ensureState() {
        if (this.state)
            return;
        try {
            const s = await this.client.api.updates.getState();
            this.state = { pts: s.pts, qts: s.qts, date: s.date, seq: s.seq };
            this.globalPts.init(s.pts);
            this.lastUpdateTime = Date.now();
        }
        catch (_a) {
            // ignore — user may not be authorized yet
        }
    }
    refreshFromState(state) {
        if (this.state) {
            this.state.pts = state.pts;
            this.state.qts = state.qts;
            this.state.date = state.date;
            this.state.seq = state.seq;
        }
        else {
            this.state = Object.assign({}, state);
        }
        this.globalPts.init(state.pts);
    }
    isStale() {
        return Boolean(this.state) && Date.now() - this.lastUpdateTime > NO_UPDATES_TIMEOUT_MS;
    }
    async recoverIfStale() {
        if (!this.isStale())
            return;
        this.client._log.debug("No updates for 15 minutes, fetching difference");
        await this.fetchCommonDifference();
        this.lastUpdateTime = Date.now();
    }
    handleContainer(update) {
        if (this.state && update.seq !== 0) {
            const seqStart = "seqStart" in update ? update.seqStart : update.seq;
            const localSeq = this.state.seq;
            if (seqStart !== 0) {
                if (localSeq + 1 > seqStart) {
                    this.client._log.debug(`Skip duplicate Updates container (seq=${seqStart})`);
                    return;
                }
                if (localSeq + 1 < seqStart) {
                    this.client._log.debug(`Seq gap (local=${localSeq}, start=${seqStart}); buffering`);
                    this.pendingSeq.push({ update, seqStart, seq: update.seq });
                    this.armSeqGapTimer();
                    return;
                }
            }
            this.state.seq = update.seq;
            this.state.date = update.date;
        }
        const entities = this.collectEntities(update.users, update.chats);
        for (const u of update.updates) {
            this.feedUpdate(u, { others: update.updates, entities });
        }
        if (this.state && update.seq !== 0) {
            this.drainPendingSeq();
        }
    }
    armSeqGapTimer() {
        if (this.seqGapTimer)
            return;
        this.seqGapTimer = setTimeout(() => {
            this.seqGapTimer = undefined;
            this.client._log.debug("Seq gap was not filled in time; requesting difference");
            this.scheduleCommonDifference();
        }, PtsWaiter_1.WAIT_FOR_SKIPPED_TIMEOUT_MS);
    }
    handleShortMessage(update) {
        if (!this.state) {
            this.dispatch(update, { others: null });
            return;
        }
        if (this.fetchingDifference)
            return;
        const applied = this.globalPts.updateAndApply(update.pts, update.ptsCount, { tag: "update", update: update }, (u) => {
            if (this.state)
                this.state.pts = this.globalPts.current();
            this.dispatch(u, { others: null });
        }, () => {
            // updates-payload not used at this entry point
        });
        if (applied) {
            this.state.date = update.date;
        }
    }
    feedUpdate(update, payload) {
        if (!this.state) {
            this.dispatch(update, payload);
            return;
        }
        if (update instanceof tl_1.Api.UpdateChannelTooLong) {
            const channelId = update.channelId.toString();
            const tracker = this.getOrCreateChannel(channelId);
            const serverPts = update.pts;
            if (!tracker.pts.inited()) {
                if (serverPts !== undefined)
                    tracker.pts.init(serverPts);
            }
            else if (serverPts === undefined || tracker.pts.current() < serverPts) {
                this.client._log.debug(`UpdateChannelTooLong ch=${channelId}; requesting diff`);
                void this.fetchChannelDifference(channelId);
            }
            return;
        }
        if (isCommonPtsUpdate(update)) {
            if (this.fetchingDifference)
                return;
            const u = update;
            this.globalPts.updateAndApply(u.pts, u.ptsCount, { tag: "update", update }, (applied) => {
                if (this.state)
                    this.state.pts = this.globalPts.current();
                this.dispatch(applied, payload);
            }, () => { });
            return;
        }
        if (isChannelPtsUpdate(update)) {
            const u = update;
            const channelId = getChannelId(update);
            if (!channelId || !u.pts || !u.ptsCount) {
                this.dispatch(update, payload);
                return;
            }
            const tracker = this.getOrCreateChannel(channelId);
            if (this.fetchingDifference || tracker.pts.requesting())
                return;
            if (!tracker.pts.inited()) {
                tracker.pts.init(u.pts);
                this.dispatch(update, payload);
                return;
            }
            tracker.pts.updateAndApply(u.pts, u.ptsCount, { tag: "update", update }, (applied) => this.dispatch(applied, payload), () => { });
            return;
        }
        if (hasQts(update)) {
            if (this.fetchingDifference)
                return;
            const localQts = this.state.qts;
            const qts = update.qts;
            if (localQts + 1 > qts) {
                this.client._log.debug(`Skip duplicate qts (local=${localQts}, qts=${qts})`);
                return;
            }
            if (localQts + 1 < qts) {
                this.client._log.debug(`Qts gap (local=${localQts}, qts=${qts}); requesting difference`);
                this.scheduleCommonDifference();
                return;
            }
            this.state.qts = qts;
        }
        this.dispatch(update, payload);
    }
    dispatch(update, payload) {
        var _a;
        if (this.isDuplicateMessage(update)) {
            this.client._log.debug("Skip duplicate message update (already dispatched)");
            return;
        }
        if (update._noDispatch) {
            return;
        }
        update._entities = (_a = payload.entities) !== null && _a !== void 0 ? _a : new Map();
        (0, updates_1._dispatchUpdate)(this.client, { update }).catch((e) => this.client._log.error(`Error dispatching update: ${e}`));
    }
    isDuplicateMessage(update) {
        if (!(update instanceof tl_1.Api.UpdateNewMessage) &&
            !(update instanceof tl_1.Api.UpdateNewChannelMessage)) {
            return false;
        }
        const message = update.message;
        if ((message === null || message === void 0 ? void 0 : message.id) == undefined || message.peerId == undefined)
            return false;
        let peerId;
        try {
            peerId = utils.getPeerId(message.peerId);
        }
        catch (_a) {
            return false;
        }
        const key = `${peerId}:${message.id}`;
        if (this.recentMessageKeys.has(key))
            return true;
        this.recentMessageKeys.add(key);
        this.recentMessageQueue.push(key);
        if (this.recentMessageQueue.length > RECENT_MESSAGE_BUFFER_SIZE) {
            const old = this.recentMessageQueue.shift();
            this.recentMessageKeys.delete(old);
        }
        return false;
    }
    async saveEntities(tlo) {
        try {
            await this.client.session.processEntities(tlo);
        }
        catch (e) {
            this.client._log.warn(`session.processEntities failed: ${e}`);
        }
    }
    collectEntities(users, chats) {
        const entities = new Map();
        for (const x of [...users, ...chats]) {
            try {
                entities.set(utils.getPeerId(x), x);
            }
            catch (_a) {
                // skip unrecognised entity
            }
        }
        return entities;
    }
    makeGlobalWaiter() {
        const host = {
            onWaitForSkipped: (ms) => {
                if (ms < 0) {
                    if (this.globalPtsTimer) {
                        clearTimeout(this.globalPtsTimer);
                        this.globalPtsTimer = undefined;
                    }
                    return;
                }
                if (this.globalPtsTimer)
                    clearTimeout(this.globalPtsTimer);
                this.globalPtsTimer = setTimeout(() => {
                    this.globalPtsTimer = undefined;
                    this.scheduleCommonDifference();
                }, ms);
            },
            onWaitForShortPoll: () => {
                // not used; keep no-op
            },
        };
        return new PtsWaiter_1.PtsWaiter(host);
    }
    getOrCreateChannel(channelId) {
        let tracker = this.channels.get(channelId);
        if (tracker)
            return tracker;
        const host = {
            onWaitForSkipped: (ms) => {
                const t = this.channels.get(channelId);
                if (!t)
                    return;
                if (ms < 0) {
                    if (t.timer) {
                        clearTimeout(t.timer);
                        t.timer = undefined;
                    }
                    return;
                }
                if (t.timer)
                    clearTimeout(t.timer);
                t.timer = setTimeout(() => {
                    t.timer = undefined;
                    void this.fetchChannelDifference(channelId);
                }, ms);
            },
            onWaitForShortPoll: () => { },
        };
        tracker = { pts: new PtsWaiter_1.PtsWaiter(host) };
        this.channels.set(channelId, tracker);
        return tracker;
    }
    scheduleCommonDifference() {
        if (this.fetchingDifference)
            return;
        if (this.failRetryTimer)
            return;
        void this.fetchCommonDifference();
    }
    async fetchCommonDifference() {
        if (this.fetchingDifference || !this.state)
            return;
        this.fetchingDifference = true;
        this.globalPts.setRequesting(true);
        let failed = false;
        try {
            await this.fetchDifferenceLoop();
            this.failTimeoutS = FAIL_DIFFERENCE_INITIAL_S;
        }
        catch (e) {
            const msg = e === null || e === void 0 ? void 0 : e.errorMessage;
            if (msg === "PERSISTENT_TIMESTAMP_INVALID") {
                this.client._log.warn("Common pts is invalid; reinitializing update state");
                this.state = undefined;
                void this.ensureState();
            }
            else {
                failed = true;
                this.client._log.warn(`fetchCommonDifference: ${e}`);
            }
        }
        finally {
            this.globalPts.setRequesting(false);
            if (this.state)
                this.globalPts.init(this.state.pts);
            this.fetchingDifference = false;
            this.drainPendingSeq();
        }
        if (failed && this.running) {
            const delayMs = this.failTimeoutS * 1000;
            this.bumpFailTimeout();
            this.client._log.debug(`Retry common difference in ${delayMs}ms`);
            this.failRetryTimer = setTimeout(() => {
                this.failRetryTimer = undefined;
                this.scheduleCommonDifference();
            }, delayMs);
        }
    }
    async fetchDifferenceLoop() {
        if (!this.state)
            return;
        let fetching = true;
        while (fetching) {
            const diff = await this.client.api.updates.getDifference({
                pts: this.state.pts,
                date: this.state.date,
                qts: this.state.qts,
            });
            if (diff instanceof tl_1.Api.updates.DifferenceEmpty) {
                this.state.date = diff.date;
                this.state.seq = diff.seq;
                fetching = false;
            }
            else if (diff instanceof tl_1.Api.updates.Difference) {
                await this.processDifference(diff);
                this.state = Object.assign({}, diff.state);
                fetching = false;
            }
            else if (diff instanceof tl_1.Api.updates.DifferenceSlice) {
                await this.processDifference(diff);
                this.state = Object.assign({}, diff.intermediateState);
            }
            else if (diff instanceof tl_1.Api.updates.DifferenceTooLong) {
                this.state.pts = diff.pts;
                fetching = false;
                this.client._log.warn("getDifference: too long, some updates may be lost");
            }
        }
    }
    async processDifference(diff) {
        const entities = this.collectEntities(diff.users, diff.chats);
        this.client._entityCache.add(diff);
        await this.saveEntities(diff);
        for (const message of diff.newMessages) {
            if (message instanceof tl_1.Api.Message || message instanceof tl_1.Api.MessageService) {
                this.dispatch(new tl_1.Api.UpdateNewMessage({ message, pts: 0, ptsCount: 0 }), { others: null, entities });
            }
        }
        for (const update of diff.otherUpdates) {
            this.dispatch(update, { others: diff.otherUpdates, entities });
        }
    }
    drainPendingSeq() {
        if (!this.state)
            return;
        this.pendingSeq.sort((a, b) => a.seqStart - b.seqStart);
        while (this.pendingSeq.length > 0) {
            const entry = this.pendingSeq[0];
            if (entry.seqStart <= this.state.seq) {
                this.pendingSeq.shift();
                continue;
            }
            if (entry.seqStart === this.state.seq + 1) {
                this.pendingSeq.shift();
                this.handleContainer(entry.update);
                continue;
            }
            break;
        }
        if (this.pendingSeq.length === 0) {
            if (this.seqGapTimer) {
                clearTimeout(this.seqGapTimer);
                this.seqGapTimer = undefined;
            }
        }
        else {
            this.armSeqGapTimer();
        }
    }
    async fetchChannelDifference(channelId) {
        var _a;
        const tracker = this.channels.get(channelId);
        if (!tracker || tracker.pts.requesting())
            return;
        if (!tracker.pts.inited())
            return;
        if (this.channelFailRetryTimers.has(channelId))
            return;
        tracker.pts.setRequesting(true);
        let failed = false;
        try {
            const inputChannel = await this.resolveChannel(channelId, tracker);
            if (!inputChannel) {
                this.client._log.warn(`Cannot resolve channel ${channelId}; skipping diff`);
                return;
            }
            tracker.inputChannel = inputChannel;
            let fetching = true;
            while (fetching) {
                const diff = await this.client.invoke(new tl_1.Api.updates.GetChannelDifference({
                    channel: inputChannel,
                    filter: new tl_1.Api.ChannelMessagesFilterEmpty(),
                    pts: tracker.pts.current(),
                    limit: CHANNEL_DIFFERENCE_LIMIT,
                }));
                if (diff instanceof tl_1.Api.updates.ChannelDifferenceEmpty) {
                    if (diff.pts)
                        tracker.pts.init(diff.pts);
                    fetching = false;
                }
                else if (diff instanceof tl_1.Api.updates.ChannelDifference) {
                    const entities = this.collectEntities(diff.users, diff.chats);
                    this.client._entityCache.add(diff);
                    await this.saveEntities(diff);
                    for (const message of diff.newMessages) {
                        if (message instanceof tl_1.Api.Message || message instanceof tl_1.Api.MessageService) {
                            this.dispatch(new tl_1.Api.UpdateNewChannelMessage({ message, pts: 0, ptsCount: 0 }), { others: null, entities });
                        }
                    }
                    for (const update of diff.otherUpdates) {
                        this.dispatch(update, { others: diff.otherUpdates, entities });
                    }
                    tracker.pts.init(diff.pts);
                    fetching = !diff.final;
                }
                else if (diff instanceof tl_1.Api.updates.ChannelDifferenceTooLong) {
                    this.client._log.warn(`Channel ${channelId} difference too long`);
                    if (diff.dialog instanceof tl_1.Api.Dialog && diff.dialog.pts !== undefined) {
                        tracker.pts.init(diff.dialog.pts);
                    }
                    const entities = this.collectEntities(diff.users, diff.chats);
                    this.client._entityCache.add(diff);
                    await this.saveEntities(diff);
                    const included = diff.messages.filter((m) => m instanceof tl_1.Api.Message || m instanceof tl_1.Api.MessageService);
                    included.sort((a, b) => a.id - b.id);
                    for (const message of included) {
                        this.dispatch(new tl_1.Api.UpdateNewChannelMessage({ message, pts: 0, ptsCount: 0 }), { others: null, entities });
                    }
                    fetching = false;
                }
            }
            this.channelFailTimeoutS.delete(channelId);
        }
        catch (e) {
            const msg = e === null || e === void 0 ? void 0 : e.errorMessage;
            if (msg === "CHANNEL_PRIVATE" || msg === "CHANNEL_INVALID") {
                this.client._log.info(`Channel ${channelId} is inaccessible (${msg}); dropping difference tracking`);
                this.dropChannel(channelId);
                return;
            }
            if (msg === "PERSISTENT_TIMESTAMP_INVALID") {
                this.client._log.warn(`Channel ${channelId} pts is invalid; resetting tracker`);
                this.dropChannel(channelId);
                return;
            }
            failed = true;
            this.client._log.warn(`fetchChannelDifference ${channelId}: ${e}`);
        }
        finally {
            tracker.pts.setRequesting(false);
        }
        if (failed && this.running) {
            const delayMs = ((_a = this.channelFailTimeoutS.get(channelId)) !== null && _a !== void 0 ? _a : FAIL_DIFFERENCE_INITIAL_S) * 1000;
            this.bumpChannelFailTimeout(channelId);
            this.client._log.debug(`Retry channel ${channelId} difference in ${delayMs}ms`);
            const timer = setTimeout(() => {
                this.channelFailRetryTimers.delete(channelId);
                void this.fetchChannelDifference(channelId);
            }, delayMs);
            this.channelFailRetryTimers.set(channelId, timer);
        }
    }
    async resolveChannel(channelId, tracker) {
        if (tracker.inputChannel)
            return tracker.inputChannel;
        try {
            const peer = new tl_1.Api.PeerChannel({ channelId: (0, Helpers_1.returnBigInt)(channelId) });
            const input = await this.client.getInputEntity(peer);
            if (input instanceof tl_1.Api.InputPeerChannel) {
                return new tl_1.Api.InputChannel({ channelId: input.channelId, accessHash: input.accessHash });
            }
        }
        catch (_a) {
            // ignore
        }
        return undefined;
    }
    bumpFailTimeout() {
        if (this.failTimeoutS < FAIL_DIFFERENCE_CAP_S) {
            this.failTimeoutS = Math.min(this.failTimeoutS * 2, FAIL_DIFFERENCE_CAP_S);
        }
    }
    dropChannel(channelId) {
        const tracker = this.channels.get(channelId);
        if (tracker) {
            if (tracker.timer)
                clearTimeout(tracker.timer);
            tracker.pts.clearSkippedUpdates();
            this.channels.delete(channelId);
        }
        const retry = this.channelFailRetryTimers.get(channelId);
        if (retry) {
            clearTimeout(retry);
            this.channelFailRetryTimers.delete(channelId);
        }
        this.channelFailTimeoutS.delete(channelId);
    }
    bumpChannelFailTimeout(channelId) {
        var _a;
        const cur = (_a = this.channelFailTimeoutS.get(channelId)) !== null && _a !== void 0 ? _a : FAIL_DIFFERENCE_INITIAL_S;
        if (cur < FAIL_DIFFERENCE_CAP_S) {
            this.channelFailTimeoutS.set(channelId, Math.min(cur * 2, FAIL_DIFFERENCE_CAP_S));
        }
    }
}
exports.UpdateManager = UpdateManager;
