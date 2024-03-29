import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ListItem, ListItemIcon, ListItemLink, ListItemText, StyledArrowDropDown, StyledArrowDropUp, StyledNavLink } from './MenuStyle'

const MenuItem = ({ menu, drawerOpen, activeRoute, isSubMenuItem, subMenuOpen, onToggleSubMenu, withGradient }) => {
  const { t } = useTranslation()
  const { children, path, icon, text } = menu
  const isSubMenu = Boolean(children)
  const isActive = activeRoute && activeRoute(path)

  const translatedText = t(text)
  const Item = isSubMenu ? ListItemLink : StyledNavLink
  const itemProps = isSubMenu ? { onClick: onToggleSubMenu, button: true } : { to: path }

  return (
    <Tooltip disableHoverListener={drawerOpen} title={translatedText}>
    <ListItem>
      <Item {...itemProps} isSubMenu={isSubMenu} isActive={isActive} withGradient={withGradient}>
        <ListItemIcon isSubMenuItem={isSubMenuItem} drawerOpen={drawerOpen}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={translatedText}
          secondary={
            isSubMenu &&
            (subMenuOpen ? <StyledArrowDropUp isSubMenuItem={isSubMenuItem} /> : <StyledArrowDropDown isSubMenuItem={isSubMenuItem} />)
          }
          disableTypography={true}
          drawerOpen={drawerOpen}
        />
      </Item>
    </ListItem>
  </Tooltip>
  )
}

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  activeRoute: PropTypes.func,
  isSubMenuItem: PropTypes.bool,
  subMenuOpen: PropTypes.bool,
  onToggleSubMenu: PropTypes.func,
  withGradient: PropTypes.bool.isRequired
}

export default MenuItem
