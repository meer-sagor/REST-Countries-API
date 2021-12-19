import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CombineContext from "./Components/CombileContext/CombineContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CombineContext>
        <App />
      </CombineContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
