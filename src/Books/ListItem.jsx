import React, { useState } from "react";
import {
  Box,
  ListItem as MUIListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  Divider,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpandLess,
  ExpandMore,
  Headset,
  MenuBook
} from "@material-ui/icons";
import { formatPrice } from "./utils";

const useStyles = makeStyles({
  avatar: {
    height: 120,
    width: 80,
    marginRight: 16
  },
  desc: {
    width: "calc(100% - 48px)"
  },
  small: {
    height: "1.25em",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  rest: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& p": {
      marginRight: 8
    }
  }
});

function ListItem({ book, divider }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClickExpand(event) {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  }

  const { avatar, desc, small, rest } = useStyles();
  const { title, description, authors, coverImage, currentPrice, contentType } = book;
  const authorsText = authors.map(a => a.title).join(", ");

  return (
    <React.Fragment>
      <MUIListItem data-testid="listItem" alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={avatar} variant="square" alt={title} src={coverImage} />
        </ListItemAvatar>
        <ListItemText>
          <Typography data-testid="listItemTitle">
            { title }
          </Typography>
          <Typography 
            data-testid="listItemAuthors" 
            color="textSecondary" 
            variant="body2" 
            gutterBottom
          >
            { authorsText }
          </Typography>
          <Typography 
            color="primary"
            variant="body2"
          >
            Description
          </Typography>
          <Typography
            data-testid="listItemDesc"
            className={`${desc} ${!isExpanded && small}`}
            align="justify"
            variant="body2"
            dangerouslySetInnerHTML={{__html: description}}
          />
          <Box className={rest}>
            <Typography color="textSecondary" variant="body2">
              { contentType.mimetype.startsWith("audio/")
                ? <Headset size="inherit" />
                : <MenuBook size="inherit" /> }
            </Typography>
            <Typography data-testid="listItemPrice" color="textSecondary" variant="body2">
              { formatPrice(currentPrice) }
            </Typography>
          </Box>
          <ListItemSecondaryAction>
            <IconButton onClick={handleClickExpand}>
              { isExpanded ? <ExpandLess /> : <ExpandMore /> }
            </IconButton>
          </ListItemSecondaryAction>
        </ListItemText>
      </MUIListItem>
      { divider && <Divider variant="middle" /> }
    </React.Fragment>
  );
}

export default ListItem;