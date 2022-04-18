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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolbar = void 0;
var react_1 = __importDefault(require("react"));
var icons_1 = require("../../../atoms/icons");
var editor_1 = require("../../../../utils/editor");
var constant_1 = require("../../../../constant");
var editorButton_1 = __importDefault(require("./editorButton"));
var toolbar_style_1 = __importDefault(require("./toolbar.style"));
var Toolbar = function (_a) {
    var editorState = _a.editorState, _b = _a.onToggleBlockType, onToggleBlockType = _b === void 0 ? function () { } : _b, _c = _a.onToggleInlineType, onToggleInlineType = _c === void 0 ? function () { } : _c, _d = _a.promptForLink, promptForLink = _d === void 0 ? function () { } : _d, _e = _a.removeLink, removeLink = _e === void 0 ? function () { } : _e, _f = _a.addImage, addImage = _f === void 0 ? function () { } : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.isLinkButtonActive, isLinkButtonActive = _h === void 0 ? false : _h;
    var classes = (0, toolbar_style_1.default)();
    var rootProps = {
        className: classes.root,
        'data-is-disabled': disabled,
    };
    return (react_1.default.createElement("div", __assign({}, rootProps),
        react_1.default.createElement(editorButton_1.default, { onClick: onToggleBlockType, active: (0, editor_1.hasBlockType)(editorState, constant_1.HEADER_ONE), buttonType: constant_1.HEADER_ONE, disabled: disabled }),
        react_1.default.createElement(editorButton_1.default, { icon: react_1.default.createElement(icons_1.IconFormatBold, null), onClick: onToggleInlineType, active: (0, editor_1.hasInlineStyle)(editorState, constant_1.BOLD), buttonType: constant_1.BOLD, disabled: disabled }),
        react_1.default.createElement(editorButton_1.default, { icon: react_1.default.createElement(icons_1.IconFormatItalic, null), onClick: onToggleInlineType, active: (0, editor_1.hasInlineStyle)(editorState, constant_1.ITALIC), buttonType: constant_1.ITALIC, disabled: disabled }),
        react_1.default.createElement(editorButton_1.default, { icon: react_1.default.createElement(icons_1.IconInsertLink, null), promptForLink: promptForLink, removeLink: removeLink, active: (0, editor_1.hasLink)(editorState) || isLinkButtonActive, buttonType: constant_1.LINK, disabled: disabled }),
        react_1.default.createElement(editorButton_1.default, { icon: react_1.default.createElement(icons_1.IconFormatNumbers, null), onClick: onToggleBlockType, active: (0, editor_1.hasBlockType)(editorState, constant_1.ORDERED_LIST_ITEM), buttonType: constant_1.ORDERED_LIST_ITEM, disabled: disabled }),
        react_1.default.createElement(editorButton_1.default, { icon: react_1.default.createElement(icons_1.IconBullets, null), onClick: onToggleBlockType, active: (0, editor_1.hasBlockType)(editorState, constant_1.UNORDERED_LIST_ITEM), buttonType: constant_1.UNORDERED_LIST_ITEM, disabled: disabled }),
        react_1.default.createElement(editorButton_1.default, { icon: react_1.default.createElement(icons_1.IconInsertPhoto, null), onClick: addImage, active: (0, editor_1.hasBlockType)(editorState, 'atomic'), buttonType: "atomic", disabled: disabled })));
};
exports.Toolbar = Toolbar;
exports.default = exports.Toolbar;
//# sourceMappingURL=index.js.map