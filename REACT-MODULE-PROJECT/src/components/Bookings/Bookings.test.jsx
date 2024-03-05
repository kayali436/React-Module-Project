import { describe, it, expect } from "vitest";
import Bookings from "@/components/Bookings/Bookings";
import { render, screen } from "@testing-library/react";
describe("Bookings Component", () => {
  it("displays an error message when loading data from /error endpoint", async () => {
    
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        json: () => Promise.resolve({}),
      })
    );

    render(<Bookings />);

    
    const errorMessage = await screen.findByText(
      "Error: Error fetching data from the server"
    );
    expect(errorMessage).toBeInTheDocument();
  });
}


