import * as express from 'express';
import { StatusService } from '../services';
export declare class StatusController {
    protected statusService: StatusService;
    constructor(statusService: StatusService);
    redirectRootToStatus(req: express.Request, res: express.Response): void;
    status(req: express.Request, res: express.Response): void;
    echo(req: express.Request, res: express.Response): void;
}
