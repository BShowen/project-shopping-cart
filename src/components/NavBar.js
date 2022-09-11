import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function NavBar({ toggleCart, cartCount }) {
  return (
    <nav className="navbar sticky-top bg-dark text-light py-1">
      <div className="container">
        <ul className="navbar-nav w-100 d-flex flex-row align-items-center">
          <li className="nav-item me-auto">
            <NavLink className="navbar-brand me-auto text-light" to="/">
              Fake Store
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mx-1 p-2 nav-link text-light" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="mx-1 p-2 nav-link text-light" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            {/* This is NOT a NavLink. I don't want an empty href value */}
            <div
              role="button"
              id="cart-icon"
              className="mx-1 p-2 nav-link position-relative border rounded-circle bg-light text-dark border-dark"
              onClick={toggleCart}
            >
              <AiOutlineShoppingCart size="1.5rem" />
              {cartCount > 0 && (
                <div
                  data-testid="cart-count"
                  className={
                    "d-flex justify-content-center align-items-center border border-3 border-primary rounded-circle bg-primary text-light position-absolute"
                  }
                  style={{ height: "20px", width: "20px", right: "-5px" }}
                >
                  <p className="m-0">{cartCount}</p>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
