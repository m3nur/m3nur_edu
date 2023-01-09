import React from "react";
import { Container } from "@mui/material";
import {
  Amount,
  StatsLI,
  StatsUL,
  StatsWrapper,
  SubTitle,
  Title,
} from "./Stats.styled";
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiCodeigniter, DiCss3 } from "react-icons/di";
import { useSelector } from "react-redux";

const Stats = () => {
  const goldVault = useSelector((state) => state.goldVault.goldVault);
  const value = [];
  goldVault.map((el) => el.tags.forEach((el) => value.push(el.toLowerCase())));
  const react = value.filter((el) => el === "react").length;
  const js = value.filter((el) => el === "javascript").length;
  const html = value.filter((el) => el === "html").length;
  const css = value.filter((el) => el === "css").length;
  const others = value.length - (react + js + html + css);

  return (
    <StatsWrapper>
      <Container>
        <StatsUL>
          <StatsLI>
            <Title>
              <i>#</i>React
            </Title>
            <Amount>{react}</Amount>
            <SubTitle>
              posts posted about <FaReact />
            </SubTitle>
          </StatsLI>
          <StatsLI>
            <Title>
              <i>#</i>HTML
            </Title>
            <Amount>{html}</Amount>
            <SubTitle>
              posts posted about <FaHtml5 />
            </SubTitle>
          </StatsLI>
          <StatsLI>
            <Title>
              <i>#</i>JavaScript
            </Title>
            <Amount>{js}</Amount>
            <SubTitle>
              posts posted about <SiJavascript />
            </SubTitle>
          </StatsLI>
          <StatsLI>
            <Title>
              <i>#</i>CSS
            </Title>
            <Amount>{css}</Amount>
            <SubTitle>
              posts posted about <DiCss3 />
            </SubTitle>
          </StatsLI>
          <StatsLI>
            <Title>
              <i>#</i>Others
            </Title>
            <Amount>{others}</Amount>
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
