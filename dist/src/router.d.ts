import * as express from 'express';
import { RequestMethod } from './decorators/Route';
export declare type Ctor<T = any> = new (...args: any[]) => T;
export interface RouteData {
    method: RequestMethod;
    fnName: string;
    path: string;
    middlewares: Function[];
}
export declare function registerRoutes(app: express.Application, controllers: Ctor[]): void;
