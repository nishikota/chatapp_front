import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
};

export const slice = createSlice({
  name: "chatapp",
  initialState,
  reducers: {
    inputEvent: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const selectInput = (state) => state.chatapp.inputValue;

export const {inputEvent} = slice.actions;

export default slice.reducer;
