import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);

// ReactDOM.render(
//   <Provider store={Store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
