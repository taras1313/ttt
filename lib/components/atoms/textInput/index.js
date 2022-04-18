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
exports.TextInput = void 0;
var react_1 = __importStar(require("react"));
var errorMessage_1 = __importDefault(require("../errorMessage"));
var status_1 = require("../../../constant/status");
var textInput_style_1 = __importDefault(require("./textInput.style"));
var TextInput = function (_a) {
    var _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.placeholder, placeholder = _c === void 0 ? '' : _c, value = _a.value, type = _a.type, _d = _a.handleFocus, handleFocus = _d === void 0 ? function () { } : _d, _e = _a.handleBlur, handleBlur = _e === void 0 ? function () { } : _e, _f = _a.handleChange, handleChange = _f === void 0 ? function () { } : _f, _g = _a.inputRef, inputRef = _g === void 0 ? function () { } : _g, _h = _a.status, status = _h === void 0 ? null : _h, _j = _a.disabled, disabled = _j === void 0 ? false : _j, _k = _a.required, required = _k === void 0 ? false : _k, _l = _a.errorMessage, errorMessage = _l === void 0 ? '' : _l;
    var classes = (0, textInput_style_1.default)();
    var _m = (0, react_1.useState)(false), hasFocus = _m[0], setHasFocus = _m[1];
    var _o = (0, react_1.useState)(0), focusCounter = _o[0], setFocusCounter = _o[1];
    var timer;
    /**
     * the regex checks for a line with only white spaces.
     */
    var invalid = (value === '' || value.match(/^[ \t\r\n\s]*$/g)) &&
        focusCounter > 0 &&
        required;
    var focusHandler = function (e) {
        window.clearTimeout(timer);
        setHasFocus(true);
        handleFocus === null || handleFocus === void 0 ? void 0 : handleFocus(e);
    };
    var blurHandler = function (e) {
        window.clearTimeout(timer);
        timer = window.setTimeout(function () {
            setHasFocus(false);
            if (required)
                setFocusCounter(focusCounter + 1);
            handleBlur(e);
        }, 50);
    };
    var rootProps = {
        className: classes.root,
        'data-has-focus': hasFocus,
        'data-has-value': !!value.length,
        'data-is-invalid': status === status_1.STATUS_INVALID || (invalid === null ? false : invalid),
        'data-is-caution': status === status_1.STATUS_CAUTION,
        'data-is-valid': status === status_1.STATUS_VALID,
        'data-is-disabled': disabled,
        'data-is-required': required,
    };
    var inputProps = {
        onFocus: focusHandler,
        onBlur: blurHandler,
        onChange: handleChange,
        ref: inputRef,
        disabled: disabled,
    };
    return (react_1.default.createElement("div", __assign({}, rootProps),
        react_1.default.createElement("input", __assign({ id: id, className: classes.input, type: type, placeholder: placeholder, value: value }, inputProps)),
        invalid && (react_1.default.createElement(errorMessage_1.default, { "data-testid": "error-message", text: errorMessage }))));
};
exports.TextInput = TextInput;
exports.default = exports.TextInput;
//# sourceMappingURL=index.js.map