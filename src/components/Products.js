import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../utils/fakeStoreAPIWrapper";

export function Products({ category }) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    getProducts({ category }).then((data) => setInventory(data));
  }, [category]);

  let pageContent;
  if (inventory.length === 0) {
    pageContent = <p>Loading</p>;
  } else {
    pageContent = inventory.map((item) => {
      return (
        <div
          className="col col-12 col-sm-6 col-md-6 col-lg-5 col-xl-4 col-xxl-4 align-items-stretch mt-4"
          key={item.id}
        >
          <ProductCard {...item} />
        </div>
      );
    });
  }

  return <div className="row justify-content-start">{pageContent}</div>;
}
