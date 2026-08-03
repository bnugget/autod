import { Api } from "../tl";
import type { TelegramClient } from "../client/TelegramClient";
import type { Entity, EntityLike } from "../define";
import { EventBuilder, EventCommonSender } from "./common";
import bigInt from "big-integer";
export interface UserUpdateInterface {
    /**
     * Filter by users. Only updates from these users will be handled.
     */
    chats?: EntityLike[];
    /**
     * Whether to treat the chats as a blacklist instead of whitelist.
     */
    blacklistChats?: boolean;
    /**
     * A callable function that should accept the event as input
     * and return a value indicating whether the event should be dispatched.
     */
    func?: CallableFunction;
}
type TypingUpdate = Api.UpdateUserTyping | Api.UpdateChatUserTyping | Api.UpdateChannelUserTyping;
type UserUpdateType = Api.UpdateUserStatus | TypingUpdate;
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
export declare class UserUpdate extends EventBuilder {
    constructor(params?: UserUpdateInterface);
    _resolve(client: TelegramClient): Promise<void>;
    build(update: Api.TypeUpdate): UserUpdateEvent | undefined;
    filter(event: UserUpdateEvent): UserUpdateEvent | undefined;
}
/**
 * Represents a user update event (status change or typing action).
 */
export declare class UserUpdateEvent extends EventCommonSender {
    _eventName: string;
    originalUpdate: (UserUpdateType) & {
        _entities?: Map<string, Entity>;
    };
    private _status?;
    private _action?;
    private _userId;
    private _chatId?;
    constructor(update: UserUpdateType);
    /**
     * The ID of the user whose status/action changed.
     */
    get userId(): bigInt.BigInteger;
    /**
     * The raw status object (if this is a status update).
     */
    get status(): Api.TypeUserStatus | undefined;
    /**
     * The raw action object (if this is a typing/action update).
     */
    get action(): Api.TypeSendMessageAction | undefined;
    /**
     * Whether the user is currently online.
     */
    get online(): boolean | undefined;
    /**
     * Whether the user went offline.
     */
    get offline(): boolean | undefined;
    /**
     * When the user's online status expires (if online).
     */
    get until(): Date | undefined;
    /**
     * When the user was last seen (if offline).
     */
    get lastSeen(): Date | undefined;
    /**
     * Whether the user was seen recently.
     */
    get recently(): boolean | undefined;
    /**
     * Whether the user was seen within the last week.
     */
    get withinWeeks(): boolean | undefined;
    /**
     * Whether the user was seen within the last month.
     */
    get withinMonths(): boolean | undefined;
    /**
     * Whether the user is typing a message.
     */
    get typing(): boolean | undefined;
    /**
     * Whether the user cancelled the action.
     */
    get cancel(): boolean | undefined;
    /**
     * Whether the user is recording something (audio, video, or round).
     */
    get recording(): boolean | undefined;
    /**
     * Whether the user is uploading something.
     */
    get uploading(): boolean | undefined;
    /**
     * Whether the user is recording or sending audio.
     */
    get audio(): boolean | undefined;
    /**
     * Whether the user is recording or sending video.
     */
    get video(): boolean | undefined;
    /**
     * Whether the user is recording or sending a round video.
     */
    get round(): boolean | undefined;
    /**
     * Whether the user is uploading a photo.
     */
    get photo(): boolean | undefined;
    /**
     * Whether the user is uploading a document.
     */
    get document(): boolean | undefined;
    /**
     * Whether the user is sending a geo location.
     */
    get geo(): boolean | undefined;
    /**
     * Whether the user is choosing a contact to share.
     */
    get contact(): boolean | undefined;
    /**
     * Whether the user is playing a game.
     */
    get playing(): boolean | undefined;
    /**
     * Whether the user is choosing a sticker.
     */
    get sticker(): boolean | undefined;
    /**
     * Upload progress (0-100) if uploading, otherwise undefined.
     */
    get uploadProgress(): number | undefined;
    /**
     * Fetches the User entity for this event.
     */
    getUser(): Promise<Api.User | undefined>;
    /**
     * Gets the InputUser for this event.
     */
    getInputUser(): Promise<Api.InputUser | Api.InputPeerUser | undefined>;
}
export {};
