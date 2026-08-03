"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPCMessageToError = RPCMessageToError;
const RPCBaseErrors_1 = require("./RPCBaseErrors");
const RPCErrorList_1 = require("./RPCErrorList");
function RPCMessageToError(rpcError, request) {
    const message = rpcError.errorMessage;
    let error;
    const ExactCls = RPCErrorList_1.rpcErrorsDict.get(message);
    if (ExactCls) {
        error = new ExactCls({ request });
    }
    else {
        let matched = false;
        for (const [msgRegex, Cls] of RPCErrorList_1.rpcErrorsRe) {
            const m = message.match(msgRegex);
            if (m) {
                const capture = m.length >= 2 ? parseInt(m[1]) : null;
                error = new Cls({ request, capture });
                matched = true;
                break;
            }
        }
        if (!matched) {
            const BaseCls = RPCErrorList_1.baseErrors.get(Math.abs(rpcError.errorCode)) || RPCBaseErrors_1.RPCError;
            error = new BaseCls(message, request, rpcError.errorCode);
        }
    }
    error.errorMessage = message;
    return error;
}
__exportStar(require("./Common"), exports);
__exportStar(require("./RPCBaseErrors"), exports);
__exportStar(require("./RPCErrorList"), exports);
__exportStar(require("./aliases"), exports);
