import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/components/common/cardTitleStyle.js";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function CardTitle({ title, actions }) {
  const classes = useStyles();
  return (
    <Box className={classes.container} >
      <Box className={classes.cardTitle}>{title}</Box>
      <Box>{actions}</Box>
    </Box>
  );
}

CardTitle.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array
};