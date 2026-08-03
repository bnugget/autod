import bigInt from "big-integer";
import { CustomFile } from "./client/uploads";
import type { Entity, EntityLike, MessageIDLike } from "./define";
import { EntityCache } from "./entityCache";
import { Api } from "./tl";
export declare function getFileInfo(fileLocation: Api.Message | Api.MessageMediaDocument | Api.MessageMediaPhoto | Api.TypeInputFileLocation): {
    dcId?: number;
    location: Api.TypeInputFileLocation;
    size?: bigInt.BigInteger;
};
/**
 * Turns the given iterable into chunks of the specified size,
 * which is 100 by default since that's what Telegram uses the most.
 */
export declare function chunks<T>(arr: T[], size?: number): Generator<T[]>;
import TypeInputFile = Api.TypeInputFile;
/**
 Gets the input peer for the given "entity" (user, chat or channel).

 A ``TypeError`` is raised if the given entity isn't a supported type
 or if ``check_hash is True`` but the entity's ``accessHash is None``
 *or* the entity contains ``min`` information. In this case, the hash
 cannot be used for general purposes, and thus is not returned to avoid
 any issues which can derive from invalid access hashes.

 Note that ``checkHash`` **is ignored** if an input peer is already
 passed since in that case we assume the user knows what they're doing.
 This is key to getting entities by explicitly passing ``hash = 0``.

 * @param entity
 * @param allowSelf
 * @param checkHash
 */
export declare function getInputPeer(entity: any, allowSelf?: boolean, checkHash?: boolean): Api.TypeInputPeer;
export declare function _photoSizeByteCount(size: Api.TypePhotoSize): number | undefined;
export declare function _getEntityPair(entityId: string, entities: Map<string, Entity>, cache: EntityCache, getInputPeerFunction?: any): [Entity?, Api.TypeInputPeer?];
export declare function getInnerText(text: string, entities: Api.TypeMessageEntity[]): string[];
/**
 Similar to :meth:`get_input_peer`, but for :tl:`InputChannel`'s alone.

 .. important::

 This method does not validate for invalid general-purpose access
 hashes, unlike `get_input_peer`. Consider using instead:
 ``get_input_channel(get_input_peer(channel))``.

 * @param entity
 * @returns {InputChannel|*}
 */
export declare function getInputChannel(entity: EntityLike): Api.UserEmpty | Api.User | Api.messages.ChatFull | Api.PeerUser | Api.PeerChat | Api.PeerChannel | Api.InputPeerEmpty | Api.InputPeerSelf | Api.InputPeerChat | Api.InputPeerUser | Api.InputPeerChannel | Api.InputPeerUserFromMessage | Api.InputPeerChannelFromMessage | Api.Chat | Api.Channel | Api.ChatEmpty | Api.ChatForbidden | Api.ChannelForbidden | Api.CommunityForbidden | Api.Community | Api.UserFull | Api.ChatFull | Api.ChannelFull | Api.InputChannelEmpty | Api.InputChannel | Api.InputChannelFromMessage | Api.InputUserEmpty | Api.InputUserSelf | Api.InputUser | Api.InputUserFromMessage;
/**
 Similar to :meth:`getInputPeer`, but for :tl:`InputUser`'s alone.

 .. important::

 This method does not validate for invalid general-purpose access
 hashes, unlike `get_input_peer`. Consider using instead:
 ``get_input_channel(get_input_peer(channel))``.

 * @param entity
 */
export declare function getInputUser(entity: EntityLike): Api.TypeInputUser;
/**
 Similar to :meth:`get_input_peer`, but for dialogs
 * @param dialog
 */
/**
 *  Similar to :meth:`get_input_peer`, but for input messages.
 */
export declare function getInputMessage(message: any): Api.InputMessageID;
/**
 *  Similar to :meth:`get_input_peer`, but for input messages.
 */
