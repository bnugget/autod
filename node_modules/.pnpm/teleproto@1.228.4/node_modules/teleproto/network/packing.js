"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packRequestBatch = packRequestBatch;
const extensions_1 = require("../extensions");
const core_1 = require("../tl/core");
async function packRequestBatch(state, queued, log) {
    var _a;
    let buffer = new extensions_1.BinaryWriter(Buffer.alloc(0));
    const batch = [];
    let size = 0;
    while (queued.length &&
        batch.length < core_1.MessageContainer.MAXIMUM_LENGTH) {
        const request = queued.shift();
        size += request.data.length + core_1.TLMessage.SIZE_OVERHEAD;
        if (size <= core_1.MessageContainer.MAXIMUM_SIZE) {
            request.msgId = await state.writeDataAsMessage(buffer, request.data, request.request.classType === "request", (_a = request.after) === null || _a === void 0 ? void 0 : _a.msgId, request.forcedMsgId);
            log.debug(`Assigned msgId = ${request.msgId} to ${request.request.className ||
                request.request.constructor.name}`);
            batch.push(request);
            continue;
        }
        if (batch.length) {
            queued.unshift(request);
            break;
        }
        log.warn(`Message payload for ${request.request.className || request.request.constructor.name} is too long ${request.data.length} and cannot be sent`);
        request.reject(new Error("Request payload is too big"));
        size = 0;
    }
    if (!batch.length) {
        return null;
    }
    let data = buffer.getValue();
    if (batch.length > 1) {
        const header = Buffer.alloc(8);
        header.writeUInt32LE(core_1.MessageContainer.CONSTRUCTOR_ID, 0);
        header.writeInt32LE(batch.length, 4);
        const containerBody = Buffer.concat([header, data]);
        buffer = new extensions_1.BinaryWriter(Buffer.alloc(0));
        const containerId = await state.writeDataAsMessage(buffer, containerBody, false);
        for (const request of batch) {
            request.containerId = containerId;
        }
        data = buffer.getValue();
    }
    return { batch, data };
}
