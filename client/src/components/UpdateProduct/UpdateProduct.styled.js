import styled from "styled-components";

export const UpdateProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

export const Wrapper = styled.div`
  flex: 1;
  padding: 0 5px;
`;

export const WrapperTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 14px;
`;

export const WrapperSubtile = styled.p`
  font-size: 18px;
`;

export const WrapperTags = styled.ul`
  display: flex;
  align-items: center;
  margin: 22px 0;
`;

export const WrapperTag = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #6969d7;
    color: white;
    border-color: #6969d7;
  }
`;
