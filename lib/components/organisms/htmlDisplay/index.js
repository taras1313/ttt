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
exports.HtmlDisplay = void 0;
var React = __importStar(require("react"));
var displayHTML_1 = __importDefault(require("../../../utils/displayHTML"));
var htmlDisplay_style_1 = __importDefault(require("./htmlDisplay.style"));
var HtmlDisplay = function (_a) {
    var htmlData = _a.htmlData;
    var classes = (0, htmlDisplay_style_1.default)();
    return (React.createElement("div", { className: classes.readOnly, 
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: (0, displayHTML_1.default)(htmlData, null) }));
};
exports.HtmlDisplay = HtmlDisplay;
exports.default = exports.HtmlDisplay;
//# sourceMappingURL=index.js.map