import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goldVault: [],
  isFetching: false,
  error: false,
  success: false,
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
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.goldVault.splice(
        state.goldVault.findIndex((item) => item._id === action.payload),
        1
      );
      state.error = false;
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.success = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.goldVault[
        state.goldVault.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.goldVault;
      state.error = false;
      state.success = true;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
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
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
} = goldVaultSlice.actions;
export default goldVaultSlice.reducer;
