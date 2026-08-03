import type { EventBuilder } from "../events/common";
import { Api } from "../tl";
import type { TelegramClient } from "./TelegramClient";
import { UpdateConnectionState } from "../network";
/**
 * If raised inside a registered handler, stops further dispatching for that
 * update — analogue of StopIteration but for events.
 */
export declare class StopPropagation extends Error {
}
export declare function on(client: TelegramClient, event?: EventBuilder): (f: (event: any) => void) => (event: any) => void;
export declare function addEventHandler(client: TelegramClient, callback: CallableFunction, event?: EventBuilder): void;
export declare function removeEventHandler(client: TelegramClient, callback: CallableFunction, event: EventBuilder): void;
export declare function listEventHandlers(client: TelegramClient): [EventBuilder, CallableFunction][];
export declare function catchUp(client: TelegramClient): Promise<void>;
/** @hidden */
export declare function _handleUpdate(client: TelegramClient, update: Api.TypeUpdate | Api.TypeUpdates | UpdateConnectionState | number): void;
/** @hidden */
export declare function _dispatchUpdate(client: TelegramClient, args: {
    update: UpdateConnectionState | any;
}): Promise<void>;
/** @hidden */
export declare function _updateLoop(client: TelegramClient): Promise<void>;
