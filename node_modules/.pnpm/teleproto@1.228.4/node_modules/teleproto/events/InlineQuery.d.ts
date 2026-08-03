import { Api } from "../tl";
import type { TelegramClient } from "../client/TelegramClient";
import type { Entity, EntityLike } from "../define";
import { EventBuilder, EventCommonSender } from "./common";
import bigInt from "big-integer";
export interface InlineQueryInterface {
    /**
     * Filter by users. Only inline queries from these users will be handled.
     */
    users?: EntityLike[];
    /**
     * Whether to treat the users as a blacklist.
     */
    blacklistUsers?: boolean;
    /**
     * Pattern to match against the query text.
     * Can be a string (will be compiled to regex) or RegExp.
     */
    pattern?: string | RegExp;
    /**
     * Custom filter function.
     */
    func?: CallableFunction;
}
type InlineQueryUpdate = Api.UpdateBotInlineQuery | Api.UpdateBotInlineSend;
/**
 * Occurs when a user sends an inline query to your bot (e.g., @bot query).
 *
 * @remarks
 * This event only works for bot accounts.
 *
 * @example
 * ```ts
 * client.addEventHandler(async (event: InlineQueryEvent) => {
 *     console.log(`Query: ${event.text}`);
 *
 *     // Respond with results
 *     await event.answer([
 *         event.builder.article("Title", { text: "Content", description: "Description" })
 *     ]);
 * }, new InlineQuery({}));
 *
 * // With pattern matching
 * client.addEventHandler(async (event: InlineQueryEvent) => {
 *     console.log(`Matched: ${event.patternMatch?.[1]}`);
 * }, new InlineQuery({ pattern: /search (.+)/ }));
 * ```
 */
export declare class InlineQuery extends EventBuilder {
    private _users?;
    private _blacklistUsers;
    private _pattern?;
    constructor(params?: InlineQueryInterface);
    _resolve(client: TelegramClient): Promise<void>;
    build(update: Api.TypeUpdate): InlineQueryEvent | undefined;
    filter(event: InlineQueryEvent): InlineQueryEvent | undefined;
}
/**
 * Helper class for building inline query results.
 */
export declare class InlineBuilder {
    private _resultId;
    private _nextId;
    /**
     * Creates an article result.
     */
    article(title: string, params?: {
        id?: string;
        description?: string;
        text?: string;
        parseMode?: string;
        entities?: Api.TypeMessageEntity[];
        url?: string;
        thumb?: Api.TypeInputWebDocument;
        content?: Api.TypeInputWebDocument;
        linkPreview?: boolean;
        replyMarkup?: Api.TypeReplyMarkup;
    }): Api.InputBotInlineResult;
    /**
     * Creates a photo result from an existing photo.
     */
    photo(photo: Api.TypeInputPhoto, params?: {
        id?: string;
        text?: string;
        entities?: Api.TypeMessageEntity[];
        replyMarkup?: Api.TypeReplyMarkup;
    }): Api.InputBotInlineResultPhoto;
    /**
     * Creates a document result.
     */
    document(document: Api.TypeInputDocument, params?: {
        id?: string;
        type?: string;
        title?: string;
        description?: string;
        text?: string;
        entities?: Api.TypeMessageEntity[];
        replyMarkup?: Api.TypeReplyMarkup;
    }): Api.InputBotInlineResultDocument;
    /**
     * Creates a game result.
     */
    game(shortName: string, params?: {
        id?: string;
        replyMarkup?: Api.TypeReplyMarkup;
    }): Api.InputBotInlineResultGame;
    /**
     * Creates a geo location result.
     */
    geo(geoPoint: Api.TypeInputGeoPoint, params?: {
        id?: string;
        title?: string;
        description?: string;
        heading?: number;
        period?: number;
        proximityNotificationRadius?: number;
        replyMarkup?: Api.TypeReplyMarkup;
    }): Api.InputBotInlineResult;
    /**
     * Creates a venue result.
     */
    venue(geoPoint: Api.TypeInputGeoPoint, title: string, address: string, params?: {
        id?: string;
        description?: string;
        provider?: string;
        venueId?: string;
        venueType?: string;
        replyMarkup?: Api.TypeReplyMarkup;
    }): Api.InputBotInlineResult;
    /**
     * Creates a contact result.
     */
    contact(phoneNumber: string, firstName: string, params?: {
        id?: string;
        lastName?: string;
        vcard?: string;
        description?: string;
        replyMarkup?: Api.TypeReplyMarkup;
    }): Api.InputBotInlineResult;
}
/**
 * Represents an inline query event.
 */
export declare class InlineQueryEvent extends EventCommonSender {
    _eventName: string;
    originalUpdate: InlineQueryUpdate & {
        _entities?: Map<string, Entity>;
    };
    private _userId;
    private _queryId?;
    private _text;
    private _offset;
    private _geo?;
    private _peerType?;
    private _resultId?;
    private _msgId?;
    private _isChosen;
    _patternMatch?: RegExpMatchArray;
    private _builder?;
    private _answered;
    constructor(update: InlineQueryUpdate);
    /**
     * The unique query ID.
     */
    get id(): bigInt.BigInteger | undefined;
    /**
     * The query text sent by the user.
     */
    get text(): string;
    /**
     * Alias for text.
     */
    get query(): string;
    /**
     * The offset for pagination.
     */
    get offset(): string;
    /**
     * The user ID who sent the query.
     */
    get userId(): bigInt.BigInteger;
    /**
     * The geographic location of the user (if shared).
     */
    get geo(): Api.TypeGeoPoint | undefined;
    /**
     * The type of peer from which the query was sent.
     */
    get peerType(): Api.TypeInlineQueryPeerType | undefined;
    /**
     * Whether this is a "chosen result" event (UpdateBotInlineSend).
     */
    get isChosen(): boolean;
    /**
     * The chosen result ID (only for UpdateBotInlineSend).
     */
    get resultId(): string | undefined;
    /**
     * The message ID of the sent inline message (only for UpdateBotInlineSend).
     */
    get msgId(): Api.TypeInputBotInlineMessageID | undefined;
    /**
     * The regex pattern match result (if pattern was set in InlineQuery).
     */
    get patternMatch(): RegExpMatchArray | undefined;
    /**
     * A helper to build inline results.
     */
    get builder(): InlineBuilder;
    /**
     * Whether this query has already been answered.
     */
    get answered(): boolean;
    /**
     * Answer the inline query with results.
     *
     * @param results - Array of inline results (max 50)
     * @param params - Additional parameters
     */
    answer(results?: Api.TypeInputBotInlineResult[], params?: {
        cacheTime?: number;
        gallery?: boolean;
        private?: boolean;
        nextOffset?: string;
        switchPm?: {
            text: string;
            startParam: string;
        };
        switchWebview?: {
            text: string;
            url: string;
        };
    }): Promise<boolean>;
    /**
     * Get the user who sent the query.
     */
    getUser(): Promise<Api.User | undefined>;
}
export {};
