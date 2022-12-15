import styled from 'styled-components';

export const ProductPresentation = styled.div`
  padding: 60px 0;
`;

export const Presentation = styled.div``;

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
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: space-between;
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
`;

export const Small = styled.div`
  border: 1px solid;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  height: 120px;
  margin: 20px 0;
`;

export const PresentTitle = styled.h2``;

export const PresentSubTitle = styled.p`
  margin: 10px 0;
`;

export const Tag = styled.ul`
  display: flex;
`;

export const Tags = styled.li`
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #6969d7;
    color: white;
  }
`;
