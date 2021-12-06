import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { ListItem, ListItemIcon, ListItemText, makeStyles, Tooltip } from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import { NavLink } from 'react-router-dom'
import menuStyle from 'assets/jss/components/menuStyle'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(menuStyle);

const MenuItem = ({ menu, drawerOpen, activeRoute, isSubMenuItem, subMenuOpen, onToggleSubMenu, withGradient }) => {
  const { children, path, icon, text } = menu;
  const isSubMenu = Boolean(children);

  const classes = useStyles({ isSubMenu, withGradient });
  const { t } = useTranslation();

  const navLinkClasses = classes.menuItemLink +
    " " +
    cx({
      [classes.menuActiveColor]: !isSubMenu && activeRoute(path)
    });
  const itemTextClasses = classes.menuItemText +
    " " +
    cx({
      [classes.menuItemTextMini]: !drawerOpen
    }) +
    " " +
    cx({ 
      [classes.paddingLeft]: isSubMenuItem 
    });
  const menuItemIconClasses = classes.menuItemIcon + ' ' + cx({ [classes.paddingLeft]: isSubMenuItem });

  const translatedText = t(text)
  const Item = isSubMenu ? ListItem : NavLink;
  const itemProps = isSubMenu ? { onClick: onToggleSubMenu, button: true } : { to: path };

  return (
    <Tooltip disableHoverListener={!drawerOpen} title={translatedText}>
      <ListItem className={classes.menuItem}>
        <Item {...itemProps} className={navLinkClasses}>
          <ListItemIcon className={menuItemIconClasses}>
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={translatedText}
            secondary={isSubMenu && (subMenuOpen ? <ArrowDropUp className={classes.caret} /> : <ArrowDropDown className={classes.caret} />)}
            disableTypography={true}
            className={itemTextClasses}
          />
        </Item>
      </ListItem>
    </Tooltip>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  activeRoute: PropTypes.func,
  isSubMenuItem: PropTypes.bool,
  subMenuOpen: PropTypes.bool,
  onToggleSubMenu: PropTypes.func,
  withGradient: PropTypes.bool
};

export default MenuItem;