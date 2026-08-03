type ArgConfig = {
    isVector: boolean;
    isFlag: boolean;
    skipConstructorId: boolean;
    flagName: string | null;
    flagIndex: number;
    flagIndicator: boolean;
    type: string | null;
    useVectorId: boolean | null;
    name?: string;
};
type Definition = {
    name: string;
    constructorId: number;
    subclassOfId: number;
    argsConfig: Record<string, ArgConfig>;
    namespace?: string;
    isFunction: boolean;
    result: string;
};
type ApiTree = Record<string, unknown>;
export declare function createApiFromDefinitions(definitions: Definition[]): ApiTree;
export {};
