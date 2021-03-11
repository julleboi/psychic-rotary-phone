import React, { useEffect } from "react";
import {
  Box
} from "@material-ui/core";
import { getBooks } from "./api";

function Books() {
  // Executes on first load
  useEffect(async () => {
    const res = await getBooks();
    console.log(res);
  }, []);

  return (
    <Box m={2}>
      Insert books here.
    </Box>
  );
}

export default Books;