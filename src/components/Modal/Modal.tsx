import React from 'react';
// @ts-ignore
import CloseIcon from './Close.svg';
import './index.css';
import type {ReactNode} from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}

export const Modal = ({className, children, isOpen, onClose}: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`modal-overlay ${className}`}
      style={{
        display: isOpen ? 'flex' : 'none',
      }}
    >
      <CloseIcon width={50} height={50} className="close-icon"/>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};