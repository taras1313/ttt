"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("button", { style: { color: 'red' } }, children));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map