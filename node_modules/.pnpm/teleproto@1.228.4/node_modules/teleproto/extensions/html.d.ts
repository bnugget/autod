import { Api } from "../tl";
interface OpenTag {
    readonly name: string;
    readonly start: number;
    readonly entity?: Api.TypeMessageEntity;
}
export declare class HTMLParser {
    static readonly _tag: RegExp;
    static readonly _ref: RegExp;
    static readonly _attr: RegExp;
    static readonly _esc: Record<string, string>;
    static parse(html: string): [string, Api.TypeMessageEntity[]];
    static unparse(text: string, entities?: Api.TypeMessageEntity[], _offset?: number, _length?: number): string;
    static _decode(text: string): string;
    static _escapeHtml(text: string): string;
    static _readAttributes(source: string): Record<string, string>;
    static _entityFor(name: string, attrs: Record<string, string>, offset: number, stack: OpenTag[]): Api.TypeMessageEntity | undefined;
    static _markupFor(entity: Api.TypeMessageEntity, text: string): readonly [string, string] | null;
}
export {};
