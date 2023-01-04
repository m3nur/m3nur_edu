import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "./components";
import Topbar from "./components/Topbar/Topbar";
import { Admin, Home, Login, NonExistentPage, Register } from "./pages";

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <Main>
      <Topbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<NonExistentPage />} />
      </Routes>
      <Footer />
    </Main>
  );
}

export default App;
