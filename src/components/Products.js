import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../utils/fakeStoreAPIWrapper";
import { Loader } from "./Loader";
export function Products({ category, dispatchToCart }) {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // await getProducts() so that ALL imgs are loaded before painting the DOM
    async function load() {
      setLoading(true);
      await getProducts({ category }).then((data) => setInventory(data));
      setLoading(false);
    }
    load();
  }, [category]);

  return (
    <>
      <Loader isLoading={loading} />
      <div className="row justify-content-start">
        {inventory.map((item) => (
          <div
            className="col col-12 col-sm-6 col-md-6 col-lg-5 col-xl-4 col-xxl-4 align-items-stretch mt-4"
            key={item.id}
          >
            <ProductCard {...item} dispatchToCart={dispatchToCart} />
          </div>
        ))}
      </div>
    </>
  );
}
