import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { screen, render, waitFor } from "@testing-library/react";
import Home from "./";
import Paintings from "../Paintings";
import Contact from "../Contact";
import Reviews from "../Reviews";
import Biography from "../Biography";
import PagesTemplate from "../../components/PagesTemplate";
import ReviewsTemplate from "../../components/ReviewsTemplate";
import HomeTemplate from "../../components/HomeTemplate";
import userEvent from "@testing-library/user-event";

describe("the Biography page", () => {
  it("should display the title (artist's name) and subtitle", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { name: "Patricia Prouvost" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "artiste peintre" })
    ).toBeInTheDocument();
  });

  it("should display all buttons and each button should redirect to the right page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="" element={<PagesTemplate />}>
            <Route path="tableaux" element={<p>Tableaux</p>} />
            <Route path="biographie" element={<Biography />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="" element={<ReviewsTemplate />}>
            <Route path="livredor" element={<Reviews />} />
          </Route>
          <Route exact path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    userEvent.click(screen.getByRole("link", { name: "Biographie" }));

    await waitFor(() => {
      expect(
        screen.getByText(/Après 44 ans passés à Reims/)
      ).toBeInTheDocument();
    });

    userEvent.click(screen.getByRole("link", { name: "Tableaux" }));

    await waitFor(() => {
      expect(screen.getByText(/Tableaux/)).toBeInTheDocument();
    });

    userEvent.click(screen.getByRole("link", { name: "Contact" }));

    await waitFor(() => {
      expect(
        screen.getByText(/Contactez Patricia Prouvost/)
      ).toBeInTheDocument();
    });

    userEvent.click(screen.getByRole("link", { name: "Livre d'or" }));

    await waitFor(() => {
      expect(screen.getByText(/Partagez ici publiquement/)).toBeInTheDocument();
    });
  });
});
