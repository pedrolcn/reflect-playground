import * as express from 'express';

export function specialLoggerMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log("this is a very special request indeed");
  next();
}
