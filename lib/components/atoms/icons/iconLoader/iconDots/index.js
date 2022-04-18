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
exports.IconDots = void 0;
var React = __importStar(require("react"));
var iconDots_style_1 = __importDefault(require("./iconDots.style"));
// svg source: https://icons8.com/preloaders/en/search/dots
var IconDots = function (_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b, _c = _a.speed, speed = _c === void 0 ? '0.5' : _c, _d = _a.repeatCount, repeatCount = _d === void 0 ? 'indefinite' : _d;
    var classes = (0, iconDots_style_1.default)();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", viewBox: "0 0 128 35", "aria-hidden": "true", className: classes.root, style: { width: "".concat(size, "px"), height: "".concat(size, "px") } },
        React.createElement("g", null,
            React.createElement("circle", { fillOpacity: "1", cx: "17.5", cy: "17.5", r: "17.5" }),
            React.createElement("animate", { attributeName: "opacity", begin: "0s", dur: "".concat(speed, "s"), repeatCount: "".concat(repeatCount), keyTimes: "0;0.167;0.5;0.668;1", values: "0.3;1;1;0.3;0.3" })),
        React.createElement("g", null,
            React.createElement("circle", { fillOpacity: "1", cx: "110.5", cy: "17.5", r: "17.5" }),
            React.createElement("animate", { attributeName: "opacity", begin: "0s", dur: "".concat(speed, "s"), repeatCount: "".concat(repeatCount), keyTimes: "0;0.334;0.5;0.835;1", values: "0.3;0.3;1;1;0.3" })),
        React.createElement("g", null,
            React.createElement("circle", { fillOpacity: "1", cx: "64", cy: "17.5", r: "17.5" }),
            React.createElement("animate", { attributeName: "opacity", begin: "0s", dur: "".concat(speed, "s"), repeatCount: "".concat(repeatCount), keyTimes: "0;0.167;0.334;0.668;0.835;1", values: "0.3;0.3;1;1;0.3;0.3" }))));
};
exports.IconDots = IconDots;
exports.default = exports.IconDots;
//# sourceMappingURL=index.js.map