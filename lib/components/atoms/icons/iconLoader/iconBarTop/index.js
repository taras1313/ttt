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
exports.IconBarTop = void 0;
var React = __importStar(require("react"));
var iconBarTop_style_1 = __importDefault(require("./iconBarTop.style"));
var IconBarTop = function (_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b, _c = _a.speed, speed = _c === void 0 ? '0.5' : _c, _d = _a.repeatCount, repeatCount = _d === void 0 ? 'indefinite' : _d;
    var classes = (0, iconBarTop_style_1.default)();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 24 24", style: { width: "".concat(size, "px"), height: "".concat(size, "px") }, "aria-hidden": "true", className: classes.root, fillRule: "evenodd" },
        React.createElement("rect", { x: "0", y: "0", width: "4", height: "7" },
            React.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "scale", values: "1,1; 1,3; 1,1", begin: "0s", dur: "".concat(speed, "s"), repeatCount: "".concat(repeatCount) })),
        React.createElement("rect", { x: "10", y: "0", width: "4", height: "7" },
            React.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "scale", values: "1,1; 1,3; 1,1", begin: "0.2s", dur: "".concat(speed, "s"), repeatCount: "".concat(repeatCount) })),
        React.createElement("rect", { x: "20", y: "0", width: "4", height: "7" },
            React.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "scale", values: "1,1; 1,3; 1,1", begin: "0.4s", dur: "".concat(speed, "s"), repeatCount: "".concat(repeatCount) }))));
};
exports.IconBarTop = IconBarTop;
exports.default = exports.IconBarTop;
//# sourceMappingURL=index.js.map