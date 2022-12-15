import styled from 'styled-components';

export const Main = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 61px);
`;

export const Top = styled.div`
  flex: 1;
`;

export const TopWrapper = styled.div``;

export const BTNGetStarted = styled.button`
  padding: 10px 50px;
  border: 1px solid #6969d7;
  color: white;
  background-color: #6969d7;
  border-radius: 8px;
  font-size: 26px;
  font-weight: 600;
  cursor: pointer;
`;

export const Bottom = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  max-width: 500px;
  font-size: 80px;
  font-weight: 900;

  i {
    font-style: normal !important;
  }
`;

export const SubTitle = styled.p`
  font-size: 20px;
  margin: 35px 0;
`;
