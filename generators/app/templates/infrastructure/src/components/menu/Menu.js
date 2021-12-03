import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { List, makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import menuConfig from 'constants/menuConfig';
import menuStyle from 'assets/jss/components/menuStyle';
import MenuItem from './MenuItem';
import CollapsibleMenuItem from './CollapsibleMenuItem';
<%_ if (withRights) { _%>
import { isEmpty } from 'ramda';
import { emptyArray } from 'utils/constants';
import { useReactOidc } from '@axa-fr/react-oidc-context';
import { useUserData } from 'hooks/rights';
import { intersect } from 'utils/functions'; 
<%_ } _%>

const useStyles = makeStyles(menuStyle);

function Menu({ drawerOpen }) {
  const classes = useStyles();
  const location = useLocation();
  <%_ if (withRights){ _%>
  const { oidcUser } = useReactOidc();
  const userRoles = oidcUser?.profile?.role || emptyArray;<%_ } _%>

  const activeRoute = useCallback(routeName => location.pathname.indexOf(routeName) > -1, [location.pathname]) 
  <%_ if (withRights){ _%>
  const { userData, loading } = useUserData();
  const userRights = userData?.rights || emptyArray
  
  if (loading) {
    return null
  }<%_ } _%>
  <% if (withRights){ _%>
  const menuItems = menuConfig.filter(item => isEmpty(item.rights)
    ? intersect(userRoles, item.roles) || isEmpty(item.roles)
    : (intersect(userRoles, item.roles) && intersect(userRights, item.rights)) || isEmpty(item.roles)
  )<%_ } else { _%>
  const menuItems = menuConfig
  <%_ } _%>

  return menuItems && <nav>
    <List className={classes.menuList}>
      {menuItems.map((menu, key) => {
        const menuItemProps = { key, menu, drawerOpen, activeRoute };
        return menu.children ? <CollapsibleMenuItem {...menuItemProps} /> : <MenuItem {...menuItemProps} />;
      })}
    </List>
  </nav>
}

Menu.propTypes = {
  drawerOpen: PropTypes.bool.isRequired
}

export default Menu;