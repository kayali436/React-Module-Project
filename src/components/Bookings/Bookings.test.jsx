import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Bookings from "@/components/Bookings/Bookings.jsx";

describe("Bookings Component", () => {
  //   it("displays an error message when loading data from /error endpoint", async () => {

  //     render(<Bookings />);

  //     const errorMessage = screen.findByText(
  //       "Error: Error fetching data from the server"
  //     );
  //     expect(errorMessage).toBeInTheDocument();
  //   });

  it("renders a main element", () => {
    render(<Bookings />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });

 

});
