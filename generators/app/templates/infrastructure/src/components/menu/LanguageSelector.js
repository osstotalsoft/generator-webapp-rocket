import React from 'react'
import PropTypes from 'prop-types'
import ReactCountryFlag from 'react-country-flag'
import { Select, ListItem } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { Typography } from '@totalsoft_oss/rocket-ui.core'
import langSelectorStyle from 'assets/jss/components/langSelectorStyle'

const useStyles = makeStyles()(langSelectorStyle)

function EmptyElement() {
  return <span></span>
}

const LanguageSelector = ({ language, changeLanguage, drawerOpen }) => {
  const { classes } = useStyles()
  const iconComponent = !drawerOpen ? { IconComponent: EmptyElement } : {}

  return (
    <Select
      className={classes.langSelectorContainer}
      classes={{ select: classes.langSelectMenu, icon: classes.langSelectCaret }}
      value={language}
      onChange={changeLanguage}
      {...iconComponent}
      variant='standard'
    >
      <ListItem button value='ro' className={classes.langSelectorItem}>
        <ReactCountryFlag countryCode='RO' svg style={{ margin: '0px 10px' }} />
        {drawerOpen && <Typography className={classes.langSelectorText}>{'Romana'}</Typography>}
      </ListItem>
      <ListItem button value='en' className={classes.langSelectorItem}>
        <ReactCountryFlag countryCode='GB' svg style={{ margin: '0px 10px' }} />
        {drawerOpen && <Typography className={classes.langSelectorText}>{'English'}</Typography>}
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
