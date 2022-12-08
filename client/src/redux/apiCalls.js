import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  setLogout,
} from './userSlice';
import axios from 'axios';

const BASE_URL = 'http://localhost:6001/';

const publicReq = axios.create({
  baseURL: BASE_URL,
});

export const loginU = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const registerU = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    await publicReq.post('/auth/register', user);
    dispatch(registerSuccess());
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(setLogout());
};
