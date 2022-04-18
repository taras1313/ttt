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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snackbars = exports.withSnackbarsContext = void 0;
var react_1 = __importStar(require("react"));
var types_1 = require("../../../constant/types");
var snackbars_style_1 = __importDefault(require("./snackbars.style"));
var SnackbarsContext = (0, react_1.createContext)({});
var withSnackbarsContext = function (Component) {
    // eslint-disable-next-line func-names
    return function (props) {
        return (react_1.default.createElement(SnackbarsContext.Consumer, null, function (_a) {
            var successSnackbar = _a.successSnackbar, errorSnackbar = _a.errorSnackbar;
            return (react_1.default.createElement(Component, __assign({ successSnackbar: successSnackbar, errorSnackbar: errorSnackbar }, props)));
        }));
    };
};
exports.withSnackbarsContext = withSnackbarsContext;
var Snackbars = function (_a) {
    var children = _a.children, _b = _a.config, config = _b === void 0 ? {} : _b;
    var classes = (0, snackbars_style_1.default)();
    var _c = (0, react_1.useState)([]), messages = _c[0], setMessages = _c[1];
    var _d = (0, react_1.useState)({
        message: '',
        type: '',
        onClick: function () { },
        label: '',
        config: {
            backgroundColor: config.backgroundColor,
            color: config.color,
            top: config.top,
            bottomLeft: config.bottomLeft,
        },
    }), lastMessage = _d[0], setLastMessage = _d[1];
    var _e = (0, react_1.useState)(true), isReady = _e[0], setIsReady = _e[1];
    var timer;
    (0, react_1.useEffect)(function () { return function () {
        clearTimeout(timer);
    }; }, [timer]);
    var onAddAlert = function (msg) {
        if (isReady && !messages.length) {
            setLastMessage(msg);
            setIsReady(false);
            timer = setTimeout(onReady, msg.onClick && msg.label ? types_1.ACTION_TIMEOUT : types_1.DEFAULT_TIMEOUT);
        }
        else {
            setMessages(__spreadArray(__spreadArray([], messages, true), [msg], false));
        }
    };
    var onAddSuccessAlert = function (message, label, onClick, config) {
        if (config)
            return onAddAlert({ message: message, label: label, onClick: onClick, config: config });
        return onAddAlert({ message: message, label: label, onClick: onClick });
    };
    var onAddErrorAlert = function (message, config) {
        if (config)
            return onAddAlert({ message: message, type: types_1.TYPE_ERROR, config: config });
        return onAddAlert({ message: message, type: types_1.TYPE_ERROR });
    };
    var onReady = function () { return setIsReady(true); };
    var handleClick = function () {
        var onClick = lastMessage.onClick;
        onClick();
        setIsReady(true);
        clearTimeout(timer);
    };
    var rootDynamicStyle = {
        backgroundColor: lastMessage.config.backgroundColor,
    };
    var contentDynamicStyle = {
        color: lastMessage.config.color,
    };
    var renderMessage = function () {
        var rootProps = {
            style: lastMessage.config && rootDynamicStyle,
            className: classes.root,
            'data-is-ready': isReady,
            'data-has-error': lastMessage.type === types_1.TYPE_ERROR,
            'data-is-top': !lastMessage.config.bottomLeft && lastMessage.config.top,
            'data-is-bottomleft': !lastMessage.config.top && lastMessage.config.bottomLeft,
        };
        return (react_1.default.createElement("div", __assign({}, rootProps),
            react_1.default.createElement("div", { style: lastMessage.config && contentDynamicStyle }, lastMessage.message),
            lastMessage.label && (react_1.default.createElement("button", { className: classes.undoClickBtn, onClick: handleClick }, lastMessage.label))));
    };
    return (react_1.default.createElement(SnackbarsContext.Provider, { value: {
            successSnackbar: onAddSuccessAlert,
            errorSnackbar: onAddErrorAlert,
        } },
        children,
        renderMessage()));
};
exports.Snackbars = Snackbars;
exports.default = exports.Snackbars;
//# sourceMappingURL=index.js.map