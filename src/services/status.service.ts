import * as Package from '../../package.json';
import { Injectable, ProviderScope } from '../decorators';

export interface StatusServiceOptions {
  startupTime?: number;
}

@Injectable(ProviderScope.SINGLETON)
export class StatusService {
  protected static instance?: StatusService;

  protected readonly startupTime: number;

  protected constructor(public options: StatusServiceOptions) {
    this.startupTime = options.startupTime || Date.now(); 
  }

  public static initialize(options: StatusServiceOptions = {}): StatusService {
    return this.instance = new StatusService(options);
  }

  public static getInstance(): StatusService {
    if(!this.instance) {
      throw new Error("Status service is not initialized yet, you have to initialize it before trying to getInstance");
    }

    return this.instance
  }

  public getStatusInfo() {
    return {
      name: Package.name,
      version: Package.version,
      uptime: Date.now() - this.startupTime,
    };
  }
}