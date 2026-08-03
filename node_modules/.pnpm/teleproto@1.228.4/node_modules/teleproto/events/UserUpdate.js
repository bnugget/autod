"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateEvent = exports.UserUpdate = void 0;
const tl_1 = require("../tl");
const common_1 = require("./common");
const big_integer_1 = __importDefault(require("big-integer"));
/**
 * Occurs whenever a user goes online, starts typing, etc.
 *
 * @example
 * ```ts
 * client.addEventHandler((event: UserUpdateEvent) => {
 *     if (event.online) {
 *         console.log(`${event.userId} is now online!`);
 *     }
 *     if (event.typing) {
 *         console.log(`${event.userId} is typing...`);
 *     }
 * }, new UserUpdate({}));
 * ```
 */
class UserUpdate extends common_1.EventBuilder {
    constructor(params = {}) {
        super({
            chats: params.chats,
            blacklistChats: params.blacklistChats,
            func: params.func,
        });
    }
    async _resolve(client) {
        this.chats = await (0, common_1._intoIdSet)(client, this.chats);
    }
    build(update) {
        if (update instanceof tl_1.Api.UpdateUserStatus) {
            return new UserUpdateEvent(update);
        }
        if (update instanceof tl_1.Api.UpdateUserTyping ||
            update instanceof tl_1.Api.UpdateChatUserTyping ||
            update instanceof tl_1.Api.UpdateChannelUserTyping) {
            return new UserUpdateEvent(update);
        }
        return undefined;
    }
    filter(event) {
        var _a;
        if (this.chats != undefined) {
            const userId = (_a = event.userId) === null || _a === void 0 ? void 0 : _a.toString();
            if (!userId || !this.chats.includes(userId)) {
                if (!this.blacklistChats) {
                    return undefined;
                }
            }
            else if (this.blacklistChats) {
                return undefined;
            }
        }
        if (this.func && !this.func(event)) {
            return undefined;
        }
        return event;
    }
}
exports.UserUpdate = UserUpdate;
/**
 * Represents a user update event (status change or typing action).
 */
