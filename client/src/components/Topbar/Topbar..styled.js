import styled from 'styled-components';

export const TopbarContainer = styled.div`
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #c5c5c5;
`;

export const TopbarWrapper = styled.div`
  height: 60px;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TopbarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 10px;
  color: #555;
  border: 1px solid #6969d7;
  color: #6969d7;
  padding: 4px 10px;
  border-radius: 8px;
  height: 40px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6969d7;
    color: white;
  }

  &:active {
    transform: scale(1.07);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px;

  svg {
    position: absolute;
    right: 12px;
    cursor: pointer;
    font-size: 30px;
  }
`;
export const SearchInput = styled.input`
  padding: 4px 30px 4px 10px;
  font-size: 16px;
  margin-left: 30px;
  width: 350px;
  height: 40px;
  border: 1px solid #c5c5c5;
  border-radius: 8px;

  &:hover {
    border-color: #554;
  }

  &:focus {
    outline-color: #6969d7;
  }
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  padding: 10px 0;
`;

export const NavItem = styled.li`
  font-size: 18px;
  width: 120px;
  display: flex;
  margin-right: 10px;
  justify-content: center;

  a:hover {
    padding: 8px 12px;
    background-color: rgba(106, 100, 255, 0.6);
    border-radius: 8px;
    color: white;
  }
`;
