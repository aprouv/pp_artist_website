import React from "react";
import { MemoryRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import FilterBy from "./";

describe("the filter menu", () => {
  it("should display the right filter options when price is selected", () => {
    const option = "price";
    render(
      <MemoryRouter>
        <FilterBy option={option} />
      </MemoryRouter>
    );
    expect(screen.getByText("moins de 500€")).toBeInTheDocument();
    expect(screen.getByText("500€ - 800€")).toBeInTheDocument();
    expect(screen.getByText("plus de 1000€")).toBeInTheDocument();
  });
});