export declare function getInputChatPhoto(photo: any): Api.TypeInputChatPhoto;
/**
 * Adds the JPG header and footer to a stripped image.
 * Ported from https://github.com/telegramdesktop/tdesktop/blob/bec39d89e19670eb436dc794a8f20b657cb87c71/Telegram/SourceFiles/ui/image/image.cpp#L225

 * @param stripped{Buffer}
 * @returns {Buffer}
 */
export declare function strippedPhotoToJpg(stripped: Buffer): Buffer<ArrayBufferLike>;
/**
 *  Similar to :meth:`get_input_peer`, but for photos
 */
export declare function getInputPhoto(photo: any): Api.TypeInputPhoto;
/**
 *  Similar to :meth:`get_input_peer`, but for documents
 */
export declare function getInputDocument(document: any): Api.InputDocument | Api.InputDocumentEmpty;
interface GetAttributesParams {
    attributes?: any;
    mimeType?: string;
    forceDocument?: boolean;
    voiceNote?: boolean;
    videoNote?: boolean;
    supportsStreaming?: boolean;
    thumb?: any;
}
/**
 *  Returns `True` if the file has an audio mime type.
 */
export declare function isAudio(file: any): boolean;
/**
 *  Returns `True` if the file has an image mime type.
 */
export declare function isImage(file: any): boolean;
export declare function getExtension(media: any): string;
/**
 Get a list of attributes for the given file and
 the mime type as a tuple ([attribute], mime_type).
 */
export declare function getAttributes(file: File | CustomFile | TypeInputFile | string, { attributes, mimeType, forceDocument, voiceNote, videoNote, supportsStreaming, thumb, }: GetAttributesParams): {
    attrs: Api.TypeDocumentAttribute[];
    mimeType: string;
};
/**
 *  Similar to :meth:`get_input_peer`, but for geo points
 */
export declare function getInputGeo(geo: any): Api.TypeInputGeoPoint;
export interface GetInputMediaInterface {
    isPhoto?: boolean;
    attributes?: Api.TypeDocumentAttribute[];
    forceDocument?: boolean;
    voiceNote?: boolean;
    videoNote?: boolean;
    supportsStreaming?: boolean;
}
/**
 *
 Similar to :meth:`get_input_peer`, but for media.

 If the media is :tl:`InputFile` and ``is_photo`` is known to be `True`,
 it will be treated as an :tl:`InputMediaUploadedPhoto`. Else, the rest
 of parameters will indicate how to treat it.
 * @param media
 * @param isPhoto - whether it's a photo or not
 * @param attributes
 * @param forceDocument
 * @param voiceNote
 * @param videoNote
 * @param supportsStreaming
 */
export declare function getInputMedia(media: any, { isPhoto, attributes, forceDocument, voiceNote, videoNote, supportsStreaming, }?: GetInputMediaInterface): Api.TypeInputMedia;
/**
 * Gets the appropriated part size when uploading or downloading files,
 * given an initial file size.
 * @param fileSize
 * @returns {Number}
 */
export declare function getAppropriatedPartSize(fileSize: bigInt.BigInteger): 256 | 512 | 128;
export declare function getPeer(peer: EntityLike | any): any;
/**
 Convert the given peer into its marked ID by default.

 This "mark" comes from the "bot api" format, and with it the peer type
 can be identified back. User ID is left unmodified, chat ID is negated,
 and channel ID is prefixed with -100:

 * ``userId``
 * ``-chatId``
 * ``-100channel_id``

 The original ID and the peer type class can be returned with
 a call to :meth:`resolve_id(marked_id)`.
 * @param peer
 * @param addMark
 */
export declare function getPeerId(peer: EntityLike, addMark?: boolean): string;
/**
 * Given a marked ID, returns the original ID and its :tl:`Peer` type.
 * @param markedId
 */
