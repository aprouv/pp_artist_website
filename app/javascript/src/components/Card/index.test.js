import React from "react";
import { MemoryRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";

import Card from "./";

const paintingsMockedData = [
  {
    id: 1,
    name: "Sortir du cadre",
    description: "description1",
    format: "115 x 75",
    price: 1000,
    year: 2020,
  },
  {
    id: 2,
    name: "Innocence et harmonie",
    description: "description2",
    format: "115 x 75",
    price: 1000,
    year: 2020,
  },
  {
    id: 3,
    name: "Voyages",
    description: "description3",
    format: "80 x 60",
    price: 650,
    year: 2019,
  },
];

describe("my test", () => {
  const painting = {
    id: 1,
    name: "Sortir du cadre",
    description: "description1",
    format: "115 x 75",
    price: 1000,
    year: 2020,
  };

  it("Should display paintings names", () => {
    // const history = createMemoryHistory();
    const id = painting.id;
    const name = painting.name;
    render(
      <MemoryRouter>
        <Card id={id} name={name} />
      </MemoryRouter>
    );
    // const image= screen.getByRole(img)
    expect(screen.getByAltText("Sortir du cadre")).toBeTruthy;
    // expect(screen.getByText('Filter par')).toBeTruthy()
    // expect(screen.getByText('Tous les tableaux')).toBeTruthy()
    // expect(screen.getByText("Si la toile émeut, plaît, interroge, dérange, et si de surcroît parfois elle peut véhiculer une idée, témoigner, secouer des idées, alors le peintre peut être satisfait.")).toBeTruthy()
  });
});
