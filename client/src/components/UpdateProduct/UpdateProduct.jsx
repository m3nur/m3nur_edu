import React from "react";
import {
  Button,
  Input,
  Label,
  SubTitle,
  Tag,
  Tags,
  Textarea,
  Title,
  Update,
} from "../Modal/Modal.styled";

const UpdateProduct = () => {
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
      <hr
        style={{
          height: "1px",
          backgroundColor: "#6969d7",
          border: "none",
        }}
      />
      <Title style={{ color: "#6969d7" }}>Update</Title>
      <Update>
        <Label>Product Title</Label>
        <Input type="text" placeholder="Example.example" />
        <Label>Product Link</Label>
        <Input type="text" placeholder="https://www.example.example" />
        <Label>Product Description</Label>
        <Textarea type="text" placeholder="Description about product" />
        <Label>Product Tags</Label>
        <Input type="text" placeholder="Product Tags" />
        <Button>Update</Button>
      </Update>
    </>
  );
};

export default UpdateProduct;
