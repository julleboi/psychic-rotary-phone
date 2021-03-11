import React from "react";
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">
          📚 Elisa Kirja
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;