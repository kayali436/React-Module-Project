import Search from "./Search.jsx";
import { describe, it, expect, spy } from "vitest";
import {
  render,
  fireEvent,
  screen,
  getAllByRole,
} from "@testing-library/react";

describe("Search Component", () => {
  test("renders a search input", () => {
    render(<Search />);
    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toBeInTheDocument();
  });

  it("When I type in the field", () => {
    render(<Search />);
    const inputField = screen.getByRole("searchbox");
    fireEvent.change(inputField, { target: { value: "test value" } });
    expect(inputField.value).toBe("test value");
  });


 
});
