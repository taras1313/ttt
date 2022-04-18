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
exports.EditorButton = void 0;
/* eslint-disable array-callback-return */
var react_1 = __importStar(require("react"));
var editor_1 = require("../../../../../utils/editor");
var editor_2 = require("../../../../../constant/editor");
var editorButton_style_1 = __importDefault(require("./editorButton.style"));
var EditorButton = function (_a) {
    var _b = _a.icon, icon = _b === void 0 ? null : _b, _c = _a.onClick, onClick = _c === void 0 ? function () { } : _c, _d = _a.promptForLink, promptForLink = _d === void 0 ? function () { } : _d, _e = _a.removeLink, removeLink = _e === void 0 ? function () { } : _e, _f = _a.active, active = _f === void 0 ? false : _f, buttonType = _a.buttonType, _g = _a.disabled, disabled = _g === void 0 ? false : _g;
    var classes = (0, editorButton_style_1.default)();
    /**
     * the local isActive variable monitors block and inline styles active state
     * For link button, the active state is monitored within the richEditor component.
     */
    var _h = (0, react_1.useState)(active), isActive = _h[0], setActive = _h[1];
    var handleClick = function (e) {
        e.preventDefault(); // Allows to lock the key command
        if (!disabled && onClick) {
            setActive(true);
            onClick(buttonType);
        }
        editor_1.STYLE.map(function (type) { return type === buttonType && setActive(false); });
    };
    var toggleLink = function (e) {
        e.preventDefault(); // Allows to lock the key command
        if (!disabled && !active)
            return promptForLink(e);
        return removeLink();
    };
    var rootProps = {
        // onMouseDown has to be used instead of onClick to be able to lock the key command
        className: classes.root,
        disabled: disabled,
        'data-is-active': isActive || active,
    };
    var label;
    switch (buttonType) {
        case editor_2.HEADER_ONE:
            label = 'H1';
            break;
        case editor_2.BOLD:
            label = 'B';
            break;
        case editor_2.LINK:
            label = 'L';
            break;
        case editor_2.UNORDERED_LIST_ITEM:
            label = 'UL';
            break;
        default:
            label = buttonType[0].toUpperCase();
    }
    return (react_1.default.createElement("button", __assign({ type: "button", onMouseDown: buttonType === editor_2.LINK ? toggleLink : handleClick }, rootProps),
        react_1.default.createElement("span", { className: classes.text }, icon || label)));
};
exports.EditorButton = EditorButton;
exports.default = exports.EditorButton;
//# sourceMappingURL=index.js.map