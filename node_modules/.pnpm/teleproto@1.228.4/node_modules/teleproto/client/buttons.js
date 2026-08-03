"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildReplyMarkup = buildReplyMarkup;
const tl_1 = require("../tl");
const button_1 = require("../tl/custom/button");
const messageButton_1 = require("../tl/custom/messageButton");
const Helpers_1 = require("../Helpers");
// ButtonMethods
/**
 * Converts a flexible button input into a Telegram {@link Api.TypeReplyMarkup}.
 *
 * Accepts a single button, a row of buttons, a grid (array of rows), or an existing
 * `ReplyMarkup` object. Automatically detects whether buttons are inline or normal
 * and wraps them in the appropriate markup type.
 *
 * @param buttons - The button(s) to convert. Can be a {@link ButtonLike}, an array, or a 2D array.
 * @param inlineOnly - If `true`, forces inline-only mode (throws if normal buttons are found).
 * @returns The constructed reply markup, or `undefined` if no buttons were provided.
 * @hidden
 */
function buildReplyMarkup(buttons, inlineOnly = false) {
    if (buttons == undefined) {
        return undefined;
    }
    if ("SUBCLASS_OF_ID" in buttons) {
        if (buttons.SUBCLASS_OF_ID == (0, Helpers_1.unionId)("ReplyMarkup")) {
            return buttons;
        }
    }
    if (!(0, Helpers_1.isArrayLike)(buttons)) {
        buttons = [[buttons]];
    }
    else if (!buttons || !(0, Helpers_1.isArrayLike)(buttons[0])) {
        // @ts-ignore
        buttons = [buttons];
    }
    let isInline = false;
    let isNormal = false;
    let resize = undefined;
    const singleUse = false;
    const selective = false;
    const rows = [];
    // @ts-ignore
    for (const row of buttons) {
        const current = [];
        for (let button of row) {
            if (button instanceof button_1.Button) {
                if (button.resize != undefined) {
                    resize = button.resize;
                }
                if (button.singleUse != undefined) {
                    resize = button.singleUse;
                }
                if (button.selective != undefined) {
                    resize = button.selective;
                }
                button = button.button;
            }
            else if (button instanceof messageButton_1.MessageButton) {
                button = button.button;
            }
            const inline = button_1.Button._isInline(button);
            if (!isInline && inline) {
                isInline = true;
            }
            if (!isNormal && inline) {
                isNormal = false;
            }
            if (button.SUBCLASS_OF_ID == (0, Helpers_1.unionId)("KeyboardButton")) {
                current.push(button);
            }
        }
        if (current) {
            rows.push(new tl_1.Api.KeyboardButtonRow({
                buttons: current,
            }));
        }
    }
    if (inlineOnly && isNormal) {
        throw new Error("You cannot use non-inline buttons here");
    }
    else if (isInline === isNormal && isNormal) {
        throw new Error("You cannot mix inline with normal buttons");
    }
    else if (isInline) {
        return new tl_1.Api.ReplyInlineMarkup({
            rows: rows,
        });
    }
    return new tl_1.Api.ReplyKeyboardMarkup({
        rows: rows,
        resize: resize,
        singleUse: singleUse,
        selective: selective,
    });
}
