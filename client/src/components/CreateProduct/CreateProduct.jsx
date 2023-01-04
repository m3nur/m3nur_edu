import React from "react";
import {
  Button,
  Input,
  Label,
  Textarea,
  Title,
  Update,
} from "../Modal/Modal.styled";

const CreateProduct = () => {
  return (
    <>
      <Title style={{ color: "#6969d7" }}>Create Product</Title>
      <Update>
        <Label>Product Title</Label>
        <Input type="text" placeholder="Example.example" />
        <Label>Product Link</Label>
        <Input type="text" placeholder="https://www.example.example" />
        <Label>Product Description</Label>
        <Textarea type="text" placeholder="Description about product" />
        <Label>Product Tags</Label>
        <Input type="text" placeholder="Product Tags" />
        <Button>Create</Button>
      </Update>
    </>
  );
};

export default CreateProduct;
