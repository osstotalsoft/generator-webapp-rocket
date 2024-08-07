import React, { useState, useCallback<% if (withMultiTenancy) { %>, useEffect, useContext<% } %><% if (withRights) { %>, useMemo<% } %> } from 'react';
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useOidcUser, useOidc } from '@axa-fr/react-oidc'

import { Tooltip } from '@mui/material'
import { PowerSettingsNew } from '@mui/icons-material'

import LanguageSelector from '../languageSelector/LanguageSelector'
import avatar_default from 'assets/img/default-avatar.png'
import {
  Avatar,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  StyledArrowDropDown,
  StyledArrowDropUp,
  StyledMenuItem,
  StyledNavLinkMenu,
  StyledSelector
} from './UserMenuStyle'
import UserMenuItem from './UserMenuItem'
import { root } from 'utils/auth/authConfig'
import { getOidcConfigName } from 'utils/functions'
<%_ if (withMultiTenancy) { _%>
import { useLazyQuery } from '@apollo/client';
import { TenantContext } from 'providers/TenantAuthenticationProvider'
import TenantSelector, { MY_TENANTS_QUERY } from '../tenant/TenantSelector'
<%_ } _%>

<%_ if (withRights) { _%>
    import userMenuConfig from 'constants/userMenuConfig'
    import { emptyArray } from 'utils/constants';
    import { useUserData } from 'hooks/rights';
    import { filterMenuItems } from '../Menu'
<%_ }else{ _%>
    import userMenuItems from 'constants/userMenuConfig'
<%_ } _%>

function UserMenu({ drawerOpen, avatar, language, changeLanguage, withGradient }) {
    const [openAvatar, setOpenAvatar] = useState(false);
    const { t } = useTranslation();
    const location = useLocation();
    const { oidcUser } = useOidcUser(getOidcConfigName());
    const { logout } = useOidc(getOidcConfigName());
    
    <%_ if (withRights){ _%>
    const userRoles = oidcUser?.profile?.role || emptyArray;<%_ } _%>
  
    const activeRoute = useCallback(routeName => location.pathname.indexOf(routeName) > -1, [location.pathname]) 
    <%_ if (withRights){ _%>
    const { userData } = useUserData({ withRights: true });
    const userRights = userData?.rights || emptyArray
    <%_ } _%>
    <% if (withRights){ _%>
    const userMenuItems = useMemo(() => filterMenuItems(userMenuConfig, userRoles, userRights), [userRights, userRoles])
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
        logout(root);
        setContextTenant();
    }, [logout, setContextTenant])
    <%_} else { _%>
    const logoutAction = useCallback(e => {
        e.preventDefault();
        logout(root);
    }, [logout]) 
    <%_}_%>

    const userName = oidcUser?.profile?.firstName
    ? `${oidcUser.profile.name} ${oidcUser.profile.lastName}`
    : oidcUser?.name
    ? oidcUser.name.split('@')[0]
    : 'User'
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
    <% if (withMultiTenancy) { %> const displayName = `${userName}${tenantName}` <% } %>
    <% if (!withMultiTenancy) { %> const displayName = userName <% } %>
    return (
        <List>
            <ListItem>
                <StyledNavLinkMenu to={'/'} withGradient={withGradient} onClick={openCollapseAvatar}>
                    <ListItemIcon>
                        <Avatar src={avatar ? avatar : avatar_default} alt='...' />
                    </ListItemIcon>
                    <ListItemText
                        primary={displayName}
                        secondary={openAvatar ? <StyledArrowDropUp drawerOpen={drawerOpen} /> : <StyledArrowDropDown drawerOpen={drawerOpen} />}
                        disableTypography={true}
                        drawerOpen={drawerOpen}
                    />
                </StyledNavLinkMenu>
                <Collapse in={openAvatar} unmountOnExit>
                    <MenuList>
                        {userMenuItems.map((userMenu, key) => {
                            return <UserMenuItem key={key} userMenu={userMenu} drawerOpen={drawerOpen} activeRoute={activeRoute} withGradient={withGradient} />
                        })}
                        {oidcUser &&
                            <Tooltip disableHoverListener={drawerOpen} title={t('Tooltips.Logout')}>
                                <StyledMenuItem>
                                    <StyledNavLinkMenu to={"/"} withGradient={withGradient} onClick={logoutAction}>
                                    <ListItemIcon>
                                        <PowerSettingsNew />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={t('Tooltips.Logout')}
                                        disableTypography={true}
                                        drawerOpen={drawerOpen}
                                    />
                                    </StyledNavLinkMenu>
                                </StyledMenuItem>
                            </Tooltip>
                        }
                        <StyledSelector>
                            <LanguageSelector
                                language={language}
                                changeLanguage={changeLanguage}
                                drawerOpen={drawerOpen}
                            />
                        </StyledSelector>
                        <% if (withMultiTenancy) { %> {!tenantsLoading && myTenants?.length > 1 &&
                        <Tooltip disableHoverListener={drawerOpen} title={t('Tooltips.TenantList')}>
                            <StyledSelector>
                                <TenantSelector
                                    tenant={tenant}
                                    tenants={myTenants}
                                    changeTenant={handleTenantChange}
                                    drawerOpen={drawerOpen}
                                />
                            </StyledSelector>
                        </Tooltip>
                        }<% } -%>
                    </MenuList>
                </Collapse>
            </ListItem>
        </List>
    );
}

UserMenu.propTypes = {
    avatar: PropTypes.string,
    drawerOpen: PropTypes.bool.isRequired,
    changeLanguage: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    withGradient: PropTypes.bool.isRequired
};

export default UserMenu;