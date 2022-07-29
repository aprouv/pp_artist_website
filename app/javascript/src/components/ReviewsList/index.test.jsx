import React from "react";
import { MemoryRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import ReviewList from "./";

describe("the Reviews list", () => {
  const reviewsMockedData = [
    {
      id: 1,
      name: "name1",
      content: "content1",
    },
    {
      id: 2,
      name: "name2",
      content: "content2",
    },
  ];

  it("should display the reviews' names", () => {
    render(
      <MemoryRouter>
        <ReviewList reviews={reviewsMockedData} />
      </MemoryRouter>
    );
    expect(screen.getByText(/name1/)).toBeInTheDocument();
    expect(screen.getByText(/name2/)).toBeInTheDocument();
  });

  it("should display the reviews' content", () => {
    render(
      <MemoryRouter>
        <ReviewList reviews={reviewsMockedData} />
      </MemoryRouter>
    );
    expect(screen.getByText(/content1/)).toBeInTheDocument();
    expect(screen.getByText(/content2/)).toBeInTheDocument();
  });
});
