import React from "react";
import { MemoryRouter } from "react-router-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Card from "./";

describe("the Paintings grid", () => {
  const painting = {
    id: 1,
    name: "Sortir du cadre",
    description: "description1",
    format: "115 x 75",
    price: 1000,
    year: 2020,
  };

  it("should display the painting's picture", () => {
    const id = painting.id;
    const name = painting.name;
    render(
      <MemoryRouter>
        <Card id={id} name={name} />
      </MemoryRouter>
    );
    expect(screen.getByAltText(name)).toBeInTheDocument();
  });

  it("should display the painting's name on hovering", () => {
    const id = painting.id;
    const name = painting.name;

    render(
      <MemoryRouter>
        <Card id={id} name={name} />
      </MemoryRouter>
    );
    expect(screen.queryByText(name)).toBeNull();

    fireEvent.mouseOver(screen.getByTestId("painting-wrapper"));

    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
