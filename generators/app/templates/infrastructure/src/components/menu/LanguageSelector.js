import React from 'react';
import PropTypes from 'prop-types';
import Flag from "react-flags";
import { Select, ListItem, makeStyles } from "@material-ui/core";
import Typography from 'components/common/inputs/Typography';
import langSelectorStyle from 'assets/jss/components/langSelectorStyle'

const useStyles = makeStyles(langSelectorStyle);

function EmptyElement() {
    return <span></span>
}

const LanguageSelector = ({ language, changeLanguage, miniActive }) => {
    const classes = useStyles();
    const iconComponent = miniActive ? { IconComponent: EmptyElement } : {}

    return (
        <div className={classes.langSelectorContainer}>
            <Select className={classes.langSelector}
                classes={{ selectMenu: classes.langSelectMenu }}
                value={language}
                onChange={changeLanguage}
                {...iconComponent}>
                <ListItem button value="ro" className={classes.langSelectorItem}>
                    <Flag name="RO"
                        format="png"
                        pngSize={32}
                        shiny={true}
                        basePath="/static/flags"
                    />
                    {!miniActive && <Typography className={classes.langSelectorText}>{'Romana'}</Typography>}
                </ListItem>
                <ListItem button value="en" className={classes.langSelectorItem}>
                    <Flag name="GB"
                        format="png"
                        pngSize={32}
                        shiny={true}
                        basePath="/static/flags"
                    />
                    {!miniActive && <Typography className={classes.langSelectorText}>{'English'}</Typography>}
                </ListItem>
            </Select>
        </div >
    )
}

LanguageSelector.propTypes = {
    changeLanguage: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    miniActive: PropTypes.bool
}

export default LanguageSelector;