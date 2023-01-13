import {
  Bottom,
  BTNGetStarted,
  Main,
  SubTitle,
  Title,
  Top,
  TopWrapper,
  Wrapper,
} from "./Home.styled";
import { HomeLogo } from "../../components";
import { Container } from "@mui/system";
import { Stats } from "../../components";
import Product from "../Product/Product";

const Home = () => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <Top>
            <TopWrapper>
              <Title>
                Grow faster with the <i style={{ color: "#6969d7" }}>M3NUR</i>{" "}
                team!
              </Title>
              <SubTitle>
                We have collected more than 150 useful, most necessary sites and
                the best tools in web development especially for you. We are
                confident that they are gonna make your life much easier.
              </SubTitle>
              <BTNGetStarted>Get Start</BTNGetStarted>
            </TopWrapper>
          </Top>
          <Bottom>
            <HomeLogo />
          </Bottom>
        </Wrapper>
      </Container>
      <Stats />
      <Product />
    </Main>
  );
};

export default Home;
