import { useSearchParams } from "react-router-dom";
import { Products } from "../components/Products";

export function ProductPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  return (
    <>
      <h2>Products</h2>
      <Products category={category} />
    </>
  );
}
