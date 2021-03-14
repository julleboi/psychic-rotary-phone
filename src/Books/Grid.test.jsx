import React from "react";
import { render } from "@testing-library/react";
import Grid from "./Grid";

describe("<Grid />", () => {
  let books;
  
  beforeEach(() => {
    books = [
      {
        title: "A Book Title",
        description: "This book is about...",
        authors: [{title: "foo"}, {title: "bar"}],
        coverImage: "/cover1.jpg",
        currentPrice: 1.0,
        contentType: {mimetype: "application/epub"}
      },
      {
        title: "Recipes",
        description: "This book contains food recipes.",
        authors: [{title: "bar"}, {title: "foo"}],
        coverImage: "/cover2.jpg",
        currentPrice: 1.3,
        contentType: {mimetype: "application/epub"}
      },
      {
        title: "Some book",
        description: "A description",
        authors: [{title: "bar"}, {title: "baz"}],
        coverImage: "/cover3.jpg",
        currentPrice: 4.0,
        contentType: {mimetype: "application/epub"}
      },
    ];
  });

  it("should render a correct amount of items", () => {
    const grid = render(<Grid books={books} />);
    const items = grid.getAllByTestId("gridItem");
    expect(items.length).toBe(3);
  });
});