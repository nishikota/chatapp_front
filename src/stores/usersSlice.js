import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

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
};

export const examplePost = createAsyncThunk(
  "user/examplePost",
  async (_, thunkAPI) => {
    const catchState = thunkAPI.getState().users;
    const {login} = catchState;
    console.log(login);
    const list = login;
    console.log(list);
    const res = await axios.post("http://localhost:3001/api", list);
    console.log("res", res);
    return res.data;
  }
);

export const SetUserData = (data) => {
  // stateに入れる
};

export const LoginPost = createAsyncThunk(
  "user/LoginPost",
  async (_, thunkAPI) => {
    const catchState = thunkAPI.getState().users;
    const {login} = catchState;
    const loginList = login;
    console.log("loginlist:", loginList);
    const res = await axios.post(
      "http://localhost:8000/rest-auth/login/",
      loginList
    );
    console.log(res);
    return res.data;
  }
);

export const SignUpPost = createAsyncThunk(
  "user/SignUpPost",
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

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginInput: (state, action) => {
      console.log("loginaction:", action.payload);
      const [name, value] = action.payload;
      if (name === "email") {
        state.login.email = value;
      } else if (name === "password") {
        state.login.password = value;
      }
    },
    signUpInput: (state, action) => {
      console.log("action:", action.payload);
      const [name, value] = action.payload;
      if (name === "username") {
        state.signup.username = value;
      } else if (name === "email") {
        state.signup.email = value;
      } else if (name === "password1") {
        state.signup.password1 = value;
      } else if (name === "password2") {
        state.signup.password2 = value;
      } else if (name === "company_name") {
        state.signup.company_name = value;
      } else if (name === "section_name") {
        state.signup.section_name = value;
      } else if (name === "post_name") {
        state.signup.post_name = value;
      }
    },
    signUpSubmit: (state) => {
      state.lists = state.signup;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(examplePost.fulfilled, (state, action) => {
      return {
        ...state,
        lists: action.payload,
      };
    });
    builder.addCase(LoginPost.fulfilled, (state, action) => {
      return {
        ...state,
        token: action.payload.token,
      };
    });
  },
});

export const loginDataSelector = (state) => state.loginInput;
export const signUpDataSelector = (state) => state.signUpInput;
export const exampleData = (state) => state.lists;

export const {loginInput, signUpInput, signUpSubmit} = usersSlice.actions;

export default usersSlice.reducer;
