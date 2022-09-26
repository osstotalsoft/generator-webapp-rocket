import React from 'react'
import PropTypes from 'prop-types'
import ReactCountryFlag from 'react-country-flag'
import { ListItem, Select, Typography } from './LanguageStyle'

function EmptyElement() {
  return <span></span>
}

const LanguageSelector = ({ language, changeLanguage, drawerOpen }) => {
  const iconComponent = !drawerOpen ? { IconComponent: EmptyElement } : {}

  return (
    <Select
      value={language}
      onChange={changeLanguage}
      {...iconComponent}
      variant='standard'
    >
      <ListItem button value='ro'>
        <ReactCountryFlag countryCode='RO' svg style={{ margin: '0px 10px' }} />
        {drawerOpen && <Typography>{'Romana'}</Typography>}
      </ListItem>
      <ListItem button value='en'>
        <ReactCountryFlag countryCode='GB' svg style={{ margin: '0px 10px' }} />
        {drawerOpen && <Typography>{'English'}</Typography>}
      </ListItem>
    </Select>
  )
}

LanguageSelector.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  drawerOpen: PropTypes.bool
}

export default LanguageSelector
