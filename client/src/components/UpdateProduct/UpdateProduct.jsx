import React, { useEffect, useState } from "react";
import { Product } from "../index";
import { UpdateProductWrapper, Wrapper } from "./UpdateProduct.styled";
import { Button, Input, Label, Textarea, Update } from "../Modal/Modal.styled";
import { useForm } from "react-hook-form";
import {
  ErrorTitle,
  Tags,
  TagsInput,
  TagsTitle,
  TagsWrapper,
} from "../CreateProduct/CreatedProduct.styled";
import { IoMdRemoveCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, updateProduct } from "../../redux/apiCalls";

const UpdateProduct = (props) => {
  const product = useSelector((state) =>
    state.goldVault.goldVault.find((el) => el._id === props.props)
  );
  const success = useSelector((state) => state.goldVault.success);

  const dispatch = useDispatch();
  const [tags, setTags] = useState(product.tags);
  const [inputs, setInputs] = useState({});

  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleChange = (e) => {
    if (e.target.value.trim() !== "") {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value.trim() };
      });
    }
  };

  const addTags = (e) => {
    if (e.target.value.trim() !== "") {
      setTags([...tags, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const onSubmit = () => {
    const id = props.props;
    const product = { ...inputs, tags };
    updateProduct(dispatch, id, product);
    reset();
  };

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch, success]);

  const title = register("title", { required: false });
  const link = register("link", { required: false });
  const desc = register("desc", { required: false });

  return (
    <UpdateProductWrapper>
      <Wrapper>
        <Product props={props.props} />
      </Wrapper>
      <Wrapper>
        <Update onSubmit={handleSubmit(onSubmit)}>
          <Label>Product Title</Label>
          <Input
            type="text"
            placeholder="Example.example"
            name="title"
            onChange={(e) => {
              title.onChange(e);
              handleChange(e);
            }}
          />
          {errors.title && (
            <ErrorTitle role="alert">{errors.title?.message}</ErrorTitle>
          )}
          <Label>Product Link</Label>
          <Input
            type="text"
            placeholder="https://www.example.example"
            name="link"
            onChange={(e) => {
              link.onChange(e);
              handleChange(e);
            }}
          />
          {errors.link && (
            <ErrorTitle role="alert">{errors.link?.message}</ErrorTitle>
          )}
          <Label>Product Description</Label>
          <Textarea
            type="text"
            placeholder="Description about product"
            name="desc"
            onChange={(e) => {
              desc.onChange(e);
              handleChange(e);
            }}
          />
          {errors.desc && (
            <ErrorTitle role="alert">{errors.desc?.message}</ErrorTitle>
          )}
          <Label>Product Tags</Label>
          <TagsInput
            {...register("tags", {
              required: tags ? false : true,
            })}
          >
            <TagsWrapper>
              {tags?.map((tag, index) => (
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
          <Button type="submit">Update</Button>
        </Update>
      </Wrapper>
    </UpdateProductWrapper>
  );
};

export default UpdateProduct;
