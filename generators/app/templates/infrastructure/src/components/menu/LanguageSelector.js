import React from 'react'
import PropTypes from 'prop-types'
import Flag from 'react-flags'
import { Select, ListItem, makeStyles } from '@material-ui/core'
import { Typography } from '@bit/totalsoft_oss.react-mui.kit.core'
import langSelectorStyle from 'assets/jss/components/langSelectorStyle'

const useStyles = makeStyles(langSelectorStyle)

function EmptyElement() {
    return <span></span>
}

const LanguageSelector = ({ language, changeLanguage, drawerOpen }) => {
    const classes = useStyles()
    const iconComponent = !drawerOpen ? { IconComponent: EmptyElement } : {}

    return (
        <Select
            className={classes.langSelectorContainer}
            classes={{ selectMenu: classes.langSelectMenu, icon: classes.langSelectCaret }}
            value={language}
            onChange={changeLanguage}
            {...iconComponent}
        >
            <ListItem button value='ro' className={classes.langSelectorItem}>
                <Flag name='RO' format='png' pngSize={32} shiny={true} basePath='/static/flags' />
                {drawerOpen && <Typography className={classes.langSelectorText}>{'Romana'}</Typography>}
            </ListItem>
            <ListItem button value='en' className={classes.langSelectorItem}>
                <Flag name='GB' format='png' pngSize={32} shiny={true} basePath='/static/flags' />
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