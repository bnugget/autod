"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryEvent = exports.InlineBuilder = exports.InlineQuery = void 0;
const tl_1 = require("../tl");
const common_1 = require("./common");
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
class InlineQuery extends common_1.EventBuilder {
    constructor(params = {}) {
        var _a;
        super({
            chats: params.users,
            blacklistChats: params.blacklistUsers,
            func: params.func,
        });
        this._blacklistUsers = (_a = params.blacklistUsers) !== null && _a !== void 0 ? _a : false;
        if (params.pattern) {
            this._pattern = typeof params.pattern === "string"
                ? new RegExp(params.pattern)
                : params.pattern;
        }
    }
    async _resolve(client) {
        await super._resolve(client);
        this._users = this.chats;
    }
    build(update) {
        if (update instanceof tl_1.Api.UpdateBotInlineQuery) {
            return new InlineQueryEvent(update);
        }
        if (update instanceof tl_1.Api.UpdateBotInlineSend) {
            return new InlineQueryEvent(update);
        }
        return undefined;
    }
    filter(event) {
        var _a;
        // Filter by users
        if (this._users !== undefined) {
            const userIdStr = (_a = event.userId) === null || _a === void 0 ? void 0 : _a.toString();
            if (!userIdStr)
                return undefined;
            const inside = this._users.includes(userIdStr);
            if (inside === this._blacklistUsers) {
                return undefined;
            }
        }
        // Apply pattern matching
        if (this._pattern && event.text) {
            const match = event.text.match(this._pattern);
            if (!match) {
                return undefined;
            }
            event._patternMatch = match;
        }
        if (this.func && !this.func(event)) {
            return undefined;
        }
        return event;
    }
}
exports.InlineQuery = InlineQuery;
/**
 * Helper class for building inline query results.
 */
class InlineBuilder {
    constructor() {
        this._resultId = 0;
    }
    _nextId() {
        return String(this._resultId++);
    }
    /**
     * Creates an article result.
     */
    article(title, params = {}) {
        var _a, _b;
        const sendMessage = new tl_1.Api.InputBotInlineMessageText({
            message: (_a = params.text) !== null && _a !== void 0 ? _a : "",
            entities: params.entities,
            noWebpage: params.linkPreview === false,
            replyMarkup: params.replyMarkup,
        });
        return new tl_1.Api.InputBotInlineResult({
            id: (_b = params.id) !== null && _b !== void 0 ? _b : this._nextId(),
            type: "article",
            title,
            description: params.description,
            url: params.url,
            thumb: params.thumb,
            content: params.content,
            sendMessage,
        });
    }
    /**
     * Creates a photo result from an existing photo.
     */
    photo(photo, params = {}) {
        var _a, _b;
        const sendMessage = new tl_1.Api.InputBotInlineMessageMediaAuto({
            message: (_a = params.text) !== null && _a !== void 0 ? _a : "",
            entities: params.entities,
            replyMarkup: params.replyMarkup,
        });
        return new tl_1.Api.InputBotInlineResultPhoto({
            id: (_b = params.id) !== null && _b !== void 0 ? _b : this._nextId(),
            type: "photo",
            photo,
            sendMessage,
        });
    }
    /**
     * Creates a document result.
     */
    document(document, params = {}) {
        var _a, _b, _c;
        const sendMessage = new tl_1.Api.InputBotInlineMessageMediaAuto({
            message: (_a = params.text) !== null && _a !== void 0 ? _a : "",
            entities: params.entities,
            replyMarkup: params.replyMarkup,
        });
        return new tl_1.Api.InputBotInlineResultDocument({
            id: (_b = params.id) !== null && _b !== void 0 ? _b : this._nextId(),
            type: (_c = params.type) !== null && _c !== void 0 ? _c : "file",
            title: params.title,
            description: params.description,
            document,
            sendMessage,
        });
    }
    /**
     * Creates a game result.
     */
    game(shortName, params = {}) {
        var _a;
        const sendMessage = new tl_1.Api.InputBotInlineMessageGame({
            replyMarkup: params.replyMarkup,
        });
        return new tl_1.Api.InputBotInlineResultGame({
            id: (_a = params.id) !== null && _a !== void 0 ? _a : this._nextId(),
            shortName,
            sendMessage,
        });
    }
    /**
     * Creates a geo location result.
     */
    geo(geoPoint, params = {}) {
        var _a;
        const sendMessage = new tl_1.Api.InputBotInlineMessageMediaGeo({
            geoPoint,
            heading: params.heading,
            period: params.period,
            proximityNotificationRadius: params.proximityNotificationRadius,
            replyMarkup: params.replyMarkup,
        });
        return new tl_1.Api.InputBotInlineResult({
            id: (_a = params.id) !== null && _a !== void 0 ? _a : this._nextId(),
            type: "geo",
            title: params.title,
            description: params.description,
            sendMessage,
        });
    }
    /**
     * Creates a venue result.
     */
    venue(geoPoint, title, address, params = {}) {
        var _a, _b, _c, _d;
        const sendMessage = new tl_1.Api.InputBotInlineMessageMediaVenue({
            geoPoint,
            title,
            address,
            provider: (_a = params.provider) !== null && _a !== void 0 ? _a : "",
            venueId: (_b = params.venueId) !== null && _b !== void 0 ? _b : "",
            venueType: (_c = params.venueType) !== null && _c !== void 0 ? _c : "",
            replyMarkup: params.replyMarkup,
        });
        return new tl_1.Api.InputBotInlineResult({
            id: (_d = params.id) !== null && _d !== void 0 ? _d : this._nextId(),
            type: "venue",
            title,
            description: params.description,
            sendMessage,
        });
    }
    /**
     * Creates a contact result.
     */
    contact(phoneNumber, firstName, params = {}) {
        var _a, _b, _c;
        const sendMessage = new tl_1.Api.InputBotInlineMessageMediaContact({
            phoneNumber,
            firstName,
            lastName: (_a = params.lastName) !== null && _a !== void 0 ? _a : "",
            vcard: (_b = params.vcard) !== null && _b !== void 0 ? _b : "",
            replyMarkup: params.replyMarkup,
        });
        return new tl_1.Api.InputBotInlineResult({
            id: (_c = params.id) !== null && _c !== void 0 ? _c : this._nextId(),
            type: "contact",
            title: firstName,
            description: params.description,
            sendMessage,
        });
    }
}
exports.InlineBuilder = InlineBuilder;
/**
 * Represents an inline query event.
 */
