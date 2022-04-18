"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INLINE_STYLES = exports.BLOCK_TYPES = exports.isValidURL = exports.STYLE = exports.styleCode = exports.isActive = exports.hasLink = exports.hasBlockType = exports.hasInlineStyle = exports.findLinkEntities = exports.getBlockStyle = exports.getHTMLString = void 0;
var react_1 = __importDefault(require("react"));
var draft_js_1 = require("draft-js");
var draft_js_export_html_1 = require("draft-js-export-html");
/**
 * Allows us to get html to display the editor output
 * We use stateToHTML, instead of draftToHtml so we keep
 * the attribute target and open links in a new tab.
 * We'll also keep our <br> tags.
 */
var getHTMLString = function (editorState) {
    var contentState = editorState.getCurrentContent();
    var options = {
        entityStyleFn: function (entity) {
            var data = entity.getData();
            var config;
            if (entity.get('type') === 'LINK')
                config = {
                    element: 'a',
                    attributes: {
                        href: data.url,
                        target: data.target,
                    },
                };
            return config;
        },
    };
    return (0, draft_js_export_html_1.stateToHTML)(contentState, options);
};
exports.getHTMLString = getHTMLString;
/**
 * Renaming classes so we can apply our own styling
 * This is passed inside the prop blockStyleFn
 * source: https://draftjs.org/docs/advanced-topics-block-styling
 */
var getBlockStyle = function (block) {
    switch (block.getType()) {
        case 'header-one': // looking for an element with the type of
            return "h1"; // name a style class for this element
        case 'header-two':
            return "h2";
        case 'unordered-list-item':
            return "ul";
        case 'ordered-list-item':
            return "ol";
        default:
            return '';
    }
};
exports.getBlockStyle = getBlockStyle;
/**
 * This Function is used in connection with the decorator
 * passed to the new editorState object (./richEditor).
 * This enables us to use our own Link component (./controlPanel/link)
 */
var findLinkEntities = function (contentBlock, callback) {
    contentBlock.findEntityRanges(function (character) {
        var entityKey = character.getEntity();
        return entityKey !== null && draft_js_1.Entity.get(entityKey).getType() === 'LINK';
    }, callback);
};
exports.findLinkEntities = findLinkEntities;
/**
 * This allows us to know which inline style is active
 * to toggle the corresponding button (e.g bold).
 */
var hasInlineStyle = function (editorState, style) {
    // currentStyle is a map of currently applied style to selected text
    var currentStyle = editorState.getCurrentInlineStyle();
    // check if current style is among the style map.
    return currentStyle.has(style);
};
exports.hasInlineStyle = hasInlineStyle;
/**
 * This allows us to know which blocktype is active
 * to toggle the corresponding button (e.g h1).
 */
var hasBlockType = function (editorState, type) {
    var selection = editorState.getSelection();
    return (editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType() === type);
};
exports.hasBlockType = hasBlockType;
/**
 * This allows us to know if the block selection has a link
 */
var hasLink = function (editorState) {
    return draft_js_1.RichUtils.currentBlockContainsLink(editorState);
};
exports.hasLink = hasLink;
var isActive = function (editorState, style) {
    // currentStyle is a map of currently applied style to selected text
    var currentStyle = editorState.getCurrentInlineStyle();
    // check if current style is among the style map.
    return currentStyle.has(style);
};
exports.isActive = isActive;
// Custom overrides for "code" style.
exports.styleCode = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};
/**
 * An array to map the style when applying onClick on a controlPanel button
 * The LINK button is handled separately
 */
exports.STYLE = [
    'header-one',
    'ordered-list-item',
    'unordered-list-item',
    'ITALIC',
    'BOLD',
    'atomic',
];
var isValidURL = function (str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(str);
};
exports.isValidURL = isValidURL;
exports.BLOCK_TYPES = [
    { label: 'H1', style: 'header-one', icon: react_1.default.createElement("span", null, "H1") },
    { label: 'H2', style: 'header-two', icon: react_1.default.createElement("span", null, "H2") },
    { label: 'UL', style: 'unordered-list-item', icon: react_1.default.createElement("span", null, "UL") },
    { label: 'OL', style: 'ordered-list-item', icon: react_1.default.createElement("span", null, "OL") },
    { label: 'MD', style: 'atomic', icon: react_1.default.createElement("span", null, "MD") },
];
exports.INLINE_STYLES = [
    { label: 'B', style: 'BOLD', icon: react_1.default.createElement("span", null, "B") },
    { label: 'I', style: 'ITALIC', icon: react_1.default.createElement("span", null, "I") },
    { label: 'U', style: 'UNDERLINE', icon: react_1.default.createElement("span", null, "U") },
];
//# sourceMappingURL=editor.js.map