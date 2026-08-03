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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoke = invoke;
exports.getMe = getMe;
exports.isBot = isBot;
exports.isUserAuthorized = isUserAuthorized;
exports.getEntity = getEntity;
exports.getInputEntity = getInputEntity;
exports._getEntityFromString = _getEntityFromString;
exports.getPeerId = getPeerId;
exports._getPeer = _getPeer;
exports._getInputDialog = _getInputDialog;
exports._getInputNotify = _getInputNotify;
exports._selfId = _selfId;
const tl_1 = require("../tl");
const Utils_1 = require("../Utils");
const Helpers_1 = require("../Helpers");
const errors = __importStar(require("../errors"));
const utils = __importStar(require("../Utils"));
const big_integer_1 = __importDefault(require("big-integer"));
const RequestState_1 = require("../network/RequestState");
const network_1 = require("../network");
const telegramInternalErrors = async (e, ctx) => {
    if (!(e instanceof errors.ServerError ||
        e.errorMessage === "RPC_CALL_FAIL" ||
        e.errorMessage === "RPC_MCGET_FAIL")) {
        return false;
    }
    ctx.client._log.warn(`Telegram is having internal issues ${e.constructor.name}`);
    await (0, Helpers_1.sleep)(2000);
    return true;
};
const floodWait = async (e, ctx) => {
    if (!(e instanceof errors.FloodWaitError ||
        e instanceof errors.FloodTestPhoneWaitError)) {
        return false;
    }
    if (e.seconds > ctx.client.floodSleepThreshold) {
        throw e;
    }
    ctx.client._log.info(`Sleeping for ${e.seconds}s on flood wait (Caused by ${ctx.request.className})`);
    await (0, Helpers_1.sleep)(e.seconds * 1000);
    return true;
};
const dcMigration = async (e, ctx) => {
    var _a, _b;
    if (!(e instanceof errors.PhoneMigrateError ||
        e instanceof errors.NetworkMigrateError ||
        e instanceof errors.UserMigrateError)) {
        return false;
    }
    if (e instanceof errors.UserMigrateError &&
        (ctx.dcId !== undefined || ctx.sender !== ctx.client._sender) &&
        e.newDc === ctx.client.session.dcId) {
        ctx.client._log.info(`Request must run on the home DC ${e.newDc}; rerouting to the main sender`);
        (_a = ctx.lease) === null || _a === void 0 ? void 0 : _a.release();
        ctx.lease = undefined;
        ctx.dcId = undefined;
        ctx.sender = ctx.client._sender;
        return true;
    }
    ctx.client._log.info(`Migrating to data center ${e.newDc}`);
    const shouldRaise = e instanceof errors.PhoneMigrateError ||
        e instanceof errors.NetworkMigrateError;
    if (shouldRaise && (await ctx.client.isUserAuthorized())) {
        throw e;
    }
    await ctx.client._switchDC(e.newDc);
    (_b = ctx.lease) === null || _b === void 0 ? void 0 : _b.release();
    ctx.lease = undefined;
    if (ctx.dcId === undefined) {
        ctx.sender = ctx.client._sender;
    }
    else {
        ctx.lease = await ctx.client._leaseSender(ctx.dcId);
        ctx.sender = ctx.lease.sender;
    }
    return true;
};
const msgWait = async (e, ctx) => {
    if (!(e instanceof errors.MsgWaitError)) {
        return false;
    }
    await ctx.state.isReady();
    ctx.state.after = undefined;
    return true;
};
const reCaptcha = async (e, ctx) => {
    if (!(e.errorMessage &&
        e.errorMessage.startsWith("RECAPTCHA_CHECK_") &&
        ctx.client._reCaptchaCallback)) {
        return false;
    }
    const match = e.errorMessage.match(/RECAPTCHA_CHECK_.*(6Le[-\w]+)/);
    if (!match) {
        throw e;
    }
    const token = await ctx.client._reCaptchaCallback(match[1]);
    const newRequest = new tl_1.Api.InvokeWithReCaptcha({
        token: token,
        query: ctx.request,
    });
    await newRequest.resolve(ctx.client, utils);
    ctx.state.request = newRequest;
    ctx.state.data = newRequest.getBytes();
    return true;
};
const connectionNotInited = async (e, ctx) => {
    if (e.message !== "CONNECTION_NOT_INITED") {
        return false;
    }
    const targetSender = ctx.sender || ctx.client._sender;
    if (targetSender) {
        targetSender._needsInitConnection = true;
    }
    ctx.client._log.warn("CONNECTION_NOT_INITED, will re-wrap next request with initConnection");
    return true;
};
const INVOKE_ERROR_POLICIES = [
    telegramInternalErrors,
    floodWait,
    dcMigration,
    msgWait,
    reCaptcha,
    connectionNotInited,
];
async function invoke(client, request, dcId, otherSender) {
    var _a, _b, _c;
    if (request.classType !== "request") {
        throw new Error("You can only invoke MTProtoRequests");
    }
    let sender = client._sender;
    let lease;
    if (dcId) {
        lease = await client._leaseSender(dcId);
        sender = lease.sender;
    }
    if (otherSender != undefined) {
        sender =
            otherSender instanceof network_1.MTProtoSender
                ? otherSender
                : otherSender.sender;
    }
    if (sender == undefined) {
        throw new Error("Cannot send requests while disconnected. You need to call .connect()");
    }
    if (sender.userDisconnected) {
        throw new Error("Cannot send requests while disconnected. Please reconnect.");
    }
    const ctx = { client, request, state: undefined, dcId, sender };
    try {
        await client._connectedDeferred.promise;
        await request.resolve(client, utils);
        client._lastRequest = new Date().getTime();
        const state = new RequestState_1.RequestState(request);
        ctx.state = state;
        ctx.lease = lease;
        let attempt = 0;
        for (attempt = 0; attempt < client._requestRetries; attempt++) {
            ctx.sender.addStateToQueue(state);
            try {
                const result = await state.promise;
                state.finished.resolve();
                try {
                    await client.session.processEntities(result);
                }
                catch (err) {
                    client._log.warn(`session.processEntities failed: ${err}`);
                }
                client._entityCache.add(result);
                if (!dcId && !otherSender) {
                    const sub = result === null || result === void 0 ? void 0 : result.SUBCLASS_OF_ID;
                    if (sub === (0, Helpers_1.unionId)("Updates")) {
                        client.updateManager.onUpdates(result, true);
                    }
                    else if (sub === (0, Helpers_1.unionId)("messages.AffectedMessages") ||
                        sub === (0, Helpers_1.unionId)("messages.AffectedHistory") ||
                        sub === (0, Helpers_1.unionId)("messages.AffectedFoundMessages")) {
                        const affected = result;
                        const channel = request.channel;
                        client.updateManager.applyAffected(affected.pts, affected.ptsCount, (_a = channel === null || channel === void 0 ? void 0 : channel.channelId) === null || _a === void 0 ? void 0 : _a.toString());
                    }
                }
                return result;
            }
            catch (e) {
                let recovered = false;
                for (const policy of INVOKE_ERROR_POLICIES) {
                    try {
                        recovered = await policy(e, ctx);
                    }
                    catch (fatal) {
                        state.finished.resolve();
                        throw fatal;
                    }
                    if (recovered)
                        break;
                }
                if (!recovered) {
                    state.finished.resolve();
                    throw e;
                }
                lease = ctx.lease;
            }
            state.resetPromise();
        }
        throw new Error(`Request was unsuccessful ${attempt} time(s)`);
    }
    finally {
        (_c = ((_b = ctx.lease) !== null && _b !== void 0 ? _b : lease)) === null || _c === void 0 ? void 0 : _c.release();
    }
}
/**
 * Returns the current user as an {@link Api.User}, or as an {@link Api.InputPeerUser}
 * if `inputPeer` is `true` (useful when only the input peer is needed without a full API call).
 *
 * The result is cached after the first call.
 * @hidden
 */
