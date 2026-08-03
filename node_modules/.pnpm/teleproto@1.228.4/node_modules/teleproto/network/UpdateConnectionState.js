"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConnectionState = void 0;
class UpdateConnectionState {
    constructor(state) {
        this.state = state;
    }
}
exports.UpdateConnectionState = UpdateConnectionState;
UpdateConnectionState.disconnected = -1;
UpdateConnectionState.connected = 1;
UpdateConnectionState.broken = 0;
