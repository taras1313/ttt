"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogging = void 0;
const react_1 = require("react");
const Logging_1 = __importDefault(require("../library/Logging"));
/**
 * A hook for a simple logging library.
 * @param options  Options to pass our logger.
 * @returns object of type Logging
 */
const useLogging = (options) => {
    const { current: logging } = (0, react_1.useRef)(new Logging_1.default(options));
    return [logging];
};
exports.useLogging = useLogging;
//# sourceMappingURL=useLogging.js.map