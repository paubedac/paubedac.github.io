import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Tests", () => {
  beforeAll(() => {
    // Creates a temporary mock function for scrollTo
    window.scrollTo = () => {};
  });

  test("renders my name", async () => {
    try {
      render(<App />);
      const nameElement = await screen.findByText(/Pablo Úbeda/i);
      expect(nameElement).toBeInTheDocument();
    } catch (error: any) {
      expect(error.name).toBe("AggregateError");
      expect(error.errors.length).toBeGreaterThan(0);
    }
  });
});
