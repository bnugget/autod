"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MtpDispatcher = void 0;
const big_integer_1 = __importDefault(require("big-integer"));
const tl_1 = require("../tl");
const core_1 = require("../tl/core");
const extensions_1 = require("../extensions");
const errors_1 = require("../errors");
const Helpers_1 = require("../Helpers");
const RequestState_1 = require("./RequestState");
var MsgsAck = tl_1.Api.MsgsAck;
/**
 * Routes every decrypted MTProto message to its protocol reaction
 * (https://core.telegram.org/mtproto/service_messages)
 */
class MtpDispatcher {
    constructor(sender) {
        this.sender = sender;
        this.handlers = {
            [core_1.RPCResult.CONSTRUCTOR_ID.toString()]: this.handleRPCResult.bind(this),
            [core_1.MessageContainer.CONSTRUCTOR_ID.toString()]: this.handleContainer.bind(this),
            [core_1.GZIPPacked.CONSTRUCTOR_ID.toString()]: this.handleGzipPacked.bind(this),
            [tl_1.Api.Pong.CONSTRUCTOR_ID.toString()]: this.handlePong.bind(this),
            [tl_1.Api.BadServerSalt.CONSTRUCTOR_ID.toString()]: this.handleBadServerSalt.bind(this),
            [tl_1.Api.BadMsgNotification.CONSTRUCTOR_ID.toString()]: this.handleBadNotification.bind(this),
            [tl_1.Api.MsgDetailedInfo.CONSTRUCTOR_ID.toString()]: this.handleDetailedInfo.bind(this),
            [tl_1.Api.MsgNewDetailedInfo.CONSTRUCTOR_ID.toString()]: this.handleNewDetailedInfo.bind(this),
            [tl_1.Api.NewSessionCreated.CONSTRUCTOR_ID.toString()]: this.handleNewSessionCreated.bind(this),
            [tl_1.Api.MsgsAck.CONSTRUCTOR_ID.toString()]: this.handleAck.bind(this),
            [tl_1.Api.FutureSalts.CONSTRUCTOR_ID.toString()]: this.handleFutureSalts.bind(this),
            [tl_1.Api.MsgsStateReq.CONSTRUCTOR_ID.toString()]: this.handleStateForgotten.bind(this),
            [tl_1.Api.MsgResendReq.CONSTRUCTOR_ID.toString()]: this.handleStateForgotten.bind(this),
            [tl_1.Api.MsgsAllInfo.CONSTRUCTOR_ID.toString()]: this.handleMsgAll.bind(this),
        };
    }
    async process(message) {
        var _a;
        this.sender.ack(message.msgId);
        message.obj = await message.obj;
        this.sender.log.debug(`[MSG] Processing msgId=${message.msgId} type=${message.obj.className} constructorId=${message.obj.CONSTRUCTOR_ID}`);
        const handler = (_a = this.handlers[message.obj.CONSTRUCTOR_ID.toString()]) !== null && _a !== void 0 ? _a : this.handleUpdate.bind(this);
        await handler(message);
    }
    popStates(msgId) {
        var _a, _b;
        const state = this.sender.pendingState.getAndDelete(msgId);
        if (state) {
            return [state];
        }
        const toPop = [];
        for (const pending of this.sender.pendingState.values()) {
            if ((_a = pending.containerId) === null || _a === void 0 ? void 0 : _a.equals(msgId)) {
                toPop.push(pending.msgId);
            }
        }
        if (toPop.length) {
            const popped = [];
            for (const x of toPop) {
                const state = this.sender.pendingState.getAndDelete(x);
                if (state)
                    popped.push(state);
            }
            return popped;
        }
        for (const ack of this.sender.lastAcks) {
            if ((_b = ack.msgId) === null || _b === void 0 ? void 0 : _b.equals(msgId)) {
                return [ack];
            }
        }
        return [];
    }
    handleRPCResult(message) {
        const result = message.obj;
        const state = this.sender.pendingState.getAndDelete(result.reqMsgId);
        this.sender.log.debug(`Handling RPC result for message ${result.reqMsgId}`);
        if (!state) {
            try {
                const reader = new extensions_1.BinaryReader(result.body);
                if (!(reader.tgReadObject() instanceof tl_1.Api.upload.File)) {
                    throw new errors_1.TypeNotFoundError(0, Buffer.alloc(0));
                }
            }
            catch (e) {
                if (e instanceof errors_1.TypeNotFoundError) {
                    this.sender.log.info(`Received response without parent request: ${result.body}`);
                    return;
                }
                throw e;
            }
            return;
        }
        if (result.error) {
            // eslint-disable-next-line new-cap
            const error = (0, errors_1.RPCMessageToError)(result.error, state.request);
            this.sender.ack(state.msgId);
            state.reject(error);
            if (error.errorMessage === "AUTH_KEY_UNREGISTERED" ||
                error.errorMessage === "SESSION_REVOKED") {
                this.sender.onBadAuthKey(true);
            }
        }
        else {
            try {
                const reader = new extensions_1.BinaryReader(result.body);
                const read = state.request.readResult(reader);
                this.sender.log.debug(`Handling RPC result ${read === null || read === void 0 ? void 0 : read.className}`);
                state.resolve(read);
            }
            catch (err) {
                state.reject(err);
                this.sender.log.error(`Failed to read result for ${state.request.className}`, err);
            }
        }
    }
    async handleContainer(message) {
        this.sender.log.debug(`[CONTAINER] msgId=${message.msgId} contains ${message.obj.messages.length} messages`);
        for (const innerMessage of message.obj.messages) {
            await this.process(innerMessage);
        }
    }
    async handleGzipPacked(message) {
        this.sender.log.debug("Handling gzipped data");
        const reader = new extensions_1.BinaryReader(message.obj.data);
        message.obj = reader.tgReadObject();
        await this.process(message);
    }
    handleUpdate(message) {
        if (message.obj.SUBCLASS_OF_ID !== (0, Helpers_1.unionId)("Updates")) {
            this.sender.log.warn(`Note: ${message.obj.className} is not an update, not dispatching it`);
            return;
        }
        this.sender.log.debug(`[UPDATE] msgId=${message.msgId} type=${message.obj.className}` +
            (message.obj.updates
                ? ` innerUpdates=${message.obj.updates.length}:[${message.obj.updates
                    .map((u) => u.className)
                    .join(",")}]`
                : ""));
        this.sender.dispatchUpdate(message.obj);
    }
    handlePong(message) {
        const pong = message.obj;
        this.sender.log.debug(`Handling pong for message ${pong.msgId}`);
        const state = this.sender.pendingState.get(pong.msgId.toString());
        this.sender.pendingState.delete(pong.msgId.toString());
        if (state) {
            state.resolve(pong);
        }
    }
    handleBadServerSalt(message) {
        var _a;
        const badSalt = message.obj;
        this.sender.log.debug(`Handling bad salt for message ${badSalt.badMsgId}`);
        this.sender.state.salt = badSalt.newServerSalt;
        (_a = this.sender.dcenter) === null || _a === void 0 ? void 0 : _a.updateSalt(badSalt.newServerSalt);
        const states = this.popStates(badSalt.badMsgId);
        this.sender.requeue(states);
        this.sender.log.debug(`${states.length} message(s) will be resent`);
    }
    handleBadNotification(message) {
        const badMsg = message.obj;
        const states = this.popStates(badMsg.badMsgId);
        this.sender.log.debug(`Handling bad msg ${JSON.stringify(badMsg)}`);
        if ([16, 17].includes(badMsg.errorCode)) {
            const to = this.sender.state.updateTimeOffset((0, big_integer_1.default)(message.msgId));
            this.sender.log.info(`System clock is wrong, set time offset to ${to}s`);
        }
        else if (badMsg.errorCode === 32) {
            this.sender.state._sequence += 64;
        }
        else if (badMsg.errorCode === 33) {
            this.sender.state._sequence -= 16;
        }
        else {
            for (const state of states) {
                if (state.request instanceof MsgsAck)
                    continue;
                state.reject(new errors_1.BadMessageError(state.request, badMsg.errorCode));
            }
            return;
        }
        this.sender.requeue(states);
        this.sender.log.debug(`${states.length} messages will be resent due to bad msg`);
    }
    handleDetailedInfo(message) {
        const msgId = message.obj.answerMsgId;
        this.sender.log.debug(`Handling detailed info for message ${msgId}`);
        this.sender.ack(msgId);
    }
    handleNewDetailedInfo(message) {
        const msgId = message.obj.answerMsgId;
        this.sender.log.debug(`Handling new detailed info for message ${msgId}`);
        this.sender.ack(msgId);
    }
    handleNewSessionCreated(message) {
        var _a;
        this.sender.log.debug("Handling new session created");
        this.sender.state.salt = message.obj.serverSalt;
        (_a = this.sender.dcenter) === null || _a === void 0 ? void 0 : _a.updateSalt(message.obj.serverSalt);
        const uniqueId = String(message.obj.uniqueId);
        if (this._lastSessionUniqueId === undefined) {
            this._lastSessionUniqueId = uniqueId;
            return;
        }
        if (uniqueId === this._lastSessionUniqueId) {
            return;
        }
        this._lastSessionUniqueId = uniqueId;
        this.sender.markNeedsInitConnection();
        if (this.sender.isMainSender) {
            this.sender.dispatchUpdate(new tl_1.Api.UpdatesTooLong());
        }
    }
    handleAck(message) {
        if (message.obj.msgIds) {
            for (const msgId of message.obj.msgIds) {
                const state = this.sender.pendingState.get(msgId);
                if (state) {
                    state.acknowledged = true;
                }
            }
        }
    }
    handleFutureSalts(message) {
        this.sender.log.debug(`Handling future salts for message ${message.msgId}`);
        const state = this.sender.pendingState.getAndDelete(message.msgId);
        if (state) {
            state.resolve(message.obj);
        }
    }
    handleStateForgotten(message) {
        this.sender.enqueue(new RequestState_1.RequestState(new tl_1.Api.MsgsStateInfo({
            reqMsgId: message.msgId,
            info: String.fromCharCode(1).repeat(message.obj.msgIds.length),
        })));
    }
    handleMsgAll(_message) { }
}
exports.MtpDispatcher = MtpDispatcher;
