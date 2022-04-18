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
exports.IconSpinner = void 0;
var React = __importStar(require("react"));
var iconSpinner_style_1 = __importDefault(require("./iconSpinner.style"));
var IconSpinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b, _c = _a.speed, speed = _c === void 0 ? '0.5' : _c, _d = _a.repeatCount, repeatCount = _d === void 0 ? 'indefinite' : _d;
    var classes = (0, iconSpinner_style_1.default)();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", viewBox: "0 0 50 50", "aria-hidden": "true", className: classes.root, style: { width: "".concat(size, "px"), height: "".concat(size, "px") }, x: "0px", y: "0px" },
        React.createElement("path", { d: "M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" },
            React.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 25 25", to: "360 25 25", dur: "".concat(speed, "s"), repeatCount: "".concat(repeatCount) }))));
};
exports.IconSpinner = IconSpinner;
exports.default = exports.IconSpinner;
//# sourceMappingURL=index.js.map