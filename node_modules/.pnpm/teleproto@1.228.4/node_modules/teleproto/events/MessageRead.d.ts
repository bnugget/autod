import { Api } from "../tl";
import type { TelegramClient } from "../client/TelegramClient";
import type { Entity, EntityLike } from "../define";
import { EventBuilder, EventCommon } from "./common";
export interface MessageReadInterface {
    /**
     * Filter by chats where messages were read.
     */
    chats?: EntityLike[];
    /**
     * Whether to treat the chats as a blacklist.
     */
    blacklistChats?: boolean;
    /**
     * If True, only events when YOU read messages will be handled.
     * If False (default), only events when OTHERS read your messages.
     */
    inbox?: boolean;
    /**
     * Custom filter function.
     */
    func?: CallableFunction;
}
type ReadUpdateType = Api.UpdateReadHistoryInbox | Api.UpdateReadHistoryOutbox | Api.UpdateReadChannelInbox | Api.UpdateReadChannelOutbox | Api.UpdateReadMessagesContents | Api.UpdateChannelReadMessagesContents;
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
export declare class MessageRead extends EventBuilder {
    private _inbox?;
    constructor(params?: MessageReadInterface);
    _resolve(client: TelegramClient): Promise<void>;
    build(update: Api.TypeUpdate): MessageReadEvent | undefined;
    filter(event: MessageReadEvent): MessageReadEvent | undefined;
}
/**
 * Represents a message read event.
 */
export declare class MessageReadEvent extends EventCommon {
    _eventName: string;
    originalUpdate: ReadUpdateType & {
        _entities?: Map<string, Entity>;
    };
    private _outbox;
    private _contents;
    private _maxId;
    private _messageIds;
    constructor(update: ReadUpdateType);
    /**
     * Up to which message ID has been read.
     * Every message with ID <= maxId has been read.
     */
    get maxId(): number;
    /**
     * True if someone else read YOUR messages (outbox read).
     */
    get outbox(): boolean;
    /**
     * True if YOU read someone else's messages (inbox read).
     */
    get inbox(): boolean;
    /**
     * True if this is a content read (e.g., voice message played).
     */
    get contents(): boolean;
    /**
     * The IDs of messages whose contents were read.
     * Only set when `contents` is True.
     */
    get messageIds(): number[];
    /**
     * Whether any message IDs are available.
     */
    get isRead(): boolean;
    /**
     * Gets messages that were read (if message IDs are available).
     * Only works for content reads.
     */
    getMessages(): Promise<Api.Message[] | undefined>;
}
export {};
