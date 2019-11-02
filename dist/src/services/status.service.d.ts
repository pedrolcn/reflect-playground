export interface StatusServiceOptions {
    startupTime?: number;
}
export declare class StatusService {
    options: StatusServiceOptions;
    protected static instance?: StatusService;
    protected readonly startupTime: number;
    protected constructor(options: StatusServiceOptions);
    static initialize(options: StatusServiceOptions): StatusService;
    static getInstance(): StatusService;
    getStatusInfo(): {
        name: string;
        version: string;
        uptime: number;
    };
}
