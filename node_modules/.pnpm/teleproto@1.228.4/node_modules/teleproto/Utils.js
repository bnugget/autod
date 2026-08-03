"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileInfo = getFileInfo;
exports.chunks = chunks;
exports.getInputPeer = getInputPeer;
exports._photoSizeByteCount = _photoSizeByteCount;
exports._getEntityPair = _getEntityPair;
exports.getInnerText = getInnerText;
exports.getInputChannel = getInputChannel;
exports.getInputUser = getInputUser;
exports.getInputMessage = getInputMessage;
exports.getInputChatPhoto = getInputChatPhoto;
exports.strippedPhotoToJpg = strippedPhotoToJpg;
exports.getInputPhoto = getInputPhoto;
exports.getInputDocument = getInputDocument;
exports.isAudio = isAudio;
exports.isImage = isImage;
exports.getExtension = getExtension;
exports.getAttributes = getAttributes;
exports.getInputGeo = getInputGeo;
exports.getInputMedia = getInputMedia;
exports.getAppropriatedPartSize = getAppropriatedPartSize;
exports.getPeer = getPeer;
exports.getPeerId = getPeerId;
exports.resolveId = resolveId;
exports.getMessageId = getMessageId;
exports.parsePhone = parsePhone;
exports.parseID = parseID;
exports.resolveInviteLink = resolveInviteLink;
exports.parseUsername = parseUsername;
exports.rtrim = rtrim;
exports.getDisplayName = getDisplayName;
exports.isGif = isGif;
exports.encodeWaveform = encodeWaveform;
exports.decodeWaveform = decodeWaveform;
exports.splitText = splitText;
exports.getInputDialog = getInputDialog;
exports.resolveBotFileId = resolveBotFileId;
exports.packBotFileId = packBotFileId;
const big_integer_1 = __importDefault(require("big-integer"));
const mime_1 = __importDefault(require("mime"));
const Helpers_1 = require("./Helpers");
const tl_1 = require("./tl");
function getFileInfo(fileLocation) {
    if (!fileLocation || !fileLocation.SUBCLASS_OF_ID) {
        _raiseCastFail(fileLocation, "InputFileLocation");
    }
    if (fileLocation.SUBCLASS_OF_ID == (0, Helpers_1.unionId)("InputFileLocation")) {
        return {
            dcId: undefined,
            location: fileLocation,
            size: undefined,
        };
    }
    let location;
    if (fileLocation instanceof tl_1.Api.Message) {
        location = fileLocation.media;
    }
    if (fileLocation instanceof tl_1.Api.MessageMediaDocument) {
        location = fileLocation.document;
    }
    else if (fileLocation instanceof tl_1.Api.MessageMediaPhoto) {
        location = fileLocation.photo;
    }
    if (location instanceof tl_1.Api.Document) {
        return {
            dcId: location.dcId,
            location: new tl_1.Api.InputDocumentFileLocation({
                id: location.id,
                accessHash: location.accessHash,
                fileReference: location.fileReference,
                thumbSize: "",
            }),
            size: location.size,
        };
    }
    else if (location instanceof tl_1.Api.Photo) {
        return {
            dcId: location.dcId,
            location: new tl_1.Api.InputPhotoFileLocation({
                id: location.id,
                accessHash: location.accessHash,
                fileReference: location.fileReference,
                thumbSize: location.sizes[location.sizes.length - 1].type,
            }),
            size: (0, big_integer_1.default)(_photoSizeByteCount(location.sizes[location.sizes.length - 1]) || 0),
        };
    }
    _raiseCastFail(fileLocation, "InputFileLocation");
}
/**
 * Turns the given iterable into chunks of the specified size,
 * which is 100 by default since that's what Telegram uses the most.
 */
function* chunks(arr, size = 100) {
    for (let i = 0; i < arr.length; i += size) {
        yield arr.slice(i, i + size);
    }
}
const USERNAME_RE = new RegExp("@|(?:https?:\\/\\/)?(?:www\\.)?" +
    "(?:telegram\\.(?:me|dog)|t\\.me)\\/(@|joinchat\\/)?", "i");
const JPEG_HEADER = Buffer.from("ffd8ffe000104a46494600010100000100010000ffdb004300281c1e231e19282321232d2b28303c64413c37373c7b585d4964918099968f808c8aa0b4e6c3a0aadaad8a8cc8ffcbdaeef5ffffff9bc1fffffffaffe6fdfff8ffdb0043012b2d2d3c353c76414176f8a58ca5f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8ffc00011080000000003012200021101031101ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffda000c03010002110311003f00", "hex");
const JPEG_FOOTER = Buffer.from("ffd9", "hex");
const TG_JOIN_RE = new RegExp("tg:\\/\\/(join)\\?invite=", "i");
const VALID_USERNAME_RE = new RegExp("^([a-z]((?!__)[\\w\\d]){2,30}[a-z\\d]|gif|vid|" +
    "pic|bing|wiki|imdb|bold|vote|like|coub)$", "i");
