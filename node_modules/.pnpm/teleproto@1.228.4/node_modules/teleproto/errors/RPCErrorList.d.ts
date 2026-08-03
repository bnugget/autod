import { InvalidDCError, BadRequestError, UnauthorizedError, ForbiddenError, AuthKeyError, FloodError, ServerError, TimedOutError } from "./RPCBaseErrors";
export interface ErrorArgs {
    request: any;
    capture?: number | null;
}
/** Your IP address is associated to DC %d, please re-send the query to that DC. */
export declare class NetworkMigrateError extends InvalidDCError {
    newDc: number;
    constructor(args: ErrorArgs);
}
/** Your phone number is associated to DC %d, please re-send the query to that DC. */
export declare class PhoneMigrateError extends InvalidDCError {
    newDc: number;
    constructor(args: ErrorArgs);
}
/** Channel statistics for the specified channel are stored on DC %d, please re-send the query to that DC. */
export declare class StatsMigrateError extends InvalidDCError {
    newDc: number;
    constructor(args: ErrorArgs);
}
/** Your account is associated to DC %d, please re-send the query to that DC. */
export declare class UserMigrateError extends InvalidDCError {
    newDc: number;
    constructor(args: ErrorArgs);
}
/** About string too long. */
export declare class AboutTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Access token expired. */
export declare class AccessTokenExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Access token invalid. */
export declare class AccessTokenInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The ad has expired (too old or not found). */
export declare class AdExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified geopoint address is invalid. */
export declare class AddressInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified admin ID is invalid. */
export declare class AdminIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An admin rank cannot contain emojis. */
export declare class AdminRankEmojiNotAllowedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified admin rank is invalid. */
export declare class AdminRankInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The chatAdminRights constructor passed in keyboardButtonRequestPeer.peer_type.user_admin_rights has no rights set (i.e. flags is 0). */
export declare class AdminRightsEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** There are too many admins. */
export declare class AdminsTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You have uploaded too many profile photos, delete some before retrying. */
export declare class AlbumPhotosTooManyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** API ID invalid. */
export declare class ApiIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This API id was published somewhere, you can't use it now. */
export declare class ApiIdPublishedFloodError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The title of the article is empty. */
export declare class ArticleTitleEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The remote URL specified in the content field is empty. */
export declare class AudioContentUrlEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An empty audio title was provided. */
export declare class AudioTitleEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided authorization is invalid. */
export declare class AuthBytesInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified auth token was already accepted. */
export declare class AuthTokenAlreadyAcceptedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An error occurred while importing the auth token. */
export declare class AuthTokenExceptionError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The authorization token has expired. */
export declare class AuthTokenExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified auth token is invalid. */
export declare class AuthTokenInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified auth token is invalid. */
export declare class AuthTokenInvalidxError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The autoarchive setting is not available at this time: please check the value of the [autoarchive_setting_available field in client config &raquo;](https://core.telegram.org/api/config#client-configuration) before calling this method. */
export declare class AutoarchiveNotAvailableError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The transaction cannot be completed because the current [Telegram Stars balance](https://core.telegram.org/api/stars) is too low. */
export declare class BalanceTooLowError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified card number is invalid. */
export declare class BankCardNumberInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You provided some invalid flags in the banned rights. */
export declare class BannedRightsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An invalid age was specified, must be between 0 and 150 years. */
export declare class BirthdayInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You're already [boosting](https://core.telegram.org/api/boost) the specified channel. */
export declare class BoostNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `boost_peer` is invalid. */
export declare class BoostPeerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No boost slots were specified. */
export declare class BoostsEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified channel must first be [boosted by its users](https://core.telegram.org/api/boost) in order to perform this action. */
export declare class BoostsRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The connected business bot was already disabled for the specified peer. */
export declare class BotAlreadyDisabledError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The bot_id passed in the inputBotAppShortName constructor is invalid. */
export declare class BotAppBotInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified bot app is invalid. */
export declare class BotAppInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified bot app short name is invalid. */
export declare class BotAppShortnameInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified bot is not a business bot (the [user](https://core.telegram.org/constructor/user).`bot_business` flag is not set). */
export declare class BotBusinessMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Bots can't edit admin privileges. */
export declare class BotChannelsNaError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified command description is invalid. */
export declare class BotCommandDescriptionInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified command is invalid. */
export declare class BotCommandInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Bot domain invalid. */
export declare class BotDomainInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The fallback flag can't be set for bots. */
export declare class BotFallbackUnsupportedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Games can't be sent to channels. */
export declare class BotGamesDisabledError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This bot can't be added to groups. */
export declare class BotGroupsBlockedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This bot can't be used in inline mode. */
export declare class BotInlineDisabledError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This is not a valid bot. */
export declare class BotInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified invoice is invalid. */
export declare class BotInvoiceInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No [business bot](https://core.telegram.org/api/business#connected-bots) is connected to the currently logged in user. */
export declare class BotNotConnectedYetError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Bots can't pin messages in PM just for themselves. */
export declare class BotOnesideNotAvailError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Please enable bot payments in botfather before calling this method. */
export declare class BotPaymentsDisabledError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A timeout occurred while fetching data from the bot. */
export declare class BotResponseTimeoutError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The score wasn't modified. */
export declare class BotScoreNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A webview cannot be opened in the specified conditions: emitted for example if `from_bot_menu` or `url` are set and `peer` is not the chat with the bot. */
export declare class BotWebviewDisabledError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** There are too many bots in this chat/channel. */
export declare class BotsTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Broadcast ID invalid. */
export declare class BroadcastIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't forward polls with public voters. */
export declare class BroadcastPublicVotersForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This method can only be called on a channel, please use stats.getMegagroupStats for supergroups. */
export declare class BroadcastRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The `connection_id` passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. */
export declare class BusinessConnectionInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This method was invoked over a business connection using [invokeWithBusinessConnection](https://core.telegram.org/api/business#connected-bots), but either (1) we're a user, and users cannot invoke methods over a business connection; (2) we're a bot, but business mode was disabled in @botfather or (3); we're a bot, but this method cannot be invoked over a business connection. */
export declare class BusinessConnectionNotAllowedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Messages can't be set to the specified peer through the current [business connection](https://core.telegram.org/api/business#connected-bots). */
export declare class BusinessPeerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You cannot send a message to a user through a [business connection](https://core.telegram.org/api/business#connected-bots) if the user hasn't recently contacted us. */
export declare class BusinessPeerUsageMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You didn't set any flag in inputBusinessBotRecipients, thus the bot cannot work with *any* peer. */
export declare class BusinessRecipientsEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No work hours were specified. */
export declare class BusinessWorkHoursEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified work hours are invalid, see [here &raquo;](https://core.telegram.org/api/business#opening-hours) for the exact requirements. */
export declare class BusinessWorkHoursPeriodInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified [keyboardButtonCopy](https://core.telegram.org/constructor/keyboardButtonCopy).`copy_text` is invalid. */
export declare class ButtonCopyTextInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The data of one or more of the buttons you provided is invalid. */
export declare class ButtonDataInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified button ID is invalid. */
export declare class ButtonIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified button is invalid. */
export declare class ButtonInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The position of one of the keyboard buttons is invalid (i.e. a Game or Pay button not in the first position, and so on...). */
export declare class ButtonPosInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified button text is invalid. */
export declare class ButtonTextInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The type of one or more of the buttons you provided is invalid. */
export declare class ButtonTypeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Button URL invalid. */
export declare class ButtonUrlInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The `user_id` passed to inputKeyboardButtonUserProfile is invalid! */
export declare class ButtonUserInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The privacy setting of the user specified in a [inputKeyboardButtonUserProfile](https://core.telegram.org/constructor/inputKeyboardButtonUserProfile) button do not allow creating such a button. */
export declare class ButtonUserPrivacyRestrictedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The call was already accepted. */
export declare class CallAlreadyAcceptedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The call was already declined. */
export declare class CallAlreadyDeclinedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The call failed because the user is already making another call. */
export declare class CallOccupyFailedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided call peer object is invalid. */
export declare class CallPeerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Call protocol flags invalid. */
export declare class CallProtocolFlagsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified protocol layer version range is invalid. */
export declare class CallProtocolLayerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't call this method in a CDN DC. */
export declare class CdnMethodInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This supergroup is not a forum. */
export declare class ChannelForumMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified supergroup ID is invalid. */
export declare class ChannelIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided channel is invalid. */
export declare class ChannelInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** [Monoforums](https://core.telegram.org/api/channel#monoforums) do not support this feature. */
export declare class ChannelMonoforumUnsupportedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The current user is not in the channel. */
export declare class ChannelParicipantMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You haven't joined this channel/supergroup. */
export declare class ChannelPrivateError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This channel has too many participants (>1000) to be deleted. */
export declare class ChannelTooBigError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Channel is too large to be deleted; this error is issued when trying to delete channels with more than 1000 members (subject to change). */
export declare class ChannelTooLargeError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The user has reached the limit of public geogroups. */
export declare class ChannelsAdminLocatedTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You're admin of too many public channels, make some channels private to change the username of this channel. */
export declare class ChannelsAdminPublicTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You have joined too many channels/supergroups. */
export declare class ChannelsTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The transaction was already refunded. */
export declare class ChargeAlreadyRefundedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified charge_id is empty. */
export declare class ChargeIdEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified charge_id is invalid. */
export declare class ChargeIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** About text has not changed. */
export declare class ChatAboutNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Chat about too long. */
export declare class ChatAboutTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You must be an admin in this chat to do this. */
export declare class ChatAdminRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't enable forum topics in a discussion group linked to a channel. */
export declare class ChatDiscussionUnallowedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't forward messages from a protected chat. */
export declare class ChatForwardsRestrictedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided chat ID is empty. */
export declare class ChatIdEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided chat id is invalid. */
export declare class ChatIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid chat. */
export declare class ChatInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't set an expiration date on permanent invite links. */
export declare class ChatInvitePermanentError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The chat is public, you can't hide the history to new users. */
export declare class ChatLinkExistsError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Could not add participants. */
export declare class ChatMemberAddFailedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No changes were made to chat information because the new information you passed is identical to the current information. */
export declare class ChatNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can only enable join requests in public groups. */
export declare class ChatPublicRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't send messages in this chat, you were restricted. */
export declare class ChatRestrictedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** `min_date` and `max_date` are not available for using with non-user peers. */
export declare class ChatRevokeDateUnsupportedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't send inline messages in this group. */
export declare class ChatSendInlineForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No chat title provided. */
export declare class ChatTitleEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This method is not available for groups with more than `chat_read_mark_size_threshold` members, [see client configuration &raquo;](https://core.telegram.org/api/config#client-configuration). */
export declare class ChatTooBigError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified slug is empty. */
export declare class ChatlinkSlugEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified [business chat link](https://core.telegram.org/api/business#business-chat-links) has expired. */
export declare class ChatlinkSlugExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Too many [business chat links](https://core.telegram.org/api/business#business-chat-links) were created, please delete some older links. */
export declare class ChatlinksTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `exclude_peers` are invalid. */
export declare class ChatlistExcludeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You have created too many folder links, hitting the `chatlist_invites_limit_default`/`chatlist_invites_limit_premium` [limits &raquo;](https://core.telegram.org/api/config#chatlist-invites-limit-default). */
export declare class ChatlistsTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided code is empty. */
export declare class CodeEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Code hash invalid. */
export declare class CodeHashInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Code invalid. */
export declare class CodeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified collectible is invalid. */
export declare class CollectibleInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified collectible could not be found. */
export declare class CollectibleNotFoundError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified color palette ID was invalid. */
export declare class ColorInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided API id is invalid. */
export declare class ConnectionApiIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** App version is empty. */
export declare class ConnectionAppVersionEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified connection ID is invalid. */
export declare class ConnectionIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Layer invalid. */
export declare class ConnectionLayerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Contact to add is missing. */
export declare class ContactAddMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided contact ID is invalid. */
export declare class ContactIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified user is not a contact. */
export declare class ContactMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Contact name empty. */
export declare class ContactNameEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Missing contact request. */
export declare class ContactReqMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An error occurred while creating the call. */
export declare class CreateCallFailedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The total amount of all prices is invalid. */
export declare class CurrencyTotalAmountInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Too many custom reactions were specified. */
export declare class CustomReactionsTooManyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The size of the specified secureValueErrorData.data_hash is invalid. */
export declare class DataHashSizeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Encrypted data invalid. */
export declare class DataInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided JSON data is invalid. */
export declare class DataJsonInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Data too long. */
export declare class DataTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Date empty. */
export declare class DateEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided DC ID is invalid. */
export declare class DcIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** g_a invalid. */
export declare class DhGAInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified document is invalid. */
export declare class DocumentInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified effect ID is invalid. */
export declare class EffectIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Email hash expired. */
export declare class EmailHashExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified email is invalid. */
export declare class EmailInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified email cannot be used to complete the operation. */
export declare class EmailNotAllowedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** In order to change the login email with emailVerifyPurposeLoginChange, an existing login email must already be set using emailVerifyPurposeLoginSetup. */
export declare class EmailNotSetupError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided email isn't confirmed, %d is the length of the verification code that was just sent to the email: use [account.verifyEmail](https://core.telegram.org/method/account.verifyEmail) to enter the received verification code and enable the recovery email. */
export declare class EmailUnconfirmedError extends BadRequestError {
    codeLength: number;
    constructor(args: ErrorArgs);
}
/** The verification email has expired. */
export declare class EmailVerifyExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified theme emoji is valid. */
export declare class EmojiInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `video_emoji_markup` was invalid. */
export declare class EmojiMarkupInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The theme wasn't changed. */
export declare class EmojiNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The emoji is empty. */
export declare class EmoticonEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified emoji is invalid. */
export declare class EmoticonInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** inputStickerSetDice.emoji cannot be empty. */
export declare class EmoticonStickerpackMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Encrypted message invalid. */
export declare class EncryptedMessageInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Secret chat already accepted. */
export declare class EncryptionAlreadyAcceptedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The secret chat was already declined. */
export declare class EncryptionAlreadyDeclinedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The secret chat was declined. */
export declare class EncryptionDeclinedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided secret chat ID is invalid. */
export declare class EncryptionIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You provided too many styled message entities. */
export declare class EntitiesTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A specified [entity offset or length](https://core.telegram.org/api/entities#entity-length) is invalid, see [here &raquo;](https://core.telegram.org/api/entities#entity-length) for info on how to properly compute the entity offset/length. */
export declare class EntityBoundsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You mentioned an invalid user. */
export declare class EntityMentionUserInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided error message is empty. */
export declare class ErrorTextEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified expiration date is invalid. */
export declare class ExpireDateInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `expires_at` timestamp is invalid. */
export declare class ExpiresAtInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Provided card is invalid. */
export declare class ExportCardInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `stars_amount` of the passed [inputMediaPaidMedia](https://core.telegram.org/constructor/inputMediaPaidMedia) is invalid. */
export declare class ExtendedMediaAmountInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified paid media is invalid. */
export declare class ExtendedMediaInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** External URL invalid. */
export declare class ExternalUrlInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** File content-type is invalid. */
export declare class FileContentTypeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An empty file was provided. */
export declare class FileEmtpyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided file id is invalid. */
export declare class FileIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided file part is empty. */
export declare class FilePartEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The file part number is invalid. */
export declare class FilePartInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The length of a file part is invalid. */
export declare class FilePartLengthInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Provided file part size has changed. */
export declare class FilePartSizeChangedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided file part size is invalid. */
export declare class FilePartSizeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The uploaded file part is too big. */
export declare class FilePartTooBigError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The size of the uploaded file part is too small, please see the documentation for the allowed sizes. */
export declare class FilePartTooSmallError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The number of file parts is invalid. */
export declare class FilePartsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The file reference of the media file at index %d in the passed media array expired, it [must be refreshed as specified in the documentation](https://core.telegram.org/api/file-references). . */
export declare class FileReferenceExpiredError extends BadRequestError {
    value: number;
    constructor(args: ErrorArgs);
}
/** The [file reference](https://core.telegram.org/api/file-references) of the media file at index %d in the passed media array is invalid. */
export declare class FileReferenceInvalidError extends BadRequestError {
    value: number;
    constructor(args: ErrorArgs);
}
/** An empty [file reference](https://core.telegram.org/api/file-references) was specified. */
export declare class FileReferenceEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An empty file title was specified. */
export declare class FileTitleEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The master DC did not accept the `file_token` (e.g., the token has expired). Continue downloading the file from the master DC using upload.getFile. */
export declare class FileTokenInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified filter ID is invalid. */
export declare class FilterIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The include_peers vector of the filter is empty. */
export declare class FilterIncludeEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified filter cannot be used in this context. */
export declare class FilterNotSupportedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The title field of the filter is empty. */
export declare class FilterTitleEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The first name is invalid. */
export declare class FirstnameInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An empty folder ID was specified. */
export declare class FolderIdEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid folder ID. */
export declare class FolderIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The form was generated more than 10 minutes ago and has expired, please re-generate it using [payments.getPaymentForm](https://core.telegram.org/method/payments.getPaymentForm) and pass the new `form_id`. */
export declare class FormExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified form ID is empty. */
export declare class FormIdEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The same payment form was already submitted.  . */
export declare class FormSubmitDuplicateError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Please update your client. */
export declare class FormUnsupportedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't execute the specified action because the group is a [forum](https://core.telegram.org/api/forum), disable forum functionality to continue. */
export declare class ForumEnabledError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You were just elected admin, you can't add or modify other admins yet. */
export declare class FreshChangeAdminsForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Bots can't use fromMessage min constructors. */
export declare class FromMessageBotDisabledError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified from_id is invalid. */
export declare class FromPeerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The current account is [frozen](https://core.telegram.org/api/auth#frozen-accounts), and cannot access the specified peer. */
export declare class FrozenParticipantMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Bots can't send another bot's game. */
export declare class GameBotInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't modify the icon of the "General" topic. */
export declare class GeneralModifyIconForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid geoposition provided. */
export declare class GeoPointInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** GIF content-type invalid. */
export declare class GifContentTypeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided GIF ID is invalid. */
export declare class GifIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The value passed in invoice.inputInvoicePremiumGiftStars.months is invalid. */
export declare class GiftMonthsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified gift slug has expired. */
export declare class GiftSlugExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified slug is invalid. */
export declare class GiftSlugInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified amount of stars is invalid. */
export declare class GiftStarsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This graph has expired, please obtain a new graph token. */
export declare class GraphExpiredReloadError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid graph token provided, please reload the stats and provide the updated token. */
export declare class GraphInvalidReloadError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The graph is outdated, please get a new async token using stats.getBroadcastStats. */
export declare class GraphOutdatedReloadError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The group call was already discarded. */
export declare class GroupcallAlreadyDiscardedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The group call has already ended. */
export declare class GroupcallForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified group call is invalid. */
export declare class GroupcallInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You haven't joined this group call. */
export declare class GroupcallJoinMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Group call settings weren't modified. */
export declare class GroupcallNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The app needs to retry joining the group call with a new SSRC value. */
export declare class GroupcallSsrcDuplicateMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid grouped media. */
export declare class GroupedMediaInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided hash is invalid. */
export declare class HashInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The size of the specified secureValueError.hash is invalid. */
export declare class HashSizeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified hashtag is invalid. */
export declare class HashtagInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The join request was missing or was already handled. */
export declare class HideRequesterMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The passed prepared inline message ID has expired. */
export declare class IdExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The passed ID is invalid. */
export declare class IdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Failure while processing image. */
export declare class ImageProcessFailedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified chat export file is invalid. */
export declare class ImportFileInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The date specified in the import file is invalid. */
export declare class ImportFormatDateInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified chat export file was exported from an unsupported chat app. */
export declare class ImportFormatUnrecognizedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified import ID is invalid. */
export declare class ImportIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified token is invalid. */
export declare class ImportTokenInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The inline query expired. */
export declare class InlineResultExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified folder is invalid. */
export declare class InputChatlistInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified [InputFile](https://core.telegram.org/type/InputFile) is invalid. */
export declare class InputFileInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified filter is invalid. */
export declare class InputFilterInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified peer array is empty. */
export declare class InputPeersEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified payment purpose is invalid. */
export declare class InputPurposeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified text is empty. */
export declare class InputTextEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified text is too long. */
export declare class InputTextTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified user was deleted. */
export declare class InputUserDeactivatedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** If the user has anonymously joined a group call as a channel, they can't invite other users to the group call because that would cause deanonymization, because the invite would be sent using the original user ID, not the anonymized channel ID. */
export declare class InviteForbiddenWithJoinasError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The invite hash is empty. */
export declare class InviteHashEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The invite link has expired. */
export declare class InviteHashExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The invite hash is invalid. */
export declare class InviteHashInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You have successfully requested to join this chat or channel. */
export declare class InviteRequestSentError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified invite link was already revoked or is invalid. */
export declare class InviteRevokedMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified invite slug is empty. */
export declare class InviteSlugEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified chat folder link has expired. */
export declare class InviteSlugExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified invitation slug is invalid. */
export declare class InviteSlugInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The maximum number of per-folder invites specified by the `chatlist_invites_limit_default`/`chatlist_invites_limit_premium` [client configuration parameters &raquo;](https://core.telegram.org/api/config#chatlist-invites-limit-default) was reached. */
export declare class InvitesTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified invoice is invalid. */
export declare class InvoiceInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified invoice payload is invalid. */
export declare class InvoicePayloadInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified peer cannot be used to join a group call. */
export declare class JoinAsPeerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified language code is invalid. */
export declare class LangCodeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified language code is not supported. */
export declare class LangCodeNotSupportedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided language pack is invalid. */
export declare class LangPackInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified lang_code is invalid. */
export declare class LanguageInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The last name is invalid. */
export declare class LastnameInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided limit is invalid. */
export declare class LimitInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Discussion link not modified. */
export declare class LinkNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided location is invalid. */
export declare class LocationInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified maximum date is invalid. */
export declare class MaxDateInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided max ID is invalid. */
export declare class MaxIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified max_qts is invalid. */
export declare class MaxQtsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The MD5 checksums do not match. */
export declare class Md5ChecksumInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You already paid for the specified media. */
export declare class MediaAlreadyPaidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The caption is too long. */
export declare class MediaCaptionTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided media object is invalid. */
export declare class MediaEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified media file is invalid. */
export declare class MediaFileInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You tried to send media of different types in an album. */
export declare class MediaGroupedInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Media invalid. */
export declare class MediaInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The new media is invalid. */
export declare class MediaNewInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Previous media invalid. */
export declare class MediaPrevInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified media TTL is invalid. */
export declare class MediaTtlInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified media type cannot be used in stories. */
export declare class MediaTypeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A non-story video cannot be repubblished as a story (emitted when trying to resend a non-story video as a story using inputDocument). */
export declare class MediaVideoStoryMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This method can only be invoked on a geogroup. */
export declare class MegagroupGeoRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid supergroup ID. */
export declare class MegagroupIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Group with hidden history for new members can't be set as discussion groups. */
export declare class MegagroupPrehistoryHiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can only use this method on a supergroup. */
export declare class MegagroupRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't edit this message anymore, too much time has passed since its creation. */
export declare class MessageEditTimeExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided message is empty. */
export declare class MessageEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided message id is invalid. */
export declare class MessageIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No message ids were provided. */
export declare class MessageIdsEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided message data is identical to the previous message data, the message wasn't modified. */
export declare class MessageNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified message wasn't read yet. */
export declare class MessageNotReadYetError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Poll closed. */
export declare class MessagePollClosedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided message is too long. */
export declare class MessageTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The message is too old, the requested information is not available. */
export declare class MessageTooOldError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified method is invalid. */
export declare class MethodInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified minimum date is invalid. */
export declare class MinDateInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The number of months specified in inputInvoicePremiumGiftStars.months is invalid. */
export declare class MonthInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid message ID provided. */
export declare class MsgIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** [`chat_read_mark_expire_period` seconds](https://core.telegram.org/api/config#chat-read-mark-expire-period) have passed since the message was sent, read receipts were deleted. */
export declare class MsgTooOldError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified message is not a voice message. */
export declare class MsgVoiceMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A waiting call returned an error. */
export declare class MsgWaitError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Too many media files for album. */
export declare class MultiMediaTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The new salt is invalid. */
export declare class NewSaltInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No password is set on the current account, and no new password was specified in `new_settings`. */
export declare class NewSettingsEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The new password settings are invalid. */
export declare class NewSettingsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified offset is longer than 64 bytes. */
export declare class NextOffsetInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The upgrade/transfer of the specified gift was already paid for or is free. */
export declare class NoPaymentNeededError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Only the "General" topic with `id=1` can be hidden. */
export declare class NogeneralHideForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The current user is not eligible to join the Peer-to-Peer Login Program. */
export declare class NotEligibleError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The current user hasn't joined the Peer-to-Peer Login Program. */
export declare class NotJoinedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided offset is invalid. */
export declare class OffsetInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided offset peer is invalid. */
export declare class OffsetPeerIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid option selected. */
export declare class OptionInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Too many options provided. */
export declare class OptionsTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified username order is invalid. */
export declare class OrderInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Short pack name invalid. */
export declare class PackShortNameInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A stickerpack with this name already exists. */
export declare class PackShortNameOccupiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The stickerpack title is invalid. */
export declare class PackTitleInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The masks and emojis flags are mutually exclusive. */
export declare class PackTypeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `parent_peer` is invalid. */
export declare class ParentPeerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified participant ID is invalid. */
export declare class ParticipantIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Trying to enable a presentation, when the user hasn't joined the Video Chat with [phone.joinGroupCall](https://core.telegram.org/method/phone.joinGroupCall). */
export declare class ParticipantJoinMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The other participant does not use an up to date telegram client with support for calls. */
export declare class ParticipantVersionOutdatedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Not enough participants. */
export declare class ParticipantsTooFewError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided password is empty. */
export declare class PasswordEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided password hash is invalid. */
export declare class PasswordHashInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You must [enable 2FA](https://core.telegram.org/api/srp) before executing this operation. */
export declare class PasswordMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The recovery code has expired. */
export declare class PasswordRecoveryExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No email was set, can't recover password via email. */
export declare class PasswordRecoveryNaError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A [2FA password](https://core.telegram.org/api/srp) must be configured to use Telegram Passport. */
export declare class PasswordRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The password was modified less than 24 hours ago, try again in %d seconds. */
export declare class PasswordTooFreshError extends BadRequestError {
    value: number;
    constructor(args: ErrorArgs);
}
/** The specified payment credentials are invalid. */
export declare class PaymentCredentialsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified payment provider is invalid. */
export declare class PaymentProviderInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Payment is required for this action, see [here &raquo;](https://core.telegram.org/api/gifts) for more info. */
export declare class PaymentRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't pin an empty chat with a user. */
export declare class PeerHistoryEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided peer id is invalid. */
export declare class PeerIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided peer ID is not supported. */
export declare class PeerIdNotSupportedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The passed [keyboardButtonSwitchInline](https://core.telegram.org/constructor/keyboardButtonSwitchInline).`peer_types` field is invalid. */
export declare class PeerTypesInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified list of peers is empty. */
export declare class PeersListEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Persistent timestamp empty. */
export declare class PersistentTimestampEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Persistent timestamp invalid. */
export declare class PersistentTimestampInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** phone_code is missing. */
export declare class PhoneCodeEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The phone code you provided has expired. */
export declare class PhoneCodeExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** phone_code_hash is missing. */
export declare class PhoneCodeHashEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided phone code is invalid. */
export declare class PhoneCodeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An invalid or expired `phone_code_hash` was provided. */
export declare class PhoneHashExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No user is associated to the specified phone number. */
export declare class PhoneNotOccupiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't sign up using this app. */
export declare class PhoneNumberAppSignupForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided phone number is banned from telegram. */
export declare class PhoneNumberBannedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You asked for the code too many times. */
export declare class PhoneNumberFloodError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The phone number is invalid. */
export declare class PhoneNumberInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The phone number is already in use. */
export declare class PhoneNumberOccupiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The phone number is not yet being used. */
export declare class PhoneNumberUnoccupiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This phone is password protected. */
export declare class PhonePasswordProtectedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Photo mime-type invalid. */
export declare class PhotoContentTypeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Photo URL invalid. */
export declare class PhotoContentUrlEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Photo crop file missing. */
export declare class PhotoCropFileMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Photo is too small. */
export declare class PhotoCropSizeSmallError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The extension of the photo is invalid. */
export declare class PhotoExtInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Profile photo file missing. */
export declare class PhotoFileMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Photo ID invalid. */
export declare class PhotoIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Photo invalid. */
export declare class PhotoInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The photo dimensions are invalid. */
export declare class PhotoInvalidDimensionsError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Internal issues, try again later. */
export declare class PhotoSaveFileInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Photo thumbnail URL is empty. */
export declare class PhotoThumbUrlEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't pin messages. */
export declare class PinRestrictedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Too many pinned dialogs. */
export declare class PinnedDialogsTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** There are too many pinned topics, unpin some first. */
export declare class PinnedTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** One of the poll answers is not acceptable. */
export declare class PollAnswerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid poll answers were provided. */
export declare class PollAnswersInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Duplicate poll options provided. */
export declare class PollOptionDuplicateError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid poll option provided. */
export declare class PollOptionInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** One of the poll questions is not acceptable. */
export declare class PollQuestionInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A premium account is required to execute this action. */
export declare class PremiumAccountRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The pricing for the [subscription](https://core.telegram.org/api/subscriptions) is invalid, the maximum price is specified in the [`stars_subscription_amount_max` config key &raquo;](https://core.telegram.org/api/config#stars-subscription-amount-max). */
export declare class PricingChatInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The privacy key is invalid. */
export declare class PrivacyKeyInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Too many privacy rules were specified, the current limit is 1000. */
export declare class PrivacyTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified privacy rule combination is invalid. */
export declare class PrivacyValueInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A public key is required. */
export declare class PublicKeyRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified payment purpose is invalid. */
export declare class PurposeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The query ID is empty. */
export declare class QueryIdEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The query ID is invalid. */
export declare class QueryIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The query string is too short. */
export declare class QueryTooShortError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** [Quick replies](https://core.telegram.org/api/business#quick-reply-shortcuts) cannot be used by bots. */
export declare class QuickRepliesBotNotAllowedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A maximum of [appConfig.`quick_replies_limit`](https://core.telegram.org/api/config#quick-replies-limit) shortcuts may be created, the limit was reached. */
export declare class QuickRepliesTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can forward a quiz while hiding the original author only after choosing an option in the quiz. */
export declare class QuizAnswerMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An invalid value was provided to the correct_answers field. */
export declare class QuizCorrectAnswerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No correct quiz answer was specified. */
export declare class QuizCorrectAnswersEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You specified too many correct answers in a quiz, quizzes can only have one right answer! */
export declare class QuizCorrectAnswersTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Quizzes can't have the multiple_choice flag set! */
export declare class QuizMultipleInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `reply_to`.`quote_text` field is invalid. */
export declare class QuoteTextInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You cannot raise your hand. */
export declare class RaiseHandForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Random ID empty. */
export declare class RandomIdEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `random_id` was expired (most likely it didn't follow the required `uint64_t random_id = (time() << 32) | ((uint64_t)random_uint32_t())` format, or the specified time is too far in the past). */
export declare class RandomIdExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A provided random ID is invalid. */
export declare class RandomIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Random length invalid. */
export declare class RandomLengthInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid range provided. */
export declare class RangesInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Empty reaction provided. */
export declare class ReactionEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified reaction is invalid. */
export declare class ReactionInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified number of reactions is invalid. */
export declare class ReactionsCountInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The message already has exactly `reactions_uniq_max` reaction emojis, you can't react with a new emoji, see [the docs for more info &raquo;](https://core.telegram.org/api/config#client-configuration). */
export declare class ReactionsTooManyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified receipt is empty. */
export declare class ReceiptEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Reply markup for buy button empty. */
export declare class ReplyMarkupBuyEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A game message is being edited, but the newly provided keyboard doesn't have a keyboardButtonGame button. */
export declare class ReplyMarkupGameEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided reply markup is invalid. */
export declare class ReplyMarkupInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified reply_markup is too long. */
export declare class ReplyMarkupTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified reply-to message ID is invalid. */
export declare class ReplyMessageIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Each shortcut can contain a maximum of [appConfig.`quick_reply_messages_limit`](https://core.telegram.org/api/config#quick-reply-messages-limit) messages, the limit was reached. */
export declare class ReplyMessagesTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `reply_to` field is invalid. */
export declare class ReplyToInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified inputReplyToMonoForum.monoforum_peer_id is invalid. */
export declare class ReplyToMonoforumPeerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The replied-to user is invalid. */
export declare class ReplyToUserInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The master DC did not accept the `request_token` from the CDN DC. Continue downloading the file from the master DC using upload.getFile. */
export declare class RequestTokenInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No password reset is in progress. */
export declare class ResetRequestMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You provided a duplicate result ID. */
export declare class ResultIdDuplicateError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Result ID empty. */
export declare class ResultIdEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** One of the specified result IDs is invalid. */
export declare class ResultIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Result type invalid. */
export declare class ResultTypeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Too many results were provided. */
export declare class ResultsTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You cannot change your vote. */
export declare class RevoteNotAllowedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The new admin rights are equal to the old rights, no change was made. */
export declare class RightsNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified ringtone is invalid. */
export declare class RingtoneInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The MIME type for the ringtone is invalid. */
export declare class RingtoneMimeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Internal RSA decryption failed. */
export declare class RsaDecryptFailedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The passed inputSavedStarGiftChat.saved_id is empty. */
export declare class SavedIdEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Bots cannot schedule messages. */
export declare class ScheduleBotNotAllowedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid schedule date provided. */
export declare class ScheduleDateInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't schedule a message this far in the future. */
export declare class ScheduleDateTooLateError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Can't schedule until user is online, if the user's last seen timestamp is hidden by their privacy settings. */
export declare class ScheduleStatusPrivateError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** There are too many scheduled messages. */
export declare class ScheduleTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified game score is invalid. */
export declare class ScoreInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The search query is empty. */
export declare class SearchQueryEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You cannot provide a search query and an invite link at the same time. */
export declare class SearchWithLinkNotSupportedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid duration provided. */
export declare class SecondsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A secure secret is required. */
export declare class SecureSecretRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Business bots can't delete messages just for the user, `revoke` **must** be set. */
export declare class SelfDeleteRestrictedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't send messages as the specified peer. */
export declare class SendAsPeerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An inputBotInlineMessageGame can only be contained in an inputBotInlineResultGame, not in an inputBotInlineResult/inputBotInlineResultPhoto/etc. */
export declare class SendMessageGameInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid media provided. */
export declare class SendMessageMediaInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The message type is invalid. */
export declare class SendMessageTypeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This session was created less than 24 hours ago, try again in %d seconds. */
export declare class SessionTooFreshError extends BadRequestError {
    value: number;
    constructor(args: ErrorArgs);
}
/** Invalid settings were provided. */
export declare class SettingsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided SHA256 hash is invalid. */
export declare class Sha256HashInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified short name is invalid. */
export declare class ShortNameInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified short name is already in use. */
export declare class ShortNameOccupiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified shortcut is invalid. */
export declare class ShortcutInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified slot list is empty. */
export declare class SlotsEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Slowmode is enabled, you cannot forward multiple messages to this group. */
export declare class SlowmodeMultiMsgsDisabledError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified invoice slug is invalid. */
export declare class SlugInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An error occurred while creating the SMS code. */
export declare class SmsCodeCreateFailedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified job ID is invalid. */
export declare class SmsjobIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified inputCheckPasswordSRP.A value is invalid. */
export declare class SrpAInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid SRP ID provided. */
export declare class SrpIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Password has changed. */
export declare class SrpPasswordChangedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified star gift was already converted to Stars. */
export declare class StargiftAlreadyConvertedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified star gift was already refunded. */
export declare class StargiftAlreadyRefundedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified gift was already upgraded to a collectible gift. */
export declare class StargiftAlreadyUpgradedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The passed gift is invalid. */
export declare class StargiftInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified gift was not found. */
export declare class StargiftNotFoundError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You cannot transfer or sell a gift owned by another user. */
export declare class StargiftOwnerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified inputSavedStarGiftChat.peer is invalid. */
export declare class StargiftPeerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You can't buy the gift using the specified currency (i.e. trying to pay in Stars for TON gifts). */
export declare class StargiftResellCurrencyNotAllowedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified gift slug is invalid. */
export declare class StargiftSlugInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You cannot transfer this gift yet, wait %d seconds. */
export declare class StargiftTransferTooEarlyError extends BadRequestError {
    value: number;
    constructor(args: ErrorArgs);
}
/** A received gift can only be upgraded to a collectible gift if the [messageActionStarGift](https://core.telegram.org/constructor/messageActionStarGift)/[savedStarGift](https://core.telegram.org/constructor/savedStarGift).`can_upgrade` flag is set. */
export declare class StargiftUpgradeUnavailableError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The gift is sold out. */
export declare class StargiftUsageLimitedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You've reached the starGift.limited_per_user limit, you can't buy any more gifts of this type. */
export declare class StargiftUserUsageLimitedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The previous referral program was terminated less than 24 hours ago: further changes can be made after the date specified in userFull.starref_program.end_date. */
export declare class StarrefAwaitingEndError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified referral link is invalid. */
export declare class StarrefExpiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified affiliate link was already revoked. */
export declare class StarrefHashRevokedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified commission_permille is invalid: the minimum and maximum values for this parameter are contained in the [starref_min_commission_permille](https://core.telegram.org/api/config#starref-min-commission-permille) and [starref_max_commission_permille](https://core.telegram.org/api/config#starref-max-commission-permille) client configuration parameters. */
export declare class StarrefPermilleInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified commission_permille is too low: the minimum and maximum values for this parameter are contained in the [starref_min_commission_permille](https://core.telegram.org/api/config#starref-min-commission-permille) and [starref_max_commission_permille](https://core.telegram.org/api/config#starref-max-commission-permille) client configuration parameters. */
export declare class StarrefPermilleTooLowError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified amount in stars is invalid. */
export declare class StarsAmountInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified Telegram Star invoice is invalid. */
export declare class StarsInvoiceInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** To import this chat invite link, you must first [pay for the associated Telegram Star subscription &raquo;](https://core.telegram.org/api/subscriptions#channel-subscriptions). */
export declare class StarsPaymentRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The start parameter is empty. */
export declare class StartParamEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Start parameter invalid. */
export declare class StartParamInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Start parameter is too long. */
export declare class StartParamTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified sticker document is invalid. */
export declare class StickerDocumentInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Sticker emoji invalid. */
export declare class StickerEmojiInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Sticker file invalid. */
export declare class StickerFileInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified video sticker has invalid dimensions. */
export declare class StickerGifDimensionsError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided sticker ID is invalid. */
export declare class StickerIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided sticker is invalid. */
export declare class StickerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified sticker MIME type is invalid. */
export declare class StickerMimeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Sticker png dimensions invalid. */
export declare class StickerPngDimensionsError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** One of the specified stickers is not a valid PNG file. */
export declare class StickerPngNopngError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You must send the animated sticker as a document. */
export declare class StickerTgsNodocError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid TGS sticker provided. */
export declare class StickerTgsNotgsError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Incorrect stickerset thumb file provided, PNG / WEBP expected. */
export declare class StickerThumbPngNopngError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Incorrect stickerset TGS thumb file provided. */
export declare class StickerThumbTgsNotgsError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified video sticker is too big. */
export declare class StickerVideoBigError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You must send the video sticker as a document. */
export declare class StickerVideoNodocError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified video sticker is not in webm format. */
export declare class StickerVideoNowebmError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** There are too many stickers in this stickerpack, you can't add any more. */
export declare class StickerpackStickersTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No sticker provided. */
export declare class StickersEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** There are too many stickers in this stickerpack, you can't add any more. */
export declare class StickersTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided sticker set is invalid. */
export declare class StickersetInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This peer hasn't ever posted any stories. */
export declare class StoriesNeverCreatedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You have hit the maximum active stories limit as specified by the [`story_expiring_limit_*` client configuration parameters](https://core.telegram.org/api/config#story-expiring-limit-default): you should buy a [Premium](https://core.telegram.org/api/premium) subscription, delete an active story, or wait for the oldest story to expire. */
export declare class StoriesTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You specified no story IDs. */
export declare class StoryIdEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified story ID is invalid. */
export declare class StoryIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The new story information you passed is equal to the previous story information, thus it wasn't modified. */
export declare class StoryNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified story period is invalid for this account. */
export declare class StoryPeriodInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You've hit the monthly story limit as specified by the [`stories_sent_monthly_limit_*` client configuration parameters](https://core.telegram.org/api/config#stories-sent-monthly-limit-default): wait %d seconds before posting a new story. */
export declare class StorySendFloodMonthlyError extends BadRequestError {
    value: number;
    constructor(args: ErrorArgs);
}
/** You've hit the weekly story limit as specified by the [`stories_sent_weekly_limit_*` client configuration parameters](https://core.telegram.org/api/config#stories-sent-weekly-limit-default): wait for %d seconds before posting a new story. */
export declare class StorySendFloodWeeklyError extends BadRequestError {
    value: number;
    constructor(args: ErrorArgs);
}
/** You cannot send a [bot subscription invoice](https://core.telegram.org/api/subscriptions#bot-subscriptions) directly, you may only create invoice links using [payments.exportInvoice](https://core.telegram.org/method/payments.exportInvoice). */
export declare class SubscriptionExportMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified subscription_id is invalid. */
export declare class SubscriptionIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified subscription_pricing.period is invalid. */
export declare class SubscriptionPeriodInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified price for the suggested post is invalid. */
export declare class SuggestedPostAmountInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You cannot send suggested posts to non-[monoforum](https://core.telegram.org/api/monoforum) peers. */
export declare class SuggestedPostPeerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The switch_pm.text field was empty. */
export declare class SwitchPmTextEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The URL specified in switch_webview.url is invalid! */
export declare class SwitchWebviewUrlInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified takeout ID is invalid. */
export declare class TakeoutInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A [takeout](https://core.telegram.org/api/takeout) session needs to be initialized first, [see here &raquo; for more info](https://core.telegram.org/api/takeout). */
export declare class TakeoutRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An email reset was already requested. */
export declare class TaskAlreadyExistsError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The passed temporary key is already bound to another **perm_auth_key_id**. */
export declare class TempAuthKeyAlreadyBoundError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No temporary auth key provided. */
export declare class TempAuthKeyEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified [invoice](https://core.telegram.org/constructor/invoice).`terms_url` is invalid. */
export declare class TermsUrlInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid theme file provided. */
export declare class ThemeFileInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid theme format provided. */
export declare class ThemeFormatInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid theme provided. */
export declare class ThemeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The theme's MIME type is invalid. */
export declare class ThemeMimeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `theme_params` field is invalid. */
export declare class ThemeParamsInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified theme slug is invalid. */
export declare class ThemeSlugInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified theme title is invalid. */
export declare class ThemeTitleInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified timezone does not exist. */
export declare class TimezoneInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified stickerpack title is invalid. */
export declare class TitleInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The temporary password is disabled. */
export declare class TmpPasswordDisabledError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The passed tmp_password is invalid. */
export declare class TmpPasswordInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified `to_id` of the passed inputInvoiceStarGiftResale or inputInvoiceStarGiftTransfer is invalid. */
export declare class ToIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified destination language is invalid. */
export declare class ToLangInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Duplicate [checklist items](https://core.telegram.org/api/todo) detected. */
export declare class TodoItemDuplicateError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A checklist was specified, but no [checklist items](https://core.telegram.org/api/todo) were passed. */
export declare class TodoItemsEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No todo items were specified, so no changes were made to the todo list. */
export declare class TodoNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified token is empty. */
export declare class TokenEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided token is invalid. */
export declare class TokenInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified token type is invalid. */
export declare class TokenTypeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The `close` flag cannot be provided together with any of the other flags. */
export declare class TopicCloseSeparatelyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This topic was closed, you can't send messages to it anymore. */
export declare class TopicClosedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified topic was deleted. */
export declare class TopicDeletedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The `hide` flag cannot be provided together with any of the other flags. */
export declare class TopicHideSeparatelyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified topic ID is invalid. */
export declare class TopicIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The updated topic info is equal to the current topic info, nothing was changed. */
export declare class TopicNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified topic title is empty. */
export declare class TopicTitleEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You specified no topic IDs. */
export declare class TopicsEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified transaction ID is invalid. */
export declare class TransactionIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Audio transcription failed. */
export declare class TranscriptionFailedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Translation is currently unavailable due to a temporary server-side lack of resources. */
export declare class TranslateReqQuotaExceededError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided TTL is invalid. */
export declare class TtlDaysInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid media Time To Live was provided. */
export declare class TtlMediaInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified TTL period is invalid. */
export declare class TtlPeriodInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** No top peer type was provided. */
export declare class TypesEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** `require_payment` cannot be *set* by users, only by monoforums: users must instead use the [inputPrivacyKeyNoPaidMessages](https://core.telegram.org/constructor/inputPrivacyKeyNoPaidMessages) privacy setting to remove a previously added exemption. */
export declare class UnsupportedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid until date provided. */
export declare class UntilDateInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid URL provided. */
export declare class UrlInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified usage limit is invalid. */
export declare class UsageLimitInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You're not an admin. */
export declare class UserAdminInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You have already invited this user. */
export declare class UserAlreadyInvitedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The user is already in the group. */
export declare class UserAlreadyParticipantError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You're banned from sending messages in supergroups/channels. */
export declare class UserBannedInChannelError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** User blocked. */
export declare class UserBlockedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Bots can only be admins in channels. */
export declare class UserBotError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** User accounts must provide the `bot` method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts. */
export declare class UserBotInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This method can only be called by a bot. */
export declare class UserBotRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** One of the users you tried to add is already in too many channels/supergroups. */
export declare class UserChannelsTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** For channels.editAdmin: you've tried to edit the admin rights of the owner, but you're not the owner; for channels.leaveChannel: you can't leave this channel, because you're its creator. */
export declare class UserCreatorError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Gifts are not available in the current region ([stars_gifts_enabled](https://core.telegram.org/api/config#stars-gifts-enabled) is equal to false). */
export declare class UserGiftUnavailableError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided user ID is invalid. */
export declare class UserIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid user provided. */
export declare class UserInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You were blocked by this user. */
export declare class UserIsBlockedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Bots can't send messages to other bots. */
export declare class UserIsBotError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This user was kicked from this supergroup/channel. */
export declare class UserKickedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided user is not a mutual contact. */
export declare class UserNotMutualContactError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You're not a member of this supergroup/channel. */
export declare class UserNotParticipantError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Cannot generate a link to stories posted by a peer without a username. */
export declare class UserPublicMissingError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified user volume is invalid. */
export declare class UserVolumeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided username is not valid. */
export declare class UsernameInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The username was not modified. */
export declare class UsernameNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided username is not occupied. */
export declare class UsernameNotOccupiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The provided username is already occupied. */
export declare class UsernameOccupiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified username can be purchased on https://fragment.com. */
export declare class UsernamePurchaseAvailableError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The maximum number of active usernames was reached. */
export declare class UsernamesActiveTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You must have a profile picture to publish your geolocation. */
export declare class UserpicUploadRequiredError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Not enough users (to create a chat, for example). */
export declare class UsersTooFewError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The maximum number of users has been exceeded (to create a chat, for example). */
export declare class UsersTooMuchError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified venue ID is invalid. */
export declare class VenueIdInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The video's content type is invalid. */
export declare class VideoContentTypeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified video file is invalid. */
export declare class VideoFileInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You cannot pause the video stream. */
export declare class VideoPauseForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You cannot stop the video stream. */
export declare class VideoStopForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified video title is empty. */
export declare class VideoTitleEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** This user's privacy settings forbid you from sending voice messages. */
export declare class VoiceMessagesForbiddenError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified wallpaper file is invalid. */
export declare class WallpaperFileInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified wallpaper is invalid. */
export declare class WallpaperInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified wallpaper MIME type is invalid. */
export declare class WallpaperMimeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified wallpaper could not be found. */
export declare class WallpaperNotFoundError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** WC convert URL invalid. */
export declare class WcConvertUrlInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid webdocument URL provided. */
export declare class WebdocumentInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Invalid webdocument mime type provided. */
export declare class WebdocumentMimeInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Webdocument is too big! */
export declare class WebdocumentSizeTooBigError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The passed web document URL is empty. */
export declare class WebdocumentUrlEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified webdocument URL is invalid. */
export declare class WebdocumentUrlInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Failure while fetching the webpage with cURL. */
export declare class WebpageCurlFailedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Webpage media empty. */
export declare class WebpageMediaEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** A preview for the specified webpage `url` could not be generated. */
export declare class WebpageNotFoundError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified webpage `url` is invalid. */
export declare class WebpageUrlInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified web push authentication secret is invalid. */
export declare class WebpushAuthInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified web push elliptic curve Diffie-Hellman public key is invalid. */
export declare class WebpushKeyInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified web push token is invalid. */
export declare class WebpushTokenInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** You blocked this user. */
export declare class YouBlockedUserError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified method cannot be used by bots. */
export declare class BotMethodInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified device model is empty. */
export declare class ConnectionDeviceModelEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified language pack is empty. */
export declare class ConnectionLangPackInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** Please initialize the connection using initConnection before making queries. */
export declare class ConnectionNotInitedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified system version is empty. */
export declare class ConnectionSystemEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified system language code is empty. */
export declare class ConnectionSystemLangCodeEmptyError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The file currently being accessed is stored in DC %d, please re-send the query to that DC. */
export declare class FileMigrateError extends BadRequestError {
    newDc: number;
    constructor(args: ErrorArgs);
}
/** Part %d of the file is missing from storage. Try repeating the method call to resave the part. */
export declare class FilePartMissingError extends BadRequestError {
    value: number;
    constructor(args: ErrorArgs);
}
/** The specified TL constructor is invalid. */
export declare class InputConstructorInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An error occurred while parsing the provided TL constructor. */
export declare class InputFetchErrorError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** An error occurred while parsing the provided TL constructor. */
export declare class InputFetchFailError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified layer is invalid. */
export declare class InputLayerInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified method is invalid. */
export declare class InputMethodInvalidError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The request payload is too long. */
export declare class InputRequestTooLongError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The current account is spamreported, you cannot execute this action, check @spambot for more info. */
export declare class PeerFloodError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The passed stickerset information is equal to the current information. */
export declare class StickersetNotModifiedError extends BadRequestError {
    constructor(args: ErrorArgs);
}
/** The specified authorization key is not registered in the system (for example, a PFS temporary key has expired). */
export declare class AuthKeyUnregisteredError extends UnauthorizedError {
    constructor(args: ErrorArgs);
}
/** The specified auth key is invalid. */
export declare class AuthKeyInvalidError extends UnauthorizedError {
    constructor(args: ErrorArgs);
}
/** The method is unavailable for temporary authorization keys, not bound to a permanent authorization key. */
export declare class AuthKeyPermEmptyError extends UnauthorizedError {
    constructor(args: ErrorArgs);
}
/** The session has expired. */
export declare class SessionExpiredError extends UnauthorizedError {
    constructor(args: ErrorArgs);
}
/** 2FA is enabled, use a password to login. */
export declare class SessionPasswordNeededError extends UnauthorizedError {
    constructor(args: ErrorArgs);
}
/** The session was revoked by the user. */
export declare class SessionRevokedError extends UnauthorizedError {
    constructor(args: ErrorArgs);
}
/** The current account was deleted by the user. */
export declare class UserDeactivatedError extends UnauthorizedError {
    constructor(args: ErrorArgs);
}
/** The current account was deleted and banned by Telegram's antispam system. */
export declare class UserDeactivatedBanError extends UnauthorizedError {
    constructor(args: ErrorArgs);
}
/** This peer charges %d [Telegram Stars](https://core.telegram.org/api/stars) per message, but the `allow_paid_stars` was not set or its value is smaller than %d. */
export declare class AllowPaymentRequiredError extends ForbiddenError {
    value: number;
    constructor(args: ErrorArgs);
}
/** Sorry, anonymous administrators cannot leave reactions or participate in polls. */
export declare class AnonymousReactionsDisabledError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** The specified method *can* be used over a [business connection](https://core.telegram.org/api/bots/connected-business-bots) for some operations, but the specified query attempted an operation that is not allowed over a business connection. */
export declare class BotAccessForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** This bot cannot assign [verification icons](https://core.telegram.org/api/bots/verification). */
export declare class BotVerifierForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** Channel poll voters and reactions cannot be fetched to prevent deanonymization. */
export declare class BroadcastForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** channel/supergroup not available. */
export declare class ChannelPublicGroupNaError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You cannot execute this action. */
export declare class ChatActionForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You do not have the rights to do this. */
export declare class ChatAdminInviteRequiredError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You join the discussion group before commenting, see [here &raquo;](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) for more info. */
export declare class ChatGuestSendForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send audio messages in this chat. */
export declare class ChatSendAudiosForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send documents in this chat. */
export declare class ChatSendDocsForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send a game to this chat. */
export declare class ChatSendGameForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send gifs in this chat. */
export declare class ChatSendGifsForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send media in this chat. */
export declare class ChatSendMediaForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send photos in this chat. */
export declare class ChatSendPhotosForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send non-media (text) messages in this chat. */
export declare class ChatSendPlainForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send polls in this chat. */
export declare class ChatSendPollForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send round videos to this chat. */
export declare class ChatSendRoundvideosForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send stickers in this chat. */
export declare class ChatSendStickersForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send videos in this chat. */
export declare class ChatSendVideosForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send voice recordings in this chat. */
export declare class ChatSendVoicesForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send webpage previews to this chat. */
export declare class ChatSendWebpageForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** The specified user type is invalid. */
export declare class ChatTypeInvalidError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't write in this chat. */
export declare class ChatWriteForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** Normal users can't edit invites that were created by bots. */
export declare class EditBotInviteForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** The groupcall has already started, you can join directly using [phone.joinGroupCall](https://core.telegram.org/method/phone.joinGroupCall). */
export declare class GroupcallAlreadyStartedError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** Only the inline bot can edit message. */
export declare class InlineBotRequiredError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** Message author required. */
export declare class MessageAuthorRequiredError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't delete one of the messages you tried to delete, most likely because it is a service message. */
export declare class MessageDeleteForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** Cast a vote in the poll before calling this method. */
export declare class PollVoteRequiredError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You need a [Telegram Premium subscription](https://core.telegram.org/api/premium) to send a message to this user. */
export declare class PrivacyPremiumRequiredError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can only export group call invite links for public chats or channels. */
export declare class PublicChannelMissingError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** Your admin rights do not allow you to do this. */
export declare class RightForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't change your sensitive content settings. */
export declare class SensitiveChangeForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You can't send this secret message because the other participant deleted their account. */
export declare class UserDeletedError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** The user hasn't granted or has revoked the bot's access to change their emoji status using [bots.toggleUserEmojiStatusPermission](https://core.telegram.org/method/bots.toggleUserEmojiStatusPermission). */
export declare class UserPermissionDeniedError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** The user's privacy settings do not allow you to do this. */
export declare class UserPrivacyRestrictedError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You're spamreported, you can't create channels or chats. */
export declare class UserRestrictedError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** You cannot fetch the read date of this message because you have disallowed other users to do so for *your* messages; to fix, allow other users to see *your* exact last online date OR purchase a [Telegram Premium](https://core.telegram.org/api/premium) subscription. */
export declare class YourPrivacyRestrictedError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** This chat is not available to the current user. */
export declare class ChatForbiddenError extends ForbiddenError {
    constructor(args: ErrorArgs);
}
/** Please update the app to access the gift API. */
export declare class ApiGiftRestrictedUpdateAppError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** The user is currently advertising a [Business Location](https://core.telegram.org/api/business#location), the location may only be changed (or removed) using [account.updateBusinessLocation &raquo;](https://core.telegram.org/method/account.updateBusinessLocation).  . */
export declare class BusinessAddressActiveError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** The other side of the call does not support any of the VoIP protocols supported by the local client, as specified by the `protocol.layer` and `protocol.library_versions` fields. */
export declare class CallProtocolCompatLayerInvalidError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** The client has to be updated in order to support [file references](https://core.telegram.org/api/file-references). */
export declare class FilerefUpgradeNeededError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** You can't change phone number right after logging in, please wait at least 24 hours. */
export declare class FreshChangePhoneForbiddenError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** You can't logout other sessions if less than 24 hours have passed since you logged on the current session. */
export declare class FreshResetAuthorisationForbiddenError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** A detailed description of the error will be received separately as described [here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable). */
export declare class PaymentUnsupportedError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** You have tried logging in too many times. */
export declare class PhonePasswordFloodError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** Precheckout failed, a detailed and localized description for the error will be emitted via an [updateServiceNotification as specified here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable). */
export declare class PrecheckoutFailedError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** You cannot currently purchase a Premium subscription. */
export declare class PremiumCurrentlyUnavailableError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** Import for this chat is already in progress, wait %d minutes before starting a new one. */
export declare class PreviousChatImportActiveWaitMinError extends AuthKeyError {
    value: number;
    constructor(args: ErrorArgs);
}
/** Returned when all available options for this type of number were already used (e.g. flash-call, then SMS, then this error might be returned to trigger a second resend). */
export declare class SendCodeUnavailableError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** A gift export is in progress, a detailed and localized description for the error will be emitted via an [updateServiceNotification as specified here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable). */
export declare class StargiftExportInProgressError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** The form amount has changed, please fetch the new form using [payments.getPaymentForm](https://core.telegram.org/method/payments.getPaymentForm) and restart the process. */
export declare class StarsFormAmountMismatchError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** Provided stickerset can't be installed as group stickerset to prevent admin deanonymization. */
export declare class StickersetOwnerAnonymousError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** Translations are unavailable, a detailed and localized description for the error will be emitted via an [updateServiceNotification as specified here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable). */
export declare class TranslationsDisabledError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** Please update your client to login. */
export declare class UpdateAppToLoginError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** You need to disable privacy settings for your profile picture in order to make your geolocation public. */
export declare class UserpicPrivacyRequiredError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** Concurrent usage of the current session from multiple connections was detected, the current session was invalidated by the server for security reasons! */
export declare class AuthKeyDuplicatedError extends AuthKeyError {
    constructor(args: ErrorArgs);
}
/** Since this account is active and protected by a 2FA password, we will delete it in 1 week for security purposes. You can cancel this process at any time, you'll be able to reset your account in %d seconds. */
export declare class TwoFaConfirmWaitError extends FloodError {
    value: number;
    constructor(args: ErrorArgs);
}
/** Please wait %d seconds before repeating the action. */
export declare class FloodWaitError extends FloodError {
    seconds: number;
    constructor(args: ErrorArgs);
}
/** The current account is [frozen](https://core.telegram.org/api/auth#frozen-accounts), and thus cannot execute the specified action. */
export declare class FrozenMethodInvalidError extends FloodError {
    constructor(args: ErrorArgs);
}
/** You already have a premium subscription active until unixtime %d . */
export declare class PremiumSubActiveUntilError extends FloodError {
    value: number;
    constructor(args: ErrorArgs);
}
/** Slowmode is enabled in this chat: wait %d seconds before sending another message to this chat. */
export declare class SlowModeWaitError extends FloodError {
    seconds: number;
    constructor(args: ErrorArgs);
}
/** Sorry, for security reasons, you will be able to begin downloading your data in %d seconds. We have notified all your devices about the export request to make sure it's authorized and to give you time to react if it's not. */
export declare class TakeoutInitDelayError extends FloodError {
    seconds: number;
    constructor(args: ErrorArgs);
}
/** Internal error, please repeat the method call. */
export declare class AuthKeyUnsynchronizedError extends ServerError {
    constructor(args: ErrorArgs);
}
/** Internal error (debug info %d), please repeat the method call. */
export declare class AuthRestartError extends ServerError {
    value: number;
    constructor(args: ErrorArgs);
}
/** A server-side timeout occurred while reuploading the file to the CDN DC. */
export declare class CdnUploadTimeoutError extends ServerError {
    constructor(args: ErrorArgs);
}
/** Failure while generating the chat ID. */
export declare class ChatIdGenerateFailedError extends ServerError {
    constructor(args: ErrorArgs);
}
/** Channel internal replication issues, try again later (treat this like an RPC_CALL_FAIL). */
export declare class PersistentTimestampOutdatedError extends ServerError {
    constructor(args: ErrorArgs);
}
/** You provided a random ID that was already used. */
export declare class RandomIdDuplicateError extends ServerError {
    constructor(args: ErrorArgs);
}
/** The specified media is invalid. */
export declare class SendMediaInvalidError extends ServerError {
    constructor(args: ErrorArgs);
}
/** Failure while signing in. */
export declare class SignInFailedError extends ServerError {
    constructor(args: ErrorArgs);
}
/** Translation failed, please try again later. */
export declare class TranslateReqFailedError extends ServerError {
    constructor(args: ErrorArgs);
}
/** A timeout occurred while translating the specified text. */
export declare class TranslationTimeoutError extends ServerError {
    constructor(args: ErrorArgs);
}
/** Timeout while fetching data. */
export declare class TimeoutError extends TimedOutError {
    constructor(args: ErrorArgs);
}
/** Spent too much time waiting for a previous query in the invokeAfterMsg request queue, aborting! */
export declare class MsgWaitTimeoutError extends TimedOutError {
    constructor(args: ErrorArgs);
}
/** A wait of %d seconds is required in the test servers before repeating the action. */
export declare class FloodTestPhoneWaitError extends FloodError {
    seconds: number;
    constructor(args: ErrorArgs);
}
export declare const rpcErrorsDict: Map<string, any>;
export declare const rpcErrorsRe: Map<RegExp, any>;
export declare const rpcErrorRe: Map<RegExp, any>;
export declare const baseErrors: Map<number, any>;
