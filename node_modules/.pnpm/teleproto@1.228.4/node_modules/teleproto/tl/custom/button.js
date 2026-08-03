"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const api_1 = require("../api");
const Utils_1 = require("../../Utils");
class Button {
    constructor(button, resize, singleUse, selective) {
        this.button = button;
        this.resize = resize;
        this.singleUse = singleUse;
        this.selective = selective;
    }
    static _isInline(button) {
        return (button instanceof api_1.Api.KeyboardButtonCallback ||
            button instanceof api_1.Api.KeyboardButtonSwitchInline ||
            button instanceof api_1.Api.KeyboardButtonUrl ||
            button instanceof api_1.Api.KeyboardButtonUrlAuth ||
            button instanceof api_1.Api.InputKeyboardButtonUrlAuth ||
            button instanceof api_1.Api.KeyboardButtonWebView ||
            button instanceof api_1.Api.KeyboardButtonSimpleWebView ||
            button instanceof api_1.Api.KeyboardButtonCopy ||
            button instanceof api_1.Api.KeyboardButtonGame ||
            button instanceof api_1.Api.KeyboardButtonBuy ||
            button instanceof api_1.Api.InputKeyboardButtonUserProfile ||
            button instanceof api_1.Api.InputKeyboardButtonRequestPeer);
    }
    static inline(text, data, style) {
        if (!data) {
            data = Buffer.from(text, "utf-8");
        }
        if (data.length > 64) {
            throw new Error("Too many bytes for the data");
        }
        return new api_1.Api.KeyboardButtonCallback({
            text: text,
            data: data,
            style: style,
        });
    }
    static switchInline(text, query = "", samePeer = false, style) {
        return new api_1.Api.KeyboardButtonSwitchInline({
            text,
            query,
            samePeer,
            style,
        });
    }
    static url(text, url, style) {
        return new api_1.Api.KeyboardButtonUrl({
            text: text,
            url: url || text,
            style,
        });
    }
    static auth(text, url, bot, writeAccess, fwdText, style) {
        return new api_1.Api.InputKeyboardButtonUrlAuth({
            text,
            url: url || text,
            bot: (0, Utils_1.getInputUser)(bot || new api_1.Api.InputUserSelf()),
            requestWriteAccess: writeAccess,
            fwdText: fwdText,
            style,
        });
    }
    static text(text, resize, singleUse, selective) {
        return new this(new api_1.Api.KeyboardButton({ text }), resize, singleUse, selective);
    }
    static requestLocation(text, resize, singleUse, selective) {
        return new this(new api_1.Api.KeyboardButtonRequestGeoLocation({ text }), resize, singleUse, selective);
    }
    static requestPhone(text, resize, singleUse, selective) {
        return new this(new api_1.Api.KeyboardButtonRequestPhone({ text }), resize, singleUse, selective);
    }
    static requestPoll(text, resize, singleUse, selective) {
        return new this(new api_1.Api.KeyboardButtonRequestPoll({ text }), resize, singleUse, selective);
    }
    static webView(text, url, style) {
        return new api_1.Api.KeyboardButtonWebView({
            text,
            url,
            style,
        });
    }
    static simpleWebView(text, url, style) {
        return new api_1.Api.KeyboardButtonSimpleWebView({
            text,
            url,
            style,
        });
    }
    static copy(text, copyText, style) {
        return new api_1.Api.KeyboardButtonCopy({
            text,
            copyText,
            style,
        });
    }
    static game(text, style) {
        return new api_1.Api.KeyboardButtonGame({
            text,
            style,
        });
    }
    static buy(text, style) {
        return new api_1.Api.KeyboardButtonBuy({
            text,
            style,
        });
    }
    static userProfile(text, user, style) {
        return new api_1.Api.InputKeyboardButtonUserProfile({
            text,
            userId: (0, Utils_1.getInputUser)(user),
            style,
        });
    }
    static requestPeer(text, buttonId, peerType, maxCount, style) {
        return new api_1.Api.InputKeyboardButtonRequestPeer({
            text,
            buttonId,
            peerType,
            maxQuantity: maxCount || 1,
            style,
        });
    }
    static clear() {
        return new api_1.Api.ReplyKeyboardHide({});
    }
    static forceReply() {
        return new api_1.Api.ReplyKeyboardForceReply({});
    }
}
exports.Button = Button;
Button.style = Object.assign((opts) => {
    return new api_1.Api.KeyboardButtonStyle(opts || {});
}, {
    primary: () => new api_1.Api.KeyboardButtonStyle({ bgPrimary: true }),
    danger: () => new api_1.Api.KeyboardButtonStyle({ bgDanger: true }),
    success: () => new api_1.Api.KeyboardButtonStyle({ bgSuccess: true }),
});
