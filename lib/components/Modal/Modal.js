"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var react_1 = __importDefault(require("react"));
// @ts-ignore
var Close_svg_1 = __importDefault(require("./Close.svg"));
require("./index.css");
var Modal = function (_a) {
    var className = _a.className, children = _a.children, isOpen = _a.isOpen, onClose = _a.onClose;
    return (react_1.default.createElement("div", { onClick: onClose, className: "modal-overlay ".concat(className), style: {
            display: isOpen ? 'flex' : 'none',
        } },
        react_1.default.createElement(Close_svg_1.default, { width: 50, height: 50, className: "close-icon" }),
        react_1.default.createElement("div", { className: "modal-container", onClick: function (e) { return e.stopPropagation(); } }, children)));
};
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map