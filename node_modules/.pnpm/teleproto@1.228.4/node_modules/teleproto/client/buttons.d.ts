import { Api } from "../tl";
import type { ButtonLike } from "../define";
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
export declare function buildReplyMarkup(buttons: Api.TypeReplyMarkup | undefined | ButtonLike | ButtonLike[] | ButtonLike[][], inlineOnly?: boolean): Api.TypeReplyMarkup | undefined;
