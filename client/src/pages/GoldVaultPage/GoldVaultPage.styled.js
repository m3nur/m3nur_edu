import styled from 'styled-components';

export const GoldVault = styled.div`
  display: flex;
  padding: 20px 0;
  background-color: #6969d7;
`;

export const Left = styled.div`
  flex: 1px;
  padding: 0 10px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 900;
  color: white;
`;

export const Tags = styled.ul`
  padding: 5px;
`;

export const Tag = styled.li`
  border: 1px solid;
  border-radius: 8px;
  color: white;
  margin: 6px 0;
  display: flex;

  a {
    width: 100%;
    padding: 6px 8px;
    font-size: 20px;
  }

  &:hover {
    color: #6969d7;
    background-color: white;
  }
`;

export const Right = styled.div`
  flex: 4;
  padding: 0 10px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TLeft = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 32px;
    color: white;
    display: flex;
    align-items: center;
  }
`;

export const TRight = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BTN = styled.button`
  padding: 6px 12px;
  border: 1px solid;
  border-radius: 8px;
  font-size: 18px;
  background: white;
  color: #6969d7;
  font-weight: 700;
  cursor: pointer;
`;

export const Info = styled.span`
  font-size: 24px;
  color: white;
`;

export const Bottom = styled.div``;

export const Items = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Item = styled.li`
  width: 285px;
  background: white;
  border: 1px solid white;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const Wrapper = styled.div`
  cursor: pointer;
  padding: 8px 6px 6px;
`;

export const RightTitle = styled.h3`
  font-size: 24px;
  color: #6969d7;
  overflow: hidden;
`;

export const RightTags = styled.ul`
  display: flex;
  align-items: center;
  padding: 8px 6px 6px;

  &.buttons {
    padding-top: 6px;
    justify-content: space-between;
  }
`;

export const RightTag = styled.li`
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.tags {
    margin-right: 10px;
  }
`;
