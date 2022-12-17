import styled from 'styled-components';
import dots2 from '../../image/dots.png';

export const Dashboard = styled.div`
  padding: 60px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 82vh;
`;

export const Left = styled.div`
  flex: 1;
  height: 100%;
  background-color: #6969d7;
  border-radius: 54px 14px 14px 54px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const Top = styled.div`
  padding: 60px 10px;
  width: 210px;
  position: relative;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BG = styled.div`
  background-image: url(${dots2});
  background-size: 190%;
  background-position: center;
  height: 100px;
  position: absolute;
  width: 100px;
  right: 30px;
  top: 40px;
`;

export const Cat = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  padding: 20px;
  z-index: 1;
`;

export const UserGmail = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: white;
`;

export const Bottom = styled.div`
  padding: 40px 10px;
  width: 210px;
  display: flex;
  justify-content: center;
`;

export const BottomWrapper = styled.div`
  border: 1px dashed white;
  border-radius: 14px;
  padding: 10px;

  &:hover {
    border-style: solid;
  }
`;

export const CreatePost = styled.div`
  width: 100px;
  height: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 14px;
  background-color: #5252a1;

  svg {
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 50%;
    color: #6969d7;
    padding: 4px;
  }
`;

export const Text = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: white;
`;

export const Right = styled.div`
  display: flex;
  flex: 3;
  height: 100%;
  background: #5252a1;
  border-radius: 54px 14px 14px 54px;
  position: absolute;
  width: 80%;
  right: 0;
`;

export const RLeft = styled.div`
  flex: 1;
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 38px;
  font-weight: 300;
  margin-bottom: 20px;
  color: white;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  color: white;
`;

export const RTop = styled.div`
  padding: 0 10px;
`;

export const RBottom = styled.div`
  border: 1px solid white;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const RBottomTitle = styled.span`
  font-size: 28px;
  font-weight: 600;
  width: 90%;
  color: #6969d7;
`;

export const Chart = styled.div`
  width: 320px;
  height: 330px;
`;

export const RRight = styled.div`
  flex: 2;
  padding: 40px 10px;
`;

export const StatsUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const StatsLI = styled.li`
  padding: 6px 10px;
  border: 1px solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  font-size: 18px;

  svg {
    font-size: 28px;
    margin-right: 5px;
    color: #6969d7;
  }
`;

export const PostsList = styled.div`
  border-radius: 14px;
  min-height: 95%;
  padding: 20px 10px;
`;

export const Post = styled.div`
  background-color: white;
  border: 1px solid;
  border-radius: 8px;
  margin: 8px 0;
`;

export const PostsListUL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 20px;
`;

export const PostsListLI = styled.li``;
