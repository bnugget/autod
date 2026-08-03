import { Session } from "./Abstract";
import type { AuthKey } from "../crypto/AuthKey";
import { Api } from "../tl";
import bigInt from "big-integer";
import type { EntityLike } from "../define";
/**
 * In-memory session storage that keeps all auth and entity data in RAM.
 *
 * All data is lost when the process exits. Use {@link StringSession} to export
 * the session to a portable string, or {@link StoreSession} for persistent on-disk storage.
 *
 * Entities are keyed by their peer ID to prevent duplicate accumulation.
 */
export declare class MemorySession extends Session {
    protected _serverAddress?: string;
    protected _dcId: number;
    protected _port?: number;
    protected _takeoutId: undefined;
    protected _entities: Map<string, any>;
    protected _updateStates: {};
    protected _authKey?: AuthKey;
    /**
     * Auth keys for non-main DCs (file/media). Keyed by DC id. Sharing one
     * key per (account, DC) is what Telegram expects — fresh DH for every
     * connection eventually trips the server's per-account auth-key limit
     * and downloads start getting dropped.
     */
    protected _dcAuthKeys: Map<number, AuthKey>;
    constructor();
    setDC(dcId: number, serverAddress: string, port: number): void;
    get dcId(): number;
    get serverAddress(): string;
    get port(): number;
    get authKey(): AuthKey | undefined;
    set authKey(value: AuthKey | undefined);
    get takeoutId(): undefined;
    set takeoutId(value: undefined);
    getAuthKey(dcId?: number): AuthKey | undefined;
    setAuthKey(authKey?: AuthKey, dcId?: number): void;
    close(): void;
    save(): void;
    load(): Promise<void>;
    delete(): void;
    _entityValuesToRow(id: bigInt.BigInteger | string, hash: bigInt.BigInteger | string, username: string, phone: string, name: string): (string | bigInt.BigInteger)[];
    _entityToRow(e: any): (string | bigInt.BigInteger)[] | undefined;
    _entitiesToRows(tlo: any): (string | bigInt.BigInteger)[][];
    processEntities(tlo: any): void;
    getEntityRowsByPhone(phone: string): any[] | undefined;
    getEntityRowsByUsername(username: string): any[] | undefined;
    getEntityRowsByName(name: string): any[] | undefined;
    getEntityRowsById(id: string | bigInt.BigInteger, exact?: boolean): any[] | undefined;
    getInputEntity(key: EntityLike): Api.TypeInputPeer;
}
