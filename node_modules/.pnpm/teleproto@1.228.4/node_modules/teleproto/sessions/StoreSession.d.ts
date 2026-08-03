import { MemorySession } from "./Memory";
import { AuthKey } from "../crypto/AuthKey";
import bigInt from "big-integer";
/**
 * Persistent session that stores auth keys and entity data on disk using `node-localstorage`.
 *
 * Creates a directory named after the session in the current working directory.
 * Suitable for long-running server applications where session data must survive restarts.
 *
 * @example
 * ```ts
 * const session = new StoreSession("my_session");
 * const client = new TelegramClient(session, apiId, apiHash, {});
 * ```
 */
export declare class StoreSession extends MemorySession {
    private readonly sessionName;
    private store;
    constructor(sessionName: string, divider?: string);
    load(): Promise<void>;
    setAuthKey(authKey?: AuthKey, dcId?: number): void;
    setDC(dcId: number, serverAddress: string, port: number): void;
    set testServers(value: boolean);
    get testServers(): boolean;
    set authKey(value: AuthKey | undefined);
    get authKey(): AuthKey | undefined;
    delete(): void;
    processEntities(tlo: any): void;
    getEntityRowsById(id: string | bigInt.BigInteger, exact?: boolean): any;
}
