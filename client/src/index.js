import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "store/store";
import { BrowserRouter } from "react-router-dom";
import { ReactComponent as Sprite } from "assets/sprite.svg";
import "./styles/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Sprite />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
