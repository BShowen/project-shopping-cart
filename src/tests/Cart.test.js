import {
  render,
  renderHook,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useCart } from "../components/useCart";
import { ProductPage } from "../routes/ProductPage";
import { NavBar } from "../components/NavBar";

describe("The cart component", () => {
  it("has a zero dollar total on initial render", () => {
    const { result } = renderHook(() => {
      // const [cart] = useCart();
      // return [cart];
      return useCart();
    });
    const [cart] = result.current;
    render(cart);
    expect(screen.getByRole("heading", { name: /Total/i }).textContent).toEqual(
      "Total: $0.00"
    );
  });
});
