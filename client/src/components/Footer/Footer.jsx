import {
  Favorite,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from '@mui/icons-material';
import { Container } from '@mui/system';
import React from 'react';
import {
  BottomLeft,
  BottomRight,
  FooterBottom,
  FooterBottomWrapper,
  FooterContainer,
  FooterTop,
  FooterTopWrapper,
  Gmail,
  GmailLink,
  Icon,
  IconItems,
  IconItemsLink,
  IMG,
  SubTitle,
  Title,
  TopLeft,
  TopRight,
  TopWrapperLeft,
  TopWrapperRight,
  WrapperLeftH2,
  WrapperLeftLi,
  WrapperLeftUl,
} from './Footer.styled';
import OurWebSite from '../../Image/OurWebSIte.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Container>
          <FooterTopWrapper>
            <TopLeft>
              <Title>WE WOULD LIKE TO HEAR FROM YOU</Title>
              <SubTitle>
                Do you have a question or want to support our project? For all
                support and technical questions, please email:
              </SubTitle>
              <Gmail>
                <GmailLink href="mailto:nurbek.itu@gmail.com">
                  nurbek.itu@gmail.com
                </GmailLink>
              </Gmail>
            </TopLeft>
            <TopRight>
              <TopWrapperLeft>
                <WrapperLeftUl>
                  <WrapperLeftH2>Company</WrapperLeftH2>
                  <WrapperLeftLi>About Us</WrapperLeftLi>
                  <WrapperLeftLi>Contact Us</WrapperLeftLi>
                  <WrapperLeftLi>Support</WrapperLeftLi>
                </WrapperLeftUl>
              </TopWrapperLeft>
              <TopWrapperRight>
                <IMG src={OurWebSite} alt="our web site" />
              </TopWrapperRight>
            </TopRight>
          </FooterTopWrapper>
        </Container>
      </FooterTop>
      <FooterBottom>
        <Container>
          <FooterBottomWrapper>
            <BottomLeft>
              Made with <Favorite /> by
              <IconItemsLink
                style={{ textDecoration: 'underline', margin: '0 5px' }}
                href="https://github.com/NurMura88"
                target="_blank"
              >
                Nurbek Murataliev.
              </IconItemsLink>
              © 2023 m3nur. All rights reserved.
            </BottomLeft>
            <BottomRight>
              <Icon>
                <IconItems>
                  <IconItemsLink target="_blank">
                    <LinkedIn />
                  </IconItemsLink>
                </IconItems>
                <IconItems>
                  <IconItemsLink target="_blank">
                    <GitHub />
                  </IconItemsLink>
                </IconItems>
                <IconItems>
                  <IconItemsLink target="_blank">
                    <Telegram />
                  </IconItemsLink>
                </IconItems>
                <IconItems>
                  <IconItemsLink target="_blank">
                    <Twitter />
                  </IconItemsLink>
                </IconItems>
                <IconItems>
                  <IconItemsLink target="_blank">
                    <Instagram />
                  </IconItemsLink>
                </IconItems>
              </Icon>
            </BottomRight>
          </FooterBottomWrapper>
        </Container>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
