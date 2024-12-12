import PropTypes from 'prop-types'
import { Stack, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ListItemIcon, ListItemText, StyledArrowDropDown, StyledArrowDropUp, StyledNavLink } from './MenuStyle'

const getActiveChild = (children, activeRoute) => {
  if (!children) return false
  return children.some(child => activeRoute(child.path) || getActiveChild(child.children, activeRoute))
}
const MenuItem = ({ menu, drawerOpen, activeRoute, isSubMenuItem, subMenuOpen, onToggleSubMenu, withGradient }) => {
  const { t } = useTranslation()

  const { children, path, icon, text } = menu
  const isSubMenu = Boolean(children)
  const isActive = activeRoute && (activeRoute(path) || (!isSubMenuItem && getActiveChild(children, activeRoute)))
  const translatedText = t(text)
  const itemProps = isSubMenu ? { to: '/', onClick: onToggleSubMenu } : { to: path }

  return (
    <Tooltip disableHoverListener={drawerOpen} title={translatedText} placement='right'>
      <StyledNavLink {...itemProps} isActive={isActive} withGradient={withGradient}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText
          primary={
            <Stack direction='row'>
              {translatedText}
              {isSubMenu &&
                (subMenuOpen ? <StyledArrowDropUp isSubMenuItem={isSubMenuItem} /> : <StyledArrowDropDown isSubMenuItem={isSubMenuItem} />)}
            </Stack>
          }
          drawerOpen={drawerOpen}
          disableTypography={true}
        />
      </StyledNavLink>
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
