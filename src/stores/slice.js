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
    const res = await axios.post(
      "http://localhost:8000/rest-auth/registration/",
      signUpList
    );
    return res.data;
  }
);

export const getMyProfile = createAsyncThunk(
  "chatapp/getMyProfile",
  async (_, thunkAPI) => {
    const catchState = thunkAPI.getState().users;
    const {userData} = catchState;
    const data = userData;
    console.log("data", data);
    // const res = await axios({
    //   method: "get",
    //   // url: `http://localhost:8000/api/myProfile/${data.user.id}/`,
    //   url: `http://localhost:8000/api/myProfile/`,
    //   headers: {
    //     Authorization: `${data.token}`,
    //   },
    const res = await axios.get(`http://localhost:8000/api/myProfile/`, {
      // headers: {
      //   // Authorization: `${data.token}`,
      //   Token: "pzmJohlrIUS2xPLRbOnIXWbAIpuJoDXIdTu7",
      // },
    });
    // });
    console.log(res.data);
    return res.data;
  }
);

export const chatappSlice = createSlice({
  name: "chatapp",
  initialState,
  reducers: reducers,
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
