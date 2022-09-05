import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Home } from "../routes/Home";

describe("Home component", () => {
  it("Renders a heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Big Dog Merch/i }).textContent
    ).toMatch(/Big Dog Merch/i);
  });
});
