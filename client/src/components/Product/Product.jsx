import React from "react";
import { SubTitle, Tag, Tags, Title } from "../Modal/Modal.styled";

const Product = () => {
  return (
    <>
      <Title>Animista.net</Title>
      <SubTitle>
        Animista is a place where you can play with a collection of pre-made css
        animations.
      </SubTitle>
      <Tags>
        <Tag>#CSS</Tag>
        <Tag>#Animation</Tag>
      </Tags>
    </>
  );
};

export default Product;
