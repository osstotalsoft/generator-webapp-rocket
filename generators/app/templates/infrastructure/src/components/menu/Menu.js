import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import menuConfig from 'constants/menuConfig';
import MenuItem from './MenuItem';
import CollapsibleMenuItem from './CollapsibleMenuItem';
import { List } from './MenuStyle';
<%_ if (withRights) { _%>
import { isEmpty } from 'ramda';
import { emptyArray } from 'utils/constants';
import { useOidcUser } from '@axa-fr/react-oidc';
import { useUserData } from 'hooks/rights';
import { intersect } from 'utils/functions';
import { getOidcConfigName } from "utils/functions" 
<%_ } _%>

function Menu({ drawerOpen, withGradient }) {
  const location = useLocation();
  <%_ if (withRights){ _%>
  const { oidcUser } = useOidcUser(getOidcConfigName());

  const userRoles = oidcUser?.profile?.role || emptyArray;<%_ } _%>

  const activeRoute = useCallback(routeName => location.pathname.indexOf(routeName) > -1, [location.pathname]) 
  <%_ if (withRights){ _%>
  const { userData, loading } = useUserData({ withRights: true });
  const userRights = userData?.rights || emptyArray
  
  if (loading) {
    return null
  }<%_ } _%>
  <% if (withRights){ _%>
  const menuItems = menuConfig.filter(item => isEmpty(item?.rights)
    ? intersect(userRoles, item?.roles) || isEmpty(item?.roles)
    : (intersect(userRights, item?.rights) && (isEmpty(userRoles) || intersect(userRoles, item?.roles))) || isEmpty(item.roles)
  )<%_ } else { _%>
  const menuItems = menuConfig
  <%_ } _%>

  return menuItems && <nav>
    <List>
      {menuItems.map((menu, key) => {
        const menuItemProps = { key, menu, drawerOpen, activeRoute, withGradient };
        return menu.children ? <CollapsibleMenuItem {...menuItemProps} /> : <MenuItem {...menuItemProps} />;
      })}
    </List>
  </nav>
}

Menu.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  withGradient: PropTypes.bool.isRequired
}

export default Menu;