import styled, { keyframes } from "styled-components";
import dots2 from "../../image/dots.png";

export const Dashboard = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: calc(100vh - 61px);
`;

export const Left = styled.div`
  flex: 1;
  height: 100%;
  background-color: #6969d7;
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
  height: 110px;
  width: 110px;
  position: absolute;
  right: 0;
  top: 40px;
`;

export const Cat = styled.img`
  width: 150px;
  height: 150px;
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

  &.sideBar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    font-size: 24px;
    color: white;
    font-weight: 600;
    border: 1px dashed;
    border-radius: 8px;
    padding: 8px 12px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-style: solid;
    }
  }
`;

export const BottomWrapper = styled.div`
  border: 1px dashed white;
  border-radius: 14px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    border-style: solid;
  }
`;

const vibrate = keyframes`
 0% {
  transform: translate(0);
  }
  20% {
  transform: translate(-2px, 2px);
  }
  40% {
  transform: translate(-2px, -2px);
  }
  60% {
  transform: translate(2px, 2px);
  }
  80% {
  transform: translate(2px, -2px);
  }
  100% {
  transform: translate(0);
  }
`;

export const CreatePost = styled.div`
  width: 130px;
  height: 180px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 14px;
  background-color: #5252a1;

  svg {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    color: #6969d7;
    padding: 4px;
  }

  &:hover {
    animation: ${vibrate} 0.3s linear infinite both;
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
  position: absolute;
  width: 80%;
  right: 0;
`;

export const RLeft = styled.div`
  flex: 1;
  padding: 40px 20px;
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
  font-size: 30px;
  font-weight: 900;
  color: #6969d7;
`;

export const Chart = styled.div`
  width: 310px;
  height: 310px;
`;

export const RRight = styled.div`
  flex: 2;
  padding: 40px 0px;
  height: 100%;
`;

export const StatsUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const StatsLI = styled.li`
  width: 100%;
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

export const Post = styled.div`
  border-radius: 14px;
  height: 100%;
  padding: 0 10px;
`;

export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid white;
  padding: 3px 6px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const PostTitle = styled.span`
  font-size: 26px;
  color: white;
  font-weight: 500;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 3px;

  svg {
    position: absolute;
    right: 9px;
    cursor: pointer;
    font-size: 20px;
  }
`;
export const SearchInput = styled.input`
  padding: 4px 0px 4px 10px;
  font-size: 14px;
  width: 263px;
  height: 40px;
  border: 1px solid #c5c5c5;
  border-radius: 8px;
  outline: none;

  &:hover {
    border-color: #554;
  }
`;

export const PostsList = styled.ul`
  overflow-y: scroll;
  height: 91%;
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

export const PostsListLI = styled.li`
  border: 1px solid white;
  border-radius: 8px;
  margin-bottom: 13px;
  padding: 8px 6px;
  font-size: 22px;
  background-color: white;
  color: #6969d7;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Span = styled.span`
  overflow: hidden;
  display: flex;
  align-items: center;

  svg {
    padding: 1px 3px;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const SideBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 180px;
  justify-content: space-evenly;
`;

export const Page = styled.span`
  background: #5252a1;
  padding: 4px 22px;
  border-radius: 8px;

  &:hover {
    animation: ${vibrate} 0.3s linear infinite both;
  }
`;
