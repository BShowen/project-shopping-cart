const ERROR_MESSAGE =
  "Something went wrong. Please check your internet connection.";

export async function getProducts(filter = { category: "" }) {
  const { category: dirtyFilter } = filter;

  let sanitizedFilter;
  switch (dirtyFilter) {
    case "mens":
      sanitizedFilter = "/category/men's%20clothing";
      break;
    case "womens":
      sanitizedFilter = "/category/women's%20clothing";
      break;
    case "jewelry":
      sanitizedFilter = "/category/jewelery"; //API has this word misspelled.
      break;
    case "":
      sanitizedFilter = "";
      break;
    default:
      sanitizedFilter = `/category/${dirtyFilter}`;
  }

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products${sanitizedFilter}`
    );
    return response.json();
  } catch (err) {
    throw new Error(ERROR_MESSAGE);
  }
}

// products is an object where the key and value are integers.
// the key is the product id and the value is the product count.
export async function getProductsById(products) {
  const results = await Promise.all(
    Object.keys(products).map(async (productId) => await _getProduct(productId))
  );
  return results;
}

async function _getProduct(productId) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const json = await response.json();
  return json;
}
