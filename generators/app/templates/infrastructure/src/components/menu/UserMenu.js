import React, { useState, useCallback<% if (withMultiTenancy) { %>, useEffect, useContext<% } %> } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { List, ListItem, Collapse, ListItemText, ListItemIcon, makeStyles, Tooltip } from '@material-ui/core';

import userMenuStyle from 'assets/jss/components/userMenuStyle'
import cx from "classnames";
import LanguageSelector from "./LanguageSelector"
import avatar_default from "assets/img/default-avatar.png";
import { useTranslation } from 'react-i18next';
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import { useReactOidc } from '@axa-fr/react-oidc-context';
import userMenuConfig from 'constants/userMenuConfig'
import UserMenuItem from "./UserMenuItem";
import { useLocation } from 'react-router-dom';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'

<%_ if (withMultiTenancy) { _%>
import { useLazyQuery } from '@apollo/client';
import { TenantContext } from 'providers/TenantAuthenticationProvider'
import TenantSelector, { MY_TENANTS_QUERY } from './TenantSelector';
<%_ } _%>

<%_ if (withRights) { _%>
import { isEmpty } from 'ramda';
import { emptyArray } from 'utils/constants';
import { useUserData } from 'hooks/rights';
import { intersect } from 'utils/functions'; 
<%_ } _%>

const useStyles = makeStyles(userMenuStyle);

function UserMenu({ drawerOpen, avatar, language, changeLanguage }) {
    const [openAvatar, setOpenAvatar] = useState(false);
    const classes = useStyles();
    const { t } = useTranslation();
    const location = useLocation();
    const { oidcUser, logout } = useReactOidc();

    <%_ if (withRights){ _%>
    const userRoles = oidcUser?.profile?.role || emptyArray;<%_ } _%>
  
    const activeRoute = useCallback(routeName => location.pathname.indexOf(routeName) > -1, [location.pathname]) 
    <%_ if (withRights){ _%>
    const { userData } = useUserData();
    const userRights = userData?.rights || emptyArray
    <%_ } _%>
    <% if (withRights){ _%>
    const userMenuItems = userMenuConfig.filter(item => isEmpty(item.rights)
      ? intersect(userRoles, item.roles) || isEmpty(item.roles)
      : (intersect(userRoles, item.roles) && intersect(userRights, item.rights)) || isEmpty(item.roles)
    )<%_ } else { _%>
    const userMenuItems = userMenuConfig
    <%_ } _%>
    
    const openCollapseAvatar = useCallback(e => {
        setOpenAvatar(!openAvatar);
        e.preventDefault();
    }, [openAvatar])

    <%_ if (withMultiTenancy) { _%>
    const setContextTenant = useContext(TenantContext)

    // // TODO: might have the issue https://github.com/apollographql/apollo-client/issues/5179
    const [callMyTenantsQuery, { called, loading: tenantsLoading, data }] = useLazyQuery(MY_TENANTS_QUERY)

    useEffect(() => {
        if (!oidcUser || called || tenantsLoading) { return }

        callMyTenantsQuery();
    }, [callMyTenantsQuery, called, tenantsLoading, oidcUser])
    const myTenants = data?.myTenants 
    <%_}_%>
    <%_ if (withMultiTenancy) { _%>
    const logoutAction = useCallback(e => {
        e.preventDefault();
        logout();
        setContextTenant();
    }, [logout, setContextTenant])
    <%_} else { _%>
    const logoutAction = useCallback(e => {
        e.preventDefault();
        logout();
    }, [logout]) 
    <%_}_%>

    const userName = oidcUser?.profile?.firstName
        ? `${oidcUser.profile.name} ${oidcUser.profile.lastName}`
        : oidcUser?.profile
            ? oidcUser.profile.name.split('@')[0]
            : "User";
    <%_ if (withMultiTenancy) { _%>
    const [tenant, setTenant] = useState(myTenants && oidcUser?.profile?.tid && myTenants.find(t => t.externalId.toUpperCase() === oidcUser?.profile?.tid.toUpperCase()))
    useEffect(() => {
        const localTenant = myTenants && oidcUser?.profile?.tid && myTenants.find(t => t.externalId.toUpperCase() === oidcUser?.profile?.tid.toUpperCase())
        if (!localTenant || tenant) { return }
        setTenant(localTenant)
    }, [myTenants, oidcUser, tenant])

    const handleTenantChange = useCallback(e => {
        setTenant(e)
        setContextTenant(e.code)
    }, [setContextTenant])

    const tenantName = tenant?.name ? ` - ${tenant.name}` : "" 
    <%_}_%>
    const itemText = classes.itemText +
        " " +
        cx({
            [classes.itemTextMini]: !drawerOpen
        });
    <% if (withMultiTenancy) { %> const displayName = `${userName}${tenantName}` <% } %>
    <% if (!withMultiTenancy) { %> const displayName = userName <% } %>
    return (
        <List className={classes.userMenuContainer}>
            <ListItem className={classes.item + " " + classes.userItem}>
                <NavLink to={'/'} className={classes.itemLink} onClick={openCollapseAvatar}>
                    <ListItemIcon className={classes.itemIcon}>
                        <img src={avatar ? avatar : avatar_default} className={classes.photo} alt='...' />
                    </ListItemIcon>
                    <ListItemText
                        primary={displayName}
                        secondary={openAvatar ? <ArrowDropUp className={classes.caret} /> : <ArrowDropDown className={classes.caret} />}
                        disableTypography={true}
                        className={itemText}
                    />
                </NavLink>
                <Collapse in={openAvatar} unmountOnExit classes={{ wrapper: classes.collapseWrapper }}>
                    <List className={classes.list + classes.collapseList}>
                        {userMenuItems.map((userMenu, key) => {
                            return <UserMenuItem key={key} userMenu={userMenu} drawerOpen={drawerOpen} activeRoute={activeRoute} />
                        })}
                        {oidcUser &&
                            <Tooltip disableHoverListener={drawerOpen} title={t('Tooltips.Logout')}>
                                <ListItem className={classes.collapseItem}>
                                    <NavLink to={"/"} className={classes.itemLink} onClick={logoutAction}>
                                    <ListItemIcon className={classes.itemIcon}>
                                        <PowerSettingsNew />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={t('Tooltips.Logout')}
                                        disableTypography={true}
                                        className={itemText}
                                    />
                                    </NavLink>
                                </ListItem>
                            </Tooltip>
                        }
                        <ListItem className={classes.selectorItem}>
                            <LanguageSelector
                                language={language}
                                changeLanguage={changeLanguage}
                                drawerOpen={drawerOpen}
                            />
                        </ListItem>
                        <% if (withMultiTenancy) { %> {!tenantsLoading && myTenants?.length > 1 &&
                        <Tooltip disableHoverListener={drawerOpen} title={t('Tooltips.TenantList')}>
                            <ListItem className={classes.selectorItem}>
                                <TenantSelector
                                    tenant={tenant}
                                    tenants={myTenants}
                                    changeTenant={handleTenantChange}
                                    drawerOpen={drawerOpen}
                                />
                            </ListItem>
                        </Tooltip>
                        }<% } -%>
                    </List>
                </Collapse>
            </ListItem>
        </List>
    );
}

UserMenu.propTypes = {
    avatar: PropTypes.string,
    drawerOpen: PropTypes.bool.isRequired,
    changeLanguage: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
};

export default UserMenu;