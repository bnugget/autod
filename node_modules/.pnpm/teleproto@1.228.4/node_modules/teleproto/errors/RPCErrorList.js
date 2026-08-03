"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotInvoiceInvalidError = exports.BotInvalidError = exports.BotInlineDisabledError = exports.BotGroupsBlockedError = exports.BotGamesDisabledError = exports.BotFallbackUnsupportedError = exports.BotDomainInvalidError = exports.BotCommandInvalidError = exports.BotCommandDescriptionInvalidError = exports.BotChannelsNaError = exports.BotBusinessMissingError = exports.BotAppShortnameInvalidError = exports.BotAppInvalidError = exports.BotAppBotInvalidError = exports.BotAlreadyDisabledError = exports.BoostsRequiredError = exports.BoostsEmptyError = exports.BoostPeerInvalidError = exports.BoostNotModifiedError = exports.BirthdayInvalidError = exports.BannedRightsInvalidError = exports.BankCardNumberInvalidError = exports.BalanceTooLowError = exports.AutoarchiveNotAvailableError = exports.AuthTokenInvalidxError = exports.AuthTokenInvalidError = exports.AuthTokenExpiredError = exports.AuthTokenExceptionError = exports.AuthTokenAlreadyAcceptedError = exports.AuthBytesInvalidError = exports.AudioTitleEmptyError = exports.AudioContentUrlEmptyError = exports.ArticleTitleEmptyError = exports.ApiIdPublishedFloodError = exports.ApiIdInvalidError = exports.AlbumPhotosTooManyError = exports.AdminsTooMuchError = exports.AdminRightsEmptyError = exports.AdminRankInvalidError = exports.AdminRankEmojiNotAllowedError = exports.AdminIdInvalidError = exports.AddressInvalidError = exports.AdExpiredError = exports.AccessTokenInvalidError = exports.AccessTokenExpiredError = exports.AboutTooLongError = exports.UserMigrateError = exports.StatsMigrateError = exports.PhoneMigrateError = exports.NetworkMigrateError = void 0;
exports.ChatAboutTooLongError = exports.ChatAboutNotModifiedError = exports.ChargeIdInvalidError = exports.ChargeIdEmptyError = exports.ChargeAlreadyRefundedError = exports.ChannelsTooMuchError = exports.ChannelsAdminPublicTooMuchError = exports.ChannelsAdminLocatedTooMuchError = exports.ChannelTooLargeError = exports.ChannelTooBigError = exports.ChannelPrivateError = exports.ChannelParicipantMissingError = exports.ChannelMonoforumUnsupportedError = exports.ChannelInvalidError = exports.ChannelIdInvalidError = exports.ChannelForumMissingError = exports.CdnMethodInvalidError = exports.CallProtocolLayerInvalidError = exports.CallProtocolFlagsInvalidError = exports.CallPeerInvalidError = exports.CallOccupyFailedError = exports.CallAlreadyDeclinedError = exports.CallAlreadyAcceptedError = exports.ButtonUserPrivacyRestrictedError = exports.ButtonUserInvalidError = exports.ButtonUrlInvalidError = exports.ButtonTypeInvalidError = exports.ButtonTextInvalidError = exports.ButtonPosInvalidError = exports.ButtonInvalidError = exports.ButtonIdInvalidError = exports.ButtonDataInvalidError = exports.ButtonCopyTextInvalidError = exports.BusinessWorkHoursPeriodInvalidError = exports.BusinessWorkHoursEmptyError = exports.BusinessRecipientsEmptyError = exports.BusinessPeerUsageMissingError = exports.BusinessPeerInvalidError = exports.BusinessConnectionNotAllowedError = exports.BusinessConnectionInvalidError = exports.BroadcastRequiredError = exports.BroadcastPublicVotersForbiddenError = exports.BroadcastIdInvalidError = exports.BotsTooMuchError = exports.BotWebviewDisabledError = exports.BotScoreNotModifiedError = exports.BotResponseTimeoutError = exports.BotPaymentsDisabledError = exports.BotOnesideNotAvailError = exports.BotNotConnectedYetError = void 0;
exports.EmailInvalidError = exports.EmailHashExpiredError = exports.EffectIdInvalidError = exports.DocumentInvalidError = exports.DhGAInvalidError = exports.DcIdInvalidError = exports.DateEmptyError = exports.DataTooLongError = exports.DataJsonInvalidError = exports.DataInvalidError = exports.DataHashSizeInvalidError = exports.CustomReactionsTooManyError = exports.CurrencyTotalAmountInvalidError = exports.CreateCallFailedError = exports.ContactReqMissingError = exports.ContactNameEmptyError = exports.ContactMissingError = exports.ContactIdInvalidError = exports.ContactAddMissingError = exports.ConnectionLayerInvalidError = exports.ConnectionIdInvalidError = exports.ConnectionAppVersionEmptyError = exports.ConnectionApiIdInvalidError = exports.ColorInvalidError = exports.CollectibleNotFoundError = exports.CollectibleInvalidError = exports.CodeInvalidError = exports.CodeHashInvalidError = exports.CodeEmptyError = exports.ChatlistsTooMuchError = exports.ChatlistExcludeInvalidError = exports.ChatlinksTooMuchError = exports.ChatlinkSlugExpiredError = exports.ChatlinkSlugEmptyError = exports.ChatTooBigError = exports.ChatTitleEmptyError = exports.ChatSendInlineForbiddenError = exports.ChatRevokeDateUnsupportedError = exports.ChatRestrictedError = exports.ChatPublicRequiredError = exports.ChatNotModifiedError = exports.ChatMemberAddFailedError = exports.ChatLinkExistsError = exports.ChatInvitePermanentError = exports.ChatInvalidError = exports.ChatIdInvalidError = exports.ChatIdEmptyError = exports.ChatForwardsRestrictedError = exports.ChatDiscussionUnallowedError = exports.ChatAdminRequiredError = void 0;
exports.FormIdEmptyError = exports.FormExpiredError = exports.FolderIdInvalidError = exports.FolderIdEmptyError = exports.FirstnameInvalidError = exports.FilterTitleEmptyError = exports.FilterNotSupportedError = exports.FilterIncludeEmptyError = exports.FilterIdInvalidError = exports.FileTokenInvalidError = exports.FileTitleEmptyError = exports.FileReferenceEmptyError = exports.FileReferenceInvalidError = exports.FileReferenceExpiredError = exports.FilePartsInvalidError = exports.FilePartTooSmallError = exports.FilePartTooBigError = exports.FilePartSizeInvalidError = exports.FilePartSizeChangedError = exports.FilePartLengthInvalidError = exports.FilePartInvalidError = exports.FilePartEmptyError = exports.FileIdInvalidError = exports.FileEmtpyError = exports.FileContentTypeInvalidError = exports.ExternalUrlInvalidError = exports.ExtendedMediaInvalidError = exports.ExtendedMediaAmountInvalidError = exports.ExportCardInvalidError = exports.ExpiresAtInvalidError = exports.ExpireDateInvalidError = exports.ErrorTextEmptyError = exports.EntityMentionUserInvalidError = exports.EntityBoundsInvalidError = exports.EntitiesTooLongError = exports.EncryptionIdInvalidError = exports.EncryptionDeclinedError = exports.EncryptionAlreadyDeclinedError = exports.EncryptionAlreadyAcceptedError = exports.EncryptedMessageInvalidError = exports.EmoticonStickerpackMissingError = exports.EmoticonInvalidError = exports.EmoticonEmptyError = exports.EmojiNotModifiedError = exports.EmojiMarkupInvalidError = exports.EmojiInvalidError = exports.EmailVerifyExpiredError = exports.EmailUnconfirmedError = exports.EmailNotSetupError = exports.EmailNotAllowedError = void 0;
exports.InviteHashExpiredError = exports.InviteHashEmptyError = exports.InviteForbiddenWithJoinasError = exports.InputUserDeactivatedError = exports.InputTextTooLongError = exports.InputTextEmptyError = exports.InputPurposeInvalidError = exports.InputPeersEmptyError = exports.InputFilterInvalidError = exports.InputFileInvalidError = exports.InputChatlistInvalidError = exports.InlineResultExpiredError = exports.ImportTokenInvalidError = exports.ImportIdInvalidError = exports.ImportFormatUnrecognizedError = exports.ImportFormatDateInvalidError = exports.ImportFileInvalidError = exports.ImageProcessFailedError = exports.IdInvalidError = exports.IdExpiredError = exports.HideRequesterMissingError = exports.HashtagInvalidError = exports.HashSizeInvalidError = exports.HashInvalidError = exports.GroupedMediaInvalidError = exports.GroupcallSsrcDuplicateMuchError = exports.GroupcallNotModifiedError = exports.GroupcallJoinMissingError = exports.GroupcallInvalidError = exports.GroupcallForbiddenError = exports.GroupcallAlreadyDiscardedError = exports.GraphOutdatedReloadError = exports.GraphInvalidReloadError = exports.GraphExpiredReloadError = exports.GiftStarsInvalidError = exports.GiftSlugInvalidError = exports.GiftSlugExpiredError = exports.GiftMonthsInvalidError = exports.GifIdInvalidError = exports.GifContentTypeInvalidError = exports.GeoPointInvalidError = exports.GeneralModifyIconForbiddenError = exports.GameBotInvalidError = exports.FrozenParticipantMissingError = exports.FromPeerInvalidError = exports.FromMessageBotDisabledError = exports.FreshChangeAdminsForbiddenError = exports.ForumEnabledError = exports.FormUnsupportedError = exports.FormSubmitDuplicateError = void 0;
exports.MsgIdInvalidError = exports.MonthInvalidError = exports.MinDateInvalidError = exports.MethodInvalidError = exports.MessageTooOldError = exports.MessageTooLongError = exports.MessagePollClosedError = exports.MessageNotReadYetError = exports.MessageNotModifiedError = exports.MessageIdsEmptyError = exports.MessageIdInvalidError = exports.MessageEmptyError = exports.MessageEditTimeExpiredError = exports.MegagroupRequiredError = exports.MegagroupPrehistoryHiddenError = exports.MegagroupIdInvalidError = exports.MegagroupGeoRequiredError = exports.MediaVideoStoryMissingError = exports.MediaTypeInvalidError = exports.MediaTtlInvalidError = exports.MediaPrevInvalidError = exports.MediaNewInvalidError = exports.MediaInvalidError = exports.MediaGroupedInvalidError = exports.MediaFileInvalidError = exports.MediaEmptyError = exports.MediaCaptionTooLongError = exports.MediaAlreadyPaidError = exports.Md5ChecksumInvalidError = exports.MaxQtsInvalidError = exports.MaxIdInvalidError = exports.MaxDateInvalidError = exports.LocationInvalidError = exports.LinkNotModifiedError = exports.LimitInvalidError = exports.LastnameInvalidError = exports.LanguageInvalidError = exports.LangPackInvalidError = exports.LangCodeNotSupportedError = exports.LangCodeInvalidError = exports.JoinAsPeerInvalidError = exports.InvoicePayloadInvalidError = exports.InvoiceInvalidError = exports.InvitesTooMuchError = exports.InviteSlugInvalidError = exports.InviteSlugExpiredError = exports.InviteSlugEmptyError = exports.InviteRevokedMissingError = exports.InviteRequestSentError = exports.InviteHashInvalidError = void 0;
exports.PhoneNumberAppSignupForbiddenError = exports.PhoneNotOccupiedError = exports.PhoneHashExpiredError = exports.PhoneCodeInvalidError = exports.PhoneCodeHashEmptyError = exports.PhoneCodeExpiredError = exports.PhoneCodeEmptyError = exports.PersistentTimestampInvalidError = exports.PersistentTimestampEmptyError = exports.PeersListEmptyError = exports.PeerTypesInvalidError = exports.PeerIdNotSupportedError = exports.PeerIdInvalidError = exports.PeerHistoryEmptyError = exports.PaymentRequiredError = exports.PaymentProviderInvalidError = exports.PaymentCredentialsInvalidError = exports.PasswordTooFreshError = exports.PasswordRequiredError = exports.PasswordRecoveryNaError = exports.PasswordRecoveryExpiredError = exports.PasswordMissingError = exports.PasswordHashInvalidError = exports.PasswordEmptyError = exports.ParticipantsTooFewError = exports.ParticipantVersionOutdatedError = exports.ParticipantJoinMissingError = exports.ParticipantIdInvalidError = exports.ParentPeerInvalidError = exports.PackTypeInvalidError = exports.PackTitleInvalidError = exports.PackShortNameOccupiedError = exports.PackShortNameInvalidError = exports.OrderInvalidError = exports.OptionsTooMuchError = exports.OptionInvalidError = exports.OffsetPeerIdInvalidError = exports.OffsetInvalidError = exports.NotJoinedError = exports.NotEligibleError = exports.NogeneralHideForbiddenError = exports.NoPaymentNeededError = exports.NextOffsetInvalidError = exports.NewSettingsInvalidError = exports.NewSettingsEmptyError = exports.NewSaltInvalidError = exports.MultiMediaTooLongError = exports.MsgWaitError = exports.MsgVoiceMissingError = exports.MsgTooOldError = void 0;
exports.ReactionEmptyError = exports.RangesInvalidError = exports.RandomLengthInvalidError = exports.RandomIdInvalidError = exports.RandomIdExpiredError = exports.RandomIdEmptyError = exports.RaiseHandForbiddenError = exports.QuoteTextInvalidError = exports.QuizMultipleInvalidError = exports.QuizCorrectAnswersTooMuchError = exports.QuizCorrectAnswersEmptyError = exports.QuizCorrectAnswerInvalidError = exports.QuizAnswerMissingError = exports.QuickRepliesTooMuchError = exports.QuickRepliesBotNotAllowedError = exports.QueryTooShortError = exports.QueryIdInvalidError = exports.QueryIdEmptyError = exports.PurposeInvalidError = exports.PublicKeyRequiredError = exports.PrivacyValueInvalidError = exports.PrivacyTooLongError = exports.PrivacyKeyInvalidError = exports.PricingChatInvalidError = exports.PremiumAccountRequiredError = exports.PollQuestionInvalidError = exports.PollOptionInvalidError = exports.PollOptionDuplicateError = exports.PollAnswersInvalidError = exports.PollAnswerInvalidError = exports.PinnedTooMuchError = exports.PinnedDialogsTooMuchError = exports.PinRestrictedError = exports.PhotoThumbUrlEmptyError = exports.PhotoSaveFileInvalidError = exports.PhotoInvalidDimensionsError = exports.PhotoInvalidError = exports.PhotoIdInvalidError = exports.PhotoFileMissingError = exports.PhotoExtInvalidError = exports.PhotoCropSizeSmallError = exports.PhotoCropFileMissingError = exports.PhotoContentUrlEmptyError = exports.PhotoContentTypeInvalidError = exports.PhonePasswordProtectedError = exports.PhoneNumberUnoccupiedError = exports.PhoneNumberOccupiedError = exports.PhoneNumberInvalidError = exports.PhoneNumberFloodError = exports.PhoneNumberBannedError = void 0;
exports.SlugInvalidError = exports.SlowmodeMultiMsgsDisabledError = exports.SlotsEmptyError = exports.ShortcutInvalidError = exports.ShortNameOccupiedError = exports.ShortNameInvalidError = exports.Sha256HashInvalidError = exports.SettingsInvalidError = exports.SessionTooFreshError = exports.SendMessageTypeInvalidError = exports.SendMessageMediaInvalidError = exports.SendMessageGameInvalidError = exports.SendAsPeerInvalidError = exports.SelfDeleteRestrictedError = exports.SecureSecretRequiredError = exports.SecondsInvalidError = exports.SearchWithLinkNotSupportedError = exports.SearchQueryEmptyError = exports.ScoreInvalidError = exports.ScheduleTooMuchError = exports.ScheduleStatusPrivateError = exports.ScheduleDateTooLateError = exports.ScheduleDateInvalidError = exports.ScheduleBotNotAllowedError = exports.SavedIdEmptyError = exports.RsaDecryptFailedError = exports.RingtoneMimeInvalidError = exports.RingtoneInvalidError = exports.RightsNotModifiedError = exports.RevoteNotAllowedError = exports.ResultsTooMuchError = exports.ResultTypeInvalidError = exports.ResultIdInvalidError = exports.ResultIdEmptyError = exports.ResultIdDuplicateError = exports.ResetRequestMissingError = exports.RequestTokenInvalidError = exports.ReplyToUserInvalidError = exports.ReplyToMonoforumPeerInvalidError = exports.ReplyToInvalidError = exports.ReplyMessagesTooMuchError = exports.ReplyMessageIdInvalidError = exports.ReplyMarkupTooLongError = exports.ReplyMarkupInvalidError = exports.ReplyMarkupGameEmptyError = exports.ReplyMarkupBuyEmptyError = exports.ReceiptEmptyError = exports.ReactionsTooManyError = exports.ReactionsCountInvalidError = exports.ReactionInvalidError = void 0;
exports.StoriesNeverCreatedError = exports.StickersetInvalidError = exports.StickersTooMuchError = exports.StickersEmptyError = exports.StickerpackStickersTooMuchError = exports.StickerVideoNowebmError = exports.StickerVideoNodocError = exports.StickerVideoBigError = exports.StickerThumbTgsNotgsError = exports.StickerThumbPngNopngError = exports.StickerTgsNotgsError = exports.StickerTgsNodocError = exports.StickerPngNopngError = exports.StickerPngDimensionsError = exports.StickerMimeInvalidError = exports.StickerInvalidError = exports.StickerIdInvalidError = exports.StickerGifDimensionsError = exports.StickerFileInvalidError = exports.StickerEmojiInvalidError = exports.StickerDocumentInvalidError = exports.StartParamTooLongError = exports.StartParamInvalidError = exports.StartParamEmptyError = exports.StarsPaymentRequiredError = exports.StarsInvoiceInvalidError = exports.StarsAmountInvalidError = exports.StarrefPermilleTooLowError = exports.StarrefPermilleInvalidError = exports.StarrefHashRevokedError = exports.StarrefExpiredError = exports.StarrefAwaitingEndError = exports.StargiftUserUsageLimitedError = exports.StargiftUsageLimitedError = exports.StargiftUpgradeUnavailableError = exports.StargiftTransferTooEarlyError = exports.StargiftSlugInvalidError = exports.StargiftResellCurrencyNotAllowedError = exports.StargiftPeerInvalidError = exports.StargiftOwnerInvalidError = exports.StargiftNotFoundError = exports.StargiftInvalidError = exports.StargiftAlreadyUpgradedError = exports.StargiftAlreadyRefundedError = exports.StargiftAlreadyConvertedError = exports.SrpPasswordChangedError = exports.SrpIdInvalidError = exports.SrpAInvalidError = exports.SmsjobIdInvalidError = exports.SmsCodeCreateFailedError = void 0;
exports.TranslateReqQuotaExceededError = exports.TranscriptionFailedError = exports.TransactionIdInvalidError = exports.TopicsEmptyError = exports.TopicTitleEmptyError = exports.TopicNotModifiedError = exports.TopicIdInvalidError = exports.TopicHideSeparatelyError = exports.TopicDeletedError = exports.TopicClosedError = exports.TopicCloseSeparatelyError = exports.TokenTypeInvalidError = exports.TokenInvalidError = exports.TokenEmptyError = exports.TodoNotModifiedError = exports.TodoItemsEmptyError = exports.TodoItemDuplicateError = exports.ToLangInvalidError = exports.ToIdInvalidError = exports.TmpPasswordInvalidError = exports.TmpPasswordDisabledError = exports.TitleInvalidError = exports.TimezoneInvalidError = exports.ThemeTitleInvalidError = exports.ThemeSlugInvalidError = exports.ThemeParamsInvalidError = exports.ThemeMimeInvalidError = exports.ThemeInvalidError = exports.ThemeFormatInvalidError = exports.ThemeFileInvalidError = exports.TermsUrlInvalidError = exports.TempAuthKeyEmptyError = exports.TempAuthKeyAlreadyBoundError = exports.TaskAlreadyExistsError = exports.TakeoutRequiredError = exports.TakeoutInvalidError = exports.SwitchWebviewUrlInvalidError = exports.SwitchPmTextEmptyError = exports.SuggestedPostPeerInvalidError = exports.SuggestedPostAmountInvalidError = exports.SubscriptionPeriodInvalidError = exports.SubscriptionIdInvalidError = exports.SubscriptionExportMissingError = exports.StorySendFloodWeeklyError = exports.StorySendFloodMonthlyError = exports.StoryPeriodInvalidError = exports.StoryNotModifiedError = exports.StoryIdInvalidError = exports.StoryIdEmptyError = exports.StoriesTooMuchError = void 0;
exports.WebdocumentInvalidError = exports.WcConvertUrlInvalidError = exports.WallpaperNotFoundError = exports.WallpaperMimeInvalidError = exports.WallpaperInvalidError = exports.WallpaperFileInvalidError = exports.VoiceMessagesForbiddenError = exports.VideoTitleEmptyError = exports.VideoStopForbiddenError = exports.VideoPauseForbiddenError = exports.VideoFileInvalidError = exports.VideoContentTypeInvalidError = exports.VenueIdInvalidError = exports.UsersTooMuchError = exports.UsersTooFewError = exports.UserpicUploadRequiredError = exports.UsernamesActiveTooMuchError = exports.UsernamePurchaseAvailableError = exports.UsernameOccupiedError = exports.UsernameNotOccupiedError = exports.UsernameNotModifiedError = exports.UsernameInvalidError = exports.UserVolumeInvalidError = exports.UserPublicMissingError = exports.UserNotParticipantError = exports.UserNotMutualContactError = exports.UserKickedError = exports.UserIsBotError = exports.UserIsBlockedError = exports.UserInvalidError = exports.UserIdInvalidError = exports.UserGiftUnavailableError = exports.UserCreatorError = exports.UserChannelsTooMuchError = exports.UserBotRequiredError = exports.UserBotInvalidError = exports.UserBotError = exports.UserBlockedError = exports.UserBannedInChannelError = exports.UserAlreadyParticipantError = exports.UserAlreadyInvitedError = exports.UserAdminInvalidError = exports.UsageLimitInvalidError = exports.UrlInvalidError = exports.UntilDateInvalidError = exports.UnsupportedError = exports.TypesEmptyError = exports.TtlPeriodInvalidError = exports.TtlMediaInvalidError = exports.TtlDaysInvalidError = void 0;
exports.ChatSendMediaForbiddenError = exports.ChatSendGifsForbiddenError = exports.ChatSendGameForbiddenError = exports.ChatSendDocsForbiddenError = exports.ChatSendAudiosForbiddenError = exports.ChatGuestSendForbiddenError = exports.ChatAdminInviteRequiredError = exports.ChatActionForbiddenError = exports.ChannelPublicGroupNaError = exports.BroadcastForbiddenError = exports.BotVerifierForbiddenError = exports.BotAccessForbiddenError = exports.AnonymousReactionsDisabledError = exports.AllowPaymentRequiredError = exports.UserDeactivatedBanError = exports.UserDeactivatedError = exports.SessionRevokedError = exports.SessionPasswordNeededError = exports.SessionExpiredError = exports.AuthKeyPermEmptyError = exports.AuthKeyInvalidError = exports.AuthKeyUnregisteredError = exports.StickersetNotModifiedError = exports.PeerFloodError = exports.InputRequestTooLongError = exports.InputMethodInvalidError = exports.InputLayerInvalidError = exports.InputFetchFailError = exports.InputFetchErrorError = exports.InputConstructorInvalidError = exports.FilePartMissingError = exports.FileMigrateError = exports.ConnectionSystemLangCodeEmptyError = exports.ConnectionSystemEmptyError = exports.ConnectionNotInitedError = exports.ConnectionLangPackInvalidError = exports.ConnectionDeviceModelEmptyError = exports.BotMethodInvalidError = exports.YouBlockedUserError = exports.WebpushTokenInvalidError = exports.WebpushKeyInvalidError = exports.WebpushAuthInvalidError = exports.WebpageUrlInvalidError = exports.WebpageNotFoundError = exports.WebpageMediaEmptyError = exports.WebpageCurlFailedError = exports.WebdocumentUrlInvalidError = exports.WebdocumentUrlEmptyError = exports.WebdocumentSizeTooBigError = exports.WebdocumentMimeInvalidError = void 0;
exports.SlowModeWaitError = exports.PremiumSubActiveUntilError = exports.FrozenMethodInvalidError = exports.FloodWaitError = exports.TwoFaConfirmWaitError = exports.AuthKeyDuplicatedError = exports.UserpicPrivacyRequiredError = exports.UpdateAppToLoginError = exports.TranslationsDisabledError = exports.StickersetOwnerAnonymousError = exports.StarsFormAmountMismatchError = exports.StargiftExportInProgressError = exports.SendCodeUnavailableError = exports.PreviousChatImportActiveWaitMinError = exports.PremiumCurrentlyUnavailableError = exports.PrecheckoutFailedError = exports.PhonePasswordFloodError = exports.PaymentUnsupportedError = exports.FreshResetAuthorisationForbiddenError = exports.FreshChangePhoneForbiddenError = exports.FilerefUpgradeNeededError = exports.CallProtocolCompatLayerInvalidError = exports.BusinessAddressActiveError = exports.ApiGiftRestrictedUpdateAppError = exports.ChatForbiddenError = exports.YourPrivacyRestrictedError = exports.UserRestrictedError = exports.UserPrivacyRestrictedError = exports.UserPermissionDeniedError = exports.UserDeletedError = exports.SensitiveChangeForbiddenError = exports.RightForbiddenError = exports.PublicChannelMissingError = exports.PrivacyPremiumRequiredError = exports.PollVoteRequiredError = exports.MessageDeleteForbiddenError = exports.MessageAuthorRequiredError = exports.InlineBotRequiredError = exports.GroupcallAlreadyStartedError = exports.EditBotInviteForbiddenError = exports.ChatWriteForbiddenError = exports.ChatTypeInvalidError = exports.ChatSendWebpageForbiddenError = exports.ChatSendVoicesForbiddenError = exports.ChatSendVideosForbiddenError = exports.ChatSendStickersForbiddenError = exports.ChatSendRoundvideosForbiddenError = exports.ChatSendPollForbiddenError = exports.ChatSendPlainForbiddenError = exports.ChatSendPhotosForbiddenError = void 0;
exports.baseErrors = exports.rpcErrorRe = exports.rpcErrorsRe = exports.rpcErrorsDict = exports.FloodTestPhoneWaitError = exports.MsgWaitTimeoutError = exports.TimeoutError = exports.TranslationTimeoutError = exports.TranslateReqFailedError = exports.SignInFailedError = exports.SendMediaInvalidError = exports.RandomIdDuplicateError = exports.PersistentTimestampOutdatedError = exports.ChatIdGenerateFailedError = exports.CdnUploadTimeoutError = exports.AuthRestartError = exports.AuthKeyUnsynchronizedError = exports.TakeoutInitDelayError = void 0;
/* eslint-disable */
const RPCBaseErrors_1 = require("./RPCBaseErrors");
/** Your IP address is associated to DC %d, please re-send the query to that DC. */
class NetworkMigrateError extends RPCBaseErrors_1.InvalidDCError {
    constructor(args) {
        const newDc = Number(args.capture || 0);
        const message = "Your IP address is associated to DC " + newDc + ", please re-send the query to that DC." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.newDc = newDc;
    }
}
exports.NetworkMigrateError = NetworkMigrateError;
/** Your phone number is associated to DC %d, please re-send the query to that DC. */
class PhoneMigrateError extends RPCBaseErrors_1.InvalidDCError {
    constructor(args) {
        const newDc = Number(args.capture || 0);
        const message = "Your phone number is associated to DC " + newDc + ", please re-send the query to that DC." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.newDc = newDc;
    }
}
exports.PhoneMigrateError = PhoneMigrateError;
/** Channel statistics for the specified channel are stored on DC %d, please re-send the query to that DC. */
class StatsMigrateError extends RPCBaseErrors_1.InvalidDCError {
    constructor(args) {
        const newDc = Number(args.capture || 0);
        const message = "Channel statistics for the specified channel are stored on DC " + newDc + ", please re-send the query to that DC." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.newDc = newDc;
    }
}
exports.StatsMigrateError = StatsMigrateError;
/** Your account is associated to DC %d, please re-send the query to that DC. */
class UserMigrateError extends RPCBaseErrors_1.InvalidDCError {
    constructor(args) {
        const newDc = Number(args.capture || 0);
        const message = "Your account is associated to DC " + newDc + ", please re-send the query to that DC." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.newDc = newDc;
    }
}
exports.UserMigrateError = UserMigrateError;
/** About string too long. */
class AboutTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "About string too long." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ABOUT_TOO_LONG";
    }
}
exports.AboutTooLongError = AboutTooLongError;
/** Access token expired. */
class AccessTokenExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Access token expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ACCESS_TOKEN_EXPIRED";
    }
}
exports.AccessTokenExpiredError = AccessTokenExpiredError;
/** Access token invalid. */
class AccessTokenInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Access token invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ACCESS_TOKEN_INVALID";
    }
}
exports.AccessTokenInvalidError = AccessTokenInvalidError;
/** The ad has expired (too old or not found). */
class AdExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The ad has expired (too old or not found)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AD_EXPIRED";
    }
}
exports.AdExpiredError = AdExpiredError;
/** The specified geopoint address is invalid. */
class AddressInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified geopoint address is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ADDRESS_INVALID";
    }
}
exports.AddressInvalidError = AddressInvalidError;
/** The specified admin ID is invalid. */
class AdminIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified admin ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ADMIN_ID_INVALID";
    }
}
exports.AdminIdInvalidError = AdminIdInvalidError;
/** An admin rank cannot contain emojis. */
class AdminRankEmojiNotAllowedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An admin rank cannot contain emojis." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ADMIN_RANK_EMOJI_NOT_ALLOWED";
    }
}
exports.AdminRankEmojiNotAllowedError = AdminRankEmojiNotAllowedError;
/** The specified admin rank is invalid. */
class AdminRankInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified admin rank is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ADMIN_RANK_INVALID";
    }
}
exports.AdminRankInvalidError = AdminRankInvalidError;
/** The chatAdminRights constructor passed in keyboardButtonRequestPeer.peer_type.user_admin_rights has no rights set (i.e. flags is 0). */
class AdminRightsEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The chatAdminRights constructor passed in keyboardButtonRequestPeer.peer_type.user_admin_rights has no rights set (i.e. flags is 0)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ADMIN_RIGHTS_EMPTY";
    }
}
exports.AdminRightsEmptyError = AdminRightsEmptyError;
/** There are too many admins. */
class AdminsTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "There are too many admins." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ADMINS_TOO_MUCH";
    }
}
exports.AdminsTooMuchError = AdminsTooMuchError;
/** You have uploaded too many profile photos, delete some before retrying. */
class AlbumPhotosTooManyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You have uploaded too many profile photos, delete some before retrying." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ALBUM_PHOTOS_TOO_MANY";
    }
}
exports.AlbumPhotosTooManyError = AlbumPhotosTooManyError;
/** API ID invalid. */
class ApiIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "API ID invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "API_ID_INVALID";
    }
}
exports.ApiIdInvalidError = ApiIdInvalidError;
/** This API id was published somewhere, you can't use it now. */
class ApiIdPublishedFloodError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This API id was published somewhere, you can't use it now." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "API_ID_PUBLISHED_FLOOD";
    }
}
exports.ApiIdPublishedFloodError = ApiIdPublishedFloodError;
/** The title of the article is empty. */
class ArticleTitleEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The title of the article is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ARTICLE_TITLE_EMPTY";
    }
}
exports.ArticleTitleEmptyError = ArticleTitleEmptyError;
/** The remote URL specified in the content field is empty. */
class AudioContentUrlEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The remote URL specified in the content field is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUDIO_CONTENT_URL_EMPTY";
    }
}
exports.AudioContentUrlEmptyError = AudioContentUrlEmptyError;
/** An empty audio title was provided. */
class AudioTitleEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An empty audio title was provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUDIO_TITLE_EMPTY";
    }
}
exports.AudioTitleEmptyError = AudioTitleEmptyError;
/** The provided authorization is invalid. */
class AuthBytesInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided authorization is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_BYTES_INVALID";
    }
}
exports.AuthBytesInvalidError = AuthBytesInvalidError;
/** The specified auth token was already accepted. */
class AuthTokenAlreadyAcceptedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified auth token was already accepted." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_TOKEN_ALREADY_ACCEPTED";
    }
}
exports.AuthTokenAlreadyAcceptedError = AuthTokenAlreadyAcceptedError;
/** An error occurred while importing the auth token. */
class AuthTokenExceptionError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An error occurred while importing the auth token." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_TOKEN_EXCEPTION";
    }
}
exports.AuthTokenExceptionError = AuthTokenExceptionError;
/** The authorization token has expired. */
class AuthTokenExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The authorization token has expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_TOKEN_EXPIRED";
    }
}
exports.AuthTokenExpiredError = AuthTokenExpiredError;
/** The specified auth token is invalid. */
class AuthTokenInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified auth token is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_TOKEN_INVALID";
    }
}
exports.AuthTokenInvalidError = AuthTokenInvalidError;
/** The specified auth token is invalid. */
class AuthTokenInvalidxError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified auth token is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_TOKEN_INVALIDX";
    }
}
exports.AuthTokenInvalidxError = AuthTokenInvalidxError;
/** The autoarchive setting is not available at this time: please check the value of the [autoarchive_setting_available field in client config &raquo;](https://core.telegram.org/api/config#client-configuration) before calling this method. */
class AutoarchiveNotAvailableError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The autoarchive setting is not available at this time: please check the value of the [autoarchive_setting_available field in client config &raquo;](https://core.telegram.org/api/config#client-configuration) before calling this method." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTOARCHIVE_NOT_AVAILABLE";
    }
}
exports.AutoarchiveNotAvailableError = AutoarchiveNotAvailableError;
/** The transaction cannot be completed because the current [Telegram Stars balance](https://core.telegram.org/api/stars) is too low. */
class BalanceTooLowError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The transaction cannot be completed because the current [Telegram Stars balance](https://core.telegram.org/api/stars) is too low." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BALANCE_TOO_LOW";
    }
}
exports.BalanceTooLowError = BalanceTooLowError;
/** The specified card number is invalid. */
class BankCardNumberInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified card number is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BANK_CARD_NUMBER_INVALID";
    }
}
exports.BankCardNumberInvalidError = BankCardNumberInvalidError;
/** You provided some invalid flags in the banned rights. */
class BannedRightsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You provided some invalid flags in the banned rights." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BANNED_RIGHTS_INVALID";
    }
}
exports.BannedRightsInvalidError = BannedRightsInvalidError;
/** An invalid age was specified, must be between 0 and 150 years. */
class BirthdayInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An invalid age was specified, must be between 0 and 150 years." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BIRTHDAY_INVALID";
    }
}
exports.BirthdayInvalidError = BirthdayInvalidError;
/** You're already [boosting](https://core.telegram.org/api/boost) the specified channel. */
class BoostNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You're already [boosting](https://core.telegram.org/api/boost) the specified channel." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOOST_NOT_MODIFIED";
    }
}
exports.BoostNotModifiedError = BoostNotModifiedError;
/** The specified `boost_peer` is invalid. */
class BoostPeerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `boost_peer` is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOOST_PEER_INVALID";
    }
}
exports.BoostPeerInvalidError = BoostPeerInvalidError;
/** No boost slots were specified. */
class BoostsEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No boost slots were specified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOOSTS_EMPTY";
    }
}
exports.BoostsEmptyError = BoostsEmptyError;
/** The specified channel must first be [boosted by its users](https://core.telegram.org/api/boost) in order to perform this action. */
class BoostsRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified channel must first be [boosted by its users](https://core.telegram.org/api/boost) in order to perform this action." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOOSTS_REQUIRED";
    }
}
exports.BoostsRequiredError = BoostsRequiredError;
/** The connected business bot was already disabled for the specified peer. */
class BotAlreadyDisabledError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The connected business bot was already disabled for the specified peer." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_ALREADY_DISABLED";
    }
}
exports.BotAlreadyDisabledError = BotAlreadyDisabledError;
/** The bot_id passed in the inputBotAppShortName constructor is invalid. */
class BotAppBotInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The bot_id passed in the inputBotAppShortName constructor is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_APP_BOT_INVALID";
    }
}
exports.BotAppBotInvalidError = BotAppBotInvalidError;
/** The specified bot app is invalid. */
class BotAppInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified bot app is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_APP_INVALID";
    }
}
exports.BotAppInvalidError = BotAppInvalidError;
/** The specified bot app short name is invalid. */
class BotAppShortnameInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified bot app short name is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_APP_SHORTNAME_INVALID";
    }
}
exports.BotAppShortnameInvalidError = BotAppShortnameInvalidError;
/** The specified bot is not a business bot (the [user](https://core.telegram.org/constructor/user).`bot_business` flag is not set). */
class BotBusinessMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified bot is not a business bot (the [user](https://core.telegram.org/constructor/user).`bot_business` flag is not set)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_BUSINESS_MISSING";
    }
}
exports.BotBusinessMissingError = BotBusinessMissingError;
/** Bots can't edit admin privileges. */
class BotChannelsNaError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Bots can't edit admin privileges." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_CHANNELS_NA";
    }
}
exports.BotChannelsNaError = BotChannelsNaError;
/** The specified command description is invalid. */
class BotCommandDescriptionInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified command description is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_COMMAND_DESCRIPTION_INVALID";
    }
}
exports.BotCommandDescriptionInvalidError = BotCommandDescriptionInvalidError;
/** The specified command is invalid. */
class BotCommandInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified command is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_COMMAND_INVALID";
    }
}
exports.BotCommandInvalidError = BotCommandInvalidError;
/** Bot domain invalid. */
class BotDomainInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Bot domain invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_DOMAIN_INVALID";
    }
}
exports.BotDomainInvalidError = BotDomainInvalidError;
/** The fallback flag can't be set for bots. */
class BotFallbackUnsupportedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The fallback flag can't be set for bots." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_FALLBACK_UNSUPPORTED";
    }
}
exports.BotFallbackUnsupportedError = BotFallbackUnsupportedError;
/** Games can't be sent to channels. */
class BotGamesDisabledError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Games can't be sent to channels." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_GAMES_DISABLED";
    }
}
exports.BotGamesDisabledError = BotGamesDisabledError;
/** This bot can't be added to groups. */
class BotGroupsBlockedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This bot can't be added to groups." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_GROUPS_BLOCKED";
    }
}
exports.BotGroupsBlockedError = BotGroupsBlockedError;
/** This bot can't be used in inline mode. */
class BotInlineDisabledError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This bot can't be used in inline mode." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_INLINE_DISABLED";
    }
}
exports.BotInlineDisabledError = BotInlineDisabledError;
/** This is not a valid bot. */
class BotInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This is not a valid bot." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_INVALID";
    }
}
exports.BotInvalidError = BotInvalidError;
/** The specified invoice is invalid. */
class BotInvoiceInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified invoice is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_INVOICE_INVALID";
    }
}
exports.BotInvoiceInvalidError = BotInvoiceInvalidError;
/** No [business bot](https://core.telegram.org/api/business#connected-bots) is connected to the currently logged in user. */
class BotNotConnectedYetError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No [business bot](https://core.telegram.org/api/business#connected-bots) is connected to the currently logged in user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_NOT_CONNECTED_YET";
    }
}
exports.BotNotConnectedYetError = BotNotConnectedYetError;
/** Bots can't pin messages in PM just for themselves. */
class BotOnesideNotAvailError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Bots can't pin messages in PM just for themselves." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_ONESIDE_NOT_AVAIL";
    }
}
exports.BotOnesideNotAvailError = BotOnesideNotAvailError;
/** Please enable bot payments in botfather before calling this method. */
class BotPaymentsDisabledError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Please enable bot payments in botfather before calling this method." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_PAYMENTS_DISABLED";
    }
}
exports.BotPaymentsDisabledError = BotPaymentsDisabledError;
/** A timeout occurred while fetching data from the bot. */
class BotResponseTimeoutError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A timeout occurred while fetching data from the bot." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_RESPONSE_TIMEOUT";
    }
}
exports.BotResponseTimeoutError = BotResponseTimeoutError;
/** The score wasn't modified. */
class BotScoreNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The score wasn't modified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_SCORE_NOT_MODIFIED";
    }
}
exports.BotScoreNotModifiedError = BotScoreNotModifiedError;
/** A webview cannot be opened in the specified conditions: emitted for example if `from_bot_menu` or `url` are set and `peer` is not the chat with the bot. */
class BotWebviewDisabledError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A webview cannot be opened in the specified conditions: emitted for example if `from_bot_menu` or `url` are set and `peer` is not the chat with the bot." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_WEBVIEW_DISABLED";
    }
}
exports.BotWebviewDisabledError = BotWebviewDisabledError;
/** There are too many bots in this chat/channel. */
class BotsTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "There are too many bots in this chat/channel." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOTS_TOO_MUCH";
    }
}
exports.BotsTooMuchError = BotsTooMuchError;
/** Broadcast ID invalid. */
class BroadcastIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Broadcast ID invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BROADCAST_ID_INVALID";
    }
}
exports.BroadcastIdInvalidError = BroadcastIdInvalidError;
/** You can't forward polls with public voters. */
class BroadcastPublicVotersForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't forward polls with public voters." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BROADCAST_PUBLIC_VOTERS_FORBIDDEN";
    }
}
exports.BroadcastPublicVotersForbiddenError = BroadcastPublicVotersForbiddenError;
/** This method can only be called on a channel, please use stats.getMegagroupStats for supergroups. */
class BroadcastRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This method can only be called on a channel, please use stats.getMegagroupStats for supergroups." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BROADCAST_REQUIRED";
    }
}
exports.BroadcastRequiredError = BroadcastRequiredError;
/** The `connection_id` passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. */
class BusinessConnectionInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The `connection_id` passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUSINESS_CONNECTION_INVALID";
    }
}
exports.BusinessConnectionInvalidError = BusinessConnectionInvalidError;
/** This method was invoked over a business connection using [invokeWithBusinessConnection](https://core.telegram.org/api/business#connected-bots), but either (1) we're a user, and users cannot invoke methods over a business connection; (2) we're a bot, but business mode was disabled in @botfather or (3); we're a bot, but this method cannot be invoked over a business connection. */
class BusinessConnectionNotAllowedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This method was invoked over a business connection using [invokeWithBusinessConnection](https://core.telegram.org/api/business#connected-bots), but either (1) we're a user, and users cannot invoke methods over a business connection; (2) we're a bot, but business mode was disabled in @botfather or (3); we're a bot, but this method cannot be invoked over a business connection." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUSINESS_CONNECTION_NOT_ALLOWED";
    }
}
exports.BusinessConnectionNotAllowedError = BusinessConnectionNotAllowedError;
/** Messages can't be set to the specified peer through the current [business connection](https://core.telegram.org/api/business#connected-bots). */
class BusinessPeerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Messages can't be set to the specified peer through the current [business connection](https://core.telegram.org/api/business#connected-bots)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUSINESS_PEER_INVALID";
    }
}
exports.BusinessPeerInvalidError = BusinessPeerInvalidError;
/** You cannot send a message to a user through a [business connection](https://core.telegram.org/api/business#connected-bots) if the user hasn't recently contacted us. */
class BusinessPeerUsageMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You cannot send a message to a user through a [business connection](https://core.telegram.org/api/business#connected-bots) if the user hasn't recently contacted us." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUSINESS_PEER_USAGE_MISSING";
    }
}
exports.BusinessPeerUsageMissingError = BusinessPeerUsageMissingError;
/** You didn't set any flag in inputBusinessBotRecipients, thus the bot cannot work with *any* peer. */
class BusinessRecipientsEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You didn't set any flag in inputBusinessBotRecipients, thus the bot cannot work with *any* peer." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUSINESS_RECIPIENTS_EMPTY";
    }
}
exports.BusinessRecipientsEmptyError = BusinessRecipientsEmptyError;
/** No work hours were specified. */
class BusinessWorkHoursEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No work hours were specified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUSINESS_WORK_HOURS_EMPTY";
    }
}
exports.BusinessWorkHoursEmptyError = BusinessWorkHoursEmptyError;
/** The specified work hours are invalid, see [here &raquo;](https://core.telegram.org/api/business#opening-hours) for the exact requirements. */
class BusinessWorkHoursPeriodInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified work hours are invalid, see [here &raquo;](https://core.telegram.org/api/business#opening-hours) for the exact requirements." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUSINESS_WORK_HOURS_PERIOD_INVALID";
    }
}
exports.BusinessWorkHoursPeriodInvalidError = BusinessWorkHoursPeriodInvalidError;
/** The specified [keyboardButtonCopy](https://core.telegram.org/constructor/keyboardButtonCopy).`copy_text` is invalid. */
class ButtonCopyTextInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified [keyboardButtonCopy](https://core.telegram.org/constructor/keyboardButtonCopy).`copy_text` is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUTTON_COPY_TEXT_INVALID";
    }
}
exports.ButtonCopyTextInvalidError = ButtonCopyTextInvalidError;
/** The data of one or more of the buttons you provided is invalid. */
class ButtonDataInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The data of one or more of the buttons you provided is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUTTON_DATA_INVALID";
    }
}
exports.ButtonDataInvalidError = ButtonDataInvalidError;
/** The specified button ID is invalid. */
class ButtonIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified button ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUTTON_ID_INVALID";
    }
}
exports.ButtonIdInvalidError = ButtonIdInvalidError;
/** The specified button is invalid. */
class ButtonInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified button is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUTTON_INVALID";
    }
}
exports.ButtonInvalidError = ButtonInvalidError;
/** The position of one of the keyboard buttons is invalid (i.e. a Game or Pay button not in the first position, and so on...). */
class ButtonPosInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The position of one of the keyboard buttons is invalid (i.e. a Game or Pay button not in the first position, and so on...)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUTTON_POS_INVALID";
    }
}
exports.ButtonPosInvalidError = ButtonPosInvalidError;
/** The specified button text is invalid. */
class ButtonTextInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified button text is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUTTON_TEXT_INVALID";
    }
}
exports.ButtonTextInvalidError = ButtonTextInvalidError;
/** The type of one or more of the buttons you provided is invalid. */
class ButtonTypeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The type of one or more of the buttons you provided is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUTTON_TYPE_INVALID";
    }
}
exports.ButtonTypeInvalidError = ButtonTypeInvalidError;
/** Button URL invalid. */
class ButtonUrlInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Button URL invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUTTON_URL_INVALID";
    }
}
exports.ButtonUrlInvalidError = ButtonUrlInvalidError;
/** The `user_id` passed to inputKeyboardButtonUserProfile is invalid! */
class ButtonUserInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The `user_id` passed to inputKeyboardButtonUserProfile is invalid!" + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUTTON_USER_INVALID";
    }
}
exports.ButtonUserInvalidError = ButtonUserInvalidError;
/** The privacy setting of the user specified in a [inputKeyboardButtonUserProfile](https://core.telegram.org/constructor/inputKeyboardButtonUserProfile) button do not allow creating such a button. */
class ButtonUserPrivacyRestrictedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The privacy setting of the user specified in a [inputKeyboardButtonUserProfile](https://core.telegram.org/constructor/inputKeyboardButtonUserProfile) button do not allow creating such a button." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUTTON_USER_PRIVACY_RESTRICTED";
    }
}
exports.ButtonUserPrivacyRestrictedError = ButtonUserPrivacyRestrictedError;
/** The call was already accepted. */
class CallAlreadyAcceptedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The call was already accepted." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CALL_ALREADY_ACCEPTED";
    }
}
exports.CallAlreadyAcceptedError = CallAlreadyAcceptedError;
/** The call was already declined. */
class CallAlreadyDeclinedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The call was already declined." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CALL_ALREADY_DECLINED";
    }
}
exports.CallAlreadyDeclinedError = CallAlreadyDeclinedError;
/** The call failed because the user is already making another call. */
class CallOccupyFailedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The call failed because the user is already making another call." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CALL_OCCUPY_FAILED";
    }
}
exports.CallOccupyFailedError = CallOccupyFailedError;
/** The provided call peer object is invalid. */
class CallPeerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided call peer object is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CALL_PEER_INVALID";
    }
}
exports.CallPeerInvalidError = CallPeerInvalidError;
/** Call protocol flags invalid. */
class CallProtocolFlagsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Call protocol flags invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CALL_PROTOCOL_FLAGS_INVALID";
    }
}
exports.CallProtocolFlagsInvalidError = CallProtocolFlagsInvalidError;
/** The specified protocol layer version range is invalid. */
class CallProtocolLayerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified protocol layer version range is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CALL_PROTOCOL_LAYER_INVALID";
    }
}
exports.CallProtocolLayerInvalidError = CallProtocolLayerInvalidError;
/** You can't call this method in a CDN DC. */
class CdnMethodInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't call this method in a CDN DC." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CDN_METHOD_INVALID";
    }
}
exports.CdnMethodInvalidError = CdnMethodInvalidError;
/** This supergroup is not a forum. */
class ChannelForumMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This supergroup is not a forum." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNEL_FORUM_MISSING";
    }
}
exports.ChannelForumMissingError = ChannelForumMissingError;
/** The specified supergroup ID is invalid. */
class ChannelIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified supergroup ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNEL_ID_INVALID";
    }
}
exports.ChannelIdInvalidError = ChannelIdInvalidError;
/** The provided channel is invalid. */
class ChannelInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided channel is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNEL_INVALID";
    }
}
exports.ChannelInvalidError = ChannelInvalidError;
/** [Monoforums](https://core.telegram.org/api/channel#monoforums) do not support this feature. */
class ChannelMonoforumUnsupportedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "[Monoforums](https://core.telegram.org/api/channel#monoforums) do not support this feature." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNEL_MONOFORUM_UNSUPPORTED";
    }
}
exports.ChannelMonoforumUnsupportedError = ChannelMonoforumUnsupportedError;
/** The current user is not in the channel. */
class ChannelParicipantMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The current user is not in the channel." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNEL_PARICIPANT_MISSING";
    }
}
exports.ChannelParicipantMissingError = ChannelParicipantMissingError;
/** You haven't joined this channel/supergroup. */
class ChannelPrivateError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You haven't joined this channel/supergroup." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNEL_PRIVATE";
    }
}
exports.ChannelPrivateError = ChannelPrivateError;
/** This channel has too many participants (>1000) to be deleted. */
class ChannelTooBigError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This channel has too many participants (>1000) to be deleted." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNEL_TOO_BIG";
    }
}
exports.ChannelTooBigError = ChannelTooBigError;
/** Channel is too large to be deleted; this error is issued when trying to delete channels with more than 1000 members (subject to change). */
class ChannelTooLargeError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Channel is too large to be deleted; this error is issued when trying to delete channels with more than 1000 members (subject to change)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNEL_TOO_LARGE";
    }
}
exports.ChannelTooLargeError = ChannelTooLargeError;
/** The user has reached the limit of public geogroups. */
class ChannelsAdminLocatedTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The user has reached the limit of public geogroups." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNELS_ADMIN_LOCATED_TOO_MUCH";
    }
}
exports.ChannelsAdminLocatedTooMuchError = ChannelsAdminLocatedTooMuchError;
/** You're admin of too many public channels, make some channels private to change the username of this channel. */
class ChannelsAdminPublicTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You're admin of too many public channels, make some channels private to change the username of this channel." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNELS_ADMIN_PUBLIC_TOO_MUCH";
    }
}
exports.ChannelsAdminPublicTooMuchError = ChannelsAdminPublicTooMuchError;
/** You have joined too many channels/supergroups. */
class ChannelsTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You have joined too many channels/supergroups." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNELS_TOO_MUCH";
    }
}
exports.ChannelsTooMuchError = ChannelsTooMuchError;
/** The transaction was already refunded. */
class ChargeAlreadyRefundedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The transaction was already refunded." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHARGE_ALREADY_REFUNDED";
    }
}
exports.ChargeAlreadyRefundedError = ChargeAlreadyRefundedError;
/** The specified charge_id is empty. */
class ChargeIdEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified charge_id is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHARGE_ID_EMPTY";
    }
}
exports.ChargeIdEmptyError = ChargeIdEmptyError;
/** The specified charge_id is invalid. */
class ChargeIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified charge_id is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHARGE_ID_INVALID";
    }
}
exports.ChargeIdInvalidError = ChargeIdInvalidError;
/** About text has not changed. */
class ChatAboutNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "About text has not changed." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_ABOUT_NOT_MODIFIED";
    }
}
exports.ChatAboutNotModifiedError = ChatAboutNotModifiedError;
/** Chat about too long. */
class ChatAboutTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Chat about too long." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_ABOUT_TOO_LONG";
    }
}
exports.ChatAboutTooLongError = ChatAboutTooLongError;
/** You must be an admin in this chat to do this. */
class ChatAdminRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You must be an admin in this chat to do this." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_ADMIN_REQUIRED";
    }
}
exports.ChatAdminRequiredError = ChatAdminRequiredError;
/** You can't enable forum topics in a discussion group linked to a channel. */
class ChatDiscussionUnallowedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't enable forum topics in a discussion group linked to a channel." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_DISCUSSION_UNALLOWED";
    }
}
exports.ChatDiscussionUnallowedError = ChatDiscussionUnallowedError;
/** You can't forward messages from a protected chat. */
class ChatForwardsRestrictedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't forward messages from a protected chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_FORWARDS_RESTRICTED";
    }
}
exports.ChatForwardsRestrictedError = ChatForwardsRestrictedError;
/** The provided chat ID is empty. */
class ChatIdEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided chat ID is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_ID_EMPTY";
    }
}
exports.ChatIdEmptyError = ChatIdEmptyError;
/** The provided chat id is invalid. */
class ChatIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided chat id is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_ID_INVALID";
    }
}
exports.ChatIdInvalidError = ChatIdInvalidError;
/** Invalid chat. */
class ChatInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_INVALID";
    }
}
exports.ChatInvalidError = ChatInvalidError;
/** You can't set an expiration date on permanent invite links. */
class ChatInvitePermanentError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't set an expiration date on permanent invite links." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_INVITE_PERMANENT";
    }
}
exports.ChatInvitePermanentError = ChatInvitePermanentError;
/** The chat is public, you can't hide the history to new users. */
class ChatLinkExistsError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The chat is public, you can't hide the history to new users." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_LINK_EXISTS";
    }
}
exports.ChatLinkExistsError = ChatLinkExistsError;
/** Could not add participants. */
class ChatMemberAddFailedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Could not add participants." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_MEMBER_ADD_FAILED";
    }
}
exports.ChatMemberAddFailedError = ChatMemberAddFailedError;
/** No changes were made to chat information because the new information you passed is identical to the current information. */
class ChatNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No changes were made to chat information because the new information you passed is identical to the current information." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_NOT_MODIFIED";
    }
}
exports.ChatNotModifiedError = ChatNotModifiedError;
/** You can only enable join requests in public groups. */
class ChatPublicRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can only enable join requests in public groups." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_PUBLIC_REQUIRED";
    }
}
exports.ChatPublicRequiredError = ChatPublicRequiredError;
/** You can't send messages in this chat, you were restricted. */
class ChatRestrictedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't send messages in this chat, you were restricted." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_RESTRICTED";
    }
}
exports.ChatRestrictedError = ChatRestrictedError;
/** `min_date` and `max_date` are not available for using with non-user peers. */
class ChatRevokeDateUnsupportedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "`min_date` and `max_date` are not available for using with non-user peers." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_REVOKE_DATE_UNSUPPORTED";
    }
}
exports.ChatRevokeDateUnsupportedError = ChatRevokeDateUnsupportedError;
/** You can't send inline messages in this group. */
class ChatSendInlineForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't send inline messages in this group." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_INLINE_FORBIDDEN";
    }
}
exports.ChatSendInlineForbiddenError = ChatSendInlineForbiddenError;
/** No chat title provided. */
class ChatTitleEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No chat title provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_TITLE_EMPTY";
    }
}
exports.ChatTitleEmptyError = ChatTitleEmptyError;
/** This method is not available for groups with more than `chat_read_mark_size_threshold` members, [see client configuration &raquo;](https://core.telegram.org/api/config#client-configuration). */
class ChatTooBigError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This method is not available for groups with more than `chat_read_mark_size_threshold` members, [see client configuration &raquo;](https://core.telegram.org/api/config#client-configuration)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_TOO_BIG";
    }
}
exports.ChatTooBigError = ChatTooBigError;
/** The specified slug is empty. */
class ChatlinkSlugEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified slug is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHATLINK_SLUG_EMPTY";
    }
}
exports.ChatlinkSlugEmptyError = ChatlinkSlugEmptyError;
/** The specified [business chat link](https://core.telegram.org/api/business#business-chat-links) has expired. */
class ChatlinkSlugExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified [business chat link](https://core.telegram.org/api/business#business-chat-links) has expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHATLINK_SLUG_EXPIRED";
    }
}
exports.ChatlinkSlugExpiredError = ChatlinkSlugExpiredError;
/** Too many [business chat links](https://core.telegram.org/api/business#business-chat-links) were created, please delete some older links. */
class ChatlinksTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Too many [business chat links](https://core.telegram.org/api/business#business-chat-links) were created, please delete some older links." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHATLINKS_TOO_MUCH";
    }
}
exports.ChatlinksTooMuchError = ChatlinksTooMuchError;
/** The specified `exclude_peers` are invalid. */
class ChatlistExcludeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `exclude_peers` are invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHATLIST_EXCLUDE_INVALID";
    }
}
exports.ChatlistExcludeInvalidError = ChatlistExcludeInvalidError;
/** You have created too many folder links, hitting the `chatlist_invites_limit_default`/`chatlist_invites_limit_premium` [limits &raquo;](https://core.telegram.org/api/config#chatlist-invites-limit-default). */
class ChatlistsTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You have created too many folder links, hitting the `chatlist_invites_limit_default`/`chatlist_invites_limit_premium` [limits &raquo;](https://core.telegram.org/api/config#chatlist-invites-limit-default)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHATLISTS_TOO_MUCH";
    }
}
exports.ChatlistsTooMuchError = ChatlistsTooMuchError;
/** The provided code is empty. */
class CodeEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided code is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CODE_EMPTY";
    }
}
exports.CodeEmptyError = CodeEmptyError;
/** Code hash invalid. */
class CodeHashInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Code hash invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CODE_HASH_INVALID";
    }
}
exports.CodeHashInvalidError = CodeHashInvalidError;
/** Code invalid. */
class CodeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Code invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CODE_INVALID";
    }
}
exports.CodeInvalidError = CodeInvalidError;
/** The specified collectible is invalid. */
class CollectibleInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified collectible is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "COLLECTIBLE_INVALID";
    }
}
exports.CollectibleInvalidError = CollectibleInvalidError;
/** The specified collectible could not be found. */
class CollectibleNotFoundError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified collectible could not be found." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "COLLECTIBLE_NOT_FOUND";
    }
}
exports.CollectibleNotFoundError = CollectibleNotFoundError;
/** The specified color palette ID was invalid. */
class ColorInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified color palette ID was invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "COLOR_INVALID";
    }
}
exports.ColorInvalidError = ColorInvalidError;
/** The provided API id is invalid. */
class ConnectionApiIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided API id is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONNECTION_API_ID_INVALID";
    }
}
exports.ConnectionApiIdInvalidError = ConnectionApiIdInvalidError;
/** App version is empty. */
class ConnectionAppVersionEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "App version is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONNECTION_APP_VERSION_EMPTY";
    }
}
exports.ConnectionAppVersionEmptyError = ConnectionAppVersionEmptyError;
/** The specified connection ID is invalid. */
class ConnectionIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified connection ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONNECTION_ID_INVALID";
    }
}
exports.ConnectionIdInvalidError = ConnectionIdInvalidError;
/** Layer invalid. */
class ConnectionLayerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Layer invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONNECTION_LAYER_INVALID";
    }
}
exports.ConnectionLayerInvalidError = ConnectionLayerInvalidError;
/** Contact to add is missing. */
class ContactAddMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Contact to add is missing." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONTACT_ADD_MISSING";
    }
}
exports.ContactAddMissingError = ContactAddMissingError;
/** The provided contact ID is invalid. */
class ContactIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided contact ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONTACT_ID_INVALID";
    }
}
exports.ContactIdInvalidError = ContactIdInvalidError;
/** The specified user is not a contact. */
class ContactMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified user is not a contact." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONTACT_MISSING";
    }
}
exports.ContactMissingError = ContactMissingError;
/** Contact name empty. */
class ContactNameEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Contact name empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONTACT_NAME_EMPTY";
    }
}
exports.ContactNameEmptyError = ContactNameEmptyError;
/** Missing contact request. */
class ContactReqMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Missing contact request." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONTACT_REQ_MISSING";
    }
}
exports.ContactReqMissingError = ContactReqMissingError;
/** An error occurred while creating the call. */
class CreateCallFailedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An error occurred while creating the call." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CREATE_CALL_FAILED";
    }
}
exports.CreateCallFailedError = CreateCallFailedError;
/** The total amount of all prices is invalid. */
class CurrencyTotalAmountInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The total amount of all prices is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CURRENCY_TOTAL_AMOUNT_INVALID";
    }
}
exports.CurrencyTotalAmountInvalidError = CurrencyTotalAmountInvalidError;
/** Too many custom reactions were specified. */
class CustomReactionsTooManyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Too many custom reactions were specified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CUSTOM_REACTIONS_TOO_MANY";
    }
}
exports.CustomReactionsTooManyError = CustomReactionsTooManyError;
/** The size of the specified secureValueErrorData.data_hash is invalid. */
class DataHashSizeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The size of the specified secureValueErrorData.data_hash is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "DATA_HASH_SIZE_INVALID";
    }
}
exports.DataHashSizeInvalidError = DataHashSizeInvalidError;
/** Encrypted data invalid. */
class DataInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Encrypted data invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "DATA_INVALID";
    }
}
exports.DataInvalidError = DataInvalidError;
/** The provided JSON data is invalid. */
class DataJsonInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided JSON data is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "DATA_JSON_INVALID";
    }
}
exports.DataJsonInvalidError = DataJsonInvalidError;
/** Data too long. */
class DataTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Data too long." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "DATA_TOO_LONG";
    }
}
exports.DataTooLongError = DataTooLongError;
/** Date empty. */
class DateEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Date empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "DATE_EMPTY";
    }
}
exports.DateEmptyError = DateEmptyError;
/** The provided DC ID is invalid. */
class DcIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided DC ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "DC_ID_INVALID";
    }
}
exports.DcIdInvalidError = DcIdInvalidError;
/** g_a invalid. */
class DhGAInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "g_a invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "DH_G_A_INVALID";
    }
}
exports.DhGAInvalidError = DhGAInvalidError;
/** The specified document is invalid. */
class DocumentInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified document is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "DOCUMENT_INVALID";
    }
}
exports.DocumentInvalidError = DocumentInvalidError;
/** The specified effect ID is invalid. */
class EffectIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified effect ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EFFECT_ID_INVALID";
    }
}
exports.EffectIdInvalidError = EffectIdInvalidError;
/** Email hash expired. */
class EmailHashExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Email hash expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMAIL_HASH_EXPIRED";
    }
}
exports.EmailHashExpiredError = EmailHashExpiredError;
/** The specified email is invalid. */
class EmailInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified email is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMAIL_INVALID";
    }
}
exports.EmailInvalidError = EmailInvalidError;
/** The specified email cannot be used to complete the operation. */
class EmailNotAllowedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified email cannot be used to complete the operation." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMAIL_NOT_ALLOWED";
    }
}
exports.EmailNotAllowedError = EmailNotAllowedError;
/** In order to change the login email with emailVerifyPurposeLoginChange, an existing login email must already be set using emailVerifyPurposeLoginSetup. */
class EmailNotSetupError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "In order to change the login email with emailVerifyPurposeLoginChange, an existing login email must already be set using emailVerifyPurposeLoginSetup." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMAIL_NOT_SETUP";
    }
}
exports.EmailNotSetupError = EmailNotSetupError;
/** The provided email isn't confirmed, %d is the length of the verification code that was just sent to the email: use [account.verifyEmail](https://core.telegram.org/method/account.verifyEmail) to enter the received verification code and enable the recovery email. */
class EmailUnconfirmedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const codeLength = Number(args.capture || 0);
        const message = "The provided email isn't confirmed, " + codeLength + " is the length of the verification code that was just sent to the email: use [account.verifyEmail](https://core.telegram.org/method/account.verifyEmail) to enter the received verification code and enable the recovery email." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.codeLength = codeLength;
    }
}
exports.EmailUnconfirmedError = EmailUnconfirmedError;
/** The verification email has expired. */
class EmailVerifyExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The verification email has expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMAIL_VERIFY_EXPIRED";
    }
}
exports.EmailVerifyExpiredError = EmailVerifyExpiredError;
/** The specified theme emoji is valid. */
class EmojiInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified theme emoji is valid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMOJI_INVALID";
    }
}
exports.EmojiInvalidError = EmojiInvalidError;
/** The specified `video_emoji_markup` was invalid. */
class EmojiMarkupInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `video_emoji_markup` was invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMOJI_MARKUP_INVALID";
    }
}
exports.EmojiMarkupInvalidError = EmojiMarkupInvalidError;
/** The theme wasn't changed. */
class EmojiNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The theme wasn't changed." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMOJI_NOT_MODIFIED";
    }
}
exports.EmojiNotModifiedError = EmojiNotModifiedError;
/** The emoji is empty. */
class EmoticonEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The emoji is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMOTICON_EMPTY";
    }
}
exports.EmoticonEmptyError = EmoticonEmptyError;
/** The specified emoji is invalid. */
class EmoticonInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified emoji is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMOTICON_INVALID";
    }
}
exports.EmoticonInvalidError = EmoticonInvalidError;
/** inputStickerSetDice.emoji cannot be empty. */
class EmoticonStickerpackMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "inputStickerSetDice.emoji cannot be empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EMOTICON_STICKERPACK_MISSING";
    }
}
exports.EmoticonStickerpackMissingError = EmoticonStickerpackMissingError;
/** Encrypted message invalid. */
class EncryptedMessageInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Encrypted message invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ENCRYPTED_MESSAGE_INVALID";
    }
}
exports.EncryptedMessageInvalidError = EncryptedMessageInvalidError;
/** Secret chat already accepted. */
class EncryptionAlreadyAcceptedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Secret chat already accepted." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ENCRYPTION_ALREADY_ACCEPTED";
    }
}
exports.EncryptionAlreadyAcceptedError = EncryptionAlreadyAcceptedError;
/** The secret chat was already declined. */
class EncryptionAlreadyDeclinedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The secret chat was already declined." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ENCRYPTION_ALREADY_DECLINED";
    }
}
exports.EncryptionAlreadyDeclinedError = EncryptionAlreadyDeclinedError;
/** The secret chat was declined. */
class EncryptionDeclinedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The secret chat was declined." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ENCRYPTION_DECLINED";
    }
}
exports.EncryptionDeclinedError = EncryptionDeclinedError;
/** The provided secret chat ID is invalid. */
class EncryptionIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided secret chat ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ENCRYPTION_ID_INVALID";
    }
}
exports.EncryptionIdInvalidError = EncryptionIdInvalidError;
/** You provided too many styled message entities. */
class EntitiesTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You provided too many styled message entities." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ENTITIES_TOO_LONG";
    }
}
exports.EntitiesTooLongError = EntitiesTooLongError;
/** A specified [entity offset or length](https://core.telegram.org/api/entities#entity-length) is invalid, see [here &raquo;](https://core.telegram.org/api/entities#entity-length) for info on how to properly compute the entity offset/length. */
class EntityBoundsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A specified [entity offset or length](https://core.telegram.org/api/entities#entity-length) is invalid, see [here &raquo;](https://core.telegram.org/api/entities#entity-length) for info on how to properly compute the entity offset/length." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ENTITY_BOUNDS_INVALID";
    }
}
exports.EntityBoundsInvalidError = EntityBoundsInvalidError;
/** You mentioned an invalid user. */
class EntityMentionUserInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You mentioned an invalid user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ENTITY_MENTION_USER_INVALID";
    }
}
exports.EntityMentionUserInvalidError = EntityMentionUserInvalidError;
/** The provided error message is empty. */
class ErrorTextEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided error message is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ERROR_TEXT_EMPTY";
    }
}
exports.ErrorTextEmptyError = ErrorTextEmptyError;
/** The specified expiration date is invalid. */
class ExpireDateInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified expiration date is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EXPIRE_DATE_INVALID";
    }
}
exports.ExpireDateInvalidError = ExpireDateInvalidError;
/** The specified `expires_at` timestamp is invalid. */
class ExpiresAtInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `expires_at` timestamp is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EXPIRES_AT_INVALID";
    }
}
exports.ExpiresAtInvalidError = ExpiresAtInvalidError;
/** Provided card is invalid. */
class ExportCardInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Provided card is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EXPORT_CARD_INVALID";
    }
}
exports.ExportCardInvalidError = ExportCardInvalidError;
/** The specified `stars_amount` of the passed [inputMediaPaidMedia](https://core.telegram.org/constructor/inputMediaPaidMedia) is invalid. */
class ExtendedMediaAmountInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `stars_amount` of the passed [inputMediaPaidMedia](https://core.telegram.org/constructor/inputMediaPaidMedia) is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EXTENDED_MEDIA_AMOUNT_INVALID";
    }
}
exports.ExtendedMediaAmountInvalidError = ExtendedMediaAmountInvalidError;
/** The specified paid media is invalid. */
class ExtendedMediaInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified paid media is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EXTENDED_MEDIA_INVALID";
    }
}
exports.ExtendedMediaInvalidError = ExtendedMediaInvalidError;
/** External URL invalid. */
class ExternalUrlInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "External URL invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EXTERNAL_URL_INVALID";
    }
}
exports.ExternalUrlInvalidError = ExternalUrlInvalidError;
/** File content-type is invalid. */
class FileContentTypeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "File content-type is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_CONTENT_TYPE_INVALID";
    }
}
exports.FileContentTypeInvalidError = FileContentTypeInvalidError;
/** An empty file was provided. */
class FileEmtpyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An empty file was provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_EMTPY";
    }
}
exports.FileEmtpyError = FileEmtpyError;
/** The provided file id is invalid. */
class FileIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided file id is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_ID_INVALID";
    }
}
exports.FileIdInvalidError = FileIdInvalidError;
/** The provided file part is empty. */
class FilePartEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided file part is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_PART_EMPTY";
    }
}
exports.FilePartEmptyError = FilePartEmptyError;
/** The file part number is invalid. */
class FilePartInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The file part number is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_PART_INVALID";
    }
}
exports.FilePartInvalidError = FilePartInvalidError;
/** The length of a file part is invalid. */
class FilePartLengthInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The length of a file part is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_PART_LENGTH_INVALID";
    }
}
exports.FilePartLengthInvalidError = FilePartLengthInvalidError;
/** Provided file part size has changed. */
class FilePartSizeChangedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Provided file part size has changed." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_PART_SIZE_CHANGED";
    }
}
exports.FilePartSizeChangedError = FilePartSizeChangedError;
/** The provided file part size is invalid. */
class FilePartSizeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided file part size is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_PART_SIZE_INVALID";
    }
}
exports.FilePartSizeInvalidError = FilePartSizeInvalidError;
/** The uploaded file part is too big. */
class FilePartTooBigError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The uploaded file part is too big." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_PART_TOO_BIG";
    }
}
exports.FilePartTooBigError = FilePartTooBigError;
/** The size of the uploaded file part is too small, please see the documentation for the allowed sizes. */
class FilePartTooSmallError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The size of the uploaded file part is too small, please see the documentation for the allowed sizes." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_PART_TOO_SMALL";
    }
}
exports.FilePartTooSmallError = FilePartTooSmallError;
/** The number of file parts is invalid. */
class FilePartsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The number of file parts is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_PARTS_INVALID";
    }
}
exports.FilePartsInvalidError = FilePartsInvalidError;
/** The file reference of the media file at index %d in the passed media array expired, it [must be refreshed as specified in the documentation](https://core.telegram.org/api/file-references). . */
class FileReferenceExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "The file reference of the media file at index " + value + " in the passed media array expired, it [must be refreshed as specified in the documentation](https://core.telegram.org/api/file-references). ." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.FileReferenceExpiredError = FileReferenceExpiredError;
/** The [file reference](https://core.telegram.org/api/file-references) of the media file at index %d in the passed media array is invalid. */
class FileReferenceInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "The [file reference](https://core.telegram.org/api/file-references) of the media file at index " + value + " in the passed media array is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.FileReferenceInvalidError = FileReferenceInvalidError;
/** An empty [file reference](https://core.telegram.org/api/file-references) was specified. */
class FileReferenceEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An empty [file reference](https://core.telegram.org/api/file-references) was specified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_REFERENCE_EMPTY";
    }
}
exports.FileReferenceEmptyError = FileReferenceEmptyError;
/** An empty file title was specified. */
class FileTitleEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An empty file title was specified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_TITLE_EMPTY";
    }
}
exports.FileTitleEmptyError = FileTitleEmptyError;
/** The master DC did not accept the `file_token` (e.g., the token has expired). Continue downloading the file from the master DC using upload.getFile. */
class FileTokenInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The master DC did not accept the `file_token` (e.g., the token has expired). Continue downloading the file from the master DC using upload.getFile." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILE_TOKEN_INVALID";
    }
}
exports.FileTokenInvalidError = FileTokenInvalidError;
/** The specified filter ID is invalid. */
class FilterIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified filter ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILTER_ID_INVALID";
    }
}
exports.FilterIdInvalidError = FilterIdInvalidError;
/** The include_peers vector of the filter is empty. */
class FilterIncludeEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The include_peers vector of the filter is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILTER_INCLUDE_EMPTY";
    }
}
exports.FilterIncludeEmptyError = FilterIncludeEmptyError;
/** The specified filter cannot be used in this context. */
class FilterNotSupportedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified filter cannot be used in this context." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILTER_NOT_SUPPORTED";
    }
}
exports.FilterNotSupportedError = FilterNotSupportedError;
/** The title field of the filter is empty. */
class FilterTitleEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The title field of the filter is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILTER_TITLE_EMPTY";
    }
}
exports.FilterTitleEmptyError = FilterTitleEmptyError;
/** The first name is invalid. */
class FirstnameInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The first name is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FIRSTNAME_INVALID";
    }
}
exports.FirstnameInvalidError = FirstnameInvalidError;
/** An empty folder ID was specified. */
class FolderIdEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An empty folder ID was specified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FOLDER_ID_EMPTY";
    }
}
exports.FolderIdEmptyError = FolderIdEmptyError;
/** Invalid folder ID. */
class FolderIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid folder ID." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FOLDER_ID_INVALID";
    }
}
exports.FolderIdInvalidError = FolderIdInvalidError;
/** The form was generated more than 10 minutes ago and has expired, please re-generate it using [payments.getPaymentForm](https://core.telegram.org/method/payments.getPaymentForm) and pass the new `form_id`. */
class FormExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The form was generated more than 10 minutes ago and has expired, please re-generate it using [payments.getPaymentForm](https://core.telegram.org/method/payments.getPaymentForm) and pass the new `form_id`." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FORM_EXPIRED";
    }
}
exports.FormExpiredError = FormExpiredError;
/** The specified form ID is empty. */
class FormIdEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified form ID is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FORM_ID_EMPTY";
    }
}
exports.FormIdEmptyError = FormIdEmptyError;
/** The same payment form was already submitted.  . */
class FormSubmitDuplicateError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The same payment form was already submitted.  ." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FORM_SUBMIT_DUPLICATE";
    }
}
exports.FormSubmitDuplicateError = FormSubmitDuplicateError;
/** Please update your client. */
class FormUnsupportedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Please update your client." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FORM_UNSUPPORTED";
    }
}
exports.FormUnsupportedError = FormUnsupportedError;
/** You can't execute the specified action because the group is a [forum](https://core.telegram.org/api/forum), disable forum functionality to continue. */
class ForumEnabledError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't execute the specified action because the group is a [forum](https://core.telegram.org/api/forum), disable forum functionality to continue." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FORUM_ENABLED";
    }
}
exports.ForumEnabledError = ForumEnabledError;
/** You were just elected admin, you can't add or modify other admins yet. */
class FreshChangeAdminsForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You were just elected admin, you can't add or modify other admins yet." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FRESH_CHANGE_ADMINS_FORBIDDEN";
    }
}
exports.FreshChangeAdminsForbiddenError = FreshChangeAdminsForbiddenError;
/** Bots can't use fromMessage min constructors. */
class FromMessageBotDisabledError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Bots can't use fromMessage min constructors." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FROM_MESSAGE_BOT_DISABLED";
    }
}
exports.FromMessageBotDisabledError = FromMessageBotDisabledError;
/** The specified from_id is invalid. */
class FromPeerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified from_id is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FROM_PEER_INVALID";
    }
}
exports.FromPeerInvalidError = FromPeerInvalidError;
/** The current account is [frozen](https://core.telegram.org/api/auth#frozen-accounts), and cannot access the specified peer. */
class FrozenParticipantMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The current account is [frozen](https://core.telegram.org/api/auth#frozen-accounts), and cannot access the specified peer." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FROZEN_PARTICIPANT_MISSING";
    }
}
exports.FrozenParticipantMissingError = FrozenParticipantMissingError;
/** Bots can't send another bot's game. */
class GameBotInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Bots can't send another bot's game." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GAME_BOT_INVALID";
    }
}
exports.GameBotInvalidError = GameBotInvalidError;
/** You can't modify the icon of the "General" topic. */
class GeneralModifyIconForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't modify the icon of the \"General\" topic." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GENERAL_MODIFY_ICON_FORBIDDEN";
    }
}
exports.GeneralModifyIconForbiddenError = GeneralModifyIconForbiddenError;
/** Invalid geoposition provided. */
class GeoPointInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid geoposition provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GEO_POINT_INVALID";
    }
}
exports.GeoPointInvalidError = GeoPointInvalidError;
/** GIF content-type invalid. */
class GifContentTypeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "GIF content-type invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GIF_CONTENT_TYPE_INVALID";
    }
}
exports.GifContentTypeInvalidError = GifContentTypeInvalidError;
/** The provided GIF ID is invalid. */
class GifIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided GIF ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GIF_ID_INVALID";
    }
}
exports.GifIdInvalidError = GifIdInvalidError;
/** The value passed in invoice.inputInvoicePremiumGiftStars.months is invalid. */
class GiftMonthsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The value passed in invoice.inputInvoicePremiumGiftStars.months is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GIFT_MONTHS_INVALID";
    }
}
exports.GiftMonthsInvalidError = GiftMonthsInvalidError;
/** The specified gift slug has expired. */
class GiftSlugExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified gift slug has expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GIFT_SLUG_EXPIRED";
    }
}
exports.GiftSlugExpiredError = GiftSlugExpiredError;
/** The specified slug is invalid. */
class GiftSlugInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified slug is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GIFT_SLUG_INVALID";
    }
}
exports.GiftSlugInvalidError = GiftSlugInvalidError;
/** The specified amount of stars is invalid. */
class GiftStarsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified amount of stars is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GIFT_STARS_INVALID";
    }
}
exports.GiftStarsInvalidError = GiftStarsInvalidError;
/** This graph has expired, please obtain a new graph token. */
class GraphExpiredReloadError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This graph has expired, please obtain a new graph token." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GRAPH_EXPIRED_RELOAD";
    }
}
exports.GraphExpiredReloadError = GraphExpiredReloadError;
/** Invalid graph token provided, please reload the stats and provide the updated token. */
class GraphInvalidReloadError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid graph token provided, please reload the stats and provide the updated token." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GRAPH_INVALID_RELOAD";
    }
}
exports.GraphInvalidReloadError = GraphInvalidReloadError;
/** The graph is outdated, please get a new async token using stats.getBroadcastStats. */
class GraphOutdatedReloadError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The graph is outdated, please get a new async token using stats.getBroadcastStats." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GRAPH_OUTDATED_RELOAD";
    }
}
exports.GraphOutdatedReloadError = GraphOutdatedReloadError;
/** The group call was already discarded. */
class GroupcallAlreadyDiscardedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The group call was already discarded." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GROUPCALL_ALREADY_DISCARDED";
    }
}
exports.GroupcallAlreadyDiscardedError = GroupcallAlreadyDiscardedError;
/** The group call has already ended. */
class GroupcallForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The group call has already ended." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GROUPCALL_FORBIDDEN";
    }
}
exports.GroupcallForbiddenError = GroupcallForbiddenError;
/** The specified group call is invalid. */
class GroupcallInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified group call is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GROUPCALL_INVALID";
    }
}
exports.GroupcallInvalidError = GroupcallInvalidError;
/** You haven't joined this group call. */
class GroupcallJoinMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You haven't joined this group call." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GROUPCALL_JOIN_MISSING";
    }
}
exports.GroupcallJoinMissingError = GroupcallJoinMissingError;
/** Group call settings weren't modified. */
class GroupcallNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Group call settings weren't modified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GROUPCALL_NOT_MODIFIED";
    }
}
exports.GroupcallNotModifiedError = GroupcallNotModifiedError;
/** The app needs to retry joining the group call with a new SSRC value. */
class GroupcallSsrcDuplicateMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The app needs to retry joining the group call with a new SSRC value." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GROUPCALL_SSRC_DUPLICATE_MUCH";
    }
}
exports.GroupcallSsrcDuplicateMuchError = GroupcallSsrcDuplicateMuchError;
/** Invalid grouped media. */
class GroupedMediaInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid grouped media." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GROUPED_MEDIA_INVALID";
    }
}
exports.GroupedMediaInvalidError = GroupedMediaInvalidError;
/** The provided hash is invalid. */
class HashInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided hash is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "HASH_INVALID";
    }
}
exports.HashInvalidError = HashInvalidError;
/** The size of the specified secureValueError.hash is invalid. */
class HashSizeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The size of the specified secureValueError.hash is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "HASH_SIZE_INVALID";
    }
}
exports.HashSizeInvalidError = HashSizeInvalidError;
/** The specified hashtag is invalid. */
class HashtagInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified hashtag is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "HASHTAG_INVALID";
    }
}
exports.HashtagInvalidError = HashtagInvalidError;
/** The join request was missing or was already handled. */
class HideRequesterMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The join request was missing or was already handled." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "HIDE_REQUESTER_MISSING";
    }
}
exports.HideRequesterMissingError = HideRequesterMissingError;
/** The passed prepared inline message ID has expired. */
class IdExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The passed prepared inline message ID has expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ID_EXPIRED";
    }
}
exports.IdExpiredError = IdExpiredError;
/** The passed ID is invalid. */
class IdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The passed ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ID_INVALID";
    }
}
exports.IdInvalidError = IdInvalidError;
/** Failure while processing image. */
class ImageProcessFailedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Failure while processing image." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "IMAGE_PROCESS_FAILED";
    }
}
exports.ImageProcessFailedError = ImageProcessFailedError;
/** The specified chat export file is invalid. */
class ImportFileInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified chat export file is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "IMPORT_FILE_INVALID";
    }
}
exports.ImportFileInvalidError = ImportFileInvalidError;
/** The date specified in the import file is invalid. */
class ImportFormatDateInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The date specified in the import file is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "IMPORT_FORMAT_DATE_INVALID";
    }
}
exports.ImportFormatDateInvalidError = ImportFormatDateInvalidError;
/** The specified chat export file was exported from an unsupported chat app. */
class ImportFormatUnrecognizedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified chat export file was exported from an unsupported chat app." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "IMPORT_FORMAT_UNRECOGNIZED";
    }
}
exports.ImportFormatUnrecognizedError = ImportFormatUnrecognizedError;
/** The specified import ID is invalid. */
class ImportIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified import ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "IMPORT_ID_INVALID";
    }
}
exports.ImportIdInvalidError = ImportIdInvalidError;
/** The specified token is invalid. */
class ImportTokenInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified token is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "IMPORT_TOKEN_INVALID";
    }
}
exports.ImportTokenInvalidError = ImportTokenInvalidError;
/** The inline query expired. */
class InlineResultExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The inline query expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INLINE_RESULT_EXPIRED";
    }
}
exports.InlineResultExpiredError = InlineResultExpiredError;
/** The specified folder is invalid. */
class InputChatlistInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified folder is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_CHATLIST_INVALID";
    }
}
exports.InputChatlistInvalidError = InputChatlistInvalidError;
/** The specified [InputFile](https://core.telegram.org/type/InputFile) is invalid. */
class InputFileInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified [InputFile](https://core.telegram.org/type/InputFile) is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_FILE_INVALID";
    }
}
exports.InputFileInvalidError = InputFileInvalidError;
/** The specified filter is invalid. */
class InputFilterInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified filter is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_FILTER_INVALID";
    }
}
exports.InputFilterInvalidError = InputFilterInvalidError;
/** The specified peer array is empty. */
class InputPeersEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified peer array is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_PEERS_EMPTY";
    }
}
exports.InputPeersEmptyError = InputPeersEmptyError;
/** The specified payment purpose is invalid. */
class InputPurposeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified payment purpose is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_PURPOSE_INVALID";
    }
}
exports.InputPurposeInvalidError = InputPurposeInvalidError;
/** The specified text is empty. */
class InputTextEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified text is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_TEXT_EMPTY";
    }
}
exports.InputTextEmptyError = InputTextEmptyError;
/** The specified text is too long. */
class InputTextTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified text is too long." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_TEXT_TOO_LONG";
    }
}
exports.InputTextTooLongError = InputTextTooLongError;
/** The specified user was deleted. */
class InputUserDeactivatedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified user was deleted." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_USER_DEACTIVATED";
    }
}
exports.InputUserDeactivatedError = InputUserDeactivatedError;
/** If the user has anonymously joined a group call as a channel, they can't invite other users to the group call because that would cause deanonymization, because the invite would be sent using the original user ID, not the anonymized channel ID. */
class InviteForbiddenWithJoinasError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "If the user has anonymously joined a group call as a channel, they can't invite other users to the group call because that would cause deanonymization, because the invite would be sent using the original user ID, not the anonymized channel ID." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVITE_FORBIDDEN_WITH_JOINAS";
    }
}
exports.InviteForbiddenWithJoinasError = InviteForbiddenWithJoinasError;
/** The invite hash is empty. */
class InviteHashEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The invite hash is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVITE_HASH_EMPTY";
    }
}
exports.InviteHashEmptyError = InviteHashEmptyError;
/** The invite link has expired. */
class InviteHashExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The invite link has expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVITE_HASH_EXPIRED";
    }
}
exports.InviteHashExpiredError = InviteHashExpiredError;
/** The invite hash is invalid. */
class InviteHashInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The invite hash is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVITE_HASH_INVALID";
    }
}
exports.InviteHashInvalidError = InviteHashInvalidError;
/** You have successfully requested to join this chat or channel. */
class InviteRequestSentError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You have successfully requested to join this chat or channel." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVITE_REQUEST_SENT";
    }
}
exports.InviteRequestSentError = InviteRequestSentError;
/** The specified invite link was already revoked or is invalid. */
class InviteRevokedMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified invite link was already revoked or is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVITE_REVOKED_MISSING";
    }
}
exports.InviteRevokedMissingError = InviteRevokedMissingError;
/** The specified invite slug is empty. */
class InviteSlugEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified invite slug is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVITE_SLUG_EMPTY";
    }
}
exports.InviteSlugEmptyError = InviteSlugEmptyError;
/** The specified chat folder link has expired. */
class InviteSlugExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified chat folder link has expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVITE_SLUG_EXPIRED";
    }
}
exports.InviteSlugExpiredError = InviteSlugExpiredError;
/** The specified invitation slug is invalid. */
class InviteSlugInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified invitation slug is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVITE_SLUG_INVALID";
    }
}
exports.InviteSlugInvalidError = InviteSlugInvalidError;
/** The maximum number of per-folder invites specified by the `chatlist_invites_limit_default`/`chatlist_invites_limit_premium` [client configuration parameters &raquo;](https://core.telegram.org/api/config#chatlist-invites-limit-default) was reached. */
class InvitesTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The maximum number of per-folder invites specified by the `chatlist_invites_limit_default`/`chatlist_invites_limit_premium` [client configuration parameters &raquo;](https://core.telegram.org/api/config#chatlist-invites-limit-default) was reached." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVITES_TOO_MUCH";
    }
}
exports.InvitesTooMuchError = InvitesTooMuchError;
/** The specified invoice is invalid. */
class InvoiceInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified invoice is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVOICE_INVALID";
    }
}
exports.InvoiceInvalidError = InvoiceInvalidError;
/** The specified invoice payload is invalid. */
class InvoicePayloadInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified invoice payload is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INVOICE_PAYLOAD_INVALID";
    }
}
exports.InvoicePayloadInvalidError = InvoicePayloadInvalidError;
/** The specified peer cannot be used to join a group call. */
class JoinAsPeerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified peer cannot be used to join a group call." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "JOIN_AS_PEER_INVALID";
    }
}
exports.JoinAsPeerInvalidError = JoinAsPeerInvalidError;
/** The specified language code is invalid. */
class LangCodeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified language code is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "LANG_CODE_INVALID";
    }
}
exports.LangCodeInvalidError = LangCodeInvalidError;
/** The specified language code is not supported. */
class LangCodeNotSupportedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified language code is not supported." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "LANG_CODE_NOT_SUPPORTED";
    }
}
exports.LangCodeNotSupportedError = LangCodeNotSupportedError;
/** The provided language pack is invalid. */
class LangPackInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided language pack is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "LANG_PACK_INVALID";
    }
}
exports.LangPackInvalidError = LangPackInvalidError;
/** The specified lang_code is invalid. */
class LanguageInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified lang_code is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "LANGUAGE_INVALID";
    }
}
exports.LanguageInvalidError = LanguageInvalidError;
/** The last name is invalid. */
class LastnameInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The last name is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "LASTNAME_INVALID";
    }
}
exports.LastnameInvalidError = LastnameInvalidError;
/** The provided limit is invalid. */
class LimitInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided limit is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "LIMIT_INVALID";
    }
}
exports.LimitInvalidError = LimitInvalidError;
/** Discussion link not modified. */
class LinkNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Discussion link not modified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "LINK_NOT_MODIFIED";
    }
}
exports.LinkNotModifiedError = LinkNotModifiedError;
/** The provided location is invalid. */
class LocationInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided location is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "LOCATION_INVALID";
    }
}
exports.LocationInvalidError = LocationInvalidError;
/** The specified maximum date is invalid. */
class MaxDateInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified maximum date is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MAX_DATE_INVALID";
    }
}
exports.MaxDateInvalidError = MaxDateInvalidError;
/** The provided max ID is invalid. */
class MaxIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided max ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MAX_ID_INVALID";
    }
}
exports.MaxIdInvalidError = MaxIdInvalidError;
/** The specified max_qts is invalid. */
class MaxQtsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified max_qts is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MAX_QTS_INVALID";
    }
}
exports.MaxQtsInvalidError = MaxQtsInvalidError;
/** The MD5 checksums do not match. */
class Md5ChecksumInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The MD5 checksums do not match." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MD5_CHECKSUM_INVALID";
    }
}
exports.Md5ChecksumInvalidError = Md5ChecksumInvalidError;
/** You already paid for the specified media. */
class MediaAlreadyPaidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You already paid for the specified media." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_ALREADY_PAID";
    }
}
exports.MediaAlreadyPaidError = MediaAlreadyPaidError;
/** The caption is too long. */
class MediaCaptionTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The caption is too long." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_CAPTION_TOO_LONG";
    }
}
exports.MediaCaptionTooLongError = MediaCaptionTooLongError;
/** The provided media object is invalid. */
class MediaEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided media object is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_EMPTY";
    }
}
exports.MediaEmptyError = MediaEmptyError;
/** The specified media file is invalid. */
class MediaFileInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified media file is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_FILE_INVALID";
    }
}
exports.MediaFileInvalidError = MediaFileInvalidError;
/** You tried to send media of different types in an album. */
class MediaGroupedInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You tried to send media of different types in an album." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_GROUPED_INVALID";
    }
}
exports.MediaGroupedInvalidError = MediaGroupedInvalidError;
/** Media invalid. */
class MediaInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Media invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_INVALID";
    }
}
exports.MediaInvalidError = MediaInvalidError;
/** The new media is invalid. */
class MediaNewInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The new media is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_NEW_INVALID";
    }
}
exports.MediaNewInvalidError = MediaNewInvalidError;
/** Previous media invalid. */
class MediaPrevInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Previous media invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_PREV_INVALID";
    }
}
exports.MediaPrevInvalidError = MediaPrevInvalidError;
/** The specified media TTL is invalid. */
class MediaTtlInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified media TTL is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_TTL_INVALID";
    }
}
exports.MediaTtlInvalidError = MediaTtlInvalidError;
/** The specified media type cannot be used in stories. */
class MediaTypeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified media type cannot be used in stories." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_TYPE_INVALID";
    }
}
exports.MediaTypeInvalidError = MediaTypeInvalidError;
/** A non-story video cannot be repubblished as a story (emitted when trying to resend a non-story video as a story using inputDocument). */
class MediaVideoStoryMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A non-story video cannot be repubblished as a story (emitted when trying to resend a non-story video as a story using inputDocument)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEDIA_VIDEO_STORY_MISSING";
    }
}
exports.MediaVideoStoryMissingError = MediaVideoStoryMissingError;
/** This method can only be invoked on a geogroup. */
class MegagroupGeoRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This method can only be invoked on a geogroup." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEGAGROUP_GEO_REQUIRED";
    }
}
exports.MegagroupGeoRequiredError = MegagroupGeoRequiredError;
/** Invalid supergroup ID. */
class MegagroupIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid supergroup ID." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEGAGROUP_ID_INVALID";
    }
}
exports.MegagroupIdInvalidError = MegagroupIdInvalidError;
/** Group with hidden history for new members can't be set as discussion groups. */
class MegagroupPrehistoryHiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Group with hidden history for new members can't be set as discussion groups." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEGAGROUP_PREHISTORY_HIDDEN";
    }
}
exports.MegagroupPrehistoryHiddenError = MegagroupPrehistoryHiddenError;
/** You can only use this method on a supergroup. */
class MegagroupRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can only use this method on a supergroup." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MEGAGROUP_REQUIRED";
    }
}
exports.MegagroupRequiredError = MegagroupRequiredError;
/** You can't edit this message anymore, too much time has passed since its creation. */
class MessageEditTimeExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't edit this message anymore, too much time has passed since its creation." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_EDIT_TIME_EXPIRED";
    }
}
exports.MessageEditTimeExpiredError = MessageEditTimeExpiredError;
/** The provided message is empty. */
class MessageEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided message is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_EMPTY";
    }
}
exports.MessageEmptyError = MessageEmptyError;
/** The provided message id is invalid. */
class MessageIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided message id is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_ID_INVALID";
    }
}
exports.MessageIdInvalidError = MessageIdInvalidError;
/** No message ids were provided. */
class MessageIdsEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No message ids were provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_IDS_EMPTY";
    }
}
exports.MessageIdsEmptyError = MessageIdsEmptyError;
/** The provided message data is identical to the previous message data, the message wasn't modified. */
class MessageNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided message data is identical to the previous message data, the message wasn't modified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_NOT_MODIFIED";
    }
}
exports.MessageNotModifiedError = MessageNotModifiedError;
/** The specified message wasn't read yet. */
class MessageNotReadYetError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified message wasn't read yet." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_NOT_READ_YET";
    }
}
exports.MessageNotReadYetError = MessageNotReadYetError;
/** Poll closed. */
class MessagePollClosedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Poll closed." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_POLL_CLOSED";
    }
}
exports.MessagePollClosedError = MessagePollClosedError;
/** The provided message is too long. */
class MessageTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided message is too long." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_TOO_LONG";
    }
}
exports.MessageTooLongError = MessageTooLongError;
/** The message is too old, the requested information is not available. */
class MessageTooOldError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The message is too old, the requested information is not available." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_TOO_OLD";
    }
}
exports.MessageTooOldError = MessageTooOldError;
/** The specified method is invalid. */
class MethodInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified method is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "METHOD_INVALID";
    }
}
exports.MethodInvalidError = MethodInvalidError;
/** The specified minimum date is invalid. */
class MinDateInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified minimum date is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MIN_DATE_INVALID";
    }
}
exports.MinDateInvalidError = MinDateInvalidError;
/** The number of months specified in inputInvoicePremiumGiftStars.months is invalid. */
class MonthInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The number of months specified in inputInvoicePremiumGiftStars.months is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MONTH_INVALID";
    }
}
exports.MonthInvalidError = MonthInvalidError;
/** Invalid message ID provided. */
class MsgIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid message ID provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MSG_ID_INVALID";
    }
}
exports.MsgIdInvalidError = MsgIdInvalidError;
/** [`chat_read_mark_expire_period` seconds](https://core.telegram.org/api/config#chat-read-mark-expire-period) have passed since the message was sent, read receipts were deleted. */
class MsgTooOldError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "[`chat_read_mark_expire_period` seconds](https://core.telegram.org/api/config#chat-read-mark-expire-period) have passed since the message was sent, read receipts were deleted." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MSG_TOO_OLD";
    }
}
exports.MsgTooOldError = MsgTooOldError;
/** The specified message is not a voice message. */
class MsgVoiceMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified message is not a voice message." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MSG_VOICE_MISSING";
    }
}
exports.MsgVoiceMissingError = MsgVoiceMissingError;
/** A waiting call returned an error. */
class MsgWaitError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A waiting call returned an error." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MSG_WAIT_FAILED";
    }
}
exports.MsgWaitError = MsgWaitError;
/** Too many media files for album. */
class MultiMediaTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Too many media files for album." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MULTI_MEDIA_TOO_LONG";
    }
}
exports.MultiMediaTooLongError = MultiMediaTooLongError;
/** The new salt is invalid. */
class NewSaltInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The new salt is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "NEW_SALT_INVALID";
    }
}
exports.NewSaltInvalidError = NewSaltInvalidError;
/** No password is set on the current account, and no new password was specified in `new_settings`. */
class NewSettingsEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No password is set on the current account, and no new password was specified in `new_settings`." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "NEW_SETTINGS_EMPTY";
    }
}
exports.NewSettingsEmptyError = NewSettingsEmptyError;
/** The new password settings are invalid. */
class NewSettingsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The new password settings are invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "NEW_SETTINGS_INVALID";
    }
}
exports.NewSettingsInvalidError = NewSettingsInvalidError;
/** The specified offset is longer than 64 bytes. */
class NextOffsetInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified offset is longer than 64 bytes." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "NEXT_OFFSET_INVALID";
    }
}
exports.NextOffsetInvalidError = NextOffsetInvalidError;
/** The upgrade/transfer of the specified gift was already paid for or is free. */
class NoPaymentNeededError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The upgrade/transfer of the specified gift was already paid for or is free." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "NO_PAYMENT_NEEDED";
    }
}
exports.NoPaymentNeededError = NoPaymentNeededError;
/** Only the "General" topic with `id=1` can be hidden. */
class NogeneralHideForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Only the \"General\" topic with `id=1` can be hidden." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "NOGENERAL_HIDE_FORBIDDEN";
    }
}
exports.NogeneralHideForbiddenError = NogeneralHideForbiddenError;
/** The current user is not eligible to join the Peer-to-Peer Login Program. */
class NotEligibleError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The current user is not eligible to join the Peer-to-Peer Login Program." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "NOT_ELIGIBLE";
    }
}
exports.NotEligibleError = NotEligibleError;
/** The current user hasn't joined the Peer-to-Peer Login Program. */
class NotJoinedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The current user hasn't joined the Peer-to-Peer Login Program." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "NOT_JOINED";
    }
}
exports.NotJoinedError = NotJoinedError;
/** The provided offset is invalid. */
class OffsetInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided offset is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "OFFSET_INVALID";
    }
}
exports.OffsetInvalidError = OffsetInvalidError;
/** The provided offset peer is invalid. */
class OffsetPeerIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided offset peer is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "OFFSET_PEER_ID_INVALID";
    }
}
exports.OffsetPeerIdInvalidError = OffsetPeerIdInvalidError;
/** Invalid option selected. */
class OptionInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid option selected." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "OPTION_INVALID";
    }
}
exports.OptionInvalidError = OptionInvalidError;
/** Too many options provided. */
class OptionsTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Too many options provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "OPTIONS_TOO_MUCH";
    }
}
exports.OptionsTooMuchError = OptionsTooMuchError;
/** The specified username order is invalid. */
class OrderInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified username order is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ORDER_INVALID";
    }
}
exports.OrderInvalidError = OrderInvalidError;
/** Short pack name invalid. */
class PackShortNameInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Short pack name invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PACK_SHORT_NAME_INVALID";
    }
}
exports.PackShortNameInvalidError = PackShortNameInvalidError;
/** A stickerpack with this name already exists. */
class PackShortNameOccupiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A stickerpack with this name already exists." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PACK_SHORT_NAME_OCCUPIED";
    }
}
exports.PackShortNameOccupiedError = PackShortNameOccupiedError;
/** The stickerpack title is invalid. */
class PackTitleInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The stickerpack title is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PACK_TITLE_INVALID";
    }
}
exports.PackTitleInvalidError = PackTitleInvalidError;
/** The masks and emojis flags are mutually exclusive. */
class PackTypeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The masks and emojis flags are mutually exclusive." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PACK_TYPE_INVALID";
    }
}
exports.PackTypeInvalidError = PackTypeInvalidError;
/** The specified `parent_peer` is invalid. */
class ParentPeerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `parent_peer` is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PARENT_PEER_INVALID";
    }
}
exports.ParentPeerInvalidError = ParentPeerInvalidError;
/** The specified participant ID is invalid. */
class ParticipantIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified participant ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PARTICIPANT_ID_INVALID";
    }
}
exports.ParticipantIdInvalidError = ParticipantIdInvalidError;
/** Trying to enable a presentation, when the user hasn't joined the Video Chat with [phone.joinGroupCall](https://core.telegram.org/method/phone.joinGroupCall). */
class ParticipantJoinMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Trying to enable a presentation, when the user hasn't joined the Video Chat with [phone.joinGroupCall](https://core.telegram.org/method/phone.joinGroupCall)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PARTICIPANT_JOIN_MISSING";
    }
}
exports.ParticipantJoinMissingError = ParticipantJoinMissingError;
/** The other participant does not use an up to date telegram client with support for calls. */
class ParticipantVersionOutdatedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The other participant does not use an up to date telegram client with support for calls." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PARTICIPANT_VERSION_OUTDATED";
    }
}
exports.ParticipantVersionOutdatedError = ParticipantVersionOutdatedError;
/** Not enough participants. */
class ParticipantsTooFewError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Not enough participants." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PARTICIPANTS_TOO_FEW";
    }
}
exports.ParticipantsTooFewError = ParticipantsTooFewError;
/** The provided password is empty. */
class PasswordEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided password is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PASSWORD_EMPTY";
    }
}
exports.PasswordEmptyError = PasswordEmptyError;
/** The provided password hash is invalid. */
class PasswordHashInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided password hash is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PASSWORD_HASH_INVALID";
    }
}
exports.PasswordHashInvalidError = PasswordHashInvalidError;
/** You must [enable 2FA](https://core.telegram.org/api/srp) before executing this operation. */
class PasswordMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You must [enable 2FA](https://core.telegram.org/api/srp) before executing this operation." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PASSWORD_MISSING";
    }
}
exports.PasswordMissingError = PasswordMissingError;
/** The recovery code has expired. */
class PasswordRecoveryExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The recovery code has expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PASSWORD_RECOVERY_EXPIRED";
    }
}
exports.PasswordRecoveryExpiredError = PasswordRecoveryExpiredError;
/** No email was set, can't recover password via email. */
class PasswordRecoveryNaError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No email was set, can't recover password via email." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PASSWORD_RECOVERY_NA";
    }
}
exports.PasswordRecoveryNaError = PasswordRecoveryNaError;
/** A [2FA password](https://core.telegram.org/api/srp) must be configured to use Telegram Passport. */
class PasswordRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A [2FA password](https://core.telegram.org/api/srp) must be configured to use Telegram Passport." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PASSWORD_REQUIRED";
    }
}
exports.PasswordRequiredError = PasswordRequiredError;
/** The password was modified less than 24 hours ago, try again in %d seconds. */
class PasswordTooFreshError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "The password was modified less than 24 hours ago, try again in " + value + " seconds." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.PasswordTooFreshError = PasswordTooFreshError;
/** The specified payment credentials are invalid. */
class PaymentCredentialsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified payment credentials are invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PAYMENT_CREDENTIALS_INVALID";
    }
}
exports.PaymentCredentialsInvalidError = PaymentCredentialsInvalidError;
/** The specified payment provider is invalid. */
class PaymentProviderInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified payment provider is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PAYMENT_PROVIDER_INVALID";
    }
}
exports.PaymentProviderInvalidError = PaymentProviderInvalidError;
/** Payment is required for this action, see [here &raquo;](https://core.telegram.org/api/gifts) for more info. */
class PaymentRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Payment is required for this action, see [here &raquo;](https://core.telegram.org/api/gifts) for more info." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PAYMENT_REQUIRED";
    }
}
exports.PaymentRequiredError = PaymentRequiredError;
/** You can't pin an empty chat with a user. */
class PeerHistoryEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't pin an empty chat with a user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PEER_HISTORY_EMPTY";
    }
}
exports.PeerHistoryEmptyError = PeerHistoryEmptyError;
/** The provided peer id is invalid. */
class PeerIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided peer id is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PEER_ID_INVALID";
    }
}
exports.PeerIdInvalidError = PeerIdInvalidError;
/** The provided peer ID is not supported. */
class PeerIdNotSupportedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided peer ID is not supported." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PEER_ID_NOT_SUPPORTED";
    }
}
exports.PeerIdNotSupportedError = PeerIdNotSupportedError;
/** The passed [keyboardButtonSwitchInline](https://core.telegram.org/constructor/keyboardButtonSwitchInline).`peer_types` field is invalid. */
class PeerTypesInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The passed [keyboardButtonSwitchInline](https://core.telegram.org/constructor/keyboardButtonSwitchInline).`peer_types` field is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PEER_TYPES_INVALID";
    }
}
exports.PeerTypesInvalidError = PeerTypesInvalidError;
/** The specified list of peers is empty. */
class PeersListEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified list of peers is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PEERS_LIST_EMPTY";
    }
}
exports.PeersListEmptyError = PeersListEmptyError;
/** Persistent timestamp empty. */
class PersistentTimestampEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Persistent timestamp empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PERSISTENT_TIMESTAMP_EMPTY";
    }
}
exports.PersistentTimestampEmptyError = PersistentTimestampEmptyError;
/** Persistent timestamp invalid. */
class PersistentTimestampInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Persistent timestamp invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PERSISTENT_TIMESTAMP_INVALID";
    }
}
exports.PersistentTimestampInvalidError = PersistentTimestampInvalidError;
/** phone_code is missing. */
class PhoneCodeEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "phone_code is missing." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_CODE_EMPTY";
    }
}
exports.PhoneCodeEmptyError = PhoneCodeEmptyError;
/** The phone code you provided has expired. */
class PhoneCodeExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The phone code you provided has expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_CODE_EXPIRED";
    }
}
exports.PhoneCodeExpiredError = PhoneCodeExpiredError;
/** phone_code_hash is missing. */
class PhoneCodeHashEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "phone_code_hash is missing." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_CODE_HASH_EMPTY";
    }
}
exports.PhoneCodeHashEmptyError = PhoneCodeHashEmptyError;
/** The provided phone code is invalid. */
class PhoneCodeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided phone code is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_CODE_INVALID";
    }
}
exports.PhoneCodeInvalidError = PhoneCodeInvalidError;
/** An invalid or expired `phone_code_hash` was provided. */
class PhoneHashExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An invalid or expired `phone_code_hash` was provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_HASH_EXPIRED";
    }
}
exports.PhoneHashExpiredError = PhoneHashExpiredError;
/** No user is associated to the specified phone number. */
class PhoneNotOccupiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No user is associated to the specified phone number." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_NOT_OCCUPIED";
    }
}
exports.PhoneNotOccupiedError = PhoneNotOccupiedError;
/** You can't sign up using this app. */
class PhoneNumberAppSignupForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't sign up using this app." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_NUMBER_APP_SIGNUP_FORBIDDEN";
    }
}
exports.PhoneNumberAppSignupForbiddenError = PhoneNumberAppSignupForbiddenError;
/** The provided phone number is banned from telegram. */
class PhoneNumberBannedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided phone number is banned from telegram." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_NUMBER_BANNED";
    }
}
exports.PhoneNumberBannedError = PhoneNumberBannedError;
/** You asked for the code too many times. */
class PhoneNumberFloodError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You asked for the code too many times." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_NUMBER_FLOOD";
    }
}
exports.PhoneNumberFloodError = PhoneNumberFloodError;
/** The phone number is invalid. */
class PhoneNumberInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The phone number is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_NUMBER_INVALID";
    }
}
exports.PhoneNumberInvalidError = PhoneNumberInvalidError;
/** The phone number is already in use. */
class PhoneNumberOccupiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The phone number is already in use." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_NUMBER_OCCUPIED";
    }
}
exports.PhoneNumberOccupiedError = PhoneNumberOccupiedError;
/** The phone number is not yet being used. */
class PhoneNumberUnoccupiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The phone number is not yet being used." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_NUMBER_UNOCCUPIED";
    }
}
exports.PhoneNumberUnoccupiedError = PhoneNumberUnoccupiedError;
/** This phone is password protected. */
class PhonePasswordProtectedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This phone is password protected." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_PASSWORD_PROTECTED";
    }
}
exports.PhonePasswordProtectedError = PhonePasswordProtectedError;
/** Photo mime-type invalid. */
class PhotoContentTypeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Photo mime-type invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_CONTENT_TYPE_INVALID";
    }
}
exports.PhotoContentTypeInvalidError = PhotoContentTypeInvalidError;
/** Photo URL invalid. */
class PhotoContentUrlEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Photo URL invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_CONTENT_URL_EMPTY";
    }
}
exports.PhotoContentUrlEmptyError = PhotoContentUrlEmptyError;
/** Photo crop file missing. */
class PhotoCropFileMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Photo crop file missing." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_CROP_FILE_MISSING";
    }
}
exports.PhotoCropFileMissingError = PhotoCropFileMissingError;
/** Photo is too small. */
class PhotoCropSizeSmallError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Photo is too small." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_CROP_SIZE_SMALL";
    }
}
exports.PhotoCropSizeSmallError = PhotoCropSizeSmallError;
/** The extension of the photo is invalid. */
class PhotoExtInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The extension of the photo is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_EXT_INVALID";
    }
}
exports.PhotoExtInvalidError = PhotoExtInvalidError;
/** Profile photo file missing. */
class PhotoFileMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Profile photo file missing." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_FILE_MISSING";
    }
}
exports.PhotoFileMissingError = PhotoFileMissingError;
/** Photo ID invalid. */
class PhotoIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Photo ID invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_ID_INVALID";
    }
}
exports.PhotoIdInvalidError = PhotoIdInvalidError;
/** Photo invalid. */
class PhotoInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Photo invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_INVALID";
    }
}
exports.PhotoInvalidError = PhotoInvalidError;
/** The photo dimensions are invalid. */
class PhotoInvalidDimensionsError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The photo dimensions are invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_INVALID_DIMENSIONS";
    }
}
exports.PhotoInvalidDimensionsError = PhotoInvalidDimensionsError;
/** Internal issues, try again later. */
class PhotoSaveFileInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Internal issues, try again later." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_SAVE_FILE_INVALID";
    }
}
exports.PhotoSaveFileInvalidError = PhotoSaveFileInvalidError;
/** Photo thumbnail URL is empty. */
class PhotoThumbUrlEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Photo thumbnail URL is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHOTO_THUMB_URL_EMPTY";
    }
}
exports.PhotoThumbUrlEmptyError = PhotoThumbUrlEmptyError;
/** You can't pin messages. */
class PinRestrictedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't pin messages." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PIN_RESTRICTED";
    }
}
exports.PinRestrictedError = PinRestrictedError;
/** Too many pinned dialogs. */
class PinnedDialogsTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Too many pinned dialogs." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PINNED_DIALOGS_TOO_MUCH";
    }
}
exports.PinnedDialogsTooMuchError = PinnedDialogsTooMuchError;
/** There are too many pinned topics, unpin some first. */
class PinnedTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "There are too many pinned topics, unpin some first." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PINNED_TOO_MUCH";
    }
}
exports.PinnedTooMuchError = PinnedTooMuchError;
/** One of the poll answers is not acceptable. */
class PollAnswerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "One of the poll answers is not acceptable." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "POLL_ANSWER_INVALID";
    }
}
exports.PollAnswerInvalidError = PollAnswerInvalidError;
/** Invalid poll answers were provided. */
class PollAnswersInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid poll answers were provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "POLL_ANSWERS_INVALID";
    }
}
exports.PollAnswersInvalidError = PollAnswersInvalidError;
/** Duplicate poll options provided. */
class PollOptionDuplicateError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Duplicate poll options provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "POLL_OPTION_DUPLICATE";
    }
}
exports.PollOptionDuplicateError = PollOptionDuplicateError;
/** Invalid poll option provided. */
class PollOptionInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid poll option provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "POLL_OPTION_INVALID";
    }
}
exports.PollOptionInvalidError = PollOptionInvalidError;
/** One of the poll questions is not acceptable. */
class PollQuestionInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "One of the poll questions is not acceptable." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "POLL_QUESTION_INVALID";
    }
}
exports.PollQuestionInvalidError = PollQuestionInvalidError;
/** A premium account is required to execute this action. */
class PremiumAccountRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A premium account is required to execute this action." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PREMIUM_ACCOUNT_REQUIRED";
    }
}
exports.PremiumAccountRequiredError = PremiumAccountRequiredError;
/** The pricing for the [subscription](https://core.telegram.org/api/subscriptions) is invalid, the maximum price is specified in the [`stars_subscription_amount_max` config key &raquo;](https://core.telegram.org/api/config#stars-subscription-amount-max). */
class PricingChatInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The pricing for the [subscription](https://core.telegram.org/api/subscriptions) is invalid, the maximum price is specified in the [`stars_subscription_amount_max` config key &raquo;](https://core.telegram.org/api/config#stars-subscription-amount-max)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PRICING_CHAT_INVALID";
    }
}
exports.PricingChatInvalidError = PricingChatInvalidError;
/** The privacy key is invalid. */
class PrivacyKeyInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The privacy key is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PRIVACY_KEY_INVALID";
    }
}
exports.PrivacyKeyInvalidError = PrivacyKeyInvalidError;
/** Too many privacy rules were specified, the current limit is 1000. */
class PrivacyTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Too many privacy rules were specified, the current limit is 1000." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PRIVACY_TOO_LONG";
    }
}
exports.PrivacyTooLongError = PrivacyTooLongError;
/** The specified privacy rule combination is invalid. */
class PrivacyValueInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified privacy rule combination is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PRIVACY_VALUE_INVALID";
    }
}
exports.PrivacyValueInvalidError = PrivacyValueInvalidError;
/** A public key is required. */
class PublicKeyRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A public key is required." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PUBLIC_KEY_REQUIRED";
    }
}
exports.PublicKeyRequiredError = PublicKeyRequiredError;
/** The specified payment purpose is invalid. */
class PurposeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified payment purpose is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PURPOSE_INVALID";
    }
}
exports.PurposeInvalidError = PurposeInvalidError;
/** The query ID is empty. */
class QueryIdEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The query ID is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUERY_ID_EMPTY";
    }
}
exports.QueryIdEmptyError = QueryIdEmptyError;
/** The query ID is invalid. */
class QueryIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The query ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUERY_ID_INVALID";
    }
}
exports.QueryIdInvalidError = QueryIdInvalidError;
/** The query string is too short. */
class QueryTooShortError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The query string is too short." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUERY_TOO_SHORT";
    }
}
exports.QueryTooShortError = QueryTooShortError;
/** [Quick replies](https://core.telegram.org/api/business#quick-reply-shortcuts) cannot be used by bots. */
class QuickRepliesBotNotAllowedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "[Quick replies](https://core.telegram.org/api/business#quick-reply-shortcuts) cannot be used by bots." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUICK_REPLIES_BOT_NOT_ALLOWED";
    }
}
exports.QuickRepliesBotNotAllowedError = QuickRepliesBotNotAllowedError;
/** A maximum of [appConfig.`quick_replies_limit`](https://core.telegram.org/api/config#quick-replies-limit) shortcuts may be created, the limit was reached. */
class QuickRepliesTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A maximum of [appConfig.`quick_replies_limit`](https://core.telegram.org/api/config#quick-replies-limit) shortcuts may be created, the limit was reached." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUICK_REPLIES_TOO_MUCH";
    }
}
exports.QuickRepliesTooMuchError = QuickRepliesTooMuchError;
/** You can forward a quiz while hiding the original author only after choosing an option in the quiz. */
class QuizAnswerMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can forward a quiz while hiding the original author only after choosing an option in the quiz." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUIZ_ANSWER_MISSING";
    }
}
exports.QuizAnswerMissingError = QuizAnswerMissingError;
/** An invalid value was provided to the correct_answers field. */
class QuizCorrectAnswerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An invalid value was provided to the correct_answers field." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUIZ_CORRECT_ANSWER_INVALID";
    }
}
exports.QuizCorrectAnswerInvalidError = QuizCorrectAnswerInvalidError;
/** No correct quiz answer was specified. */
class QuizCorrectAnswersEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No correct quiz answer was specified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUIZ_CORRECT_ANSWERS_EMPTY";
    }
}
exports.QuizCorrectAnswersEmptyError = QuizCorrectAnswersEmptyError;
/** You specified too many correct answers in a quiz, quizzes can only have one right answer! */
class QuizCorrectAnswersTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You specified too many correct answers in a quiz, quizzes can only have one right answer!" + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUIZ_CORRECT_ANSWERS_TOO_MUCH";
    }
}
exports.QuizCorrectAnswersTooMuchError = QuizCorrectAnswersTooMuchError;
/** Quizzes can't have the multiple_choice flag set! */
class QuizMultipleInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Quizzes can't have the multiple_choice flag set!" + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUIZ_MULTIPLE_INVALID";
    }
}
exports.QuizMultipleInvalidError = QuizMultipleInvalidError;
/** The specified `reply_to`.`quote_text` field is invalid. */
class QuoteTextInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `reply_to`.`quote_text` field is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "QUOTE_TEXT_INVALID";
    }
}
exports.QuoteTextInvalidError = QuoteTextInvalidError;
/** You cannot raise your hand. */
class RaiseHandForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You cannot raise your hand." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RAISE_HAND_FORBIDDEN";
    }
}
exports.RaiseHandForbiddenError = RaiseHandForbiddenError;
/** Random ID empty. */
class RandomIdEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Random ID empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RANDOM_ID_EMPTY";
    }
}
exports.RandomIdEmptyError = RandomIdEmptyError;
/** The specified `random_id` was expired (most likely it didn't follow the required `uint64_t random_id = (time() << 32) | ((uint64_t)random_uint32_t())` format, or the specified time is too far in the past). */
class RandomIdExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `random_id` was expired (most likely it didn't follow the required `uint64_t random_id = (time() << 32) | ((uint64_t)random_uint32_t())` format, or the specified time is too far in the past)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RANDOM_ID_EXPIRED";
    }
}
exports.RandomIdExpiredError = RandomIdExpiredError;
/** A provided random ID is invalid. */
class RandomIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A provided random ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RANDOM_ID_INVALID";
    }
}
exports.RandomIdInvalidError = RandomIdInvalidError;
/** Random length invalid. */
class RandomLengthInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Random length invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RANDOM_LENGTH_INVALID";
    }
}
exports.RandomLengthInvalidError = RandomLengthInvalidError;
/** Invalid range provided. */
class RangesInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid range provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RANGES_INVALID";
    }
}
exports.RangesInvalidError = RangesInvalidError;
/** Empty reaction provided. */
class ReactionEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Empty reaction provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REACTION_EMPTY";
    }
}
exports.ReactionEmptyError = ReactionEmptyError;
/** The specified reaction is invalid. */
class ReactionInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified reaction is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REACTION_INVALID";
    }
}
exports.ReactionInvalidError = ReactionInvalidError;
/** The specified number of reactions is invalid. */
class ReactionsCountInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified number of reactions is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REACTIONS_COUNT_INVALID";
    }
}
exports.ReactionsCountInvalidError = ReactionsCountInvalidError;
/** The message already has exactly `reactions_uniq_max` reaction emojis, you can't react with a new emoji, see [the docs for more info &raquo;](https://core.telegram.org/api/config#client-configuration). */
class ReactionsTooManyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The message already has exactly `reactions_uniq_max` reaction emojis, you can't react with a new emoji, see [the docs for more info &raquo;](https://core.telegram.org/api/config#client-configuration)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REACTIONS_TOO_MANY";
    }
}
exports.ReactionsTooManyError = ReactionsTooManyError;
/** The specified receipt is empty. */
class ReceiptEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified receipt is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RECEIPT_EMPTY";
    }
}
exports.ReceiptEmptyError = ReceiptEmptyError;
/** Reply markup for buy button empty. */
class ReplyMarkupBuyEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Reply markup for buy button empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REPLY_MARKUP_BUY_EMPTY";
    }
}
exports.ReplyMarkupBuyEmptyError = ReplyMarkupBuyEmptyError;
/** A game message is being edited, but the newly provided keyboard doesn't have a keyboardButtonGame button. */
class ReplyMarkupGameEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A game message is being edited, but the newly provided keyboard doesn't have a keyboardButtonGame button." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REPLY_MARKUP_GAME_EMPTY";
    }
}
exports.ReplyMarkupGameEmptyError = ReplyMarkupGameEmptyError;
/** The provided reply markup is invalid. */
class ReplyMarkupInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided reply markup is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REPLY_MARKUP_INVALID";
    }
}
exports.ReplyMarkupInvalidError = ReplyMarkupInvalidError;
/** The specified reply_markup is too long. */
class ReplyMarkupTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified reply_markup is too long." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REPLY_MARKUP_TOO_LONG";
    }
}
exports.ReplyMarkupTooLongError = ReplyMarkupTooLongError;
/** The specified reply-to message ID is invalid. */
class ReplyMessageIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified reply-to message ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REPLY_MESSAGE_ID_INVALID";
    }
}
exports.ReplyMessageIdInvalidError = ReplyMessageIdInvalidError;
/** Each shortcut can contain a maximum of [appConfig.`quick_reply_messages_limit`](https://core.telegram.org/api/config#quick-reply-messages-limit) messages, the limit was reached. */
class ReplyMessagesTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Each shortcut can contain a maximum of [appConfig.`quick_reply_messages_limit`](https://core.telegram.org/api/config#quick-reply-messages-limit) messages, the limit was reached." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REPLY_MESSAGES_TOO_MUCH";
    }
}
exports.ReplyMessagesTooMuchError = ReplyMessagesTooMuchError;
/** The specified `reply_to` field is invalid. */
class ReplyToInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `reply_to` field is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REPLY_TO_INVALID";
    }
}
exports.ReplyToInvalidError = ReplyToInvalidError;
/** The specified inputReplyToMonoForum.monoforum_peer_id is invalid. */
class ReplyToMonoforumPeerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified inputReplyToMonoForum.monoforum_peer_id is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REPLY_TO_MONOFORUM_PEER_INVALID";
    }
}
exports.ReplyToMonoforumPeerInvalidError = ReplyToMonoforumPeerInvalidError;
/** The replied-to user is invalid. */
class ReplyToUserInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The replied-to user is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REPLY_TO_USER_INVALID";
    }
}
exports.ReplyToUserInvalidError = ReplyToUserInvalidError;
/** The master DC did not accept the `request_token` from the CDN DC. Continue downloading the file from the master DC using upload.getFile. */
class RequestTokenInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The master DC did not accept the `request_token` from the CDN DC. Continue downloading the file from the master DC using upload.getFile." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REQUEST_TOKEN_INVALID";
    }
}
exports.RequestTokenInvalidError = RequestTokenInvalidError;
/** No password reset is in progress. */
class ResetRequestMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No password reset is in progress." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RESET_REQUEST_MISSING";
    }
}
exports.ResetRequestMissingError = ResetRequestMissingError;
/** You provided a duplicate result ID. */
class ResultIdDuplicateError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You provided a duplicate result ID." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RESULT_ID_DUPLICATE";
    }
}
exports.ResultIdDuplicateError = ResultIdDuplicateError;
/** Result ID empty. */
class ResultIdEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Result ID empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RESULT_ID_EMPTY";
    }
}
exports.ResultIdEmptyError = ResultIdEmptyError;
/** One of the specified result IDs is invalid. */
class ResultIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "One of the specified result IDs is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RESULT_ID_INVALID";
    }
}
exports.ResultIdInvalidError = ResultIdInvalidError;
/** Result type invalid. */
class ResultTypeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Result type invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RESULT_TYPE_INVALID";
    }
}
exports.ResultTypeInvalidError = ResultTypeInvalidError;
/** Too many results were provided. */
class ResultsTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Too many results were provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RESULTS_TOO_MUCH";
    }
}
exports.ResultsTooMuchError = ResultsTooMuchError;
/** You cannot change your vote. */
class RevoteNotAllowedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You cannot change your vote." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "REVOTE_NOT_ALLOWED";
    }
}
exports.RevoteNotAllowedError = RevoteNotAllowedError;
/** The new admin rights are equal to the old rights, no change was made. */
class RightsNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The new admin rights are equal to the old rights, no change was made." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RIGHTS_NOT_MODIFIED";
    }
}
exports.RightsNotModifiedError = RightsNotModifiedError;
/** The specified ringtone is invalid. */
class RingtoneInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified ringtone is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RINGTONE_INVALID";
    }
}
exports.RingtoneInvalidError = RingtoneInvalidError;
/** The MIME type for the ringtone is invalid. */
class RingtoneMimeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The MIME type for the ringtone is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RINGTONE_MIME_INVALID";
    }
}
exports.RingtoneMimeInvalidError = RingtoneMimeInvalidError;
/** Internal RSA decryption failed. */
class RsaDecryptFailedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Internal RSA decryption failed." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RSA_DECRYPT_FAILED";
    }
}
exports.RsaDecryptFailedError = RsaDecryptFailedError;
/** The passed inputSavedStarGiftChat.saved_id is empty. */
class SavedIdEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The passed inputSavedStarGiftChat.saved_id is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SAVED_ID_EMPTY";
    }
}
exports.SavedIdEmptyError = SavedIdEmptyError;
/** Bots cannot schedule messages. */
class ScheduleBotNotAllowedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Bots cannot schedule messages." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SCHEDULE_BOT_NOT_ALLOWED";
    }
}
exports.ScheduleBotNotAllowedError = ScheduleBotNotAllowedError;
/** Invalid schedule date provided. */
class ScheduleDateInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid schedule date provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SCHEDULE_DATE_INVALID";
    }
}
exports.ScheduleDateInvalidError = ScheduleDateInvalidError;
/** You can't schedule a message this far in the future. */
class ScheduleDateTooLateError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't schedule a message this far in the future." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SCHEDULE_DATE_TOO_LATE";
    }
}
exports.ScheduleDateTooLateError = ScheduleDateTooLateError;
/** Can't schedule until user is online, if the user's last seen timestamp is hidden by their privacy settings. */
class ScheduleStatusPrivateError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Can't schedule until user is online, if the user's last seen timestamp is hidden by their privacy settings." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SCHEDULE_STATUS_PRIVATE";
    }
}
exports.ScheduleStatusPrivateError = ScheduleStatusPrivateError;
/** There are too many scheduled messages. */
class ScheduleTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "There are too many scheduled messages." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SCHEDULE_TOO_MUCH";
    }
}
exports.ScheduleTooMuchError = ScheduleTooMuchError;
/** The specified game score is invalid. */
class ScoreInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified game score is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SCORE_INVALID";
    }
}
exports.ScoreInvalidError = ScoreInvalidError;
/** The search query is empty. */
class SearchQueryEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The search query is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SEARCH_QUERY_EMPTY";
    }
}
exports.SearchQueryEmptyError = SearchQueryEmptyError;
/** You cannot provide a search query and an invite link at the same time. */
class SearchWithLinkNotSupportedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You cannot provide a search query and an invite link at the same time." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SEARCH_WITH_LINK_NOT_SUPPORTED";
    }
}
exports.SearchWithLinkNotSupportedError = SearchWithLinkNotSupportedError;
/** Invalid duration provided. */
class SecondsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid duration provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SECONDS_INVALID";
    }
}
exports.SecondsInvalidError = SecondsInvalidError;
/** A secure secret is required. */
class SecureSecretRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A secure secret is required." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SECURE_SECRET_REQUIRED";
    }
}
exports.SecureSecretRequiredError = SecureSecretRequiredError;
/** Business bots can't delete messages just for the user, `revoke` **must** be set. */
class SelfDeleteRestrictedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Business bots can't delete messages just for the user, `revoke` **must** be set." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SELF_DELETE_RESTRICTED";
    }
}
exports.SelfDeleteRestrictedError = SelfDeleteRestrictedError;
/** You can't send messages as the specified peer. */
class SendAsPeerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't send messages as the specified peer." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SEND_AS_PEER_INVALID";
    }
}
exports.SendAsPeerInvalidError = SendAsPeerInvalidError;
/** An inputBotInlineMessageGame can only be contained in an inputBotInlineResultGame, not in an inputBotInlineResult/inputBotInlineResultPhoto/etc. */
class SendMessageGameInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An inputBotInlineMessageGame can only be contained in an inputBotInlineResultGame, not in an inputBotInlineResult/inputBotInlineResultPhoto/etc." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SEND_MESSAGE_GAME_INVALID";
    }
}
exports.SendMessageGameInvalidError = SendMessageGameInvalidError;
/** Invalid media provided. */
class SendMessageMediaInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid media provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SEND_MESSAGE_MEDIA_INVALID";
    }
}
exports.SendMessageMediaInvalidError = SendMessageMediaInvalidError;
/** The message type is invalid. */
class SendMessageTypeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The message type is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SEND_MESSAGE_TYPE_INVALID";
    }
}
exports.SendMessageTypeInvalidError = SendMessageTypeInvalidError;
/** This session was created less than 24 hours ago, try again in %d seconds. */
class SessionTooFreshError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "This session was created less than 24 hours ago, try again in " + value + " seconds." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.SessionTooFreshError = SessionTooFreshError;
/** Invalid settings were provided. */
class SettingsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid settings were provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SETTINGS_INVALID";
    }
}
exports.SettingsInvalidError = SettingsInvalidError;
/** The provided SHA256 hash is invalid. */
class Sha256HashInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided SHA256 hash is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SHA256_HASH_INVALID";
    }
}
exports.Sha256HashInvalidError = Sha256HashInvalidError;
/** The specified short name is invalid. */
class ShortNameInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified short name is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SHORT_NAME_INVALID";
    }
}
exports.ShortNameInvalidError = ShortNameInvalidError;
/** The specified short name is already in use. */
class ShortNameOccupiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified short name is already in use." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SHORT_NAME_OCCUPIED";
    }
}
exports.ShortNameOccupiedError = ShortNameOccupiedError;
/** The specified shortcut is invalid. */
class ShortcutInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified shortcut is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SHORTCUT_INVALID";
    }
}
exports.ShortcutInvalidError = ShortcutInvalidError;
/** The specified slot list is empty. */
class SlotsEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified slot list is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SLOTS_EMPTY";
    }
}
exports.SlotsEmptyError = SlotsEmptyError;
/** Slowmode is enabled, you cannot forward multiple messages to this group. */
class SlowmodeMultiMsgsDisabledError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Slowmode is enabled, you cannot forward multiple messages to this group." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SLOWMODE_MULTI_MSGS_DISABLED";
    }
}
exports.SlowmodeMultiMsgsDisabledError = SlowmodeMultiMsgsDisabledError;
/** The specified invoice slug is invalid. */
class SlugInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified invoice slug is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SLUG_INVALID";
    }
}
exports.SlugInvalidError = SlugInvalidError;
/** An error occurred while creating the SMS code. */
class SmsCodeCreateFailedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An error occurred while creating the SMS code." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SMS_CODE_CREATE_FAILED";
    }
}
exports.SmsCodeCreateFailedError = SmsCodeCreateFailedError;
/** The specified job ID is invalid. */
class SmsjobIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified job ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SMSJOB_ID_INVALID";
    }
}
exports.SmsjobIdInvalidError = SmsjobIdInvalidError;
/** The specified inputCheckPasswordSRP.A value is invalid. */
class SrpAInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified inputCheckPasswordSRP.A value is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SRP_A_INVALID";
    }
}
exports.SrpAInvalidError = SrpAInvalidError;
/** Invalid SRP ID provided. */
class SrpIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid SRP ID provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SRP_ID_INVALID";
    }
}
exports.SrpIdInvalidError = SrpIdInvalidError;
/** Password has changed. */
class SrpPasswordChangedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Password has changed." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SRP_PASSWORD_CHANGED";
    }
}
exports.SrpPasswordChangedError = SrpPasswordChangedError;
/** The specified star gift was already converted to Stars. */
class StargiftAlreadyConvertedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified star gift was already converted to Stars." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_ALREADY_CONVERTED";
    }
}
exports.StargiftAlreadyConvertedError = StargiftAlreadyConvertedError;
/** The specified star gift was already refunded. */
class StargiftAlreadyRefundedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified star gift was already refunded." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_ALREADY_REFUNDED";
    }
}
exports.StargiftAlreadyRefundedError = StargiftAlreadyRefundedError;
/** The specified gift was already upgraded to a collectible gift. */
class StargiftAlreadyUpgradedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified gift was already upgraded to a collectible gift." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_ALREADY_UPGRADED";
    }
}
exports.StargiftAlreadyUpgradedError = StargiftAlreadyUpgradedError;
/** The passed gift is invalid. */
class StargiftInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The passed gift is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_INVALID";
    }
}
exports.StargiftInvalidError = StargiftInvalidError;
/** The specified gift was not found. */
class StargiftNotFoundError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified gift was not found." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_NOT_FOUND";
    }
}
exports.StargiftNotFoundError = StargiftNotFoundError;
/** You cannot transfer or sell a gift owned by another user. */
class StargiftOwnerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You cannot transfer or sell a gift owned by another user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_OWNER_INVALID";
    }
}
exports.StargiftOwnerInvalidError = StargiftOwnerInvalidError;
/** The specified inputSavedStarGiftChat.peer is invalid. */
class StargiftPeerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified inputSavedStarGiftChat.peer is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_PEER_INVALID";
    }
}
exports.StargiftPeerInvalidError = StargiftPeerInvalidError;
/** You can't buy the gift using the specified currency (i.e. trying to pay in Stars for TON gifts). */
class StargiftResellCurrencyNotAllowedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You can't buy the gift using the specified currency (i.e. trying to pay in Stars for TON gifts)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_RESELL_CURRENCY_NOT_ALLOWED";
    }
}
exports.StargiftResellCurrencyNotAllowedError = StargiftResellCurrencyNotAllowedError;
/** The specified gift slug is invalid. */
class StargiftSlugInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified gift slug is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_SLUG_INVALID";
    }
}
exports.StargiftSlugInvalidError = StargiftSlugInvalidError;
/** You cannot transfer this gift yet, wait %d seconds. */
class StargiftTransferTooEarlyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "You cannot transfer this gift yet, wait " + value + " seconds." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.StargiftTransferTooEarlyError = StargiftTransferTooEarlyError;
/** A received gift can only be upgraded to a collectible gift if the [messageActionStarGift](https://core.telegram.org/constructor/messageActionStarGift)/[savedStarGift](https://core.telegram.org/constructor/savedStarGift).`can_upgrade` flag is set. */
class StargiftUpgradeUnavailableError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A received gift can only be upgraded to a collectible gift if the [messageActionStarGift](https://core.telegram.org/constructor/messageActionStarGift)/[savedStarGift](https://core.telegram.org/constructor/savedStarGift).`can_upgrade` flag is set." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_UPGRADE_UNAVAILABLE";
    }
}
exports.StargiftUpgradeUnavailableError = StargiftUpgradeUnavailableError;
/** The gift is sold out. */
class StargiftUsageLimitedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The gift is sold out." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_USAGE_LIMITED";
    }
}
exports.StargiftUsageLimitedError = StargiftUsageLimitedError;
/** You've reached the starGift.limited_per_user limit, you can't buy any more gifts of this type. */
class StargiftUserUsageLimitedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You've reached the starGift.limited_per_user limit, you can't buy any more gifts of this type." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_USER_USAGE_LIMITED";
    }
}
exports.StargiftUserUsageLimitedError = StargiftUserUsageLimitedError;
/** The previous referral program was terminated less than 24 hours ago: further changes can be made after the date specified in userFull.starref_program.end_date. */
class StarrefAwaitingEndError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The previous referral program was terminated less than 24 hours ago: further changes can be made after the date specified in userFull.starref_program.end_date." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARREF_AWAITING_END";
    }
}
exports.StarrefAwaitingEndError = StarrefAwaitingEndError;
/** The specified referral link is invalid. */
class StarrefExpiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified referral link is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARREF_EXPIRED";
    }
}
exports.StarrefExpiredError = StarrefExpiredError;
/** The specified affiliate link was already revoked. */
class StarrefHashRevokedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified affiliate link was already revoked." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARREF_HASH_REVOKED";
    }
}
exports.StarrefHashRevokedError = StarrefHashRevokedError;
/** The specified commission_permille is invalid: the minimum and maximum values for this parameter are contained in the [starref_min_commission_permille](https://core.telegram.org/api/config#starref-min-commission-permille) and [starref_max_commission_permille](https://core.telegram.org/api/config#starref-max-commission-permille) client configuration parameters. */
class StarrefPermilleInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified commission_permille is invalid: the minimum and maximum values for this parameter are contained in the [starref_min_commission_permille](https://core.telegram.org/api/config#starref-min-commission-permille) and [starref_max_commission_permille](https://core.telegram.org/api/config#starref-max-commission-permille) client configuration parameters." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARREF_PERMILLE_INVALID";
    }
}
exports.StarrefPermilleInvalidError = StarrefPermilleInvalidError;
/** The specified commission_permille is too low: the minimum and maximum values for this parameter are contained in the [starref_min_commission_permille](https://core.telegram.org/api/config#starref-min-commission-permille) and [starref_max_commission_permille](https://core.telegram.org/api/config#starref-max-commission-permille) client configuration parameters. */
class StarrefPermilleTooLowError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified commission_permille is too low: the minimum and maximum values for this parameter are contained in the [starref_min_commission_permille](https://core.telegram.org/api/config#starref-min-commission-permille) and [starref_max_commission_permille](https://core.telegram.org/api/config#starref-max-commission-permille) client configuration parameters." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARREF_PERMILLE_TOO_LOW";
    }
}
exports.StarrefPermilleTooLowError = StarrefPermilleTooLowError;
/** The specified amount in stars is invalid. */
class StarsAmountInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified amount in stars is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARS_AMOUNT_INVALID";
    }
}
exports.StarsAmountInvalidError = StarsAmountInvalidError;
/** The specified Telegram Star invoice is invalid. */
class StarsInvoiceInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified Telegram Star invoice is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARS_INVOICE_INVALID";
    }
}
exports.StarsInvoiceInvalidError = StarsInvoiceInvalidError;
/** To import this chat invite link, you must first [pay for the associated Telegram Star subscription &raquo;](https://core.telegram.org/api/subscriptions#channel-subscriptions). */
class StarsPaymentRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "To import this chat invite link, you must first [pay for the associated Telegram Star subscription &raquo;](https://core.telegram.org/api/subscriptions#channel-subscriptions)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARS_PAYMENT_REQUIRED";
    }
}
exports.StarsPaymentRequiredError = StarsPaymentRequiredError;
/** The start parameter is empty. */
class StartParamEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The start parameter is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "START_PARAM_EMPTY";
    }
}
exports.StartParamEmptyError = StartParamEmptyError;
/** Start parameter invalid. */
class StartParamInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Start parameter invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "START_PARAM_INVALID";
    }
}
exports.StartParamInvalidError = StartParamInvalidError;
/** Start parameter is too long. */
class StartParamTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Start parameter is too long." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "START_PARAM_TOO_LONG";
    }
}
exports.StartParamTooLongError = StartParamTooLongError;
/** The specified sticker document is invalid. */
class StickerDocumentInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified sticker document is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_DOCUMENT_INVALID";
    }
}
exports.StickerDocumentInvalidError = StickerDocumentInvalidError;
/** Sticker emoji invalid. */
class StickerEmojiInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Sticker emoji invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_EMOJI_INVALID";
    }
}
exports.StickerEmojiInvalidError = StickerEmojiInvalidError;
/** Sticker file invalid. */
class StickerFileInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Sticker file invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_FILE_INVALID";
    }
}
exports.StickerFileInvalidError = StickerFileInvalidError;
/** The specified video sticker has invalid dimensions. */
class StickerGifDimensionsError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified video sticker has invalid dimensions." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_GIF_DIMENSIONS";
    }
}
exports.StickerGifDimensionsError = StickerGifDimensionsError;
/** The provided sticker ID is invalid. */
class StickerIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided sticker ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_ID_INVALID";
    }
}
exports.StickerIdInvalidError = StickerIdInvalidError;
/** The provided sticker is invalid. */
class StickerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided sticker is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_INVALID";
    }
}
exports.StickerInvalidError = StickerInvalidError;
/** The specified sticker MIME type is invalid. */
class StickerMimeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified sticker MIME type is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_MIME_INVALID";
    }
}
exports.StickerMimeInvalidError = StickerMimeInvalidError;
/** Sticker png dimensions invalid. */
class StickerPngDimensionsError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Sticker png dimensions invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_PNG_DIMENSIONS";
    }
}
exports.StickerPngDimensionsError = StickerPngDimensionsError;
/** One of the specified stickers is not a valid PNG file. */
class StickerPngNopngError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "One of the specified stickers is not a valid PNG file." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_PNG_NOPNG";
    }
}
exports.StickerPngNopngError = StickerPngNopngError;
/** You must send the animated sticker as a document. */
class StickerTgsNodocError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You must send the animated sticker as a document." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_TGS_NODOC";
    }
}
exports.StickerTgsNodocError = StickerTgsNodocError;
/** Invalid TGS sticker provided. */
class StickerTgsNotgsError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid TGS sticker provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_TGS_NOTGS";
    }
}
exports.StickerTgsNotgsError = StickerTgsNotgsError;
/** Incorrect stickerset thumb file provided, PNG / WEBP expected. */
class StickerThumbPngNopngError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Incorrect stickerset thumb file provided, PNG / WEBP expected." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_THUMB_PNG_NOPNG";
    }
}
exports.StickerThumbPngNopngError = StickerThumbPngNopngError;
/** Incorrect stickerset TGS thumb file provided. */
class StickerThumbTgsNotgsError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Incorrect stickerset TGS thumb file provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_THUMB_TGS_NOTGS";
    }
}
exports.StickerThumbTgsNotgsError = StickerThumbTgsNotgsError;
/** The specified video sticker is too big. */
class StickerVideoBigError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified video sticker is too big." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_VIDEO_BIG";
    }
}
exports.StickerVideoBigError = StickerVideoBigError;
/** You must send the video sticker as a document. */
class StickerVideoNodocError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You must send the video sticker as a document." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_VIDEO_NODOC";
    }
}
exports.StickerVideoNodocError = StickerVideoNodocError;
/** The specified video sticker is not in webm format. */
class StickerVideoNowebmError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified video sticker is not in webm format." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKER_VIDEO_NOWEBM";
    }
}
exports.StickerVideoNowebmError = StickerVideoNowebmError;
/** There are too many stickers in this stickerpack, you can't add any more. */
class StickerpackStickersTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "There are too many stickers in this stickerpack, you can't add any more." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKERPACK_STICKERS_TOO_MUCH";
    }
}
exports.StickerpackStickersTooMuchError = StickerpackStickersTooMuchError;
/** No sticker provided. */
class StickersEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No sticker provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKERS_EMPTY";
    }
}
exports.StickersEmptyError = StickersEmptyError;
/** There are too many stickers in this stickerpack, you can't add any more. */
class StickersTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "There are too many stickers in this stickerpack, you can't add any more." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKERS_TOO_MUCH";
    }
}
exports.StickersTooMuchError = StickersTooMuchError;
/** The provided sticker set is invalid. */
class StickersetInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided sticker set is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKERSET_INVALID";
    }
}
exports.StickersetInvalidError = StickersetInvalidError;
/** This peer hasn't ever posted any stories. */
class StoriesNeverCreatedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This peer hasn't ever posted any stories." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STORIES_NEVER_CREATED";
    }
}
exports.StoriesNeverCreatedError = StoriesNeverCreatedError;
/** You have hit the maximum active stories limit as specified by the [`story_expiring_limit_*` client configuration parameters](https://core.telegram.org/api/config#story-expiring-limit-default): you should buy a [Premium](https://core.telegram.org/api/premium) subscription, delete an active story, or wait for the oldest story to expire. */
class StoriesTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You have hit the maximum active stories limit as specified by the [`story_expiring_limit_*` client configuration parameters](https://core.telegram.org/api/config#story-expiring-limit-default): you should buy a [Premium](https://core.telegram.org/api/premium) subscription, delete an active story, or wait for the oldest story to expire." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STORIES_TOO_MUCH";
    }
}
exports.StoriesTooMuchError = StoriesTooMuchError;
/** You specified no story IDs. */
class StoryIdEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You specified no story IDs." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STORY_ID_EMPTY";
    }
}
exports.StoryIdEmptyError = StoryIdEmptyError;
/** The specified story ID is invalid. */
class StoryIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified story ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STORY_ID_INVALID";
    }
}
exports.StoryIdInvalidError = StoryIdInvalidError;
/** The new story information you passed is equal to the previous story information, thus it wasn't modified. */
class StoryNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The new story information you passed is equal to the previous story information, thus it wasn't modified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STORY_NOT_MODIFIED";
    }
}
exports.StoryNotModifiedError = StoryNotModifiedError;
/** The specified story period is invalid for this account. */
class StoryPeriodInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified story period is invalid for this account." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STORY_PERIOD_INVALID";
    }
}
exports.StoryPeriodInvalidError = StoryPeriodInvalidError;
/** You've hit the monthly story limit as specified by the [`stories_sent_monthly_limit_*` client configuration parameters](https://core.telegram.org/api/config#stories-sent-monthly-limit-default): wait %d seconds before posting a new story. */
class StorySendFloodMonthlyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "You've hit the monthly story limit as specified by the [`stories_sent_monthly_limit_*` client configuration parameters](https://core.telegram.org/api/config#stories-sent-monthly-limit-default): wait " + value + " seconds before posting a new story." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.StorySendFloodMonthlyError = StorySendFloodMonthlyError;
/** You've hit the weekly story limit as specified by the [`stories_sent_weekly_limit_*` client configuration parameters](https://core.telegram.org/api/config#stories-sent-weekly-limit-default): wait for %d seconds before posting a new story. */
class StorySendFloodWeeklyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "You've hit the weekly story limit as specified by the [`stories_sent_weekly_limit_*` client configuration parameters](https://core.telegram.org/api/config#stories-sent-weekly-limit-default): wait for " + value + " seconds before posting a new story." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.StorySendFloodWeeklyError = StorySendFloodWeeklyError;
/** You cannot send a [bot subscription invoice](https://core.telegram.org/api/subscriptions#bot-subscriptions) directly, you may only create invoice links using [payments.exportInvoice](https://core.telegram.org/method/payments.exportInvoice). */
class SubscriptionExportMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You cannot send a [bot subscription invoice](https://core.telegram.org/api/subscriptions#bot-subscriptions) directly, you may only create invoice links using [payments.exportInvoice](https://core.telegram.org/method/payments.exportInvoice)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SUBSCRIPTION_EXPORT_MISSING";
    }
}
exports.SubscriptionExportMissingError = SubscriptionExportMissingError;
/** The specified subscription_id is invalid. */
class SubscriptionIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified subscription_id is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SUBSCRIPTION_ID_INVALID";
    }
}
exports.SubscriptionIdInvalidError = SubscriptionIdInvalidError;
/** The specified subscription_pricing.period is invalid. */
class SubscriptionPeriodInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified subscription_pricing.period is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SUBSCRIPTION_PERIOD_INVALID";
    }
}
exports.SubscriptionPeriodInvalidError = SubscriptionPeriodInvalidError;
/** The specified price for the suggested post is invalid. */
class SuggestedPostAmountInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified price for the suggested post is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SUGGESTED_POST_AMOUNT_INVALID";
    }
}
exports.SuggestedPostAmountInvalidError = SuggestedPostAmountInvalidError;
/** You cannot send suggested posts to non-[monoforum](https://core.telegram.org/api/monoforum) peers. */
class SuggestedPostPeerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You cannot send suggested posts to non-[monoforum](https://core.telegram.org/api/monoforum) peers." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SUGGESTED_POST_PEER_INVALID";
    }
}
exports.SuggestedPostPeerInvalidError = SuggestedPostPeerInvalidError;
/** The switch_pm.text field was empty. */
class SwitchPmTextEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The switch_pm.text field was empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SWITCH_PM_TEXT_EMPTY";
    }
}
exports.SwitchPmTextEmptyError = SwitchPmTextEmptyError;
/** The URL specified in switch_webview.url is invalid! */
class SwitchWebviewUrlInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The URL specified in switch_webview.url is invalid!" + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SWITCH_WEBVIEW_URL_INVALID";
    }
}
exports.SwitchWebviewUrlInvalidError = SwitchWebviewUrlInvalidError;
/** The specified takeout ID is invalid. */
class TakeoutInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified takeout ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TAKEOUT_INVALID";
    }
}
exports.TakeoutInvalidError = TakeoutInvalidError;
/** A [takeout](https://core.telegram.org/api/takeout) session needs to be initialized first, [see here &raquo; for more info](https://core.telegram.org/api/takeout). */
class TakeoutRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A [takeout](https://core.telegram.org/api/takeout) session needs to be initialized first, [see here &raquo; for more info](https://core.telegram.org/api/takeout)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TAKEOUT_REQUIRED";
    }
}
exports.TakeoutRequiredError = TakeoutRequiredError;
/** An email reset was already requested. */
class TaskAlreadyExistsError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An email reset was already requested." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TASK_ALREADY_EXISTS";
    }
}
exports.TaskAlreadyExistsError = TaskAlreadyExistsError;
/** The passed temporary key is already bound to another **perm_auth_key_id**. */
class TempAuthKeyAlreadyBoundError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The passed temporary key is already bound to another **perm_auth_key_id**." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TEMP_AUTH_KEY_ALREADY_BOUND";
    }
}
exports.TempAuthKeyAlreadyBoundError = TempAuthKeyAlreadyBoundError;
/** No temporary auth key provided. */
class TempAuthKeyEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No temporary auth key provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TEMP_AUTH_KEY_EMPTY";
    }
}
exports.TempAuthKeyEmptyError = TempAuthKeyEmptyError;
/** The specified [invoice](https://core.telegram.org/constructor/invoice).`terms_url` is invalid. */
class TermsUrlInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified [invoice](https://core.telegram.org/constructor/invoice).`terms_url` is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TERMS_URL_INVALID";
    }
}
exports.TermsUrlInvalidError = TermsUrlInvalidError;
/** Invalid theme file provided. */
class ThemeFileInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid theme file provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "THEME_FILE_INVALID";
    }
}
exports.ThemeFileInvalidError = ThemeFileInvalidError;
/** Invalid theme format provided. */
class ThemeFormatInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid theme format provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "THEME_FORMAT_INVALID";
    }
}
exports.ThemeFormatInvalidError = ThemeFormatInvalidError;
/** Invalid theme provided. */
class ThemeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid theme provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "THEME_INVALID";
    }
}
exports.ThemeInvalidError = ThemeInvalidError;
/** The theme's MIME type is invalid. */
class ThemeMimeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The theme's MIME type is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "THEME_MIME_INVALID";
    }
}
exports.ThemeMimeInvalidError = ThemeMimeInvalidError;
/** The specified `theme_params` field is invalid. */
class ThemeParamsInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `theme_params` field is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "THEME_PARAMS_INVALID";
    }
}
exports.ThemeParamsInvalidError = ThemeParamsInvalidError;
/** The specified theme slug is invalid. */
class ThemeSlugInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified theme slug is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "THEME_SLUG_INVALID";
    }
}
exports.ThemeSlugInvalidError = ThemeSlugInvalidError;
/** The specified theme title is invalid. */
class ThemeTitleInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified theme title is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "THEME_TITLE_INVALID";
    }
}
exports.ThemeTitleInvalidError = ThemeTitleInvalidError;
/** The specified timezone does not exist. */
class TimezoneInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified timezone does not exist." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TIMEZONE_INVALID";
    }
}
exports.TimezoneInvalidError = TimezoneInvalidError;
/** The specified stickerpack title is invalid. */
class TitleInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified stickerpack title is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TITLE_INVALID";
    }
}
exports.TitleInvalidError = TitleInvalidError;
/** The temporary password is disabled. */
class TmpPasswordDisabledError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The temporary password is disabled." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TMP_PASSWORD_DISABLED";
    }
}
exports.TmpPasswordDisabledError = TmpPasswordDisabledError;
/** The passed tmp_password is invalid. */
class TmpPasswordInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The passed tmp_password is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TMP_PASSWORD_INVALID";
    }
}
exports.TmpPasswordInvalidError = TmpPasswordInvalidError;
/** The specified `to_id` of the passed inputInvoiceStarGiftResale or inputInvoiceStarGiftTransfer is invalid. */
class ToIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified `to_id` of the passed inputInvoiceStarGiftResale or inputInvoiceStarGiftTransfer is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TO_ID_INVALID";
    }
}
exports.ToIdInvalidError = ToIdInvalidError;
/** The specified destination language is invalid. */
class ToLangInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified destination language is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TO_LANG_INVALID";
    }
}
exports.ToLangInvalidError = ToLangInvalidError;
/** Duplicate [checklist items](https://core.telegram.org/api/todo) detected. */
class TodoItemDuplicateError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Duplicate [checklist items](https://core.telegram.org/api/todo) detected." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TODO_ITEM_DUPLICATE";
    }
}
exports.TodoItemDuplicateError = TodoItemDuplicateError;
/** A checklist was specified, but no [checklist items](https://core.telegram.org/api/todo) were passed. */
class TodoItemsEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A checklist was specified, but no [checklist items](https://core.telegram.org/api/todo) were passed." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TODO_ITEMS_EMPTY";
    }
}
exports.TodoItemsEmptyError = TodoItemsEmptyError;
/** No todo items were specified, so no changes were made to the todo list. */
class TodoNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No todo items were specified, so no changes were made to the todo list." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TODO_NOT_MODIFIED";
    }
}
exports.TodoNotModifiedError = TodoNotModifiedError;
/** The specified token is empty. */
class TokenEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified token is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOKEN_EMPTY";
    }
}
exports.TokenEmptyError = TokenEmptyError;
/** The provided token is invalid. */
class TokenInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided token is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOKEN_INVALID";
    }
}
exports.TokenInvalidError = TokenInvalidError;
/** The specified token type is invalid. */
class TokenTypeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified token type is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOKEN_TYPE_INVALID";
    }
}
exports.TokenTypeInvalidError = TokenTypeInvalidError;
/** The `close` flag cannot be provided together with any of the other flags. */
class TopicCloseSeparatelyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The `close` flag cannot be provided together with any of the other flags." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOPIC_CLOSE_SEPARATELY";
    }
}
exports.TopicCloseSeparatelyError = TopicCloseSeparatelyError;
/** This topic was closed, you can't send messages to it anymore. */
class TopicClosedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This topic was closed, you can't send messages to it anymore." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOPIC_CLOSED";
    }
}
exports.TopicClosedError = TopicClosedError;
/** The specified topic was deleted. */
class TopicDeletedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified topic was deleted." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOPIC_DELETED";
    }
}
exports.TopicDeletedError = TopicDeletedError;
/** The `hide` flag cannot be provided together with any of the other flags. */
class TopicHideSeparatelyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The `hide` flag cannot be provided together with any of the other flags." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOPIC_HIDE_SEPARATELY";
    }
}
exports.TopicHideSeparatelyError = TopicHideSeparatelyError;
/** The specified topic ID is invalid. */
class TopicIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified topic ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOPIC_ID_INVALID";
    }
}
exports.TopicIdInvalidError = TopicIdInvalidError;
/** The updated topic info is equal to the current topic info, nothing was changed. */
class TopicNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The updated topic info is equal to the current topic info, nothing was changed." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOPIC_NOT_MODIFIED";
    }
}
exports.TopicNotModifiedError = TopicNotModifiedError;
/** The specified topic title is empty. */
class TopicTitleEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified topic title is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOPIC_TITLE_EMPTY";
    }
}
exports.TopicTitleEmptyError = TopicTitleEmptyError;
/** You specified no topic IDs. */
class TopicsEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You specified no topic IDs." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TOPICS_EMPTY";
    }
}
exports.TopicsEmptyError = TopicsEmptyError;
/** The specified transaction ID is invalid. */
class TransactionIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified transaction ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TRANSACTION_ID_INVALID";
    }
}
exports.TransactionIdInvalidError = TransactionIdInvalidError;
/** Audio transcription failed. */
class TranscriptionFailedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Audio transcription failed." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TRANSCRIPTION_FAILED";
    }
}
exports.TranscriptionFailedError = TranscriptionFailedError;
/** Translation is currently unavailable due to a temporary server-side lack of resources. */
class TranslateReqQuotaExceededError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Translation is currently unavailable due to a temporary server-side lack of resources." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TRANSLATE_REQ_QUOTA_EXCEEDED";
    }
}
exports.TranslateReqQuotaExceededError = TranslateReqQuotaExceededError;
/** The provided TTL is invalid. */
class TtlDaysInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided TTL is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TTL_DAYS_INVALID";
    }
}
exports.TtlDaysInvalidError = TtlDaysInvalidError;
/** Invalid media Time To Live was provided. */
class TtlMediaInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid media Time To Live was provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TTL_MEDIA_INVALID";
    }
}
exports.TtlMediaInvalidError = TtlMediaInvalidError;
/** The specified TTL period is invalid. */
class TtlPeriodInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified TTL period is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TTL_PERIOD_INVALID";
    }
}
exports.TtlPeriodInvalidError = TtlPeriodInvalidError;
/** No top peer type was provided. */
class TypesEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "No top peer type was provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TYPES_EMPTY";
    }
}
exports.TypesEmptyError = TypesEmptyError;
/** `require_payment` cannot be *set* by users, only by monoforums: users must instead use the [inputPrivacyKeyNoPaidMessages](https://core.telegram.org/constructor/inputPrivacyKeyNoPaidMessages) privacy setting to remove a previously added exemption. */
class UnsupportedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "`require_payment` cannot be *set* by users, only by monoforums: users must instead use the [inputPrivacyKeyNoPaidMessages](https://core.telegram.org/constructor/inputPrivacyKeyNoPaidMessages) privacy setting to remove a previously added exemption." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "UNSUPPORTED";
    }
}
exports.UnsupportedError = UnsupportedError;
/** Invalid until date provided. */
class UntilDateInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid until date provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "UNTIL_DATE_INVALID";
    }
}
exports.UntilDateInvalidError = UntilDateInvalidError;
/** Invalid URL provided. */
class UrlInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid URL provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "URL_INVALID";
    }
}
exports.UrlInvalidError = UrlInvalidError;
/** The specified usage limit is invalid. */
class UsageLimitInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified usage limit is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USAGE_LIMIT_INVALID";
    }
}
exports.UsageLimitInvalidError = UsageLimitInvalidError;
/** You're not an admin. */
class UserAdminInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You're not an admin." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_ADMIN_INVALID";
    }
}
exports.UserAdminInvalidError = UserAdminInvalidError;
/** You have already invited this user. */
class UserAlreadyInvitedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You have already invited this user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_ALREADY_INVITED";
    }
}
exports.UserAlreadyInvitedError = UserAlreadyInvitedError;
/** The user is already in the group. */
class UserAlreadyParticipantError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The user is already in the group." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_ALREADY_PARTICIPANT";
    }
}
exports.UserAlreadyParticipantError = UserAlreadyParticipantError;
/** You're banned from sending messages in supergroups/channels. */
class UserBannedInChannelError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You're banned from sending messages in supergroups/channels." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_BANNED_IN_CHANNEL";
    }
}
exports.UserBannedInChannelError = UserBannedInChannelError;
/** User blocked. */
class UserBlockedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "User blocked." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_BLOCKED";
    }
}
exports.UserBlockedError = UserBlockedError;
/** Bots can only be admins in channels. */
class UserBotError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Bots can only be admins in channels." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_BOT";
    }
}
exports.UserBotError = UserBotError;
/** User accounts must provide the `bot` method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts. */
class UserBotInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "User accounts must provide the `bot` method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_BOT_INVALID";
    }
}
exports.UserBotInvalidError = UserBotInvalidError;
/** This method can only be called by a bot. */
class UserBotRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This method can only be called by a bot." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_BOT_REQUIRED";
    }
}
exports.UserBotRequiredError = UserBotRequiredError;
/** One of the users you tried to add is already in too many channels/supergroups. */
class UserChannelsTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "One of the users you tried to add is already in too many channels/supergroups." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_CHANNELS_TOO_MUCH";
    }
}
exports.UserChannelsTooMuchError = UserChannelsTooMuchError;
/** For channels.editAdmin: you've tried to edit the admin rights of the owner, but you're not the owner; for channels.leaveChannel: you can't leave this channel, because you're its creator. */
class UserCreatorError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "For channels.editAdmin: you've tried to edit the admin rights of the owner, but you're not the owner; for channels.leaveChannel: you can't leave this channel, because you're its creator." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_CREATOR";
    }
}
exports.UserCreatorError = UserCreatorError;
/** Gifts are not available in the current region ([stars_gifts_enabled](https://core.telegram.org/api/config#stars-gifts-enabled) is equal to false). */
class UserGiftUnavailableError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Gifts are not available in the current region ([stars_gifts_enabled](https://core.telegram.org/api/config#stars-gifts-enabled) is equal to false)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_GIFT_UNAVAILABLE";
    }
}
exports.UserGiftUnavailableError = UserGiftUnavailableError;
/** The provided user ID is invalid. */
class UserIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided user ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_ID_INVALID";
    }
}
exports.UserIdInvalidError = UserIdInvalidError;
/** Invalid user provided. */
class UserInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid user provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_INVALID";
    }
}
exports.UserInvalidError = UserInvalidError;
/** You were blocked by this user. */
class UserIsBlockedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You were blocked by this user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_IS_BLOCKED";
    }
}
exports.UserIsBlockedError = UserIsBlockedError;
/** Bots can't send messages to other bots. */
class UserIsBotError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Bots can't send messages to other bots." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_IS_BOT";
    }
}
exports.UserIsBotError = UserIsBotError;
/** This user was kicked from this supergroup/channel. */
class UserKickedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This user was kicked from this supergroup/channel." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_KICKED";
    }
}
exports.UserKickedError = UserKickedError;
/** The provided user is not a mutual contact. */
class UserNotMutualContactError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided user is not a mutual contact." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_NOT_MUTUAL_CONTACT";
    }
}
exports.UserNotMutualContactError = UserNotMutualContactError;
/** You're not a member of this supergroup/channel. */
class UserNotParticipantError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You're not a member of this supergroup/channel." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_NOT_PARTICIPANT";
    }
}
exports.UserNotParticipantError = UserNotParticipantError;
/** Cannot generate a link to stories posted by a peer without a username. */
class UserPublicMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Cannot generate a link to stories posted by a peer without a username." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_PUBLIC_MISSING";
    }
}
exports.UserPublicMissingError = UserPublicMissingError;
/** The specified user volume is invalid. */
class UserVolumeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified user volume is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_VOLUME_INVALID";
    }
}
exports.UserVolumeInvalidError = UserVolumeInvalidError;
/** The provided username is not valid. */
class UsernameInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided username is not valid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USERNAME_INVALID";
    }
}
exports.UsernameInvalidError = UsernameInvalidError;
/** The username was not modified. */
class UsernameNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The username was not modified." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USERNAME_NOT_MODIFIED";
    }
}
exports.UsernameNotModifiedError = UsernameNotModifiedError;
/** The provided username is not occupied. */
class UsernameNotOccupiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided username is not occupied." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USERNAME_NOT_OCCUPIED";
    }
}
exports.UsernameNotOccupiedError = UsernameNotOccupiedError;
/** The provided username is already occupied. */
class UsernameOccupiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The provided username is already occupied." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USERNAME_OCCUPIED";
    }
}
exports.UsernameOccupiedError = UsernameOccupiedError;
/** The specified username can be purchased on https://fragment.com. */
class UsernamePurchaseAvailableError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified username can be purchased on https://fragment.com." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USERNAME_PURCHASE_AVAILABLE";
    }
}
exports.UsernamePurchaseAvailableError = UsernamePurchaseAvailableError;
/** The maximum number of active usernames was reached. */
class UsernamesActiveTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The maximum number of active usernames was reached." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USERNAMES_ACTIVE_TOO_MUCH";
    }
}
exports.UsernamesActiveTooMuchError = UsernamesActiveTooMuchError;
/** You must have a profile picture to publish your geolocation. */
class UserpicUploadRequiredError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You must have a profile picture to publish your geolocation." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USERPIC_UPLOAD_REQUIRED";
    }
}
exports.UserpicUploadRequiredError = UserpicUploadRequiredError;
/** Not enough users (to create a chat, for example). */
class UsersTooFewError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Not enough users (to create a chat, for example)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USERS_TOO_FEW";
    }
}
exports.UsersTooFewError = UsersTooFewError;
/** The maximum number of users has been exceeded (to create a chat, for example). */
class UsersTooMuchError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The maximum number of users has been exceeded (to create a chat, for example)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USERS_TOO_MUCH";
    }
}
exports.UsersTooMuchError = UsersTooMuchError;
/** The specified venue ID is invalid. */
class VenueIdInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified venue ID is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "VENUE_ID_INVALID";
    }
}
exports.VenueIdInvalidError = VenueIdInvalidError;
/** The video's content type is invalid. */
class VideoContentTypeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The video's content type is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "VIDEO_CONTENT_TYPE_INVALID";
    }
}
exports.VideoContentTypeInvalidError = VideoContentTypeInvalidError;
/** The specified video file is invalid. */
class VideoFileInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified video file is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "VIDEO_FILE_INVALID";
    }
}
exports.VideoFileInvalidError = VideoFileInvalidError;
/** You cannot pause the video stream. */
class VideoPauseForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You cannot pause the video stream." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "VIDEO_PAUSE_FORBIDDEN";
    }
}
exports.VideoPauseForbiddenError = VideoPauseForbiddenError;
/** You cannot stop the video stream. */
class VideoStopForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You cannot stop the video stream." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "VIDEO_STOP_FORBIDDEN";
    }
}
exports.VideoStopForbiddenError = VideoStopForbiddenError;
/** The specified video title is empty. */
class VideoTitleEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified video title is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "VIDEO_TITLE_EMPTY";
    }
}
exports.VideoTitleEmptyError = VideoTitleEmptyError;
/** This user's privacy settings forbid you from sending voice messages. */
class VoiceMessagesForbiddenError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "This user's privacy settings forbid you from sending voice messages." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "VOICE_MESSAGES_FORBIDDEN";
    }
}
exports.VoiceMessagesForbiddenError = VoiceMessagesForbiddenError;
/** The specified wallpaper file is invalid. */
class WallpaperFileInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified wallpaper file is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WALLPAPER_FILE_INVALID";
    }
}
exports.WallpaperFileInvalidError = WallpaperFileInvalidError;
/** The specified wallpaper is invalid. */
class WallpaperInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified wallpaper is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WALLPAPER_INVALID";
    }
}
exports.WallpaperInvalidError = WallpaperInvalidError;
/** The specified wallpaper MIME type is invalid. */
class WallpaperMimeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified wallpaper MIME type is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WALLPAPER_MIME_INVALID";
    }
}
exports.WallpaperMimeInvalidError = WallpaperMimeInvalidError;
/** The specified wallpaper could not be found. */
class WallpaperNotFoundError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified wallpaper could not be found." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WALLPAPER_NOT_FOUND";
    }
}
exports.WallpaperNotFoundError = WallpaperNotFoundError;
/** WC convert URL invalid. */
class WcConvertUrlInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "WC convert URL invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WC_CONVERT_URL_INVALID";
    }
}
exports.WcConvertUrlInvalidError = WcConvertUrlInvalidError;
/** Invalid webdocument URL provided. */
class WebdocumentInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid webdocument URL provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBDOCUMENT_INVALID";
    }
}
exports.WebdocumentInvalidError = WebdocumentInvalidError;
/** Invalid webdocument mime type provided. */
class WebdocumentMimeInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Invalid webdocument mime type provided." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBDOCUMENT_MIME_INVALID";
    }
}
exports.WebdocumentMimeInvalidError = WebdocumentMimeInvalidError;
/** Webdocument is too big! */
class WebdocumentSizeTooBigError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Webdocument is too big!" + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBDOCUMENT_SIZE_TOO_BIG";
    }
}
exports.WebdocumentSizeTooBigError = WebdocumentSizeTooBigError;
/** The passed web document URL is empty. */
class WebdocumentUrlEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The passed web document URL is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBDOCUMENT_URL_EMPTY";
    }
}
exports.WebdocumentUrlEmptyError = WebdocumentUrlEmptyError;
/** The specified webdocument URL is invalid. */
class WebdocumentUrlInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified webdocument URL is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBDOCUMENT_URL_INVALID";
    }
}
exports.WebdocumentUrlInvalidError = WebdocumentUrlInvalidError;
/** Failure while fetching the webpage with cURL. */
class WebpageCurlFailedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Failure while fetching the webpage with cURL." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBPAGE_CURL_FAILED";
    }
}
exports.WebpageCurlFailedError = WebpageCurlFailedError;
/** Webpage media empty. */
class WebpageMediaEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Webpage media empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBPAGE_MEDIA_EMPTY";
    }
}
exports.WebpageMediaEmptyError = WebpageMediaEmptyError;
/** A preview for the specified webpage `url` could not be generated. */
class WebpageNotFoundError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "A preview for the specified webpage `url` could not be generated." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBPAGE_NOT_FOUND";
    }
}
exports.WebpageNotFoundError = WebpageNotFoundError;
/** The specified webpage `url` is invalid. */
class WebpageUrlInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified webpage `url` is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBPAGE_URL_INVALID";
    }
}
exports.WebpageUrlInvalidError = WebpageUrlInvalidError;
/** The specified web push authentication secret is invalid. */
class WebpushAuthInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified web push authentication secret is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBPUSH_AUTH_INVALID";
    }
}
exports.WebpushAuthInvalidError = WebpushAuthInvalidError;
/** The specified web push elliptic curve Diffie-Hellman public key is invalid. */
class WebpushKeyInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified web push elliptic curve Diffie-Hellman public key is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBPUSH_KEY_INVALID";
    }
}
exports.WebpushKeyInvalidError = WebpushKeyInvalidError;
/** The specified web push token is invalid. */
class WebpushTokenInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified web push token is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "WEBPUSH_TOKEN_INVALID";
    }
}
exports.WebpushTokenInvalidError = WebpushTokenInvalidError;
/** You blocked this user. */
class YouBlockedUserError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "You blocked this user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "YOU_BLOCKED_USER";
    }
}
exports.YouBlockedUserError = YouBlockedUserError;
/** The specified method cannot be used by bots. */
class BotMethodInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified method cannot be used by bots." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_METHOD_INVALID";
    }
}
exports.BotMethodInvalidError = BotMethodInvalidError;
/** The specified device model is empty. */
class ConnectionDeviceModelEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified device model is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONNECTION_DEVICE_MODEL_EMPTY";
    }
}
exports.ConnectionDeviceModelEmptyError = ConnectionDeviceModelEmptyError;
/** The specified language pack is empty. */
class ConnectionLangPackInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified language pack is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONNECTION_LANG_PACK_INVALID";
    }
}
exports.ConnectionLangPackInvalidError = ConnectionLangPackInvalidError;
/** Please initialize the connection using initConnection before making queries. */
class ConnectionNotInitedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "Please initialize the connection using initConnection before making queries." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONNECTION_NOT_INITED";
    }
}
exports.ConnectionNotInitedError = ConnectionNotInitedError;
/** The specified system version is empty. */
class ConnectionSystemEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified system version is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONNECTION_SYSTEM_EMPTY";
    }
}
exports.ConnectionSystemEmptyError = ConnectionSystemEmptyError;
/** The specified system language code is empty. */
class ConnectionSystemLangCodeEmptyError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified system language code is empty." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CONNECTION_SYSTEM_LANG_CODE_EMPTY";
    }
}
exports.ConnectionSystemLangCodeEmptyError = ConnectionSystemLangCodeEmptyError;
/** The file currently being accessed is stored in DC %d, please re-send the query to that DC. */
class FileMigrateError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const newDc = Number(args.capture || 0);
        const message = "The file currently being accessed is stored in DC " + newDc + ", please re-send the query to that DC." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.newDc = newDc;
    }
}
exports.FileMigrateError = FileMigrateError;
/** Part %d of the file is missing from storage. Try repeating the method call to resave the part. */
class FilePartMissingError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "Part " + value + " of the file is missing from storage. Try repeating the method call to resave the part." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.FilePartMissingError = FilePartMissingError;
/** The specified TL constructor is invalid. */
class InputConstructorInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified TL constructor is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_CONSTRUCTOR_INVALID";
    }
}
exports.InputConstructorInvalidError = InputConstructorInvalidError;
/** An error occurred while parsing the provided TL constructor. */
class InputFetchErrorError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An error occurred while parsing the provided TL constructor." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_FETCH_ERROR";
    }
}
exports.InputFetchErrorError = InputFetchErrorError;
/** An error occurred while parsing the provided TL constructor. */
class InputFetchFailError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "An error occurred while parsing the provided TL constructor." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_FETCH_FAIL";
    }
}
exports.InputFetchFailError = InputFetchFailError;
/** The specified layer is invalid. */
class InputLayerInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified layer is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_LAYER_INVALID";
    }
}
exports.InputLayerInvalidError = InputLayerInvalidError;
/** The specified method is invalid. */
class InputMethodInvalidError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The specified method is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_METHOD_INVALID";
    }
}
exports.InputMethodInvalidError = InputMethodInvalidError;
/** The request payload is too long. */
class InputRequestTooLongError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The request payload is too long." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INPUT_REQUEST_TOO_LONG";
    }
}
exports.InputRequestTooLongError = InputRequestTooLongError;
/** The current account is spamreported, you cannot execute this action, check @spambot for more info. */
class PeerFloodError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The current account is spamreported, you cannot execute this action, check @spambot for more info." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PEER_FLOOD";
    }
}
exports.PeerFloodError = PeerFloodError;
/** The passed stickerset information is equal to the current information. */
class StickersetNotModifiedError extends RPCBaseErrors_1.BadRequestError {
    constructor(args) {
        const message = "The passed stickerset information is equal to the current information." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKERSET_NOT_MODIFIED";
    }
}
exports.StickersetNotModifiedError = StickersetNotModifiedError;
/** The specified authorization key is not registered in the system (for example, a PFS temporary key has expired). */
class AuthKeyUnregisteredError extends RPCBaseErrors_1.UnauthorizedError {
    constructor(args) {
        const message = "The specified authorization key is not registered in the system (for example, a PFS temporary key has expired)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_KEY_UNREGISTERED";
    }
}
exports.AuthKeyUnregisteredError = AuthKeyUnregisteredError;
/** The specified auth key is invalid. */
class AuthKeyInvalidError extends RPCBaseErrors_1.UnauthorizedError {
    constructor(args) {
        const message = "The specified auth key is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_KEY_INVALID";
    }
}
exports.AuthKeyInvalidError = AuthKeyInvalidError;
/** The method is unavailable for temporary authorization keys, not bound to a permanent authorization key. */
class AuthKeyPermEmptyError extends RPCBaseErrors_1.UnauthorizedError {
    constructor(args) {
        const message = "The method is unavailable for temporary authorization keys, not bound to a permanent authorization key." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_KEY_PERM_EMPTY";
    }
}
exports.AuthKeyPermEmptyError = AuthKeyPermEmptyError;
/** The session has expired. */
class SessionExpiredError extends RPCBaseErrors_1.UnauthorizedError {
    constructor(args) {
        const message = "The session has expired." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SESSION_EXPIRED";
    }
}
exports.SessionExpiredError = SessionExpiredError;
/** 2FA is enabled, use a password to login. */
class SessionPasswordNeededError extends RPCBaseErrors_1.UnauthorizedError {
    constructor(args) {
        const message = "2FA is enabled, use a password to login." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SESSION_PASSWORD_NEEDED";
    }
}
exports.SessionPasswordNeededError = SessionPasswordNeededError;
/** The session was revoked by the user. */
class SessionRevokedError extends RPCBaseErrors_1.UnauthorizedError {
    constructor(args) {
        const message = "The session was revoked by the user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SESSION_REVOKED";
    }
}
exports.SessionRevokedError = SessionRevokedError;
/** The current account was deleted by the user. */
class UserDeactivatedError extends RPCBaseErrors_1.UnauthorizedError {
    constructor(args) {
        const message = "The current account was deleted by the user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_DEACTIVATED";
    }
}
exports.UserDeactivatedError = UserDeactivatedError;
/** The current account was deleted and banned by Telegram's antispam system. */
class UserDeactivatedBanError extends RPCBaseErrors_1.UnauthorizedError {
    constructor(args) {
        const message = "The current account was deleted and banned by Telegram's antispam system." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_DEACTIVATED_BAN";
    }
}
exports.UserDeactivatedBanError = UserDeactivatedBanError;
/** This peer charges %d [Telegram Stars](https://core.telegram.org/api/stars) per message, but the `allow_paid_stars` was not set or its value is smaller than %d. */
class AllowPaymentRequiredError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "This peer charges " + value + " [Telegram Stars](https://core.telegram.org/api/stars) per message, but the `allow_paid_stars` was not set or its value is smaller than " + value + "." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.AllowPaymentRequiredError = AllowPaymentRequiredError;
/** Sorry, anonymous administrators cannot leave reactions or participate in polls. */
class AnonymousReactionsDisabledError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "Sorry, anonymous administrators cannot leave reactions or participate in polls." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "ANONYMOUS_REACTIONS_DISABLED";
    }
}
exports.AnonymousReactionsDisabledError = AnonymousReactionsDisabledError;
/** The specified method *can* be used over a [business connection](https://core.telegram.org/api/bots/connected-business-bots) for some operations, but the specified query attempted an operation that is not allowed over a business connection. */
class BotAccessForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "The specified method *can* be used over a [business connection](https://core.telegram.org/api/bots/connected-business-bots) for some operations, but the specified query attempted an operation that is not allowed over a business connection." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_ACCESS_FORBIDDEN";
    }
}
exports.BotAccessForbiddenError = BotAccessForbiddenError;
/** This bot cannot assign [verification icons](https://core.telegram.org/api/bots/verification). */
class BotVerifierForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "This bot cannot assign [verification icons](https://core.telegram.org/api/bots/verification)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BOT_VERIFIER_FORBIDDEN";
    }
}
exports.BotVerifierForbiddenError = BotVerifierForbiddenError;
/** Channel poll voters and reactions cannot be fetched to prevent deanonymization. */
class BroadcastForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "Channel poll voters and reactions cannot be fetched to prevent deanonymization." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BROADCAST_FORBIDDEN";
    }
}
exports.BroadcastForbiddenError = BroadcastForbiddenError;
/** channel/supergroup not available. */
class ChannelPublicGroupNaError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "channel/supergroup not available." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHANNEL_PUBLIC_GROUP_NA";
    }
}
exports.ChannelPublicGroupNaError = ChannelPublicGroupNaError;
/** You cannot execute this action. */
class ChatActionForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You cannot execute this action." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_ACTION_FORBIDDEN";
    }
}
exports.ChatActionForbiddenError = ChatActionForbiddenError;
/** You do not have the rights to do this. */
class ChatAdminInviteRequiredError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You do not have the rights to do this." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_ADMIN_INVITE_REQUIRED";
    }
}
exports.ChatAdminInviteRequiredError = ChatAdminInviteRequiredError;
/** You join the discussion group before commenting, see [here &raquo;](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) for more info. */
class ChatGuestSendForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You join the discussion group before commenting, see [here &raquo;](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) for more info." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_GUEST_SEND_FORBIDDEN";
    }
}
exports.ChatGuestSendForbiddenError = ChatGuestSendForbiddenError;
/** You can't send audio messages in this chat. */
class ChatSendAudiosForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send audio messages in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_AUDIOS_FORBIDDEN";
    }
}
exports.ChatSendAudiosForbiddenError = ChatSendAudiosForbiddenError;
/** You can't send documents in this chat. */
class ChatSendDocsForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send documents in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_DOCS_FORBIDDEN";
    }
}
exports.ChatSendDocsForbiddenError = ChatSendDocsForbiddenError;
/** You can't send a game to this chat. */
class ChatSendGameForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send a game to this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_GAME_FORBIDDEN";
    }
}
exports.ChatSendGameForbiddenError = ChatSendGameForbiddenError;
/** You can't send gifs in this chat. */
class ChatSendGifsForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send gifs in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_GIFS_FORBIDDEN";
    }
}
exports.ChatSendGifsForbiddenError = ChatSendGifsForbiddenError;
/** You can't send media in this chat. */
class ChatSendMediaForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send media in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_MEDIA_FORBIDDEN";
    }
}
exports.ChatSendMediaForbiddenError = ChatSendMediaForbiddenError;
/** You can't send photos in this chat. */
class ChatSendPhotosForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send photos in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_PHOTOS_FORBIDDEN";
    }
}
exports.ChatSendPhotosForbiddenError = ChatSendPhotosForbiddenError;
/** You can't send non-media (text) messages in this chat. */
class ChatSendPlainForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send non-media (text) messages in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_PLAIN_FORBIDDEN";
    }
}
exports.ChatSendPlainForbiddenError = ChatSendPlainForbiddenError;
/** You can't send polls in this chat. */
class ChatSendPollForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send polls in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_POLL_FORBIDDEN";
    }
}
exports.ChatSendPollForbiddenError = ChatSendPollForbiddenError;
/** You can't send round videos to this chat. */
class ChatSendRoundvideosForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send round videos to this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_ROUNDVIDEOS_FORBIDDEN";
    }
}
exports.ChatSendRoundvideosForbiddenError = ChatSendRoundvideosForbiddenError;
/** You can't send stickers in this chat. */
class ChatSendStickersForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send stickers in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_STICKERS_FORBIDDEN";
    }
}
exports.ChatSendStickersForbiddenError = ChatSendStickersForbiddenError;
/** You can't send videos in this chat. */
class ChatSendVideosForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send videos in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_VIDEOS_FORBIDDEN";
    }
}
exports.ChatSendVideosForbiddenError = ChatSendVideosForbiddenError;
/** You can't send voice recordings in this chat. */
class ChatSendVoicesForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send voice recordings in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_VOICES_FORBIDDEN";
    }
}
exports.ChatSendVoicesForbiddenError = ChatSendVoicesForbiddenError;
/** You can't send webpage previews to this chat. */
class ChatSendWebpageForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send webpage previews to this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_SEND_WEBPAGE_FORBIDDEN";
    }
}
exports.ChatSendWebpageForbiddenError = ChatSendWebpageForbiddenError;
/** The specified user type is invalid. */
class ChatTypeInvalidError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "The specified user type is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_TYPE_INVALID";
    }
}
exports.ChatTypeInvalidError = ChatTypeInvalidError;
/** You can't write in this chat. */
class ChatWriteForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't write in this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_WRITE_FORBIDDEN";
    }
}
exports.ChatWriteForbiddenError = ChatWriteForbiddenError;
/** Normal users can't edit invites that were created by bots. */
class EditBotInviteForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "Normal users can't edit invites that were created by bots." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "EDIT_BOT_INVITE_FORBIDDEN";
    }
}
exports.EditBotInviteForbiddenError = EditBotInviteForbiddenError;
/** The groupcall has already started, you can join directly using [phone.joinGroupCall](https://core.telegram.org/method/phone.joinGroupCall). */
class GroupcallAlreadyStartedError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "The groupcall has already started, you can join directly using [phone.joinGroupCall](https://core.telegram.org/method/phone.joinGroupCall)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "GROUPCALL_ALREADY_STARTED";
    }
}
exports.GroupcallAlreadyStartedError = GroupcallAlreadyStartedError;
/** Only the inline bot can edit message. */
class InlineBotRequiredError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "Only the inline bot can edit message." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "INLINE_BOT_REQUIRED";
    }
}
exports.InlineBotRequiredError = InlineBotRequiredError;
/** Message author required. */
class MessageAuthorRequiredError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "Message author required." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_AUTHOR_REQUIRED";
    }
}
exports.MessageAuthorRequiredError = MessageAuthorRequiredError;
/** You can't delete one of the messages you tried to delete, most likely because it is a service message. */
class MessageDeleteForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't delete one of the messages you tried to delete, most likely because it is a service message." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MESSAGE_DELETE_FORBIDDEN";
    }
}
exports.MessageDeleteForbiddenError = MessageDeleteForbiddenError;
/** Cast a vote in the poll before calling this method. */
class PollVoteRequiredError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "Cast a vote in the poll before calling this method." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "POLL_VOTE_REQUIRED";
    }
}
exports.PollVoteRequiredError = PollVoteRequiredError;
/** You need a [Telegram Premium subscription](https://core.telegram.org/api/premium) to send a message to this user. */
class PrivacyPremiumRequiredError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You need a [Telegram Premium subscription](https://core.telegram.org/api/premium) to send a message to this user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PRIVACY_PREMIUM_REQUIRED";
    }
}
exports.PrivacyPremiumRequiredError = PrivacyPremiumRequiredError;
/** You can only export group call invite links for public chats or channels. */
class PublicChannelMissingError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can only export group call invite links for public chats or channels." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PUBLIC_CHANNEL_MISSING";
    }
}
exports.PublicChannelMissingError = PublicChannelMissingError;
/** Your admin rights do not allow you to do this. */
class RightForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "Your admin rights do not allow you to do this." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RIGHT_FORBIDDEN";
    }
}
exports.RightForbiddenError = RightForbiddenError;
/** You can't change your sensitive content settings. */
class SensitiveChangeForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't change your sensitive content settings." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SENSITIVE_CHANGE_FORBIDDEN";
    }
}
exports.SensitiveChangeForbiddenError = SensitiveChangeForbiddenError;
/** You can't send this secret message because the other participant deleted their account. */
class UserDeletedError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You can't send this secret message because the other participant deleted their account." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_DELETED";
    }
}
exports.UserDeletedError = UserDeletedError;
/** The user hasn't granted or has revoked the bot's access to change their emoji status using [bots.toggleUserEmojiStatusPermission](https://core.telegram.org/method/bots.toggleUserEmojiStatusPermission). */
class UserPermissionDeniedError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "The user hasn't granted or has revoked the bot's access to change their emoji status using [bots.toggleUserEmojiStatusPermission](https://core.telegram.org/method/bots.toggleUserEmojiStatusPermission)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_PERMISSION_DENIED";
    }
}
exports.UserPermissionDeniedError = UserPermissionDeniedError;
/** The user's privacy settings do not allow you to do this. */
class UserPrivacyRestrictedError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "The user's privacy settings do not allow you to do this." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_PRIVACY_RESTRICTED";
    }
}
exports.UserPrivacyRestrictedError = UserPrivacyRestrictedError;
/** You're spamreported, you can't create channels or chats. */
class UserRestrictedError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You're spamreported, you can't create channels or chats." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USER_RESTRICTED";
    }
}
exports.UserRestrictedError = UserRestrictedError;
/** You cannot fetch the read date of this message because you have disallowed other users to do so for *your* messages; to fix, allow other users to see *your* exact last online date OR purchase a [Telegram Premium](https://core.telegram.org/api/premium) subscription. */
class YourPrivacyRestrictedError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "You cannot fetch the read date of this message because you have disallowed other users to do so for *your* messages; to fix, allow other users to see *your* exact last online date OR purchase a [Telegram Premium](https://core.telegram.org/api/premium) subscription." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "YOUR_PRIVACY_RESTRICTED";
    }
}
exports.YourPrivacyRestrictedError = YourPrivacyRestrictedError;
/** This chat is not available to the current user. */
class ChatForbiddenError extends RPCBaseErrors_1.ForbiddenError {
    constructor(args) {
        const message = "This chat is not available to the current user." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_FORBIDDEN";
    }
}
exports.ChatForbiddenError = ChatForbiddenError;
/** Please update the app to access the gift API. */
class ApiGiftRestrictedUpdateAppError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "Please update the app to access the gift API." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "API_GIFT_RESTRICTED_UPDATE_APP";
    }
}
exports.ApiGiftRestrictedUpdateAppError = ApiGiftRestrictedUpdateAppError;
/** The user is currently advertising a [Business Location](https://core.telegram.org/api/business#location), the location may only be changed (or removed) using [account.updateBusinessLocation &raquo;](https://core.telegram.org/method/account.updateBusinessLocation).  . */
class BusinessAddressActiveError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "The user is currently advertising a [Business Location](https://core.telegram.org/api/business#location), the location may only be changed (or removed) using [account.updateBusinessLocation &raquo;](https://core.telegram.org/method/account.updateBusinessLocation).  ." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "BUSINESS_ADDRESS_ACTIVE";
    }
}
exports.BusinessAddressActiveError = BusinessAddressActiveError;
/** The other side of the call does not support any of the VoIP protocols supported by the local client, as specified by the `protocol.layer` and `protocol.library_versions` fields. */
class CallProtocolCompatLayerInvalidError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "The other side of the call does not support any of the VoIP protocols supported by the local client, as specified by the `protocol.layer` and `protocol.library_versions` fields." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CALL_PROTOCOL_COMPAT_LAYER_INVALID";
    }
}
exports.CallProtocolCompatLayerInvalidError = CallProtocolCompatLayerInvalidError;
/** The client has to be updated in order to support [file references](https://core.telegram.org/api/file-references). */
class FilerefUpgradeNeededError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "The client has to be updated in order to support [file references](https://core.telegram.org/api/file-references)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FILEREF_UPGRADE_NEEDED";
    }
}
exports.FilerefUpgradeNeededError = FilerefUpgradeNeededError;
/** You can't change phone number right after logging in, please wait at least 24 hours. */
class FreshChangePhoneForbiddenError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "You can't change phone number right after logging in, please wait at least 24 hours." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FRESH_CHANGE_PHONE_FORBIDDEN";
    }
}
exports.FreshChangePhoneForbiddenError = FreshChangePhoneForbiddenError;
/** You can't logout other sessions if less than 24 hours have passed since you logged on the current session. */
class FreshResetAuthorisationForbiddenError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "You can't logout other sessions if less than 24 hours have passed since you logged on the current session." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FRESH_RESET_AUTHORISATION_FORBIDDEN";
    }
}
exports.FreshResetAuthorisationForbiddenError = FreshResetAuthorisationForbiddenError;
/** A detailed description of the error will be received separately as described [here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable). */
class PaymentUnsupportedError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "A detailed description of the error will be received separately as described [here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PAYMENT_UNSUPPORTED";
    }
}
exports.PaymentUnsupportedError = PaymentUnsupportedError;
/** You have tried logging in too many times. */
class PhonePasswordFloodError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "You have tried logging in too many times." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PHONE_PASSWORD_FLOOD";
    }
}
exports.PhonePasswordFloodError = PhonePasswordFloodError;
/** Precheckout failed, a detailed and localized description for the error will be emitted via an [updateServiceNotification as specified here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable). */
class PrecheckoutFailedError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "Precheckout failed, a detailed and localized description for the error will be emitted via an [updateServiceNotification as specified here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PRECHECKOUT_FAILED";
    }
}
exports.PrecheckoutFailedError = PrecheckoutFailedError;
/** You cannot currently purchase a Premium subscription. */
class PremiumCurrentlyUnavailableError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "You cannot currently purchase a Premium subscription." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PREMIUM_CURRENTLY_UNAVAILABLE";
    }
}
exports.PremiumCurrentlyUnavailableError = PremiumCurrentlyUnavailableError;
/** Import for this chat is already in progress, wait %d minutes before starting a new one. */
class PreviousChatImportActiveWaitMinError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "Import for this chat is already in progress, wait " + value + " minutes before starting a new one." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.PreviousChatImportActiveWaitMinError = PreviousChatImportActiveWaitMinError;
/** Returned when all available options for this type of number were already used (e.g. flash-call, then SMS, then this error might be returned to trigger a second resend). */
class SendCodeUnavailableError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "Returned when all available options for this type of number were already used (e.g. flash-call, then SMS, then this error might be returned to trigger a second resend)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SEND_CODE_UNAVAILABLE";
    }
}
exports.SendCodeUnavailableError = SendCodeUnavailableError;
/** A gift export is in progress, a detailed and localized description for the error will be emitted via an [updateServiceNotification as specified here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable). */
class StargiftExportInProgressError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "A gift export is in progress, a detailed and localized description for the error will be emitted via an [updateServiceNotification as specified here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARGIFT_EXPORT_IN_PROGRESS";
    }
}
exports.StargiftExportInProgressError = StargiftExportInProgressError;
/** The form amount has changed, please fetch the new form using [payments.getPaymentForm](https://core.telegram.org/method/payments.getPaymentForm) and restart the process. */
class StarsFormAmountMismatchError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "The form amount has changed, please fetch the new form using [payments.getPaymentForm](https://core.telegram.org/method/payments.getPaymentForm) and restart the process." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STARS_FORM_AMOUNT_MISMATCH";
    }
}
exports.StarsFormAmountMismatchError = StarsFormAmountMismatchError;
/** Provided stickerset can't be installed as group stickerset to prevent admin deanonymization. */
class StickersetOwnerAnonymousError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "Provided stickerset can't be installed as group stickerset to prevent admin deanonymization." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "STICKERSET_OWNER_ANONYMOUS";
    }
}
exports.StickersetOwnerAnonymousError = StickersetOwnerAnonymousError;
/** Translations are unavailable, a detailed and localized description for the error will be emitted via an [updateServiceNotification as specified here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable). */
class TranslationsDisabledError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "Translations are unavailable, a detailed and localized description for the error will be emitted via an [updateServiceNotification as specified here &raquo;](https://core.telegram.org/api/errors#406-not-acceptable)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TRANSLATIONS_DISABLED";
    }
}
exports.TranslationsDisabledError = TranslationsDisabledError;
/** Please update your client to login. */
class UpdateAppToLoginError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "Please update your client to login." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "UPDATE_APP_TO_LOGIN";
    }
}
exports.UpdateAppToLoginError = UpdateAppToLoginError;
/** You need to disable privacy settings for your profile picture in order to make your geolocation public. */
class UserpicPrivacyRequiredError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "You need to disable privacy settings for your profile picture in order to make your geolocation public." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "USERPIC_PRIVACY_REQUIRED";
    }
}
exports.UserpicPrivacyRequiredError = UserpicPrivacyRequiredError;
/** Concurrent usage of the current session from multiple connections was detected, the current session was invalidated by the server for security reasons! */
class AuthKeyDuplicatedError extends RPCBaseErrors_1.AuthKeyError {
    constructor(args) {
        const message = "Concurrent usage of the current session from multiple connections was detected, the current session was invalidated by the server for security reasons!" + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_KEY_DUPLICATED";
    }
}
exports.AuthKeyDuplicatedError = AuthKeyDuplicatedError;
/** Since this account is active and protected by a 2FA password, we will delete it in 1 week for security purposes. You can cancel this process at any time, you'll be able to reset your account in %d seconds. */
class TwoFaConfirmWaitError extends RPCBaseErrors_1.FloodError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "Since this account is active and protected by a 2FA password, we will delete it in 1 week for security purposes. You can cancel this process at any time, you'll be able to reset your account in " + value + " seconds." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.TwoFaConfirmWaitError = TwoFaConfirmWaitError;
/** Please wait %d seconds before repeating the action. */
class FloodWaitError extends RPCBaseErrors_1.FloodError {
    constructor(args) {
        const seconds = Number(args.capture || 0);
        const message = "Please wait " + seconds + " seconds before repeating the action." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.seconds = seconds;
    }
}
exports.FloodWaitError = FloodWaitError;
/** The current account is [frozen](https://core.telegram.org/api/auth#frozen-accounts), and thus cannot execute the specified action. */
class FrozenMethodInvalidError extends RPCBaseErrors_1.FloodError {
    constructor(args) {
        const message = "The current account is [frozen](https://core.telegram.org/api/auth#frozen-accounts), and thus cannot execute the specified action." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "FROZEN_METHOD_INVALID";
    }
}
exports.FrozenMethodInvalidError = FrozenMethodInvalidError;
/** You already have a premium subscription active until unixtime %d . */
class PremiumSubActiveUntilError extends RPCBaseErrors_1.FloodError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "You already have a premium subscription active until unixtime " + value + " ." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.PremiumSubActiveUntilError = PremiumSubActiveUntilError;
/** Slowmode is enabled in this chat: wait %d seconds before sending another message to this chat. */
class SlowModeWaitError extends RPCBaseErrors_1.FloodError {
    constructor(args) {
        const seconds = Number(args.capture || 0);
        const message = "Slowmode is enabled in this chat: wait " + seconds + " seconds before sending another message to this chat." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.seconds = seconds;
    }
}
exports.SlowModeWaitError = SlowModeWaitError;
/** Sorry, for security reasons, you will be able to begin downloading your data in %d seconds. We have notified all your devices about the export request to make sure it's authorized and to give you time to react if it's not. */
class TakeoutInitDelayError extends RPCBaseErrors_1.FloodError {
    constructor(args) {
        const seconds = Number(args.capture || 0);
        const message = "Sorry, for security reasons, you will be able to begin downloading your data in " + seconds + " seconds. We have notified all your devices about the export request to make sure it's authorized and to give you time to react if it's not." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.seconds = seconds;
    }
}
exports.TakeoutInitDelayError = TakeoutInitDelayError;
/** Internal error, please repeat the method call. */
class AuthKeyUnsynchronizedError extends RPCBaseErrors_1.ServerError {
    constructor(args) {
        const message = "Internal error, please repeat the method call." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "AUTH_KEY_UNSYNCHRONIZED";
    }
}
exports.AuthKeyUnsynchronizedError = AuthKeyUnsynchronizedError;
/** Internal error (debug info %d), please repeat the method call. */
class AuthRestartError extends RPCBaseErrors_1.ServerError {
    constructor(args) {
        const value = Number(args.capture || 0);
        const message = "Internal error (debug info " + value + "), please repeat the method call." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.value = value;
    }
}
exports.AuthRestartError = AuthRestartError;
/** A server-side timeout occurred while reuploading the file to the CDN DC. */
class CdnUploadTimeoutError extends RPCBaseErrors_1.ServerError {
    constructor(args) {
        const message = "A server-side timeout occurred while reuploading the file to the CDN DC." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CDN_UPLOAD_TIMEOUT";
    }
}
exports.CdnUploadTimeoutError = CdnUploadTimeoutError;
/** Failure while generating the chat ID. */
class ChatIdGenerateFailedError extends RPCBaseErrors_1.ServerError {
    constructor(args) {
        const message = "Failure while generating the chat ID." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "CHAT_ID_GENERATE_FAILED";
    }
}
exports.ChatIdGenerateFailedError = ChatIdGenerateFailedError;
/** Channel internal replication issues, try again later (treat this like an RPC_CALL_FAIL). */
class PersistentTimestampOutdatedError extends RPCBaseErrors_1.ServerError {
    constructor(args) {
        const message = "Channel internal replication issues, try again later (treat this like an RPC_CALL_FAIL)." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "PERSISTENT_TIMESTAMP_OUTDATED";
    }
}
exports.PersistentTimestampOutdatedError = PersistentTimestampOutdatedError;
/** You provided a random ID that was already used. */
class RandomIdDuplicateError extends RPCBaseErrors_1.ServerError {
    constructor(args) {
        const message = "You provided a random ID that was already used." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "RANDOM_ID_DUPLICATE";
    }
}
exports.RandomIdDuplicateError = RandomIdDuplicateError;
/** The specified media is invalid. */
class SendMediaInvalidError extends RPCBaseErrors_1.ServerError {
    constructor(args) {
        const message = "The specified media is invalid." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SEND_MEDIA_INVALID";
    }
}
exports.SendMediaInvalidError = SendMediaInvalidError;
/** Failure while signing in. */
class SignInFailedError extends RPCBaseErrors_1.ServerError {
    constructor(args) {
        const message = "Failure while signing in." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "SIGN_IN_FAILED";
    }
}
exports.SignInFailedError = SignInFailedError;
/** Translation failed, please try again later. */
class TranslateReqFailedError extends RPCBaseErrors_1.ServerError {
    constructor(args) {
        const message = "Translation failed, please try again later." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TRANSLATE_REQ_FAILED";
    }
}
exports.TranslateReqFailedError = TranslateReqFailedError;
/** A timeout occurred while translating the specified text. */
class TranslationTimeoutError extends RPCBaseErrors_1.ServerError {
    constructor(args) {
        const message = "A timeout occurred while translating the specified text." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "TRANSLATION_TIMEOUT";
    }
}
exports.TranslationTimeoutError = TranslationTimeoutError;
/** Timeout while fetching data. */
class TimeoutError extends RPCBaseErrors_1.TimedOutError {
    constructor(args) {
        const message = "Timeout while fetching data." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "Timeout";
    }
}
exports.TimeoutError = TimeoutError;
/** Spent too much time waiting for a previous query in the invokeAfterMsg request queue, aborting! */
class MsgWaitTimeoutError extends RPCBaseErrors_1.TimedOutError {
    constructor(args) {
        const message = "Spent too much time waiting for a previous query in the invokeAfterMsg request queue, aborting!" + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.errorMessage = "MSG_WAIT_TIMEOUT";
    }
}
exports.MsgWaitTimeoutError = MsgWaitTimeoutError;
/** A wait of %d seconds is required in the test servers before repeating the action. */
class FloodTestPhoneWaitError extends RPCBaseErrors_1.FloodError {
    constructor(args) {
        const seconds = Number(args.capture || 0);
        const message = "A wait of " + seconds + " seconds is required in the test servers before repeating the action." + RPCBaseErrors_1.RPCError._fmtRequest(args.request);
        super(message, args.request);
        this.message = message;
        this.seconds = seconds;
    }
}
exports.FloodTestPhoneWaitError = FloodTestPhoneWaitError;
exports.rpcErrorsDict = new Map([
    ["ABOUT_TOO_LONG", AboutTooLongError],
    ["ACCESS_TOKEN_EXPIRED", AccessTokenExpiredError],
    ["ACCESS_TOKEN_INVALID", AccessTokenInvalidError],
    ["AD_EXPIRED", AdExpiredError],
    ["ADDRESS_INVALID", AddressInvalidError],
    ["ADMIN_ID_INVALID", AdminIdInvalidError],
    ["ADMIN_RANK_EMOJI_NOT_ALLOWED", AdminRankEmojiNotAllowedError],
    ["ADMIN_RANK_INVALID", AdminRankInvalidError],
    ["ADMIN_RIGHTS_EMPTY", AdminRightsEmptyError],
    ["ADMINS_TOO_MUCH", AdminsTooMuchError],
    ["ALBUM_PHOTOS_TOO_MANY", AlbumPhotosTooManyError],
    ["API_ID_INVALID", ApiIdInvalidError],
    ["API_ID_PUBLISHED_FLOOD", ApiIdPublishedFloodError],
    ["ARTICLE_TITLE_EMPTY", ArticleTitleEmptyError],
    ["AUDIO_CONTENT_URL_EMPTY", AudioContentUrlEmptyError],
    ["AUDIO_TITLE_EMPTY", AudioTitleEmptyError],
    ["AUTH_BYTES_INVALID", AuthBytesInvalidError],
    ["AUTH_TOKEN_ALREADY_ACCEPTED", AuthTokenAlreadyAcceptedError],
    ["AUTH_TOKEN_EXCEPTION", AuthTokenExceptionError],
    ["AUTH_TOKEN_EXPIRED", AuthTokenExpiredError],
    ["AUTH_TOKEN_INVALID", AuthTokenInvalidError],
    ["AUTH_TOKEN_INVALIDX", AuthTokenInvalidxError],
    ["AUTOARCHIVE_NOT_AVAILABLE", AutoarchiveNotAvailableError],
    ["BALANCE_TOO_LOW", BalanceTooLowError],
    ["BANK_CARD_NUMBER_INVALID", BankCardNumberInvalidError],
    ["BANNED_RIGHTS_INVALID", BannedRightsInvalidError],
    ["BIRTHDAY_INVALID", BirthdayInvalidError],
    ["BOOST_NOT_MODIFIED", BoostNotModifiedError],
    ["BOOST_PEER_INVALID", BoostPeerInvalidError],
    ["BOOSTS_EMPTY", BoostsEmptyError],
    ["BOOSTS_REQUIRED", BoostsRequiredError],
    ["BOT_ALREADY_DISABLED", BotAlreadyDisabledError],
    ["BOT_APP_BOT_INVALID", BotAppBotInvalidError],
    ["BOT_APP_INVALID", BotAppInvalidError],
    ["BOT_APP_SHORTNAME_INVALID", BotAppShortnameInvalidError],
    ["BOT_BUSINESS_MISSING", BotBusinessMissingError],
    ["BOT_CHANNELS_NA", BotChannelsNaError],
    ["BOT_COMMAND_DESCRIPTION_INVALID", BotCommandDescriptionInvalidError],
    ["BOT_COMMAND_INVALID", BotCommandInvalidError],
    ["BOT_DOMAIN_INVALID", BotDomainInvalidError],
    ["BOT_FALLBACK_UNSUPPORTED", BotFallbackUnsupportedError],
    ["BOT_GAMES_DISABLED", BotGamesDisabledError],
    ["BOT_GROUPS_BLOCKED", BotGroupsBlockedError],
    ["BOT_INLINE_DISABLED", BotInlineDisabledError],
    ["BOT_INVALID", BotInvalidError],
    ["BOT_INVOICE_INVALID", BotInvoiceInvalidError],
    ["BOT_NOT_CONNECTED_YET", BotNotConnectedYetError],
    ["BOT_ONESIDE_NOT_AVAIL", BotOnesideNotAvailError],
    ["BOT_PAYMENTS_DISABLED", BotPaymentsDisabledError],
    ["BOT_RESPONSE_TIMEOUT", BotResponseTimeoutError],
    ["BOT_SCORE_NOT_MODIFIED", BotScoreNotModifiedError],
    ["BOT_WEBVIEW_DISABLED", BotWebviewDisabledError],
    ["BOTS_TOO_MUCH", BotsTooMuchError],
    ["BROADCAST_ID_INVALID", BroadcastIdInvalidError],
    ["BROADCAST_PUBLIC_VOTERS_FORBIDDEN", BroadcastPublicVotersForbiddenError],
    ["BROADCAST_REQUIRED", BroadcastRequiredError],
    ["BUSINESS_CONNECTION_INVALID", BusinessConnectionInvalidError],
    ["BUSINESS_CONNECTION_NOT_ALLOWED", BusinessConnectionNotAllowedError],
    ["BUSINESS_PEER_INVALID", BusinessPeerInvalidError],
    ["BUSINESS_PEER_USAGE_MISSING", BusinessPeerUsageMissingError],
    ["BUSINESS_RECIPIENTS_EMPTY", BusinessRecipientsEmptyError],
    ["BUSINESS_WORK_HOURS_EMPTY", BusinessWorkHoursEmptyError],
    ["BUSINESS_WORK_HOURS_PERIOD_INVALID", BusinessWorkHoursPeriodInvalidError],
    ["BUTTON_COPY_TEXT_INVALID", ButtonCopyTextInvalidError],
    ["BUTTON_DATA_INVALID", ButtonDataInvalidError],
    ["BUTTON_ID_INVALID", ButtonIdInvalidError],
    ["BUTTON_INVALID", ButtonInvalidError],
    ["BUTTON_POS_INVALID", ButtonPosInvalidError],
    ["BUTTON_TEXT_INVALID", ButtonTextInvalidError],
    ["BUTTON_TYPE_INVALID", ButtonTypeInvalidError],
    ["BUTTON_URL_INVALID", ButtonUrlInvalidError],
    ["BUTTON_USER_INVALID", ButtonUserInvalidError],
    ["BUTTON_USER_PRIVACY_RESTRICTED", ButtonUserPrivacyRestrictedError],
    ["CALL_ALREADY_ACCEPTED", CallAlreadyAcceptedError],
    ["CALL_ALREADY_DECLINED", CallAlreadyDeclinedError],
    ["CALL_OCCUPY_FAILED", CallOccupyFailedError],
    ["CALL_PEER_INVALID", CallPeerInvalidError],
    ["CALL_PROTOCOL_FLAGS_INVALID", CallProtocolFlagsInvalidError],
    ["CALL_PROTOCOL_LAYER_INVALID", CallProtocolLayerInvalidError],
    ["CDN_METHOD_INVALID", CdnMethodInvalidError],
    ["CHANNEL_FORUM_MISSING", ChannelForumMissingError],
    ["CHANNEL_ID_INVALID", ChannelIdInvalidError],
    ["CHANNEL_INVALID", ChannelInvalidError],
    ["CHANNEL_MONOFORUM_UNSUPPORTED", ChannelMonoforumUnsupportedError],
    ["CHANNEL_PARICIPANT_MISSING", ChannelParicipantMissingError],
    ["CHANNEL_PRIVATE", ChannelPrivateError],
    ["CHANNEL_TOO_BIG", ChannelTooBigError],
    ["CHANNEL_TOO_LARGE", ChannelTooLargeError],
    ["CHANNELS_ADMIN_LOCATED_TOO_MUCH", ChannelsAdminLocatedTooMuchError],
    ["CHANNELS_ADMIN_PUBLIC_TOO_MUCH", ChannelsAdminPublicTooMuchError],
    ["CHANNELS_TOO_MUCH", ChannelsTooMuchError],
    ["CHARGE_ALREADY_REFUNDED", ChargeAlreadyRefundedError],
    ["CHARGE_ID_EMPTY", ChargeIdEmptyError],
    ["CHARGE_ID_INVALID", ChargeIdInvalidError],
    ["CHAT_ABOUT_NOT_MODIFIED", ChatAboutNotModifiedError],
    ["CHAT_ABOUT_TOO_LONG", ChatAboutTooLongError],
    ["CHAT_ADMIN_REQUIRED", ChatAdminRequiredError],
    ["CHAT_DISCUSSION_UNALLOWED", ChatDiscussionUnallowedError],
    ["CHAT_FORWARDS_RESTRICTED", ChatForwardsRestrictedError],
    ["CHAT_ID_EMPTY", ChatIdEmptyError],
    ["CHAT_ID_INVALID", ChatIdInvalidError],
    ["CHAT_INVALID", ChatInvalidError],
    ["CHAT_INVITE_PERMANENT", ChatInvitePermanentError],
    ["CHAT_LINK_EXISTS", ChatLinkExistsError],
    ["CHAT_MEMBER_ADD_FAILED", ChatMemberAddFailedError],
    ["CHAT_NOT_MODIFIED", ChatNotModifiedError],
    ["CHAT_PUBLIC_REQUIRED", ChatPublicRequiredError],
    ["CHAT_RESTRICTED", ChatRestrictedError],
    ["CHAT_REVOKE_DATE_UNSUPPORTED", ChatRevokeDateUnsupportedError],
    ["CHAT_SEND_INLINE_FORBIDDEN", ChatSendInlineForbiddenError],
    ["CHAT_TITLE_EMPTY", ChatTitleEmptyError],
    ["CHAT_TOO_BIG", ChatTooBigError],
    ["CHATLINK_SLUG_EMPTY", ChatlinkSlugEmptyError],
    ["CHATLINK_SLUG_EXPIRED", ChatlinkSlugExpiredError],
    ["CHATLINKS_TOO_MUCH", ChatlinksTooMuchError],
    ["CHATLIST_EXCLUDE_INVALID", ChatlistExcludeInvalidError],
    ["CHATLISTS_TOO_MUCH", ChatlistsTooMuchError],
    ["CODE_EMPTY", CodeEmptyError],
    ["CODE_HASH_INVALID", CodeHashInvalidError],
    ["CODE_INVALID", CodeInvalidError],
    ["COLLECTIBLE_INVALID", CollectibleInvalidError],
    ["COLLECTIBLE_NOT_FOUND", CollectibleNotFoundError],
    ["COLOR_INVALID", ColorInvalidError],
    ["CONNECTION_API_ID_INVALID", ConnectionApiIdInvalidError],
    ["CONNECTION_APP_VERSION_EMPTY", ConnectionAppVersionEmptyError],
    ["CONNECTION_ID_INVALID", ConnectionIdInvalidError],
    ["CONNECTION_LAYER_INVALID", ConnectionLayerInvalidError],
    ["CONTACT_ADD_MISSING", ContactAddMissingError],
    ["CONTACT_ID_INVALID", ContactIdInvalidError],
    ["CONTACT_MISSING", ContactMissingError],
    ["CONTACT_NAME_EMPTY", ContactNameEmptyError],
    ["CONTACT_REQ_MISSING", ContactReqMissingError],
    ["CREATE_CALL_FAILED", CreateCallFailedError],
    ["CURRENCY_TOTAL_AMOUNT_INVALID", CurrencyTotalAmountInvalidError],
    ["CUSTOM_REACTIONS_TOO_MANY", CustomReactionsTooManyError],
    ["DATA_HASH_SIZE_INVALID", DataHashSizeInvalidError],
    ["DATA_INVALID", DataInvalidError],
    ["DATA_JSON_INVALID", DataJsonInvalidError],
    ["DATA_TOO_LONG", DataTooLongError],
    ["DATE_EMPTY", DateEmptyError],
    ["DC_ID_INVALID", DcIdInvalidError],
    ["DH_G_A_INVALID", DhGAInvalidError],
    ["DOCUMENT_INVALID", DocumentInvalidError],
    ["EFFECT_ID_INVALID", EffectIdInvalidError],
    ["EMAIL_HASH_EXPIRED", EmailHashExpiredError],
    ["EMAIL_INVALID", EmailInvalidError],
    ["EMAIL_NOT_ALLOWED", EmailNotAllowedError],
    ["EMAIL_NOT_SETUP", EmailNotSetupError],
    ["EMAIL_UNCONFIRMED", EmailUnconfirmedError],
    ["EMAIL_VERIFY_EXPIRED", EmailVerifyExpiredError],
    ["EMOJI_INVALID", EmojiInvalidError],
    ["EMOJI_MARKUP_INVALID", EmojiMarkupInvalidError],
    ["EMOJI_NOT_MODIFIED", EmojiNotModifiedError],
    ["EMOTICON_EMPTY", EmoticonEmptyError],
    ["EMOTICON_INVALID", EmoticonInvalidError],
    ["EMOTICON_STICKERPACK_MISSING", EmoticonStickerpackMissingError],
    ["ENCRYPTED_MESSAGE_INVALID", EncryptedMessageInvalidError],
    ["ENCRYPTION_ALREADY_ACCEPTED", EncryptionAlreadyAcceptedError],
    ["ENCRYPTION_ALREADY_DECLINED", EncryptionAlreadyDeclinedError],
    ["ENCRYPTION_DECLINED", EncryptionDeclinedError],
    ["ENCRYPTION_ID_INVALID", EncryptionIdInvalidError],
    ["ENTITIES_TOO_LONG", EntitiesTooLongError],
    ["ENTITY_BOUNDS_INVALID", EntityBoundsInvalidError],
    ["ENTITY_MENTION_USER_INVALID", EntityMentionUserInvalidError],
    ["ERROR_TEXT_EMPTY", ErrorTextEmptyError],
    ["EXPIRE_DATE_INVALID", ExpireDateInvalidError],
    ["EXPIRES_AT_INVALID", ExpiresAtInvalidError],
    ["EXPORT_CARD_INVALID", ExportCardInvalidError],
    ["EXTENDED_MEDIA_AMOUNT_INVALID", ExtendedMediaAmountInvalidError],
    ["EXTENDED_MEDIA_INVALID", ExtendedMediaInvalidError],
    ["EXTERNAL_URL_INVALID", ExternalUrlInvalidError],
    ["FILE_CONTENT_TYPE_INVALID", FileContentTypeInvalidError],
    ["FILE_EMTPY", FileEmtpyError],
    ["FILE_ID_INVALID", FileIdInvalidError],
    ["FILE_PART_EMPTY", FilePartEmptyError],
    ["FILE_PART_INVALID", FilePartInvalidError],
    ["FILE_PART_LENGTH_INVALID", FilePartLengthInvalidError],
    ["FILE_PART_SIZE_CHANGED", FilePartSizeChangedError],
    ["FILE_PART_SIZE_INVALID", FilePartSizeInvalidError],
    ["FILE_PART_TOO_BIG", FilePartTooBigError],
    ["FILE_PART_TOO_SMALL", FilePartTooSmallError],
    ["FILE_PARTS_INVALID", FilePartsInvalidError],
    ["FILE_REFERENCE_EXPIRED", FileReferenceExpiredError],
    ["FILE_REFERENCE_INVALID", FileReferenceInvalidError],
    ["FILE_REFERENCE_EMPTY", FileReferenceEmptyError],
    ["FILE_TITLE_EMPTY", FileTitleEmptyError],
    ["FILE_TOKEN_INVALID", FileTokenInvalidError],
    ["FILTER_ID_INVALID", FilterIdInvalidError],
    ["FILTER_INCLUDE_EMPTY", FilterIncludeEmptyError],
    ["FILTER_NOT_SUPPORTED", FilterNotSupportedError],
    ["FILTER_TITLE_EMPTY", FilterTitleEmptyError],
    ["FIRSTNAME_INVALID", FirstnameInvalidError],
    ["FOLDER_ID_EMPTY", FolderIdEmptyError],
    ["FOLDER_ID_INVALID", FolderIdInvalidError],
    ["FORM_EXPIRED", FormExpiredError],
    ["FORM_ID_EMPTY", FormIdEmptyError],
    ["FORM_SUBMIT_DUPLICATE", FormSubmitDuplicateError],
    ["FORM_UNSUPPORTED", FormUnsupportedError],
    ["FORUM_ENABLED", ForumEnabledError],
    ["FRESH_CHANGE_ADMINS_FORBIDDEN", FreshChangeAdminsForbiddenError],
    ["FROM_MESSAGE_BOT_DISABLED", FromMessageBotDisabledError],
    ["FROM_PEER_INVALID", FromPeerInvalidError],
    ["FROZEN_PARTICIPANT_MISSING", FrozenParticipantMissingError],
    ["GAME_BOT_INVALID", GameBotInvalidError],
    ["GENERAL_MODIFY_ICON_FORBIDDEN", GeneralModifyIconForbiddenError],
    ["GEO_POINT_INVALID", GeoPointInvalidError],
    ["GIF_CONTENT_TYPE_INVALID", GifContentTypeInvalidError],
    ["GIF_ID_INVALID", GifIdInvalidError],
    ["GIFT_MONTHS_INVALID", GiftMonthsInvalidError],
    ["GIFT_SLUG_EXPIRED", GiftSlugExpiredError],
    ["GIFT_SLUG_INVALID", GiftSlugInvalidError],
    ["GIFT_STARS_INVALID", GiftStarsInvalidError],
    ["GRAPH_EXPIRED_RELOAD", GraphExpiredReloadError],
    ["GRAPH_INVALID_RELOAD", GraphInvalidReloadError],
    ["GRAPH_OUTDATED_RELOAD", GraphOutdatedReloadError],
    ["GROUPCALL_ALREADY_DISCARDED", GroupcallAlreadyDiscardedError],
    ["GROUPCALL_FORBIDDEN", GroupcallForbiddenError],
    ["GROUPCALL_INVALID", GroupcallInvalidError],
    ["GROUPCALL_JOIN_MISSING", GroupcallJoinMissingError],
    ["GROUPCALL_NOT_MODIFIED", GroupcallNotModifiedError],
    ["GROUPCALL_SSRC_DUPLICATE_MUCH", GroupcallSsrcDuplicateMuchError],
    ["GROUPED_MEDIA_INVALID", GroupedMediaInvalidError],
    ["HASH_INVALID", HashInvalidError],
    ["HASH_SIZE_INVALID", HashSizeInvalidError],
    ["HASHTAG_INVALID", HashtagInvalidError],
    ["HIDE_REQUESTER_MISSING", HideRequesterMissingError],
    ["ID_EXPIRED", IdExpiredError],
    ["ID_INVALID", IdInvalidError],
    ["IMAGE_PROCESS_FAILED", ImageProcessFailedError],
    ["IMPORT_FILE_INVALID", ImportFileInvalidError],
    ["IMPORT_FORMAT_DATE_INVALID", ImportFormatDateInvalidError],
    ["IMPORT_FORMAT_UNRECOGNIZED", ImportFormatUnrecognizedError],
    ["IMPORT_ID_INVALID", ImportIdInvalidError],
    ["IMPORT_TOKEN_INVALID", ImportTokenInvalidError],
    ["INLINE_RESULT_EXPIRED", InlineResultExpiredError],
    ["INPUT_CHATLIST_INVALID", InputChatlistInvalidError],
    ["INPUT_FILE_INVALID", InputFileInvalidError],
    ["INPUT_FILTER_INVALID", InputFilterInvalidError],
    ["INPUT_PEERS_EMPTY", InputPeersEmptyError],
    ["INPUT_PURPOSE_INVALID", InputPurposeInvalidError],
    ["INPUT_TEXT_EMPTY", InputTextEmptyError],
    ["INPUT_TEXT_TOO_LONG", InputTextTooLongError],
    ["INPUT_USER_DEACTIVATED", InputUserDeactivatedError],
    ["INVITE_FORBIDDEN_WITH_JOINAS", InviteForbiddenWithJoinasError],
    ["INVITE_HASH_EMPTY", InviteHashEmptyError],
    ["INVITE_HASH_EXPIRED", InviteHashExpiredError],
    ["INVITE_HASH_INVALID", InviteHashInvalidError],
    ["INVITE_REQUEST_SENT", InviteRequestSentError],
    ["INVITE_REVOKED_MISSING", InviteRevokedMissingError],
    ["INVITE_SLUG_EMPTY", InviteSlugEmptyError],
    ["INVITE_SLUG_EXPIRED", InviteSlugExpiredError],
    ["INVITE_SLUG_INVALID", InviteSlugInvalidError],
    ["INVITES_TOO_MUCH", InvitesTooMuchError],
    ["INVOICE_INVALID", InvoiceInvalidError],
    ["INVOICE_PAYLOAD_INVALID", InvoicePayloadInvalidError],
    ["JOIN_AS_PEER_INVALID", JoinAsPeerInvalidError],
    ["LANG_CODE_INVALID", LangCodeInvalidError],
    ["LANG_CODE_NOT_SUPPORTED", LangCodeNotSupportedError],
    ["LANG_PACK_INVALID", LangPackInvalidError],
    ["LANGUAGE_INVALID", LanguageInvalidError],
    ["LASTNAME_INVALID", LastnameInvalidError],
    ["LIMIT_INVALID", LimitInvalidError],
    ["LINK_NOT_MODIFIED", LinkNotModifiedError],
    ["LOCATION_INVALID", LocationInvalidError],
    ["MAX_DATE_INVALID", MaxDateInvalidError],
    ["MAX_ID_INVALID", MaxIdInvalidError],
    ["MAX_QTS_INVALID", MaxQtsInvalidError],
    ["MD5_CHECKSUM_INVALID", Md5ChecksumInvalidError],
    ["MEDIA_ALREADY_PAID", MediaAlreadyPaidError],
    ["MEDIA_CAPTION_TOO_LONG", MediaCaptionTooLongError],
    ["MEDIA_EMPTY", MediaEmptyError],
    ["MEDIA_FILE_INVALID", MediaFileInvalidError],
    ["MEDIA_GROUPED_INVALID", MediaGroupedInvalidError],
    ["MEDIA_INVALID", MediaInvalidError],
    ["MEDIA_NEW_INVALID", MediaNewInvalidError],
    ["MEDIA_PREV_INVALID", MediaPrevInvalidError],
    ["MEDIA_TTL_INVALID", MediaTtlInvalidError],
    ["MEDIA_TYPE_INVALID", MediaTypeInvalidError],
    ["MEDIA_VIDEO_STORY_MISSING", MediaVideoStoryMissingError],
    ["MEGAGROUP_GEO_REQUIRED", MegagroupGeoRequiredError],
    ["MEGAGROUP_ID_INVALID", MegagroupIdInvalidError],
    ["MEGAGROUP_PREHISTORY_HIDDEN", MegagroupPrehistoryHiddenError],
    ["MEGAGROUP_REQUIRED", MegagroupRequiredError],
    ["MESSAGE_EDIT_TIME_EXPIRED", MessageEditTimeExpiredError],
    ["MESSAGE_EMPTY", MessageEmptyError],
    ["MESSAGE_ID_INVALID", MessageIdInvalidError],
    ["MESSAGE_IDS_EMPTY", MessageIdsEmptyError],
    ["MESSAGE_NOT_MODIFIED", MessageNotModifiedError],
    ["MESSAGE_NOT_READ_YET", MessageNotReadYetError],
    ["MESSAGE_POLL_CLOSED", MessagePollClosedError],
    ["MESSAGE_TOO_LONG", MessageTooLongError],
    ["MESSAGE_TOO_OLD", MessageTooOldError],
    ["METHOD_INVALID", MethodInvalidError],
    ["MIN_DATE_INVALID", MinDateInvalidError],
    ["MONTH_INVALID", MonthInvalidError],
    ["MSG_ID_INVALID", MsgIdInvalidError],
    ["MSG_TOO_OLD", MsgTooOldError],
    ["MSG_VOICE_MISSING", MsgVoiceMissingError],
    ["MSG_WAIT_FAILED", MsgWaitError],
    ["MULTI_MEDIA_TOO_LONG", MultiMediaTooLongError],
    ["NEW_SALT_INVALID", NewSaltInvalidError],
    ["NEW_SETTINGS_EMPTY", NewSettingsEmptyError],
    ["NEW_SETTINGS_INVALID", NewSettingsInvalidError],
    ["NEXT_OFFSET_INVALID", NextOffsetInvalidError],
    ["NO_PAYMENT_NEEDED", NoPaymentNeededError],
    ["NOGENERAL_HIDE_FORBIDDEN", NogeneralHideForbiddenError],
    ["NOT_ELIGIBLE", NotEligibleError],
    ["NOT_JOINED", NotJoinedError],
    ["OFFSET_INVALID", OffsetInvalidError],
    ["OFFSET_PEER_ID_INVALID", OffsetPeerIdInvalidError],
    ["OPTION_INVALID", OptionInvalidError],
    ["OPTIONS_TOO_MUCH", OptionsTooMuchError],
    ["ORDER_INVALID", OrderInvalidError],
    ["PACK_SHORT_NAME_INVALID", PackShortNameInvalidError],
    ["PACK_SHORT_NAME_OCCUPIED", PackShortNameOccupiedError],
    ["PACK_TITLE_INVALID", PackTitleInvalidError],
    ["PACK_TYPE_INVALID", PackTypeInvalidError],
    ["PARENT_PEER_INVALID", ParentPeerInvalidError],
    ["PARTICIPANT_ID_INVALID", ParticipantIdInvalidError],
    ["PARTICIPANT_JOIN_MISSING", ParticipantJoinMissingError],
    ["PARTICIPANT_VERSION_OUTDATED", ParticipantVersionOutdatedError],
    ["PARTICIPANTS_TOO_FEW", ParticipantsTooFewError],
    ["PASSWORD_EMPTY", PasswordEmptyError],
    ["PASSWORD_HASH_INVALID", PasswordHashInvalidError],
    ["PASSWORD_MISSING", PasswordMissingError],
    ["PASSWORD_RECOVERY_EXPIRED", PasswordRecoveryExpiredError],
    ["PASSWORD_RECOVERY_NA", PasswordRecoveryNaError],
    ["PASSWORD_REQUIRED", PasswordRequiredError],
    ["PAYMENT_CREDENTIALS_INVALID", PaymentCredentialsInvalidError],
    ["PAYMENT_PROVIDER_INVALID", PaymentProviderInvalidError],
    ["PAYMENT_REQUIRED", PaymentRequiredError],
    ["PEER_HISTORY_EMPTY", PeerHistoryEmptyError],
    ["PEER_ID_INVALID", PeerIdInvalidError],
    ["PEER_ID_NOT_SUPPORTED", PeerIdNotSupportedError],
    ["PEER_TYPES_INVALID", PeerTypesInvalidError],
    ["PEERS_LIST_EMPTY", PeersListEmptyError],
    ["PERSISTENT_TIMESTAMP_EMPTY", PersistentTimestampEmptyError],
    ["PERSISTENT_TIMESTAMP_INVALID", PersistentTimestampInvalidError],
    ["PHONE_CODE_EMPTY", PhoneCodeEmptyError],
    ["PHONE_CODE_EXPIRED", PhoneCodeExpiredError],
    ["PHONE_CODE_HASH_EMPTY", PhoneCodeHashEmptyError],
    ["PHONE_CODE_INVALID", PhoneCodeInvalidError],
    ["PHONE_HASH_EXPIRED", PhoneHashExpiredError],
    ["PHONE_NOT_OCCUPIED", PhoneNotOccupiedError],
    ["PHONE_NUMBER_APP_SIGNUP_FORBIDDEN", PhoneNumberAppSignupForbiddenError],
    ["PHONE_NUMBER_BANNED", PhoneNumberBannedError],
    ["PHONE_NUMBER_FLOOD", PhoneNumberFloodError],
    ["PHONE_NUMBER_INVALID", PhoneNumberInvalidError],
    ["PHONE_NUMBER_OCCUPIED", PhoneNumberOccupiedError],
    ["PHONE_NUMBER_UNOCCUPIED", PhoneNumberUnoccupiedError],
    ["PHONE_PASSWORD_PROTECTED", PhonePasswordProtectedError],
    ["PHOTO_CONTENT_TYPE_INVALID", PhotoContentTypeInvalidError],
    ["PHOTO_CONTENT_URL_EMPTY", PhotoContentUrlEmptyError],
    ["PHOTO_CROP_FILE_MISSING", PhotoCropFileMissingError],
    ["PHOTO_CROP_SIZE_SMALL", PhotoCropSizeSmallError],
    ["PHOTO_EXT_INVALID", PhotoExtInvalidError],
    ["PHOTO_FILE_MISSING", PhotoFileMissingError],
    ["PHOTO_ID_INVALID", PhotoIdInvalidError],
    ["PHOTO_INVALID", PhotoInvalidError],
    ["PHOTO_INVALID_DIMENSIONS", PhotoInvalidDimensionsError],
    ["PHOTO_SAVE_FILE_INVALID", PhotoSaveFileInvalidError],
    ["PHOTO_THUMB_URL_EMPTY", PhotoThumbUrlEmptyError],
    ["PIN_RESTRICTED", PinRestrictedError],
    ["PINNED_DIALOGS_TOO_MUCH", PinnedDialogsTooMuchError],
    ["PINNED_TOO_MUCH", PinnedTooMuchError],
    ["POLL_ANSWER_INVALID", PollAnswerInvalidError],
    ["POLL_ANSWERS_INVALID", PollAnswersInvalidError],
    ["POLL_OPTION_DUPLICATE", PollOptionDuplicateError],
    ["POLL_OPTION_INVALID", PollOptionInvalidError],
    ["POLL_QUESTION_INVALID", PollQuestionInvalidError],
    ["PREMIUM_ACCOUNT_REQUIRED", PremiumAccountRequiredError],
    ["PRICING_CHAT_INVALID", PricingChatInvalidError],
    ["PRIVACY_KEY_INVALID", PrivacyKeyInvalidError],
    ["PRIVACY_TOO_LONG", PrivacyTooLongError],
    ["PRIVACY_VALUE_INVALID", PrivacyValueInvalidError],
    ["PUBLIC_KEY_REQUIRED", PublicKeyRequiredError],
    ["PURPOSE_INVALID", PurposeInvalidError],
    ["QUERY_ID_EMPTY", QueryIdEmptyError],
    ["QUERY_ID_INVALID", QueryIdInvalidError],
    ["QUERY_TOO_SHORT", QueryTooShortError],
    ["QUICK_REPLIES_BOT_NOT_ALLOWED", QuickRepliesBotNotAllowedError],
    ["QUICK_REPLIES_TOO_MUCH", QuickRepliesTooMuchError],
    ["QUIZ_ANSWER_MISSING", QuizAnswerMissingError],
    ["QUIZ_CORRECT_ANSWER_INVALID", QuizCorrectAnswerInvalidError],
    ["QUIZ_CORRECT_ANSWERS_EMPTY", QuizCorrectAnswersEmptyError],
    ["QUIZ_CORRECT_ANSWERS_TOO_MUCH", QuizCorrectAnswersTooMuchError],
    ["QUIZ_MULTIPLE_INVALID", QuizMultipleInvalidError],
    ["QUOTE_TEXT_INVALID", QuoteTextInvalidError],
    ["RAISE_HAND_FORBIDDEN", RaiseHandForbiddenError],
    ["RANDOM_ID_EMPTY", RandomIdEmptyError],
    ["RANDOM_ID_EXPIRED", RandomIdExpiredError],
    ["RANDOM_ID_INVALID", RandomIdInvalidError],
    ["RANDOM_LENGTH_INVALID", RandomLengthInvalidError],
    ["RANGES_INVALID", RangesInvalidError],
    ["REACTION_EMPTY", ReactionEmptyError],
    ["REACTION_INVALID", ReactionInvalidError],
    ["REACTIONS_COUNT_INVALID", ReactionsCountInvalidError],
    ["REACTIONS_TOO_MANY", ReactionsTooManyError],
    ["RECEIPT_EMPTY", ReceiptEmptyError],
    ["REPLY_MARKUP_BUY_EMPTY", ReplyMarkupBuyEmptyError],
    ["REPLY_MARKUP_GAME_EMPTY", ReplyMarkupGameEmptyError],
    ["REPLY_MARKUP_INVALID", ReplyMarkupInvalidError],
    ["REPLY_MARKUP_TOO_LONG", ReplyMarkupTooLongError],
    ["REPLY_MESSAGE_ID_INVALID", ReplyMessageIdInvalidError],
    ["REPLY_MESSAGES_TOO_MUCH", ReplyMessagesTooMuchError],
    ["REPLY_TO_INVALID", ReplyToInvalidError],
    ["REPLY_TO_MONOFORUM_PEER_INVALID", ReplyToMonoforumPeerInvalidError],
    ["REPLY_TO_USER_INVALID", ReplyToUserInvalidError],
    ["REQUEST_TOKEN_INVALID", RequestTokenInvalidError],
    ["RESET_REQUEST_MISSING", ResetRequestMissingError],
    ["RESULT_ID_DUPLICATE", ResultIdDuplicateError],
    ["RESULT_ID_EMPTY", ResultIdEmptyError],
    ["RESULT_ID_INVALID", ResultIdInvalidError],
    ["RESULT_TYPE_INVALID", ResultTypeInvalidError],
    ["RESULTS_TOO_MUCH", ResultsTooMuchError],
    ["REVOTE_NOT_ALLOWED", RevoteNotAllowedError],
    ["RIGHTS_NOT_MODIFIED", RightsNotModifiedError],
    ["RINGTONE_INVALID", RingtoneInvalidError],
    ["RINGTONE_MIME_INVALID", RingtoneMimeInvalidError],
    ["RSA_DECRYPT_FAILED", RsaDecryptFailedError],
    ["SAVED_ID_EMPTY", SavedIdEmptyError],
    ["SCHEDULE_BOT_NOT_ALLOWED", ScheduleBotNotAllowedError],
    ["SCHEDULE_DATE_INVALID", ScheduleDateInvalidError],
    ["SCHEDULE_DATE_TOO_LATE", ScheduleDateTooLateError],
    ["SCHEDULE_STATUS_PRIVATE", ScheduleStatusPrivateError],
    ["SCHEDULE_TOO_MUCH", ScheduleTooMuchError],
    ["SCORE_INVALID", ScoreInvalidError],
    ["SEARCH_QUERY_EMPTY", SearchQueryEmptyError],
    ["SEARCH_WITH_LINK_NOT_SUPPORTED", SearchWithLinkNotSupportedError],
    ["SECONDS_INVALID", SecondsInvalidError],
    ["SECURE_SECRET_REQUIRED", SecureSecretRequiredError],
    ["SELF_DELETE_RESTRICTED", SelfDeleteRestrictedError],
    ["SEND_AS_PEER_INVALID", SendAsPeerInvalidError],
    ["SEND_MESSAGE_GAME_INVALID", SendMessageGameInvalidError],
    ["SEND_MESSAGE_MEDIA_INVALID", SendMessageMediaInvalidError],
    ["SEND_MESSAGE_TYPE_INVALID", SendMessageTypeInvalidError],
    ["SETTINGS_INVALID", SettingsInvalidError],
    ["SHA256_HASH_INVALID", Sha256HashInvalidError],
    ["SHORT_NAME_INVALID", ShortNameInvalidError],
    ["SHORT_NAME_OCCUPIED", ShortNameOccupiedError],
    ["SHORTCUT_INVALID", ShortcutInvalidError],
    ["SLOTS_EMPTY", SlotsEmptyError],
    ["SLOWMODE_MULTI_MSGS_DISABLED", SlowmodeMultiMsgsDisabledError],
    ["SLUG_INVALID", SlugInvalidError],
    ["SMS_CODE_CREATE_FAILED", SmsCodeCreateFailedError],
    ["SMSJOB_ID_INVALID", SmsjobIdInvalidError],
    ["SRP_A_INVALID", SrpAInvalidError],
    ["SRP_ID_INVALID", SrpIdInvalidError],
    ["SRP_PASSWORD_CHANGED", SrpPasswordChangedError],
    ["STARGIFT_ALREADY_CONVERTED", StargiftAlreadyConvertedError],
    ["STARGIFT_ALREADY_REFUNDED", StargiftAlreadyRefundedError],
    ["STARGIFT_ALREADY_UPGRADED", StargiftAlreadyUpgradedError],
    ["STARGIFT_INVALID", StargiftInvalidError],
    ["STARGIFT_NOT_FOUND", StargiftNotFoundError],
    ["STARGIFT_OWNER_INVALID", StargiftOwnerInvalidError],
    ["STARGIFT_PEER_INVALID", StargiftPeerInvalidError],
    ["STARGIFT_RESELL_CURRENCY_NOT_ALLOWED", StargiftResellCurrencyNotAllowedError],
    ["STARGIFT_SLUG_INVALID", StargiftSlugInvalidError],
    ["STARGIFT_UPGRADE_UNAVAILABLE", StargiftUpgradeUnavailableError],
    ["STARGIFT_USAGE_LIMITED", StargiftUsageLimitedError],
    ["STARGIFT_USER_USAGE_LIMITED", StargiftUserUsageLimitedError],
    ["STARREF_AWAITING_END", StarrefAwaitingEndError],
    ["STARREF_EXPIRED", StarrefExpiredError],
    ["STARREF_HASH_REVOKED", StarrefHashRevokedError],
    ["STARREF_PERMILLE_INVALID", StarrefPermilleInvalidError],
    ["STARREF_PERMILLE_TOO_LOW", StarrefPermilleTooLowError],
    ["STARS_AMOUNT_INVALID", StarsAmountInvalidError],
    ["STARS_INVOICE_INVALID", StarsInvoiceInvalidError],
    ["STARS_PAYMENT_REQUIRED", StarsPaymentRequiredError],
    ["START_PARAM_EMPTY", StartParamEmptyError],
    ["START_PARAM_INVALID", StartParamInvalidError],
    ["START_PARAM_TOO_LONG", StartParamTooLongError],
    ["STICKER_DOCUMENT_INVALID", StickerDocumentInvalidError],
    ["STICKER_EMOJI_INVALID", StickerEmojiInvalidError],
    ["STICKER_FILE_INVALID", StickerFileInvalidError],
    ["STICKER_GIF_DIMENSIONS", StickerGifDimensionsError],
    ["STICKER_ID_INVALID", StickerIdInvalidError],
    ["STICKER_INVALID", StickerInvalidError],
    ["STICKER_MIME_INVALID", StickerMimeInvalidError],
    ["STICKER_PNG_DIMENSIONS", StickerPngDimensionsError],
    ["STICKER_PNG_NOPNG", StickerPngNopngError],
    ["STICKER_TGS_NODOC", StickerTgsNodocError],
    ["STICKER_TGS_NOTGS", StickerTgsNotgsError],
    ["STICKER_THUMB_PNG_NOPNG", StickerThumbPngNopngError],
    ["STICKER_THUMB_TGS_NOTGS", StickerThumbTgsNotgsError],
    ["STICKER_VIDEO_BIG", StickerVideoBigError],
    ["STICKER_VIDEO_NODOC", StickerVideoNodocError],
    ["STICKER_VIDEO_NOWEBM", StickerVideoNowebmError],
    ["STICKERPACK_STICKERS_TOO_MUCH", StickerpackStickersTooMuchError],
    ["STICKERS_EMPTY", StickersEmptyError],
    ["STICKERS_TOO_MUCH", StickersTooMuchError],
    ["STICKERSET_INVALID", StickersetInvalidError],
    ["STORIES_NEVER_CREATED", StoriesNeverCreatedError],
    ["STORIES_TOO_MUCH", StoriesTooMuchError],
    ["STORY_ID_EMPTY", StoryIdEmptyError],
    ["STORY_ID_INVALID", StoryIdInvalidError],
    ["STORY_NOT_MODIFIED", StoryNotModifiedError],
    ["STORY_PERIOD_INVALID", StoryPeriodInvalidError],
    ["SUBSCRIPTION_EXPORT_MISSING", SubscriptionExportMissingError],
    ["SUBSCRIPTION_ID_INVALID", SubscriptionIdInvalidError],
    ["SUBSCRIPTION_PERIOD_INVALID", SubscriptionPeriodInvalidError],
    ["SUGGESTED_POST_AMOUNT_INVALID", SuggestedPostAmountInvalidError],
    ["SUGGESTED_POST_PEER_INVALID", SuggestedPostPeerInvalidError],
    ["SWITCH_PM_TEXT_EMPTY", SwitchPmTextEmptyError],
    ["SWITCH_WEBVIEW_URL_INVALID", SwitchWebviewUrlInvalidError],
    ["TAKEOUT_INVALID", TakeoutInvalidError],
    ["TAKEOUT_REQUIRED", TakeoutRequiredError],
    ["TASK_ALREADY_EXISTS", TaskAlreadyExistsError],
    ["TEMP_AUTH_KEY_ALREADY_BOUND", TempAuthKeyAlreadyBoundError],
    ["TEMP_AUTH_KEY_EMPTY", TempAuthKeyEmptyError],
    ["TERMS_URL_INVALID", TermsUrlInvalidError],
    ["THEME_FILE_INVALID", ThemeFileInvalidError],
    ["THEME_FORMAT_INVALID", ThemeFormatInvalidError],
    ["THEME_INVALID", ThemeInvalidError],
    ["THEME_MIME_INVALID", ThemeMimeInvalidError],
    ["THEME_PARAMS_INVALID", ThemeParamsInvalidError],
    ["THEME_SLUG_INVALID", ThemeSlugInvalidError],
    ["THEME_TITLE_INVALID", ThemeTitleInvalidError],
    ["TIMEZONE_INVALID", TimezoneInvalidError],
    ["TITLE_INVALID", TitleInvalidError],
    ["TMP_PASSWORD_DISABLED", TmpPasswordDisabledError],
    ["TMP_PASSWORD_INVALID", TmpPasswordInvalidError],
    ["TO_ID_INVALID", ToIdInvalidError],
    ["TO_LANG_INVALID", ToLangInvalidError],
    ["TODO_ITEM_DUPLICATE", TodoItemDuplicateError],
    ["TODO_ITEMS_EMPTY", TodoItemsEmptyError],
    ["TODO_NOT_MODIFIED", TodoNotModifiedError],
    ["TOKEN_EMPTY", TokenEmptyError],
    ["TOKEN_INVALID", TokenInvalidError],
    ["TOKEN_TYPE_INVALID", TokenTypeInvalidError],
    ["TOPIC_CLOSE_SEPARATELY", TopicCloseSeparatelyError],
    ["TOPIC_CLOSED", TopicClosedError],
    ["TOPIC_DELETED", TopicDeletedError],
    ["TOPIC_HIDE_SEPARATELY", TopicHideSeparatelyError],
    ["TOPIC_ID_INVALID", TopicIdInvalidError],
    ["TOPIC_NOT_MODIFIED", TopicNotModifiedError],
    ["TOPIC_TITLE_EMPTY", TopicTitleEmptyError],
    ["TOPICS_EMPTY", TopicsEmptyError],
    ["TRANSACTION_ID_INVALID", TransactionIdInvalidError],
    ["TRANSCRIPTION_FAILED", TranscriptionFailedError],
    ["TRANSLATE_REQ_QUOTA_EXCEEDED", TranslateReqQuotaExceededError],
    ["TTL_DAYS_INVALID", TtlDaysInvalidError],
    ["TTL_MEDIA_INVALID", TtlMediaInvalidError],
    ["TTL_PERIOD_INVALID", TtlPeriodInvalidError],
    ["TYPES_EMPTY", TypesEmptyError],
    ["UNSUPPORTED", UnsupportedError],
    ["UNTIL_DATE_INVALID", UntilDateInvalidError],
    ["URL_INVALID", UrlInvalidError],
    ["USAGE_LIMIT_INVALID", UsageLimitInvalidError],
    ["USER_ADMIN_INVALID", UserAdminInvalidError],
    ["USER_ALREADY_INVITED", UserAlreadyInvitedError],
    ["USER_ALREADY_PARTICIPANT", UserAlreadyParticipantError],
    ["USER_BANNED_IN_CHANNEL", UserBannedInChannelError],
    ["USER_BLOCKED", UserBlockedError],
    ["USER_BOT", UserBotError],
    ["USER_BOT_INVALID", UserBotInvalidError],
    ["USER_BOT_REQUIRED", UserBotRequiredError],
    ["USER_CHANNELS_TOO_MUCH", UserChannelsTooMuchError],
    ["USER_CREATOR", UserCreatorError],
    ["USER_GIFT_UNAVAILABLE", UserGiftUnavailableError],
    ["USER_ID_INVALID", UserIdInvalidError],
    ["USER_INVALID", UserInvalidError],
    ["USER_IS_BLOCKED", UserIsBlockedError],
    ["USER_IS_BOT", UserIsBotError],
    ["USER_KICKED", UserKickedError],
    ["USER_NOT_MUTUAL_CONTACT", UserNotMutualContactError],
    ["USER_NOT_PARTICIPANT", UserNotParticipantError],
    ["USER_PUBLIC_MISSING", UserPublicMissingError],
    ["USER_VOLUME_INVALID", UserVolumeInvalidError],
    ["USERNAME_INVALID", UsernameInvalidError],
    ["USERNAME_NOT_MODIFIED", UsernameNotModifiedError],
    ["USERNAME_NOT_OCCUPIED", UsernameNotOccupiedError],
    ["USERNAME_OCCUPIED", UsernameOccupiedError],
    ["USERNAME_PURCHASE_AVAILABLE", UsernamePurchaseAvailableError],
    ["USERNAMES_ACTIVE_TOO_MUCH", UsernamesActiveTooMuchError],
    ["USERPIC_UPLOAD_REQUIRED", UserpicUploadRequiredError],
    ["USERS_TOO_FEW", UsersTooFewError],
    ["USERS_TOO_MUCH", UsersTooMuchError],
    ["VENUE_ID_INVALID", VenueIdInvalidError],
    ["VIDEO_CONTENT_TYPE_INVALID", VideoContentTypeInvalidError],
    ["VIDEO_FILE_INVALID", VideoFileInvalidError],
    ["VIDEO_PAUSE_FORBIDDEN", VideoPauseForbiddenError],
    ["VIDEO_STOP_FORBIDDEN", VideoStopForbiddenError],
    ["VIDEO_TITLE_EMPTY", VideoTitleEmptyError],
    ["VOICE_MESSAGES_FORBIDDEN", VoiceMessagesForbiddenError],
    ["WALLPAPER_FILE_INVALID", WallpaperFileInvalidError],
    ["WALLPAPER_INVALID", WallpaperInvalidError],
    ["WALLPAPER_MIME_INVALID", WallpaperMimeInvalidError],
    ["WALLPAPER_NOT_FOUND", WallpaperNotFoundError],
    ["WC_CONVERT_URL_INVALID", WcConvertUrlInvalidError],
    ["WEBDOCUMENT_INVALID", WebdocumentInvalidError],
    ["WEBDOCUMENT_MIME_INVALID", WebdocumentMimeInvalidError],
    ["WEBDOCUMENT_SIZE_TOO_BIG", WebdocumentSizeTooBigError],
    ["WEBDOCUMENT_URL_EMPTY", WebdocumentUrlEmptyError],
    ["WEBDOCUMENT_URL_INVALID", WebdocumentUrlInvalidError],
    ["WEBPAGE_CURL_FAILED", WebpageCurlFailedError],
    ["WEBPAGE_MEDIA_EMPTY", WebpageMediaEmptyError],
    ["WEBPAGE_NOT_FOUND", WebpageNotFoundError],
    ["WEBPAGE_URL_INVALID", WebpageUrlInvalidError],
    ["WEBPUSH_AUTH_INVALID", WebpushAuthInvalidError],
    ["WEBPUSH_KEY_INVALID", WebpushKeyInvalidError],
    ["WEBPUSH_TOKEN_INVALID", WebpushTokenInvalidError],
    ["YOU_BLOCKED_USER", YouBlockedUserError],
    ["BOT_METHOD_INVALID", BotMethodInvalidError],
    ["CONNECTION_DEVICE_MODEL_EMPTY", ConnectionDeviceModelEmptyError],
    ["CONNECTION_LANG_PACK_INVALID", ConnectionLangPackInvalidError],
    ["CONNECTION_NOT_INITED", ConnectionNotInitedError],
    ["CONNECTION_SYSTEM_EMPTY", ConnectionSystemEmptyError],
    ["CONNECTION_SYSTEM_LANG_CODE_EMPTY", ConnectionSystemLangCodeEmptyError],
    ["INPUT_CONSTRUCTOR_INVALID", InputConstructorInvalidError],
    ["INPUT_FETCH_ERROR", InputFetchErrorError],
    ["INPUT_FETCH_FAIL", InputFetchFailError],
    ["INPUT_LAYER_INVALID", InputLayerInvalidError],
    ["INPUT_METHOD_INVALID", InputMethodInvalidError],
    ["INPUT_REQUEST_TOO_LONG", InputRequestTooLongError],
    ["PEER_FLOOD", PeerFloodError],
    ["STICKERSET_NOT_MODIFIED", StickersetNotModifiedError],
    ["AUTH_KEY_UNREGISTERED", AuthKeyUnregisteredError],
    ["AUTH_KEY_INVALID", AuthKeyInvalidError],
    ["AUTH_KEY_PERM_EMPTY", AuthKeyPermEmptyError],
    ["SESSION_EXPIRED", SessionExpiredError],
    ["SESSION_PASSWORD_NEEDED", SessionPasswordNeededError],
    ["SESSION_REVOKED", SessionRevokedError],
    ["USER_DEACTIVATED", UserDeactivatedError],
    ["USER_DEACTIVATED_BAN", UserDeactivatedBanError],
    ["ALLOW_PAYMENT_REQUIRED", AllowPaymentRequiredError],
    ["ANONYMOUS_REACTIONS_DISABLED", AnonymousReactionsDisabledError],
    ["BOT_ACCESS_FORBIDDEN", BotAccessForbiddenError],
    ["BOT_VERIFIER_FORBIDDEN", BotVerifierForbiddenError],
    ["BROADCAST_FORBIDDEN", BroadcastForbiddenError],
    ["CHANNEL_PUBLIC_GROUP_NA", ChannelPublicGroupNaError],
    ["CHAT_ACTION_FORBIDDEN", ChatActionForbiddenError],
    ["CHAT_ADMIN_INVITE_REQUIRED", ChatAdminInviteRequiredError],
    ["CHAT_GUEST_SEND_FORBIDDEN", ChatGuestSendForbiddenError],
    ["CHAT_SEND_AUDIOS_FORBIDDEN", ChatSendAudiosForbiddenError],
    ["CHAT_SEND_DOCS_FORBIDDEN", ChatSendDocsForbiddenError],
    ["CHAT_SEND_GAME_FORBIDDEN", ChatSendGameForbiddenError],
    ["CHAT_SEND_GIFS_FORBIDDEN", ChatSendGifsForbiddenError],
    ["CHAT_SEND_MEDIA_FORBIDDEN", ChatSendMediaForbiddenError],
    ["CHAT_SEND_PHOTOS_FORBIDDEN", ChatSendPhotosForbiddenError],
    ["CHAT_SEND_PLAIN_FORBIDDEN", ChatSendPlainForbiddenError],
    ["CHAT_SEND_POLL_FORBIDDEN", ChatSendPollForbiddenError],
    ["CHAT_SEND_ROUNDVIDEOS_FORBIDDEN", ChatSendRoundvideosForbiddenError],
    ["CHAT_SEND_STICKERS_FORBIDDEN", ChatSendStickersForbiddenError],
    ["CHAT_SEND_VIDEOS_FORBIDDEN", ChatSendVideosForbiddenError],
    ["CHAT_SEND_VOICES_FORBIDDEN", ChatSendVoicesForbiddenError],
    ["CHAT_SEND_WEBPAGE_FORBIDDEN", ChatSendWebpageForbiddenError],
    ["CHAT_TYPE_INVALID", ChatTypeInvalidError],
    ["CHAT_WRITE_FORBIDDEN", ChatWriteForbiddenError],
    ["EDIT_BOT_INVITE_FORBIDDEN", EditBotInviteForbiddenError],
    ["GROUPCALL_ALREADY_STARTED", GroupcallAlreadyStartedError],
    ["INLINE_BOT_REQUIRED", InlineBotRequiredError],
    ["MESSAGE_AUTHOR_REQUIRED", MessageAuthorRequiredError],
    ["MESSAGE_DELETE_FORBIDDEN", MessageDeleteForbiddenError],
    ["POLL_VOTE_REQUIRED", PollVoteRequiredError],
    ["PRIVACY_PREMIUM_REQUIRED", PrivacyPremiumRequiredError],
    ["PUBLIC_CHANNEL_MISSING", PublicChannelMissingError],
    ["RIGHT_FORBIDDEN", RightForbiddenError],
    ["SENSITIVE_CHANGE_FORBIDDEN", SensitiveChangeForbiddenError],
    ["USER_DELETED", UserDeletedError],
    ["USER_PERMISSION_DENIED", UserPermissionDeniedError],
    ["USER_PRIVACY_RESTRICTED", UserPrivacyRestrictedError],
    ["USER_RESTRICTED", UserRestrictedError],
    ["YOUR_PRIVACY_RESTRICTED", YourPrivacyRestrictedError],
    ["CHAT_FORBIDDEN", ChatForbiddenError],
    ["API_GIFT_RESTRICTED_UPDATE_APP", ApiGiftRestrictedUpdateAppError],
    ["BUSINESS_ADDRESS_ACTIVE", BusinessAddressActiveError],
    ["CALL_PROTOCOL_COMPAT_LAYER_INVALID", CallProtocolCompatLayerInvalidError],
    ["FILEREF_UPGRADE_NEEDED", FilerefUpgradeNeededError],
    ["FRESH_CHANGE_PHONE_FORBIDDEN", FreshChangePhoneForbiddenError],
    ["FRESH_RESET_AUTHORISATION_FORBIDDEN", FreshResetAuthorisationForbiddenError],
    ["PAYMENT_UNSUPPORTED", PaymentUnsupportedError],
    ["PHONE_PASSWORD_FLOOD", PhonePasswordFloodError],
    ["PRECHECKOUT_FAILED", PrecheckoutFailedError],
    ["PREMIUM_CURRENTLY_UNAVAILABLE", PremiumCurrentlyUnavailableError],
    ["SEND_CODE_UNAVAILABLE", SendCodeUnavailableError],
    ["STARGIFT_EXPORT_IN_PROGRESS", StargiftExportInProgressError],
    ["STARS_FORM_AMOUNT_MISMATCH", StarsFormAmountMismatchError],
    ["STICKERSET_OWNER_ANONYMOUS", StickersetOwnerAnonymousError],
    ["TRANSLATIONS_DISABLED", TranslationsDisabledError],
    ["UPDATE_APP_TO_LOGIN", UpdateAppToLoginError],
    ["USERPIC_PRIVACY_REQUIRED", UserpicPrivacyRequiredError],
    ["AUTH_KEY_DUPLICATED", AuthKeyDuplicatedError],
    ["FROZEN_METHOD_INVALID", FrozenMethodInvalidError],
    ["AUTH_KEY_UNSYNCHRONIZED", AuthKeyUnsynchronizedError],
    ["AUTH_RESTART", AuthRestartError],
    ["CDN_UPLOAD_TIMEOUT", CdnUploadTimeoutError],
    ["CHAT_ID_GENERATE_FAILED", ChatIdGenerateFailedError],
    ["PERSISTENT_TIMESTAMP_OUTDATED", PersistentTimestampOutdatedError],
    ["RANDOM_ID_DUPLICATE", RandomIdDuplicateError],
    ["SEND_MEDIA_INVALID", SendMediaInvalidError],
    ["SIGN_IN_FAILED", SignInFailedError],
    ["TRANSLATE_REQ_FAILED", TranslateReqFailedError],
    ["TRANSLATION_TIMEOUT", TranslationTimeoutError],
    ["Timeout", TimeoutError],
    ["MSG_WAIT_TIMEOUT", MsgWaitTimeoutError],
]);
exports.rpcErrorsRe = new Map([
    [/^NETWORK_MIGRATE_(\d+)$/, NetworkMigrateError],
    [/^PHONE_MIGRATE_(\d+)$/, PhoneMigrateError],
    [/^STATS_MIGRATE_(\d+)$/, StatsMigrateError],
    [/^USER_MIGRATE_(\d+)$/, UserMigrateError],
    [/^EMAIL_UNCONFIRMED_(\d+)$/, EmailUnconfirmedError],
    [/^FILE_REFERENCE_(\d+)_EXPIRED$/, FileReferenceExpiredError],
    [/^FILE_REFERENCE_(\d+)_INVALID$/, FileReferenceInvalidError],
    [/^PASSWORD_TOO_FRESH_(\d+)$/, PasswordTooFreshError],
    [/^SESSION_TOO_FRESH_(\d+)$/, SessionTooFreshError],
    [/^STARGIFT_TRANSFER_TOO_EARLY_(\d+)$/, StargiftTransferTooEarlyError],
    [/^STORY_SEND_FLOOD_MONTHLY_(\d+)$/, StorySendFloodMonthlyError],
    [/^STORY_SEND_FLOOD_WEEKLY_(\d+)$/, StorySendFloodWeeklyError],
    [/^FILE_MIGRATE_(\d+)$/, FileMigrateError],
    [/^FILE_PART_(\d+)_MISSING$/, FilePartMissingError],
    [/^ALLOW_PAYMENT_REQUIRED_(\d+)$/, AllowPaymentRequiredError],
    [/^PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT_(\d+)MIN$/, PreviousChatImportActiveWaitMinError],
    [/^2FA_CONFIRM_WAIT_(\d+)$/, TwoFaConfirmWaitError],
    [/^FLOOD_PREMIUM_WAIT_(\d+)$/, FloodWaitError],
    [/^FLOOD_WAIT_(\d+)$/, FloodWaitError],
    [/^PREMIUM_SUB_ACTIVE_UNTIL_(\d+)$/, PremiumSubActiveUntilError],
    [/^SLOWMODE_WAIT_(\d+)$/, SlowModeWaitError],
    [/^TAKEOUT_INIT_DELAY_(\d+)$/, TakeoutInitDelayError],
    [/^AUTH_RESTART_(\d+)$/, AuthRestartError],
    [/^FLOOD_TEST_PHONE_WAIT_(\d+)$/, FloodTestPhoneWaitError],
]);
exports.rpcErrorRe = exports.rpcErrorsRe;
exports.baseErrors = new Map([
    [303, RPCBaseErrors_1.InvalidDCError],
    [400, RPCBaseErrors_1.BadRequestError],
    [401, RPCBaseErrors_1.UnauthorizedError],
    [403, RPCBaseErrors_1.ForbiddenError],
    [404, RPCBaseErrors_1.NotFoundError],
    [406, RPCBaseErrors_1.AuthKeyError],
    [420, RPCBaseErrors_1.FloodError],
    [500, RPCBaseErrors_1.ServerError],
    [503, RPCBaseErrors_1.TimedOutError],
]);
