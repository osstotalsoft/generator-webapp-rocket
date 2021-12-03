import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Collapse, List } from "@material-ui/core";
import MenuItem from "./MenuItem";

const CollapsibleMenuItem = ({ menu, drawerOpen, activeRoute }) => {
  const [open, setOpen] = useState(false)
  const toggleSubMenu = useCallback(() => setOpen(current => !current), [])

  return (
    <>
      <MenuItem menu={menu} drawerOpen={drawerOpen} subMenuOpen={open} onToggleSubMenu={toggleSubMenu} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {menu?.children?.map((subMenu, key) => (
            <MenuItem key={key} menu={subMenu} drawerOpen={drawerOpen} activeRoute={activeRoute} isSubMenuItem={true} />
          ))}
        </List>
      </Collapse>
    </>
  )
};

CollapsibleMenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  activeRoute: PropTypes.func.isRequired
};

export default CollapsibleMenuItem;
