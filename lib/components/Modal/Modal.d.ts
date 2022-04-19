import './index.css';
import type { ReactNode } from "react";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children: ReactNode;
}
export declare const Modal: ({ className, children, isOpen, onClose }: ModalProps) => JSX.Element;
export {};
//# sourceMappingURL=Modal.d.ts.map