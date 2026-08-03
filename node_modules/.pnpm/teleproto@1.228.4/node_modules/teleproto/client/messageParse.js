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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_DELIMITERS = void 0;
exports._replaceWithMention = _replaceWithMention;
exports._parseMessageText = _parseMessageText;
exports._getResponseMessage = _getResponseMessage;
const Utils_1 = require("../Utils");
const tl_1 = require("../tl");
const utils = __importStar(require("../Utils"));
const Helpers_1 = require("../Helpers");
const big_integer_1 = __importDefault(require("big-integer"));
var markdown_1 = require("../extensions/markdown");
Object.defineProperty(exports, "DEFAULT_DELIMITERS", { enumerable: true, get: function () { return markdown_1.DEFAULT_DELIMITERS; } });
/** @hidden */
async function _replaceWithMention(client, entities, i, user) {
    try {
        entities[i] = new tl_1.Api.InputMessageEntityMentionName({
            offset: entities[i].offset,
            length: entities[i].length,
            userId: utils.getInputUser(await client.getInputEntity(user)),
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
/** @hidden */
async function _parseMessageText(client, message, parseMode) {
    if (parseMode == false) {
        return [message, []];
    }
    if (parseMode == undefined) {
        if (client.parseMode == undefined) {
            return [message, []];
        }
        parseMode = client.parseMode;
    }
    else if (typeof parseMode === "string") {
        parseMode = client._sanitizeParseMode(parseMode);
    }
    const [rawMessage, msgEntities] = parseMode.parse(message);
    for (let i = msgEntities.length - 1; i >= 0; i--) {
        const e = msgEntities[i];
        if (e instanceof tl_1.Api.MessageEntityMentionName) {
            await _replaceWithMention(client, msgEntities, i, e.userId);
        }
        else if (e instanceof tl_1.Api.MessageEntityTextUrl) {
            const m = /^(?:@|\+|tg:\/\/user\?id=(\d+))/.exec(e.url);
            if (m) {
                const userIdOrUsername = m[1] ? Number(m[1]) : e.url;
                const isMention = await _replaceWithMention(client, msgEntities, i, userIdOrUsername);
                if (!isMention) {
                    msgEntities.splice(i, 1);
                }
            }
        }
    }
    return [rawMessage, msgEntities];
}
/** @hidden */
function _getResponseMessage(client, request, result, inputChat) {
    let updates = [];
    let entities = new Map();
    if (result instanceof tl_1.Api.UpdateShort) {
        updates = [result.update];
    }
    else if (result instanceof tl_1.Api.Updates ||
        result instanceof tl_1.Api.UpdatesCombined) {
        updates = result.updates;
        for (const x of [...result.users, ...result.chats]) {
            entities.set(utils.getPeerId(x), x);
        }
    }
    else {
        return;
    }
    const randomToId = new Map();
    const idToMessage = new Map();
    let schedMessage;
    for (const update of updates) {
        if (update instanceof tl_1.Api.UpdateMessageID) {
            randomToId.set(update.randomId.toString(), update.id);
        }
        else if (update instanceof tl_1.Api.UpdateNewChannelMessage ||
            update instanceof tl_1.Api.UpdateNewMessage) {
            update.message._finishInit(client, entities, inputChat);
            if ("randomId" in request || (0, Helpers_1.isArrayLike)(request)) {
                idToMessage.set(update.message.id, update.message);
            }
            else {
                return update.message;
            }
        }
        else if (update instanceof tl_1.Api.UpdateEditMessage &&
            "peer" in request &&
            (0, Helpers_1._entityType)(request.peer) != Helpers_1._EntityType.CHANNEL) {
            update.message._finishInit(client, entities, inputChat);
            if ("randomId" in request) {
                idToMessage.set(update.message.id, update.message);
            }
            else if ("id" in request && request.id === update.message.id) {
                return update.message;
            }
        }
        else if (update instanceof tl_1.Api.UpdateEditChannelMessage &&
            "peer" in request &&
            (0, Utils_1.getPeerId)(request.peer) ==
                (0, Utils_1.getPeerId)(update.message.peerId)) {
            if (request.id == update.message.id) {
                update.message._finishInit(client, entities, inputChat);
                return update.message;
            }
        }
        else if (update instanceof tl_1.Api.UpdateNewScheduledMessage) {
            update.message._finishInit(client, entities, inputChat);
            schedMessage = update.message;
            idToMessage.set(update.message.id, update.message);
        }
        else if (update instanceof tl_1.Api.UpdateMessagePoll) {
            if (request.media.poll.id == update.pollId) {
                const m = new tl_1.Api.Message({
                    id: request.id,
                    peerId: utils.getPeerId(request.peer),
                    media: new tl_1.Api.MessageMediaPoll({
                        poll: update.poll,
                        results: update.results,
                    }),
                    message: "",
                    date: 0,
                });
                m._finishInit(client, entities, inputChat);
                return m;
            }
        }
    }
    if (request == undefined) {
        return idToMessage;
    }
    let randomId;
    if ((0, Helpers_1.isArrayLike)(request) ||
        typeof request == "number" ||
        big_integer_1.default.isInstance(request)) {
        randomId = request;
    }
    else {
        randomId = request.randomId;
    }
    if (!randomId) {
        if (schedMessage) {
            return schedMessage;
        }
        client._log.warn(`No randomId in ${request} to map to. returning undefined for ${result} (Message was empty)`);
        return undefined;
    }
    if (!(0, Helpers_1.isArrayLike)(randomId)) {
        let msg = idToMessage.get(randomToId.get(randomId.toString()));
        if (!msg) {
            client._log.warn(`Request ${request.className} had missing message mapping ${result.className} (Message was empty)`);
        }
        return msg;
    }
    const final = [];
    let warned = false;
    for (const rnd of randomId) {
        const tmp = randomToId.get(rnd.toString());
        if (!tmp) {
            warned = true;
            break;
        }
        const tmp2 = idToMessage.get(tmp);
        if (!tmp2) {
            warned = true;
            break;
        }
        final.push(tmp2);
    }
    if (warned) {
        client._log.warn(`Request ${request.className} had missing message mapping ${result.className} (Message was empty)`);
    }
    const finalToReturn = [];
    for (const rnd of randomId) {
        finalToReturn.push(idToMessage.get(randomToId.get(rnd.toString())));
    }
    return finalToReturn;
}
