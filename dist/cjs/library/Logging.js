"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logging = exports.ERROR = exports.WARN = exports.INFO = exports.DEBUG = void 0;
exports.DEBUG = 'DEBUG';
exports.INFO = 'INFO';
exports.WARN = 'WARN';
exports.ERROR = 'ERROR';
class Logging {
    constructor(options) {
        this.styles = {
            DEBUG: 'display: inline-block; background-color: Blue; color: white; font-weight: bold; padding: 3px 7px 3px 7px; border-radius: 3px;',
            INFO: 'display: inline-block; background-color: Green; color: black; font-weight: bold; padding: 3px 7px 3px 7px; border-radius: 3px;',
            WARN: 'display: inline-block; background-color: gold; color: black; font-weight: bold; padding: 3px 7px 3px 7px; border-radius: 3px;',
            ERROR: 'display: inline-block; background-color: Red; color: black; font-weight: bold; padding: 3px 7px 3px 7px; border-radius: 3px;'
        };
        this.log = (key, obj, ...objs) => {
            if (this.environment === 'production')
                return;
            if (this.applyStyles) {
                console.log(`[${new Date().toISOString()}] [${this.namespace}] %c[${key}] ${obj}`, this.styles[key], ...objs);
            }
            else {
                console.log(`[${new Date().toISOString()}] [${this.namespace}] [${key}] ${obj}`, ...objs);
            }
        };
        this.debug = (obj, ...objs) => this.log(exports.DEBUG, obj, ...objs);
        this.info = (obj, ...objs) => this.log(exports.INFO, obj, ...objs);
        this.warn = (obj, ...objs) => this.log(exports.WARN, obj, ...objs);
        this.error = (obj, ...objs) => this.log(exports.ERROR, obj, ...objs);
        this.namespace = (options === null || options === void 0 ? void 0 : options.namespace) || 'Default';
        this.applyStyles = (options === null || options === void 0 ? void 0 : options.applyStyles) || false;
        this.environment = process.env.NODE_ENV || 'development';
        if ((options === null || options === void 0 ? void 0 : options.styles) && this.applyStyles) {
            for (let key in options.styles) {
                if (this.styles[key])
                    this.styles[key] = options.styles[key];
            }
        }
    }
}
exports.Logging = Logging;
exports.default = Logging;
//# sourceMappingURL=Logging.js.map