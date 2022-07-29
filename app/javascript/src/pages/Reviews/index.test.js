import React from "react";
import { MemoryRouter } from "react-router-dom";
import { waitFor, screen, render } from "@testing-library/react";
import Reviews from "./";
import userEvent from "@testing-library/user-event";
import server from "../../mocks/server";

describe("The reviews page", () => {

  it("should display all reviews", async () => {
    render(
      <MemoryRouter>
        <Reviews />
      </MemoryRouter>
    );
    await waitFor(() => {
      const reviews = document.getElementsByClassName("sc-gsnTZi dRBwWd");
      expect(reviews.length).toBe(2);
      expect(screen.getByText(/name1/)).toBeInTheDocument();
      expect(screen.getByText(/name2/)).toBeInTheDocument();
    });
  });

  it("should create a new review", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Reviews />
      </MemoryRouter>
    );

    const name = screen.getByRole("textbox", { name: "name" });
    const content = screen.getByRole("textarea", { name: "content" });
    // const alertMock = jest.spyOn(window, "alert").mockImplementation();

    user.type(name, "new name"); // fill-in name

    await waitFor(() => {
      expect(name).toHaveValue("new name");
    });

    user.type(content, "new content"); //fill-in content

    await waitFor(() => {
      expect(screen.getByText(/new content/)).toBeInTheDocument();
    });

    user.click(screen.getByRole("button"), { name: "Click Me" }); //click on "envoyer"

    await waitFor(() => {
      // expect(alertMock).toHaveBeenCalledTimes(1);
      const alert = screen.getByRole('alert');
      expect(alert).toHaveTextContent('Votre commentaire a bien été posté');
    });
  });
});
