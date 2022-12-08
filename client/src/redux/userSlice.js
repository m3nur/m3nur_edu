import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  user: null,
  isFetching: false,
  error: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
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
