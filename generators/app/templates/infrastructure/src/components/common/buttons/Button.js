import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// material-ui components
import { Button, makeStyles, Tooltip } from "@material-ui/core";

import buttonStyle from "assets/jss/components/common/buttonStyle";

const useStyles = makeStyles(buttonStyle);

// eslint-disable-next-line react/prop-types
const ButtonBase = ({ color, round, children, fullWidth, disabled, customClass, right, justIcon, size, wd, ...rest }) => {
  const classes = useStyles();
  const btnClasses = cx({
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [customClass]: customClass,
    [classes.right]: right,
    [classes.justIcon]: justIcon,
    [classes.wd]: wd,
    [classes[size]]: size
  });
  return <Button {...rest} className={classes.button + " " + btnClasses}>
    {children}
  </Button>
}

function RegularButton({ tooltip, ...rest }) {

  return tooltip ?
    <Tooltip title={tooltip}>
      <span>
        <ButtonBase {...rest} />
      </span>
    </Tooltip>
    :
    <ButtonBase {...rest} />
}

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "theme",
    "themeNoBackground",
    "themeWithBackground",
    "defaultNoBackground",
    "primaryNoBackground",
    "infoNoBackground",
    "successNoBackground",
    "warningNoBackground",
    "dangerNoBackground",
    "roseNoBackground",
    "white",
    "simple",
    "transparent"
  ]),
  round: PropTypes.bool,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  customClass: PropTypes.string,
  // make the button's min width to 160px
  wd: PropTypes.bool,
  // make the button smaller
  justIcon: PropTypes.bool,
  // button will float right
  right: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg", "xs"]),
  tooltip: PropTypes.string
};

export default RegularButton;