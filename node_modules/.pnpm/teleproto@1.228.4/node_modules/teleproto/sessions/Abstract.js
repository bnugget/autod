"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
class Session {
    constructor() {
        /**
         * Creates a clone of this session file
         * @param toInstance {Session|null}
         * @returns {Session}
         */
        /**
         * Whether this session is bound to Telegram's test environment.
         * Sessions are not portable between test and production.
         */
        this.__testServers = false;
    }
    get testServers() {
        return this.__testServers;
    }
    set testServers(value) {
        this.__testServers = value;
    }
}
exports.Session = Session;
