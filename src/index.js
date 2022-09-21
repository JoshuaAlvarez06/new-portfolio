import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_PUBLIC_GOOGLE_ANALYTICS,
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
