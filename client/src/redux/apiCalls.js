import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  setLogout,
} from "./userSlice";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:6001/";

const request = axios.create({
  baseURL: BASE_URL,
});

export const loginU = async (dispatch, user) => {
  dispatch(loginStart());
  const login = toast.loading("Please wait...");
  try {
    const res = await request.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    toast.update(login, {
      render: "You have successfully logged into your account",
      type: "success",
      isLoading: false,
      autoClose: 1000,
    });
  } catch (err) {
    dispatch(loginFailure());
    toast.update(login, {
      render: "Wrong password or email address",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
};

export const registerU = async (dispatch, user) => {
  dispatch(registerStart());
  const register = toast.loading("Please wait...");
  try {
    const res = await request.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    toast.update(register, {
      render: "You have successfully created an account",
      type: "success",
      isLoading: false,
      autoClose: 1000,
    });
  } catch (err) {
    dispatch(registerFailure());
    toast.update(register, {
      render: "Something went wrong or the user already exists!",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
};

export const logout = async (dispatch) => {
  dispatch(setLogout());
};
