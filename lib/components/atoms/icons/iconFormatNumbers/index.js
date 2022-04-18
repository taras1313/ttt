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
exports.IconFormatNumbers = void 0;
var React = __importStar(require("react"));
var iconFormatNumbers_style_1 = __importDefault(require("./iconFormatNumbers.style"));
var IconFormatNumbers = function (_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b;
    var classes = (0, iconFormatNumbers_style_1.default)();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", viewBox: "0 0 32 32", "aria-hidden": "true", className: classes.root, style: { width: "".concat(size, "px"), height: "".concat(size, "px") } },
        React.createElement("path", { d: "M6 21h2v.5H7v1h1v.5H6v1h3v-4H6v1zm1-9h1V8H6v1h1v3zm-1 3h1.8L6 17.1v.9h3v-1H7.2L9 14.9V14H6v1zm5-6v2h14V9H11zm0 14h14v-2H11v2zm0-6h14v-2H11v2z" })));
};
exports.IconFormatNumbers = IconFormatNumbers;
exports.default = exports.IconFormatNumbers;
//# sourceMappingURL=index.js.map