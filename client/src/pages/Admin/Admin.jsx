import React, { useState } from "react";
import {
  Avatar,
  BG,
  Bottom,
  BottomWrapper,
  Cat,
  CreatePost,
  Dashboard,
  Left,
  Page,
  Right,
  SideBar,
  Text,
  Top,
  UserGmail,
  Wrapper,
} from "./Admin.styled";
import { Container } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import adminCat from "../../image/catAdmin.avif";
import { Modal } from "../../components";
import { Link } from "react-router-dom";

const Admin = (props) => {
  const [modal, setModal] = useState({
    modalAdd: {
      display: false,
    },
  });

  return (
    <Dashboard>
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
            <Bottom className="sideBar">
              <SideBar>
                <Link to="/admin">
                  <Page>GoldVault</Page>
                </Link>
                <Link to="/admin/message">
                  <Page>Messages</Page>
                </Link>
              </SideBar>
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
          <Right>{props.children}</Right>
        </Wrapper>
      </Container>
    </Dashboard>
  );
};

export default Admin;
