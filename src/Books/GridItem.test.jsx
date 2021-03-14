import React from "react";
import { render } from "@testing-library/react";
import GridItem from "./GridItem";

describe("<GridItem />", () => {
  let book;

  beforeEach(() => {
    book = {
      title: "A Book Title",
      description: "This <b>book</b> is about...",
      authors: [{title: "foo"}, {title: "bar"}],
      coverImage: "/cover1.jpg",
      currentPrice: 1.0,
      contentType: {mimetype: "application/epub"}
    };
  });

  it("should render a book object correctly", () => {
    const item = render(<GridItem book={book} />);

    const title = item.getByTestId("gridItemTitle").textContent;
    expect(title).toContain("A Book Title"); // Title part
    expect(title).toContain("foo, bar"); // Authors part

    const desc = item.getByTestId("gridItemDesc").textContent;
    expect(desc).toContain("This book is about...");

    const price = item.getByTestId("gridItemPrice").textContent;
    expect(price).toContain("1,00 €");
  });
});