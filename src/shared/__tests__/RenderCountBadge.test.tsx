import { render, screen } from "@testing-library/react";
import { RenderCountBadge } from "../components/RenderCountBadge";

test("should display initial render count", () => {
  render(<RenderCountBadge />);

  const badge = screen.getByText(/renders:/i);
  expect(badge).toBeInTheDocument();
  expect(badge.textContent).toMatch(/renders: 1/);
});

test("should update count when re-rendered", () => {
  const { rerender } = render(<RenderCountBadge />);
  rerender(<RenderCountBadge />);

  const badge = screen.getByText(/renders:/i);
  // After re-render, count increases to 2
  expect(badge.textContent).toMatch(/renders: 2/);
});
