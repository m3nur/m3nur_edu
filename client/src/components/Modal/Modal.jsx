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
import Share from "../Share/Share";
import Message from "../Message/Message";
import { useLocation } from "react-router-dom";

const Modal = (props) => {
  const ID = props?.isOpened.product;
  const location = useLocation();
  const admin = location.pathname === "/admin";
  return (
    <ModalWrapper
      className={"modalWrapper " + props.isOpened.display + " admin" + admin}
    >
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
      {props.isOpened.display && props.whoIam === "share" && (
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
            <Share props={ID} />
          </ModalBody>
        </ModalCenter>
      )}
      {props.isOpened.display && props.whoIam === "message" && (
        <ModalCenter>
          <ModalBody className="message">
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
            <Message />
          </ModalBody>
        </ModalCenter>
      )}
    </ModalWrapper>
  );
};

export default Modal;
