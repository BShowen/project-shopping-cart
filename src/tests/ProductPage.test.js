import { render, screen, waitFor, act } from "@testing-library/react";
import { ProductPage } from "../routes/ProductPage";
import { BrowserRouter } from "react-router-dom";

describe("The product page", () => {
  it("Has the heading 'Products'", () => {
    const mockCallback = jest.fn(null);
    render(
      <BrowserRouter>
        <ProductPage dispatchToCart={mockCallback} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", { name: /products/i }).textContent
    ).toEqual("Products");
  });

  it("Loads all products on initial page render", async () => {
    const mockCallback = jest.fn(null);
    render(
      <BrowserRouter>
        <ProductPage dispatchToCart={mockCallback} />
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(
        screen.getAllByRole("button", { name: /add to cart/i }).length
      ).toBe(5)
    );
  });

  it("loads mens products", async () => {
    const mockCallback = jest.fn(null);
    render(
      <BrowserRouter>
        <ProductPage dispatchToCart={mockCallback} />
      </BrowserRouter>
    );

    // Find the "mens" button and click on it.
    const mensButton = screen.getByRole("link", { name: /^mens$/i });
    act(() => {
      mensButton.click();
    });

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: /mens t-shirt/i }).textContent
      ).toMatch(/Mens T-Shirt/i)
    );
  });

  it("loads womens products", async () => {
    const mockCallback = jest.fn(null);
    render(
      <BrowserRouter>
        <ProductPage dispatchToCart={mockCallback} />
      </BrowserRouter>
    );

    // Find the "womens" button and click on it.
    const mensButton = screen.getByRole("link", { name: /^womens$/i });
    act(() => {
      mensButton.click();
    });

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: /^womens dress$/i }).textContent
      ).toMatch(/Womens dress/i)
    );
  });
});
