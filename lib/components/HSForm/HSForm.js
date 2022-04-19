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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSForm = void 0;
var react_1 = __importDefault(require("react"));
var react_use_hubspot_form_1 = require("@aaronhayes/react-use-hubspot-form");
require("./index.css");
var patchJQuery = function () {
    window.jQuery =
        window.jQuery ||
            function (nodeOrSelector) {
                if (typeof nodeOrSelector === 'string') {
                    return document.querySelector(nodeOrSelector);
                }
                return nodeOrSelector;
            };
};
patchJQuery();
var RawHSForm = function (_a) {
    var title = _a.title, className = _a.className, hsProps = __rest(_a, ["title", "className"]);
    (0, react_use_hubspot_form_1.useHubspotForm)(__assign({ target: '#hubspotForm' }, hsProps));
    return (react_1.default.createElement("div", { className: "form-wrapper ".concat(className) },
        !!title && (react_1.default.createElement("div", { className: "form-heading" }, title)),
        react_1.default.createElement("div", { id: "hubspotForm" })));
};
var HSForm = function (props) { return (react_1.default.createElement(react_use_hubspot_form_1.HubspotProvider, null,
    react_1.default.createElement(RawHSForm, __assign({}, props)))); };
exports.HSForm = HSForm;
//# sourceMappingURL=HSForm.js.map