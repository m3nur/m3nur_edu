import React from 'react';
import {
  Button,
  Input,
  Label,
  ModalBody,
  ModalCenter,
  ModalClose,
  ModalWrapper,
  SubTitle,
  Tag,
  Tags,
  Textarea,
  Title,
  Update,
} from './Modal.styled';
import { IoCloseOutline } from 'react-icons/io5';

const Modal = (props) => {
  return (
    <ModalWrapper className={'modalWrapper ' + props.isOpened}>
      {props.isOpened && props.whoIam === 'display' && (
        <ModalCenter>
          <ModalBody>
            <ModalClose onClick={props.onModalClose}>
              <IoCloseOutline />
            </ModalClose>
            <hr
              style={{
                height: '1px',
                backgroundColor: '#6969d7',
                border: 'none',
              }}
            />
            <Title>Animista.net</Title>
            <SubTitle>
              Animista is a place where you can play with a collection of
              pre-made css animations.
            </SubTitle>
            <Tags>
              <Tag>#CSS</Tag>
              <Tag>#Animation</Tag>
            </Tags>
          </ModalBody>
        </ModalCenter>
      )}
      {props.isOpened && props.whoIam === 'update' && (
        <ModalCenter>
          <ModalBody>
            <ModalClose onClick={props.onModalClose}>
              <IoCloseOutline />
            </ModalClose>
            <hr
              style={{
                height: '1px',
                backgroundColor: '#6969d7',
                border: 'none',
              }}
            />
            <Title>Animista.net</Title>
            <SubTitle>
              Animista is a place where you can play with a collection of
              pre-made css animations.
            </SubTitle>
            <Tags>
              <Tag>#CSS</Tag>
              <Tag>#Animation</Tag>
            </Tags>
            <hr
              style={{
                height: '1px',
                backgroundColor: '#6969d7',
                border: 'none',
              }}
            />
            <Title style={{ color: '#6969d7' }}>Update</Title>
            <Update>
              <Label>Product Title</Label>
              <Input type="text" placeholder="Example.example" />
              <Label>Product Link</Label>
              <Input type="text" placeholder="https://www.example.example" />
              <Label>Product SubTitle</Label>
              <Textarea type="text" placeholder="Information about product" />
              <Label>Product Tags</Label>
              <Input type="text" placeholder="Product Tags" />
              <Button>Update</Button>
            </Update>
          </ModalBody>
        </ModalCenter>
      )}
      {props.isOpened && props.whoIam === 'add' && (
        <ModalCenter>
          <ModalBody>
            <ModalClose onClick={props.onModalClose}>
              <IoCloseOutline />
            </ModalClose>
            <hr
              style={{
                height: '1px',
                backgroundColor: '#6969d7',
                border: 'none',
              }}
            />
            <Title style={{ color: '#6969d7' }}>Create Product</Title>
            <Update>
              <Label>Product Title</Label>
              <Input type="text" placeholder="Example.example" />
              <Label>Product Link</Label>
              <Input type="text" placeholder="https://www.example.example" />
              <Label>Product SubTitle</Label>
              <Textarea type="text" placeholder="Information about product" />
              <Label>Product Tags</Label>
              <Input type="text" placeholder="Product Tags" />
              <Button>Create</Button>
            </Update>
          </ModalBody>
        </ModalCenter>
      )}
    </ModalWrapper>
  );
};

export default Modal;
