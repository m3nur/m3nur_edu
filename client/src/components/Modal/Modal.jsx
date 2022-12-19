import React from 'react';
import {
  ModalBody,
  ModalClose,
  ModalWrapper,
  SubTitle,
  Tag,
  Tags,
  Title,
} from './Modal.styled';
import { IoCloseOutline } from 'react-icons/io5';

const Modal = (props) => {
  console.log(props.isOpened);
  return (
    <ModalWrapper className={props.isOpened}>
      <ModalBody>
        <ModalClose onClick={props.onModalClose}>
          <IoCloseOutline />
        </ModalClose>
        <Title>Animista.net</Title>
        <SubTitle>
          Animista is a place where you can play with a collection of pre-made
          css animations.
        </SubTitle>
        <Tags>
          <Tag>#CSS</Tag>
          <Tag>#Animation</Tag>
        </Tags>
      </ModalBody>
    </ModalWrapper>
  );
};

export default Modal;
