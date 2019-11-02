import * as express from 'express';
import { CONTROLLER_ROUTE_METADATA_STORAGE, METHOD_ROUTE_METADATA_STORAGE, CONSTRUCTOR_PARAMTYPES_KEY, ROUTE_HANDLER_PARAMTYPES_KEY } from './constants';
import { ControllerRouteMetadata } from './decorators/Controller';
import { MethodRouteMetadata, RequestMethod } from './decorators/Route';
import { IProvider } from './decorators';
import { isFunction } from 'util';
import { NextFunction } from 'connect';
import { RouteHandlerParamTypesMetadata, RequestParam } from './decorators/RequestParams';

export type Ctor<T = any> = new(...args: any[]) => T;


export interface RouteData {
  method: RequestMethod;
  fnName: string;
  path: string;
  middlewares: Function[]
} 

function joinPaths(basePath: string, path: string) {
  function forceLeadingSlash(path: string) {
    return path.startsWith('/') ? path : `/${path}`; 
  }

  function stripTrailingSlash(path: string) {
    return path.endsWith('/') ? path.slice(0, path.length - 1) : path;
  }

  const sanitizePathComponent = (path: string) => stripTrailingSlash(forceLeadingSlash(path));
  const joinedPath = `${sanitizePathComponent(basePath)}${sanitizePathComponent(path)}`;

  return joinedPath.length === 0 ? '/' : joinedPath
}

function buildRouteData(controller: Ctor): RouteData[] {
  const { basePath, middlewares: baseMiddlewares }: ControllerRouteMetadata = Reflect.getMetadata(CONTROLLER_ROUTE_METADATA_STORAGE, controller);
  const routesMetadata: MethodRouteMetadata = Reflect.getMetadata(METHOD_ROUTE_METADATA_STORAGE, controller);

  return Object.entries(routesMetadata).map(([fnName, { method, path, middlewares}]) => ({
    method,
    fnName,
    path: joinPaths(basePath, path),
    middlewares: baseMiddlewares.concat(middlewares)
  }));
}

function matchRequestTypeToMethod(app: express.Application, method: RequestMethod): express.IRouterMatcher<express.Application> {
  switch(method) {
    case 'get': return app.get.bind(app);
    case 'put': return app.put.bind(app);
    case 'patch': return app.patch.bind(app);
    case 'post': return app.post.bind(app);
    case 'delete': return app.delete.bind(app);
    case 'all': return app.use.bind(app);
  }
}

function buildHandlerParameters(controller: Ctor, fnName: string, req: express.Request, res: express.Response) {
  const handlerParamMetadata: RouteHandlerParamTypesMetadata[] = Reflect.getMetadata(ROUTE_HANDLER_PARAMTYPES_KEY, controller, fnName);
  return handlerParamMetadata
    .sort((a, b) => a.index === b.index ? 0 : a.index > b.index ? 1 : -1)
    .map(metadata => matchParamTypeToValue(metadata.type, req, res, metadata.data))
}

function matchParamTypeToValue(type: RequestParam, req: express.Request, res: express.Response, data?: string): object | string {  
  switch (type) {
    case "body": return data ? req.body[data] : req.body
    case "headers": return data ? req.headers[data] as object : req.headers;
    case "params": return data ? req.params[data] : req.params;
    case "query": return data ? req.query[data] : req.query;
    case "request": return req;
    case "response": return res;
  }
}

function createRouteHandlerWrapper(instance: Object, fnName: string) {
  return async (req: express.Request, res: express.Response, next: NextFunction) => {
    const params = buildHandlerParameters((instance.constructor as Ctor), fnName, req, res);
    
    try {
      const controllerHandlerResponse = await (instance[fnName] as Function).bind(instance)(...params);

      res.status(200)
        .set("Content-Type", "application/json")
        .send(controllerHandlerResponse);
    } catch(err) {
      next(err)
    }
  }
}

export function registerRoutes(app: express.Application, controllers: Ctor[]) {
  controllers.forEach(controller => {
    const controllerRouteData = buildRouteData(controller);
    const controllerParamTypes: IProvider[] = Reflect.getMetadata(CONSTRUCTOR_PARAMTYPES_KEY, controller);
    const controllerArgs = controllerParamTypes.map(dep => {
      if (!(dep && dep.getInstance && isFunction(dep.getInstance))) {
        throw new Error(`${dep.constructor.name} of ${controller.name} does not implement a static method getInstance`)
      }

      return dep.getInstance()
    });

    const instance = new controller(...controllerArgs);

    controllerRouteData.forEach(({ method, path, fnName, middlewares }) => {
      const registrationMethod = matchRequestTypeToMethod(app, method);

      const middlewareChain: express.RequestHandler[] = [
        ...(middlewares as express.RequestHandler[]),
        createRouteHandlerWrapper(instance, fnName)
      ];

      console.log(`Registering route ${method.toUpperCase()} ${path}`);
      registrationMethod(path, middlewareChain);
    });
  });
}
