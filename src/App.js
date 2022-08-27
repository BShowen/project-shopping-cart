import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { NavBar } from "./components/NavBar";
import { ProductPage } from "./routes/ProductPage";
import { useCart } from "./routes/useCart.js";
export function App() {
  // Cart is a component.
  // dispatch adds an item to the cart and update the Cart component.
  const [cart, dispatchToCart] = useCart();
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="products"
            element={<ProductPage dispatchToCart={dispatchToCart} />}
          />
          <Route path="cart" element={cart} />
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
  );
}
