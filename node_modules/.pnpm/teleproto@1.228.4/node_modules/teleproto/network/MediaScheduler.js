"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaScheduler = exports.MediaAbortError = exports.CdnRedirectError = exports.DEFAULT_MEDIA_SCHEDULER_OPTIONS = void 0;
const tl_1 = require("../tl");
const BalancePolicy_1 = require("./BalancePolicy");
const core_types_1 = require("./core_types");
const SenderSlot_1 = require("./SenderSlot");
const errors_1 = require("../errors");
const ONE_MB = 1024 * 1024;
const MIN_CHUNK = 4096;
exports.DEFAULT_MEDIA_SCHEDULER_OPTIONS = {
    partSize: 512 * 1024,
    requestRetries: 5,
    requestDeadlineMs: 15000,
    cdnSupported: false,
    download: BalancePolicy_1.DOWNLOAD_BALANCE,
    upload: BalancePolicy_1.UPLOAD_BALANCE,
};
class CdnRedirectError extends Error {
    constructor(redirect) {
        super("upload.fileCdnRedirect");
        this.redirect = redirect;
        this.name = "CdnRedirectError";
    }
}
exports.CdnRedirectError = CdnRedirectError;
class MediaAbortError extends Error {
    constructor() {
        super("Media operation aborted");
        this.name = "MediaAbortError";
    }
}
exports.MediaAbortError = MediaAbortError;
class DcBalance {
    constructor(dcId, kind, opts) {
        this.dcId = dcId;
        this.kind = kind;
        this.shiftedById = new Map();
        this.waiters = [];
        this.floodWaitUntil = 0;
        this._nextSlot = 0;
        this.policy = new BalancePolicy_1.BalancePolicy(opts);
        for (const id of this.policy.sessionIds) {
            this.shiftedById.set(id, this._shifted(this._nextSlot++ % 16));
        }
    }
    _shifted(i) {
        return this.kind === "download"
            ? (0, core_types_1.downloadDcId)(this.dcId, i)
            : (0, core_types_1.uploadDcId)(this.dcId, i);
    }
    grow(id) {
        this.shiftedById.set(id, this._shifted(this._nextSlot++ % 16));
    }
    drop(id) {
        const shifted = this.shiftedById.get(id);
        this.shiftedById.delete(id);
        return shifted;
    }
    wakeOne() {
        const w = this.waiters.shift();
        if (w)
            w();
    }
    wakeAll() {
        for (const w of this.waiters.splice(0))
            w();
    }
}
class MediaScheduler {
    constructor(client, network, opts) {
        this._balances = new Map();
        this._closed = false;
        this._client = client;
        this._network = network;
        const merged = Object.assign(Object.assign(Object.assign({}, exports.DEFAULT_MEDIA_SCHEDULER_OPTIONS), (opts || {})), { download: Object.assign({}, exports.DEFAULT_MEDIA_SCHEDULER_OPTIONS.download), upload: Object.assign({}, exports.DEFAULT_MEDIA_SCHEDULER_OPTIONS.upload) });
        if (opts && typeof opts === "object") {
            if (opts.inflightPerDc && opts.inflightPerDc > 0) {
                const w = opts.inflightPerDc * merged.partSize;
                merged.download.startWindow = w;
                merged.download.maxWindow = w;
                merged.upload.startWindow = w;
                merged.upload.maxWindow = w;
            }
            if (opts.maxSessions && opts.maxSessions > 0) {
                merged.download.maxSessions = opts.maxSessions;
                merged.upload.maxSessions = opts.maxSessions;
            }
            if (opts.sessions && opts.sessions > 0) {
                const start = Math.min(opts.sessions, merged.download.maxSessions);
                merged.download.startSessions = start;
                merged.upload.startSessions = Math.min(opts.sessions, merged.upload.maxSessions);
            }
            if (opts.download) {
                Object.assign(merged.download, opts.download);
            }
            if (opts.upload) {
                Object.assign(merged.upload, opts.upload);
            }
        }
        if (merged.partSize > ONE_MB)
            merged.partSize = ONE_MB;
        if (merged.partSize % MIN_CHUNK !== 0) {
            throw new Error("partSize must be a multiple of 4096");
        }
        merged.download.partSize = merged.partSize;
        this.opts = merged;
    }
    _balance(dcId, kind) {
        const key = `${dcId}:${kind}`;
        let b = this._balances.get(key);
        if (!b) {
            b = new DcBalance(dcId, kind, kind === "download" ? this.opts.download : this.opts.upload);
            this._balances.set(key, b);
        }
        return b;
    }
    async getFile(dcId, location, offset, limit, signal) {
        const request = new tl_1.Api.upload.GetFile({
            location,
            offset,
            limit,
            precise: false,
            cdnSupported: this.opts.cdnSupported,
        });
        let currentDc = dcId;
        let lastErr;
        for (let attempt = 0; attempt < this.opts.requestRetries; attempt++) {
            if (signal === null || signal === void 0 ? void 0 : signal.aborted)
                throw new MediaAbortError();
            try {
                const result = await this._run(currentDc, "download", limit, request, signal, attempt > 0);
                if (result instanceof tl_1.Api.upload.FileCdnRedirect) {
                    throw new CdnRedirectError(result);
                }
                return result.bytes;
            }
            catch (err) {
                lastErr = err;
                if (err instanceof MediaAbortError)
                    throw err;
                if (err instanceof CdnRedirectError)
                    throw err;
                if (err instanceof SenderSlot_1.SlotRemovedError)
                    continue;
                if (err instanceof errors_1.FileMigrateError) {
                    currentDc = err.newDc;
                    continue;
                }
                if (isFlood(err))
                    continue;
                if ((err === null || err === void 0 ? void 0 : err.errorMessage) === "TIMEOUT")
                    continue;
                throw err;
            }
        }
        throw lastErr !== null && lastErr !== void 0 ? lastErr : new Error("MediaScheduler retries exhausted");
    }
    async savePart(dcId, request, signal) {
        const size = request.bytes.length;
        let lastErr;
        for (let attempt = 0; attempt < this.opts.requestRetries; attempt++) {
            if (signal === null || signal === void 0 ? void 0 : signal.aborted)
                throw new MediaAbortError();
            try {
                return await this._run(dcId, "upload", size, request, signal, attempt > 0);
            }
            catch (err) {
                lastErr = err;
                if (err instanceof MediaAbortError)
                    throw err;
                if (err instanceof SenderSlot_1.SlotRemovedError)
                    continue;
                if (isFlood(err))
                    continue;
                if ((err === null || err === void 0 ? void 0 : err.errorMessage) === "TIMEOUT")
                    continue;
                throw err;
            }
        }
        throw lastErr !== null && lastErr !== void 0 ? lastErr : new Error("MediaScheduler retries exhausted");
    }
    async _run(dcId, kind, bytes, request, signal, priority = false) {
        if (this._closed)
            throw new Error("MediaScheduler is closed");
        const b = this._balance(dcId, kind);
        while (true) {
            if (signal === null || signal === void 0 ? void 0 : signal.aborted)
                throw new MediaAbortError();
            const wait = b.floodWaitUntil - Date.now();
            if (wait <= 0)
                break;
            await sleepOrAbort(Math.min(wait, 1000), signal);
        }
        let id = b.policy.pick(bytes);
        while (id < 0) {
            if (signal === null || signal === void 0 ? void 0 : signal.aborted)
                throw new MediaAbortError();
            await new Promise((resolve, reject) => {
                const onAbort = () => {
                    const i = b.waiters.indexOf(ticket);
                    if (i >= 0)
                        b.waiters.splice(i, 1);
                    reject(new MediaAbortError());
                };
                const ticket = () => {
                    signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", onAbort);
                    resolve();
                };
                if (signal) {
                    if (signal.aborted)
                        return reject(new MediaAbortError());
                    signal.addEventListener("abort", onAbort, { once: true });
                }
                if (priority)
                    b.waiters.unshift(ticket);
                else
                    b.waiters.push(ticket);
            });
            id = b.policy.pick(bytes);
        }
        const { wasFull } = b.policy.start(id, bytes);
        const shiftedId = b.shiftedById.get(id);
        const started = Date.now();
        const slot = this._network.getSession(shiftedId);
        slot.enter();
        try {
            const result = await withTimeout((async () => {
                const sender = await slot.ensureConnected();
                return raceWithSlotDeath(sender.send(request), slot, signal);
            })(), this.opts.requestDeadlineMs);
            const { addedSession, addedId } = b.policy.succeed(id, bytes, wasFull, Date.now() - started);
            if (addedSession)
                b.grow(addedId);
            return result;
        }
        catch (err) {
            if (isFlood(err)) {
                b.floodWaitUntil =
                    Date.now() + Math.max(1, floodSeconds(err)) * 1000;
                b.policy.release(id, bytes);
            }
            else {
                const { removedId } = b.policy.fail(id, bytes);
                let removed = removedId;
                if (removed < 0 && err instanceof SenderSlot_1.SlotRemovedError) {
                    removed = b.policy.remove(id) ? id : -1;
                }
                if (removed >= 0) {
                    const dropped = b.drop(removed);
                    if (dropped !== undefined) {
                        this._network.removeSession(dropped);
                    }
                    if (removed === id) {
                        this._network.removeSession(shiftedId);
                    }
                }
            }
            throw err;
        }
        finally {
            slot.leave();
            b.wakeOne();
        }
    }
    async purge() {
        this._balances.clear();
    }
    async close() {
        this._closed = true;
        for (const b of this._balances.values())
            b.wakeAll();
        this._balances.clear();
    }
}
exports.MediaScheduler = MediaScheduler;
function isFlood(err) {
    var _a, _b, _c, _d;
    return (err instanceof errors_1.FloodWaitError ||
        err instanceof errors_1.FloodTestPhoneWaitError ||
        ((_b = (_a = err === null || err === void 0 ? void 0 : err.errorMessage) === null || _a === void 0 ? void 0 : _a.startsWith) === null || _b === void 0 ? void 0 : _b.call(_a, "FLOOD_WAIT_")) ||
        ((_d = (_c = err === null || err === void 0 ? void 0 : err.errorMessage) === null || _c === void 0 ? void 0 : _c.startsWith) === null || _d === void 0 ? void 0 : _d.call(_c, "FLOOD_PREMIUM_WAIT_")));
}
function floodSeconds(err) {
    var _a, _b, _c, _d;
    if (typeof (err === null || err === void 0 ? void 0 : err.seconds) === "number")
        return err.seconds;
    const tail = (_d = (_c = (_b = (_a = err === null || err === void 0 ? void 0 : err.errorMessage) === null || _a === void 0 ? void 0 : _a.split) === null || _b === void 0 ? void 0 : _b.call(_a, "_")) === null || _c === void 0 ? void 0 : _c.pop) === null || _d === void 0 ? void 0 : _d.call(_c);
    const n = Number(tail);
    return Number.isFinite(n) && n > 0 ? n : 1;
}
async function raceWithSlotDeath(req, slot, signal) {
    let unsub;
    let onAbort;
    const death = new Promise((_, reject) => {
        unsub = slot.onDeath((reason) => reject(new SenderSlot_1.SlotRemovedError(reason)));
    });
    const races = [death, req];
    if (signal) {
        races.push(new Promise((_, reject) => {
            if (signal.aborted)
                return reject(new MediaAbortError());
            onAbort = () => reject(new MediaAbortError());
            signal.addEventListener("abort", onAbort, { once: true });
        }));
    }
    try {
        return await Promise.race(races);
    }
    finally {
        unsub === null || unsub === void 0 ? void 0 : unsub();
        if (signal && onAbort)
            signal.removeEventListener("abort", onAbort);
    }
}
class RequestTimeoutError extends Error {
    constructor() {
        super("Media request deadline exceeded");
        this.errorMessage = "TIMEOUT";
        this.name = "RequestTimeoutError";
    }
}
function withTimeout(p, ms) {
    return new Promise((resolve, reject) => {
        const t = setTimeout(() => reject(new RequestTimeoutError()), ms);
        p.then((v) => {
            clearTimeout(t);
            resolve(v);
        }, (e) => {
            clearTimeout(t);
            reject(e);
        });
    });
}
async function sleepOrAbort(ms, signal) {
    await new Promise((resolve, reject) => {
        let onAbort;
        const t = setTimeout(() => {
            if (signal && onAbort)
                signal.removeEventListener("abort", onAbort);
            resolve();
        }, ms);
        onAbort = () => {
            clearTimeout(t);
            reject(new MediaAbortError());
        };
        if (signal) {
            if (signal.aborted) {
                clearTimeout(t);
                reject(new MediaAbortError());
                return;
            }
            signal.addEventListener("abort", onAbort, { once: true });
        }
    });
}
