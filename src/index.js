import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={
            <div className="container text-center pt-5">
              <h3>That url does not exist.</h3>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
