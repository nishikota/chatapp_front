import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {reducers} from "./reducers";

const initialState = {
  userData: {
    token: "",
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

export const LoginPost = createAsyncThunk(
  "chatapp/LoginPost",
  async (_, thunkAPI) => {
    const catchState = thunkAPI.getState().users;
    const {login} = catchState;
    const loginList = login;
    const res = await axios.post(
      "http://localhost:8000/rest-auth/login/",
      loginList
    );
    return res.data;
  }
);

export const SignUpPost = createAsyncThunk(
  "chatapp/SignUpPost",
  async (_, thunkAPI) => {
    const catchState = thunkAPI.getState().users;
    const {signup} = catchState;
    const signUpList = signup;
    console.log("list:", signUpList);
    const res = await axios.post(
      "http://localhost:8000/rest-auth/registration/",
      signUpList
    );
    return res.data;
  }
);

export const chatappSlice = createSlice({
  name: "chatapp",
  initialState,
  reducers: reducers,
  // {
  //   loginInput: (state, action) => {
  //     const [name, value] = action.payload;
  //     if (name === "email") {
  //       state.login.email = value;
  //     } else if (name === "password") {
  //       state.login.password = value;
  //     }
  //   },
  //   signUpInput: (state, action) => {
  //     const [name, value] = action.payload;
  //     if (name === "username") {
  //       state.signup.username = value;
  //     } else if (name === "email") {
  //       state.signup.email = value;
  //     } else if (name === "password1") {
  //       state.signup.password1 = value;
  //     } else if (name === "password2") {
  //       state.signup.password2 = value;
  //     } else if (name === "company_name") {
  //       state.signup.company_name = value;
  //     } else if (name === "section_name") {
  //       state.signup.section_name = value;
  //     } else if (name === "post_name") {
  //       state.signup.post_name = value;
  //     }
  //   },
  //   signUpSubmit: (state) => {
  //     state.lists = state.signup;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(LoginPost.fulfilled, (state, action) => {
      const token = action.payload.token;
      const id = action.payload.user.pk;
      const email = action.payload.user.email;
      state.userData.token = token;
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
