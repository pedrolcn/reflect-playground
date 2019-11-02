import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { registerRoutes } from './router';
import * as Controllers from './controllers';
import { StatusService } from './services';

const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const loggerMiddleware: express.RequestHandler = function(req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log(`Received ${req.method} request on ${req.path}`);
  next();
}

app.use(loggerMiddleware);


StatusService.initialize()
registerRoutes(app, [Controllers.StatusController]);

export { app };
