import React from "react";
import ReactDOM from "react-dom";

import LoginProvider from "./store/LoginProvider";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <LoginProvider>
    <App />
  </LoginProvider>,
  document.getElementById("root")
);
