import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API_HOST = "http://localhost:8000";

// csrfトークンの取得
export const fetchCsrfToken = async () => {
  try {
    const response = await axios.get(`${API_HOST}/csrf/`, {
      credentials: "include",
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const LoginPost = createAsyncThunk(
  "chatapp/LoginPost",
  async (_, thunkAPI) => {
    const catchState = thunkAPI.getState().users;
    const {login} = catchState;
    const loginList = login;
    const res = await axios.post(`${API_HOST}/rest-auth/login/`, loginList);
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
      `${API_HOST}/rest-auth/registration/`,
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
    const res = await axios({
      method: "get",
      url: `http://localhost:8000/api/myProfile/${data.user.id}/`,
      headers: {
        Authorization: data.JWTToken,
      },
      withCredentials: true,
    });
    return res.data;
  }
);
