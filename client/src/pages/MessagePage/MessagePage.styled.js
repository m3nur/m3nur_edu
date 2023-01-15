import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px 20px;

  svg {
    font-size: 30px;
    color: white;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 300;
  color: white;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: white;

  svg {
    margin-right: 10px;
  }
`;

export const Bottom = styled.ul`
  padding: 0 20px;
  margin-right: 20px;
  overflow-y: scroll;
  height: 85%;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 1.3);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 4px;
  }
`;

export const Message = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 8px;
  padding: 8px 10px;
  margin-bottom: 8px;

  svg {
    flex: 1;
    color: red;
    background: white;
    border: 1px solid white;
    border-radius: 8px;
    height: 24px;
    cursor: pointer;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 0;
`;

export const Sent = styled.p`
  color: #cdcccc;
`;

export const MessageTitle = styled.p`
  flex: 20;
  font-size: 18px;
  color: white;
`;

const shakeVertical = keyframes`
  0%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(8px);
            transform: translateY(8px);
  }
  80% {
    -webkit-transform: translateY(6.4px);
            transform: translateY(6.4px);
  }
  90% {
    -webkit-transform: translateY(-6.4px);
            transform: translateY(-6.4px);
  }

`;

export const Empty = styled.span`
  font-size: 24px;
  color: #9191ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  svg {
    font-size: 34px;
    margin-left: 10px;
    animation: ${shakeVertical} 4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      infinite both;
  }
`;
