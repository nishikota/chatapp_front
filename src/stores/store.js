import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice";
// import {createBrowserHistory} from "history";
// import {connectRouter, routerMiddleware} from "connected-react-router";
// import {applyMiddleware, compose, createStore} from "redux";
// import thunk from "redux-thunk";
// import {useResolvedPath} from "react-router";

// export const history = createBrowserHistory();

// const createRootReducer = (history) =>
//   combineReducers({
//     router: connectRouter(history),
//     users: userReducer,
//   });

// export const store = function configureStore(preloadedState) {
//   const store = createStore(
//     createRootReducer(history),
//     preloadedState,
//     compose(applyMiddleware(routerMiddleware(history), thunk))
//   );
//   return store;
// };

const reducer = {
  users: userReducer,
};
export const store = configureStore({
  reducer,
});
