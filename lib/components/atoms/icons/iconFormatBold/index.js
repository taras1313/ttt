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
exports.IconFormatBold = void 0;
var React = __importStar(require("react"));
var iconFormatBold_style_1 = __importDefault(require("./iconFormatBold.style"));
var IconFormatBold = function (_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b;
    var classes = (0, iconFormatBold_style_1.default)();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", viewBox: "0 0 32 32", "aria-hidden": "true", className: classes.root, style: { width: "".concat(size, "px"), height: "".concat(size, "px") } },
        React.createElement("path", { d: "M19.6 14.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H11v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM14 10.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H14v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" })));
};
exports.IconFormatBold = IconFormatBold;
exports.default = exports.IconFormatBold;
//# sourceMappingURL=index.js.map