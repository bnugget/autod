"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedMessageEvent = exports.DeletedMessage = void 0;
const tl_1 = require("../tl");
const common_1 = require("./common");
/**
 * Occurs whenever a message is deleted. Note that this event isn't 100%
 * reliable, since Telegram doesn't always notify the clients that a message
 * was deleted.
 *
 * @remarks
 * Telegram **does not** send information about *where* a message
 * was deleted if it occurs in private conversations with other users
 * or in small group chats, because message IDs are *unique* and you
 * can identify the chat with the message ID alone if you saved it
 * previously.
 *
 * teleproto **does not** save information of where messages occur,
 * so it cannot know in which chat a message was deleted (this will
 * only work in channels, where the channel ID *is* present).
 *
 * This means that the `chats:` parameter will not work reliably,
 * unless you intend on working with channels and super-groups only.
 *
 * @example
 * ```ts
 * client.addEventHandler((event: DeletedMessageEvent) => {
 *     console.log(`Deleted message IDs: ${event.deletedIds}`);
 *     if (event.deletedId) {
 *         console.log(`First deleted: ${event.deletedId}`);
 *     }
 * }, new DeletedMessage({}));
 * ```
 */
class DeletedMessage extends common_1.EventBuilder {
    constructor(eventParams = {}) {
        super(eventParams);
    }
    build(update) {
        if (update instanceof tl_1.Api.UpdateDeleteChannelMessages) {
            return new DeletedMessageEvent(update.messages, update, new tl_1.Api.PeerChannel({ channelId: update.channelId }));
        }
        else if (update instanceof tl_1.Api.UpdateDeleteMessages) {
            return new DeletedMessageEvent(update.messages, update);
        }
        return undefined;
    }
}
exports.DeletedMessage = DeletedMessage;
class DeletedMessageEvent extends common_1.EventCommon {
    constructor(deletedIds, originalUpdate, peer) {
        super({
            chatPeer: peer,
            msgId: Array.isArray(deletedIds) && deletedIds.length > 0 ? deletedIds[0] : undefined,
        });
        this.originalUpdate = originalUpdate;
        this.deletedIds = deletedIds;
        this.peer = peer;
    }
    /**
     * The first deleted message ID, or undefined if empty.
     */
    get deletedId() {
        return this.deletedIds.length > 0 ? this.deletedIds[0] : undefined;
    }
    /**
     * Whether this deletion occurred in a channel/supergroup.
     */
    get isChannel() {
        return this.originalUpdate instanceof tl_1.Api.UpdateDeleteChannelMessages;
    }
}
exports.DeletedMessageEvent = DeletedMessageEvent;
