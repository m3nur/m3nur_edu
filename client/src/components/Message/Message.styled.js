import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const SubTitle = styled.span`
  font-size: 20px;
  color: #6969d7;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #6969d7;
  border-radius: 8px;
  height: 130px;
  font-size: 20px;
  padding: 4px 6px;
`;

export const Email = styled.input`
  padding: 6px 10px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid;
  margin-left: 6px;
`;

export const Button = styled.button`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  border: 1px solid;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #6969d7;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #6969d7;
  }
`;

export const ErrorTitle = styled.p`
  color: red;
  font-size: 18px;
  margin-top: 5px;
`;
