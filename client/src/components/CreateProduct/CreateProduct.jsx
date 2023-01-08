import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  Textarea,
  Title,
  Update,
} from "../Modal/Modal.styled";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createProduct } from "../../redux/apiCalls";
import {
  ErrorTitle,
  Tags,
  TagsInput,
  TagsTitle,
  TagsWrapper,
} from "./CreatedProduct.styled";
import { IoMdRemoveCircle } from "react-icons/io";

const CreateProduct = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);

  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (e) => {
    if (e.target.value.trim() !== "") {
      setTags([...tags, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const onSubmit = (data) => {
    createProduct(dispatch, { ...data, tags: tags });
    reset();
    setTags([]);
  };

  return (
    <>
      <Title style={{ color: "#6969d7" }}>Create a Product</Title>
      <Update onSubmit={handleSubmit(onSubmit)}>
        <Label>Product Title</Label>
        <Input
          type="text"
          placeholder="Example.example"
          {...register("title", {
            required: "Product Title is required",
          })}
        />
        {errors.title && (
          <ErrorTitle role="alert">{errors.title?.message}</ErrorTitle>
        )}
        <Label>Product Link</Label>
        <Input
          type="text"
          placeholder="https://www.example.example"
          {...register("link", {
            required: "Product Link is required",
            pattern: {
              value:
                // eslint-disable-next-line no-useless-escape
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
              message: "Invalid url path",
            },
          })}
        />
        {errors.link && (
          <ErrorTitle role="alert">{errors.link?.message}</ErrorTitle>
        )}
        <Label>Product Description</Label>
        <Textarea
          type="text"
          placeholder="Description about product"
          {...register("desc", {
            required: "Product Description is required",
            minLength: {
              value: 10,
              message: "Please enter a desc with at least 10 characters!",
            },
          })}
        />
        {errors.desc && (
          <ErrorTitle role="alert">{errors.desc?.message}</ErrorTitle>
        )}
        <Label>Product Tags</Label>
        <TagsInput
          {...register("tags", {
            required: {
              // eslint-disable-next-line eqeqeq
              value: tags == "" ? true : false,
              message: "Product Tags is required",
            },
          })}
        >
          <TagsWrapper>
            {tags.map((tag, index) => (
              <Tags key={index}>
                <TagsTitle>{tag}</TagsTitle>
                <IoMdRemoveCircle onClick={() => removeTags(index)} />
              </Tags>
            ))}
          </TagsWrapper>
          <Input
            className="tag"
            type="text"
            placeholder="Press SPACEBAR to add a tag"
            onKeyUp={(e) =>
              e.key === " " || e.code === "Space" ? addTags(e) : null
            }
          />
        </TagsInput>
        {errors.tags && (
          <ErrorTitle role="alert">{errors.tags?.message}</ErrorTitle>
        )}
        <Button type="submit">Create</Button>
      </Update>
    </>
  );
};

export default CreateProduct;
