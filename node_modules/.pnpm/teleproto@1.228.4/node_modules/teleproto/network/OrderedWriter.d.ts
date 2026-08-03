import { BinaryWriter } from "../extensions";
type WriterLike = BinaryWriter | {
    write: Function;
    close?: Function;
};
export type OrderedWriterAfter = (bytes: number) => Promise<void> | void;
export declare class OrderedWriter {
    nextIdx: number;
    private readonly _stash;
    private readonly _writer;
    private _draining;
    constructor(writer: WriterLike);
    write(idx: number, data: Buffer, after?: OrderedWriterAfter): Promise<void>;
    private _drain;
    reset(toIdx: number): void;
}
export declare class BoundedSemaphore {
    private _available;
    private readonly _waiters;
    constructor(capacity: number);
    acquire(): Promise<void>;
    release(): void;
}
export {};
