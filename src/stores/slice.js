import {createSlice} from "@reduxjs/toolkit";
import {reducers} from "./reducers";
import {
  getMyProfile,
  getOtherProfile,
  getTalkList,
  LoginPost,
  putMyProfile,
} from "./async";

const initialState = {
  myProfile: {
    username: "",
    company_name: "",
    section_name: "",
    post_name: "",
  },
  otherProfile: {
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
  talkList: {
    id: [],
    username: [],
    company_name: [],
  },
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
    builder.addCase(getMyProfile.fulfilled, (state, action) => {
      const name = action.payload.username;
      const company = action.payload.company_name;
      const section = action.payload.section_name;
      const post = action.payload.post_name;
      state.myProfile.username = name;
      state.myProfile.company_name = company;
      state.myProfile.section_name = section;
      state.myProfile.post_name = post;
    });
    builder.addCase(putMyProfile.fulfilled, (state, action) => {
      console.log(state.myProfile);
      console.log(action.payload);
    });
    builder.addCase(getTalkList.fulfilled, (state, action) => {
      const userObject = Object.values(action.payload);
      const userIdData = userObject.map((obj) => obj.id);
      const userNameData = userObject.map((obj) => obj.username);
      const userCompanyData = userObject.map((obj) => obj.company_name);
      console.log(userIdData);
      console.log(userNameData);
      console.log(userCompanyData);
      state.talkList.id = userIdData;
      state.talkList.username = userNameData;
      state.talkList.company_name = userCompanyData;
    });
    builder.addCase(getOtherProfile.fulfilled, (state, action) => {
      const name = action.payload.username;
      const company = action.payload.company_name;
      const section = action.payload.section_name;
      const post = action.payload.post_name;
      state.otherProfile.username = name;
      state.otherProfile.company_name = company;
      state.otherProfile.section_name = section;
      state.otherProfile.post_name = post;
    });
  },
});

export const loginDataSelector = (state) => state.loginInput;
export const signUpDataSelector = (state) => state.signUpInput;
export const changeProfileDataSelector = (state) => state.profileInput;
export const exampleData = (state) => state.signUpSubmit;

export const selectInput = (state) => state.users.inputValue;

export const myData = (state) => state.users.myProfile;
export const userNameSelector = (state) => state.users.talkList.username;
export const userCompanySelector = (state) => state.users.talkList.company_name;
export const userIdSelector = (state) => state.users.talkList.id;
export const otherDataSelector = (state) => state.users.otherProfile;

export const {loginInput, signUpInput, signUpSubmit, inputEvent, profileInput} =
  chatappSlice.actions;

export default chatappSlice.reducer;
