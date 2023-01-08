import styled from "styled-components";

export const ErrorTitle = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const TagsInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  border: 1px solid #6969d7;
  border-radius: 8px;
  margin: 10px 0;
  padding: 10px;

  & .tag::-webkit-input-placeholder {
    font-size: 18px;
    font-weight: 500;
    color: black;
  }
`;

export const TagsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Tags = styled.li`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 6px;
  font-size: 18px;
  border-radius: 8px;
  outline: none;
  align-items: center;
  border: 1px solid #6969d7;
  justify-content: center;
  margin: 0 4px 6px 0px;

  svg {
    font-size: 22px;
    cursor: pointer;
    margin-left: 5px;
    background: #6969d7;
    border-radius: 50%;
    color: white;
  }
`;

export const TagsTitle = styled.span``;
