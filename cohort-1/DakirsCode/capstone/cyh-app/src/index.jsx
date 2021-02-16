import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./styles/app.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const app = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    {" "}
    <App />{" "}
  </BrowserRouter>,
  app
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
