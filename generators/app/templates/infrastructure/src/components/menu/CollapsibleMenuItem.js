import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Collapse, List } from "@mui/material";
import MenuItem from "./MenuItem";

const CollapsibleMenuItem = ({ menu, ...rest }) => {
  const [open, setOpen] = useState(false)
  const toggleSubMenu = useCallback(() => setOpen(current => !current), [])

  const renderSubMenu = useCallback(
    menu => {
      if (menu?.children?.length > 0) 
        return (
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List disablePadding sx={{ paddingLeft: '20px' }}>
              {menu.children.map((subMenu, key) => (
                <CollapsibleMenuItem key={key} menu={subMenu} isSubMenuItem={true} {...rest} />
              ))}
            </List>
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
};

CollapsibleMenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  activeRoute: PropTypes.func.isRequired,
  withGradient: PropTypes.bool.isRequired
};

export default CollapsibleMenuItem;
