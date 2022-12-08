import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 800;
  color: #6969d7;
  margin: 20px 0;
`;

const rotateInVer = keyframes`
0% {
    -webkit-transform: rotateY(-360deg);
            transform: rotateY(-360deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
    opacity: 1;
  }
`;

export const Items = styled.span`
  -webkit-animation: ${rotateInVer} 3s cubic-bezier(0.785, 0.135, 0.15, 0.86)
    0.2s infinite alternate-reverse both;
  animation: ${rotateInVer} 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.2s
    infinite alternate-reverse both;
`;
