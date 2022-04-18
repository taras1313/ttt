"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dompurify_1 = __importDefault(require("dompurify"));
exports.default = (function (htmlData, sanitizerConfig) {
    var cleanHTML = dompurify_1.default.sanitize(htmlData.toString(), sanitizerConfig);
    return { __html: cleanHTML };
});
//# sourceMappingURL=displayHTML.js.map