import * as express from 'express';
import { Controller, Get, Post, Res, Body, Query } from "../decorators";
import { StatusService } from '../services';
import { specialLoggerMiddleware } from '../filters';

@Controller('/')
export class StatusController {
  constructor(protected statusService: StatusService) {}

  @Get('/')
  public redirectRootToStatus(@Res() res: express.Response) {
    res.redirect('/status');
  }

  @Get('/status')
  public status(@Query() query: object) {
    const statusInfo = this.statusService.getStatusInfo(); 
    return {
      ...statusInfo,
      query
    }
  }

  @Get("/special", [specialLoggerMiddleware])
  public specialStaus(@Query() query: object) {
    return this.status(query);
  }

  @Post('/echo')
  public echo(@Body() body: object) {
    return body;
  }
}
