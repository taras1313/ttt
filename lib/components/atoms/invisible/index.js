"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invisible = void 0;
var react_1 = __importDefault(require("react"));
var invisible_style_1 = __importDefault(require("./invisible.style"));
var Invisible = function (_a) {
    var children = _a.children, _b = _a.visible, visible = _b === void 0 ? false : _b;
    var classes = (0, invisible_style_1.default)();
    if (visible)
        return children;
    return (react_1.default.createElement("div", { className: classes.root, "data-testid": "invisible-wrapper" }, children));
};
exports.Invisible = Invisible;
exports.default = exports.Invisible;
//# sourceMappingURL=index.js.map