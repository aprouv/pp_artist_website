import { rest } from "msw";
import { paintingsMockedData } from "./data";

const handlers = [
  rest.get("http://localhost/api/v1/paintings", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(paintingsMockedData));
  }),
  rest.get("http://localhost/api/v1/paintings/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json(paintingsMockedData.filter((painting) => painting.id == id)[0])
    );
  }),
];

export default handlers;