class InlineQueryEvent extends common_1.EventCommonSender {
    constructor(update) {
        super({});
        this._eventName = "InlineQuery";
        this._answered = false;
        this.originalUpdate = update;
        this._isChosen = update instanceof tl_1.Api.UpdateBotInlineSend;
        if (update instanceof tl_1.Api.UpdateBotInlineQuery) {
            this._userId = update.userId;
            this._queryId = update.queryId;
            this._text = update.query;
            this._offset = update.offset;
            this._geo = update.geo;
            this._peerType = update.peerType;
        }
        else {
            // UpdateBotInlineSend
            this._userId = update.userId;
            this._text = update.query;
            this._offset = "";
            this._geo = update.geo;
            this._resultId = update.id;
            this._msgId = update.msgId;
        }
    }
    /**
     * The unique query ID.
     */
    get id() {
        return this._queryId;
    }
    /**
     * The query text sent by the user.
     */
    get text() {
        return this._text;
    }
    /**
     * Alias for text.
     */
    get query() {
        return this._text;
    }
    /**
     * The offset for pagination.
     */
    get offset() {
        return this._offset;
    }
    /**
     * The user ID who sent the query.
     */
    get userId() {
        return this._userId;
    }
    /**
     * The geographic location of the user (if shared).
     */
    get geo() {
        return this._geo;
    }
    /**
     * The type of peer from which the query was sent.
     */
    get peerType() {
        return this._peerType;
    }
    /**
     * Whether this is a "chosen result" event (UpdateBotInlineSend).
     */
    get isChosen() {
        return this._isChosen;
    }
    /**
     * The chosen result ID (only for UpdateBotInlineSend).
     */
    get resultId() {
        return this._resultId;
    }
    /**
     * The message ID of the sent inline message (only for UpdateBotInlineSend).
     */
    get msgId() {
        return this._msgId;
    }
    /**
     * The regex pattern match result (if pattern was set in InlineQuery).
     */
    get patternMatch() {
        return this._patternMatch;
    }
    /**
     * A helper to build inline results.
     */
    get builder() {
        if (!this._builder) {
            this._builder = new InlineBuilder();
        }
        return this._builder;
    }
    /**
     * Whether this query has already been answered.
     */
    get answered() {
        return this._answered;
    }
    /**
     * Answer the inline query with results.
     *
     * @param results - Array of inline results (max 50)
     * @param params - Additional parameters
     */
    async answer(results = [], params = {}) {
        var _a;
        if (!this._client || !this._queryId) {
            return false;
        }
        if (this._answered) {
            return false;
        }
        if (results.length > 50) {
            throw new Error("Cannot send more than 50 inline results");
        }
        let switchPm;
        if (params.switchPm) {
            switchPm = new tl_1.Api.InlineBotSwitchPM({
                text: params.switchPm.text,
                startParam: params.switchPm.startParam,
            });
        }
        let switchWebview;
        if (params.switchWebview) {
            switchWebview = new tl_1.Api.InlineBotWebView({
                text: params.switchWebview.text,
                url: params.switchWebview.url,
            });
        }
        try {
            await this._client.invoke(new tl_1.Api.messages.SetInlineBotResults({
                queryId: this._queryId,
                results,
                cacheTime: (_a = params.cacheTime) !== null && _a !== void 0 ? _a : 0,
                gallery: params.gallery,
                private: params.private,
                nextOffset: params.nextOffset,
                switchPm,
                switchWebview,
            }));
            this._answered = true;
            return true;
        }
        catch (_b) {
            return false;
        }
    }
    /**
     * Get the user who sent the query.
     */
    async getUser() {
        if (!this._client)
            return undefined;
        try {
            const entity = await this._client.getEntity(new tl_1.Api.PeerUser({ userId: this._userId }));
            if (entity instanceof tl_1.Api.User) {
                return entity;
            }
        }
        catch (_a) {
            return undefined;
        }
        return undefined;
    }
}
exports.InlineQueryEvent = InlineQueryEvent;
