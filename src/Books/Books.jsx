import React, { useEffect, useState, useMemo } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { getBooks } from "./api";
import Options from "./Options";
import Grid from "./Grid";
import List from "./List";

function Books() {
  const [view, setView] = useState("grid");
  const [sortBy, setSortBy] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    try {
      const res = await getBooks();
      setBooks(res.books);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sortedBooks = useMemo(() => {
    if (!sortBy)
      return books;

    const copy = books.map(b => Object.assign({}, b));

    switch(sortBy) {
      case "published":
        return copy.sort((a, b) => (a.published || 9001) - (b.published || 9001));
      case "price":
        return copy.sort((a, b) => a.currentPrice - b.currentPrice);
      default:
        return books;
    }
  }, [books, sortBy]);
  
  function handleChangeView(event) {
    event.preventDefault();
    const value = event.target.value;

    switch (value) {
      case "grid":
      case "list":
        if (view !== value)
          setView(value);
        break;
      default:
    }
  }

  function handleChangeSortBy(event) {
    event.preventDefault();
    const value = event.target.value;

    switch (value) {
      case "published":
      case "price":
        if (sortBy !== value)
          setSortBy(value);
        break;
      default:
    }
  }

  return (
    <Box m={2}>
      { !isLoading && 
        <Options
          views={["grid", "list"]}
          currentView={view}
          onChangeView={handleChangeView}
          sortBy={["published", "price"]}
          currentSortBy={sortBy}
          onChangeSortBy={handleChangeSortBy}
        />
      }
      { isLoading && 
        <Box p={4} textAlign="center">
          <CircularProgress />
        </Box>
      }
      { books && 
        view === "list" 
          ? <List books={sortedBooks} />
          : <Grid books={sortedBooks} />
      }
    </Box>
  );
}

export default Books;