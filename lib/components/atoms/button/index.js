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
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
require("./index.css");
var button_style_1 = __importDefault(require("./button.style"));
var Button = function (_a) {
    var children = _a.children, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b, _c = _a.primary, primary = _c === void 0 ? false : _c, _d = _a.secondary, secondary = _d === void 0 ? false : _d, _e = _a.warning, warning = _e === void 0 ? false : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.type, type = _g === void 0 ? 'button' : _g, _h = _a.color, color = _h === void 0 ? '' : _h, _j = _a.round, round = _j === void 0 ? false : _j, _k = _a.inverted, inverted = _k === void 0 ? false : _k, _l = _a.vector, vector = _l === void 0 ? null : _l;
    var classes = (0, button_style_1.default)({ color: color });
    var handleClick = function () {
        if (!disabled && onClick)
            onClick();
    };
    var rootProps = {
        className: classes.root,
        onClick: handleClick,
        type: type,
        disabled: disabled,
        'data-is-primary': primary,
        'data-is-secondary': secondary,
        'data-is-warning': warning,
        'data-is-round': round,
        'data-is-inverted': !primary && !secondary && !warning && inverted,
    };
    return (react_1.default.createElement("button", __assign({}, rootProps),
        vector && react_1.default.createElement("span", { className: classes.vector }, vector),
        react_1.default.createElement("span", { className: classes.text }, children)));
};
exports.Button = Button;
exports.default = exports.Button;
//# sourceMappingURL=index.js.map