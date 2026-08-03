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
exports.BoundedSemaphore = exports.OrderedWriter = exports.DcenterRegistry = exports.Dcenter = exports.UPLOAD_BALANCE = exports.DOWNLOAD_BALANCE = exports.BalancePolicy = exports.MediaAbortError = exports.CdnRedirectError = exports.MediaScheduler = exports.Network = exports.SlotRemovedError = exports.SenderSlot = exports.ConnectionTCPObfuscated = exports.ConnectionTCPAbridged = exports.ConnectionTCPFull = exports.Connection = exports.UpdateConnectionState = exports.MTProtoSender = exports.doAuthentication = exports.MTProtoPlainSender = void 0;
var MTProtoPlainSender_1 = require("./MTProtoPlainSender");
Object.defineProperty(exports, "MTProtoPlainSender", { enumerable: true, get: function () { return MTProtoPlainSender_1.MTProtoPlainSender; } });
var Authenticator_1 = require("./Authenticator");
Object.defineProperty(exports, "doAuthentication", { enumerable: true, get: function () { return Authenticator_1.doAuthentication; } });
var MTProtoSender_1 = require("./MTProtoSender");
Object.defineProperty(exports, "MTProtoSender", { enumerable: true, get: function () { return MTProtoSender_1.MTProtoSender; } });
var UpdateConnectionState_1 = require("./UpdateConnectionState");
Object.defineProperty(exports, "UpdateConnectionState", { enumerable: true, get: function () { return UpdateConnectionState_1.UpdateConnectionState; } });
var connection_1 = require("./connection");
Object.defineProperty(exports, "Connection", { enumerable: true, get: function () { return connection_1.Connection; } });
Object.defineProperty(exports, "ConnectionTCPFull", { enumerable: true, get: function () { return connection_1.ConnectionTCPFull; } });
Object.defineProperty(exports, "ConnectionTCPAbridged", { enumerable: true, get: function () { return connection_1.ConnectionTCPAbridged; } });
Object.defineProperty(exports, "ConnectionTCPObfuscated", { enumerable: true, get: function () { return connection_1.ConnectionTCPObfuscated; } });
var SenderSlot_1 = require("./SenderSlot");
Object.defineProperty(exports, "SenderSlot", { enumerable: true, get: function () { return SenderSlot_1.SenderSlot; } });
Object.defineProperty(exports, "SlotRemovedError", { enumerable: true, get: function () { return SenderSlot_1.SlotRemovedError; } });
var Network_1 = require("./Network");
Object.defineProperty(exports, "Network", { enumerable: true, get: function () { return Network_1.Network; } });
var MediaScheduler_1 = require("./MediaScheduler");
Object.defineProperty(exports, "MediaScheduler", { enumerable: true, get: function () { return MediaScheduler_1.MediaScheduler; } });
Object.defineProperty(exports, "CdnRedirectError", { enumerable: true, get: function () { return MediaScheduler_1.CdnRedirectError; } });
Object.defineProperty(exports, "MediaAbortError", { enumerable: true, get: function () { return MediaScheduler_1.MediaAbortError; } });
var BalancePolicy_1 = require("./BalancePolicy");
Object.defineProperty(exports, "BalancePolicy", { enumerable: true, get: function () { return BalancePolicy_1.BalancePolicy; } });
Object.defineProperty(exports, "DOWNLOAD_BALANCE", { enumerable: true, get: function () { return BalancePolicy_1.DOWNLOAD_BALANCE; } });
Object.defineProperty(exports, "UPLOAD_BALANCE", { enumerable: true, get: function () { return BalancePolicy_1.UPLOAD_BALANCE; } });
var Dcenter_1 = require("./Dcenter");
Object.defineProperty(exports, "Dcenter", { enumerable: true, get: function () { return Dcenter_1.Dcenter; } });
Object.defineProperty(exports, "DcenterRegistry", { enumerable: true, get: function () { return Dcenter_1.DcenterRegistry; } });
__exportStar(require("./core_types"), exports);
var OrderedWriter_1 = require("./OrderedWriter");
Object.defineProperty(exports, "OrderedWriter", { enumerable: true, get: function () { return OrderedWriter_1.OrderedWriter; } });
Object.defineProperty(exports, "BoundedSemaphore", { enumerable: true, get: function () { return OrderedWriter_1.BoundedSemaphore; } });
