import Logging, { ILoggingOptions } from '../library/Logging';
/**
 * A hook for a simple logging library.
 * @param options  Options to pass our logger.
 * @returns object of type Logging
 */
export declare const useLogging: (options?: ILoggingOptions | undefined) => [Logging];
