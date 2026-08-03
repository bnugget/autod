import bigInt from "big-integer";
import { Api } from "../tl";
import { Network } from "./Network";
import { BalancePolicyOptions } from "./BalancePolicy";
import type { TelegramBaseClient } from "../client/telegramBaseClient";
export interface MediaSchedulerOptions {
    partSize: number;
    requestRetries: number;
    requestDeadlineMs: number;
    cdnSupported: boolean;
    download: BalancePolicyOptions;
    upload: BalancePolicyOptions;
}
export declare const DEFAULT_MEDIA_SCHEDULER_OPTIONS: MediaSchedulerOptions;
export declare class CdnRedirectError extends Error {
    readonly redirect: Api.upload.FileCdnRedirect;
    constructor(redirect: Api.upload.FileCdnRedirect);
}
export declare class MediaAbortError extends Error {
    constructor();
}
export declare class MediaScheduler {
    readonly opts: MediaSchedulerOptions;
    private readonly _client;
    private readonly _network;
    private readonly _balances;
    private _closed;
    constructor(client: TelegramBaseClient, network: Network, opts?: Partial<MediaSchedulerOptions> & {
        inflightPerDc?: number;
        maxSessions?: number;
        sessions?: number;
    });
    private _balance;
    getFile(dcId: number, location: Api.TypeInputFileLocation, offset: bigInt.BigInteger, limit: number, signal?: AbortSignal): Promise<Buffer>;
    savePart(dcId: number, request: Api.upload.SaveFilePart | Api.upload.SaveBigFilePart, signal?: AbortSignal): Promise<boolean>;
    private _run;
    purge(): Promise<void>;
    close(): Promise<void>;
}
