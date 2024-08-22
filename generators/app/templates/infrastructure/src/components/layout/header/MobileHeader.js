import React from 'react'
import PropTypes from 'prop-types'
import { useHeader } from 'providers/AreasProvider'
import { useTranslation } from 'react-i18next'
import { MinimizeSidebar, StyledTitle } from './HeaderStyle'
import { IconButton } from '@totalsoft/rocket-ui'
import { MoreVert, ViewList } from '@mui/icons-material'

const MobileHeader = ({ drawerOpen, handleDrawerToggle, pathName }) => {
  const { t } = useTranslation()
  const [header] = useHeader()
  return (
    <>
      <MinimizeSidebar>
        {drawerOpen ? (
          <IconButton color='white' onClick={handleDrawerToggle} size='medium'>
            <MoreVert fontSize='small' />
          </IconButton>
        ) : (
          <IconButton color='white' onClick={handleDrawerToggle} size='medium'>
            <ViewList fontSize='small' />
          </IconButton>
        )}
      </MinimizeSidebar>
      {header || <StyledTitle variant='subtitle1'>{pathName && t('NavBar.' + pathName)}</StyledTitle>}
    </>
  )
}

MobileHeader.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func,
  pathName: PropTypes.string
}

export default MobileHeader
