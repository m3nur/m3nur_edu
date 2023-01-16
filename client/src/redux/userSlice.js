import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  isFetching: false,
  error: false,
  well: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.well = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = false;
      state.well = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.well = false;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.well = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = false;
      state.well = true;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.well = false;
    },
    setLogout: (state) => {
      state.user = null;
      state.well = false;
    },
  },
});

export const {
  setMode,
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  setLogout,
} = authSlice.actions;
export default authSlice.reducer;
