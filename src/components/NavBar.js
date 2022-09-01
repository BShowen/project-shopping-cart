import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function NavBar({ toggleCart, cartCount }) {
  return (
    <nav className="navbar sticky-top bg-light">
      <div className="container">
        <NavLink className="navbar-brand me-auto" to="/">
          Fake Store
        </NavLink>
        <NavLink className="mx-1 p-2 nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="mx-1 p-2 nav-link" to="/products">
          Products
        </NavLink>
        {/* This is NOT a NavLink. I don't want an empty href value */}
        <div
          id="cart-icon"
          className="mx-1 p-2 nav-link position-relative border rounded-circle bg-dark text-light border-dark"
          onClick={toggleCart}
        >
          <AiOutlineShoppingCart size="1.5rem" />
          <div
            className={`d-flex justify-content-center align-items-center border border-3 border-danger rounded-circle bg-danger text-light position-absolute ${
              cartCount ? "" : "d-none"
            }`}
            style={{ height: "20px", width: "20px", right: 0 }}
          >
            {cartCount ? cartCount : ""}
          </div>
        </div>
      </div>
    </nav>
  );
}
