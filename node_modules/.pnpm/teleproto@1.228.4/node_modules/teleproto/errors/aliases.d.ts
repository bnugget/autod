import { FloodError } from "./RPCBaseErrors";
import { FrozenMethodInvalidError, FrozenParticipantMissingError } from "./RPCErrorList";
/** @deprecated Renamed to {@link FrozenMethodInvalidError}. */
export declare const FrozenMethodError: typeof FrozenMethodInvalidError;
/** @deprecated Renamed to {@link FrozenMethodInvalidError}. */
export type FrozenMethodError = FrozenMethodInvalidError;
/** @deprecated Renamed to {@link FrozenParticipantMissingError}. */
export declare const FrozenParticipantError: typeof FrozenParticipantMissingError;
/** @deprecated Renamed to {@link FrozenParticipantMissingError}. */
export type FrozenParticipantError = FrozenParticipantMissingError;
/**
 * @deprecated The dedicated `FrozenError` base was removed; frozen errors now
 * map by their HTTP code (420). Kept as an alias of {@link FloodError} so
 * `instanceof errors.FrozenError` still matches frozen-method errors.
 */
export declare const FrozenError: typeof FloodError;
/** @deprecated Alias of {@link FloodError}. */
export type FrozenError = FloodError;
