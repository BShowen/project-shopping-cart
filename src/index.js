import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { NavBar } from "./components/NavBar";
import { ProductPage } from "./routes/ProductPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="cart" element={<p>Cart</p>} />
          <Route
            path="*"
            element={
              <div className="container text-center pt-5">
                <h3>That url does not exist.</h3>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
