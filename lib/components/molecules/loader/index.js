"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var react_1 = __importDefault(require("react"));
var icons_1 = require("../../atoms/icons");
var loader_style_1 = __importDefault(require("./loader.style"));
var Loader = function (_a) {
    var _b = _a.text, text = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? 32 || undefined : _c, _d = _a.slow, slow = _d === void 0 ? false : _d, _e = _a.moderate, moderate = _e === void 0 ? false : _e, _f = _a.fast, fast = _f === void 0 ? false : _f, _g = _a.repeatCount, repeatCount = _g === void 0 ? 'indefinite' : _g, _h = _a.overlay, overlay = _h === void 0 ? false : _h, _j = _a.spinnerFill, spinnerFill = _j === void 0 ? true : _j, _k = _a.spinner, spinner = _k === void 0 ? false : _k, _l = _a.barCenter, barCenter = _l === void 0 ? false : _l, _m = _a.barTop, barTop = _m === void 0 ? false : _m, _o = _a.dots, dots = _o === void 0 ? false : _o;
    var classes = (0, loader_style_1.default)({ size: size });
    /**
     * Speed
     */
    var tempo = '1.5';
    if (slow && !moderate && !fast)
        tempo = '3';
    if (moderate && !slow && !fast)
        tempo = '1.5';
    if (fast && !moderate && !slow)
        tempo = '0.5';
    var iconProps = {
        text: text,
        size: size < 300 ? size : 300,
        speed: tempo,
        repeatCount: repeatCount,
    };
    /**
     * type
     */
    var Loader;
    if (spinnerFill)
        Loader = react_1.default.createElement(icons_1.IconSpinnerFill, __assign({}, iconProps));
    if (spinner)
        Loader = react_1.default.createElement(icons_1.IconSpinner, __assign({}, iconProps));
    if (barCenter)
        Loader = react_1.default.createElement(icons_1.IconBarCenter, __assign({}, iconProps));
    if (barTop)
        Loader = react_1.default.createElement(icons_1.IconBarTop, __assign({}, iconProps));
    if (dots)
        Loader = react_1.default.createElement(icons_1.IconDots, __assign({}, iconProps));
    var rootProps = {
        className: classes.root,
        'data-is-overlay': overlay,
    };
    return (react_1.default.createElement("div", __assign({}, rootProps),
        Loader && Loader,
        react_1.default.createElement("span", { className: classes.text }, text)));
};
exports.Loader = Loader;
exports.default = exports.Loader;
//# sourceMappingURL=index.js.map