import React from 'react';
import {
  Bottom,
  BottomWrapper,
  Presentation,
  PresentSubTitle,
  PresentTitle,
  ProductPresentation,
  Small,
  SubTitle,
  Tab,
  Tabs,
  Tag,
  Tags,
  Title,
  Top,
} from './Product.styled';
import { Container } from '@mui/system';

const Product = () => {
  return (
    <ProductPresentation>
      <Container>
        <Presentation>
          <Top>
            <Title>Our Recent Posts.</Title>
            <SubTitle>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              neque.
            </SubTitle>
          </Top>
          <Bottom>
            <Tabs>
              <Tab>All</Tab>
              <Tab>#ReactJS</Tab>
              <Tab>JS</Tab>
              <Tab>HTML</Tab>
              <Tab>CSS</Tab>
              <Tab>Animation</Tab>
              <Tab>Photos</Tab>
            </Tabs>
            <BottomWrapper>
              <Small>
                <PresentTitle>Animista.net</PresentTitle>
                <PresentSubTitle>
                  Animista is a place where you can play with a collection of
                  pre-made css animations.
                </PresentSubTitle>
                <Tag>
                  <Tags>#CSS</Tags>
                  <Tags>#Animation</Tags>
                </Tag>
              </Small>
              <Small>
                <PresentTitle>Svgartista.net</PresentTitle>
                <PresentSubTitle>
                  Super handy SVG drawing animation tool.
                </PresentSubTitle>
                <Tag>
                  <Tags>#CSS</Tags>
                  <Tags>#Animation</Tags>
                </Tag>
              </Small>
              <Small>
                <PresentTitle>Fonts.Google.com</PresentTitle>
                <PresentSubTitle>
                  Google Fonts is a library of 1474 open source font families
                  and APIs for convenient use via CSS and Android.
                </PresentSubTitle>
                <Tag>
                  <Tags>#HTML</Tags>
                  <Tags>#CSS</Tags>
                  <Tags>#Others</Tags>
                </Tag>
              </Small>
              <Small>
                <PresentTitle>Dev.to</PresentTitle>
                <PresentSubTitle>
                  A constructive and inclusive social network for software
                  developers. With you every step of your journey.
                </PresentSubTitle>
                <Tag>
                  <Tags>#Others</Tags>
                  <Tags>#React</Tags>
                  <Tags>#HTML</Tags>
                  <Tags>#CSS</Tags>
                  <Tags>#JS</Tags>
                </Tag>
              </Small>
            </BottomWrapper>
          </Bottom>
        </Presentation>
      </Container>
    </ProductPresentation>
  );
};

export default Product;
