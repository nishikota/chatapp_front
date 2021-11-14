import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import chatappReducer from "./chatSlice";
import userReducer from "./usersSlice";

const reducer = combineReducers({
  users: userReducer,
  chatapp: chatappReducer,
});

export const store = configureStore({
  reducer,
});
