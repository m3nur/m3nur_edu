import React from "react";
import {
  ModalBody,
  ModalCenter,
  ModalClose,
  ModalWrapper,
} from "./Modal.styled";
import { IoCloseOutline } from "react-icons/io5";
import CreateProduct from "../CreateProduct/CreateProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import Product from "../Product/Product";

const Modal = (props) => {
  return (
    <ModalWrapper className={"modalWrapper " + props.isOpened}>
      {props.isOpened && props.whoIam === "display" && (
        <ModalCenter>
          <ModalBody>
            <ModalClose onClick={props.onModalClose}>
              <IoCloseOutline />
            </ModalClose>
            <hr
              style={{
                height: "1px",
                backgroundColor: "#6969d7",
                border: "none",
              }}
            />
            <Product />
          </ModalBody>
        </ModalCenter>
      )}
      {props.isOpened && props.whoIam === "update" && (
        <ModalCenter>
          <ModalBody>
            <ModalClose onClick={props.onModalClose}>
              <IoCloseOutline />
            </ModalClose>
            <hr
              style={{
                height: "1px",
                backgroundColor: "#6969d7",
                border: "none",
              }}
            />
            <UpdateProduct />
          </ModalBody>
        </ModalCenter>
      )}
      {props.isOpened && props.whoIam === "add" && (
        <ModalCenter>
          <ModalBody>
            <ModalClose onClick={props.onModalClose}>
              <IoCloseOutline />
            </ModalClose>
            <hr
              style={{
                height: "1px",
                backgroundColor: "#6969d7",
                border: "none",
              }}
            />
            <CreateProduct />
          </ModalBody>
        </ModalCenter>
      )}
    </ModalWrapper>
  );
};

export default Modal;
