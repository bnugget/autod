import { Api } from "./tl";
import bigInt from "big-integer";
export interface CachePolicy {
    /**
     * Maximum number of cached peers, counted separately for users and
     * chats/channels. `0` or omitted - unlimited.
     */
    max?: number;
    /**
     * Peer lifetime in milliseconds since it was cached; an expired peer is
     * re-resolved on next access. `0` or omitted - never expires.
     */
    ttl?: number;
}
/**
 * Entity cache configuration:
 * omitted / `true` - default limits ({@link ENTITY_CACHE_DEFAULTS});
 * `false` - cache disabled, peers are resolved from the session store;
 * `{ max, ttl }` - custom policy, `{ max: 0 }` for an unbounded cache.
 */
export type EntityCacheOptions = boolean | CachePolicy;
export declare const ENTITY_CACHE_DEFAULTS: {
    readonly max: 4096;
    readonly ttl: 0;
};
type PeerKey = bigInt.BigInteger | string | number;
export declare class EntityCache {
    private readonly enabled;
    private readonly max;
    private readonly ttl;
    private readonly users;
    private readonly chats;
    private readonly pinnedKeys;
    constructor(options?: EntityCacheOptions);
    get size(): number;
    add(entities: unknown): void;
    get(item: PeerKey | undefined): Api.TypeInputPeer;
    has(item: PeerKey | undefined): boolean;
    delete(item: PeerKey | undefined): boolean;
    clear(): void;
    pin(markedId: PeerKey): void;
    unpin(markedId: PeerKey): void;
    private getSegment;
    private write;
    private read;
    private isExpired;
    private prune;
    private find;
    private candidateKeys;
}
export {};
