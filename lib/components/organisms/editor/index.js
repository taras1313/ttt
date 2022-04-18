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
exports.Editor = void 0;
var react_1 = __importStar(require("react"));
var draft_js_1 = require("draft-js");
var editor_1 = require("../../../utils/editor");
var plugins_1 = require("./toolbar/plugins");
var toolbar_1 = __importDefault(require("./toolbar"));
var editor_style_1 = __importDefault(require("./editor.style"));
/**
 * We need to add a decorator to add our own style to links
 */
var decorator = new draft_js_1.CompositeDecorator([
    {
        strategy: editor_1.findLinkEntities,
        component: plugins_1.Link,
    },
]);
var Editor = function (_a) {
    var _b = _a.placeholder, placeholder = _b === void 0 ? '' : _b, onChange = _a.onChange, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
    // Initiating the EditorState with link decorator
    var _d = (0, react_1.useState)(draft_js_1.EditorState.createEmpty(decorator)), editorState = _d[0], setEditorState = _d[1];
    var classes = (0, editor_style_1.default)();
    // Focus applied to the editor and control panel buttons.
    var _e = (0, react_1.useState)(false), isFocused = _e[0], setFocused = _e[1];
    // Url State
    var _f = (0, react_1.useState)(false), showURLInput = _f[0], setShowURLInput = _f[1];
    var _g = (0, react_1.useState)(''), urlValue = _g[0], setUrlValue = _g[1];
    var _h = (0, react_1.useState)(''), urlType = _h[0], setUrlType = _h[1];
    var _j = (0, react_1.useState)(true), validUrl = _j[0], setValidUrl = _j[1];
    var _k = (0, react_1.useState)(false), isLinkButtonActive = _k[0], setLinkButtonActive = _k[1];
    var editorRef = (0, react_1.useRef)(null);
    var handleFocus = function () {
        var _a;
        (_a = editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setFocused(true);
    };
    var onEditorStateChange = function (editorState) {
        setEditorState(editorState);
        onChange((0, editor_1.getHTMLString)(editorState));
    };
    /**
     * Handling Insert Media
     */
    var confirmMedia = function (e) {
        e.preventDefault();
        var contentState = editorState.getCurrentContent();
        var contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', { src: urlValue });
        var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        var newEditorState = draft_js_1.EditorState.set(editorState, {
            currentContent: contentStateWithEntity,
        });
        setEditorState(draft_js_1.AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
        setUrlValue('');
        setShowURLInput(false);
    };
    var promptForMedia = function (type) {
        setShowURLInput(true);
        setUrlValue('');
        setUrlType(type);
    };
    var addImage = function () { return promptForMedia('image'); };
    var mediaBlockRenderer = function (block) {
        if (block.getType() === 'atomic') {
            return {
                component: Media,
                editable: false,
            };
        }
        return null;
    };
    var Media = function (props) {
        var entity = props.contentState.getEntity(props.block.getEntityAt(0));
        var src = entity.getData().src;
        var type = entity.getType();
        var media;
        if (type === 'image') {
            media = react_1.default.createElement(plugins_1.Image, { src: src });
        }
        return media;
    };
    /**
     * Handling urlInput and link button components
     */
    var onUrlInputChange = function (e) {
        setUrlValue(e.target.value);
        if ((0, editor_1.isValidURL)(e.target.value)) {
            setValidUrl(true);
        }
        else {
            setValidUrl(false);
        }
    };
    var promptForLink = function (e) {
        e.preventDefault();
        var selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            setShowURLInput(true);
            setUrlValue('');
        }
        setLinkButtonActive(true);
    };
    var confirmLink = function (e) {
        if (validUrl && urlType !== 'image') {
            e.preventDefault();
            var contentState_1 = editorState.getCurrentContent();
            var contentStateWithEntity = contentState_1.createEntity('LINK', 'MUTABLE', { target: '_blank', url: urlValue });
            var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
            setEditorState(draft_js_1.RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey));
            setShowURLInput(false);
            setLinkButtonActive(false);
        }
        else if (urlType === 'image') {
            confirmMedia(e);
        }
        else {
            console.error('not a valid url');
        }
    };
    // On return key action
    var onLinkInputKeyDown = function (e) {
        if (e.which === 13) {
            confirmLink(e);
        }
    };
    var removeLink = function () {
        var selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            setEditorState(draft_js_1.RichUtils.toggleLink(editorState, selection, null));
        }
        setLinkButtonActive(false);
    };
    var handleCollapse = function () {
        setShowURLInput(false);
        setLinkButtonActive(false);
    };
    /**
     * e.g: Handles block style such as header, bullet points
     */
    var toggleBlockType = function (blockType) {
        onEditorStateChange(draft_js_1.RichUtils.toggleBlockType(editorState, blockType));
    };
    /**
     * e.g: Handles inline styles such as bold
     */
    var toggleInlineStyle = function (inlineStyle) {
        onEditorStateChange(draft_js_1.RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };
    /**
     * Handles any inline styles **key commands** such as italics, bold, ...
     */
    var handleKeyCommand = function (cmd) {
        var newState = draft_js_1.RichUtils.handleKeyCommand(editorState, cmd);
        if (newState) {
            onEditorStateChange(newState);
            return 'handled';
        }
        return 'not-handled';
    };
    /**
     * If the user changes block type before entering any text (e.g unordered-list),
     * we hide the placeholder.
     */
    var hidePlaceholder = false;
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled')
            hidePlaceholder = true;
    }
    var rootProps = {
        className: classes.root,
        'data-has-focus': isFocused || showURLInput,
        'data-is-disabled': disabled,
        'data-is-placeholder-hidden': hidePlaceholder,
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { "data-testid": "draft", onClick: handleFocus, onBlur: function () {
                setFocused(false);
            } },
            react_1.default.createElement(toolbar_1.default, { editorState: editorState, onToggleBlockType: toggleBlockType, onToggleInlineType: toggleInlineStyle, promptForLink: promptForLink, removeLink: removeLink, addImage: addImage, disabled: disabled, isLinkButtonActive: isLinkButtonActive }),
            react_1.default.createElement("div", __assign({}, rootProps),
                react_1.default.createElement(draft_js_1.Editor, { blockRendererFn: mediaBlockRenderer, blockStyleFn: editor_1.getBlockStyle, editorState: editorState, onChange: onEditorStateChange, placeholder: placeholder, spellCheck: true, readOnly: disabled, handleKeyCommand: handleKeyCommand, 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    ref: editorRef }))),
        showURLInput && (react_1.default.createElement(plugins_1.UrlInput, { onLinkInputKeyDown: onLinkInputKeyDown, urlInputChange: onUrlInputChange, value: urlValue, handleCollapse: handleCollapse, validUrl: validUrl }))));
};
exports.Editor = Editor;
exports.default = exports.Editor;
//# sourceMappingURL=index.js.map