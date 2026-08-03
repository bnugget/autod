"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestState = void 0;
const Deferred_1 = __importDefault(require("../extensions/Deferred"));
class RequestState {
    constructor(request) {
        this._settled = true;
        this.containerId = undefined;
        this.msgId = undefined;
        this.request = request;
        this.data = request.getBytes();
        this.after = undefined;
        this.acknowledged = false;
        this.finished = new Deferred_1.default();
        this.resetPromise();
    }
    isReady() {
        if (!this.after) {
            return true;
        }
        return this.after.finished.promise;
    }
    resetPromise() {
        if (this.promise && !this._settled) {
            return;
        }
        this._settled = false;
        this.promise = new Promise((resolve, reject) => {
            this.resolve = (value) => {
                this._settled = true;
                resolve(value);
            };
            this.reject = (reason) => {
                this._settled = true;
                reject(reason);
            };
        });
    }
}
exports.RequestState = RequestState;
