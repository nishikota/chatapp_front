import React from "react";
import {render} from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {store} from "./stores/store";
import {Provider} from "react-redux";
import "antd/dist/antd.css";
import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";

render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
