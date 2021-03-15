import React from "react";
import { render } from "@testing-library/react";
import ListItem from "./ListItem";

describe("<ListItem />", () => {
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
    const item = render(<ListItem book={book} />);

    const title = item.getByTestId("listItemTitle").textContent;
    expect(title).toContain("A Book Title");

    const authors = item.getByTestId("listItemAuthors").textContent;
    expect(authors).toContain("foo, bar");

    const desc = item.getByTestId("listItemDesc").textContent;
    expect(desc).toContain("This book is about...");

    const price = item.getByTestId("listItemPrice").textContent;
    expect(price).toContain("1,00 €");
  });
});