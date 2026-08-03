import { Api } from "../tl";
import type { Entity, EntityLike } from "../define";
import type { TelegramClient } from "./TelegramClient";
import bigInt from "big-integer";
import { MTProtoSender } from "../network";
import type { SessionLease } from "../network/Network";
export declare function invoke<R extends Api.AnyRequest>(client: TelegramClient, request: R, dcId?: number, otherSender?: MTProtoSender | SessionLease): Promise<R["__response"]>;
/**
 * Returns the current user as an {@link Api.User}, or as an {@link Api.InputPeerUser}
 * if `inputPeer` is `true` (useful when only the input peer is needed without a full API call).
 *
 * The result is cached after the first call.
 * @hidden
 */
export declare function getMe<T extends boolean, R = T extends true ? Api.InputPeerUser : Api.User>(client: TelegramClient, inputPeer: T): Promise<R>;
/** @hidden */
export declare function isBot(client: TelegramClient): Promise<boolean | undefined>;
/** @hidden */
export declare function isUserAuthorized(client: TelegramClient): Promise<boolean>;
/**
 * Resolves one or more entity-like values into their full {@link Entity} objects
 * by calling the appropriate Telegram API methods (`users.GetUsers`, `messages.GetChats`,
 * `channels.GetChannels`).
 *
 * @param client - The Telegram client instance.
 * @param entity - A single entity or array of entities to resolve (usernames, IDs, peers, etc.).
 * @returns A single entity if a single value was given, or an array of entities.
 * @hidden
 */
export declare function getEntity(client: TelegramClient, entity: EntityLike | EntityLike[]): Promise<Entity | Entity[]>;
/**
 * Resolves an entity-like value into an {@link Api.TypeInputPeer}, using (in order):
 * 1. Direct InputPeer conversion
 * 2. In-memory entity cache
 * 3. Known strings ("me", "this", "self")
 * 4. Session (disk) cache
 * 5. Network lookup (username resolution, `users.GetUsers`, `channels.GetChannels`)
 *
 * @param client - The Telegram client instance.
 * @param peer - The entity to resolve (username, phone, ID, Peer object, etc.).
 * @returns The corresponding InputPeer.
 * @throws {Error} If the entity cannot be resolved by any means.
 * @hidden
 */
export declare function getInputEntity(client: TelegramClient, peer: EntityLike): Promise<Api.TypeInputPeer>;
/** @hidden */
export declare function _getEntityFromString(client: TelegramClient, string: string): Promise<Api.TypeUser | Api.TypeInputPeer | Api.TypeChat>;
/** @hidden */
export declare function getPeerId(client: TelegramClient, peer: EntityLike, addMark?: boolean): Promise<string>;
/** @hidden */
export declare function _getPeer(client: TelegramClient, peer: EntityLike): Promise<Api.PeerUser | Api.PeerChat | Api.PeerChannel | undefined>;
/** @hidden */
export declare function _getInputDialog(client: TelegramClient, dialog: any): Promise<any>;
/** @hidden */
export declare function _getInputNotify(client: TelegramClient, notify: any): Promise<any>;
/** @hidden */
export declare function _selfId(client: TelegramClient): bigInt.BigInteger | undefined;
