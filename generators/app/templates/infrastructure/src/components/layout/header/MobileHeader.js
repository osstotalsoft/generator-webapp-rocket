import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useHeader } from 'providers/AreasProvider'
import { IconButton, Typography } from '@totalsoft/rocket-ui'
import Menu from '@mui/icons-material/Menu'
import { Stack } from '@mui/material'

const MobileHeader = ({ handleDrawerToggle, pathName }) => {
  const { t } = useTranslation()
  const [header] = useHeader()
  return (
    <>
      <Stack direction='row' gap={1} alignItems='center' width='100%'>
        {header || (
          <Typography emphasis='bold' variant='subtitle1'>
            {pathName && t('NavBar.' + pathName)}
          </Typography>
        )}
      </Stack>
      <IconButton variant='text' size='small' aria-label='open drawer' onClick={handleDrawerToggle}>
        <Menu fontSize='small' />
      </IconButton>
    </>
  )
}

MobileHeader.propTypes = {
  handleDrawerToggle: PropTypes.func,
  pathName: PropTypes.string
}

export default MobileHeader
