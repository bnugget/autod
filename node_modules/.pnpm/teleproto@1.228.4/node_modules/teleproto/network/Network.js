"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Network = void 0;
const SenderSlot_1 = require("./SenderSlot");
const core_types_1 = require("./core_types");
const TempAuthKey_1 = require("./TempAuthKey");
const AuthKey_1 = require("../crypto/AuthKey");
const Helpers_1 = require("../Helpers");
class Network {
    constructor(client, opts) {
        this._slots = new Map();
        this._connectChains = new Map();
        this._lastConnectAt = new Map();
        this._closed = false;
        this._client = client;
        this._opts = opts;
    }
    dcenter(dcId) {
        return this._client._dcenters.get(dcId, this._client.session.getAuthKey(dcId));
    }
    getSession(shiftedDcId) {
        if (this._closed)
            throw new Error("Network is closed");
        let slot = this._slots.get(shiftedDcId);
        if (!slot || slot.state === "dead") {
            slot = this._makeSlot(shiftedDcId);
            this._slots.set(shiftedDcId, slot);
        }
        return slot;
    }
    async lease(dcId) {
        const slot = this.getSession(dcId);
        const sender = await slot.ensureConnected();
        slot.enter();
        let released = false;
        return {
            sender,
            release: () => {
                if (released)
                    return;
                released = true;
                slot.leave();
            },
        };
    }
    removeSession(shiftedDcId) {
        const slot = this._slots.get(shiftedDcId);
        if (slot) {
            this._slots.delete(shiftedDcId);
            slot.markDead("manual").catch(() => { });
        }
    }
    _makeSlot(shiftedDcId) {
        const dcId = (0, core_types_1.bareDcId)(shiftedDcId);
        const dcenter = this.dcenter(dcId);
        const slot = new SenderSlot_1.SenderSlot({
            dcId,
            idleTimeoutMs: this._opts.idleTimeoutMs,
            log: this._client._log,
            connect: async () => {
                var _a;
                const chain = (_a = this._connectChains.get(dcId)) !== null && _a !== void 0 ? _a : Promise.resolve();
                const ours = chain.then(() => this._gatedConnect(dcId, shiftedDcId, slot, dcenter));
                this._connectChains.set(dcId, ours.catch(() => { }));
                return ours;
            },
        });
        return slot;
    }
    async _gatedConnect(dcId, shiftedDcId, slot, dcenter) {
        var _a, _b;
        const gap = this._opts.sessionStartupDelayMs;
        const last = (_a = this._lastConnectAt.get(shiftedDcId)) !== null && _a !== void 0 ? _a : 0;
        if (gap > 0 && last > 0) {
            const wait = gap - (Date.now() - last);
            if (wait > 0)
                await (0, Helpers_1.sleep)(wait);
        }
        try {
            const sessionKey = (_b = this._client.session.getAuthKey(dcId)) === null || _b === void 0 ? void 0 : _b.getKey();
            const ownKey = dcenter.authKey.getKey();
            const isHome = dcId === this._client.session.dcId;
            if (sessionKey && (!ownKey || (isHome && !sessionKey.equals(ownKey)))) {
                await dcenter.authKey.setKey(sessionKey);
            }
            const isMedia = (0, core_types_1.isDownloadDcId)(shiftedDcId) || (0, core_types_1.isUploadDcId)(shiftedDcId);
            const useTemp = isMedia &&
                dcenter.mediaTempUsable &&
                !!dcenter.authKey.getKey();
            const log = this._client._log;
            const sender = this._client._makeSender(dcId, () => this._onSenderBreak(shiftedDcId, slot), useTemp ? new AuthKey_1.AuthKey() : dcenter.authKey, false, useTemp
                ? {
                    permAuthKey: dcenter.authKey,
                    dcParam: -(dcId +
                        (this._client._testServers ? 10000 : 0)),
                    expiresIn: TempAuthKey_1.TEMP_KEY_EXPIRES_IN,
                    onFailed: (err) => {
                        dcenter.mediaTempFailed = true;
                        log.info(`Temp-key binding failed for dc ${dcId}, media sessions fall back to the permanent key (${err instanceof Error ? err.message : err})`);
                    },
                }
                : undefined);
            return await this._client._connectSender(sender, dcId, undefined, isMedia);
        }
        finally {
            this._lastConnectAt.set(shiftedDcId, Date.now());
        }
    }
    _onSenderBreak(shiftedDcId, slot) {
        if (this._slots.get(shiftedDcId) === slot) {
            this._slots.delete(shiftedDcId);
        }
        const shift = (0, core_types_1.getDcIdShift)(shiftedDcId);
        const dcId = (0, core_types_1.bareDcId)(shiftedDcId);
        if (shift === 0 && dcId !== this._client.session.dcId) {
            this._client.session.setAuthKey(undefined, dcId);
        }
        slot.markDead("auth-broken").catch(() => { });
    }
    async purge() {
        const dying = [...this._slots.values()];
        this._slots.clear();
        await Promise.all(dying.map((s) => s.markDead("manual").catch(() => { })));
    }
    async close() {
        this._closed = true;
        const dying = [...this._slots.values()];
        this._slots.clear();
        await Promise.all(dying.map((s) => s.markDead("pool-closed").catch(() => { })));
    }
}
exports.Network = Network;
