import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./slice";

const reducer = combineReducers({
  users: userReducer,
});

export const store = configureStore({
  reducer,
});
