"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityCache = exports.ENTITY_CACHE_DEFAULTS = void 0;
const Utils_1 = require("./Utils");
const Helpers_1 = require("./Helpers");
const tl_1 = require("./tl");
const big_integer_1 = __importDefault(require("big-integer"));
exports.ENTITY_CACHE_DEFAULTS = {
    max: 4096,
    ttl: 0,
};
function toCachedPeer(peer) {
    if (peer instanceof tl_1.Api.InputPeerUser) {
        return { kind: "user", id: peer.userId, hash: peer.accessHash };
    }
    if (peer instanceof tl_1.Api.InputPeerChat) {
        return { kind: "chat", id: peer.chatId };
    }
    if (peer instanceof tl_1.Api.InputPeerChannel) {
        return { kind: "channel", id: peer.channelId, hash: peer.accessHash };
    }
    if (peer instanceof tl_1.Api.InputPeerSelf) {
        return { kind: "self" };
    }
    return { kind: "raw", peer };
}
function buildInputPeer(cached) {
    switch (cached.kind) {
        case "self":
            return new tl_1.Api.InputPeerSelf();
        case "user":
            return new tl_1.Api.InputPeerUser({ userId: cached.id, accessHash: cached.hash });
        case "chat":
            return new tl_1.Api.InputPeerChat({ chatId: cached.id });
        case "channel":
            return new tl_1.Api.InputPeerChannel({ channelId: cached.id, accessHash: cached.hash });
        case "raw":
            return cached.peer;
        default:
            return assertNever(cached);
    }
}
function assertNever(value) {
    throw new Error(`Unhandled cached peer: ${JSON.stringify(value)}`);
}
function collectEntities(input) {
    if ((0, Helpers_1.isArrayLike)(input)) {
        return input;
    }
    if (input == undefined || typeof input !== "object") {
        return [];
    }
    const { users, chats, user } = input;
    return [
        ...((0, Helpers_1.isArrayLike)(chats) ? chats : []),
        ...((0, Helpers_1.isArrayLike)(users) ? users : []),
        ...(user != undefined ? [user] : []),
    ];
}
class EntityCache {
    constructor(options) {
        var _a, _b;
        this.users = new Map();
        this.chats = new Map();
        this.pinnedKeys = new Set();
        this.enabled = options !== false;
        const policy = typeof options === "object" ? options : exports.ENTITY_CACHE_DEFAULTS;
        this.max = Math.max(0, (_a = policy.max) !== null && _a !== void 0 ? _a : 0);
        this.ttl = Math.max(0, (_b = policy.ttl) !== null && _b !== void 0 ? _b : 0);
    }
    get size() {
        return this.users.size + this.chats.size;
    }
    add(entities) {
        if (!this.enabled)
            return;
        for (const entity of collectEntities(entities)) {
            try {
                this.write((0, Utils_1.getPeerId)(entity), toCachedPeer((0, Utils_1.getInputPeer)(entity)));
            }
            catch (_a) { }
        }
    }
    get(item) {
        const found = this.find(item);
        if (!found) {
            throw new Error("No cached entity for the given key");
        }
        return buildInputPeer(found);
    }
    has(item) {
        try {
            return this.find(item) !== undefined;
        }
        catch (_a) {
            return false;
        }
    }
    delete(item) {
        try {
            for (const key of this.candidateKeys(item)) {
                this.pinnedKeys.delete(key);
                if (this.getSegment(key).delete(key)) {
                    return true;
                }
            }
        }
        catch (_a) { }
        return false;
    }
    clear() {
        this.users.clear();
        this.chats.clear();
        this.pinnedKeys.clear();
    }
    pin(markedId) {
        if (!this.enabled)
            return;
        this.pinnedKeys.add(markedId.toString());
    }
    unpin(markedId) {
        this.pinnedKeys.delete(markedId.toString());
    }
    getSegment(key) {
        return key.startsWith("-") ? this.chats : this.users;
    }
    write(key, peer) {
        const segment = this.getSegment(key);
        segment.delete(key);
        segment.set(key, { peer, writtenAt: Date.now() });
        this.prune(segment);
    }
    read(key) {
        const segment = this.getSegment(key);
        const entry = segment.get(key);
        if (!entry)
            return undefined;
        if (this.isExpired(key, entry, Date.now())) {
            segment.delete(key);
            return undefined;
        }
        segment.delete(key);
        segment.set(key, entry);
        return entry.peer;
    }
    isExpired(key, entry, now) {
        return this.ttl > 0 && now - entry.writtenAt > this.ttl && !this.pinnedKeys.has(key);
    }
    prune(segment) {
        const now = Date.now();
        if (this.ttl > 0) {
            for (const [key, entry] of segment) {
                if (this.pinnedKeys.has(key))
                    continue;
                if (!this.isExpired(key, entry, now))
                    break;
                segment.delete(key);
            }
        }
        if (this.max > 0 && segment.size > this.max) {
            for (const key of segment.keys()) {
                if (this.pinnedKeys.has(key))
                    continue;
                segment.delete(key);
                if (segment.size <= this.max)
                    break;
            }
        }
    }
    find(item) {
        if (!this.enabled)
            return undefined;
        for (const key of this.candidateKeys(item)) {
            const cached = this.read(key);
            if (cached) {
                return cached;
            }
        }
        return undefined;
    }
    *candidateKeys(item) {
        if (item == undefined) {
            throw new Error("No cached entity for the given key");
        }
        const id = (0, Helpers_1.returnBigInt)(item);
        if (id.lesser(big_integer_1.default.zero)) {
            let marked;
            try {
                marked = (0, Utils_1.getPeerId)(id);
            }
            catch (_a) {
                throw new Error("Invalid key will not have entity");
            }
            yield marked;
        }
        yield (0, Utils_1.getPeerId)(new tl_1.Api.PeerUser({ userId: id }));
        yield (0, Utils_1.getPeerId)(new tl_1.Api.PeerChat({ chatId: id }));
        yield (0, Utils_1.getPeerId)(new tl_1.Api.PeerChannel({ channelId: id }));
    }
}
exports.EntityCache = EntityCache;
