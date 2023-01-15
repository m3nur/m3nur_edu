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
import {
  createFailure,
  createStart,
  createSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./goldVaultSlice";
import {
  deleteMessageSuccess,
  getMessageFailure,
  getMessageStart,
  getMessageSuccess,
  messageFailure,
  messageStart,
  messageSuccess,
} from "./messageSlice";

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

export const createProduct = async (dispatch, product) => {
  dispatch(createStart());
  const create = toast.loading("Please wait...");
  try {
    const res = await request.post(`/products`, product, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.user?.token
        }`,
      },
    });
    dispatch(createSuccess(res.data));
    toast.update(create, {
      render: "The new product has been successfully added to the vault.",
      type: "success",
      isLoading: false,
      autoClose: 1000,
    });
  } catch (err) {
    dispatch(createFailure());
    toast.update(create, {
      render: "Something went wrong or the product already exists in the vault",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await request.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());
  const del = toast.loading("Please wait...");
  try {
    await request.delete(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.user?.token
        }`,
      },
    });
    dispatch(deleteProductSuccess(id));
    toast.update(del, {
      render: "You have successfully removed the product from the vault",
      type: "success",
      isLoading: false,
      autoClose: 1000,
    });
  } catch (err) {
    dispatch(deleteProductFailure());
    toast.update(del, {
      render: "Something went wrong!!!",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
};

export const updateProduct = async (dispatch, id, product) => {
  dispatch(updateProductStart());
  const upd = toast.loading("Please wait...");
  try {
    const res = await request.put(`/products/${id}`, product, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.user?.token
        }`,
      },
    });
    dispatch(updateProductSuccess(res.data, id));
    toast.update(upd, {
      render: "You have successfully updated the product",
      type: "success",
      isLoading: false,
      autoClose: 1000,
    });
  } catch (err) {
    dispatch(updateProductFailure());
    toast.update(upd, {
      render: "Something went wrong!!!",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
};

export const visitProduct = async (dispatch, id, product) => {
  dispatch(updateProductStart());
  try {
    const res = await request.put(`/products/visit/${id}`, product);
    dispatch(updateProductSuccess(res.data, id));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const likeProduct = async (dispatch, productID, userID) => {
  dispatch(updateProductStart());
  try {
    const res = await request.put("/products/like", {
      productID: productID,
      userID: userID,
    });
    dispatch(updateProductSuccess(res.data, productID));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const unLikeProduct = async (dispatch, productID, userID) => {
  dispatch(updateProductStart());
  try {
    const res = await request.put("/products/unlike", {
      productID: productID,
      userID: userID,
    });
    dispatch(updateProductSuccess(res.data, productID));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addMessage = async (dispatch, message) => {
  dispatch(messageStart());
  const add = toast.loading("Please wait...");
  try {
    const res = await request.post("/message", message);
    dispatch(messageSuccess(res.data));
    toast.update(add, {
      render: "Thank you for your message and for helping us get better.",
      type: "success",
      isLoading: false,
      autoClose: 2000,
    });
  } catch (err) {
    dispatch(messageFailure());
    toast.update(add, {
      render: "Something went wrong, please resend the message or email us",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
};

export const getMessages = async (dispatch) => {
  dispatch(getMessageStart());
  try {
    const res = await request.get("/message", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.user?.token
        }`,
      },
    });
    dispatch(getMessageSuccess(res.data));
  } catch (err) {
    dispatch(getMessageFailure());
  }
};

export const deleteMessage = async (dispatch, id) => {
  dispatch(deleteProductStart());
  const delMessage = toast.loading("Please wait...");
  try {
    await request.delete(`/message/${id}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.user?.token
        }`,
      },
    });
    dispatch(deleteMessageSuccess(id));
    toast.update(delMessage, {
      render: "You have successfully deleted the message",
      type: "success",
      isLoading: false,
      autoClose: 1000,
    });
  } catch (err) {
    dispatch(deleteProductFailure());
    toast.update(delMessage, {
      render: "Something went wrong!!!",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
};
