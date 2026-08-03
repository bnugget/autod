import { Api } from "../tl";
export type messageEntities = typeof Api.MessageEntityBold | typeof Api.MessageEntityItalic | typeof Api.MessageEntityStrike | typeof Api.MessageEntityCode | typeof Api.MessageEntityPre;
export declare const DEFAULT_DELIMITERS: {
    [key: string]: messageEntities;
};
export declare class MarkdownParser {
    static parse(message: string): [string, Api.TypeMessageEntity[]];
    static unparse(text: string, entities: Api.TypeMessageEntity[] | undefined): string;
}
