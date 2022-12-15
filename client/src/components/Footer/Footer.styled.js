import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #6969d7;
  padding-top: 60px;
`;

export const FooterTop = styled.div``;

export const FooterTopWrapper = styled.div`
  padding: 20px 0;
  display: flex;
`;

export const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const TopRight = styled.div`
  flex: 1;
  display: flex;
`;

export const TopWrapperLeft = styled.div`
  flex: 1;
`;

export const WrapperLeftUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-size: 20px;
  color: white;
  font-weight: 900;
`;

export const WrapperLeftLi = styled.li``;

export const WrapperLeftH2 = styled.h2`
  color: black;
`;

export const TopWrapperRight = styled.div`
  flex: 1;
`;

export const IMG = styled.img`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 5px;
  word-spacing: 5px;
`;

export const SubTitle = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: 900;
`;

export const Gmail = styled.div`
  margin: 20px 0;
`;

export const GmailLink = styled.a`
  cursor: pointer;
  font-size: 18px;
  padding: 8px 10px;
  border-radius: 8px;
  background: white;
  color: #6969d7;
  font-weight: 600;
`;

export const FooterBottom = styled.div``;

export const FooterBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #c5c5c5;
`;

export const BottomLeft = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;

  svg {
    margin: 0 5px;
    color: white;
  }
`;

export const BottomRight = styled.div``;

export const Icon = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconItems = styled.li`
  margin-left: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const IconItemsLink = styled.a`
  svg {
    font-size: 26px;
    color: white;
  }
`;
