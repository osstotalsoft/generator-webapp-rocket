import PropTypes from 'prop-types'
import { useHeader } from 'providers/AreasProvider'
import { useTranslation } from 'react-i18next'
import { IconButton, Typography } from '@totalsoft/rocket-ui'
import { MoreVert, ViewList } from '@mui/icons-material'
import { Stack } from '@mui/material'

const WebHeader = ({ drawerOpen, handleDrawerToggle, pathName }) => {
  const { t } = useTranslation()
  const [header] = useHeader()
  return (
    <Stack direction='row' gap={1} alignItems='center'>
      <IconButton variant='text' onClick={handleDrawerToggle} size='small'>
        {drawerOpen ? <MoreVert fontSize='small' /> : <ViewList fontSize='small' />}
      </IconButton>
      {header || (
        <Typography emphasis='bold' variant='subtitle1'>
          {pathName && t('NavBar.' + pathName)}
        </Typography>
      )}
    </Stack>
  )
}

WebHeader.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func,
  pathName: PropTypes.string
}

export default WebHeader
