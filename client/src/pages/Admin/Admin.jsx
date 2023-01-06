import React, { useEffect, useState } from "react";
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
} from "./Admin.styled";
import { Container } from "@mui/material";
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiCodeigniter, DiCss3 } from "react-icons/di";
import { FiPlus } from "react-icons/fi";
import adminCat from "../../image/catAdmin.avif";
import { MyResponsivePie } from "../../components/Chart/Chart";
import { data } from "../data";
import { BiShow, BiPencil, BiTrash } from "react-icons/bi";
import { Search } from "@mui/icons-material";
import { Modal } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";
import { format } from "timeago.js";

const Admin = () => {
  const goldVault = useSelector((state) => state.goldVault.goldVault);
  const [modal, setModal] = useState({
    modalDisplay: {
      display: false,
      product: {},
    },
    modalUpdate: {
      display: false,
    },
    modalAdd: {
      display: false,
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <Dashboard>
      <Modal
        whoIam={"display"}
        isOpened={modal.modalDisplay}
        onModalClose={() =>
          setModal({
            ...modal,
            modalDisplay: {
              display: false,
            },
          })
        }
      />
      <Modal
        whoIam={"update"}
        isOpened={modal.modalUpdate}
        onModalClose={() =>
          setModal({
            ...modal,
            modalUpdate: {
              display: false,
            },
          })
        }
      />
      <Modal
        whoIam={"add"}
        isOpened={modal.modalAdd}
        onModalClose={() =>
          setModal({
            ...modal,
            modalAdd: {
              display: false,
            },
          })
        }
      />
      <Container>
        <Wrapper>
          <Left>
            <Top>
              <BG />
              <Avatar>
                <Cat
                  src={adminCat}
                  title="You have been punished for not liking cats, so you cannot change your avatar."
                />
                <UserGmail>Myshyk Myshykbekov</UserGmail>
              </Avatar>
            </Top>
            <Bottom>
              <BottomWrapper
                onClick={() =>
                  setModal({
                    ...modal,
                    modalAdd: {
                      display: true,
                    },
                  })
                }
              >
                <CreatePost>
                  <Text>CREATE</Text>
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
                  {goldVault?.map((el, indx) => (
                    <PostsListLI key={indx}>
                      <Span style={{ width: "230px" }}>{el.title}</Span>
                      <Span style={{ width: "150px" }}>
                        {format(el.createdAt)}
                      </Span>
                      <Span>
                        <BiShow
                          style={{ fontSize: "26px" }}
                          onClick={() =>
                            setModal({
                              ...modal,
                              modalDisplay: {
                                display: true,
                                product: { ...el },
                              },
                            })
                          }
                        />
                      </Span>
                      <Span>
                        <BiPencil
                          style={{ color: "green" }}
                          onClick={() =>
                            setModal({
                              ...modal,
                              modalUpdate: {
                                display: true,
                              },
                            })
                          }
                        />
                      </Span>
                      <Span>
                        <BiTrash style={{ color: "red" }} />
                      </Span>
                    </PostsListLI>
                  ))}
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
