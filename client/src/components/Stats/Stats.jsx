import React from 'react';
import { Container } from '@mui/material';
import {
  Amount,
  StatsLI,
  StatsUL,
  StatsWrapper,
  SubTitle,
  Title,
} from './Stats.styled';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { DiCodeigniter, DiCss3 } from 'react-icons/di';

const Stats = () => {
  return (
    <StatsWrapper>
      <Container>
        <StatsUL>
          <StatsLI>
            <Title>
              <i>#</i>React
            </Title>
            <Amount>321</Amount>
            <SubTitle>
              posts posted about <FaReact />
            </SubTitle>
          </StatsLI>
          <StatsLI>
            <Title>
              <i>#</i>HTML
            </Title>
            <Amount>222</Amount>
            <SubTitle>
              posts posted about <FaHtml5 />
            </SubTitle>
          </StatsLI>
          <StatsLI>
            <Title>
              <i>#</i>JavaScript
            </Title>
            <Amount>599</Amount>
            <SubTitle>
              posts posted about <SiJavascript />
            </SubTitle>
          </StatsLI>
          <StatsLI>
            <Title>
              <i>#</i>CSS
            </Title>
            <Amount>323</Amount>
            <SubTitle>
              posts posted about <DiCss3 />
            </SubTitle>
          </StatsLI>
          <StatsLI>
            <Title>
              <i>#</i>Others
            </Title>
            <Amount>7878</Amount>
            <SubTitle>
              posts posted about <DiCodeigniter />
            </SubTitle>
          </StatsLI>
        </StatsUL>
      </Container>
    </StatsWrapper>
  );
};

export default Stats;