export declare function resolveId(markedId: bigInt.BigInteger): [
    bigInt.BigInteger,
    typeof Api.PeerUser | typeof Api.PeerChannel | typeof Api.PeerChat
];
/**
 * returns an entity pair
 * @param entityId
 * @param entities
 * @param cache
 * @param getInputPeer
 * @returns {{inputEntity: *, entity: *}}
 * @private
 */
export declare function getMessageId(message: number | Api.TypeMessage | MessageIDLike | undefined): number | undefined;
/**
 * Parses the given phone, or returns `undefined` if it's invalid.
 * @param phone
 */
export declare function parsePhone(phone: string): string | undefined;
/**
 * Parses a string ID into a big int
 * @param id
 */
export declare function parseID(id: string): bigInt.BigInteger | undefined;
/**
 * Parses a Telegram invite link and extracts the hash.
 * Supports formats like:
 * - https://t.me/joinchat/HASH
 * - https://t.me/+HASH
 * - tg://join?invite=HASH
 * @param link The invite link
 * @returns The invite hash, or undefined if not a valid invite link
 */
export declare function resolveInviteLink(link: string): string | undefined;
/**
 Parses the given username or channel access hash, given
 a string, username or URL. Returns a tuple consisting of
 both the stripped, lowercase username and whether it is
 a joinchat/ hash (in which case is not lowercase'd).

 Returns ``(undefined, false)`` if the ``username`` or link is not valid.

 * @param username {string}
 */
export declare function parseUsername(username: string): {
    username: string;
    isInvite: true;
} | {
    username?: string;
    isInvite: false;
};
export declare function rtrim(s: string, mask: string): string;
/**
 * Gets the display name for the given :tl:`User`,
 :tl:`Chat` or :tl:`Channel`. Returns an empty string otherwise
 * @param entity
 */
export declare function getDisplayName(entity: EntityLike): string;
/**
 * Returns `True` if the file is a GIF.
 */
export declare function isGif(file: any): boolean;
/**
 * Encodes the given array of 5-bit values into a waveform bytestring.
 * Used for voice message waveforms.
 * @param waveform Array of numbers (0-31, 5 bits each)
 * @returns Buffer with encoded waveform
 */
export declare function encodeWaveform(waveform: number[]): Buffer;
/**
 * Decodes a waveform bytestring into an array of 5-bit values.
 * @param waveform Buffer with encoded waveform
 * @param valueCount Number of values to decode (default: calculated from buffer size)
 * @returns Array of numbers (0-31)
 */
export declare function decodeWaveform(waveform: Buffer, valueCount?: number): number[];
/**
 * Splits a message text while preserving formatting entities.
 * Useful for sending messages that exceed Telegram's character limit.
 * @param text The text to split
 * @param entities The formatting entities
 * @param limit Maximum length per chunk (default: 4096)
 * @returns Array of [text, entities] tuples
 */
export declare function splitText(text: string, entities?: Api.TypeMessageEntity[], limit?: number): [string, Api.TypeMessageEntity[]][];
/**
 * Similar to getInputPeer, but for InputDialogPeer.
 * @param dialog The dialog to convert
 */
export declare function getInputDialog(dialog: any): Api.TypeInputDialogPeer;
/**
 * Decodes a bot API file_id into the corresponding InputDocument/InputPhoto.
 * @param fileId The bot API file_id string
 * @returns InputDocument, InputPhoto, or undefined if decoding fails
 */
export declare function resolveBotFileId(fileId: string): Api.InputDocument | Api.InputPhoto | undefined;
/**
 * Encodes a document or photo into a bot API file_id.
 * @param media The media object (Document, Photo, etc.)
 * @returns The encoded file_id string, or undefined if encoding fails
 */
export declare function packBotFileId(media: Api.Document | Api.Photo | Api.TypeInputDocument | Api.TypeInputPhoto): string | undefined;
export {};
/**
 * check if a given item is an array like or not
 * @param item
 * @returns {boolean}
 */
