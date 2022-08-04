import React from "react";
import { screen, render } from "@testing-library/react";
import Biography from "./";

describe("the Biography page", () => {
  it("should display the biography text", () => {
    render(<Biography />);
    expect(screen.getByText(/Après 44 ans passés à Reims/)).toBeInTheDocument();
    expect(screen.getByText(/Une journée sans peindre/)).toBeInTheDocument();
  });

  it("should display the artist's photo", () => {
    render(<Biography />);
    expect(screen.getByAltText("Patricia Prouvost")).toBeInTheDocument();
  });
});
