import { FC, ReactNode } from 'react';
interface Props {
    children: ReactNode;
    successSnackbar?: (x: string, y?: string, z?: void) => void;
    errorSnackbar?: (x: string, y: string) => void;
    config?: {
        backgroundColor: string;
        color: string;
        top: boolean;
        bottomLeft: boolean;
    };
}
export declare const withSnackbarsContext: (Component: any) => (props: any) => JSX.Element;
export declare const Snackbars: FC<Props>;
export default Snackbars;
//# sourceMappingURL=index.d.ts.map