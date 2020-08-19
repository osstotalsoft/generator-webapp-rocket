import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// material-ui components
import { IconButton, makeStyles, Tooltip } from "@material-ui/core";

import iconButtonStyle from "assets/jss/components/common/iconButtonStyle";

const useStyles = makeStyles(iconButtonStyle);

// eslint-disable-next-line react/prop-types
const Button = ({ children, color, customClass, ...rest }) => {
  const classes = useStyles();
  const buttonClasses =
    classes.button +
    cx({
      [" " + classes[color]]: color,
      [" " + customClass]: customClass
    });
  return <IconButton {...rest} className={buttonClasses}>
    {children}
  </IconButton>
}

function CustomIconButton({ tooltip, ...rest }) {
  return tooltip ?
    <Tooltip title={tooltip}>
      <span>
        <Button {...rest} />
      </span>
    </Tooltip>
    :
    <Button {...rest} />
}

CustomIconButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "theme",
    "themeNoBackground",
    "themeWithBackground",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "simple",
    "defaultNoBackground",
    "primaryNoBackground",
    "infoNoBackground",
    "successNoBackground",
    "warningNoBackground",
    "dangerNoBackground",
    "roseNoBackground",
    "twitter",
    "twitterNoBackground",
    "facebook",
    "facebookNoBackground",
    "google",
    "googleNoBackground",
    "linkedin",
    "linkedinNoBackground",
    "pinterest",
    "pinterestNoBackground",
    "youtube",
    "youtubeNoBackground",
    "tumblr",
    "tumblrNoBackground",
    "github",
    "githubNoBackground",
    "behance",
    "behanceNoBackground",
    "dribbble",
    "dribbbleNoBackground",
    "reddit",
    "redditNoBackground"
  ]),
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
  tooltip: PropTypes.string
};

export default CustomIconButton;