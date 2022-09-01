import { NavLink } from "react-router-dom";

export function NavBar({ toggleCart }) {
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
        <div id="cart-icon" className="mx-1 p-2 nav-link" onClick={toggleCart}>
          Cart
        </div>
      </div>
    </nav>
  );
}
