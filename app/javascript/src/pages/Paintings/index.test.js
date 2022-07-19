import React from "react";
import { MemoryRouter } from "react-router-dom";
import { waitFor, screen, render } from "@testing-library/react";
import Paintings from "./";
import server from "../../mocks/server";

describe("the Paintings page", () => {
  it("should display quote", async () => {
    render(
      <MemoryRouter>
        <Paintings />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(
        screen.getByText(
          "Si la toile émeut, plaît, interroge, dérange, et si de surcroît parfois elle peut véhiculer une idée, témoigner, secouer des idées, alors le peintre peut être satisfait."
        )
      ).toBeInTheDocument();
    });
  });

  it("should display title", async () => {
    render(
      <MemoryRouter>
        <Paintings />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText("Tous les tableaux")).toBeInTheDocument();
    });
  });

  it("should display the right number of paintings", async () => {
    render(
      <MemoryRouter>
        <Paintings />
      </MemoryRouter>
    );
    await waitFor(() => {
      const paintings = document.getElementsByClassName("sc-iBkjds bZGVhU");
      expect(paintings.length).toBe(3);
    });
  });
});
