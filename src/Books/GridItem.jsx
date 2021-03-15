import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Headset, MenuBook } from "@material-ui/icons";
import { formatPrice } from "./utils";

const useStyles = makeStyles({
  item: {
    width: 400,
    margin: "0 6px 24px 6px"
  },
  head: {
    "& span": {
      width: "calc(100% - 5ch)",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }
  },
  cover: {
    height: 400
  },
  desc: {
    height: 120,
    overflowY: "auto",
  },
  rest: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& p": {
      marginRight: 16
    }
  }
});

function GridItem({ book }) {
  const { item, head, cover, desc, rest } = useStyles();
  const { title, description, authors, coverImage, currentPrice, contentType, published } = book;
  const authorsText = authors.map(a => a.title).join(", ");

  return (
    <Card className={item} data-testid="gridItem">
      <CardHeader 
        data-testid="gridItemTitle"
        title={title}
        subheader={authorsText}
        className={head}
      />
      <CardMedia
        image={coverImage}
        className={cover}
      />
      <CardContent>
        <Typography color="primary">
          Description
        </Typography>
        <Box className={desc} p={1}>
          <Typography
            data-testid="gridItemDesc"
            align="justify"
            variant="body2"
            dangerouslySetInnerHTML={{__html: description}}
          />
        </Box>
      </CardContent>
      <Box className={rest} p={2}>
        <Typography color="textSecondary" variant="body2">
          { contentType.mimetype.startsWith("audio/")
            ? <Headset size="inherit" />
            : <MenuBook size="inherit" /> }
        </Typography>
        <Typography data-testid="gridItemPrice" color="textSecondary" variant="body2">
          { formatPrice(currentPrice) }
        </Typography>
        <Typography color="textSecondary" variant="body2">
          { published }
        </Typography>
      </Box>
    </Card>
  );
}

export default GridItem;