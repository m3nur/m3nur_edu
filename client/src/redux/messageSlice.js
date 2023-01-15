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
    getMessageStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMessageSuccess: (state, action) => {
      state.isFetching = true;
      state.messages = action.payload;
      state.error = false;
    },
    getMessageFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteMessageStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteMessageSuccess: (state, action) => {
      state.isFetching = false;
      state.messages.splice(
        state.messages.findIndex((item) => item._id === action.payload),
        1
      );
      state.error = false;
    },
    deleteMessageFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  messageStart,
  messageSuccess,
  messageFailure,
  getMessageStart,
  getMessageSuccess,
  getMessageFailure,
  deleteMessageStart,
  deleteMessageSuccess,
  deleteMessageFailure,
} = messageSlice.actions;
export default messageSlice.reducer;
