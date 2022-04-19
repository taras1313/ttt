/// <reference types="react" />
interface MoreToolsModalProps {
    isOpen: boolean;
    onClose: () => void;
}
interface HSFormProps {
    title?: string;
    hsFormClassName?: string;
    modalClassName?: string;
    formHeadingText?: string;
    region: string;
    portalId: string;
    formId: string;
    sfdcCampaignId: string;
    submitButtonText: string;
    conversionPage: string;
}
export declare const MoreToolsModal: ({ isOpen, onClose, hsFormClassName, modalClassName, submitButtonText, formHeadingText, conversionPage, region, portalId, formId, sfdcCampaignId, }: MoreToolsModalProps & HSFormProps) => JSX.Element;
export {};
//# sourceMappingURL=MoreToolsModal.d.ts.map