function _raiseCastFail(entity, target) {
    let toWrite = entity;
    if (typeof entity === "object" && "className" in entity) {
        toWrite = entity.className;
    }
    throw new Error(`Cannot cast ${toWrite} to any kind of ${target}`);
}
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
function getInputPeer(entity, allowSelf = true, checkHash = true) {
    if (entity.SUBCLASS_OF_ID === undefined) {
        // e.g. custom.Dialog (can't cyclic import).
        if (allowSelf && "inputEntity" in entity) {
            return entity.inputEntity;
        }
        else if ("entity" in entity) {
            return getInputPeer(entity.entity);
        }
        else {
            _raiseCastFail(entity, "InputPeer");
        }
    }
    if (entity.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputPeer")) {
        return entity;
    }
    if (entity instanceof tl_1.Api.User) {
        if (entity.self && allowSelf) {
            return new tl_1.Api.InputPeerSelf();
        }
        else if ((entity.accessHash !== undefined && !entity.min) ||
            !checkHash) {
            return new tl_1.Api.InputPeerUser({
                userId: entity.id,
                accessHash: entity.accessHash || (0, big_integer_1.default)(0),
            });
        }
        else {
            throw new Error("User without accessHash or min cannot be input");
        }
    }
    if (entity instanceof tl_1.Api.Chat ||
        entity instanceof tl_1.Api.ChatEmpty ||
        entity instanceof tl_1.Api.ChatForbidden) {
        return new tl_1.Api.InputPeerChat({ chatId: entity.id });
    }
    if (entity instanceof tl_1.Api.Channel || entity instanceof tl_1.Api.Community) {
        if ((entity.accessHash !== undefined && !entity.min) || !checkHash) {
            return new tl_1.Api.InputPeerChannel({
                channelId: entity.id,
                accessHash: entity.accessHash || (0, big_integer_1.default)(0),
            });
        }
        else {
            throw new TypeError("Channel without accessHash or min info cannot be input");
        }
    }
    if (entity instanceof tl_1.Api.ChannelForbidden ||
        entity instanceof tl_1.Api.CommunityForbidden) {
        // "channelForbidden are never min", and since their hash is
        // also not optional, we assume that this truly is the case.
        return new tl_1.Api.InputPeerChannel({
            channelId: entity.id,
            accessHash: entity.accessHash || (0, big_integer_1.default)(0),
        });
    }
    if (entity instanceof tl_1.Api.InputUser) {
        return new tl_1.Api.InputPeerUser({
            userId: entity.userId,
            accessHash: entity.accessHash,
        });
    }
    if (entity instanceof tl_1.Api.InputChannel) {
        return new tl_1.Api.InputPeerChannel({
            channelId: entity.channelId,
            accessHash: entity.accessHash,
        });
    }
    if (entity instanceof tl_1.Api.UserEmpty) {
        return new tl_1.Api.InputPeerEmpty();
    }
    if (entity instanceof tl_1.Api.UserFull) {
        return getInputPeer(entity.id);
    }
    if (entity instanceof tl_1.Api.ChatFull) {
        return new tl_1.Api.InputPeerChat({ chatId: entity.id });
    }
    if (entity instanceof tl_1.Api.PeerChat) {
        return new tl_1.Api.InputPeerChat({
            chatId: entity.chatId,
        });
    }
    _raiseCastFail(entity, "InputPeer");
}
function _photoSizeByteCount(size) {
    if (size instanceof tl_1.Api.PhotoSize) {
        return size.size;
    }
    else if (size instanceof tl_1.Api.PhotoStrippedSize) {
        if (size.bytes.length < 3 || size.bytes[0] != 1) {
            return size.bytes.length;
        }
        return size.bytes.length + 622;
    }
    else if (size instanceof tl_1.Api.PhotoCachedSize) {
        return size.bytes.length;
    }
    else if (size instanceof tl_1.Api.PhotoSizeEmpty) {
        return 0;
    }
    else if (size instanceof tl_1.Api.PhotoSizeProgressive) {
        return size.sizes[size.sizes.length - 1];
    }
    else {
        return undefined;
    }
}
function _getEntityPair(entityId, entities, cache, getInputPeerFunction = getInputPeer) {
    const entity = entities.get(entityId);
    let inputEntity;
    try {
        inputEntity = cache.get(entityId);
    }
    catch (e) {
        try {
            inputEntity = getInputPeerFunction(inputEntity);
        }
        catch (e) { }
    }
    return [entity, inputEntity];
}
function getInnerText(text, entities) {
    const result = [];
    entities.forEach(function (value, key) {
        const start = value.offset;
        const end = value.offset + value.length;
        result.push(text.slice(start, end));
    });
    return result;
}
/**
 Similar to :meth:`get_input_peer`, but for :tl:`InputChannel`'s alone.

 .. important::

 This method does not validate for invalid general-purpose access
 hashes, unlike `get_input_peer`. Consider using instead:
 ``get_input_channel(get_input_peer(channel))``.

 * @param entity
 * @returns {InputChannel|*}
 */
function getInputChannel(entity) {
    if (typeof entity === "string" ||
        typeof entity == "number" ||
        typeof entity == "bigint" ||
        big_integer_1.default.isInstance(entity)) {
        _raiseCastFail(entity, "InputChannel");
    }
    if (entity.SUBCLASS_OF_ID === undefined) {
        _raiseCastFail(entity, "InputChannel");
    }
    if (entity.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputChannel")) {
        return entity;
    }
    if (entity instanceof tl_1.Api.Channel ||
        entity instanceof tl_1.Api.ChannelForbidden ||
        entity instanceof tl_1.Api.Community ||
        entity instanceof tl_1.Api.CommunityForbidden) {
        return new tl_1.Api.InputChannel({
            channelId: entity.id,
            accessHash: entity.accessHash || big_integer_1.default.zero,
        });
    }
    if (entity instanceof tl_1.Api.InputPeerChannel) {
        return new tl_1.Api.InputChannel({
            channelId: entity.channelId,
            accessHash: entity.accessHash,
        });
    }
    _raiseCastFail(entity, "InputChannel");
}
/**
 Similar to :meth:`getInputPeer`, but for :tl:`InputUser`'s alone.

 .. important::

 This method does not validate for invalid general-purpose access
 hashes, unlike `get_input_peer`. Consider using instead:
 ``get_input_channel(get_input_peer(channel))``.

 * @param entity
 */
function getInputUser(entity) {
    if (typeof entity === "string" ||
        typeof entity == "number" ||
        typeof entity == "bigint" ||
        big_integer_1.default.isInstance(entity)) {
        _raiseCastFail(entity, "InputUser");
    }
    if (entity.SUBCLASS_OF_ID === undefined) {
        _raiseCastFail(entity, "InputUser");
    }
    if (entity.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputUser")) {
        return entity;
    }
    if (entity instanceof tl_1.Api.User) {
        if (entity.self) {
            return new tl_1.Api.InputUserSelf();
        }
        else {
            return new tl_1.Api.InputUser({
                userId: entity.id,
                accessHash: entity.accessHash || big_integer_1.default.zero,
            });
        }
    }
    if (entity instanceof tl_1.Api.InputPeerSelf) {
        return new tl_1.Api.InputUserSelf();
    }
    if (entity instanceof tl_1.Api.UserEmpty ||
        entity instanceof tl_1.Api.InputPeerEmpty) {
        return new tl_1.Api.InputUserEmpty();
    }
    if (entity instanceof tl_1.Api.UserFull) {
        return getInputUser(entity);
    }
    if (entity instanceof tl_1.Api.InputPeerUser) {
        return new tl_1.Api.InputUser({
            userId: entity.userId,
            accessHash: entity.accessHash,
        });
    }
    if (entity instanceof tl_1.Api.InputPeerUserFromMessage) {
        return new tl_1.Api.InputUserFromMessage({
            userId: entity.userId,
            peer: entity.peer,
            msgId: entity.msgId,
        });
    }
    _raiseCastFail(entity, "InputUser");
}
/**
 Similar to :meth:`get_input_peer`, but for dialogs
 * @param dialog
 */
/*CONTEST
function getInputDialog(dialog) {
    try {
        if (dialog.SUBCLASS_OF_ID === unionId("InputDialogPeer")) {
            return dialog
        }
        if (dialog.SUBCLASS_OF_ID === unionId("InputPeer")) {
            return new Api.InputDialogPeer({ peer: dialog })
        }
    } catch (e) {
        _raiseCastFail(dialog, 'InputDialogPeer')
    }

    try {
        return new Api.InputDialogPeer(getInputPeer(dialog))
        // eslint-disable-next-line no-empty
    } catch (e) {

    }
    _raiseCastFail(dialog, 'InputDialogPeer')
}
*/
/**
 *  Similar to :meth:`get_input_peer`, but for input messages.
 */
