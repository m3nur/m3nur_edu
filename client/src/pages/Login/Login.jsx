import React from 'react';
import {
  Bottom,
  BottomText,
  Button,
  Container,
  ErrorTitle,
  Form,
  LoginInput,
  LoginLabel,
  Subtitle,
  Title,
  Wrapper,
} from './Login.styled';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../components';
import { useForm } from 'react-hook-form';
import { loginU } from '../../redux/apiCalls';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    loginU(dispatch, { ...data });
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Title>WELCOME BACK!</Title>
        <Subtitle>Join us! Become a sought-after Front-End Developer!</Subtitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <LoginLabel>Email</LoginLabel>
          <LoginInput
            type="text"
            placeholder="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <ErrorTitle role="alert">{errors.email?.message}</ErrorTitle>
          )}

          <LoginLabel>Password</LoginLabel>
          <LoginInput
            type="password"
            placeholder="Password"
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Please enter a password with at least 6 characters!',
              },
              maxLength: {
                value: 20,
                message: `You can't use more than 20 characters!`,
              },
            })}
          />
          {errors.password && (
            <ErrorTitle role="alert">{errors.password?.message}</ErrorTitle>
          )}
          <Button type="submit">Login</Button>
          <Bottom>
            <BottomText>
              Don't have an account?{' '}
              <Link to="/register">
                <b style={{ fontWeight: '500', color: 'black' }}>SIGN UP</b>
              </Link>
            </BottomText>
          </Bottom>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