async function getMe(client, inputPeer) {
    if (inputPeer && client._selfInputPeer) {
        return client._selfInputPeer;
    }
    const me = (await client.api.users.getUsers({ id: [new tl_1.Api.InputUserSelf()] }))[0];
    client._bot = me.bot;
    if (!client._selfInputPeer) {
        client._selfInputPeer = utils.getInputPeer(me, false);
    }
    return inputPeer
        ? client._selfInputPeer
        : me;
}
/** @hidden */
async function isBot(client) {
    if (client._bot === undefined) {
        const me = await client.getMe();
        if (me) {
            return !(me instanceof tl_1.Api.InputPeerUser) ? me.bot : undefined;
        }
    }
    return client._bot;
}
/** @hidden */
async function isUserAuthorized(client) {
    try {
        await client.api.updates.getState();
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Resolves one or more entity-like values into their full {@link Entity} objects
 * by calling the appropriate Telegram API methods (`users.GetUsers`, `messages.GetChats`,
 * `channels.GetChannels`).
 *
 * @param client - The Telegram client instance.
 * @param entity - A single entity or array of entities to resolve (usernames, IDs, peers, etc.).
 * @returns A single entity if a single value was given, or an array of entities.
 * @hidden
 */
async function getEntity(client, entity) {
    const single = !(0, Helpers_1.isArrayLike)(entity);
    let entityArray = [];
    if ((0, Helpers_1.isArrayLike)(entity)) {
        entityArray = entity;
    }
    else {
        entityArray.push(entity);
    }
    const inputs = [];
    for (const x of entityArray) {
        if (typeof x === "string") {
            const valid = (0, Utils_1.parseID)(x);
            if (valid) {
                inputs.push(await client.getInputEntity(valid));
            }
            else {
                inputs.push(x);
            }
        }
        else {
            inputs.push(await client.getInputEntity(x));
        }
    }
    const lists = new Map([
        [Helpers_1._EntityType.USER, []],
        [Helpers_1._EntityType.CHAT, []],
        [Helpers_1._EntityType.CHANNEL, []],
    ]);
    for (const x of inputs) {
        try {
            lists.get((0, Helpers_1._entityType)(x)).push(x);
        }
        catch (e) { }
    }
    let users = lists.get(Helpers_1._EntityType.USER);
    let chats = lists.get(Helpers_1._EntityType.CHAT);
    let channels = lists.get(Helpers_1._EntityType.CHANNEL);
    if (users.length) {
        users = await client.api.users.getUsers({
            id: users,
        });
    }
    if (chats.length) {
        const chatIds = chats.map((x) => x.chatId);
        chats = (await client.api.messages.getChats({ id: chatIds })).chats;
    }
    if (channels.length) {
        channels = await _getChannelsWithCommunityFallback(client, channels);
    }
    const idEntity = new Map();
    for (const user of users) {
        idEntity.set((0, Utils_1.getPeerId)(user), user);
    }
    for (const channel of channels) {
        idEntity.set((0, Utils_1.getPeerId)(channel), channel);
    }
    for (const chat of chats) {
        idEntity.set((0, Utils_1.getPeerId)(chat), chat);
    }
    const result = [];
    for (const x of inputs) {
        if (typeof x === "string") {
            result.push(await _getEntityFromString(client, x));
        }
        else if (!(x instanceof tl_1.Api.InputPeerSelf)) {
            result.push(idEntity.get((0, Utils_1.getPeerId)(x)));
        }
        else {
            for (const [key, u] of idEntity.entries()) {
                if (u instanceof tl_1.Api.User && u.self) {
                    result.push(u);
                    break;
                }
            }
        }
    }
    return single ? result[0] : result;
}
async function _getChannelsWithCommunityFallback(client, inputs) {
    try {
        return (await client.api.channels.getChannels({ id: inputs })).chats;
    }
    catch (e) {
        if ((e === null || e === void 0 ? void 0 : e.errorMessage) !== "COMMUNITY_ID_INVALID")
            throw e;
    }
    const joined = await client.api.communities.getJoinedCommunities();
    const byId = new Map();
    for (const chat of joined.chats) {
        byId.set(chat.id.toString(), chat);
    }
    const resolved = [];
    const rest = [];
    for (const input of inputs) {
        const id = input.channelId;
        const hit = id && byId.get(id.toString());
        if (hit)
            resolved.push(hit);
        else
            rest.push(input);
    }
    if (rest.length) {
        resolved.push(...(await client.api.channels.getChannels({ id: rest })).chats);
    }
    return resolved;
}
/**
 * Resolves an entity-like value into an {@link Api.TypeInputPeer}, using (in order):
 * 1. Direct InputPeer conversion
 * 2. In-memory entity cache
 * 3. Known strings ("me", "this", "self")
 * 4. Session (disk) cache
 * 5. Network lookup (username resolution, `users.GetUsers`, `channels.GetChannels`)
 *
 * @param client - The Telegram client instance.
 * @param peer - The entity to resolve (username, phone, ID, Peer object, etc.).
 * @returns The corresponding InputPeer.
 * @throws {Error} If the entity cannot be resolved by any means.
 * @hidden
 */
async function getInputEntity(client, peer) {
    // Short-circuit if the input parameter directly maps to an InputPeer
    try {
        return utils.getInputPeer(peer);
        // eslint-disable-next-line no-empty
    }
    catch (e) { }
    // Next in priority is having a peer (or its ID) cached in-memory
    try {
        if (typeof peer == "string") {
            const valid = (0, Utils_1.parseID)(peer);
            if (valid) {
                const res = client._entityCache.get(peer);
                if (res) {
                    return res;
                }
            }
        }
        if (typeof peer === "number" ||
            typeof peer === "bigint" ||
            big_integer_1.default.isInstance(peer)) {
            const res = client._entityCache.get(peer.toString());
            if (res) {
                return res;
            }
        }
        // unionId("Peer") == crc32(b'Peer')
        if (typeof peer == "object" &&
            !big_integer_1.default.isInstance(peer) &&
            peer.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("Peer")) {
            const res = client._entityCache.get(utils.getPeerId(peer));
            if (res) {
                return res;
            }
        }
        // eslint-disable-next-line no-empty
    }
    catch (e) { }
    // Then come known strings that take precedence
    if (typeof peer == "string") {
        if (["me", "this", "self"].includes(peer)) {
            return new tl_1.Api.InputPeerSelf();
        }
    }
    // No InputPeer, cached peer, or known string. Fetch from disk cache
    try {
        if (peer != undefined) {
            return await client.session.getInputEntity(peer);
        }
        // eslint-disable-next-line no-empty
    }
    catch (e) { }
    // Only network left to try
    if (typeof peer === "string") {
        return utils.getInputPeer(await _getEntityFromString(client, peer));
    }
    // If we're a bot and the user has messaged us privately users.getUsers
    // will work with accessHash = 0. Similar for channels.getChannels.
    // If we're not a bot but the user is in our contacts, it seems to work
    // regardless. These are the only two special-cased requests.
    if (typeof peer === "number") {
        peer = (0, Helpers_1.returnBigInt)(peer);
    }
    peer = utils.getPeer(peer);
    if (peer instanceof tl_1.Api.PeerUser) {
        const users = await client.api.users.getUsers({
            id: [
                new tl_1.Api.InputUser({
                    userId: peer.userId,
                    accessHash: big_integer_1.default.zero,
                }),
            ],
        });
        if (users.length && !(users[0] instanceof tl_1.Api.UserEmpty)) {
            // If the user passed a valid ID they expect to work for
            // channels but would be valid for users, we get UserEmpty.
            // Avoid returning the invalid empty input peer for that.
            //
            // We *could* try to guess if it's a channel first, and if
            // it's not, work as a chat and try to validate it through
            // another request, but that becomes too much work.
            return utils.getInputPeer(users[0]);
        }
    }
    else if (peer instanceof tl_1.Api.PeerChat) {
        return new tl_1.Api.InputPeerChat({
            chatId: peer.chatId,
        });
    }
    else if (peer instanceof tl_1.Api.PeerChannel) {
        try {
            const channels = await client.api.channels.getChannels({
                id: [
                    new tl_1.Api.InputChannel({
                        channelId: peer.channelId,
                        accessHash: big_integer_1.default.zero,
                    }),
                ],
            });
            return utils.getInputPeer(channels.chats[0]);
        }
        catch (e) {
            client._log.error("Error while resolving channel entity", e);
            if (client._errorHandler) {
                await client._errorHandler(e);
            }
        }
    }
    throw new Error(`Could not find the input entity for ${JSON.stringify(peer)}.
         Please read https://` +
        "docs.teleproto.dev/concepts/entities to" +
        " find out more details.");
}
/** @hidden */
async function _getEntityFromString(client, string) {
    const phone = utils.parsePhone(string);
    if (phone) {
        try {
            const result = await client.api.contacts.getContacts({
                hash: big_integer_1.default.zero,
            });
            if (!(result instanceof tl_1.Api.contacts.ContactsNotModified)) {
                for (const user of result.users) {
                    if (user instanceof tl_1.Api.User && user.phone === phone) {
                        return user;
                    }
                }
            }
        }
        catch (e) {
            if (e.errorMessage === "BOT_METHOD_INVALID") {
                throw new Error("Cannot get entity by phone number as a " +
                    "bot (try using integer IDs, not strings)");
            }
            throw e;
        }
    }
    const id = utils.parseID(string);
    if (id != undefined) {
        return getInputEntity(client, id);
    }
    else if (["me", "this"].includes(string.toLowerCase())) {
        return client.getMe();
    }
    else {
        const { username, isInvite } = utils.parseUsername(string);
        if (isInvite) {
            const invite = await client.api.messages.checkChatInvite({
                hash: username,
            });
            if (invite instanceof tl_1.Api.ChatInvite) {
                throw new Error("Cannot get entity from a channel (or group) " +
                    "that you are not part of. Join the group and retry");
            }
            else if (invite instanceof tl_1.Api.ChatInviteAlready) {
                return invite.chat;
            }
        }
        else if (username) {
            try {
                const result = await client.api.contacts.resolveUsername({
                    username: username,
                });
                const pid = utils.getPeerId(result.peer, false);
                if (result.peer instanceof tl_1.Api.PeerUser) {
                    for (const x of result.users) {
                        if ((0, Helpers_1.returnBigInt)(x.id).equals((0, Helpers_1.returnBigInt)(pid))) {
                            return x;
                        }
                    }
                }
                else {
                    for (const x of result.chats) {
                        if ((0, Helpers_1.returnBigInt)(x.id).equals((0, Helpers_1.returnBigInt)(pid))) {
                            return x;
                        }
                    }
                }
            }
            catch (e) {
                if (e.errorMessage === "USERNAME_NOT_OCCUPIED") {
                    throw new Error(`No user has "${username}" as username`);
                }
                throw e;
            }
        }
    }
    throw new Error(`Cannot find any entity corresponding to "${string}"`);
}
/** @hidden */
async function getPeerId(client, peer, addMark = true) {
    if (typeof peer == "string") {
        const valid = (0, Utils_1.parseID)(peer);
        if (valid) {
            return utils.getPeerId(peer, addMark);
        }
        else {
            peer = await client.getInputEntity(peer);
        }
    }
    if (typeof peer == "number" ||
        typeof peer == "bigint" ||
        big_integer_1.default.isInstance(peer)) {
        return utils.getPeerId(peer, addMark);
    }
    if (peer.SUBCLASS_OF_ID == (0, Helpers_1.unionId)("Peer") || peer.SUBCLASS_OF_ID == (0, Helpers_1.unionId)("InputPeer")) {
        peer = await client.getInputEntity(peer);
    }
    if (peer instanceof tl_1.Api.InputPeerSelf) {
        peer = await client.getMe(true);
    }
    return utils.getPeerId(peer, addMark);
}
/** @hidden */
async function _getPeer(client, peer) {
    if (!peer) {
        return undefined;
    }
    const [i, cls] = utils.resolveId((0, Helpers_1.returnBigInt)(await client.getPeerId(peer)));
    return new cls({
        userId: i,
        channelId: i,
        chatId: i,
    });
}
/** @hidden */
async function _getInputDialog(client, dialog) {
    try {
        if (dialog.SUBCLASS_OF_ID == (0, Helpers_1.unionId)("InputDialogPeer")) {
            dialog.peer = await client.getInputEntity(dialog.peer);
            return dialog;
        }
        else if (dialog.SUBCLASS_OF_ID == (0, Helpers_1.unionId)("InputPeer")) {
            return new tl_1.Api.InputDialogPeer({
                peer: dialog,
            });
        }
    }
    catch (e) { }
    return new tl_1.Api.InputDialogPeer({
        peer: dialog,
    });
}
/** @hidden */
async function _getInputNotify(client, notify) {
    try {
        if (notify.SUBCLASS_OF_ID == (0, Helpers_1.unionId)("InputNotifyPeer")) {
            if (notify instanceof tl_1.Api.InputNotifyPeer) {
                notify.peer = await client.getInputEntity(notify.peer);
            }
            return notify;
        }
    }
    catch (e) { }
    return new tl_1.Api.InputNotifyPeer({
        peer: await client.getInputEntity(notify),
    });
}
/** @hidden */
function _selfId(client) {
    return client._selfInputPeer ? client._selfInputPeer.userId : undefined;
}
