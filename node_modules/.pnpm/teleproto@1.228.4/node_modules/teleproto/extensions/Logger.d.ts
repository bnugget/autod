export declare enum LogLevel {
    NONE = "none",
    ERROR = "error",
    WARN = "warn",
    INFO = "info",
    DEBUG = "debug"
}
export interface LogRecord {
    readonly level: LogLevel;
    readonly message: string;
    readonly error?: unknown;
    readonly date: Date;
}
export type LogHandler = (record: LogRecord) => void;
export declare class Logger {
    handler?: LogHandler;
    messageFormat: string;
    tzOffset: number;
    private _logLevel;
    constructor(level?: LogLevel);
    canSend(level: LogLevel): boolean;
    error(message: string, error?: unknown): void;
    warn(message: string, error?: unknown): void;
    info(message: string, error?: unknown): void;
    debug(message: string, error?: unknown): void;
    format(message: string, level: string): string;
    getDateTime(): string;
    get logLevel(): LogLevel;
    setLevel(level: LogLevel): void;
    static setLevel(level: string): void;
    _log(level: LogLevel, message: string, error?: unknown): void;
    log(level: LogLevel, message: string, error?: unknown): void;
}
