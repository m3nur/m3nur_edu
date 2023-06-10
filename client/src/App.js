import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './components';
import Topbar from './components/Topbar/Topbar';
import {
  Admin,
  GoldVault,
  GoldVaultPage,
  Home,
  Login,
  MessagePage,
  NonExistentPage,
  Register,
} from './pages';

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const user = useSelector((state) => state?.user?.user);
  return (
    <Main>
      <Topbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<NonExistentPage />} />
        <Route path='t/:tags' element={<GoldVaultPage />} />
        <Route
          path='admin'
          element={
            user?.isAdmin && (
              <Admin>
                <GoldVault />
              </Admin>
            )
          }
        />
        <Route
          path='admin/message'
          element={
            user?.isAdmin && (
              <Admin>
                <MessagePage />
              </Admin>
            )
          }
        />
      </Routes>
      <Footer />
    </Main>
  );
}

export default App;
