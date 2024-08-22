import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useHeader } from 'providers/AreasProvider'
import { HeaderRef, HeaderResponsive, StyledMobileTitle } from './HeaderStyle'
import { IconButton } from '@totalsoft/rocket-ui'
import Menu from '@mui/icons-material/Menu'

const WebHeader = ({ handleDrawerToggle, pathName }) => {
  const { t } = useTranslation()
  const [header] = useHeader()
  const headerRef = useRef()
  return (
    <>
      {header || <StyledMobileTitle variant='subtitle1'>{pathName && t('NavBar.' + pathName)}</StyledMobileTitle>}
      <HeaderRef ref={headerRef}></HeaderRef>
      <HeaderResponsive>
        <IconButton color='secondary' aria-label='open drawer' onClick={handleDrawerToggle}>
          <Menu fontSize='small' />
        </IconButton>
      </HeaderResponsive>
    </>
  )
}

WebHeader.propTypes = {
  handleDrawerToggle: PropTypes.func,
  pathName: PropTypes.string
}

export default WebHeader
