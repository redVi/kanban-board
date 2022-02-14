import { FC } from 'react';
import ReactDOM from 'react-dom';
import { IModalProps } from './Modal.types';
import * as s from './Modal.styles';

export const Modal: FC<IModalProps> = ({ isOpen = false, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <s.Wrapper>
      <s.Button onClick={onClose}>Close</s.Button>
      {children}
    </s.Wrapper>, document.body,
  );
};