function getInputMessage(message) {
    if (typeof message === "number") {
        return new tl_1.Api.InputMessageID({ id: message });
    }
    if (message === undefined || message.SUBCLASS_OF_ID === undefined) {
        _raiseCastFail(message, "InputMessage");
    }
    if (message.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputMessage")) {
        return message;
    }
    else if (message.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("Message")) {
        return new tl_1.Api.InputMessageID({ id: message.id });
    }
    _raiseCastFail(message, "InputMessage");
}
/**
 *  Similar to :meth:`get_input_peer`, but for input messages.
 */
function getInputChatPhoto(photo) {
    if (photo === undefined || photo.SUBCLASS_OF_ID === undefined) {
        _raiseCastFail(photo, "InputChatPhoto");
    }
    if (photo.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputChatPhoto")) {
        return photo;
    }
    else if (photo.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputFile")) {
        return new tl_1.Api.InputChatUploadedPhoto({
            file: photo,
        });
    }
    photo = getInputPhoto(photo);
    if (photo instanceof tl_1.Api.InputPhoto) {
        return new tl_1.Api.InputChatPhoto({
            id: photo,
        });
    }
    else if (photo instanceof tl_1.Api.InputPhotoEmpty) {
        return new tl_1.Api.InputChatPhotoEmpty();
    }
    _raiseCastFail(photo, "InputChatPhoto");
}
/**
 * Adds the JPG header and footer to a stripped image.
 * Ported from https://github.com/telegramdesktop/tdesktop/blob/bec39d89e19670eb436dc794a8f20b657cb87c71/Telegram/SourceFiles/ui/image/image.cpp#L225

 * @param stripped{Buffer}
 * @returns {Buffer}
 */
function strippedPhotoToJpg(stripped) {
    // Note: Changes here should update _stripped_real_length
    if (stripped.length < 3 || stripped[0] !== 1) {
        return stripped;
    }
    const header = Buffer.from(JPEG_HEADER);
    header[164] = stripped[1];
    header[166] = stripped[2];
    return Buffer.concat([header, stripped.slice(3), JPEG_FOOTER]);
}
/*CONTEST
function getInputLocation(location) {
    try {
        if (!location.SUBCLASS_OF_ID) {
            throw new Error()
        }
        if (location.SUBCLASS_OF_ID === unionId("InputFileLocation")) {
            return {
                dcId: null,
                inputLocation: location
            }
        }
    } catch (e) {
        _raiseCastFail(location, 'InputFileLocation')
    }
    if (location instanceof Api.Message) {
        location = location.media
    }

    if (location instanceof Api.MessageMediaDocument) {
        location = location.document
    } else if (location instanceof Api.MessageMediaPhoto) {
        location = location.photo
    }

    if (location instanceof Api.Document) {
        return {
            dcId: location.dcId,
            inputLocation: new Api.InputDocumentFileLocation({
                id: location.id,
                accessHash: location.accessHash,
                fileReference: location.fileReference,
                thumbSize: '', // Presumably to download one of its thumbnails
            }),
        }
    } else if (location instanceof Api.Photo) {
        return {
            dcId: location.dcId,
            inputLocation: new Api.InputPhotoFileLocation({
                id: location.id,
                accessHash: location.accessHash,
                fileReference: location.fileReference,
                thumbSize: location.sizes[location.sizes.length - 1].type,
            }),
        }
    }

    if (location instanceof Api.FileLocationToBeDeprecated) {
        throw new Error('Unavailable location cannot be used as input')
    }
    _raiseCastFail(location, 'InputFileLocation')
}
*/
/**
 *  Similar to :meth:`get_input_peer`, but for photos
 */
function getInputPhoto(photo) {
    if (photo.SUBCLASS_OF_ID === undefined) {
        _raiseCastFail(photo, "InputPhoto");
    }
    if (photo.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputPhoto")) {
        return photo;
    }
    if (photo instanceof tl_1.Api.Message) {
        photo = photo.media;
    }
    if (photo instanceof tl_1.Api.photos.Photo ||
        photo instanceof tl_1.Api.MessageMediaPhoto) {
        photo = photo.photo;
    }
    if (photo instanceof tl_1.Api.Photo) {
        return new tl_1.Api.InputPhoto({
            id: photo.id,
            accessHash: photo.accessHash,
            fileReference: photo.fileReference,
        });
    }
    if (photo instanceof tl_1.Api.PhotoEmpty) {
        return new tl_1.Api.InputPhotoEmpty();
    }
    if (photo instanceof tl_1.Api.messages.ChatFull) {
        photo = photo.fullChat;
    }
    if (photo instanceof tl_1.Api.ChannelFull) {
        return getInputPhoto(photo.chatPhoto);
    }
    else {
        if (photo instanceof tl_1.Api.UserFull) {
            return getInputPhoto(photo.profilePhoto);
        }
        else {
            if (photo instanceof tl_1.Api.Channel ||
                photo instanceof tl_1.Api.Chat ||
                photo instanceof tl_1.Api.User ||
                photo instanceof tl_1.Api.Community) {
                return getInputPhoto(photo.photo);
            }
        }
    }
    if (photo instanceof tl_1.Api.UserEmpty ||
        photo instanceof tl_1.Api.ChatEmpty ||
        photo instanceof tl_1.Api.ChatForbidden ||
        photo instanceof tl_1.Api.ChannelForbidden ||
        photo instanceof tl_1.Api.CommunityForbidden) {
        return new tl_1.Api.InputPhotoEmpty();
    }
    _raiseCastFail(photo, "InputPhoto");
}
/**
 *  Similar to :meth:`get_input_peer`, but for documents
 */
function getInputDocument(document) {
    if (document.SUBCLASS_OF_ID === undefined) {
        _raiseCastFail(document, "InputDocument");
    }
    if (document.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputDocument")) {
        return document;
    }
    if (document instanceof tl_1.Api.Document) {
        return new tl_1.Api.InputDocument({
            id: document.id,
            accessHash: document.accessHash,
            fileReference: document.fileReference,
        });
    }
    if (document instanceof tl_1.Api.DocumentEmpty) {
        return new tl_1.Api.InputDocumentEmpty();
    }
    if (document instanceof tl_1.Api.MessageMediaDocument) {
        return getInputDocument(document.document);
    }
    if (document instanceof tl_1.Api.Message) {
        return getInputDocument(document.media);
    }
    _raiseCastFail(document, "InputDocument");
}
/**
 *  Returns `True` if the file has an audio mime type.
 */
function isAudio(file) {
    const ext = _getExtension(file);
    if (!ext) {
        const metadata = _getMetadata(file);
        return (metadata.get("mimeType") || "").startsWith("audio/");
    }
    else {
        file = "a" + ext;
        return (mime_1.default.getType(file) || "").startsWith("audio/");
    }
}
/**
 *  Returns `True` if the file has an image mime type.
 */
