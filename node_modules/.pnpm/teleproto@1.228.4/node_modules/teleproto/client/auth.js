"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = start;
exports.checkAuthorization = checkAuthorization;
exports.logOut = logOut;
exports.signInUser = signInUser;
exports.signInUserWithQrCode = signInUserWithQrCode;
exports.sendCode = sendCode;
exports.signInWithPassword = signInWithPassword;
exports.signInBot = signInBot;
exports._authFlow = _authFlow;
exports.sendVerifyEmailCode = sendVerifyEmailCode;
exports.verifyEmail = verifyEmail;
exports.resetLoginEmail = resetLoginEmail;
const tl_1 = require("../tl");
const utils = __importStar(require("../Utils"));
const Helpers_1 = require("../Helpers");
const Password_1 = require("../Password");
const errors_1 = require("../errors");
const QR_CODE_TIMEOUT = 30000;
// region public methods
/** @hidden */
async function start(client, authParams) {
    if (!client.connected) {
        await client.connect();
    }
    // Probe authorization inline (instead of checkAuthorization) so we can keep
    // the actual error the server returned — e.g. AuthKeyUnregisteredError or
    // SessionRevokedError on a revoked session — rather than discarding it.
    let authError;
    try {
        await client.api.updates.getState();
        return;
    }
    catch (e) {
        authError = e;
    }
    // Not authorized and no way to (re)login: surface the real reason instead
    // of crashing on `"phoneNumber" in undefined` further down in _authFlow.
    if (!authParams ||
        (!("phoneNumber" in authParams) && !("botAuthToken" in authParams))) {
        throw (authError !== null && authError !== void 0 ? authError : new errors_1.UnauthorizedError("Not authorized and no auth parameters were provided to log in.", undefined));
    }
    const apiCredentials = {
        apiId: client.apiId,
        apiHash: client.apiHash,
    };
    await _authFlow(client, apiCredentials, authParams);
}
/** @hidden */
async function checkAuthorization(client) {
    try {
        await client.api.updates.getState();
        return true;
    }
    catch (e) {
        return false;
    }
}
/** @hidden */
async function logOut(client) {
    let success = true;
    try {
        await client.api.auth.logOut();
    }
    catch (e) {
        client._log.warn("auth.LogOut failed: " + e.message);
        success = false;
    }
    await client.disconnect();
    await client.session.delete();
    return success;
}
/** @hidden */
async function signInUser(client, apiCredentials, authParams) {
    let phoneNumber = "";
    let phoneCodeHash = "";
    let isCodeViaApp = false;
    while (1) {
        try {
            if (typeof authParams.phoneNumber === "function") {
                try {
                    phoneNumber = await authParams.phoneNumber();
                }
                catch (err) {
                    if (err.errorMessage === "RESTART_AUTH_WITH_QR") {
                        return client.signInUserWithQrCode(apiCredentials, authParams);
                    }
                    throw err;
                }
            }
            else {
                phoneNumber = authParams.phoneNumber;
            }
            const sendCodeResult = await client.sendCode(apiCredentials, phoneNumber, authParams.forceSMS, authParams.reCaptchaCallback);
            phoneCodeHash = sendCodeResult.phoneCodeHash;
            isCodeViaApp = sendCodeResult.isCodeViaApp;
            if (typeof phoneCodeHash !== "string") {
                throw new Error("Failed to retrieve phone code hash");
            }
            // Handle email verification if required
            if (sendCodeResult.emailRequired) {
                // Email setup is required before phone code
                if (!authParams.emailAddress || !authParams.emailVerification) {
                    throw new Error("Email verification required but emailAddress or emailVerification callback not provided");
                }
                // Get email address from user
                const email = await authParams.emailAddress();
                // Send verification code to email
                const emailCodeResult = await sendVerifyEmailCode(client, phoneNumber, phoneCodeHash, email);
                // Get verification from user
                const verification = await authParams.emailVerification(Object.assign(Object.assign({}, sendCodeResult.emailOptions), { emailPattern: emailCodeResult.emailPattern, codeLength: emailCodeResult.length }));
                // Verify email
                const verifyResult = await verifyEmail(client, phoneNumber, phoneCodeHash, verification);
                // Update phone code hash from the new sent code
                if (verifyResult.sentCode instanceof tl_1.Api.auth.SentCode) {
                    phoneCodeHash = verifyResult.sentCode.phoneCodeHash;
                    isCodeViaApp =
                        verifyResult.sentCode.type instanceof
                            tl_1.Api.auth.SentCodeTypeApp;
                }
            }
            else if (sendCodeResult.emailCodeSent) {
                // Code was sent to existing email
                if (!authParams.emailVerification) {
                    throw new Error("Email code sent but emailVerification callback not provided");
                }
                // Get verification from user for existing email
                const verification = await authParams.emailVerification(sendCodeResult.emailOptions || {});
                // Verify with existing email
                const verifyResult = await verifyEmail(client, phoneNumber, phoneCodeHash, verification);
                // Update phone code hash from the new sent code
                if (verifyResult.sentCode instanceof tl_1.Api.auth.SentCode) {
                    phoneCodeHash = verifyResult.sentCode.phoneCodeHash;
                    isCodeViaApp =
                        verifyResult.sentCode.type instanceof
                            tl_1.Api.auth.SentCodeTypeApp;
                }
            }
            break;
        }
        catch (err) {
            if (typeof authParams.phoneNumber !== "function") {
                throw err;
            }
            const shouldWeStop = await authParams.onError(err);
            if (shouldWeStop) {
                throw new Error("AUTH_USER_CANCEL");
            }
        }
    }
    let phoneCode;
    let isRegistrationRequired = false;
    let termsOfService;
    while (1) {
        try {
            try {
                phoneCode = await authParams.phoneCode(isCodeViaApp);
            }
            catch (err) {
                // This is the support for changing phone number from the phone code screen.
                if (err.errorMessage === "RESTART_AUTH") {
                    return client.signInUser(apiCredentials, authParams);
                }
            }
            if (!phoneCode) {
                throw new Error("Code is empty");
            }
            // May raise PhoneCodeEmptyError, PhoneCodeExpiredError,
            // PhoneCodeHashEmptyError or PhoneCodeInvalidError.
            const result = await client.invoke(new tl_1.Api.auth.SignIn({
                phoneNumber,
                phoneCodeHash,
                phoneCode,
            }));
            if (result instanceof tl_1.Api.auth.AuthorizationSignUpRequired) {
                isRegistrationRequired = true;
                termsOfService = result.termsOfService;
                break;
            }
            return result.user;
        }
        catch (err) {
            if (err.errorMessage === "SESSION_PASSWORD_NEEDED") {
                return client.signInWithPassword(apiCredentials, authParams);
            }
            else {
                const shouldWeStop = await authParams.onError(err);
                if (shouldWeStop) {
                    throw new Error("AUTH_USER_CANCEL");
                }
            }
        }
    }
    if (isRegistrationRequired) {
        while (1) {
            try {
                let lastName;
                let firstName = "first name";
                if (authParams.firstAndLastNames) {
                    const result = await authParams.firstAndLastNames();
                    firstName = result[0];
                    lastName = result[1];
                }
                if (!firstName) {
                    throw new Error("First name is required");
                }
                const { user } = (await client.invoke(new tl_1.Api.auth.SignUp({
                    phoneNumber,
                    phoneCodeHash,
                    firstName,
                    lastName,
                })));
                if (termsOfService) {
                    // This is a violation of Telegram rules: the user should be presented with and accept TOS.
                    await client.invoke(new tl_1.Api.help.AcceptTermsOfService({
                        id: termsOfService.id,
                    }));
                }
                return user;
            }
            catch (err) {
                const shouldWeStop = await authParams.onError(err);
                if (shouldWeStop) {
                    throw new Error("AUTH_USER_CANCEL");
                }
            }
        }
    }
    await authParams.onError(new Error("Auth failed"));
    return client.signInUser(apiCredentials, authParams);
}
function qrAbortError() {
    const err = new Error("QR login aborted");
    err.name = "AbortError";
    return err;
}
/** @hidden */
async function signInUserWithQrCode(client, apiCredentials, authParams) {
    if (authParams.qrCode == undefined) {
        throw new Error("qrCode callback not defined");
    }
    const { abortSignal } = authParams;
    if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted)
        throw qrAbortError();
    let isScanningComplete = false;
    const stopped = () => isScanningComplete || !!(abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted);
    const inputPromise = (async () => {
        while (!stopped()) {
            const result = await client.invoke(new tl_1.Api.auth.ExportLoginToken({
                apiId: Number(apiCredentials.apiId),
                apiHash: apiCredentials.apiHash,
                exceptIds: [],
            }));
            if (!(result instanceof tl_1.Api.auth.LoginToken)) {
                throw new Error("Unexpected");
            }
            const { token, expires } = result;
            await Promise.race([
                authParams.qrCode({ token, expires }),
                (0, Helpers_1.sleep)(QR_CODE_TIMEOUT),
            ]);
            await (0, Helpers_1.sleep)(QR_CODE_TIMEOUT);
        }
    })();
    const Raw = require("../events/Raw").Raw;
    const rawEvent = new Raw({});
    const onUpdate = (update) => {
        if (update instanceof tl_1.Api.UpdateLoginToken)
            resolveUpdate();
    };
    let resolveUpdate;
    const updatePromise = new Promise((resolve) => (resolveUpdate = resolve));
    client.addEventHandler(onUpdate, rawEvent);
    const abortPromise = new Promise((_, reject) => abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.addEventListener("abort", () => reject(qrAbortError()), {
        once: true,
    }));
    try {
        await Promise.race([updatePromise, inputPromise, abortPromise]);
    }
    finally {
        isScanningComplete = true;
        client.removeEventHandler(onUpdate, rawEvent);
    }
    try {
        const result2 = await client.invoke(new tl_1.Api.auth.ExportLoginToken({
            apiId: Number(apiCredentials.apiId),
            apiHash: apiCredentials.apiHash,
            exceptIds: [],
        }));
        if (result2 instanceof tl_1.Api.auth.LoginTokenSuccess &&
            result2.authorization instanceof tl_1.Api.auth.Authorization) {
            return result2.authorization.user;
        }
        else if (result2 instanceof tl_1.Api.auth.LoginTokenMigrateTo) {
            await client._switchDC(result2.dcId);
            const migratedResult = await client.invoke(new tl_1.Api.auth.ImportLoginToken({
                token: result2.token,
            }));
            if (migratedResult instanceof tl_1.Api.auth.LoginTokenSuccess &&
                migratedResult.authorization instanceof tl_1.Api.auth.Authorization) {
                return migratedResult.authorization.user;
            }
            else {
                client._log.error(`Received unknown result while scanning QR ${result2.className}`);
                throw new Error(`Received unknown result while scanning QR ${result2.className}`);
            }
        }
        else {
            client._log.error(`Received unknown result while scanning QR ${result2.className}`);
            throw new Error(`Received unknown result while scanning QR ${result2.className}`);
        }
    }
    catch (err) {
        if (err.errorMessage === "SESSION_PASSWORD_NEEDED") {
            return client.signInWithPassword(apiCredentials, authParams);
        }
        throw err;
    }
    await authParams.onError(new Error("QR auth failed"));
    throw new Error("QR auth failed");
}
/** @hidden */
async function sendCode(client, apiCredentials, phoneNumber, forceSMS = false, reCaptchaCallback) {
    var _a;
    try {
        const { apiId, apiHash } = apiCredentials;
        const request = new tl_1.Api.auth.SendCode({
            phoneNumber,
            apiId,
            apiHash,
            settings: new tl_1.Api.CodeSettings({}),
        });
        let sendResult;
        try {
            sendResult = await client.invoke(request);
        }
        catch (err) {
            const match = (_a = err.errorMessage) === null || _a === void 0 ? void 0 : _a.match(/RECAPTCHA_CHECK_.*(6Le[-\w]+)/);
            if (match && reCaptchaCallback) {
                const siteKey = match[1];
                const token = await reCaptchaCallback(siteKey);
                sendResult = await client.invoke(new tl_1.Api.InvokeWithReCaptcha({
                    token: token,
                    query: request,
                }));
            }
            else {
                throw err;
            }
        }
        if (sendResult instanceof tl_1.Api.auth.SentCodeSuccess)
            throw new Error("logged in right after sending the code");
        if (!(sendResult instanceof tl_1.Api.auth.SentCode)) {
            return {
                phoneCodeHash: sendResult.phoneCodeHash,
                isCodeViaApp: false,
            };
        }
        // Handle email verification types
        if (sendResult.type instanceof tl_1.Api.auth.SentCodeTypeSetUpEmailRequired) {
            return {
                phoneCodeHash: sendResult.phoneCodeHash,
                isCodeViaApp: false,
                emailRequired: true,
                emailOptions: {
                    googleSigninAllowed: sendResult.type.googleSigninAllowed,
                    appleSigninAllowed: sendResult.type.appleSigninAllowed,
                },
            };
        }
        if (sendResult.type instanceof tl_1.Api.auth.SentCodeTypeEmailCode) {
            return {
                phoneCodeHash: sendResult.phoneCodeHash,
                isCodeViaApp: false,
                emailCodeSent: true,
                emailOptions: {
                    googleSigninAllowed: sendResult.type.googleSigninAllowed,
                    appleSigninAllowed: sendResult.type.appleSigninAllowed,
                    emailPattern: sendResult.type.emailPattern,
                    codeLength: sendResult.type.length,
                    resetAvailablePeriod: sendResult.type.resetAvailablePeriod,
                    resetPendingDate: sendResult.type.resetPendingDate,
                },
            };
        }
        // If we already sent a SMS, do not resend the phoneCode (hash may be empty)
        if (!forceSMS || sendResult.type instanceof tl_1.Api.auth.SentCodeTypeSms) {
            return {
                phoneCodeHash: sendResult.phoneCodeHash,
                isCodeViaApp: sendResult.type instanceof tl_1.Api.auth.SentCodeTypeApp,
            };
        }
        const resendResult = await client.invoke(new tl_1.Api.auth.ResendCode({
            phoneNumber,
            phoneCodeHash: sendResult.phoneCodeHash,
        }));
        if (resendResult instanceof tl_1.Api.auth.SentCodeSuccess)
            throw new Error("logged in right after resending the code");
        if (!(resendResult instanceof tl_1.Api.auth.SentCode)) {
            return {
                phoneCodeHash: resendResult.phoneCodeHash,
                isCodeViaApp: false,
            };
        }
        // Handle email types in resend result as well
        if (resendResult.type instanceof tl_1.Api.auth.SentCodeTypeSetUpEmailRequired) {
            return {
                phoneCodeHash: resendResult.phoneCodeHash,
                isCodeViaApp: false,
                emailRequired: true,
                emailOptions: {
                    googleSigninAllowed: resendResult.type.googleSigninAllowed,
                    appleSigninAllowed: resendResult.type.appleSigninAllowed,
                },
            };
        }
        if (resendResult.type instanceof tl_1.Api.auth.SentCodeTypeEmailCode) {
            return {
                phoneCodeHash: resendResult.phoneCodeHash,
                isCodeViaApp: false,
                emailCodeSent: true,
                emailOptions: {
                    googleSigninAllowed: resendResult.type.googleSigninAllowed,
                    appleSigninAllowed: resendResult.type.appleSigninAllowed,
                    emailPattern: resendResult.type.emailPattern,
                    codeLength: resendResult.type.length,
                    resetAvailablePeriod: resendResult.type.resetAvailablePeriod,
                    resetPendingDate: resendResult.type.resetPendingDate,
                },
            };
        }
        return {
            phoneCodeHash: resendResult.phoneCodeHash,
            isCodeViaApp: resendResult.type instanceof tl_1.Api.auth.SentCodeTypeApp,
        };
    }
    catch (err) {
        if (err.errorMessage === "AUTH_RESTART") {
            return sendCode(client, apiCredentials, phoneNumber, forceSMS, reCaptchaCallback);
        }
        else {
            throw err;
        }
    }
}
/** @hidden */
async function signInWithPassword(client, apiCredentials, authParams) {
    let emptyPassword = false;
    while (1) {
        try {
            const passwordSrpResult = await client.invoke(new tl_1.Api.account.GetPassword());
            if (!authParams.password) {
                emptyPassword = true;
                break;
            }
            const password = await authParams.password(passwordSrpResult.hint);
            if (!password) {
                throw new Error("Password is empty");
            }
            const passwordSrpCheck = await (0, Password_1.computeCheck)(passwordSrpResult, password);
            const { user } = (await client.invoke(new tl_1.Api.auth.CheckPassword({
                password: passwordSrpCheck,
            })));
            return user;
        }
        catch (err) {
            const shouldWeStop = await authParams.onError(err);
            if (shouldWeStop) {
                throw new Error("AUTH_USER_CANCEL");
            }
        }
    }
    if (emptyPassword) {
        throw new Error("Account has 2FA enabled.");
    }
    return undefined; // Never reached (TypeScript fix)
}
/** @hidden */
async function signInBot(client, apiCredentials, authParams) {
    const { apiId, apiHash } = apiCredentials;
    let { botAuthToken } = authParams;
    if (!botAuthToken) {
        throw new Error("a valid BotToken is required");
    }
    if (typeof botAuthToken === "function") {
        let token;
        while (true) {
            token = await botAuthToken();
            if (token) {
                botAuthToken = token;
                break;
            }
        }
    }
    const { user } = (await client.invoke(new tl_1.Api.auth.ImportBotAuthorization({
        apiId,
        apiHash,
        botAuthToken,
    })));
    return user;
}
/** @hidden */
async function _authFlow(client, apiCredentials, authParams) {
    const me = "phoneNumber" in authParams
        ? await client.signInUser(apiCredentials, authParams)
        : await client.signInBot(apiCredentials, authParams);
    client._log.info("Signed in successfully as " + utils.getDisplayName(me));
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
async function sendVerifyEmailCode(client, phoneNumber, phoneCodeHash, email) {
    const result = await client.invoke(new tl_1.Api.account.SendVerifyEmailCode({
        purpose: new tl_1.Api.EmailVerifyPurposeLoginSetup({
            phoneNumber,
            phoneCodeHash,
        }),
        email,
    }));
    return {
        emailPattern: result.emailPattern,
        length: result.length,
    };
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
async function verifyEmail(client, phoneNumber, phoneCodeHash, verification) {
    let emailVerification;
    switch (verification.type) {
        case "code":
            emailVerification = new tl_1.Api.EmailVerificationCode({
                code: verification.code,
            });
            break;
        case "google":
            emailVerification = new tl_1.Api.EmailVerificationGoogle({
                token: verification.token,
            });
            break;
        case "apple":
            emailVerification = new tl_1.Api.EmailVerificationApple({
                token: verification.token,
            });
            break;
    }
    const result = await client.invoke(new tl_1.Api.account.VerifyEmail({
        purpose: new tl_1.Api.EmailVerifyPurposeLoginSetup({
            phoneNumber,
            phoneCodeHash,
        }),
        verification: emailVerification,
    }));
    if (!(result instanceof tl_1.Api.account.EmailVerifiedLogin)) {
        throw new Error("Expected EmailVerifiedLogin but got " + result.className);
    }
    return {
        email: result.email,
        sentCode: result.sentCode,
    };
}
/**
 * Resets the login email when the user cannot access their current email.
 * This will cancel the current email verification and allow setting up a new one.
 * @param client - The telegram client
 * @param phoneNumber - The phone number being used for login
 * @param phoneCodeHash - The phone code hash from sendCode
 * @returns The new sent code result
 */
/** @hidden */
async function resetLoginEmail(client, phoneNumber, phoneCodeHash) {
    return await client.invoke(new tl_1.Api.auth.ResetLoginEmail({
        phoneNumber,
        phoneCodeHash,
    }));
}
