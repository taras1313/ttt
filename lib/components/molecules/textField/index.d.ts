import { FC, LegacyRef } from 'react';
export interface Props {
    label: string;
    onValueChange: (e: any) => void;
    value?: string;
    placeholder?: string;
    invalid?: boolean;
    caution?: boolean;
    valid?: boolean;
    hideLabel?: boolean;
    disabled?: boolean;
    required?: boolean;
    inputRef?: LegacyRef<HTMLInputElement> | undefined;
    errorMessage?: string;
}
export declare const TextField: FC<Props>;
export default TextField;
//# sourceMappingURL=index.d.ts.map