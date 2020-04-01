import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./test/serviceWorker";

import "./style/index.css";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
