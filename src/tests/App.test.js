import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/react";
import { NavBar } from "../components/NavBar.js";
import { App } from "../App.js";
import { BrowserRouter } from "react-router-dom";

describe("The Nav component", () => {
  it("displays the cart with no count icon", async () => {
    render(
      <BrowserRouter>
        <NavBar toggleCart={() => {}} cartCount={0} />
      </BrowserRouter>
    );
    const nav = screen.getByRole("navigation");
    const cartIcon = within(nav).getByRole("button");
    const cartCount = within(cartIcon).queryByTestId("cart-count");

    expect(cartCount).toBeNull();
  });

  it("displays the cart icon when items are in the cart", async () => {
    render(
      <BrowserRouter>
        <NavBar toggleCart={() => {}} cartCount={5} />
      </BrowserRouter>
    );
    const nav = screen.getByRole("navigation");
    const cartIcon = within(nav).getByRole("button");
    const cartCount = within(cartIcon).queryByTestId("cart-count");
    const count = within(cartCount).queryByText("5");

    expect(cartCount).not.toBeNull();
    expect(count).not.toBeNull();
    expect(count.textContent).toBe("5");
  });
});

describe("The app", () => {
  it("navigates to the products page", async () => {
    render(<App />);

    // assert that we are currently on the home page.
    expect(screen.getByText(/big dog merch/i)).toBeInTheDocument();

    // Navigate to the products page
    await userEvent.click(screen.getByRole("link", { name: /products/i }));

    // Make sure were not on the home page anymore.
    expect(screen.queryByText(/big dog merch/i)).not.toBeInTheDocument();

    // Check that "Store products" in on the page. This ensures we have
    // navigated properly.
    expect(
      screen.getByRole("heading", { name: /store products/i })
    ).toBeInTheDocument();
  });
});
