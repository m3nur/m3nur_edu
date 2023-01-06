import React from "react";
import { SubTitle, Tag, Tags, Title } from "../Modal/Modal.styled";

const Product = (props) => {
  const product = props.props.isOpened.product;

  return (
    <>
      <Title>{product?.title}</Title>
      <SubTitle>{product?.desc}</SubTitle>
      <Tags>
        {product?.tags?.map((el) => (
          <Tag key={el}>#{el}</Tag>
        ))}
      </Tags>
    </>
  );
};

export default Product;
