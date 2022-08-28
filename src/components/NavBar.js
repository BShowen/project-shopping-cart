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
        <div className="mx-1 p-2 nav-link dropdown">
          <NavLink
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            to="#"
            role="button"
            aria-expanded="false"
          >
            Products
          </NavLink>
          <div className="dropdown-menu">
            <div className="dropdown-item p-0">
              <NavLink
                className="text-decoration-none d-block px-3 py-1"
                to="/products"
              >
                All
              </NavLink>
            </div>
            <div className="dropdown-item p-0">
              <NavLink
                className="text-decoration-none d-block px-3 py-1"
                to="/products?category=mens"
              >
                Mens
              </NavLink>
            </div>
            <div className="dropdown-item p-0">
              <NavLink
                className="text-decoration-none d-block px-3 py-1"
                to="/products?category=womens"
              >
                Womens
              </NavLink>
            </div>
            <div className="dropdown-item p-0">
              <NavLink
                className="text-decoration-none d-block px-3 py-1"
                to="/products?category=electronics"
              >
                Electronics
              </NavLink>
            </div>
            <div className="dropdown-item p-0">
              <NavLink
                className="text-decoration-none d-block px-3 py-1"
                to="/products?category=jewelry"
              >
                Jewelry
              </NavLink>
            </div>
          </div>
        </div>
        <NavLink className="mx-1 p-2 nav-link" to="#" onClick={toggleCart}>
          Cart
        </NavLink>
      </div>
    </nav>
  );
}
