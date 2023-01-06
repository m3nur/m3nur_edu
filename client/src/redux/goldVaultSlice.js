import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goldVault: [],
  isFetching: false,
  error: false,
};

export const goldVaultSlice = createSlice({
  name: "goldVault",
  initialState,
  reducers: {
    createStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createSuccess: (state, action) => {
      state.isFetching = false;
      state.goldVault.push(action.payload);
      state.error = false;
    },
    createFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = true;
      state.goldVault = action.payload;
      state.error = false;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  createStart,
  createSuccess,
  createFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
} = goldVaultSlice.actions;
export default goldVaultSlice.reducer;
