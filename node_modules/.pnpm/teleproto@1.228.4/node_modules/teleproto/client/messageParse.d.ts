import { Api } from "../tl";
import type { EntityLike } from "../define";
import type { TelegramClient } from "./TelegramClient";
export interface ParseInterface {
    parse: (message: string) => [string, Api.TypeMessageEntity[]];
    unparse: (text: string, entities: Api.TypeMessageEntity[]) => string;
}
export { DEFAULT_DELIMITERS } from "../extensions/markdown";
export type { messageEntities } from "../extensions/markdown";
/** @hidden */
export declare function _replaceWithMention(client: TelegramClient, entities: Api.TypeMessageEntity[], i: number, user: EntityLike): Promise<boolean>;
/** @hidden */
export declare function _parseMessageText(client: TelegramClient, message: string, parseMode: false | string | ParseInterface): Promise<[string, Api.TypeMessageEntity[]]>;
/** @hidden */
export declare function _getResponseMessage(client: TelegramClient, request: any, result: any, inputChat: any): Api.TypeMessage | Map<number, Api.Message> | (Api.Message | undefined)[] | undefined;
