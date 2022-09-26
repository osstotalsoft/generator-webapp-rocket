import React, { useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { Hidden } from '@mui/material'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import { env } from 'utils/env'
import UserMenu from 'components/menu/user/UserMenu'
import Menu from 'components/menu/Menu'
import { sidebarWrapperHeight } from 'utils/constants'
import { Drawer, SidebarRef, StyledImage, StyledLogo, StyledLogoDefault, StyledLogoMini, Typography } from './SidebarStyle'

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.
function SidebarWrapper({ children, drawerOpen }) {
  const sidebarWrapperRef = useRef()

  return (
    <SidebarRef ref={sidebarWrapperRef} drawerOpen={drawerOpen}>
      <SimpleBar style={{ height: sidebarWrapperHeight, overflowX: 'hidden' }}>{children}</SimpleBar>
    </SidebarRef>
  )
}

SidebarWrapper.propTypes = {
  children: PropTypes.array.isRequired,
  drawerOpen: PropTypes.bool.isRequired
}

function Sidebar({ logo, logoText, drawerOpen, changeLanguage, closeDrawer, withGradient }) {
  const { i18n, t } = useTranslation()

  const brand = (
    <StyledLogo>
      <StyledLogoMini href='/'>
        <StyledImage src={logo} alt='logo' />
      </StyledLogoMini>
      {logoText && (
        <StyledLogoDefault href='/' drawerOpen={drawerOpen}>
          {logoText}
        </StyledLogoDefault>
      )}
    </StyledLogo>
  )

  const appVersion = <Typography variant={'caption'}>{`${t('BuildVersion')} ${env.REACT_APP_VERSION}`}</Typography>

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant='temporary'
          anchor='right'
          open={drawerOpen}
          onClose={closeDrawer}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          drawerOpen={drawerOpen}
        >
          {brand}
          <SidebarWrapper drawerOpen={drawerOpen}>
            <UserMenu drawerOpen={drawerOpen} changeLanguage={changeLanguage} language={i18n.language} withGradient={withGradient} />
            <Menu drawerOpen={drawerOpen} withGradient={withGradient} />
          </SidebarWrapper>
          {appVersion}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer anchor='left' variant='permanent' open={drawerOpen} drawerOpen={drawerOpen}>
          {brand}
          <SidebarWrapper drawerOpen={drawerOpen}>
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
