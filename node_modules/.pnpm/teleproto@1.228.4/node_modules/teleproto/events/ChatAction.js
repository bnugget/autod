"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatActionEvent = exports.ChatAction = void 0;
const tl_1 = require("../tl");
const common_1 = require("./common");
/**
 * Occurs on chat actions: user joined/left/kicked, title/photo changed,
 * messages pinned, chat created, etc.
 *
 * @example
 * ```ts
 * client.addEventHandler((event: ChatActionEvent) => {
 *     if (event.userJoined) {
 *         console.log(`User ${event.userId} joined!`);
 *     }
 *     if (event.userLeft) {
 *         console.log(`User ${event.userId} left`);
 *     }
 *     if (event.newTitle) {
 *         console.log(`New title: ${event.newTitle}`);
 *     }
 *     if (event.newPin) {
 *         console.log(`Message pinned: ${event.pinnedMessageIds}`);
 *     }
 * }, new ChatAction({}));
 * ```
 */
class ChatAction extends common_1.EventBuilder {
    constructor(params = {}) {
        super({
            chats: params.chats,
            blacklistChats: params.blacklistChats,
            func: params.func,
        });
    }
    build(update) {
        // Direct participant updates
        if (update instanceof tl_1.Api.UpdateChatParticipantAdd ||
            update instanceof tl_1.Api.UpdateChatParticipantDelete ||
            update instanceof tl_1.Api.UpdateChatParticipant ||
            update instanceof tl_1.Api.UpdateChannelParticipant) {
            return new ChatActionEvent(update);
        }
        // Pinned messages
        if (update instanceof tl_1.Api.UpdatePinnedMessages ||
            update instanceof tl_1.Api.UpdatePinnedChannelMessages) {
            return new ChatActionEvent(update);
        }
        // Service messages with actions
        if (update instanceof tl_1.Api.UpdateNewMessage ||
            update instanceof tl_1.Api.UpdateNewChannelMessage) {
            const msg = update.message;
            if (msg instanceof tl_1.Api.MessageService && msg.action) {
                // Check if it's a chat action we care about
                if (msg.action instanceof tl_1.Api.MessageActionChatCreate ||
                    msg.action instanceof tl_1.Api.MessageActionChannelCreate ||
                    msg.action instanceof tl_1.Api.MessageActionChatEditTitle ||
                    msg.action instanceof tl_1.Api.MessageActionChatEditPhoto ||
                    msg.action instanceof tl_1.Api.MessageActionChatDeletePhoto ||
                    msg.action instanceof tl_1.Api.MessageActionChatAddUser ||
                    msg.action instanceof tl_1.Api.MessageActionChatDeleteUser ||
                    msg.action instanceof tl_1.Api.MessageActionChatJoinedByLink ||
                    msg.action instanceof tl_1.Api.MessageActionPinMessage ||
                    msg.action instanceof tl_1.Api.MessageActionChatJoinedByRequest) {
                    return new ChatActionEvent(update, msg);
                }
            }
        }
        return undefined;
    }
}
exports.ChatAction = ChatAction;
class ChatActionEvent extends common_1.EventCommon {
    constructor(update, actionMessage) {
        let chatPeer;
        // Determine chat peer based on update type
        if (update instanceof tl_1.Api.UpdateChatParticipantAdd) {
            chatPeer = new tl_1.Api.PeerChat({ chatId: update.chatId });
        }
        else if (update instanceof tl_1.Api.UpdateChatParticipantDelete) {
            chatPeer = new tl_1.Api.PeerChat({ chatId: update.chatId });
        }
        else if (update instanceof tl_1.Api.UpdateChatParticipant) {
            chatPeer = new tl_1.Api.PeerChat({ chatId: update.chatId });
        }
        else if (update instanceof tl_1.Api.UpdateChannelParticipant) {
            chatPeer = new tl_1.Api.PeerChannel({ channelId: update.channelId });
        }
        else if (update instanceof tl_1.Api.UpdatePinnedMessages) {
            chatPeer = update.peer;
        }
        else if (update instanceof tl_1.Api.UpdatePinnedChannelMessages) {
            chatPeer = new tl_1.Api.PeerChannel({ channelId: update.channelId });
        }
        else if (actionMessage) {
            chatPeer = actionMessage.peerId;
        }
        super({ chatPeer });
        this._eventName = "ChatAction";
        this.originalUpdate = update;
        this._actionMessage = actionMessage;
        this._userIds = [];
        this._pinnedIds = [];
        this._pinned = false;
        this._created = false;
        this._parseUpdate(update, actionMessage);
    }
    _parseUpdate(update, actionMessage) {
        var _a, _b;
        // Handle participant updates
        if (update instanceof tl_1.Api.UpdateChatParticipantAdd) {
            this._userIds = [update.userId];
            this._addedBy = update.inviterId;
        }
        else if (update instanceof tl_1.Api.UpdateChatParticipantDelete) {
            this._userIds = [update.userId];
        }
        else if (update instanceof tl_1.Api.UpdateChatParticipant) {
            this._userIds = [update.userId];
            if (update.newParticipant && !update.prevParticipant) {
                this._addedBy = update.actorId;
            }
            else if (!update.newParticipant && update.prevParticipant) {
                this._kickedBy = update.actorId;
            }
        }
        else if (update instanceof tl_1.Api.UpdateChannelParticipant) {
            this._userIds = [update.userId];
            if (update.newParticipant && !update.prevParticipant) {
                this._addedBy = update.actorId;
            }
            else if (!update.newParticipant && update.prevParticipant) {
                this._kickedBy = update.actorId;
            }
        }
        // Handle pinned messages
        if (update instanceof tl_1.Api.UpdatePinnedMessages) {
            this._pinnedIds = update.messages;
            this._pinned = (_a = update.pinned) !== null && _a !== void 0 ? _a : true;
        }
        else if (update instanceof tl_1.Api.UpdatePinnedChannelMessages) {
            this._pinnedIds = update.messages;
            this._pinned = (_b = update.pinned) !== null && _b !== void 0 ? _b : true;
        }
        // Handle service message actions
        if (actionMessage === null || actionMessage === void 0 ? void 0 : actionMessage.action) {
            const action = actionMessage.action;
            if (action instanceof tl_1.Api.MessageActionChatCreate) {
                this._created = true;
                this._newTitle = action.title;
                this._userIds = action.users;
            }
            else if (action instanceof tl_1.Api.MessageActionChannelCreate) {
                this._created = true;
                this._newTitle = action.title;
            }
            else if (action instanceof tl_1.Api.MessageActionChatEditTitle) {
                this._newTitle = action.title;
            }
            else if (action instanceof tl_1.Api.MessageActionChatEditPhoto) {
                this._newPhoto = action.photo;
            }
            else if (action instanceof tl_1.Api.MessageActionChatAddUser) {
                this._userIds = action.users;
                if (actionMessage.fromId instanceof tl_1.Api.PeerUser) {
                    this._addedBy = actionMessage.fromId.userId;
                }
            }
            else if (action instanceof tl_1.Api.MessageActionChatDeleteUser) {
                this._userIds = [action.userId];
                if (actionMessage.fromId instanceof tl_1.Api.PeerUser) {
                    if (!action.userId.eq(actionMessage.fromId.userId)) {
                        this._kickedBy = actionMessage.fromId.userId;
                    }
                }
            }
            else if (action instanceof tl_1.Api.MessageActionChatJoinedByLink) {
                if (actionMessage.fromId instanceof tl_1.Api.PeerUser) {
                    this._userIds = [actionMessage.fromId.userId];
                }
                this._addedBy = action.inviterId;
            }
            else if (action instanceof tl_1.Api.MessageActionChatJoinedByRequest) {
                if (actionMessage.fromId instanceof tl_1.Api.PeerUser) {
                    this._userIds = [actionMessage.fromId.userId];
                }
            }
            else if (action instanceof tl_1.Api.MessageActionPinMessage) {
                if (actionMessage.replyTo instanceof tl_1.Api.MessageReplyHeader && actionMessage.replyTo.replyToMsgId !== undefined) {
                    this._pinnedIds = [actionMessage.replyTo.replyToMsgId];
                }
                this._pinned = true;
            }
        }
    }
    /**
     * The service message that triggered this event (if any).
     */
    get actionMessage() {
        return this._actionMessage;
    }
    // ==================== User Actions ====================
    /**
     * True if a user joined the chat.
     */
    get userJoined() {
        var _a;
        const action = (_a = this._actionMessage) === null || _a === void 0 ? void 0 : _a.action;
        return (action instanceof tl_1.Api.MessageActionChatJoinedByLink ||
            action instanceof tl_1.Api.MessageActionChatJoinedByRequest ||
            (this.originalUpdate instanceof tl_1.Api.UpdateChatParticipant &&
                !!this.originalUpdate.newParticipant &&
                !this.originalUpdate.prevParticipant) ||
            (this.originalUpdate instanceof tl_1.Api.UpdateChannelParticipant &&
                !!this.originalUpdate.newParticipant &&
                !this.originalUpdate.prevParticipant));
    }
    /**
     * True if a user was added by someone else.
     */
    get userAdded() {
        var _a;
        return (((_a = this._actionMessage) === null || _a === void 0 ? void 0 : _a.action) instanceof tl_1.Api.MessageActionChatAddUser ||
            this.originalUpdate instanceof tl_1.Api.UpdateChatParticipantAdd);
    }
    /**
     * True if a user left the chat.
     */
    get userLeft() {
        var _a, _b;
        const action = (_a = this._actionMessage) === null || _a === void 0 ? void 0 : _a.action;
        if (action instanceof tl_1.Api.MessageActionChatDeleteUser) {
            if (((_b = this._actionMessage) === null || _b === void 0 ? void 0 : _b.fromId) instanceof tl_1.Api.PeerUser) {
                return action.userId.eq(this._actionMessage.fromId.userId);
            }
        }
        if (this.originalUpdate instanceof tl_1.Api.UpdateChatParticipant ||
            this.originalUpdate instanceof tl_1.Api.UpdateChannelParticipant) {
            return (!this.originalUpdate.newParticipant &&
                !!this.originalUpdate.prevParticipant &&
                this.originalUpdate.userId.eq(this.originalUpdate.actorId));
        }
        return false;
    }
    /**
     * True if a user was kicked/banned.
     */
    get userKicked() {
        var _a, _b;
        const action = (_a = this._actionMessage) === null || _a === void 0 ? void 0 : _a.action;
        if (action instanceof tl_1.Api.MessageActionChatDeleteUser) {
            if (((_b = this._actionMessage) === null || _b === void 0 ? void 0 : _b.fromId) instanceof tl_1.Api.PeerUser) {
                return !action.userId.eq(this._actionMessage.fromId.userId);
            }
        }
        if (this.originalUpdate instanceof tl_1.Api.UpdateChatParticipant ||
            this.originalUpdate instanceof tl_1.Api.UpdateChannelParticipant) {
            return (!this.originalUpdate.newParticipant &&
                !!this.originalUpdate.prevParticipant &&
                !this.originalUpdate.userId.eq(this.originalUpdate.actorId));
        }
        return this.originalUpdate instanceof tl_1.Api.UpdateChatParticipantDelete;
    }
    /**
     * The user IDs affected by this action.
     */
    get userIds() {
        return this._userIds;
    }
    /**
     * The first user ID (convenience getter).
     */
    get userId() {
        return this._userIds.length > 0 ? this._userIds[0] : undefined;
    }
    /**
     * The user ID who added someone (if applicable).
     */
    get addedBy() {
        return this._addedBy;
    }
    /**
     * The user ID who kicked someone (if applicable).
     */
    get kickedBy() {
        return this._kickedBy;
    }
    // ==================== Chat Changes ====================
    /**
     * True if this is a new chat/channel creation.
     */
    get created() {
        return this._created;
    }
    /**
     * The new chat title (if changed).
     */
    get newTitle() {
        return this._newTitle;
    }
    /**
     * True if the chat photo was changed.
     */
    get newPhoto() {
        var _a;
        return (this._newPhoto !== undefined ||
            ((_a = this._actionMessage) === null || _a === void 0 ? void 0 : _a.action) instanceof tl_1.Api.MessageActionChatEditPhoto);
    }
    /**
     * True if the chat photo was deleted.
     */
    get photoDeleted() {
        var _a;
        return ((_a = this._actionMessage) === null || _a === void 0 ? void 0 : _a.action) instanceof tl_1.Api.MessageActionChatDeletePhoto;
    }
    /**
     * The new photo object (if available).
     */
    get photo() {
        return this._newPhoto;
    }
    // ==================== Pin Actions ====================
    /**
     * True if a message was pinned.
     */
    get newPin() {
        return this._pinned && this._pinnedIds.length > 0;
    }
    /**
     * True if a message was unpinned.
     */
    get unpin() {
        return !this._pinned && this._pinnedIds.length > 0;
    }
    /**
     * The IDs of pinned/unpinned messages.
     */
    get pinnedMessageIds() {
        return this._pinnedIds;
    }
    /**
     * The first pinned message ID.
     */
    get pinnedMessageId() {
        return this._pinnedIds.length > 0 ? this._pinnedIds[0] : undefined;
    }
    // ==================== Methods ====================
    /**
     * Get the pinned message(s).
     */
    async getPinnedMessages() {
        if (!this._client || this._pinnedIds.length === 0 || !this.chatId) {
            return undefined;
        }
        try {
            return await this._client.getMessages(this.chatId, {
                ids: this._pinnedIds,
            });
        }
        catch (_a) {
            return undefined;
        }
    }
    /**
     * Get the first pinned message.
     */
    async getPinnedMessage() {
        const messages = await this.getPinnedMessages();
        return messages && messages.length > 0 ? messages[0] : undefined;
    }
    /**
     * Get the user(s) affected by this action.
     */
    async getUsers() {
        if (!this._client || this._userIds.length === 0) {
            return undefined;
        }
        try {
            const users = [];
            for (const userId of this._userIds) {
                const entity = await this._client.getEntity(new tl_1.Api.PeerUser({ userId }));
                if (entity instanceof tl_1.Api.User) {
                    users.push(entity);
                }
            }
            return users.length > 0 ? users : undefined;
        }
        catch (_a) {
            return undefined;
        }
    }
    /**
     * Get the first affected user.
     */
    async getUser() {
        const users = await this.getUsers();
        return users && users.length > 0 ? users[0] : undefined;
    }
    /**
     * Respond to the action in the same chat.
     */
    async respond(params) {
        if (!this._client || !this.chatId)
            return undefined;
        return this._client.sendMessage(this.chatId, params);
    }
}
exports.ChatActionEvent = ChatActionEvent;
