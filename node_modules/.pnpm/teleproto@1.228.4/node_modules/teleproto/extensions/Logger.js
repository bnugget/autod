"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel["NONE"] = "none";
    LogLevel["ERROR"] = "error";
    LogLevel["WARN"] = "warn";
    LogLevel["INFO"] = "info";
    LogLevel["DEBUG"] = "debug";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
const SEVERITY = {
    none: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
};
const COLOR = {
    error: "\x1b[31m",
    warn: "\x1b[35m",
    info: "\x1b[33m",
    debug: "\x1b[36m",
};
const RESET = "\x1b[0m";
class Logger {
    constructor(level = LogLevel.INFO) {
        this.messageFormat = "[%t] [%l] - [%m]";
        this.tzOffset = new Date().getTimezoneOffset() * 60000;
        this._logLevel = level;
    }
    canSend(level) {
        return SEVERITY[this._logLevel] >= SEVERITY[level];
    }
    error(message, error) {
        this._log(LogLevel.ERROR, message, error);
    }
    warn(message, error) {
        this._log(LogLevel.WARN, message, error);
    }
    info(message, error) {
        this._log(LogLevel.INFO, message, error);
    }
    debug(message, error) {
        this._log(LogLevel.DEBUG, message, error);
    }
    format(message, level) {
        return this.messageFormat
            .replace("%t", this.getDateTime())
            .replace("%l", level.toUpperCase())
            .replace("%m", message);
    }
    getDateTime() {
        return new Date(Date.now() - this.tzOffset).toISOString().slice(0, -1);
    }
    get logLevel() {
        return this._logLevel;
    }
    setLevel(level) {
        this._logLevel = level;
    }
    static setLevel(level) {
        console.log("Logger.setLevel is deprecated, it will has no effect. Please, use client.setLogLevel instead.");
    }
    _log(level, message, error) {
        if (this.canSend(level)) {
            this.log(level, message, error);
        }
    }
    log(level, message, error) {
        var _a;
        if (this.handler) {
            this.handler({
                level,
                message,
                error,
                date: new Date(Date.now() - this.tzOffset),
            });
            return;
        }
        console.log(((_a = COLOR[level]) !== null && _a !== void 0 ? _a : "") + this.format(message, level) + RESET);
        if (error !== undefined) {
            console.error(error);
        }
    }
}
exports.Logger = Logger;
