import React from "react";
import { Paper, List as MUIList } from "@material-ui/core";
import ListItem from "./ListItem";

function List({ books }) {
  return (
    <Paper>
      <MUIList>
        { books.map((b, i) => <ListItem key={i} book={b} divider={i !== books.length-1} />) }
      </MUIList>
    </Paper>
  );
}

export default List;