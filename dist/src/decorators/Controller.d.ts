export interface ControllerRouteMetadata {
    basePath: string;
    middlewares: Function[];
}
export declare function Controller(basePath: string, middlewares?: Function[]): ClassDecorator;
