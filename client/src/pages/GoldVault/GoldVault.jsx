import React, { useEffect, useState } from "react";
import { BiPencil, BiShow, BiTrash } from "react-icons/bi";
import { CiVault } from "react-icons/ci";
import { DiCodeigniter, DiCss3 } from "react-icons/di";
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MyResponsivePie } from "../../components/Chart/Chart";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import {
  Chart,
  Post,
  PostsList,
  PostsListLI,
  PostTitle,
  PostWrapper,
  RBottom,
  RBottomTitle,
  RLeft,
  RRight,
  RTop,
  SearchContainer,
  SearchInput,
  Span,
  StatsLI,
  StatsUL,
  SubTitle,
  Title,
} from "../Admin/Admin.styled";
import { format } from "timeago.js";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../components";
import { RiSearchLine } from "react-icons/ri";

const GoldVault = () => {
  const dispatch = useDispatch();
  const goldVault = useSelector((state) => state.goldVault.goldVault);
  const [modal, setModal] = useState({
    modalDisplay: {
      display: false,
      product: {},
    },
    modalUpdate: {
      display: false,
      product: {},
    },
  });

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(dispatch, id);
  };

  const value = [];
  goldVault.map((el) => el.tags.forEach((el) => value.push(el.toLowerCase())));
  const react = value.filter((el) => el === "react").length;
  const js = value.filter((el) => el === "javascript").length;
  const html = value.filter((el) => el === "html").length;
  const css = value.filter((el) => el === "css").length;
  const others = value.length - (react + js + html + css);

  const data = [
    {
      id: "ReactJS",
      value: react,
      color: "hsl(232, 70%, 50%)",
    },
    {
      id: "JavaScript",
      value: js,
      color: "hsl(327, 70%, 50%)",
    },
    {
      id: "HTML",
      value: html,
      color: "hsl(339, 70%, 50%)",
    },
    {
      id: "CSS",
      value: css,
      color: "hsl(312, 70%, 50%)",
    },
    {
      id: "Others",
      value: others,
      color: "hsl(291, 70%, 50%)",
    },
  ];
  return (
    <>
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
      <RLeft>
        <RTop>
          <Title style={{ marginBottom: "10px" }}>Manage your posts</Title>
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
              <FaReact /> {react} posts.
            </StatsLI>
            <StatsLI>
              <FaHtml5 /> {html} posts.
            </StatsLI>
            <StatsLI>
              <SiJavascript /> {js} posts.
            </StatsLI>
            <StatsLI>
              <DiCss3 /> {css} posts.
            </StatsLI>
            <StatsLI>
              <DiCodeigniter /> {others} posts.
            </StatsLI>
            <StatsLI>
              <CiVault /> {value.length} posts.
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
              <RiSearchLine style={{ color: "#6969d7" }} />
            </SearchContainer>
          </PostWrapper>
          <PostsList>
            {goldVault?.map((el) => (
              <PostsListLI key={el._id}>
                <Span style={{ width: "230px" }}>{el.title}</Span>
                <Span style={{ width: "150px" }}>{format(el.createdAt)}</Span>
                <Span
                  onClick={() =>
                    setModal({
                      ...modal,
                      modalDisplay: {
                        display: true,
                        product: el._id,
                      },
                    })
                  }
                >
                  <BiShow style={{ fontSize: "26px" }} />
                </Span>
                <Span
                  onClick={() =>
                    setModal({
                      ...modal,
                      modalUpdate: {
                        display: true,
                        product: el._id,
                      },
                    })
                  }
                >
                  <BiPencil style={{ color: "green" }} />
                </Span>
                <Span onClick={() => handleDelete(el._id)}>
                  <BiTrash style={{ color: "red" }} />
                </Span>
              </PostsListLI>
            ))}
          </PostsList>
        </Post>
      </RRight>
    </>
  );
};

export default GoldVault;
