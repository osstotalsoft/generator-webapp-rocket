import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ListItem, ListItemIcon, ListItemText, makeStyles, Tooltip } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import menuStyle from "assets/jss/components/menuStyle";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(menuStyle);

const MenuItem = ({ menu, miniActive, activeRoute }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navLinkClasses = classes.menuItemLink +
    " " +
    cx({
      [" " + classes.menuActiveColor]: activeRoute(menu.path)
    });
  const itemText = classes.menuItemText +
    " " +
    cx({
      [classes.menuItemTextMini]: miniActive
    });

  const text = t(menu.text)

  return (
    <Tooltip disableHoverListener={!miniActive} title={text}>
      <ListItem className={classes.menuItem}>
        <NavLink to={menu.path} className={navLinkClasses}>
          <ListItemIcon className={classes.menuItemIcon}>
            {menu.icon}
          </ListItemIcon>
          <ListItemText
            primary={text}
            disableTypography={true}
            className={itemText}
          />
        </NavLink>
      </ListItem>
    </Tooltip>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
  miniActive: PropTypes.bool.isRequired,
  activeRoute: PropTypes.func.isRequired
};

export default MenuItem;