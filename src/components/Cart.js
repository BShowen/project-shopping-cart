import { CartItemCard } from "./CartItemCard";
import "./Cart.css";

export function Cart({
  isOpen,
  products,
  dispatchToCart,
  cartInventory,
  toggleCart,
}) {
  const total = products
    .reduce((total, product) => {
      return total + product.price * cartInventory[product.id];
    }, 0)
    .toFixed(2);

  return (
    <>
      <div
        className={`container m-0 py-5 d-flex flex-column align-items-center ${
          isOpen ? "open" : ""
        }`}
        id="cart-container"
      >
        <h1>Shopping cart</h1>
        <div className="mb-auto w-100">
          {products.map((product) => {
            return (
              <CartItemCard
                key={product.id}
                {...product}
                dispatchToCart={dispatchToCart}
                quantity={cartInventory[product.id] || 0}
              />
            );
          })}
        </div>

        <h2>Total: ${total}</h2>

        <div className="d-flex flex-column p-2 w-100">
          <button className="btn btn-primary my-1" onClick={() => {}}>
            Checkout
          </button>
          <button className="btn btn-primary my-1" onClick={toggleCart}>
            Close
          </button>
        </div>
      </div>
      <div id="cart-overlay" className={`${isOpen ? "open" : ""}`}></div>
    </>
  );
}
