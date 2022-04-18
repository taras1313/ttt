"use strict";
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
exports.IconBullets = void 0;
var React = __importStar(require("react"));
var iconBullets_style_1 = __importDefault(require("./iconBullets.style"));
var IconBullets = function (_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b;
    var classes = (0, iconBullets_style_1.default)();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", viewBox: "0 0 32 32", "aria-hidden": "true", className: classes.root, style: { width: "".concat(size, "px"), height: "".concat(size, "px") } },
        React.createElement("path", { d: "M6.784 14.113a1.779 1.779 0 100 3.556 1.779 1.779 0 100-3.556zm0-7.113a1.779 1.779 0 100 3.556 1.779 1.779 0 100-3.556zm0 14.226c-.987 0-1.784.806-1.784 1.778s.809 1.778 1.784 1.778 1.784-.806 1.784-1.778-.797-1.778-1.784-1.778zm3.567 2.964H27v-2.371H10.351v2.37zm0-7.113H27v-2.371H10.351v2.37zm0-9.484v2.37H27v-2.37H10.351z" })));
};
exports.IconBullets = IconBullets;
exports.default = exports.IconBullets;
//# sourceMappingURL=index.js.map