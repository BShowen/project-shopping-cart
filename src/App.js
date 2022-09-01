import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { NavBar } from "./components/NavBar";
import { ProductPage } from "./routes/ProductPage";
import { useCart } from "./components/useCart";
import { Footer } from "./components/Footer.js";
import "./App.css";
export function App() {
  // Cart is a component.
  // dispatch adds an item to the cart and update the Cart component.
  const [cart, dispatchToCart, toggleCart, count] = useCart();

  return (
    <BrowserRouter>
      <div id="page-container" className="d-flex flex-column overflow-scroll">
        {cart}
        <NavBar toggleCart={toggleCart} cartCount={count().current} />
        <div
          id="content-container"
          className="container-xl flex-grow-1 p-0 pb-5"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="products"
              element={<ProductPage dispatchToCart={dispatchToCart} />}
            />
            {/* <Route path="cart" element={cart} /> */}
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}
