import React from 'react';
import { logout } from '../../redux/apiCalls';
import Logo from '../Logo/Logo';
import {
  NavBar,
  NavItem,
  SearchContainer,
  SearchInput,
  TopbarContainer,
  TopbarIconContainer,
  TopbarWrapper,
  TopLeft,
  TopRight,
} from './Topbar..styled';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';

const Topbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  const handleClick = () => {
    logout(dispatch);
    navigate('/');
  };

  return (
    <TopbarContainer>
      <TopbarWrapper>
        <TopLeft>
          <Link to='/'>
            <Logo />
          </Link>
          <SearchContainer>
            <SearchInput placeholder='Search...' />
            <RiSearchLine style={{ color: '#6969d7' }} />
          </SearchContainer>
          <NavBar>
            <NavItem>
              <Link to='/t/all'>Gold vault</Link>
            </NavItem>
            <NavItem>
              <Link to='/about'>About us</Link>
            </NavItem>
            <NavItem>
              <Link to='/contact'>Contact us</Link>
            </NavItem>
            <NavItem>
              <Link to='/support'>Support</Link>
            </NavItem>
          </NavBar>
        </TopLeft>
        <TopRight>
          {user === null ? (
            <>
              <Link to='/login'>
                <TopbarIconContainer>Login</TopbarIconContainer>
              </Link>
              <Link to='/register'>
                <TopbarIconContainer>Create Account</TopbarIconContainer>
              </Link>
            </>
          ) : (
            <>
              {user?.isAdmin && (
                <Link to='/admin'>
                  <TopbarIconContainer>Admin Panel</TopbarIconContainer>
                </Link>
              )}
              <TopbarIconContainer onClick={handleClick}>
                LOg Out
              </TopbarIconContainer>
            </>
          )}
        </TopRight>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
