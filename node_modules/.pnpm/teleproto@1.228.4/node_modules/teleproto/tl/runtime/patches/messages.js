"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchAll = patchAll;
const api_1 = require("../../api");
const message_1 = require("../../custom/message");
function getGetter(obj, prop) {
    while (obj) {
        const getter = Object.getOwnPropertyDescriptor(obj, prop);
        if (getter && getter.get) {
            return getter.get;
        }
        obj = Object.getPrototypeOf(obj);
    }
}
function getSetter(obj, prop) {
    while (obj) {
        const setter = Object.getOwnPropertyDescriptor(obj, prop);
        if (setter && setter.set) {
            return setter.set;
        }
        obj = Object.getPrototypeOf(obj);
    }
}
function getInstanceMethods(obj) {
    const keys = {
        methods: new Set(),
        setters: new Set(),
        getters: new Set(),
    };
    let topObject = obj;
    const mapAllMethods = (property) => {
        const getter = getGetter(topObject, property);
        const setter = getSetter(topObject, property);
        if (getter) {
            keys.getters.add(property);
        }
        else if (setter) {
            keys.setters.add(property);
        }
        else if (property !== "constructor") {
            keys.methods.add(property);
        }
    };
    do {
        Object.getOwnPropertyNames(obj).map(mapAllMethods);
        obj = Object.getPrototypeOf(obj);
    } while (obj && Object.getPrototypeOf(obj));
    return keys;
}
function patchClass(clazz) {
    const { getters, setters, methods } = getInstanceMethods(message_1.CustomMessage.prototype);
    for (const getter of getters) {
        Object.defineProperty(clazz.prototype, getter, {
            get: getGetter(message_1.CustomMessage.prototype, getter),
        });
    }
    for (const setter of setters) {
        Object.defineProperty(clazz.prototype, setter, {
            set: getSetter(message_1.CustomMessage.prototype, setter),
        });
    }
    for (const method of methods) {
        clazz.prototype[method] = message_1.CustomMessage.prototype[method];
    }
}
function patchAll() {
    patchClass(api_1.Api.Message);
    patchClass(api_1.Api.MessageService);
    patchClass(api_1.Api.MessageEmpty);
}
