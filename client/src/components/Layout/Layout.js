import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../../pages/Login/Login';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

const Layout = ({ user }) =>
  user ? (
    <>
      <Container>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Container>
    </>
  ) : (
    <Login />
  );

export { Layout };
