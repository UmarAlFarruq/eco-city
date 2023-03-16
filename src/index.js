import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading";
import "./index.css";
import Root from "./root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loading/>} >
      <Root />
    </Suspense>
  </BrowserRouter>
);
