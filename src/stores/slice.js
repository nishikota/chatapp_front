import {createSlice} from "@reduxjs/toolkit";
import {reducers} from "./reducers";
import {LoginPost} from "./async";

const initialState = {
  userData: {
    JWTToken: "",
    user: {
      email: "",
      id: "",
    },
  },
  lists: {},
  login: {
    email: "",
    password: "",
  },
  signup: {
    username: "",
    email: "",
    password1: "",
    password2: "",
    company_name: "",
    section_name: "",
    post_name: "",
  },
  inputValue: "",
};

export const chatappSlice = createSlice({
  name: "chatapp",
  initialState,
  reducers: reducers,
  extraReducers: (builder) => {
    builder.addCase(LoginPost.fulfilled, (state, action) => {
      const token = action.payload.token;
      const id = action.payload.user.pk;
      const email = action.payload.user.email;
      state.userData.JWTToken = token;
      state.userData.user.id = id;
      state.userData.user.email = email;
    });
  },
});

export const loginDataSelector = (state) => state.loginInput;
export const signUpDataSelector = (state) => state.signUpInput;
export const exampleData = (state) => state.lists;

export const selectInput = (state) => state.inputValue;

export const {loginInput, signUpInput, signUpSubmit, inputEvent} =
  chatappSlice.actions;

export default chatappSlice.reducer;
