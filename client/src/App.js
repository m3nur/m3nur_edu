import { Container } from '@mui/system';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './components';
import Topbar from './components/Topbar/Topbar';
import { Home, Login, NonExistentPage, Register } from './pages';

const Main = styled.div``;

const Wrapper = styled.div``;

function App() {
  return (
    <Main>
      <Wrapper>
        <Topbar />
        <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NonExistentPage />} />
          </Routes>
        </Container>
        <Footer />
      </Wrapper>
    </Main>
  );
}

export default App;
