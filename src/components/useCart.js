import { useEffect, useState, useRef } from "react";
import { CartItemCard } from "./CartItemCard";
import { getProductsById } from "../utils/fakeStoreAPIWrapper";
import { isEqual } from "lodash";
import "./useCart.css";

/*
  This is a hook that returns a component and and updater function. 
 */
export function useCart() {
  // cartInventory is an object where the key is the productIt and the value is
  // the product quantity.
  // Example: { 1: 1, 3: 2 }

  const [cartInventory, setCartInventory] = useState({});

  // products is the JSON returned from the fakeStore API, which is an array of
  // objects. Example: [{id: 1, title: "shirt"}, {id: 2, title: "shorts"}]
  const [products, setProducts] = useState([]);

  const prevCart = useRef({});

  // Whenever the cartInventory is updated (through dispatch()) then we need
  // to update the state of the cart.
  useEffect(() => {
    // Check the previous cart inventory. The only time we need to update the
    // prevCart ref, or call getProductsById is when an item has been added
    // or removed from the cart. In other words, we do not need to hit the
    // fakeStore API if the user is simply updating the quantity of items in
    // their cart.
    const prevState = Object.keys(prevCart.current).sort((a, b) => a - b);
    const newState = Object.keys(cartInventory).sort((a, b) => a - b);
    // If previous and current state are the same, then the use has simply
    // updated the quantity of items. We stop execution of this function here.
    if (isEqual(prevState, newState)) return;
    prevCart.current = cartInventory;

    getProductsById(cartInventory || {}).then((results) => {
      setProducts(results);
    });
  }, [cartInventory]);

  const [isOpen, setIsOpen] = useState(false);

  const className = `container m-0 py-5 d-flex flex-column align-items-center ${
    isOpen ? "open" : ""
  }`;
  // The component returned from this function.
  const component = (
    <div className={className} id="cart-container">
      <h1>Shopping cart</h1>
      <div className="mb-auto w-100">
        {products.map((product) => {
          return (
            <CartItemCard
              key={product.id}
              {...product}
              dispatchToCart={dispatchToCart}
              quantity={cartInventory[product.id] || 0}
            />
          );
        })}
      </div>

      <h2>
        Total: $
        {products
          .reduce((total, product) => {
            return total + product.price * cartInventory[product.id];
          }, 0)
          .toFixed(2)}
      </h2>

      <div className="d-flex flex-column p-2 w-100">
        <button className="btn btn-primary my-1" onClick={() => {}}>
          Checkout
        </button>
        <button className="btn btn-primary my-1" onClick={toggleCart}>
          Close
        </button>
      </div>
    </div>
  );

  // The function that updates the cart.
  function dispatchToCart({ id, type }) {
    const newCartInventory = { ...cartInventory };

    // eslint-disable-next-line default-case
    switch (type) {
      case "increment":
        newCartInventory[id] = ++newCartInventory[id] || 1;
        break;
      case "decrement":
        newCartInventory[id] = --newCartInventory[id] || 0;
        if (newCartInventory[id] === 0) delete newCartInventory[id];
        break;
      case "remove":
        delete newCartInventory[id];
        break;
    }
    setCartInventory(newCartInventory);
  }

  function toggleCart() {
    document.body.style = `${isOpen ? "" : "overflow: hidden"}`;
    setIsOpen(!isOpen);
  }

  return [component, dispatchToCart, toggleCart];
}
