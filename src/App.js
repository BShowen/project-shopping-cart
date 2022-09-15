import { Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./routes/Home";
import { NavBar } from "./components/NavBar";
import { ProductPage } from "./routes/ProductPage";
import { Cart } from "./components/Cart";
import { useCartState } from "./components/useCartState";
import { Footer } from "./components/Footer.js";
import "./App.css";
export function App() {
  // A hook for handling the cart logic.
  // The cart display is delegated to the Cart component.
  const { dispatchToCart, toggleCart, count, isOpen, products, cartInventory } =
    useCartState();

  return (
    <HashRouter>
      <div id="page-container" className="d-flex flex-column overflow-scroll">
        <Cart
          isOpen={isOpen}
          products={products}
          dispatchToCart={dispatchToCart}
          cartInventory={cartInventory}
          toggleCart={toggleCart}
        />
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
    </HashRouter>
  );
}
