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
exports.Tabs = void 0;
var react_1 = __importStar(require("react"));
// Used to set the first tab width and the tabs left position according to wrapper
var constant_1 = require("../../../constant");
var tab_1 = __importDefault(require("./tab"));
var tabs_style_1 = __importDefault(require("./tabs.style"));
var Tabs = function (_a) {
    var tabs = _a.tabs, _b = _a.centered, centered = _b === void 0 ? false : _b;
    var classes = (0, tabs_style_1.default)();
    // First tab active by default
    var _c = (0, react_1.useState)((tabs && tabs[0].label) || ''), activeTab = _c[0], setActiveTab = _c[1];
    var _d = (0, react_1.useState)({
        left: 0,
        width: 0,
    }), sliderDimensions = _d[0], setSliderDimensions = _d[1];
    // Individual ref to get first width
    var tabRef = (0, react_1.useRef)(null);
    // Wrapper ref to get left position value
    var wrapperRef = (0, react_1.useRef)(null);
    react_1.default.useEffect(function () {
        var _a;
        setSliderDimensions({
            left: 0,
            width: ((_a = tabRef === null || tabRef === void 0 ? void 0 : tabRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth)
                ? tabRef.current.offsetWidth - constant_1.TAB_MARGIN_RIGHT
                : 0,
        });
    }, []);
    var handleClickItem = function (event, label) {
        var _a, _b;
        setActiveTab(label);
        /**
         * We log the left position value of the active tab and
         * the tabs' wrapper's left position.
         * We should set it when onclick is triggered; as the user can resize its window.
         */
        var tabLeftPosition = event.currentTarget.getBoundingClientRect().left;
        var wrapperLeftPosition = (_b = (_a = wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().left) !== null && _b !== void 0 ? _b : 0;
        setSliderDimensions({
            left: tabLeftPosition - wrapperLeftPosition - constant_1.WRAPPER_PADDING_LEFT,
            width: event.currentTarget.getBoundingClientRect().width,
        });
    };
    var contentWrapperProps = {
        className: classes.contentWrapper,
        'data-is-centered': centered,
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ol", { ref: wrapperRef, className: classes.root },
            react_1.default.createElement("div", { className: classes.tabsWrapper }, tabs.map(function (tab, index) {
                var label = tab.label;
                // Need only the first ref to set the initial slider width
                var firstTabRef = index === 0
                    ? {
                        ref: tabRef,
                    }
                    : null;
                return (react_1.default.createElement("div", __assign({ key: label }, firstTabRef),
                    react_1.default.createElement(tab_1.default, { activeTab: activeTab, key: label, label: label, onClick: handleClickItem })));
            })),
            react_1.default.createElement("div", { style: { left: sliderDimensions.left, width: sliderDimensions.width }, className: classes.slider })),
        react_1.default.createElement("div", __assign({}, contentWrapperProps), Array.isArray(tabs) &&
            tabs.map(function (tab) {
                if (tab.label !== activeTab)
                    return undefined;
                return (react_1.default.createElement(react_1.default.Fragment, { key: tab.label }, tab.component));
            }))));
};
exports.Tabs = Tabs;
exports.default = exports.Tabs;
//# sourceMappingURL=index.js.map