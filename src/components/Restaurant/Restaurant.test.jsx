import Restaurant from "./Restaurant.jsx";
import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Restaurant", () => {
  it("renders an Orders heading", () => {
    render(<Restaurant />);
    const titleElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("checks Orders initial value is 0", () => {
    render(<Restaurant />);

    const orderElements = document.querySelectorAll('[data-testid="orders"]');
    const pizzaOrders = Array.from(orderElements).filter(
      (element) => element.textContent.trim() === "Pizza"
    );

    pizzaOrders.forEach((order) => {
      expect(order.textContent).toContain("0");
    });
  });

  test("increments number of items independently for each order", () => {
    render(<Restaurant />);

    const pizzaButton = screen.getByRole("button", { name: /add pizza/i });
    const saladButton = screen.getByRole("button", { name: /add salad/i });
    const cakeButton = screen.getByRole("button", {
      name: /add chocolate cake/i,
    });

    fireEvent.click(pizzaButton);
    fireEvent.click(pizzaButton);
    fireEvent.click(saladButton);
    fireEvent.click(cakeButton);
    fireEvent.click(cakeButton);
    fireEvent.click(cakeButton);


    expect(screen.getByText("Pizzas: 2")).toBeInTheDocument();
    expect(screen.getByText("Salad: 1")).toBeInTheDocument();
    expect(screen.getByText("Chocolate cake: 3")).toBeInTheDocument();
  });
});
