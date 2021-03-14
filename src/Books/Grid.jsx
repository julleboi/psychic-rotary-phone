import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "./GridItem";

const useStyles = makeStyles({
  container: {
    display: "flex", 
    flexWrap: "wrap", 
    flexDirection: "row", 
    justifyContent: "space-evenly",
  }
});

function Grid({ books }) {
  const { container } = useStyles();

  return (
    <Box className={container}>
      { books.map((b, i) => <GridItem key={i} book={b} />) }
    </Box>
  );
}

export default Grid;