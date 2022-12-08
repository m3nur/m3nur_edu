import { useDispatch } from 'react-redux';
import { logout } from '../../redux/apiCalls';

const Home = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    logout(dispatch);
  };
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Home;
