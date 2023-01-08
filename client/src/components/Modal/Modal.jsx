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
  const ID = props?.isOpened.product;
  return (
    <ModalWrapper className={"modalWrapper " + props.isOpened.display}>
      {props.isOpened.display && props.whoIam === "display" && (
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
            <Product props={ID} />
          </ModalBody>
        </ModalCenter>
      )}
      {props.isOpened.display && props.whoIam === "update" && (
        <ModalCenter>
          <ModalBody className="update">
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
            <UpdateProduct props={ID} />
          </ModalBody>
        </ModalCenter>
      )}
      {props.isOpened.display && props.whoIam === "add" && (
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
