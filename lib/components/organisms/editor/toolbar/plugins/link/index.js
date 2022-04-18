"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var react_1 = __importDefault(require("react"));
var draft_js_1 = require("draft-js");
var link_style_1 = __importDefault(require("./link.style"));
var Link = function (_a) {
    var entityKey = _a.entityKey, children = _a.children;
    var classes = (0, link_style_1.default)();
    var url = draft_js_1.Entity.get(entityKey).getData().url;
    return (react_1.default.createElement("a", { className: classes.root, href: url, rel: "noopener noreferrer", target: "_blank", "aria-label": url }, children));
};
exports.Link = Link;
exports.default = exports.Link;
//# sourceMappingURL=index.js.map