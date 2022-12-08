import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home, Login, NonExistentPage, Register } from './pages';

function App() {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <Routes>
      <Route
        path="login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route path="register" element={<Register />} />
      <Route element={<Layout user={user} />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NonExistentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
