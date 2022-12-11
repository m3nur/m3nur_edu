import styled from 'styled-components';

export const TopbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #c5c5c5;
`;

export const TopbarWrapper = styled.div`
  height: 60px;
  padding: 0 20px;
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
  margin-right: 15px;
  color: #555;
  border: 1px solid #6969d7;
  color: #6969d7;
  padding: 4px 10px;
  border-radius: 8px;
  height: 30px;
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
  width: 300px;
  height: 30px;
  border: 1px solid #c5c5c5;
  border-radius: 8px;

  &:hover {
    border-color: #554;
  }

  &:focus {
    outline-color: #6969d7;
  }
`;
