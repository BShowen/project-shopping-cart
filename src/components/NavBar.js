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
        <NavLink className="mx-1 p-2 nav-link" to="#" onClick={toggleCart}>
          Cart
        </NavLink>
      </div>
    </nav>
  );
}
