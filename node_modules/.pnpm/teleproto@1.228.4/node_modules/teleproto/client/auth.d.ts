import { Api } from "../tl";
import type { TelegramClient } from "./TelegramClient";
/**
 * Email verification options passed to the email callback.
 */
export interface EmailVerificationOptions {
    /** Whether Google Sign-In is allowed for email verification. */
    googleSigninAllowed?: boolean;
    /** Whether Apple Sign-In is allowed for email verification. */
    appleSigninAllowed?: boolean;
    /** The email pattern (masked email) when code was sent to existing email. */
    emailPattern?: string;
    /** The code length when email code is expected. */
    codeLength?: number;
    /** Period in seconds after which the email can be reset. */
    resetAvailablePeriod?: number;
    /** Date when the pending reset will complete. */
    resetPendingDate?: number;
}
/**
 * Result from the email callback - can be code, Google token, or Apple token.
 */
export type EmailVerificationResult = {
    type: "code";
    code: string;
} | {
    type: "google";
    token: string;
} | {
    type: "apple";
    token: string;
};
/**
 * For when you want to login as a {@link Api.User}<br/>
 * this should handle all needed steps for authorization as a user.<br/>
 * to stop the operation at any point just raise and error with the message `AUTH_USER_CANCEL`.
 */
export interface UserAuthParams {
    /** Either a string or a callback that returns a string for the phone to use to login. */
    phoneNumber: string | (() => Promise<string>);
    /** callback that should return the login code that telegram sent.<br/>
     *  has optional bool `isCodeViaApp` param for whether the code was sent through the app (true) or an SMS (false). */
    phoneCode: (isCodeViaApp?: boolean) => Promise<string>;
    /** optional string or callback that should return the 2FA password if present.<br/>
     *  the password hint will be sent in the hint param */
    password?: (hint?: string) => Promise<string>;
    /** in case of a new account creation this callback should return a first name and last name `[first,last]`. */
    firstAndLastNames?: () => Promise<[string, string?]>;
    /** a qrCode token for login through qrCode.<br/>
     *  this would need a QR code that you should scan with another app to login with. */
    qrCode?: (qrCode: {
        token: Buffer;
        expires: number;
    }) => Promise<void>;
    /** when an error happens during auth this function will be called with the error.<br/>
     *  if this returns true the auth operation will stop. */
    onError: (err: Error) => Promise<boolean> | void;
    /** whether to send the code through SMS or not. */
    forceSMS?: boolean;
    /** optional callback for handling reCAPTCHA. */
    reCaptchaCallback?: (siteKey: string) => Promise<string>;
    /** callback for email verification when Telegram requires email setup or code.<br/>
     *  Called when `auth.SentCodeTypeSetUpEmailRequired` or `auth.SentCodeTypeEmailCode` is received.<br/>
     *  For setup: should return email address to use and then handle verification code.<br/>
     *  For existing email: should return the verification result (code, Google token, or Apple token). */
    emailVerification?: (options: EmailVerificationOptions) => Promise<EmailVerificationResult>;
    /** callback to get email address when email setup is required.<br/>
     *  Called first when `auth.SentCodeTypeSetUpEmailRequired` is received. */
    emailAddress?: () => Promise<string>;
}
export interface UserPasswordAuthParams {
    /** optional string or callback that should return the 2FA password if present.<br/>
     *  the password hint will be sent in the hint param */
    password?: (hint?: string) => Promise<string>;
    /** when an error happens during auth this function will be called with the error.<br/>
     *  if this returns true the auth operation will stop. */
    onError: (err: Error) => Promise<boolean> | void;
}
export interface QrCodeAuthParams extends UserPasswordAuthParams {
    /** a qrCode token for login through qrCode.<br/>
     *  this would need a QR code that you should scan with another app to login with. */
    qrCode?: (qrCode: {
        token: Buffer;
        expires: number;
    }) => Promise<void>;
    /** when an error happens during auth this function will be called with the error.<br/>
     *  if this returns true the auth operation will stop. */
    onError: (err: Error) => Promise<boolean> | void;
    /** an AbortSignal to cancel the QR login flow (e.g. the user closed the page).<br/>
     *  when aborted, the flow stops polling and rejects with an `AbortError`. */
    abortSignal?: AbortSignal;
}
interface ReturnString {
    (): string;
}
/**
 * For when you want as a normal bot created by https://t.me/Botfather.<br/>
 * Logging in as bot is simple and requires no callbacks
 */
