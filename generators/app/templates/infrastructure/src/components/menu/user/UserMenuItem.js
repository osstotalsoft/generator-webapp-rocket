import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ListItemIcon, ListItemText, StyledMenuItem, StyledNavLinkMenuItem } from './UserMenuStyle'

const UserMenuItem = ({ userMenu, drawerOpen, activeRoute, withGradient }) => {
  const isActive = activeRoute && activeRoute(userMenu.path)
  const { t } = useTranslation()

  const text = t(userMenu.text)

  return (
    <Tooltip disableHoverListener={drawerOpen} title={text}>
    <StyledMenuItem>
      <StyledNavLinkMenuItem isActive={isActive} withGradient={withGradient} to={userMenu.path}>
        <ListItemIcon>{userMenu.icon}</ListItemIcon>
        <ListItemText primary={text} disableTypography={true} drawerOpen={drawerOpen} />
      </StyledNavLinkMenuItem>
    </StyledMenuItem>
  </Tooltip>
  )
}

UserMenuItem.propTypes = {
  userMenu: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  activeRoute: PropTypes.func.isRequired,
  withGradient: PropTypes.bool.isRequired
}

export default UserMenuItem
