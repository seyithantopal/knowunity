import React, { FC, useState, useEffect, useRef, SyntheticEvent } from 'react';

// Styles
import { Wrapper, SubmitButton, CloseButton, Input, XButton, ModalTitle } from './styles';

type Props = {
  onClose: () => void;
  onSave: (title: string) => void;
};

const Modal: FC<Props> = ({ onClose, onSave }) => {
  const modalElement = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<string>('');

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target === modalElement.current) {
        onClose();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSave(list);
    onClose();
  };

  return (
    <Wrapper ref={modalElement}>
      <div className='modal__content'>
        <div className='modal__header'>
          <ModalTitle>Add a List</ModalTitle>
          <XButton onClick={onClose}>&times;</XButton>
        </div>
        <div className='modal__body'>
          <form id='form' onSubmit={handleSubmit}>
            <Input value={list} onChange={(e) => setList(e.target.value)} />
          </form>
        </div>
        <div className='modal__footer'>
          <CloseButton onClick={onClose}>Close</CloseButton>
          <SubmitButton>Add</SubmitButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;