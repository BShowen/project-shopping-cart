import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          NavBar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
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
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
