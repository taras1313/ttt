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
exports.IconSpinnerFill = void 0;
var React = __importStar(require("react"));
var iconSpinnerFill_style_1 = __importDefault(require("./iconSpinnerFill.style"));
var IconSpinnerFill = function (_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b, _c = _a.speed, speed = _c === void 0 ? '0.5' : _c, _d = _a.repeatCount, repeatCount = _d === void 0 ? 'indefinite' : _d;
    var classes = (0, iconSpinnerFill_style_1.default)();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", viewBox: "0 0 40 40", "aria-hidden": "true", className: classes.root, style: { width: "".concat(size, "px"), height: "".concat(size, "px") }, x: "0px", y: "0px" },
        React.createElement("path", { opacity: "0.2", d: "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n   s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n   c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" }),
        React.createElement("path", { d: "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n   C22.32,8.481,24.301,9.057,26.013,10.047z" },
            React.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 20 20", to: "360 20 20", dur: "".concat(speed, "s"), repeatCount: "".concat(repeatCount) }))));
};
exports.IconSpinnerFill = IconSpinnerFill;
exports.default = exports.IconSpinnerFill;
//# sourceMappingURL=index.js.map