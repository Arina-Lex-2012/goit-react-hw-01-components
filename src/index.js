import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App/App"; //где рендерится разметка

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
