"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReadEvent = exports.MessageRead = void 0;
const tl_1 = require("../tl");
const common_1 = require("./common");
/**
 * Occurs whenever messages are marked as read.
 *
 * @example
 * ```ts
 * // When others read your messages
 * client.addEventHandler((event: MessageReadEvent) => {
 *     console.log(`Messages up to ${event.maxId} were read`);
 *     if (event.outbox) {
 *         console.log("Someone read my message!");
 *     }
 * }, new MessageRead({}));
 *
 * // When you read messages
 * client.addEventHandler((event: MessageReadEvent) => {
 *     console.log("I read messages");
 * }, new MessageRead({ inbox: true }));
 * ```
 */
class MessageRead extends common_1.EventBuilder {
    constructor(params = {}) {
        super({
            chats: params.chats,
            blacklistChats: params.blacklistChats,
            func: params.func,
        });
        this._inbox = params.inbox;
    }
    async _resolve(client) {
        await super._resolve(client);
    }
    build(update) {
        if (update instanceof tl_1.Api.UpdateReadHistoryInbox ||
            update instanceof tl_1.Api.UpdateReadHistoryOutbox ||
            update instanceof tl_1.Api.UpdateReadChannelInbox ||
            update instanceof tl_1.Api.UpdateReadChannelOutbox ||
            update instanceof tl_1.Api.UpdateReadMessagesContents ||
            update instanceof tl_1.Api.UpdateChannelReadMessagesContents) {
            return new MessageReadEvent(update);
        }
        return undefined;
    }
    filter(event) {
        // Filter by inbox/outbox preference
        if (this._inbox !== undefined) {
            if (this._inbox !== event.inbox) {
                return undefined;
            }
        }
        // Apply chat filter
        if (this.chats !== undefined && event.chatId) {
            const chatIdStr = event.chatId.toString();
            const inside = this.chats.includes(chatIdStr);
            if (inside === this.blacklistChats) {
                return undefined;
            }
        }
        if (this.func && !this.func(event)) {
            return undefined;
        }
        return event;
    }
}
exports.MessageRead = MessageRead;
/**
 * Represents a message read event.
 */
class MessageReadEvent extends common_1.EventCommon {
    constructor(update) {
        let chatPeer;
        let isOutbox = false;
        let isContents = false;
        let maxId = 0;
        let messageIds = [];
        if (update instanceof tl_1.Api.UpdateReadHistoryInbox) {
            chatPeer = update.peer;
            isOutbox = false;
            maxId = update.maxId;
        }
        else if (update instanceof tl_1.Api.UpdateReadHistoryOutbox) {
            chatPeer = update.peer;
            isOutbox = true;
            maxId = update.maxId;
        }
        else if (update instanceof tl_1.Api.UpdateReadChannelInbox) {
            chatPeer = new tl_1.Api.PeerChannel({ channelId: update.channelId });
            isOutbox = false;
            maxId = update.maxId;
        }
        else if (update instanceof tl_1.Api.UpdateReadChannelOutbox) {
            chatPeer = new tl_1.Api.PeerChannel({ channelId: update.channelId });
            isOutbox = true;
            maxId = update.maxId;
        }
        else if (update instanceof tl_1.Api.UpdateReadMessagesContents) {
            isContents = true;
            messageIds = update.messages;
            maxId = messageIds.length > 0 ? Math.max(...messageIds) : 0;
        }
        else if (update instanceof tl_1.Api.UpdateChannelReadMessagesContents) {
            chatPeer = new tl_1.Api.PeerChannel({ channelId: update.channelId });
            isContents = true;
            messageIds = update.messages;
            maxId = messageIds.length > 0 ? Math.max(...messageIds) : 0;
        }
        super({ chatPeer });
        this._eventName = "MessageRead";
        this.originalUpdate = update;
        this._outbox = isOutbox;
        this._contents = isContents;
        this._maxId = maxId;
        this._messageIds = messageIds;
    }
    /**
     * Up to which message ID has been read.
     * Every message with ID <= maxId has been read.
     */
    get maxId() {
        return this._maxId;
    }
    /**
     * True if someone else read YOUR messages (outbox read).
     */
    get outbox() {
        return this._outbox;
    }
    /**
     * True if YOU read someone else's messages (inbox read).
     */
    get inbox() {
        return !this._outbox;
    }
    /**
     * True if this is a content read (e.g., voice message played).
     */
    get contents() {
        return this._contents;
    }
    /**
     * The IDs of messages whose contents were read.
     * Only set when `contents` is True.
     */
    get messageIds() {
        return this._messageIds;
    }
    /**
     * Whether any message IDs are available.
     */
    get isRead() {
        return this._maxId > 0 || this._messageIds.length > 0;
    }
    /**
     * Gets messages that were read (if message IDs are available).
     * Only works for content reads.
     */
    async getMessages() {
        if (!this._client || this._messageIds.length === 0) {
            return undefined;
        }
        if (!this.chatId) {
            return undefined;
        }
        try {
            return await this._client.getMessages(this.chatId, {
                ids: this._messageIds,
            });
        }
        catch (_a) {
            return undefined;
        }
    }
}
exports.MessageReadEvent = MessageReadEvent;
