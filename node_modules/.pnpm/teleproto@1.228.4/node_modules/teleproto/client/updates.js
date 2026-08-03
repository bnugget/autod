"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopPropagation = void 0;
exports.on = on;
exports.addEventHandler = addEventHandler;
exports.removeEventHandler = removeEventHandler;
exports.listEventHandlers = listEventHandlers;
exports.catchUp = catchUp;
exports._handleUpdate = _handleUpdate;
exports._dispatchUpdate = _dispatchUpdate;
exports._updateLoop = _updateLoop;
const tl_1 = require("../tl");
const network_1 = require("../network");
const Helpers_1 = require("../Helpers");
const PING_INTERVAL = 9000; // 9 sec
const PING_TIMEOUT = 10000; // 10 sec
const PING_FAIL_ATTEMPTS = 3;
const PING_FAIL_INTERVAL = 100; // ms
const PING_DISCONNECT_DELAY = 75;
const PING_INTERVAL_TO_WAKE_UP = 5000;
const PING_WAKE_UP_TIMEOUT = 3000;
const PING_WAKE_UP_WARNING_TIMEOUT = 1000;
/**
 * If raised inside a registered handler, stops further dispatching for that
 * update — analogue of StopIteration but for events.
 */
class StopPropagation extends Error {
}
exports.StopPropagation = StopPropagation;
function on(client, event) {
    return (f) => {
        client.addEventHandler(f, event);
        return f;
    };
}
function addEventHandler(client, callback, event) {
    if (event == undefined) {
        const raw = require("../events/Raw").Raw;
        event = new raw({});
    }
    event.client = client;
    client._eventBuilders.push([event, callback]);
}
function removeEventHandler(client, callback, event) {
    client._eventBuilders = client._eventBuilders.filter((item) => item[0] !== event && item[1] !== callback);
}
function listEventHandlers(client) {
    return client._eventBuilders;
}
async function catchUp(client) {
    await client.updateManager.catchUp();
}
/** @hidden */
function _handleUpdate(client, update) {
    try {
        if (typeof update === "number") {
            if ([-1, 0, 1].includes(update)) {
                _dispatchUpdate(client, {
                    update: new network_1.UpdateConnectionState(update),
                }).catch((e) => {
                    client._log.error(`Error dispatching connection state: ${e}`);
                });
            }
            return;
        }
        if (update instanceof network_1.UpdateConnectionState) {
            _dispatchUpdate(client, { update }).catch((e) => {
                client._log.error(`Error dispatching connection state: ${e}`);
            });
            return;
        }
        client.updateManager.onUpdates(update);
    }
    catch (e) {
        client._log.error(`Error handling update: ${e}`);
    }
}
/** @hidden */
async function _dispatchUpdate(client, args) {
    for (const [builder, callback] of [...client._eventBuilders]) {
        if (!builder || !callback) {
            continue;
        }
        try {
            if (!builder.resolved) {
                await builder.resolve(client);
            }
        }
        catch (e) {
            client._log.error(`Error resolving event builder: ${e}`);
            continue;
        }
        let event = args.update;
        if (event) {
            if (!client._selfInputPeer) {
                try {
                    await client.getMe(true);
                }
                catch (_a) {
                    // ignore — user may not be authorized yet
                }
            }
            try {
                event = builder.build(event, callback, client._selfInputPeer
                    ? (0, Helpers_1.returnBigInt)(client._selfInputPeer.userId)
                    : undefined);
            }
            catch (e) {
                client._log.error(`Error building event: ${e}`);
                continue;
            }
            if (event) {
                event._client = client;
                if ("_eventName" in event) {
                    event._setClient(client);
                    event.originalUpdate = args.update;
                    event._entities = args.update._entities;
                }
                let filter;
                try {
                    filter = await builder.filter(event);
                }
                catch (e) {
                    client._log.error(`Error in event filter: ${e}`);
                    continue;
                }
                if (!filter)
                    continue;
                try {
                    await callback(event);
                }
                catch (e) {
                    if (e instanceof StopPropagation)
                        break;
                    if (client._errorHandler) {
                        await client._errorHandler(e);
                    }
                    client._log.error(`Error in event handler: ${e}`);
                }
            }
        }
    }
}
/** @hidden */
async function _updateLoop(client) {
    var _a, _b;
    client.updateManager.start();
    await client.updateManager.ensureState();
    let lastPongAt;
    while (!client._destroyed) {
        await (0, Helpers_1.sleep)(PING_INTERVAL, true);
        if (client._destroyed)
            break;
        if (((_a = client._sender) === null || _a === void 0 ? void 0 : _a.isReconnecting) || client._isSwitchingDc) {
            lastPongAt = undefined;
            continue;
        }
        if (client.disconnected)
            break;
        try {
            const ping = () => client._sender.send(new tl_1.Api.PingDelayDisconnect({
                pingId: (0, Helpers_1.returnBigInt)((0, Helpers_1.getRandomInt)(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)),
                disconnectDelay: PING_DISCONNECT_DELAY,
            }));
            const pingAt = Date.now();
            const lastInterval = lastPongAt ? pingAt - lastPongAt : undefined;
            if (!lastInterval || lastInterval < PING_INTERVAL_TO_WAKE_UP) {
                await attempts(() => timeout(ping, PING_TIMEOUT), PING_FAIL_ATTEMPTS, PING_FAIL_INTERVAL);
            }
            else {
                let wakeUpWarningTimeout = setTimeout(() => {
                    _handleUpdate(client, network_1.UpdateConnectionState.disconnected);
                    wakeUpWarningTimeout = undefined;
                }, PING_WAKE_UP_WARNING_TIMEOUT);
                await timeout(ping, PING_WAKE_UP_TIMEOUT);
                if (wakeUpWarningTimeout) {
                    clearTimeout(wakeUpWarningTimeout);
                    wakeUpWarningTimeout = undefined;
                }
                _handleUpdate(client, network_1.UpdateConnectionState.connected);
            }
            lastPongAt = Date.now();
        }
        catch (err) {
            lastPongAt = undefined;
            if (client._destroyed)
                break;
            if (Date.now() - client._lastReceivedAt < PING_INTERVAL + PING_TIMEOUT) {
                client._log.debug(`Ping timed out but transfer is active, ignoring`);
                continue;
            }
            if (client._errorHandler) {
                await client._errorHandler(err);
            }
            client._log.warn(`Ping failed: ${err}, reconnecting`);
            if (((_b = client._sender) === null || _b === void 0 ? void 0 : _b.isReconnecting) || client._isSwitchingDc)
                continue;
            if (client.disconnected)
                break;
            client._sender.reconnect();
        }
        await client.updateManager.recoverIfStale();
        // Per Telegram docs, we need a content-related request at least hourly
        // for Telegram to keep delivering updates. Catch up every 30 minutes.
        if (Date.now() - (client._lastRequest || 0) > 30 * 60 * 1000) {
            try {
                await client.updateManager.catchUp();
            }
            catch (_c) {
                // ignore — user may not be authorized yet
            }
            lastPongAt = undefined;
        }
    }
    client._loopStarted = false;
    if (client._destroyed) {
        await client.disconnect();
    }
}
async function attempts(cb, times, pause) {
    for (let i = 0; i < times; i++) {
        try {
            return await cb();
        }
        catch (err) {
            if (i === times - 1)
                throw err;
            await (0, Helpers_1.sleep)(pause);
        }
    }
    return undefined;
}
function timeout(cb, ms) {
    let resolved = false;
    return Promise.race([
        cb(),
        (0, Helpers_1.sleep)(ms).then(() => resolved ? undefined : Promise.reject(new Error("TIMEOUT"))),
    ]).finally(() => {
        resolved = true;
    });
}
