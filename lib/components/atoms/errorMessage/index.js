"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
var react_1 = __importDefault(require("react"));
var errorMessage_style_1 = __importDefault(require("./errorMessage.style"));
var ErrorMessage = function (_a) {
    var text = _a.text;
    var classes = (0, errorMessage_style_1.default)();
    return react_1.default.createElement("div", { className: classes.content }, text);
};
exports.ErrorMessage = ErrorMessage;
exports.default = exports.ErrorMessage;
//# sourceMappingURL=index.js.map