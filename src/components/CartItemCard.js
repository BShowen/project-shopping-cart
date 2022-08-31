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
    <div className="row justify-content-center my-1 p-1 bg-light mx-2">
      <div className="col-4 d-flex">
        <img
          src={productImage.src}
          alt="placeholder"
          style={{ width: "auto", height: "8rem" }}
        />
      </div>

      <div className="col-5">
        <div className="row d-flex flex-column justify-content-evenly h-100">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h6>{title.substring(0, 14).trim() + "..."}</h6>
          </div>

          <div className="col-12 d-flex justify-content-center align-items-center">
            <h6 className="p-0 m-0">
              $
              {(Number.parseFloat(price) * Number.parseFloat(quantity)).toFixed(
                2
              )}
            </h6>
          </div>

          <div className="col-12 d-flex justify-content-evenly align-items-center">
            <button
              onClick={() => dispatchToCart({ id, type: "decrement" })}
              type="button"
              className="btn btn-secondary btn-sm"
            >
              -
            </button>
            <h2 className="mx-1 my-0">{Number.parseFloat(quantity)}</h2>
            <button
              onClick={() => dispatchToCart({ id, type: "increment" })}
              type="button"
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
