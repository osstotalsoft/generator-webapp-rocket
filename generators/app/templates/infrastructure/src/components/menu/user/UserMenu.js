import { useState, useCallback<% if (withMultiTenancy) { %>, useEffect, useContext<% } %><% if (withRights) { %>, useMemo <% } %>} from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useOidcUser, useOidc } from '@axa-fr/react-oidc'
import { Collapse, Tooltip } from '@mui/material'
import { PowerSettingsNew } from '@mui/icons-material'
import LanguageSelector from '../languageSelector/LanguageSelector'
import avatar_default from 'assets/img/default-avatar.png'
import { root } from 'utils/auth/authConfig'
import { getOidcConfigName } from 'utils/functions'
<%_ if (withMultiTenancy) { _%>
    import { useLazyQuery } from '@apollo/client'
    import { TenantContext } from 'providers/TenantAuthenticationProvider'
    import TenantSelector, { MY_TENANTS_QUERY } from '../tenant/TenantSelector'
<%_ } _%>
<%_ if (withRights) { _%>
    import userMenuConfig from 'constants/userMenuConfig'
    import { emptyArray } from 'utils/constants'
    import { useUserData } from 'hooks/rights'
    import { filterMenuItems } from '../Menu'
<%_ }else{ _%>
    import userMenuItems from 'constants/userMenuConfig'
<%_ } _%>
import { Avatar, StyledListItem } from './UserMenuStyle'
import { ListItemIcon, ListItemText, StyledArrowDropDown, StyledArrowDropUp, StyledList, StyledNavLink } from '../MenuStyle'
import MenuItem from '../MenuItem'

function UserMenu({ drawerOpen, avatar, language, changeLanguage, withGradient }) {
  const [openAvatar, setOpenAvatar] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()
  const { oidcUser } = useOidcUser(getOidcConfigName())
  const { logout } = useOidc(getOidcConfigName())

  const userName = oidcUser?.profile?.firstName
  ? `${oidcUser.profile.name} ${oidcUser.profile.lastName}`
  : oidcUser?.name
    ? oidcUser.name.split('@')[0]
    : 'User'

  <%_ if (withRights){ _%>
    const { userData } = useUserData({ withRights: true })
    const userRoles = oidcUser?.profile?.role || emptyArray
    const userRights = userData?.rights || emptyArray
  const userMenuItems = useMemo(() => filterMenuItems(userMenuConfig, userRoles, userRights), [userRights, userRoles])
  <%_ } _%>

  const activeRoute = useCallback(routeName => location.pathname.indexOf(routeName) > -1, [location.pathname])

  const openCollapseAvatar = useCallback(
    e => {
      setOpenAvatar(!openAvatar)
      e.preventDefault()
    },
    [openAvatar]
  )

    <%_ if (withMultiTenancy) { _%>
    const setContextTenant = useContext(TenantContext)

  const [callMyTenantsQuery, { called, loading: tenantsLoading, data }] = useLazyQuery(MY_TENANTS_QUERY)
  const myTenants = data?.myTenants

  useEffect(() => {
    if (!oidcUser || called || tenantsLoading) {
      return
    }

    callMyTenantsQuery()
  }, [callMyTenantsQuery, called, tenantsLoading, oidcUser])

  const [tenant, setTenant] = useState(
    myTenants && oidcUser?.profile?.tid && myTenants.find(t => t.externalId.toUpperCase() === oidcUser?.profile?.tid.toUpperCase())
  )
  const tenantName = tenant?.name ? ` - ${tenant.name}` : ''
  const displayName = `${userName}${tenantName}`

  useEffect(() => {
    const localTenant =
      myTenants && oidcUser?.profile?.tid && myTenants.find(t => t.externalId.toUpperCase() === oidcUser?.profile?.tid.toUpperCase())
    if (!localTenant || tenant) {
      return
    }
    setTenant(localTenant)
  }, [myTenants, oidcUser, tenant])

  const handleTenantChange = useCallback(
    e => {
      setTenant(e)
      setContextTenant(e.code)
    },
    [setContextTenant]
  )
  
  const logoutAction = useCallback(
    e => {
      e.preventDefault()
      logout(root)
      setContextTenant()
    },
    [logout, setContextTenant]
  )
    <%_} else { _%>
    const logoutAction = useCallback(e => {
        e.preventDefault();
        logout(root);
    }, [logout]) 
    <%_}_%>

  return (
    <StyledList>
      <StyledNavLink to={'/'} withGradient={withGradient} onClick={openCollapseAvatar} drawerOpen={drawerOpen}>
        <ListItemIcon>
          <Avatar src={avatar ? avatar : avatar_default} alt='...' />
        </ListItemIcon>
        <ListItemText
          primary={<% if (withMultiTenancy) { %>displayName<% }else{ %>userName<% } %>}
          secondary={openAvatar ? <StyledArrowDropUp /> : <StyledArrowDropDown />}
          disableTypography={true}
          drawerOpen={drawerOpen}
        />
      </StyledNavLink>
      <Collapse in={openAvatar} unmountOnExit>
        <StyledList>
          {userMenuItems.map((userMenu, key) => (
            <MenuItem key={key} menu={userMenu} drawerOpen={drawerOpen} activeRoute={activeRoute} withGradient={withGradient} />
          ))}
          {oidcUser && (
            <Tooltip disableHoverListener={drawerOpen} title={t('Tooltips.Logout')} placement='right'>
              <StyledNavLink to={'/'} withGradient={withGradient} drawerOpen={drawerOpen} onClick={logoutAction}>
                <ListItemIcon>
                  <PowerSettingsNew />
                </ListItemIcon>
                <ListItemText primary={t('Tooltips.Logout')} disableTypography={true} drawerOpen={drawerOpen} />
              </StyledNavLink>
            </Tooltip>
          )}
          <StyledListItem withGradient={withGradient} drawerOpen={drawerOpen}>
            <LanguageSelector language={language} changeLanguage={changeLanguage} drawerOpen={drawerOpen} />
          </StyledListItem>
    <%_ if (withMultiTenancy) { _%>
          {!tenantsLoading && myTenants?.length > 1 && (
            <Tooltip disableHoverListener={drawerOpen} title={t('Tooltips.TenantList')} placement='right'>
              <StyledListItem withGradient={withGradient} drawerOpen={drawerOpen}>
                <TenantSelector tenant={tenant} tenants={myTenants} changeTenant={handleTenantChange} drawerOpen={drawerOpen} />
              </StyledListItem>
            </Tooltip>
          )}
    <%_}_%>
        </StyledList>
      </Collapse>
    </StyledList>
  )
}

UserMenu.propTypes = {
  avatar: PropTypes.string,
  drawerOpen: PropTypes.bool.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  withGradient: PropTypes.bool.isRequired
}

export default UserMenu
