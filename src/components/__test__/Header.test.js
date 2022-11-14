
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// Components
import Header from '../Header'


// Test Header component
describe("Test 1: Header Component", () => {
    it("Renders Header with title and links", () => {
        render(<Header />);
        const h1 = screen.getByText('Porsche')
        expect(h1).toBeInTheDocument()
          
  });
});