import React from 'react';
declare type Props = {
    icon?: React.ReactNode;
    onClick?: (x: any) => void;
    promptForLink?: (x: any) => void;
    removeLink?: () => void;
    active?: boolean;
    buttonType: string;
    disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const EditorButton: React.FC<Props>;
export default EditorButton;
//# sourceMappingURL=index.d.ts.map