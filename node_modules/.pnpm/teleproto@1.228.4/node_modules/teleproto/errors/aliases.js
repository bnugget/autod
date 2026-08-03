"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrozenError = exports.FrozenParticipantError = exports.FrozenMethodError = void 0;
const RPCBaseErrors_1 = require("./RPCBaseErrors");
const RPCErrorList_1 = require("./RPCErrorList");
/** @deprecated Renamed to {@link FrozenMethodInvalidError}. */
exports.FrozenMethodError = RPCErrorList_1.FrozenMethodInvalidError;
/** @deprecated Renamed to {@link FrozenParticipantMissingError}. */
exports.FrozenParticipantError = RPCErrorList_1.FrozenParticipantMissingError;
/**
 * @deprecated The dedicated `FrozenError` base was removed; frozen errors now
 * map by their HTTP code (420). Kept as an alias of {@link FloodError} so
 * `instanceof errors.FrozenError` still matches frozen-method errors.
 */
exports.FrozenError = RPCBaseErrors_1.FloodError;