function isImage(file) {
    const ext = _getExtension(file).toLowerCase();
    return (ext.endsWith(".png") || ext.endsWith(".jpg") || ext.endsWith(".jpeg"));
}
function getExtension(media) {
    // Photos are always compressed as .jpg by Telegram
    try {
        getInputPhoto(media);
        return ".jpg";
    }
    catch (e) { }
    if (media instanceof tl_1.Api.UserProfilePhoto ||
        media instanceof tl_1.Api.ChatPhoto) {
        return ".jpg";
    }
    if (media instanceof tl_1.Api.MessageMediaDocument) {
        media = media.document;
    }
    if (media instanceof tl_1.Api.Document ||
        media instanceof tl_1.Api.WebDocument ||
        media instanceof tl_1.Api.WebDocumentNoProxy) {
        if (media.mimeType === "application/octet-stream") {
            // Octet stream are just bytes, which have no default extension
            return "";
        }
        else {
            return mime_1.default.getExtension(media.mimeType) || "";
        }
    }
    return "";
}
/**
 * Gets the extension for the given file, which can be either a
 * str or an ``open()``'ed file (which has a ``.name`` attribute).
 */
function _getExtension(file) {
    if (typeof file === "string") {
        return "." + file.split(".").pop();
    }
    else if ("name" in file) {
        return _getExtension(file.name);
    }
    else {
        return getExtension(file);
    }
}
function _getMetadata(file) {
    //TODO Return nothing for now until we find a better way
    return new Map();
}
function isVideo(file) {
    var _a;
    const ext = _getExtension(file);
    if (!ext) {
        const metadata = _getMetadata(file);
        if (metadata.has("mimeType")) {
            return ((_a = metadata.get("mimeType")) === null || _a === void 0 ? void 0 : _a.startsWith("video/")) || false;
        }
        else {
            return false;
        }
    }
    else {
        file = "a" + ext;
        return (mime_1.default.getType(file) || "").startsWith("video/");
    }
}
/**
 Get a list of attributes for the given file and
 the mime type as a tuple ([attribute], mime_type).
 */
function getAttributes(file, { attributes = null, mimeType = undefined, forceDocument = false, voiceNote = false, videoNote = false, supportsStreaming = false, thumb = null, }) {
    var _a, _b, _c, _d;
    const name = typeof file == "string"
        ? file
        : "name" in file
            ? file.name || "unnamed"
            : "unnamed";
    if (mimeType === undefined) {
        mimeType = mime_1.default.getType(name) || "application/octet-stream";
    }
    const attrObj = new Map();
    attrObj.set(tl_1.Api.DocumentAttributeFilename, new tl_1.Api.DocumentAttributeFilename({
        fileName: name.split(/[\\/]/).pop() || "",
    }));
    if (isAudio(file)) {
        const m = _getMetadata(file);
        attrObj.set(tl_1.Api.DocumentAttributeAudio, new tl_1.Api.DocumentAttributeAudio({
            voice: voiceNote,
            title: m.has("title") ? m.get("title") : undefined,
            performer: m.has("author") ? m.get("author") : undefined,
            duration: Number.parseInt((_a = m.get("duration")) !== null && _a !== void 0 ? _a : "0"),
        }));
    }
    if (!forceDocument && isVideo(file)) {
        let doc;
        if (thumb) {
            const t_m = _getMetadata(thumb);
            const width = Number.parseInt((t_m === null || t_m === void 0 ? void 0 : t_m.get("width")) || "1");
            const height = Number.parseInt((t_m === null || t_m === void 0 ? void 0 : t_m.get("height")) || "1");
            doc = new tl_1.Api.DocumentAttributeVideo({
                duration: 0,
                h: height,
                w: width,
                roundMessage: videoNote,
                supportsStreaming: supportsStreaming,
            });
        }
        else {
            const m = _getMetadata(file);
            doc = new tl_1.Api.DocumentAttributeVideo({
                roundMessage: videoNote,
                w: Number.parseInt((_b = m.get("width")) !== null && _b !== void 0 ? _b : "1"),
                h: Number.parseInt((_c = m.get("height")) !== null && _c !== void 0 ? _c : "1"),
                duration: Number.parseInt((_d = m.get("duration")) !== null && _d !== void 0 ? _d : "0"),
                supportsStreaming: supportsStreaming,
            });
        }
        attrObj.set(tl_1.Api.DocumentAttributeVideo, doc);
    }
    if (videoNote) {
        if (attrObj.has(tl_1.Api.DocumentAttributeAudio)) {
            attrObj.get(tl_1.Api.DocumentAttributeAudio).voice = true;
        }
        else {
            attrObj.set(tl_1.Api.DocumentAttributeAudio, new tl_1.Api.DocumentAttributeAudio({
                duration: 0,
                voice: true,
            }));
        }
    }
    /* Now override the attributes if any. As we have a dict of
    {cls: instance}, we can override any class with the list
     of attributes provided by the user easily.
    */
    if (attributes) {
        for (const a of attributes) {
            attrObj.set(a.constructor, a);
        }
    }
    return {
        attrs: Array.from(attrObj.values()),
        mimeType: mimeType,
    };
}
/**
 *  Similar to :meth:`get_input_peer`, but for geo points
 */
