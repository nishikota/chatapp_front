import {configureStore} from "@reduxjs/toolkit";
import chatappReducer from "./slice";

export const store = configureStore({
  reducer: {
    chatapp: chatappReducer,
  },
});
