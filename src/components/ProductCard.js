export function ProductCard({
  id,
  description,
  image,
  price,
  title,
  dispatchToCart,
}) {
  return (
    <div className="card h-100 overflow-hidden">
      <div className="d-flex justify-content-center my-5">
        <img
          src={image}
          alt="placeholder"
          style={{ width: "auto", height: "15rem" }}
        />
      </div>
      <div className="card-body border-top border-1 bg-light p-2 d-flex flex-column justify-content-between">
        <h5 className="card-text">{title}</h5>
        {/* <p className="card-text">{description}</p> */}
        <div>
          <p className="card-text">
            Price: <strong>${price}</strong>
          </p>

          <button
            onClick={() => dispatchToCart({ id, type: "increment" })}
            type="button"
            className="btn btn-primary w-100"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
