import { FC, LegacyRef } from 'react';
interface Props {
    label: string;
    checked?: boolean;
    handleFocus?: (e: any) => void;
    handleBlur?: (e: any) => void;
    handleChange?: (e: any) => void;
    inputRef?: LegacyRef<HTMLInputElement> | undefined;
    invert?: boolean;
    disabled?: boolean;
    showLabel?: boolean;
    isDark?: boolean;
    largeLabel?: boolean;
    bold?: boolean;
    darkLabel?: boolean;
    indeterminate?: boolean;
}
export declare const Check: FC<Props>;
export default Check;
//# sourceMappingURL=index.d.ts.map