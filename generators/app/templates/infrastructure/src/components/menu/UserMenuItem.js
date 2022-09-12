import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import { makeStyles} from 'tss-react/mui'
import { NavLink } from 'react-router-dom'
import userMenuStyle from 'assets/jss/components/userMenuStyle'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles()(userMenuStyle)

const UserMenuItem = ({ userMenu, drawerOpen, activeRoute, withGradient }) => {
  const isActive = activeRoute && activeRoute(userMenu.path)
  const { classes } = useStyles({ isActive, withGradient })
  const { t } = useTranslation()

  const itemText =
    classes.itemText +
    ' ' +
    cx({
      [classes.itemTextMini]: !drawerOpen
    })

  const text = t(userMenu.text)

  return (
    <Tooltip disableHoverListener={drawerOpen} title={text}>
      <ListItem className={classes.collapseItem}>
        <NavLink to={userMenu.path} className={classes.itemLink}>
          <ListItemIcon className={classes.itemIcon + ' ' + classes.myProfileIcon}>{userMenu.icon}</ListItemIcon>
          <ListItemText primary={text} disableTypography={true} className={itemText} />
        </NavLink>
      </ListItem>
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
