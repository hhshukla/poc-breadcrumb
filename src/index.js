import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import Breadcrumb from "./components/BreadCrumb/BreadCrumb.jsx";
// import BreadcrumbAtlkit from "./components/BreadcrumbAtlkit/BreadcrumbAtlkit.jsx";
// import BreadCrumbMui from "./components/BreadCrumbMui/BreadCrumbMui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Breadcrumb />
    {/* <BreadCrumbMui /> */}
    {/* <BreadcrumbAtlkit /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
