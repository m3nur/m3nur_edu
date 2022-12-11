import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const animate = keyframes`
  0% {
    transform: perspective(1000px) rotateX(0deg) rotate(25deg);
  }
  100% {
    transform: perspective(1000px) rotateX(360deg) rotate(25deg);
  }
  `;

export const Box = styled.div`
  transform-style: preserve-3d;
  animation: ${animate} 25s linear infinite;
`;
export const Span = styled.span`
  letter-spacing: 10px;
  position: absolute;
  color: #6969f7;
  font-size: 60px;
  white-space: nowrap;
  font-weight: 900;
  padding: 0 150px;
  background: linear-gradient(
    90deg,
    transparent,
    rgb(190 206 231 / 50%),
    transparent
  );
  line-height: 0.8em;
  transform-style: preserve-3d;
  text-shadow: 0 220px 5px rgb(105 105 247 / 50%);
  transform: translate(-50%, -50px) rotateX(calc(var(--i) * 25.7deg))
    translateZ(150px);

  i {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal !important;
  }
`;
