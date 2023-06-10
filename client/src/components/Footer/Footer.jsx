import {
  Favorite,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from '@mui/icons-material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
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
import OurWebSite from '../../image/OurWebSIte.png';
import { Modal } from '../../components';

const Footer = () => {
  const [modal, setModal] = useState({
    modalMessage: {
      display: false,
    },
  });
  return (
    <FooterContainer>
      <Modal
        whoIam={'message'}
        isOpened={modal.modalMessage}
        onModalClose={() =>
          setModal({
            ...modal,
            modalMessage: {
              display: false,
            },
          })
        }
      />
      <FooterTop>
        <Container>
          <FooterTopWrapper>
            <TopLeft>
              <Title>WE WOULD LIKE TO HEAR FROM YOU</Title>
              <SubTitle>
                Do you have a question or want to support our project? For all
                support and technical questions, please email or ...:
              </SubTitle>
              <Gmail
                onClick={() =>
                  setModal({
                    ...modal,
                    modalMessage: {
                      display: true,
                    },
                  })
                }
              >
                <GmailLink>ASK QUESTION</GmailLink>
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
                <IMG src={OurWebSite} alt='our web site' />
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
                href='https://github.com/m3nur'
                target='_blank'
              >
                m3nur
              </IconItemsLink>
              © 2022-{new Date().getFullYear()}. All rights reserved.
            </BottomLeft>
            <BottomRight>
              <Icon>
                <IconItems>
                  <IconItemsLink
                    href='https://www.linkedin.com/in/m3nur/'
                    target='_blank'
                  >
                    <LinkedIn />
                  </IconItemsLink>
                </IconItems>
                <IconItems>
                  <IconItemsLink
                    href='https://github.com/m3nur'
                    target='_blank'
                  >
                    <GitHub />
                  </IconItemsLink>
                </IconItems>
                <IconItems>
                  <IconItemsLink href='https://t.me/m3nur' target='_blank'>
                    <Telegram />
                  </IconItemsLink>
                </IconItems>
                <IconItems>
                  <IconItemsLink
                    href='https://twitter.com/nyqqbb'
                    target='_blank'
                  >
                    <Twitter />
                  </IconItemsLink>
                </IconItems>
                <IconItems>
                  <IconItemsLink
                    href='https://www.instagram.com/m3nur/'
                    target='_blank'
                  >
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
