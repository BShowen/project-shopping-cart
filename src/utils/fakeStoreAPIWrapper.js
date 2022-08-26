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

  const response = await fetch(
    `https://fakestoreapi.com/products${sanitizedFilter}`
  );

  return response.json();
}
