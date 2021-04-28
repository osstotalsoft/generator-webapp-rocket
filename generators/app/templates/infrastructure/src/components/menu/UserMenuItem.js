import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { ListItem, ListItemIcon, ListItemText, makeStyles, Tooltip } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import userMenuStyle from 'assets/jss/components/userMenuStyle'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(userMenuStyle)

const UserMenuItem = ({ userMenu, miniActive, activeRoute }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [currentMiniActive] = useState(true);

  const navLinkClasses =
    classes.itemLink +
    ' ' +
    cx({
      [' ' + classes.menuActiveColor]: activeRoute(userMenu.path)
    })
  const itemText =
    classes.itemText +
    ' ' +
    cx({
      [classes.itemTextMini]: miniActive && currentMiniActive
    })

  const text = t(userMenu.text)

  return (
    <Tooltip disableHoverListener={!miniActive} title={text}>
      <ListItem className={classes.collapseItem}>
        <NavLink to={userMenu.path} className={navLinkClasses}>
          <ListItemIcon className={classes.userItemIcon}>{userMenu.icon}</ListItemIcon>
          <ListItemText primary={text} disableTypography={true} className={itemText} />
        </NavLink>
      </ListItem>
    </Tooltip>
  )
}

UserMenuItem.propTypes = {
  userMenu: PropTypes.object.isRequired,
  miniActive: PropTypes.bool.isRequired,
  activeRoute: PropTypes.func.isRequired
}

export default UserMenuItem
