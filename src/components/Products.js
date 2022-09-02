import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../utils/fakeStoreAPIWrapper";
import { Loader } from "./Loader";
export function Products({ category, dispatchToCart }) {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // await getProducts() so that ALL imgs are loaded before painting the DOM
    async function load() {
      setLoading(true);
      await getProducts({ category })
        .then((data) => setInventory(data))
        .catch((error) => {
          setErrorMessage(error.message);
        });
      setLoading(false);
    }
    load();
  }, [category]);

  return (
    <>
      <Loader isLoading={loading} />
      <div className="row justify-content-start">
        {errorMessage && (
          <div className="d-flex justify-content-center pt-5">
            <h5>{errorMessage}</h5>
          </div>
        )}
        {inventory.map((item) => (
          <div
            className="col col-12 col-sm-6 col-lg-5 col-xl-4 align-items-stretch mt-4"
            key={item.id}
          >
            <ProductCard {...item} dispatchToCart={dispatchToCart} />
          </div>
        ))}
      </div>
    </>
  );
}
