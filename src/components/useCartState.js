import { useEffect, useState, useRef } from "react";
import { getProductsById } from "../utils/fakeStoreAPIWrapper";
import { isEqual } from "lodash";

/*
  This is a hook that returns a component and and updater function. 
 */
export function useCartState() {
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

    const loadProducts = async () => {
      await getProductsById(cartInventory || {}).then((results) => {
        setProducts(results);
      });
    };

    loadProducts();
  }, [cartInventory]);

  useEffect(() => {
    const clickHandler = (e) => {
      const targetId = e.target.id;
      if (targetId === "cart-container" || targetId === "cart-overlay") {
        setIsOpen(false);
        document.body.style = "";
      }
    };
    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  // The function that updates the cart.
  function dispatchToCart({ id, type }) {
    const newCartInventory = { ...cartInventory };

    // eslint-disable-next-line default-case
    switch (type) {
      case "increment":
        newCartInventory[id] = ++newCartInventory[id] || 1;
        // setCartInventory(newCartInventory);
        break;
      case "decrement":
        newCartInventory[id] = --newCartInventory[id] || 0;
        if (newCartInventory[id] === 0) delete newCartInventory[id];

        // Synchronously update the cart. There was a bug where an item was
        // removed from the cart and the cart wouldn't update until after it
        // received a response from the API - which is a long time and made the
        // UI feel slow. So now, whenever a use removes an item from the cart,
        // the state will be updated without an API call and this fixes that
        // issue.
        const updatedProducts = products.filter((product) =>
          Object.keys(newCartInventory).includes(product.id.toString())
        );
        prevCart.current = newCartInventory;
        setProducts(updatedProducts);
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

  function count() {
    const current = Object.values(cartInventory).reduce(
      (prev, current) => prev + current,
      0
    );
    return { current };
  }

  return {
    dispatchToCart,
    toggleCart,
    count,
    isOpen,
    products,
    cartInventory,
  };
}
