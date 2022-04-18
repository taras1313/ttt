import { FC, MouseEventHandler } from 'react';
import { EditorState } from 'draft-js';
interface Props {
    editorState: EditorState;
    onToggleBlockType?: (((x: unknown) => void) & MouseEventHandler<HTMLButtonElement>) | undefined;
    onToggleInlineType?: ((x: unknown) => void) & MouseEventHandler<HTMLButtonElement>;
    promptForLink?: (x: any) => void;
    removeLink?: () => void;
    addImage?: () => void;
    disabled?: boolean;
    isLinkButtonActive?: boolean;
}
export declare const Toolbar: FC<Props>;
export default Toolbar;
//# sourceMappingURL=index.d.ts.map