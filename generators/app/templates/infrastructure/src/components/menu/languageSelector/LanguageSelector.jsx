import PropTypes from 'prop-types'
import ReactCountryFlag from 'react-country-flag'
import { MenuItem, Select, Typography } from './LanguageStyle'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'

function EmptyElement() {
  return <span></span>
}

const LanguageSelector = ({ drawerOpen }) => {
  const { i18n } = useTranslation()
  const iconComponent = !drawerOpen ? { IconComponent: EmptyElement } : {}

  const changeLanguage = useCallback(
    lng => {
      i18n.changeLanguage(lng.target.value)
    },
    [i18n]
  )

  return (
    <Select value={i18n.language} onChange={changeLanguage} {...iconComponent} variant='standard' drawerOpen={drawerOpen}>
      <MenuItem value='ro'>
        <ReactCountryFlag countryCode='RO' svg style={{ margin: '0px 7px' }} />
        {drawerOpen && <Typography>{'Romana'}</Typography>}
      </MenuItem>
      <MenuItem value='en'>
        <ReactCountryFlag countryCode='GB' svg style={{ margin: '0px 7px' }} />
        {drawerOpen && <Typography>{'English'}</Typography>}
      </MenuItem>
    </Select>
  )
}

LanguageSelector.propTypes = {
  drawerOpen: PropTypes.bool
}

export default LanguageSelector
