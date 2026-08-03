import { Api } from "../tl";
import type { Entity, EntityLike } from "../define";
import { EventBuilder, EventCommon } from "./common";
import bigInt from "big-integer";
export interface ChatActionInterface {
    /**
     * Filter by chats.
     */
    chats?: EntityLike[];
    /**
     * Whether to treat the chats as a blacklist.
     */
    blacklistChats?: boolean;
    /**
     * Custom filter function.
     */
    func?: CallableFunction;
}
type ChatActionUpdate = Api.UpdateChatParticipantAdd | Api.UpdateChatParticipantDelete | Api.UpdateChatParticipant | Api.UpdateChannelParticipant | Api.UpdatePinnedMessages | Api.UpdatePinnedChannelMessages | Api.UpdateNewMessage | Api.UpdateNewChannelMessage;
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
export declare class ChatAction extends EventBuilder {
    constructor(params?: ChatActionInterface);
    build(update: Api.TypeUpdate): ChatActionEvent | undefined;
}
export declare class ChatActionEvent extends EventCommon {
    _eventName: string;
    originalUpdate: ChatActionUpdate & {
        _entities?: Map<string, Entity>;
    };
    private _actionMessage?;
    private _addedBy?;
    private _kickedBy?;
    private _userIds;
    private _newTitle?;
    private _newPhoto?;
    private _pinnedIds;
    private _pinned;
    private _created;
    constructor(update: ChatActionUpdate, actionMessage?: Api.MessageService);
    private _parseUpdate;
    /**
     * The service message that triggered this event (if any).
     */
    get actionMessage(): Api.MessageService | undefined;
    /**
     * True if a user joined the chat.
     */
    get userJoined(): boolean;
    /**
     * True if a user was added by someone else.
     */
    get userAdded(): boolean;
    /**
     * True if a user left the chat.
     */
    get userLeft(): boolean;
    /**
     * True if a user was kicked/banned.
     */
    get userKicked(): boolean;
    /**
     * The user IDs affected by this action.
     */
    get userIds(): bigInt.BigInteger[];
    /**
     * The first user ID (convenience getter).
     */
    get userId(): bigInt.BigInteger | undefined;
    /**
     * The user ID who added someone (if applicable).
     */
    get addedBy(): bigInt.BigInteger | undefined;
    /**
     * The user ID who kicked someone (if applicable).
     */
    get kickedBy(): bigInt.BigInteger | undefined;
    /**
     * True if this is a new chat/channel creation.
     */
    get created(): boolean;
    /**
     * The new chat title (if changed).
     */
    get newTitle(): string | undefined;
    /**
     * True if the chat photo was changed.
     */
    get newPhoto(): boolean;
    /**
     * True if the chat photo was deleted.
     */
    get photoDeleted(): boolean;
    /**
     * The new photo object (if available).
     */
    get photo(): Api.TypePhoto | undefined;
    /**
     * True if a message was pinned.
     */
    get newPin(): boolean;
    /**
     * True if a message was unpinned.
     */
    get unpin(): boolean;
    /**
     * The IDs of pinned/unpinned messages.
     */
    get pinnedMessageIds(): number[];
    /**
     * The first pinned message ID.
     */
    get pinnedMessageId(): number | undefined;
    /**
     * Get the pinned message(s).
     */
    getPinnedMessages(): Promise<Api.Message[] | undefined>;
    /**
     * Get the first pinned message.
     */
    getPinnedMessage(): Promise<Api.Message | undefined>;
    /**
     * Get the user(s) affected by this action.
     */
    getUsers(): Promise<Api.User[] | undefined>;
    /**
     * Get the first affected user.
     */
    getUser(): Promise<Api.User | undefined>;
    /**
     * Respond to the action in the same chat.
     */
    respond(params: {
        message?: string;
        parseMode?: any;
        file?: any;
        silent?: boolean;
    }): Promise<Api.Message | undefined>;
}
export {};
