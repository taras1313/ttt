"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutomatedModalState = void 0;
var react_1 = __importDefault(require("react"));
var useAutomatedModalState = function (numberOfActionsToTriggerModal) {
    var _a = react_1.default.useState(false), userFacedModal = _a[0], setUserFacedModal = _a[1];
    var _b = react_1.default.useState(0), changeDataTimes = _b[0], setChangeDataTimes = _b[1];
    var _c = react_1.default.useState(false), isModalOpen = _c[0], setIsModalOpen = _c[1];
    react_1.default.useEffect(function () {
        if (!userFacedModal && changeDataTimes === numberOfActionsToTriggerModal) {
            setUserFacedModal(true);
            setIsModalOpen(true);
        }
    }, [changeDataTimes, userFacedModal, numberOfActionsToTriggerModal]);
    var triggerActionCounter = function (actionFunction) {
        return function () {
            var actionFunctionArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                actionFunctionArgs[_i] = arguments[_i];
            }
            actionFunction.apply(void 0, actionFunctionArgs);
            setChangeDataTimes(function (prevChangeDataTimes) { return prevChangeDataTimes + 1; });
        };
    };
    var onModalClose = function () { return setIsModalOpen(false); };
    return {
        isModalOpen: isModalOpen,
        onModalClose: onModalClose,
        triggerActionCounter: triggerActionCounter,
    };
};
exports.useAutomatedModalState = useAutomatedModalState;
//# sourceMappingURL=useAutomatedModalState.js.map