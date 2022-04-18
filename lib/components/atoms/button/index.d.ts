import React, { FC } from 'react';
import './index.css';
declare type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    primary?: boolean;
    secondary?: boolean;
    warning?: boolean;
    disabled?: boolean;
    type?: string;
    color?: string;
    round?: boolean;
    inverted?: boolean;
    vector?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Button: FC<Props>;
export default Button;
//# sourceMappingURL=index.d.ts.map