import { FC, ReactElement, JSXElementConstructor } from 'react';
import { STATUS_INVALID, STATUS_CAUTION, STATUS_VALID, STATUS_MODIFIED } from '../../../constant/status';
interface Props {
    children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
    forId: string;
    text: string;
    inputHasFocus: boolean;
    inputHasValue: boolean;
    status?: typeof STATUS_INVALID | typeof STATUS_CAUTION | typeof STATUS_VALID | typeof STATUS_MODIFIED;
    maxWidth?: boolean;
    required?: boolean;
    hideLabel?: boolean;
}
export declare const SmartLabel: FC<Props>;
export default SmartLabel;
//# sourceMappingURL=index.d.ts.map