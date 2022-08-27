export function CartItemCard({
  id,
  description,
  image,
  price,
  title,
  dispatchToCart,
  quantity,
}) {
  const productImage = new Image("auto", "15rem");
  productImage.src = image;
  productImage.alt = "placeholder";
  productImage.style = { border: "1px solid red" };

  return (
    <div className="card h-100">
      <div className="d-flex justify-content-center my-5">
        <img
          src={productImage.src}
          alt="placeholder"
          style={{ width: "auto", height: "15rem" }}
        />
      </div>
      <div className="card-body border-top border-1 bg-light p-2 d-flex flex-column justify-content-between">
        <h5 className="card-text">{title}</h5>
        <p className="card-text">
          Price: <strong>${Number.parseFloat(price)}</strong>
          Quantity: <strong>{Number.parseFloat(quantity)}</strong>
          Total:{" "}
          <strong>
            {Number.parseFloat(price) * Number.parseFloat(quantity)}
          </strong>
        </p>
        <div className="d-flex flex-row justify-content-between">
          <button
            onClick={() => dispatchToCart({ id, type: "decrement" })}
            type="button"
            className="btn btn-primary"
          >
            -
          </button>
          <button
            onClick={() => dispatchToCart({ id, type: "increment" })}
            type="button"
            className="btn btn-primary"
          >
            +
          </button>

          <button
            onClick={() => dispatchToCart({ id, type: "remove" })}
            type="button"
            className="btn btn-primary"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}
