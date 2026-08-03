import { Logger } from "../extensions";
import { MTProtoState } from "./MTProtoState";
import { RequestState } from "./RequestState";
export interface PackedBatch {
    batch: RequestState[];
    data: Buffer;
}
export declare function packRequestBatch(state: MTProtoState, queued: RequestState[], log: Logger): Promise<PackedBatch | null>;
