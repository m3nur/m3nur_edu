import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding: 5px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  padding: 5px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 10px;
`;

export const RegisterLabel = styled.label`
  font-size: 16px;
  margin-top: 18px;
`;

export const Input = styled.input`
  margin-top: 8px;
  padding: 10px;
  outline: darkblue;
  border: 1px solid #000000;
  border-radius: 8px;
`;

export const Button = styled.button`
  border: 1px solid;
  padding: 10px;
  color: #6969d7;
  background-color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 30px 0;
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #6969d7;
    color: white;
  }

  &:active {
    transform: scale(1.07);
  }
`;

export const Bottom = styled.div`
  text-align: center;
`;

export const BottomText = styled.span`
  color: #555;
`;

export const ErrorTitle = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
