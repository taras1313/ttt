"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ellipsis = void 0;
var react_1 = __importDefault(require("react"));
var ellipsis_style_1 = __importDefault(require("./ellipsis.style"));
var Ellipsis = function (_a) {
    var children = _a.children, _b = _a.maxWidth, maxWidth = _b === void 0 ? 'inherit' : _b, _c = _a.color, color = _c === void 0 ? '' : _c;
    var classes = (0, ellipsis_style_1.default)({ maxWidth: maxWidth, color: color });
    return react_1.default.createElement("div", { className: classes.root }, children);
};
exports.Ellipsis = Ellipsis;
exports.default = exports.Ellipsis;
//# sourceMappingURL=index.js.map