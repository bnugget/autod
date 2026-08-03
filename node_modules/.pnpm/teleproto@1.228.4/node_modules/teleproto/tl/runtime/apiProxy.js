"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiProxy = createApiProxy;
function upperFirst(value) {
    return value ? `${value[0].toUpperCase()}${value.slice(1)}` : value;
}
function asRequestClass(value) {
    return typeof value === "function" &&
        value.classType === "request"
        ? value
        : undefined;
}
function createApiProxy(api, invoke) {
    const callMethod = (Ctor) => (params, opts) => invoke(new Ctor(params || {}), opts === null || opts === void 0 ? void 0 : opts.dcId);
    const namespaceProxy = (ns) => new Proxy(Object.create(null), {
        get(_target, key) {
            if (typeof key !== "string")
                return undefined;
            const Ctor = asRequestClass(ns[upperFirst(key)]);
            return Ctor ? callMethod(Ctor) : undefined;
        },
    });
    return new Proxy(Object.create(null), {
        get(_target, key) {
            if (typeof key !== "string")
                return undefined;
            const direct = api[key];
            if (direct && typeof direct === "object") {
                return namespaceProxy(direct);
            }
            const Ctor = asRequestClass(api[upperFirst(key)]);
            return Ctor ? callMethod(Ctor) : undefined;
        },
    });
}
