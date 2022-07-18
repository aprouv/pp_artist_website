import { rest } from "msw";

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


export const handlers =
  rest.get("http://localhost/api/v1/paintings", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ paintingsList: paintingsMockedData }));
  })
