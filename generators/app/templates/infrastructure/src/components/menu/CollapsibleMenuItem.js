import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Collapse, List } from "@material-ui/core";
import MenuItem from "./MenuItem";

const CollapsibleMenuItem = ({ menu, ...rest }) => {
  const [open, setOpen] = useState(false)
  const toggleSubMenu = useCallback(() => setOpen(current => !current), [])

  return (
    <>
      <MenuItem menu={menu} subMenuOpen={open} onToggleSubMenu={toggleSubMenu} {...rest} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {menu?.children?.map((subMenu, key) => (
            <MenuItem key={key} menu={subMenu} isSubMenuItem={true} {...rest} />
          ))}
        </List>
      </Collapse>
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
