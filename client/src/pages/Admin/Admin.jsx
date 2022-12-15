import React from 'react';
import {
  Dashboard,
  Gmail,
  Left,
  Right,
  Stats,
  StatsEl,
  Title,
  Wrapper,
} from './Admin.styled';
import { Container } from '@mui/material';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { DiCodeigniter, DiCss3 } from 'react-icons/di';

const Admin = () => {
  return (
    <Dashboard>
      <Container>
        <Title>Admin Dashboard</Title>
        <Wrapper>
          <Right>
            <Gmail>Hello @User</Gmail>
            <Stats>
              <StatsEl>
                <FaHtml5 /> 321 posts posted.
              </StatsEl>
              <StatsEl>
                <FaReact /> 321 posts posted.
              </StatsEl>
              <StatsEl>
                <SiJavascript /> 321 posts posted.
              </StatsEl>
              <StatsEl>
                <DiCodeigniter /> 321 posts posted.
              </StatsEl>
              <StatsEl>
                <DiCss3 /> 321 posts posted.
              </StatsEl>
            </Stats>
          </Right>
          <Left>eshek</Left>
        </Wrapper>
      </Container>
    </Dashboard>
  );
};

export default Admin;
