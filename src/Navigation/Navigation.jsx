import React from "react";
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6">
          📚 Elisa Kirja
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;