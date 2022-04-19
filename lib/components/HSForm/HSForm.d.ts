/// <reference types="react" />
import { UseHubSpotFormProps } from '@aaronhayes/react-use-hubspot-form';
import './index.css';
interface HSFormProps extends Omit<UseHubSpotFormProps, 'target'> {
    title?: string;
    className?: string;
}
declare global {
    interface Window {
        jQuery: (nodeOrSelector: string) => HTMLElement | string;
    }
}
export declare const HSForm: (props: HSFormProps) => JSX.Element;
export {};
//# sourceMappingURL=HSForm.d.ts.map