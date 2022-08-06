import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { screen, render, waitFor } from "@testing-library/react";
import Footer from "./index";
import Contact from "../../pages/Contact";
import Reviews from "../../pages/Reviews";
import Biography from "../../pages/Biography";
import PagesTemplate from "../PagesTemplate";
import ReviewsTemplate from "../ReviewsTemplate";
import userEvent from "@testing-library/user-event";

describe("the Footer", () => {
  it("should display the copyright", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(
      screen.getByText("©2022 Patricia Prouvost. Tous droits réservés.")
    ).toBeInTheDocument();
  });

  it("should display all links and each link should redirect to the right page", async () => {
    render(
      <MemoryRouter initialEntries={["/biographie"]}>
        <Routes>
          <Route path="" element={<PagesTemplate />}>
            <Route path="tableaux" element={<p>Tous les tableaux</p>} />
            <Route path="biographie" element={<Biography />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="" element={<ReviewsTemplate />}>
            <Route path="livredor" element={<Reviews />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    userEvent.click(screen.getAllByRole("link", { name: "Tableaux" })[1]);

    await waitFor(() => {
      expect(screen.getByText(/Tous les tableaux/)).toBeInTheDocument();
    });

    userEvent.click(screen.getAllByRole("link", { name: "Biographie" })[1]);

    await waitFor(() => {
      expect(
        screen.getByText(/Après 44 ans passés à Reims/)
      ).toBeInTheDocument();
    });

    userEvent.click(screen.getAllByRole("link", { name: "Contact" })[1]);

    await waitFor(() => {
      expect(
        screen.getByText(/Contactez Patricia Prouvost/)
      ).toBeInTheDocument();
    });

    userEvent.click(screen.getAllByRole("link", { name: "Livre d'or" })[1]);

    await waitFor(() => {
      expect(screen.getByText(/Partagez ici publiquement/)).toBeInTheDocument();
    });
  });
});
