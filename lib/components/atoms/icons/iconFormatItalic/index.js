"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconFormatItalic = void 0;
var React = __importStar(require("react"));
var iconFormatItalic_style_1 = __importDefault(require("./iconFormatItalic.style"));
var IconFormatItalic = function (_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b;
    var classes = (0, iconFormatItalic_style_1.default)();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", viewBox: "0 0 32 32", "aria-hidden": "true", className: classes.root, style: { width: "".concat(size, "px"), height: "".concat(size, "px") } },
        React.createElement("path", { d: "M14 9v3h2.21l-3.42 8H10v3h8v-3h-2.21l3.42-8H22V9h-8z" })));
};
exports.IconFormatItalic = IconFormatItalic;
exports.default = exports.IconFormatItalic;
//# sourceMappingURL=index.js.map