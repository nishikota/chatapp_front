import {createSlice} from "@reduxjs/toolkit";
import {reducers} from "./reducers";
import {getMyProfile, LoginPost} from "./async";

const initialState = {
  myProfile: {
    username: "",
    company_name: "",
    section_name: "",
    post_name: "",
  },
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
      console.log("login:async");
    });
    builder.addCase(getMyProfile.fulfilled, (state, action) => {
      console.log("getMP");
      const name = action.payload.username;
      const company = action.payload.company_name;
      const section = action.payload.section_name;
      const post = action.payload.post_name;
      state.myProfile.username = name;
      state.myProfile.company_name = company;
      state.myProfile.section_name = section;
      state.myProfile.post_name = post;
      console.log(state.myProfile.username);
    });
  },
});

export const loginDataSelector = (state) => state.loginInput;
export const signUpDataSelector = (state) => state.signUpInput;
export const exampleData = (state) => state.lists;

export const selectInput = (state) => state.inputValue;

export const myData = (state) => state.myProfile;

export const {loginInput, signUpInput, signUpSubmit, inputEvent} =
  chatappSlice.actions;

export default chatappSlice.reducer;
