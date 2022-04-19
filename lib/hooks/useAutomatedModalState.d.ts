export declare const useAutomatedModalState: (numberOfActionsToTriggerModal: number) => {
    isModalOpen: boolean;
    onModalClose: () => void;
    triggerActionCounter: <CallbackArgs, CallbackReturn>(actionFunction: (...args: CallbackArgs[]) => CallbackReturn) => (...actionFunctionArgs: CallbackArgs[]) => void;
};
//# sourceMappingURL=useAutomatedModalState.d.ts.map