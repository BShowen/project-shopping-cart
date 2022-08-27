import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { getProductsById } from "../utils/fakeStoreAPIWrapper";

/*
  This is a hook that returns a component and and updater function. 
 */
export function useCart() {
  const [cartInventory, setCartInventory] = useState({});
  const [products, setProducts] = useState([]);

  // Whenever the cartInventory is updated (through updateCart()) then we need
  // to update the state of the cart.
  useEffect(() => {
    getProductsById(cartInventory || {}).then((results) => {
      setProducts(results);
    });
  }, [cartInventory]);

  // The component returned from this function.
  const component = () => (
    <div className="border border-2 border-primary">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );

  // The function that updates the cart.
  const dispatchToCart = ({ id, type }) => {
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
  };

  return [component, dispatchToCart];
}
