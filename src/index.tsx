import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.less";
import reportWebVitals from "./reportWebVitals";
import { AppProviders } from "context";
// DevTools
import { loadServer } from "jira-dev-tool";

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        {/* <DevTools /> */}
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
