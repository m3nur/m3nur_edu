import React from 'react';
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
  PostsList,
  PostsListLI,
  PostsListUL,
  RBottom,
  RBottomTitle,
  Right,
  RLeft,
  RRight,
  RTop,
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

const Admin = () => {
  return (
    <Dashboard>
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
              <PostsList>
                <Post>
                  <>Latest Posts</>
                </Post>
                <Post>
                  <PostsListUL>
                    <PostsListLI style={{ width: '200px' }}>
                      Animista.net
                    </PostsListLI>
                    <PostsListLI style={{ width: '150px' }}>
                      1 month ago
                    </PostsListLI>
                    <PostsListLI>
                      <BiShow />
                    </PostsListLI>
                    <PostsListLI>
                      <BiPencil />
                    </PostsListLI>
                    <PostsListLI>
                      <BiTrash />
                    </PostsListLI>
                  </PostsListUL>
                </Post>
                <Post>
                  <PostsListUL>
                    <PostsListLI style={{ width: '200px' }}>
                      Svgartista.net
                    </PostsListLI>
                    <PostsListLI style={{ width: '150px' }}>
                      3 month ago
                    </PostsListLI>
                    <PostsListLI>
                      <BiShow />
                    </PostsListLI>
                    <PostsListLI>
                      <BiPencil />
                    </PostsListLI>
                    <PostsListLI>
                      <BiTrash />
                    </PostsListLI>
                  </PostsListUL>
                </Post>
                <Post>
                  <PostsListUL>
                    <PostsListLI style={{ width: '200px' }}>
                      Fonts.Google.com
                    </PostsListLI>
                    <PostsListLI style={{ width: '150px' }}>
                      6 month ago
                    </PostsListLI>
                    <PostsListLI>
                      <BiShow />
                    </PostsListLI>
                    <PostsListLI>
                      <BiPencil />
                    </PostsListLI>
                    <PostsListLI>
                      <BiTrash />
                    </PostsListLI>
                  </PostsListUL>
                </Post>
                <Post>
                  <PostsListUL>
                    <PostsListLI style={{ width: '200px' }}>Dev.to</PostsListLI>
                    <PostsListLI style={{ width: '150px' }}>
                      10 month ago
                    </PostsListLI>
                    <PostsListLI>
                      <BiShow />
                    </PostsListLI>
                    <PostsListLI>
                      <BiPencil />
                    </PostsListLI>
                    <PostsListLI>
                      <BiTrash />
                    </PostsListLI>
                  </PostsListUL>
                </Post>
              </PostsList>
            </RRight>
          </Right>
        </Wrapper>
      </Container>
    </Dashboard>
  );
};

export default Admin;
