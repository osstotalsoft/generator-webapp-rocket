import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from '@mui/material'
import MenuItem from './MenuItem'
import { StyledList } from './MenuStyle'

const CollapsibleMenuItem = ({ menu, ...rest }) => {
  const [open, setOpen] = useState(false)
  const toggleSubMenu = useCallback(e => {
    setOpen(current => !current)
    e.preventDefault()
  }, [])

  const renderSubMenu = useCallback(
    menu => {
      if (menu?.children?.length > 0)
        return (
          <Collapse in={open} timeout='auto' unmountOnExit>
            <StyledList disablePadding >
              {menu.children.map((subMenu, key) => (
                <CollapsibleMenuItem key={key} menu={subMenu} isSubMenuItem={true} {...rest} />
              ))}
            </StyledList>
          </Collapse>
        )
      return null
    },
    [open, rest]
  )

  return (
    <>
      <MenuItem menu={menu} subMenuOpen={open} onToggleSubMenu={toggleSubMenu} {...rest} />
      {renderSubMenu(menu)}
    </>
  )
}

CollapsibleMenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  activeRoute: PropTypes.func.isRequired,
  withGradient: PropTypes.bool.isRequired
}

export default CollapsibleMenuItem
