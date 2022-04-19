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
exports.MoreToolsModal = void 0;
var react_1 = __importDefault(require("react"));
var Modal_1 = require("../Modal");
var HSForm_1 = require("../HSForm");
var MoreToolsModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, hsFormClassName = _a.hsFormClassName, modalClassName = _a.modalClassName, _b = _a.submitButtonText, submitButtonText = _b === void 0 ? 'Get More Tools' : _b, _c = _a.formHeadingText, formHeadingText = _c === void 0 ? 'Fill out the form below to get more information on this and other free tools' : _c, conversionPage = _a.conversionPage, region = _a.region, portalId = _a.portalId, formId = _a.formId, sfdcCampaignId = _a.sfdcCampaignId;
    var _d = react_1.default.useState(false), isSubmitted = _d[0], setIsSubmitted = _d[1];
    var hsProps = {
        region: region,
        portalId: portalId,
        formId: formId,
        sfdcCampaignId: sfdcCampaignId,
        onFormReady: function () {
            // this hack is needed to update value properly because this method is called is updating the value after running it, we need to pop it out from callstack and run afterwards
            setTimeout(function () {
                document.querySelector('input[type="submit"].hs-button').value = submitButtonText;
            }, 50);
        },
        onFormSubmit: function () {
            var conversionPageInput = document.querySelector('input[name="conversion_page"]');
            if (!conversionPageInput.value) {
                conversionPageInput.value = conversionPage;
                conversionPageInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
        },
        onFormSubmitted: function () {
            setIsSubmitted(true);
        },
    };
    return (react_1.default.createElement(Modal_1.Modal, { onClose: onClose, isOpen: isOpen, className: modalClassName },
        react_1.default.createElement(HSForm_1.HSForm, __assign({}, hsProps, { className: hsFormClassName, title: isSubmitted ? '' : formHeadingText }))));
};
exports.MoreToolsModal = MoreToolsModal;
//# sourceMappingURL=MoreToolsModal.js.map