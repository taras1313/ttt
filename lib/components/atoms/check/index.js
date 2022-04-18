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
exports.Check = void 0;
var react_1 = __importStar(require("react"));
var lodash_uniqueid_1 = __importDefault(require("lodash.uniqueid"));
var invisible_1 = __importDefault(require("../invisible"));
var check_style_1 = __importDefault(require("./check.style"));
var Check = function (_a) {
    var label = _a.label, _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.handleFocus, handleFocus = _c === void 0 ? function () { } : _c, _d = _a.handleBlur, handleBlur = _d === void 0 ? function () { } : _d, _e = _a.handleChange, handleChange = _e === void 0 ? function () { } : _e, _f = _a.inputRef, inputRef = _f === void 0 ? function () { } : _f, _g = _a.invert, invert = _g === void 0 ? false : _g, _h = _a.disabled, disabled = _h === void 0 ? false : _h, _j = _a.showLabel, showLabel = _j === void 0 ? false : _j, _k = _a.isDark, isDark = _k === void 0 ? false : _k, _l = _a.largeLabel, largeLabel = _l === void 0 ? false : _l, _m = _a.bold, bold = _m === void 0 ? false : _m, _o = _a.darkLabel, darkLabel = _o === void 0 ? false : _o, _p = _a.indeterminate, indeterminate = _p === void 0 ? false : _p;
    var classes = (0, check_style_1.default)();
    var _q = (0, react_1.useState)(false), hasFocus = _q[0], setHasFocus = _q[1];
    var id = (0, lodash_uniqueid_1.default)('rh_');
    var timer;
    var localHandleFocus = function (e) {
        window.clearTimeout(timer);
        setHasFocus(true);
        handleFocus(e);
    };
    var localHandleBlur = function (e) {
        window.clearTimeout(timer);
        timer = window.setTimeout(function () {
            setHasFocus(false);
            handleBlur(e);
        }, 50);
    };
    var localHandleChange = function (e) {
        if (disabled)
            return;
        handleChange(e);
    };
    var rootProps = {
        className: classes.root,
        'data-is-disabled': disabled,
        title: label,
    };
    var labelProps = {
        className: classes.label,
        'data-is-inverted': invert,
        'data-is-largelabel': largeLabel,
        'data-is-bold': bold,
        'data-is-darklabel': darkLabel,
        'data-testid': 'label',
    };
    var checkboxProps = {
        className: classes.checkbox,
        'data-is-checked': checked,
        'data-has-focus': hasFocus,
        'data-is-dark': isDark,
        'data-is-indeterminate': indeterminate,
    };
    var inputProps = {
        className: classes.input,
        id: id,
        checked: checked,
        type: 'checkbox',
        disabled: disabled,
        onFocus: localHandleFocus,
        onBlur: localHandleBlur,
        onChange: localHandleChange,
        ref: inputRef,
        'data-testid': 'input',
    };
    return (react_1.default.createElement("label", __assign({}, rootProps, { htmlFor: id }),
        react_1.default.createElement(invisible_1.default, { visible: showLabel },
            react_1.default.createElement("div", __assign({}, labelProps), label)),
        react_1.default.createElement("div", __assign({}, checkboxProps),
            react_1.default.createElement("input", __assign({}, inputProps)))));
};
exports.Check = Check;
exports.default = exports.Check;
//# sourceMappingURL=index.js.map