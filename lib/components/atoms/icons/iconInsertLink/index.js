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
exports.IconInsertLink = void 0;
var React = __importStar(require("react"));
var iconInsertLink_style_1 = __importDefault(require("./iconInsertLink.style"));
var IconInsertLink = function (_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b;
    var classes = (0, iconInsertLink_style_1.default)();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", viewBox: "0 0 32 32", "aria-hidden": "true", className: classes.root, style: { width: "".concat(size, "px"), height: "".concat(size, "px") } },
        React.createElement("path", { d: "M7.09 16.0417C7.09 14.3174 8.619 12.9158 10.5 12.9158H14.9V11H10.5C7.464 11 5 13.2587 5 16.0417C5 18.8247 7.464 21.0833 10.5 21.0833H14.9V19.1675H10.5C8.619 19.1675 7.09 17.7659 7.09 16.0417ZM11.6 17.05H20.4V15.0333H11.6V17.05ZM21.5 11H17.1V12.9158H21.5C23.381 12.9158 24.91 14.3174 24.91 16.0417C24.91 17.7659 23.381 19.1675 21.5 19.1675H17.1V21.0833H21.5C24.536 21.0833 27 18.8247 27 16.0417C27 13.2587 24.536 11 21.5 11Z" })));
};
exports.IconInsertLink = IconInsertLink;
exports.default = exports.IconInsertLink;
//# sourceMappingURL=index.js.map