class UserUpdateEvent extends common_1.EventCommonSender {
    constructor(update) {
        let chatPeer;
        let userId;
        if (update instanceof tl_1.Api.UpdateUserStatus) {
            userId = update.userId;
            chatPeer = new tl_1.Api.PeerUser({ userId: update.userId });
        }
        else if (update instanceof tl_1.Api.UpdateUserTyping) {
            userId = update.userId;
            chatPeer = new tl_1.Api.PeerUser({ userId: update.userId });
        }
        else if (update instanceof tl_1.Api.UpdateChatUserTyping) {
            userId = update.fromId instanceof tl_1.Api.PeerUser
                ? update.fromId.userId
                : big_integer_1.default.zero;
            chatPeer = new tl_1.Api.PeerChat({ chatId: update.chatId });
        }
        else {
            // UpdateChannelUserTyping
            userId = update.fromId instanceof tl_1.Api.PeerUser
                ? update.fromId.userId
                : big_integer_1.default.zero;
            chatPeer = new tl_1.Api.PeerChannel({ channelId: update.channelId });
        }
        super({ chatPeer });
        this._eventName = "UserUpdate";
        this.originalUpdate = update;
        this._userId = userId;
        if (update instanceof tl_1.Api.UpdateUserStatus) {
            this._status = update.status;
        }
        else {
            this._action = update.action;
            if (update instanceof tl_1.Api.UpdateChatUserTyping) {
                this._chatId = update.chatId;
            }
            else if (update instanceof tl_1.Api.UpdateChannelUserTyping) {
                this._chatId = update.channelId;
            }
        }
    }
    /**
     * The ID of the user whose status/action changed.
     */
    get userId() {
        return this._userId;
    }
    /**
     * The raw status object (if this is a status update).
     */
    get status() {
        return this._status;
    }
    /**
     * The raw action object (if this is a typing/action update).
     */
    get action() {
        return this._action;
    }
    // ==================== Status Properties ====================
    /**
     * Whether the user is currently online.
     */
    get online() {
        if (!this._status)
            return undefined;
        return this._status instanceof tl_1.Api.UserStatusOnline;
    }
    /**
     * Whether the user went offline.
     */
    get offline() {
        if (!this._status)
            return undefined;
        return this._status instanceof tl_1.Api.UserStatusOffline;
    }
    /**
     * When the user's online status expires (if online).
     */
    get until() {
        if (this._status instanceof tl_1.Api.UserStatusOnline) {
            return new Date(this._status.expires * 1000);
        }
        return undefined;
    }
    /**
     * When the user was last seen (if offline).
     */
    get lastSeen() {
        if (this._status instanceof tl_1.Api.UserStatusOffline) {
            return new Date(this._status.wasOnline * 1000);
        }
        return undefined;
    }
    /**
     * Whether the user was seen recently.
     */
    get recently() {
        if (!this._status)
            return undefined;
        return this._status instanceof tl_1.Api.UserStatusRecently;
    }
    /**
     * Whether the user was seen within the last week.
     */
    get withinWeeks() {
        if (!this._status)
            return undefined;
        return this._status instanceof tl_1.Api.UserStatusLastWeek;
    }
    /**
     * Whether the user was seen within the last month.
     */
    get withinMonths() {
        if (!this._status)
            return undefined;
        return this._status instanceof tl_1.Api.UserStatusLastMonth;
    }
    // ==================== Action Properties ====================
    /**
     * Whether the user is typing a message.
     */
    get typing() {
        if (!this._action)
            return undefined;
        return this._action instanceof tl_1.Api.SendMessageTypingAction;
    }
    /**
     * Whether the user cancelled the action.
     */
    get cancel() {
        if (!this._action)
            return undefined;
        return this._action instanceof tl_1.Api.SendMessageCancelAction;
    }
    /**
     * Whether the user is recording something (audio, video, or round).
     */
    get recording() {
        if (!this._action)
            return undefined;
        return (this._action instanceof tl_1.Api.SendMessageRecordVideoAction ||
            this._action instanceof tl_1.Api.SendMessageRecordAudioAction ||
            this._action instanceof tl_1.Api.SendMessageRecordRoundAction);
    }
    /**
     * Whether the user is uploading something.
     */
    get uploading() {
        if (!this._action)
            return undefined;
        return (this._action instanceof tl_1.Api.SendMessageUploadVideoAction ||
            this._action instanceof tl_1.Api.SendMessageUploadAudioAction ||
            this._action instanceof tl_1.Api.SendMessageUploadPhotoAction ||
            this._action instanceof tl_1.Api.SendMessageUploadDocumentAction ||
            this._action instanceof tl_1.Api.SendMessageUploadRoundAction);
    }
    /**
     * Whether the user is recording or sending audio.
     */
    get audio() {
        if (!this._action)
            return undefined;
        return (this._action instanceof tl_1.Api.SendMessageRecordAudioAction ||
            this._action instanceof tl_1.Api.SendMessageUploadAudioAction);
    }
    /**
     * Whether the user is recording or sending video.
     */
    get video() {
        if (!this._action)
            return undefined;
        return (this._action instanceof tl_1.Api.SendMessageRecordVideoAction ||
            this._action instanceof tl_1.Api.SendMessageUploadVideoAction);
    }
    /**
     * Whether the user is recording or sending a round video.
     */
    get round() {
        if (!this._action)
            return undefined;
        return (this._action instanceof tl_1.Api.SendMessageRecordRoundAction ||
            this._action instanceof tl_1.Api.SendMessageUploadRoundAction);
    }
    /**
     * Whether the user is uploading a photo.
     */
    get photo() {
        if (!this._action)
            return undefined;
        return this._action instanceof tl_1.Api.SendMessageUploadPhotoAction;
    }
    /**
     * Whether the user is uploading a document.
     */
    get document() {
        if (!this._action)
            return undefined;
        return this._action instanceof tl_1.Api.SendMessageUploadDocumentAction;
    }
    /**
     * Whether the user is sending a geo location.
     */
    get geo() {
        if (!this._action)
            return undefined;
        return this._action instanceof tl_1.Api.SendMessageGeoLocationAction;
    }
    /**
     * Whether the user is choosing a contact to share.
     */
    get contact() {
        if (!this._action)
            return undefined;
        return this._action instanceof tl_1.Api.SendMessageChooseContactAction;
    }
    /**
     * Whether the user is playing a game.
     */
    get playing() {
        if (!this._action)
            return undefined;
        return this._action instanceof tl_1.Api.SendMessageGamePlayAction;
    }
    /**
     * Whether the user is choosing a sticker.
     */
    get sticker() {
        if (!this._action)
            return undefined;
        return this._action instanceof tl_1.Api.SendMessageChooseStickerAction;
    }
    /**
     * Upload progress (0-100) if uploading, otherwise undefined.
     */
    get uploadProgress() {
        if (this._action instanceof tl_1.Api.SendMessageUploadVideoAction ||
            this._action instanceof tl_1.Api.SendMessageUploadAudioAction ||
            this._action instanceof tl_1.Api.SendMessageUploadPhotoAction ||
            this._action instanceof tl_1.Api.SendMessageUploadDocumentAction ||
            this._action instanceof tl_1.Api.SendMessageUploadRoundAction) {
            return this._action.progress;
        }
        return undefined;
    }
    /**
     * Fetches the User entity for this event.
     */
    async getUser() {
        if (!this._client)
            return undefined;
        try {
            const result = await this._client.getEntity(new tl_1.Api.PeerUser({ userId: this._userId }));
            if (result instanceof tl_1.Api.User) {
                return result;
            }
        }
        catch (_a) {
            return undefined;
        }
        return undefined;
    }
    /**
     * Gets the InputUser for this event.
     */
    async getInputUser() {
        if (!this._client)
            return undefined;
        try {
            return await this._client.getInputEntity(new tl_1.Api.PeerUser({ userId: this._userId }));
        }
        catch (_a) {
            return undefined;
        }
    }
}
exports.UserUpdateEvent = UserUpdateEvent;
