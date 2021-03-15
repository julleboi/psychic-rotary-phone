import React from "react";
import {
  Paper,
  Box,
  Grid,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

function Options({ 
  views, 
  currentView, 
  onChangeView, 
  sortBy, 
  currentSortBy, 
  onChangeSortBy 
}) {
  return (
    <Paper>
      <Box p={2} m={2}>
        <Grid 
          container
          direction="row"
          spacing={4}
        >
          <Grid item xs>
            <Typography color="primary">
              Options
            </Typography>
          </Grid>
          <Grid item container xs={6} spacing={2}>
            <Grid item xs={6}>
              <FormControl margin="dense" variant="outlined" fullWidth>
                <FormLabel id="viewLabel">View as</FormLabel>
                <Select
                  id="view"
                  labelId="viewLabel"
                  value={currentView}
                  onChange={onChangeView}
                >
                  { views.map((v, i) => 
                    <MenuItem key={i} value={v}>{v}</MenuItem>) }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl margin="dense" variant="outlined" fullWidth>
                <FormLabel id="sortLabel">Sort by</FormLabel>
                <Select
                  id="sort"
                  labelId="sortLabel"
                  value={currentSortBy}
                  onChange={onChangeSortBy}
                >
                  { sortBy.map((v, i) => 
                    <MenuItem key={i} value={v}>{v}</MenuItem>) }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default Options;