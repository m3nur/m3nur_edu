import React, { useState } from 'react';
import {
  Avatar,
  BG,
  Bottom,
  BottomWrapper,
  Cat,
  Chart,
  CreatePost,
  Dashboard,
  Left,
  Post,
  PostsListLI,
  PostsList,
  PostTitle,
  PostWrapper,
  RBottom,
  RBottomTitle,
  Right,
  RLeft,
  RRight,
  RTop,
  SearchContainer,
  SearchInput,
  Span,
  StatsLI,
  StatsUL,
  SubTitle,
  Text,
  Title,
  Top,
  UserGmail,
  Wrapper,
} from './Admin.styled';
import { Container } from '@mui/material';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { DiCodeigniter, DiCss3 } from 'react-icons/di';
import { FiPlus } from 'react-icons/fi';
import adminCat from '../../image/catAdmin.avif';
import { MyResponsivePie } from '../../components/Chart/Chart';
import { data } from '../data';
import { BiShow, BiPencil, BiTrash } from 'react-icons/bi';
import { Search } from '@mui/icons-material';
import { Modal } from '../../components';

const Admin = () => {
  const [modal, setModal] = useState(false);

  console.log(modal);
  return (
    <Dashboard>
      <Modal isOpened={modal} onModalClose={() => setModal(false)} />
      <Container>
        <Wrapper>
          <Left>
            <Top>
              <BG />
              <Avatar>
                <Cat src={adminCat} />
                <UserGmail>Myshyk Myshykbekov</UserGmail>
              </Avatar>
            </Top>
            <Bottom>
              <BottomWrapper>
                <CreatePost>
                  <Text>Add post</Text>
                  <FiPlus />
                </CreatePost>
              </BottomWrapper>
            </Bottom>
          </Left>
          <Right>
            <RLeft>
              <RTop>
                <Title>Manage your posts</Title>
                <SubTitle>
                  Create, edit and delete your posts and some statistics
                </SubTitle>
              </RTop>
              <RBottom>
                <RBottomTitle>Gold Vault</RBottomTitle>
                <Chart>
                  <MyResponsivePie data={data} />
                </Chart>
                <StatsUL>
                  <StatsLI>
                    <FaReact /> 218 posts.
                  </StatsLI>
                  <StatsLI>
                    <FaHtml5 /> 314 posts.
                  </StatsLI>
                  <StatsLI>
                    <SiJavascript /> 62 posts.
                  </StatsLI>
                  <StatsLI>
                    <DiCss3 /> 90 posts.
                  </StatsLI>
                  <StatsLI>
                    <DiCodeigniter /> 410 posts.
                  </StatsLI>
                </StatsUL>
              </RBottom>
            </RLeft>
            <RRight>
              <Post>
                <PostWrapper>
                  <PostTitle>Latest Posts</PostTitle>
                  <SearchContainer>
                    <SearchInput placeholder="Search..." />
                    <Search />
                  </SearchContainer>
                </PostWrapper>
                <PostsList>
                  <PostsListLI>
                    <Span style={{ width: '230px' }}>Animista.net</Span>
                    <Span style={{ width: '150px' }}>1 month ago</Span>
                    <Span>
                      <BiShow
                        style={{ fontSize: '26px' }}
                        onClick={() => setModal(true)}
                      />
                    </Span>
                    <Span>
                      <BiPencil style={{ color: 'green' }} />
                    </Span>
                    <Span>
                      <BiTrash style={{ color: 'red' }} />
                    </Span>
                  </PostsListLI>
                  <PostsListLI>
                    <Span style={{ width: '230px' }}>Svgartista.net</Span>
                    <Span style={{ width: '150px' }}>2 month ago</Span>
                    <Span>
                      <BiShow style={{ fontSize: '26px' }} />
                    </Span>
                    <Span>
                      <BiPencil style={{ color: 'green' }} />
                    </Span>
                    <Span>
                      <BiTrash style={{ color: 'red' }} />
                    </Span>
                  </PostsListLI>
                </PostsList>
              </Post>
            </RRight>
          </Right>
        </Wrapper>
      </Container>
    </Dashboard>
  );
};

export default Admin;
