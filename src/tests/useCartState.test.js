import { renderHook, act, waitFor } from "@testing-library/react";
import { useCartState } from "../components/useCartState";

describe("The cart component", () => {
  it("has no items in the cart when initially rendered", () => {
    const { result } = renderHook(() => useCartState());

    expect(result.current.count().current).toBe(0);
  });

  it("can have items added to the cart", async () => {
    const { result } = renderHook(() => useCartState());

    await act(async () => {
      await result.current.dispatchToCart({ id: 2, type: "increment" });
    });

    await waitFor(() => expect(result.current.products.length).toBe(1));

    await act(async () => {
      await result.current.dispatchToCart({ id: 1, type: "increment" });
    });

    await waitFor(() => expect(result.current.products.length).toBe(2));
  });

  it("should have an error", async () => {
    const { result } = renderHook(() => useCartState());

    await act(async () => {
      result.current.dispatchToCart({ id: 0, type: "increment" });
    });
  });
});
