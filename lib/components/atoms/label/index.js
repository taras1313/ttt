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
exports.Label = void 0;
var react_1 = __importDefault(require("react"));
var label_style_1 = __importDefault(require("./label.style"));
var Label = function (_a) {
    var text = _a.text, forId = _a.forId, children = _a.children, _b = _a.required, required = _b === void 0 ? false : _b, hideLabel = _a.hideLabel;
    var classes = (0, label_style_1.default)();
    var rootProps = {
        className: classes.root,
        'data-input-is-required': required,
    };
    return (react_1.default.createElement("label", __assign({}, rootProps, { htmlFor: forId }),
        !hideLabel && (react_1.default.createElement("div", { className: classes.label },
            react_1.default.createElement("span", null, text))),
        children));
};
exports.Label = Label;
exports.default = exports.Label;
//# sourceMappingURL=index.js.map