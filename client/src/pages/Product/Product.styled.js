import styled from 'styled-components';

export const ProductPresentation = styled.div`
  padding: 60px 0;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const SubTitle = styled.p`
  font-size: 22px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const BottomWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
`;

export const Tabs = styled.ul`
  display: flex;
  padding: 50px 0;
`;

export const Tab = styled.li`
  border: 1px solid;
  padding: 2px 12px;
  border-radius: 4px;
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #6969d7;
    color: white;
  }

  &.true {
    background-color: #6969d7;
    color: white;
  }
`;

export const Small = styled.div`
  border: 1px solid #6969d7;
  border-radius: 8px;
  width: 370px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const SmallWrapper = styled.div`
  padding: 15px 20px 15px;
`;

export const PresentTitle = styled.h2`
  font-size: 28px;
`;

export const PresentSubTitle = styled.p`
  margin: 10px 0;
  height: 80px;
  overflow: hidden;
`;

export const Tag = styled.ul`
  display: flex;

  &.bottomBTNs {
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0 20px;
  }
`;

export const Tags = styled.li`
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 18px;
  font-weight: 600;
  margin-right: 5px;
  background-color: #6969d7;
  color: white;

  &.bottomBTN {
    background: none;
    color: #6969d7;
    font-size: 22px;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 0;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
  }

  svg:hover {
    transform: scale(1.1);
  }

  &.chart:hover {
    svg {
      color: yellow;
    }
  }
  &.share:hover {
    color: green;
  }
  &.heart {
    .red {
      color: red;
    }
  }
`;

export const HR = styled.hr`
  margin: 0 20px 10px;
  background-color: #6969d7;
`;

export const StatValue = styled.span`
  font-size: 16px;
  margin-left: 6px;
`;
