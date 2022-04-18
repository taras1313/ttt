import { FC, LegacyRef } from 'react';
interface Props {
    id?: string;
    value: string;
    type: 'text' | 'password' | 'search';
    placeholder?: string;
    handleFocus?: (e: any) => void;
    handleBlur?: (e: any) => void;
    handleChange?: (e: any) => void;
    inputRef?: LegacyRef<HTMLInputElement> | undefined;
    status?: 'invalid' | 'caution' | 'valid';
    disabled?: boolean;
    required?: boolean;
    errorMessage?: string;
}
export declare const TextInput: FC<Props>;
export default TextInput;
//# sourceMappingURL=index.d.ts.map