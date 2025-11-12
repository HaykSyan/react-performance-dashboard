import { vi, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ReportsToolbar } from "../components/ReportsToolbar";

describe("Reports Tool Box handlers", () => {
  test("updates search input", () => {
    const handleSearch = vi.fn();
    const handleToggle = vi.fn();

    render(
      <ReportsToolbar
        search=""
        onSearchChange={handleSearch}
        sortAsc={true}
        onToggleSort={handleToggle}
      />
    );

    const input = screen.getByPlaceholderText("Search reports...");
    fireEvent.change(input, { target: { value: "hello" } });

    expect(handleSearch).toHaveBeenCalled();
  });

  test("toggles sort", () => {
    const handleSearch = vi.fn();
    const handleToggle = vi.fn();

    render(
      <ReportsToolbar
        search=""
        onSearchChange={handleSearch}
        sortAsc={true}
        onToggleSort={handleToggle}
      />
    );

    const button = screen.getByTestId("sort-toggler");
    fireEvent.click(button);

    expect(handleToggle).toHaveBeenCalled();
  });
});
