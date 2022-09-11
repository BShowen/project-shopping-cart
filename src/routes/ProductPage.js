import { useSearchParams, NavLink } from "react-router-dom";
import { Products } from "../components/Products";

export function ProductPage({ dispatchToCart }) {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  return (
    <>
      <h2>Store Products</h2>
      <div className="container-fluid py-1 px-1 border rounded">
        <nav>
          <div className="row m-0">
            <CategoryButton category="all" currentCategory={category} />
            <CategoryButton category="mens" currentCategory={category} />
            <CategoryButton category="electronics" currentCategory={category} />
            <CategoryButton category="womens" currentCategory={category} />
            <CategoryButton category="jewelry" currentCategory={category} />
          </div>
        </nav>
      </div>
      <Products category={category} dispatchToCart={dispatchToCart} />
    </>
  );
}

function CategoryButton({ category, currentCategory }) {
  // Capitalize the button text
  const buttonText = category[0].toUpperCase() + category.substring(1);

  const to = category === "all" ? "" : `?category=${category}`;

  // By default, the products page shows all categories. In other words, there
  // is never ?category=all in the url. The url /products will render all
  // categories. So, when currentCategory === `an empty string` then we know
  // that we are displaying all products and therefore we want the button with
  // the text "all" to be active.
  //      For example... /products?category=mens will display all of the mens
  // products and "currentCategory" prop will be set to "mens". However /products
  // will display all the products and "currentCategory" prop will be set to ""
  const isActive =
    (currentCategory === "" && category === "all") ||
    category === currentCategory;

  const style = isActive
    ? {
        border: "1px solid #0D6EFD",
        borderRadius: "5rem",
        backgroundColor: "#0D6EFD",
        color: "white",
      }
    : {};

  return (
    <div className="col p-1" style={style}>
      <div className="d-flex justify-content-center">
        <NavLink
          className="text-decoration-none"
          to={to}
          style={{ color: "inherit" }}
        >
          {buttonText}
        </NavLink>
      </div>
    </div>
  );
}
