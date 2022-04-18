import React from 'react';
import { EditorState } from 'draft-js';
declare type STYLE = {
    label: string;
    style: string;
    icon?: React.ReactNode;
};
/**
 * Allows us to get html to display the editor output
 * We use stateToHTML, instead of draftToHtml so we keep
 * the attribute target and open links in a new tab.
 * We'll also keep our <br> tags.
 */
export declare const getHTMLString: (editorState: EditorState) => string;
/**
 * Renaming classes so we can apply our own styling
 * This is passed inside the prop blockStyleFn
 * source: https://draftjs.org/docs/advanced-topics-block-styling
 */
export declare const getBlockStyle: (block: any) => "" | "h1" | "h2" | "ol" | "ul";
/**
 * This Function is used in connection with the decorator
 * passed to the new editorState object (./richEditor).
 * This enables us to use our own Link component (./controlPanel/link)
 */
export declare const findLinkEntities: (contentBlock: any, callback: any) => void;
/**
 * This allows us to know which inline style is active
 * to toggle the corresponding button (e.g bold).
 */
export declare const hasInlineStyle: (editorState: any, style: any) => any;
/**
 * This allows us to know which blocktype is active
 * to toggle the corresponding button (e.g h1).
 */
export declare const hasBlockType: (editorState: any, type: any) => boolean;
/**
 * This allows us to know if the block selection has a link
 */
export declare const hasLink: (editorState: any) => boolean;
export declare const isActive: (editorState: any, style: any) => any;
export declare const styleCode: {
    CODE: {
        backgroundColor: string;
        fontFamily: string;
        fontSize: number;
        padding: number;
    };
};
/**
 * An array to map the style when applying onClick on a controlPanel button
 * The LINK button is handled separately
 */
export declare const STYLE: string[];
export declare const isValidURL: (str: any) => boolean;
export declare const BLOCK_TYPES: STYLE[];
export declare const INLINE_STYLES: STYLE[];
export {};
//# sourceMappingURL=editor.d.ts.map