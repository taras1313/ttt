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
exports.UrlInput = void 0;
var react_1 = __importStar(require("react"));
var urlInput_style_1 = __importDefault(require("./urlInput.style"));
var UrlInput = function (_a) {
    var onLinkInputKeyDown = _a.onLinkInputKeyDown, urlInputChange = _a.urlInputChange, handleCollapse = _a.handleCollapse, value = _a.value, validUrl = _a.validUrl;
    var classes = (0, urlInput_style_1.default)();
    var inputWrapperRef = (0, react_1.useRef)(null);
    var handleClick = react_1.default.useCallback(function (e) { var _a; return !((_a = inputWrapperRef === null || inputWrapperRef === void 0 ? void 0 : inputWrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) && handleCollapse(); }, [handleCollapse]);
    react_1.default.useEffect(function () {
        document.addEventListener('mousedown', handleClick);
        return function () {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick]);
    var handleKeyPress = function (event) {
        var hotKeys = {
            27: function () {
                // esc
                handleCollapse();
            },
        };
        if (hotKeys[event.keyCode]) {
            event.preventDefault();
            hotKeys[event.keyCode]();
        }
    };
    var rootProps = {
        className: classes.root,
        // onMouseDown is prefered to onClick for mobile compatibility
        onMouseDown: handleClick,
        onKeyDown: handleKeyPress,
        ref: inputWrapperRef,
    };
    var inputProps = {
        className: classes.input,
        placeholder: 'Enter link URL',
        onChange: urlInputChange,
        type: 'text',
        value: value,
        onKeyDown: onLinkInputKeyDown,
        'data-is-notvalid': !validUrl,
    };
    return (react_1.default.createElement("div", __assign({}, rootProps),
        react_1.default.createElement("input", __assign({}, inputProps))));
};
exports.UrlInput = UrlInput;
exports.default = exports.UrlInput;
//# sourceMappingURL=index.js.map