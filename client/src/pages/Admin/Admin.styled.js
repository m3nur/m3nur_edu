import styled from 'styled-components';

export const Dashboard = styled.div`
  padding: 60px 0;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Right = styled.div`
  flex: 1;
`;

export const Left = styled.div`
  flex: 3;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const Gmail = styled.span`
  font-size: 28px;
`;

export const Stats = styled.ul`
  padding: 10px 20px;
`;

export const StatsEl = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-top: 10px;
  svg {
    margin-right: 10px;
    font-size: 34px;
    color: #6969d7;
  }
`;
