import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API_HOST = "http://localhost:8000";
// get csrfToken
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrftoken = getCookie("csrftoken");

// csrfトークンの取得
// export const fetchCsrfToken = async () => {
//   try {
//     const response = await axios.get(`${API_HOST}/csrf/`, {
//       credentials: "include",
//     });
//     console.log("fetch response", response.data, response.data.token);
//     return response.data.token;
//   } catch (e) {
//     console.error(e);
//   }
// };

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
        Authorization: `Token ${data.JWTToken}`,
        // HTTP_X_CSRFTOKEN: csrftoken,
      },
      withCredentials: true,
    });
    return res.data;
  }
);

export const putMyProfile = createAsyncThunk(
  "chatapp/putMyProfile",
  async (_, thunkAPI) => {
    const catchState = thunkAPI.getState().users;
    const {myProfile, userData} = catchState;
    const profileList = myProfile;
    const data = userData;
    console.log("async", data, "profileList", profileList);
    if (myProfile.username === "" || myProfile.company_name === "") {
      console.log("error:NoData in username or company_name");
    } else {
      const res = await axios({
        method: "put",
        url: `${API_HOST}/api/myProfile/${data.user.id}/`,
        data: profileList,
        headers: {
          Authorization: `Token ${data.JWTToken}`,
          "X-CSRFToken": csrftoken,
          Accept: "application/json",
        },
        withCredentials: true,
      });
      console.log("asyncResponse", res.data);
      return res.data;
    }
  }
);
