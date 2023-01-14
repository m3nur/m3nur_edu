import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  isFetching: false,
  error: false,
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    messageStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    messageSuccess: (state, action) => {
      state.isFetching = false;
      state.messages.push(action.payload);
      state.error = false;
    },
    messageFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { messageStart, messageSuccess, messageFailure } =
  messageSlice.actions;
export default messageSlice.reducer;
