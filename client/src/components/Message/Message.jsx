import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMessage } from "../../redux/apiCalls";
import {
  Button,
  Container,
  Email,
  SubTitle,
  Textarea,
  Title,
  ErrorTitle,
} from "./Message.styled";

const Message = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    addMessage(dispatch, { ...data });
    reset();
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>WE WAITING FOR YOUR MESSAGE, PLEASE WRITE TO US!</Title>
      <SubTitle>
        write to us here or email:{" "}
        <Email value="nurbek.itu@gmail.com" readOnly />
      </SubTitle>
      <Textarea
        type="text"
        {...register("message", {
          required: "Message is required",
          minLength: {
            value: 3,
            message: "Please enter a message with at least 3 characters!",
          },
          maxLength: {
            value: 500,
            message: `You can't use more than 500 characters!`,
          },
        })}
      />
      {errors.message && (
        <ErrorTitle role="alert">{errors.message?.message}</ErrorTitle>
      )}
      <Button type="submit">Send</Button>
    </Container>
  );
};

export default Message;
