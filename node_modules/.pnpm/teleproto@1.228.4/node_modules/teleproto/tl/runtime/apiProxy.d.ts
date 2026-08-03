type Invoker = (request: unknown, dcId?: number) => Promise<unknown>;
export declare function createApiProxy(api: Record<string, unknown>, invoke: Invoker): unknown;
export {};
