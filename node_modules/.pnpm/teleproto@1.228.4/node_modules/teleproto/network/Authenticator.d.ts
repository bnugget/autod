import { MTProtoPlainSender } from "./MTProtoPlainSender";
import { AuthKey } from "../crypto/AuthKey";
export interface TempKeyParams {
    expiresIn: number;
    dc: number;
}
export declare function doAuthentication(sender: MTProtoPlainSender, log: any, temp?: TempKeyParams): Promise<{
    authKey: AuthKey;
    timeOffset: number;
}>;