function getInputGeo(geo) {
    if (geo === undefined || geo.SUBCLASS_OF_ID === undefined) {
        _raiseCastFail(geo, "InputGeoPoint");
    }
    if (geo.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputGeoPoint")) {
        return geo;
    }
    if (geo instanceof tl_1.Api.GeoPoint) {
        return new tl_1.Api.InputGeoPoint({ lat: geo.lat, long: geo.long });
    }
    if (geo instanceof tl_1.Api.GeoPointEmpty) {
        return new tl_1.Api.InputGeoPointEmpty();
    }
    if (geo instanceof tl_1.Api.MessageMediaGeo) {
        return getInputGeo(geo.geo);
    }
    if (geo instanceof tl_1.Api.Message) {
        return getInputGeo(geo.media);
    }
    _raiseCastFail(geo, "InputGeoPoint");
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
function getInputMedia(media, { isPhoto = false, attributes = undefined, forceDocument = false, voiceNote = false, videoNote = false, supportsStreaming = false, } = {}) {
    if (media.SUBCLASS_OF_ID === undefined) {
        _raiseCastFail(media, "InputMedia");
    }
    if (media.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputMedia")) {
        return media;
    }
    else {
        if (media.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputPhoto")) {
            return new tl_1.Api.InputMediaPhoto({ id: media });
        }
        else {
            if (media.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputDocument")) {
                return new tl_1.Api.InputMediaDocument({ id: media });
            }
        }
    }
    if (media instanceof tl_1.Api.MessageMediaPhoto) {
        return new tl_1.Api.InputMediaPhoto({
            id: getInputPhoto(media.photo),
            ttlSeconds: media.ttlSeconds,
        });
    }
    if (media instanceof tl_1.Api.Photo ||
        media instanceof tl_1.Api.photos.Photo ||
        media instanceof tl_1.Api.PhotoEmpty) {
        return new tl_1.Api.InputMediaPhoto({ id: getInputPhoto(media) });
    }
    if (media instanceof tl_1.Api.MessageMediaDocument) {
        return new tl_1.Api.InputMediaDocument({
            id: getInputDocument(media.document),
            ttlSeconds: media.ttlSeconds,
        });
    }
    if (media instanceof tl_1.Api.Document || media instanceof tl_1.Api.DocumentEmpty) {
        return new tl_1.Api.InputMediaDocument({ id: getInputDocument(media) });
    }
    if (media instanceof tl_1.Api.InputFile || media instanceof tl_1.Api.InputFileBig) {
        if (isPhoto) {
            return new tl_1.Api.InputMediaUploadedPhoto({ file: media });
        }
        else {
            const { attrs, mimeType } = getAttributes(media, {
                attributes: attributes,
                forceDocument: forceDocument,
                voiceNote: voiceNote,
                videoNote: videoNote,
                supportsStreaming: supportsStreaming,
            });
            return new tl_1.Api.InputMediaUploadedDocument({
                file: media,
                mimeType: mimeType,
                attributes: attrs,
                forceFile: forceDocument,
            });
        }
    }
    if (media instanceof tl_1.Api.MessageMediaGame) {
        return new tl_1.Api.InputMediaGame({
            id: new tl_1.Api.InputGameID({
                id: media.game.id,
                accessHash: media.game.accessHash,
            }),
        });
    }
    if (media instanceof tl_1.Api.MessageMediaContact) {
        return new tl_1.Api.InputMediaContact({
            phoneNumber: media.phoneNumber,
            firstName: media.firstName,
            lastName: media.lastName,
            vcard: "",
        });
    }
    if (media instanceof tl_1.Api.MessageMediaGeo) {
        return new tl_1.Api.InputMediaGeoPoint({ geoPoint: getInputGeo(media.geo) });
    }
    if (media instanceof tl_1.Api.MessageMediaVenue) {
        return new tl_1.Api.InputMediaVenue({
            geoPoint: getInputGeo(media.geo),
            title: media.title,
            address: media.address,
            provider: media.provider,
            venueId: media.venueId,
            venueType: "",
        });
    }
    if (media instanceof tl_1.Api.MessageMediaDice) {
        return new tl_1.Api.InputMediaDice({
            emoticon: media.emoticon,
        });
    }
    if (media instanceof tl_1.Api.MessageMediaEmpty ||
        media instanceof tl_1.Api.MessageMediaUnsupported ||
        media instanceof tl_1.Api.ChatPhotoEmpty ||
        media instanceof tl_1.Api.UserProfilePhotoEmpty ||
        media instanceof tl_1.Api.ChatPhoto ||
        media instanceof tl_1.Api.UserProfilePhoto) {
        return new tl_1.Api.InputMediaEmpty();
    }
    if (media instanceof tl_1.Api.Message) {
        return getInputMedia(media.media, { isPhoto: isPhoto });
    }
    if (media instanceof tl_1.Api.MessageMediaPoll) {
        let correctAnswers;
        if (media.poll.quiz) {
            if (!media.results.results) {
                throw new Error("Cannot cast unanswered quiz to any kind of InputMedia.");
            }
            correctAnswers = [];
            for (const r of media.results.results) {
                if (r.correct) {
                    correctAnswers.push(r.option);
                }
            }
        }
        else {
            correctAnswers = undefined;
        }
        const pollWithInputAnswers = new tl_1.Api.Poll({
            id: media.poll.id,
            question: media.poll.question,
            answers: media.poll.answers.map((a) => {
                if (!(a instanceof tl_1.Api.PollAnswer))
                    return a;
                return new tl_1.Api.PollAnswer({
                    text: a.text,
                    option: a.option,
                    media: a.media
                        ? getInputMedia(a.media)
                        : undefined,
                    addedBy: a.addedBy,
                    date: a.date,
                });
            }),
            closed: media.poll.closed,
            publicVoters: media.poll.publicVoters,
            multipleChoice: media.poll.multipleChoice,
            quiz: media.poll.quiz,
            openAnswers: media.poll.openAnswers,
            revotingDisabled: media.poll.revotingDisabled,
            shuffleAnswers: media.poll.shuffleAnswers,
            hideResultsUntilClose: media.poll.hideResultsUntilClose,
            creator: media.poll.creator,
            closePeriod: media.poll.closePeriod,
            closeDate: media.poll.closeDate,
            hash: media.poll.hash,
        });
        return new tl_1.Api.InputMediaPoll({
            poll: pollWithInputAnswers,
            correctAnswers: correctAnswers,
            solution: media.results.solution,
            solutionEntities: media.results.solutionEntities,
            attachedMedia: media.attachedMedia
                ? getInputMedia(media.attachedMedia)
                : undefined,
            solutionMedia: media.results.solutionMedia
                ? getInputMedia(media.results.solutionMedia)
                : undefined,
        });
    }
    if (media instanceof tl_1.Api.Poll) {
        return new tl_1.Api.InputMediaPoll({
            poll: media,
        });
    }
    _raiseCastFail(media, "InputMedia");
}
/**
 * Gets the appropriated part size when uploading or downloading files,
 * given an initial file size.
 * @param fileSize
 * @returns {Number}
 */
function getAppropriatedPartSize(fileSize) {
    if (fileSize.lesser(104857600)) {
        // 100MB
        return 128;
    }
    if (fileSize.lesser(786432000)) {
        // 750MB
        return 256;
    }
    return 512;
}
function getPeer(peer) {
    if (!peer) {
        _raiseCastFail(peer, "undefined");
    }
    if (typeof peer === "string") {
        _raiseCastFail(peer, "peer");
    }
    if (typeof peer == "number" || typeof peer == "bigint") {
        peer = (0, Helpers_1.returnBigInt)(peer);
    }
    try {
        if (big_integer_1.default.isInstance(peer)) {
            const res = resolveId(peer);
            if (res[1] === tl_1.Api.PeerChannel) {
                return new tl_1.Api.PeerChannel({ channelId: res[0] });
            }
            else if (res[1] === tl_1.Api.PeerChat) {
                return new tl_1.Api.PeerChat({ chatId: res[0] });
            }
            else {
                return new tl_1.Api.PeerUser({ userId: res[0] });
            }
        }
        if (peer.SUBCLASS_OF_ID === undefined) {
            throw new Error();
        }
        if (peer.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("Peer")) {
            return peer;
        }
        else if (peer instanceof tl_1.Api.contacts.ResolvedPeer ||
            peer instanceof tl_1.Api.InputNotifyPeer ||
            peer instanceof tl_1.Api.TopPeer ||
            peer instanceof tl_1.Api.Dialog ||
            peer instanceof tl_1.Api.DialogPeer) {
            return peer.peer;
        }
        else if (peer instanceof tl_1.Api.ChannelFull) {
            return new tl_1.Api.PeerChannel({ channelId: peer.id });
        }
        if (peer.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("ChatParticipant") ||
            peer.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("ChannelParticipant")) {
            // ChatParticipant, ChannelParticipant
            if ("userId" in peer) {
                return new tl_1.Api.PeerUser({ userId: peer.userId });
            }
        }
        peer = getInputPeer(peer, false, false);
        if (peer instanceof tl_1.Api.InputPeerUser) {
            return new tl_1.Api.PeerUser({ userId: peer.userId });
        }
        else if (peer instanceof tl_1.Api.InputPeerChat) {
            return new tl_1.Api.PeerChat({ chatId: peer.chatId });
        }
        else if (peer instanceof tl_1.Api.InputPeerChannel) {
            return new tl_1.Api.PeerChannel({ channelId: peer.channelId });
        }
    }
    catch (e) { }
    _raiseCastFail(peer, "peer");
}
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
function getPeerId(peer, addMark = true) {
    if (typeof peer == "string" && parseID(peer)) {
        peer = (0, Helpers_1.returnBigInt)(peer);
    }
    // First we assert it's a Peer TLObject, or early return for integers
    if (big_integer_1.default.isInstance(peer)) {
        return addMark ? peer.toString() : resolveId(peer)[0].toString();
    }
    // Tell the user to use their client to resolve InputPeerSelf if we got one
    if (peer instanceof tl_1.Api.InputPeerSelf) {
        _raiseCastFail(peer, "int (you might want to use client.get_peer_id)");
    }
    try {
        peer = getPeer(peer);
    }
    catch (e) {
        _raiseCastFail(peer, "int");
    }
    if (peer instanceof tl_1.Api.PeerUser) {
        return peer.userId.toString();
    }
    else if (peer instanceof tl_1.Api.PeerChat) {
        // Check in case the user mixed things up to avoid blowing up
        peer.chatId = resolveId((0, Helpers_1.returnBigInt)(peer.chatId))[0];
        return addMark
            ? peer.chatId.negate().toString()
            : peer.chatId.toString();
    }
    else if (typeof peer == "object" && "channelId" in peer) {
        // if (peer instanceof Api.PeerChannel)
        // Check in case the user mixed things up to avoid blowing up
        peer.channelId = resolveId((0, Helpers_1.returnBigInt)(peer.channelId))[0];
        if (!addMark) {
            return peer.channelId.toString();
        }
        // Concat -100 through math tricks, .to_supergroup() on
        // Madeline IDs will be strictly positive -> log works.
        return "-100" + peer.channelId.toString();
    }
    _raiseCastFail(peer, "int");
}
/**
 * Given a marked ID, returns the original ID and its :tl:`Peer` type.
 * @param markedId
 */
function resolveId(markedId) {
    if (markedId.greaterOrEquals(big_integer_1.default.zero)) {
        return [markedId, tl_1.Api.PeerUser];
    }
    // There have been report of chat IDs being 10000xyz, which means their
    // marked version is -10000xyz, which in turn looks like a channel but
    // it becomes 00xyz (= xyz). Hence, we must assert that there are only
    // two zeroes.
    const m = markedId.toString().match(/-100([^0]\d*)/);
    if (m) {
        return [(0, big_integer_1.default)(m[1]), tl_1.Api.PeerChannel];
    }
    return [markedId.negate(), tl_1.Api.PeerChat];
}
/**
 * returns an entity pair
 * @param entityId
 * @param entities
 * @param cache
 * @param getInputPeer
 * @returns {{inputEntity: *, entity: *}}
 * @private
 */
/*CONTEST

export function  _getEntityPair(entityId, entities, cache, getInputPeer = getInputPeer) {
    const entity = entities.get(entityId)
    let inputEntity = cache[entityId]
    if (inputEntity === undefined) {
        try {
            inputEntity = getInputPeer(inputEntity)
        } catch (e) {
            inputEntity = null
        }
    }
    return {
        entity,
        inputEntity
    }
}
*/
function getMessageId(message) {
    if (!message) {
        return undefined;
    }
    else if (typeof message === "number") {
        return message;
    }
    else if (message.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("Message") || "id" in message) {
        return message.id;
    }
    else {
        throw new Error(`Invalid message type: ${message.constructor.name}`);
    }
}
/**
 * Parses the given phone, or returns `undefined` if it's invalid.
 * @param phone
 */
function parsePhone(phone) {
    phone = phone.toString().replace(/[()\s-]/gm, "");
    if (phone.startsWith("+") && phone.split("+").length - 1 == 1) {
        return !isNaN(Number(phone)) ? phone.replace("+", "") : undefined;
    }
}
/**
 * Parses a string ID into a big int
 * @param id
 */
function parseID(id) {
    const isValid = /^(-?[0-9][0-9]*)$/.test(id);
    return isValid ? (0, big_integer_1.default)(id) : undefined;
}
/**
 * Parses a Telegram invite link and extracts the hash.
 * Supports formats like:
 * - https://t.me/joinchat/HASH
 * - https://t.me/+HASH
 * - tg://join?invite=HASH
 * @param link The invite link
 * @returns The invite hash, or undefined if not a valid invite link
 */
function resolveInviteLink(link) {
    if (!link) {
        return undefined;
    }
    link = link.trim();
    const tmeMatch = link.match(/(?:https?:\/\/)?(?:www\.)?(?:telegram\.(?:me|dog)|t\.me)\/(?:joinchat\/|\+)([a-zA-Z0-9_-]+)/i);
    if (tmeMatch) {
        return tmeMatch[1];
    }
    const tgMatch = link.match(/tg:\/\/join\?invite=([a-zA-Z0-9_-]+)/i);
    if (tgMatch) {
        return tgMatch[1];
    }
    return undefined;
}
/**
 Parses the given username or channel access hash, given
 a string, username or URL. Returns a tuple consisting of
 both the stripped, lowercase username and whether it is
 a joinchat/ hash (in which case is not lowercase'd).

 Returns ``(undefined, false)`` if the ``username`` or link is not valid.

 * @param username {string}
 */
function parseUsername(username) {
    username = username.trim();
    const m = username.match(USERNAME_RE) || username.match(TG_JOIN_RE);
    if (m) {
        username = username.replace(m[0], "");
        if (m[1]) {
            return {
                username: username,
                isInvite: true,
            };
        }
        else {
            username = rtrim(username, "/");
        }
    }
    if (username.match(VALID_USERNAME_RE)) {
        return {
            username: username.toLowerCase(),
            isInvite: false,
        };
    }
    else {
        return {
            username: undefined,
            isInvite: false,
        };
    }
}
function rtrim(s, mask) {
    while (~mask.indexOf(s[s.length - 1])) {
        s = s.slice(0, -1);
    }
    return s;
}
/**
 * Gets the display name for the given :tl:`User`,
 :tl:`Chat` or :tl:`Channel`. Returns an empty string otherwise
 * @param entity
 */
function getDisplayName(entity) {
    if (entity instanceof tl_1.Api.User) {
        if (entity.lastName && entity.firstName) {
            return `${entity.firstName} ${entity.lastName}`;
        }
        else if (entity.firstName) {
            return entity.firstName;
        }
        else if (entity.lastName) {
            return entity.lastName;
        }
        else {
            return "";
        }
    }
    else if (entity instanceof tl_1.Api.Chat ||
        entity instanceof tl_1.Api.Channel ||
        entity instanceof tl_1.Api.Community ||
        entity instanceof tl_1.Api.CommunityForbidden) {
        return entity.title;
    }
    return "";
}
/**
 * Returns `True` if the file is a GIF.
 */
function isGif(file) {
    const ext = _getExtension(file).toLowerCase();
    if (ext === ".gif") {
        return true;
    }
    const metadata = _getMetadata(file);
    return (metadata.get("mimeType") || "") === "image/gif";
}
/**
 * Encodes the given array of 5-bit values into a waveform bytestring.
 * Used for voice message waveforms.
 * @param waveform Array of numbers (0-31, 5 bits each)
 * @returns Buffer with encoded waveform
 */
function encodeWaveform(waveform) {
    const bitCount = waveform.length * 5;
    const byteCount = Math.floor((bitCount + 7) / 8);
    const result = Buffer.alloc(byteCount);
    let bitPos = 0;
    for (const value of waveform) {
        const bytePos = Math.floor(bitPos / 8);
        const shift = bitPos % 8;
        result[bytePos] |= (value & 0x1f) << shift;
        if (shift > 3 && bytePos + 1 < byteCount) {
            result[bytePos + 1] |= (value & 0x1f) >> (8 - shift);
        }
        bitPos += 5;
    }
    return result;
}
/**
 * Decodes a waveform bytestring into an array of 5-bit values.
 * @param waveform Buffer with encoded waveform
 * @param valueCount Number of values to decode (default: calculated from buffer size)
 * @returns Array of numbers (0-31)
 */
function decodeWaveform(waveform, valueCount) {
    if (!waveform || waveform.length === 0) {
        return [];
    }
    const bitCount = waveform.length * 8;
    const count = valueCount !== null && valueCount !== void 0 ? valueCount : Math.floor(bitCount / 5);
    const result = [];
    let bitPos = 0;
    for (let i = 0; i < count; i++) {
        const bytePos = Math.floor(bitPos / 8);
        const shift = bitPos % 8;
        let value = (waveform[bytePos] >> shift) & 0x1f;
        if (shift > 3 && bytePos + 1 < waveform.length) {
            value |= (waveform[bytePos + 1] << (8 - shift)) & 0x1f;
        }
        result.push(value);
        bitPos += 5;
    }
    return result;
}
/**
 * Splits a message text while preserving formatting entities.
 * Useful for sending messages that exceed Telegram's character limit.
 * @param text The text to split
 * @param entities The formatting entities
 * @param limit Maximum length per chunk (default: 4096)
 * @returns Array of [text, entities] tuples
 */
function splitText(text, entities = [], limit = 4096) {
    if (text.length <= limit) {
        return [[text, entities]];
    }
    const result = [];
    let offset = 0;
    while (offset < text.length) {
        let end = Math.min(offset + limit, text.length);
        if (end < text.length) {
            const newlinePos = text.lastIndexOf("\n", end);
            const spacePos = text.lastIndexOf(" ", end);
            if (newlinePos > offset + limit / 2) {
                end = newlinePos + 1;
            }
            else if (spacePos > offset + limit / 2) {
                end = spacePos + 1;
            }
        }
        const chunk = text.slice(offset, end);
        const chunkEntities = [];
        for (const entity of entities) {
            const entityEnd = entity.offset + entity.length;
            if (entityEnd <= offset) {
                continue;
            }
            if (entity.offset >= end) {
                continue;
            }
            const newOffset = Math.max(0, entity.offset - offset);
            const newLength = Math.min(entity.length, end - offset - newOffset, entityEnd - offset - newOffset);
            if (newLength > 0) {
                const clonedEntity = Object.assign(Object.create(Object.getPrototypeOf(entity)), entity, { offset: newOffset, length: newLength });
                chunkEntities.push(clonedEntity);
            }
        }
        result.push([chunk, chunkEntities]);
        offset = end;
    }
    return result;
}
/**
 * Similar to getInputPeer, but for InputDialogPeer.
 * @param dialog The dialog to convert
 */
function getInputDialog(dialog) {
    if (dialog.SUBCLASS_OF_ID === undefined) {
        _raiseCastFail(dialog, "InputDialogPeer");
    }
    if (dialog.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputDialogPeer")) {
        return dialog;
    }
    if (dialog.SUBCLASS_OF_ID === (0, Helpers_1.unionId)("InputPeer")) {
        return new tl_1.Api.InputDialogPeer({ peer: dialog });
    }
    try {
        return new tl_1.Api.InputDialogPeer({ peer: getInputPeer(dialog) });
    }
    catch (e) {
        _raiseCastFail(dialog, "InputDialogPeer");
    }
}
// Bot File ID constants
const FILE_REFERENCE_FLAG = 0x01000000;
const WEB_LOCATION_FLAG = 0x02000000;
var BotFileType;
(function (BotFileType) {
    BotFileType[BotFileType["Thumbnail"] = 0] = "Thumbnail";
    BotFileType[BotFileType["ProfilePhoto"] = 1] = "ProfilePhoto";
    BotFileType[BotFileType["Photo"] = 2] = "Photo";
    BotFileType[BotFileType["Voice"] = 3] = "Voice";
    BotFileType[BotFileType["Video"] = 4] = "Video";
    BotFileType[BotFileType["Document"] = 5] = "Document";
    BotFileType[BotFileType["Encrypted"] = 6] = "Encrypted";
    BotFileType[BotFileType["Temp"] = 7] = "Temp";
    BotFileType[BotFileType["Sticker"] = 8] = "Sticker";
    BotFileType[BotFileType["Audio"] = 9] = "Audio";
    BotFileType[BotFileType["Animation"] = 10] = "Animation";
    BotFileType[BotFileType["EncryptedThumbnail"] = 11] = "EncryptedThumbnail";
    BotFileType[BotFileType["Wallpaper"] = 12] = "Wallpaper";
    BotFileType[BotFileType["VideoNote"] = 13] = "VideoNote";
    BotFileType[BotFileType["SecureRaw"] = 14] = "SecureRaw";
    BotFileType[BotFileType["Secure"] = 15] = "Secure";
    BotFileType[BotFileType["Background"] = 16] = "Background";
    BotFileType[BotFileType["DocumentAsFile"] = 17] = "DocumentAsFile";
})(BotFileType || (BotFileType = {}));
function _rleDecodeFileId(data) {
    const result = [];
    let i = 0;
    while (i < data.length) {
        if (data[i] === 0x00 && i + 1 < data.length) {
            const count = data[i + 1];
            for (let j = 0; j < count; j++) {
                result.push(0x00);
            }
            i += 2;
        }
        else {
            result.push(data[i]);
            i += 1;
        }
    }
    return Buffer.from(result);
}
function _rleEncodeFileId(data) {
    const result = [];
    let i = 0;
    while (i < data.length) {
        if (data[i] === 0x00) {
            let count = 0;
            while (i < data.length && data[i] === 0x00 && count < 255) {
                count++;
                i++;
            }
            result.push(0x00, count);
        }
        else {
            result.push(data[i]);
            i++;
        }
    }
    return Buffer.from(result);
}
/**
 * Decodes a bot API file_id into the corresponding InputDocument/InputPhoto.
 * @param fileId The bot API file_id string
 * @returns InputDocument, InputPhoto, or undefined if decoding fails
 */
function resolveBotFileId(fileId) {
    try {
        const data = Buffer.from(fileId.replace(/-/g, "+").replace(/_/g, "/"), "base64");
        if (data.length < 8) {
            return undefined;
        }
        const decoded = _rleDecodeFileId(data);
        if (!decoded || decoded.length < 8) {
            return undefined;
        }
        let offset = 0;
        const fileType = decoded.readUInt32LE(offset);
        offset += 4;
        offset += 4; // dcId (not used)
        const hasFileReference = (fileType & FILE_REFERENCE_FLAG) !== 0;
        const hasWebLocation = (fileType & WEB_LOCATION_FLAG) !== 0;
        const actualFileType = fileType & 0x00ffffff;
        if (hasWebLocation) {
            return undefined;
        }
        let fileReference = Buffer.alloc(0);
        if (hasFileReference && offset < decoded.length) {
            const refLength = decoded[offset];
            offset += 1;
            if (offset + refLength <= decoded.length) {
                fileReference = Buffer.from(decoded.subarray(offset, offset + refLength));
                offset += refLength;
            }
        }
        if (offset + 16 > decoded.length) {
            return undefined;
        }
        const id = decoded.readBigInt64LE(offset);
        offset += 8;
        const accessHash = decoded.readBigInt64LE(offset);
        if (actualFileType === BotFileType.Photo || actualFileType === BotFileType.ProfilePhoto) {
            return new tl_1.Api.InputPhoto({
                id: (0, big_integer_1.default)(id.toString()),
                accessHash: (0, big_integer_1.default)(accessHash.toString()),
                fileReference: fileReference,
            });
        }
        else {
            return new tl_1.Api.InputDocument({
                id: (0, big_integer_1.default)(id.toString()),
                accessHash: (0, big_integer_1.default)(accessHash.toString()),
                fileReference: fileReference,
            });
        }
    }
    catch (e) {
        return undefined;
    }
}
/**
 * Encodes a document or photo into a bot API file_id.
 * @param media The media object (Document, Photo, etc.)
 * @returns The encoded file_id string, or undefined if encoding fails
 */
function packBotFileId(media) {
    var _a, _b, _c;
    try {
        let id;
        let accessHash;
        let fileReference = Buffer.alloc(0);
        let fileType;
        let dcId = 0;
        if (media instanceof tl_1.Api.Document) {
            id = media.id;
            accessHash = media.accessHash;
            fileReference = Buffer.from(media.fileReference);
            dcId = media.dcId;
            if (media.mimeType === "audio/ogg") {
                fileType = BotFileType.Voice;
            }
            else if ((_a = media.mimeType) === null || _a === void 0 ? void 0 : _a.startsWith("audio/")) {
                fileType = BotFileType.Audio;
            }
            else if ((_b = media.mimeType) === null || _b === void 0 ? void 0 : _b.startsWith("video/")) {
                const isVideoNote = (_c = media.attributes) === null || _c === void 0 ? void 0 : _c.some((a) => a instanceof tl_1.Api.DocumentAttributeVideo && a.roundMessage);
                fileType = isVideoNote ? BotFileType.VideoNote : BotFileType.Video;
            }
            else if (media.mimeType === "application/x-tgsticker" || media.mimeType === "image/webp") {
                fileType = BotFileType.Sticker;
            }
            else if (media.mimeType === "video/mp4" || media.mimeType === "image/gif") {
                fileType = BotFileType.Animation;
            }
            else {
                fileType = BotFileType.Document;
            }
        }
        else if (media instanceof tl_1.Api.Photo) {
            id = media.id;
            accessHash = media.accessHash;
            fileReference = Buffer.from(media.fileReference);
            dcId = media.dcId;
            fileType = BotFileType.Photo;
        }
        else if (media instanceof tl_1.Api.InputDocument) {
            id = media.id;
            accessHash = media.accessHash;
            fileReference = media.fileReference ? Buffer.from(media.fileReference) : Buffer.alloc(0);
            fileType = BotFileType.Document;
        }
        else if (media instanceof tl_1.Api.InputPhoto) {
            id = media.id;
            accessHash = media.accessHash;
            fileReference = media.fileReference ? Buffer.from(media.fileReference) : Buffer.alloc(0);
            fileType = BotFileType.Photo;
        }
        else {
            return undefined;
        }
        const hasFileRef = fileReference.length > 0;
        const typeWithFlags = fileType | (hasFileRef ? FILE_REFERENCE_FLAG : 0);
        const bufferSize = 4 + 4 + (hasFileRef ? 1 + fileReference.length : 0) + 8 + 8;
        const buffer = Buffer.alloc(bufferSize);
        let offset = 0;
        buffer.writeUInt32LE(typeWithFlags, offset);
        offset += 4;
        buffer.writeUInt32LE(dcId, offset);
        offset += 4;
        if (hasFileRef) {
            buffer.writeUInt8(fileReference.length, offset);
            offset += 1;
            fileReference.copy(buffer, offset);
            offset += fileReference.length;
        }
        buffer.writeBigInt64LE(BigInt(id.toString()), offset);
        offset += 8;
        buffer.writeBigInt64LE(BigInt(accessHash.toString()), offset);
        const encoded = _rleEncodeFileId(buffer);
        return encoded
            .toString("base64")
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");
    }
    catch (e) {
        return undefined;
    }
}
/**
 * check if a given item is an array like or not
 * @param item
 * @returns {boolean}
 */
/*CONTEST
Duplicate ?
export function  isListLike(item) {
    return (
        Array.isArray(item) ||
        (!!item &&
            typeof item === 'object' &&
            typeof (item.length) === 'number' &&
            (item.length === 0 ||
                (item.length > 0 &&
                    (item.length - 1) in item)
            )
        )
    )
}
*/
