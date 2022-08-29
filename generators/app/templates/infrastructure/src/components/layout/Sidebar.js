import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import { Drawer, Hidden } from '@mui/material';
import { makeStyles} from 'tss-react/mui'
import { Typography } from '@totalsoft_oss/rocket-ui.core'
import { useTranslation } from 'react-i18next'
import { env } from 'utils/env'

import Menu from 'components/menu/Menu'
import UserMenu from '../menu/UserMenu'
import sidebarStyle from 'assets/jss/components/sidebarStyle'
import cx from 'classnames'
import { withRouter } from 'react-router-dom'
import { sidebarWrapperHeight } from 'utils/constants'

const useStyles = makeStyles()(sidebarStyle)

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.
function SidebarWrapper({ className, children }) {
  const sidebarWrapperRef = useRef()

  return (
    <div className={className} ref={sidebarWrapperRef}>
      <SimpleBar style={{ height: sidebarWrapperHeight, overflowX: 'hidden' }}>{children}</SimpleBar>
    </div>
  )
}

SidebarWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
}

function Sidebar({ logo, logoText, drawerOpen, changeLanguage, closeDrawer, withGradient }) {
  const { classes}  = useStyles()
  const { i18n, t } = useTranslation()

  const logoNormal =
    classes.logoNormal +
    ' ' +
    cx({
      [classes.logoNormalSidebarMini]: !drawerOpen
    })

  var brand = (
    <div className={classes.logo}>
      <a href='/' className={classes.logoMini}>
        <img src={logo} alt='logo' className={classes.img} />
      </a>
      {logoText && (
        <a href='/' className={logoNormal}>
          {logoText}
        </a>
      )}
    </div>
  )

  var appVersion = (
    <Typography className={classes.appVersion} variant={'caption'}>
      {`${t('BuildVersion')} ${env.REACT_APP_VERSION}`}
    </Typography>
  )

  const drawerPaper =
    classes.drawerPaper +
    ' ' +
    cx({
      [classes.drawerPaperMini]: !drawerOpen
    })
  const sidebarWrapper =
    classes.sidebarWrapper +
    ' ' +
    cx({
      [classes.drawerPaperMini]: !drawerOpen
    })

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant='temporary'
          anchor='right'
          open={drawerOpen}
          classes={{
            paper: drawerPaper + ' ' + classes.themeBackground
          }}
          onClose={closeDrawer}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <SidebarWrapper className={sidebarWrapper}>
            <UserMenu drawerOpen={drawerOpen} changeLanguage={changeLanguage} language={i18n.language} withGradient={withGradient} />
            <Menu drawerOpen={drawerOpen} withGradient={withGradient} />
          </SidebarWrapper>
          {appVersion}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor='left'
          variant='permanent'
          open={drawerOpen}
          classes={{
            paper: drawerPaper + ' ' + classes.themeBackground
          }}
        >
          {brand}
          <SidebarWrapper className={sidebarWrapper}>
            <UserMenu drawerOpen={drawerOpen} changeLanguage={changeLanguage} language={i18n.language} withGradient={withGradient} />
            <Menu drawerOpen={drawerOpen} withGradient={withGradient} />
          </SidebarWrapper>
          {appVersion}
        </Drawer>
      </Hidden>
    </div>
  )
}

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  logo: PropTypes.string,
  logoText: PropTypes.string,
  withGradient: PropTypes.bool.isRequired
}

//router is needed for re-rendering
export default withRouter(Sidebar)