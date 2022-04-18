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
exports.SmartLabel = void 0;
var react_1 = __importDefault(require("react"));
var invisible_1 = __importDefault(require("../invisible"));
var smartLabel_style_1 = __importDefault(require("./smartLabel.style"));
var status_1 = require("../../../constant/status");
var SmartLabel = function (_a) {
    var children = _a.children, forId = _a.forId, text = _a.text, inputHasFocus = _a.inputHasFocus, inputHasValue = _a.inputHasValue, _b = _a.status, status = _b === void 0 ? null : _b, _c = _a.maxWidth, maxWidth = _c === void 0 ? false : _c, _d = _a.required, required = _d === void 0 ? false : _d, _e = _a.hideLabel, hideLabel = _e === void 0 ? false : _e;
    var classes = (0, smartLabel_style_1.default)();
    var rootProps = {
        className: classes.root,
        'data-input-has-focus': inputHasFocus,
        'data-input-has-value': inputHasValue,
        'data-input-is-required': required,
        'data-input-is-invalid': status === status_1.STATUS_INVALID,
        'data-input-is-caution': status === status_1.STATUS_CAUTION,
        'data-input-is-valid': status === status_1.STATUS_VALID,
        'data-input-is-modified': status === status_1.STATUS_MODIFIED,
        'data-is-max-width': maxWidth,
        'data-testid': 'smartlabel',
    };
    return (react_1.default.createElement("label", __assign({}, rootProps, { htmlFor: forId }),
        react_1.default.createElement(invisible_1.default, { visible: !hideLabel },
            react_1.default.createElement("div", { className: classes.label },
                react_1.default.createElement("span", null, text))),
        children));
};
exports.SmartLabel = SmartLabel;
exports.default = exports.SmartLabel;
//# sourceMappingURL=index.js.map