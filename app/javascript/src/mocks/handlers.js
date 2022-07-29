import { rest } from "msw";
import {
  paintingsMockedData,
  reviewMockedData,
  reviewsMockedData,
} from "./data";

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
  rest.get("http://localhost/api/v1/reviews", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(reviewsMockedData));
  }),
  rest.post("http://localhost:3000/api/v1/reviews", (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(reviewMockedData));
  }),
];

export default handlers;
