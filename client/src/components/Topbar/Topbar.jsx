import React from "react";
import { logout } from "../../redux/apiCalls";
import Logo from "../Logo/Logo";
import {
  SearchContainer,
  SearchInput,
  TopbarContainer,
  TopbarIconContainer,
  TopbarWrapper,
  TopLeft,
  TopRight,
} from "./Topbar..styled";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { RiSearchLine } from "react-icons/ri";

const Topbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleClick = () => {
    logout(dispatch);
    navigate("/");
  };

  return (
    <TopbarContainer>
      <Container>
        <TopbarWrapper>
          <TopLeft>
            <Link to="/">
              <Logo />
            </Link>
            <SearchContainer>
              <SearchInput placeholder="Search..." />
              <RiSearchLine style={{ color: "#6969d7" }} />
            </SearchContainer>
          </TopLeft>
          <TopRight>
            {user === null ? (
              <>
                <Link to="/login">
                  <TopbarIconContainer>Login</TopbarIconContainer>
                </Link>
                <Link to="/register">
                  <TopbarIconContainer>Create account</TopbarIconContainer>
                </Link>
              </>
            ) : (
              <>
                <Link to="/admin">
                  <TopbarIconContainer>Admin Panel</TopbarIconContainer>
                </Link>
                <TopbarIconContainer onClick={handleClick}>
                  LOg Out
                </TopbarIconContainer>
              </>
            )}
          </TopRight>
        </TopbarWrapper>
      </Container>
    </TopbarContainer>
  );
};

export default Topbar;
