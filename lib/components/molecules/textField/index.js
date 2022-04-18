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
exports.TextField = void 0;
var react_1 = __importStar(require("react"));
var lodash_uniqueid_1 = __importDefault(require("lodash.uniqueid"));
var atoms_1 = require("../../atoms");
var status_1 = require("../../../constant/status");
var id = (0, lodash_uniqueid_1.default)('ftc_');
var TextField = function (_a) {
    var label = _a.label, onValueChange = _a.onValueChange, _b = _a.value, value = _b === void 0 ? '' : _b, placeholder = _a.placeholder, _c = _a.invalid, invalid = _c === void 0 ? false : _c, _d = _a.caution, caution = _d === void 0 ? false : _d, _e = _a.valid, valid = _e === void 0 ? false : _e, _f = _a.hideLabel, hideLabel = _f === void 0 ? false : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.required, required = _h === void 0 ? false : _h, _j = _a.inputRef, inputRef = _j === void 0 ? function () { } : _j, _k = _a.errorMessage, errorMessage = _k === void 0 ? '' : _k;
    var _l = (0, react_1.useState)(false), hasFocus = _l[0], setHasFocus = _l[1];
    var handleFocus = function () { return setHasFocus(true); };
    var handleBlur = function () { return setHasFocus(false); };
    var handleChange = function (e) { return onValueChange(e); };
    var status;
    if (invalid) {
        status = status_1.STATUS_INVALID;
    }
    else if (caution) {
        status = status_1.STATUS_CAUTION;
    }
    else if (valid) {
        status = status_1.STATUS_VALID;
    }
    else {
        status = null;
    }
    var labelProps = {
        forId: id,
        text: label,
        required: required,
        inputHasValue: !!value,
        hasFocus: hasFocus,
        status: status,
        hideLabel: hideLabel,
    };
    var inputProps = {
        placeholder: placeholder,
        id: id,
        handleFocus: handleFocus,
        handleBlur: handleBlur,
        handleChange: handleChange,
        value: value,
        inputRef: inputRef,
        status: status,
        disabled: disabled,
        required: required,
        errorMessage: errorMessage,
    };
    return (react_1.default.createElement(atoms_1.Label, __assign({}, labelProps),
        react_1.default.createElement(atoms_1.TextInput, __assign({ type: "text" }, inputProps))));
};
exports.TextField = TextField;
exports.default = exports.TextField;
//# sourceMappingURL=index.js.map