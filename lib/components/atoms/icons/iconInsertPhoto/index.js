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
exports.IconInsertPhoto = void 0;
var React = __importStar(require("react"));
var iconInsertPhoto_style_1 = __importDefault(require("./iconInsertPhoto.style"));
var IconInsertPhoto = function (_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b;
    var classes = (0, iconInsertPhoto_style_1.default)();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", viewBox: "0 0 32 32", "aria-hidden": "true", className: classes.root, style: { width: "".concat(size, "px"), height: "".concat(size, "px") } },
        React.createElement("path", { d: "M2.55 29.78l-.35.72h27.578l-.323-.707-8.667-19-.44-.964-.464.951L13.8 23.23l-3.865-6.778-.468-.821-.415.85-6.5 13.3z" })));
};
exports.IconInsertPhoto = IconInsertPhoto;
exports.default = exports.IconInsertPhoto;
//# sourceMappingURL=index.js.map