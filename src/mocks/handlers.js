import { rest } from "msw";

const DATA = [
  {
    id: 0,
    title: "Hoodie",
    price: 34.99,
  },
  {
    id: 1,
    title: "T-Shirt",
    price: 19.99,
  },
  {
    id: 2,
    title: "Shorts",
    price: 24.99,
  },
  {
    id: 3,
    title: "Blue Jeans",
    price: 33.99,
  },
  {
    id: 4,
    title: "Ball Cap",
    price: 14.99,
  },
  {
    id: 5,
    title: "Shoes",
    price: 34.99,
  },
];

export const handlers = [
  rest.get("https://fakestoreapi.com/products/:productId", (req, res, ctx) => {
    const { productId } = req.params;
    return res(ctx.status(200), ctx.json(DATA[productId]));
  }),
  rest.get("https://fakestoreapi.com/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(DATA));
  }),
  rest.get(
    "https://fakestoreapi.com/products/category/men's%20clothing",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            title: "Mens T-Shirt",
            price: 19.99,
          },
        ])
      );
    }
  ),
  rest.get(
    "https://fakestoreapi.com/products/category/women's%20clothing",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            title: "Womens Dress",
            price: 19.99,
          },
        ])
      );
    }
  ),
];
