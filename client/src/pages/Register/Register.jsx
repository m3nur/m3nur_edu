import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logo } from "../../components";
import {
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Bottom,
  BottomText,
  RegisterLabel,
  Subtitle,
  ErrorTitle,
} from "./Register.styled";
import { useForm } from "react-hook-form";
import { registerU } from "../../redux/apiCalls";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    registerU(dispatch, { ...data });
  };

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Title>CREATE AN ACCOUNT</Title>
        <Subtitle>Join us! Become a sought-after Front-End Developer!</Subtitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <RegisterLabel>Name</RegisterLabel>
          <Input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Please enter a name with at least 3 characters!",
              },
              maxLength: {
                value: 20,
                message: `You can't use more than 20 characters!`,
              },
              pattern: {
                value: /.*\S.*/,
                message: "Input cannot be empty!",
              },
            })}
          />
          {errors.name && (
            <ErrorTitle role="alert">{errors.name?.message}</ErrorTitle>
          )}

          <RegisterLabel>Email Address</RegisterLabel>
          <Input
            type="email"
            placeholder="example@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <ErrorTitle role="alert">{errors.email?.message}</ErrorTitle>
          )}

          <RegisterLabel>Password</RegisterLabel>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Please enter a password with at least 6 characters!",
              },
              maxLength: {
                value: 20,
                message: `You can't use more than 20 characters!`,
              },
              pattern: {
                value: /.*\S.*/,
                message: "Input cannot be empty!",
              },
            })}
          />
          {errors.password && (
            <ErrorTitle role="alert">{errors.password?.message}</ErrorTitle>
          )}

          <Button type="submit">CREATE</Button>
          <Bottom>
            <BottomText>
              Already have an account? {"  "}
              <Link to="/login">
                <b style={{ fontWeight: "500", color: "black" }}>LOGIN</b>
              </Link>
            </BottomText>
          </Bottom>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
