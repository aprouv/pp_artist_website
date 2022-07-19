import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { waitFor, screen, render, fireEvent } from "@testing-library/react";
import Painting from "./";
import server from "../../mocks/server";

describe("the Painting show", () => {
  it("should display the painting's picture", async () => {
    render(
      <MemoryRouter initialEntries={["/tableaux/1"]}>
        <Routes>
          <Route path="tableaux/:id" element={<Painting />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByAltText("Sortir du cadre")).toBeInTheDocument();
    });
  });

  it("should display the painting's details", async () => {
    render(
      <MemoryRouter initialEntries={["/tableaux/1"]}>
        <Routes>
          <Route path="tableaux/:id" element={<Painting />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText("Sortir du cadre")).toBeInTheDocument();
      expect(screen.getByText("115 x 75 cm")).toBeInTheDocument();
      expect(screen.getByText("1000 €")).toBeInTheDocument();
      expect(screen.queryByText("description1")).toBeNull();

      fireEvent.click(screen.getByTestId("description-button"));

      expect(screen.getByText("description1")).toBeInTheDocument();
    });
  });
});
