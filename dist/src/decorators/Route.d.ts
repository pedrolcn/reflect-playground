export declare type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'all';
export interface MethodRouteMetadata {
    [s: string]: {
        path: string;
        method: RequestMethod;
        middlewares: Function[];
    };
}
export declare const Get: (path: string, middlewares?: Function[]) => MethodDecorator;
export declare const Post: (path: string, middlewares?: Function[]) => MethodDecorator;
export declare const Put: (path: string, middlewares?: Function[]) => MethodDecorator;
export declare const Patch: (path: string, middlewares?: Function[]) => MethodDecorator;
export declare const Delete: (path: string, middlewares?: Function[]) => MethodDecorator;
export declare const All: (path: string, middlewares?: Function[]) => MethodDecorator;
