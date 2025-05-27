import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { env } from 'utils/env'
import { Divider, Drawer, StyledImage, StyledLogo, StyledLogoDefault, StyledLogoMini } from './SidebarStyle'
import { useMediaQuery } from 'react-responsive'
import { mobileWidth } from 'utils/constants'
import { Typography } from '@totalsoft/rocket-ui'
import UserMenu from 'components/menu/user/UserMenu'
import Menu from 'components/menu/Menu'

function Sidebar({ logo, logoText, drawerOpen, closeDrawer, withGradient }) {
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

  const appVersion = (
    <Typography
      variant='caption'
      sx={{ position: 'absolute', bottom: 0, ml: 2 }}
    >{`${t('BuildVersion')} ${env.VITE_APP_VERSION}`}</Typography>
  )

  const drawerProps = isMobile
    ? {
        variant: 'temporary',
        anchor: 'right',
        ModalProps: {
          keepMounted: true // Better open performance on mobile.
        }
      }
    : { anchor: 'left', variant: 'permanent' }
  return (
    <Drawer open={drawerOpen} drawerOpen={drawerOpen} onClose={closeDrawer} {...drawerProps}>
      {brand}
      <Divider />
      <UserMenu drawerOpen={drawerOpen} withGradient={withGradient} />
      <Divider />
      <Menu drawerOpen={drawerOpen} withGradient={withGradient} />
      {appVersion}
    </Drawer>
  )
}

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  logo: PropTypes.string,
  logoText: PropTypes.string,
  withGradient: PropTypes.bool.isRequired
}

export default Sidebar
