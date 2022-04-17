export declare const DEBUG = "DEBUG";
export declare const INFO = "INFO";
export declare const WARN = "WARN";
export declare const ERROR = "ERROR";
export interface ILoggingOptions {
    namespace?: string;
    debug?: boolean;
    applyStyles?: boolean;
    styles?: {
        [key: string]: string;
    };
}
export declare class Logging {
    private namespace;
    private applyStyles;
    private environment;
    private styles;
    constructor(options?: ILoggingOptions);
    log: (key: string, obj: any, ...objs: any[]) => void;
    debug: (obj: any, ...objs: any[]) => void;
    info: (obj: any, ...objs: any[]) => void;
    warn: (obj: any, ...objs: any[]) => void;
    error: (obj: any, ...objs: any[]) => void;
}
export default Logging;