export interface BotAuthParams {
    /**
     * the bot token to use.
     */
    botAuthToken: string | ReturnString;
}
/**
 * Credential needed for the authentication. you can get theses from https://my.telegram.org/auth<br/>
 * Note: This is required for both logging in as a bot and a user.<br/>
 */
export interface ApiCredentials {
    /** The app api id. */
    apiId: number;
    /** the app api hash */
    apiHash: string;
}
/** @hidden */
export declare function start(client: TelegramClient, authParams?: UserAuthParams | BotAuthParams): Promise<void>;
/** @hidden */
export declare function checkAuthorization(client: TelegramClient): Promise<boolean>;
/** @hidden */
export declare function logOut(client: TelegramClient): Promise<boolean>;
/** @hidden */
export declare function signInUser(client: TelegramClient, apiCredentials: ApiCredentials, authParams: UserAuthParams): Promise<Api.TypeUser>;
/** @hidden */
export declare function signInUserWithQrCode(client: TelegramClient, apiCredentials: ApiCredentials, authParams: QrCodeAuthParams): Promise<Api.TypeUser>;
/**
 * Result from sendCode containing info about how to proceed with verification.
 */
export interface SendCodeResult {
    /** The phone code hash needed for sign in. */
    phoneCodeHash: string;
    /** Whether the code was sent via Telegram app (true) or SMS (false). */
    isCodeViaApp: boolean;
    /** If true, email setup is required before phone code. */
    emailRequired?: boolean;
    /** If true, code was sent to existing email. */
    emailCodeSent?: boolean;
    /** Email verification options when email is involved. */
    emailOptions?: EmailVerificationOptions;
}
/** @hidden */
export declare function sendCode(client: TelegramClient, apiCredentials: ApiCredentials, phoneNumber: string, forceSMS?: boolean, reCaptchaCallback?: (siteKey: string) => Promise<string>): Promise<SendCodeResult>;
/** @hidden */
export declare function signInWithPassword(client: TelegramClient, apiCredentials: ApiCredentials, authParams: UserPasswordAuthParams): Promise<Api.TypeUser>;
/** @hidden */
export declare function signInBot(client: TelegramClient, apiCredentials: ApiCredentials, authParams: BotAuthParams): Promise<Api.TypeUser>;
/** @hidden */
export declare function _authFlow(client: TelegramClient, apiCredentials: ApiCredentials, authParams: UserAuthParams | BotAuthParams): Promise<void>;
/**
 * Result from sendVerifyEmailCode.
 */
export interface SentEmailCodeResult {
    /** The masked email pattern where the code was sent. */
    emailPattern: string;
    /** The length of the verification code. */
    length: number;
}
/**
 * Sends an email verification code for login setup.
 * @param client - The telegram client
 * @param phoneNumber - The phone number being used for login
 * @param phoneCodeHash - The phone code hash from sendCode
 * @param email - The email address to verify
 * @returns The email pattern and code length
 */
/** @hidden */
export declare function sendVerifyEmailCode(client: TelegramClient, phoneNumber: string, phoneCodeHash: string, email: string): Promise<SentEmailCodeResult>;
/**
 * Result from verifyEmail for login.
 */
export interface EmailVerifiedLoginResult {
    /** The verified email address. */
    email: string;
    /** The new sent code result to continue with phone verification. */
    sentCode: Api.auth.TypeSentCode;
}
/**
 * Verifies an email address during login setup.
 * @param client - The telegram client
 * @param phoneNumber - The phone number being used for login
 * @param phoneCodeHash - The phone code hash from sendCode
 * @param verification - The verification (code, Google token, or Apple token)
 * @returns The verified email and the new sent code for phone verification
 */
/** @hidden */
export declare function verifyEmail(client: TelegramClient, phoneNumber: string, phoneCodeHash: string, verification: EmailVerificationResult): Promise<EmailVerifiedLoginResult>;
/**
 * Resets the login email when the user cannot access their current email.
 * This will cancel the current email verification and allow setting up a new one.
 * @param client - The telegram client
 * @param phoneNumber - The phone number being used for login
 * @param phoneCodeHash - The phone code hash from sendCode
 * @returns The new sent code result
 */
/** @hidden */
export declare function resetLoginEmail(client: TelegramClient, phoneNumber: string, phoneCodeHash: string): Promise<Api.auth.TypeSentCode>;
export {};
