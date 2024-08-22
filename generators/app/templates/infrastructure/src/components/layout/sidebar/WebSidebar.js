import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Drawer } from './SidebarStyle'
import SidebarWrapper from './SidebarWrapper'
import UserMenu from 'components/menu/user/UserMenu'
import Menu from 'components/menu/Menu'

const WebSidebar = ({ drawerOpen, brand, changeLanguage, withGradient, appVersion }) => {
  const { i18n } = useTranslation()
  return (
    <Drawer anchor='left' variant='permanent' open={drawerOpen} drawerOpen={drawerOpen}>
      {brand}
      <SidebarWrapper drawerOpen={drawerOpen}>
        <UserMenu drawerOpen={drawerOpen} changeLanguage={changeLanguage} language={i18n.language} withGradient={withGradient} />
        <Menu drawerOpen={drawerOpen} withGradient={withGradient} />
      </SidebarWrapper>
      {appVersion}
    </Drawer>
  )
}

WebSidebar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  brand: PropTypes.node.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  withGradient: PropTypes.bool.isRequired,
  appVersion: PropTypes.node.isRequired
}

export default WebSidebar
