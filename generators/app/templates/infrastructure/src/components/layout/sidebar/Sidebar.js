import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { env } from 'utils/env'
import { StyledImage, StyledLogo, StyledLogoDefault, StyledLogoMini, Typography } from './SidebarStyle'
import WebSidebar from './WebSidebar'
import MobileSidebar from './MobileSidebar'
import { useMediaQuery } from 'react-responsive'
import { mobileWidth } from 'utils/constants'

function Sidebar({ logo, logoText, drawerOpen, changeLanguage, closeDrawer, withGradient }) {
  const { t } = useTranslation()
  const isMobile = useMediaQuery({ query: mobileWidth })

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

  return isMobile ? (
    <MobileSidebar
      drawerOpen={drawerOpen}
      closeDrawer={closeDrawer}
      brand={brand}
      changeLanguage={changeLanguage}
      withGradient={withGradient}
      appVersion={appVersion}
    />
  ) : (
    <WebSidebar drawerOpen={drawerOpen} brand={brand} changeLanguage={changeLanguage} withGradient={withGradient} appVersion={appVersion} />
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

export default Sidebar
