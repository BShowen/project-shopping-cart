export function ProductCard({ description, image, price, title }) {
  return (
    <div className="card h-100">
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

          <button type="button" className="btn btn-primary w-100">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
