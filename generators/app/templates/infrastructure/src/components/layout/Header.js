import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import menuConfig from 'constants/menuConfig'
import { reduce } from 'ramda'
import { useHeader } from 'providers/AreasProvider'
// material-ui components
import { makeStyles, AppBar, Toolbar, Hidden, Typography } from '@material-ui/core'

import { IconButton } from '@bit/totalsoft_oss.react-mui.kit.core'

// material-ui icons
import MoreVert from '@material-ui/icons/MoreVert'
import ViewList from '@material-ui/icons/ViewList'
import Menu from '@material-ui/icons/Menu'

// core components
import headerStyle from 'assets/jss/components/headerStyle'

const useStyles = makeStyles(headerStyle)

const flatten = (arr, value) => arr.concat(value).concat(value.children ? flattenConfig(value.children) : [])
const flattenConfig = config =>  reduce(flatten, [], config)

function Header({ drawerOpen, handleDrawerToggle }) {
    const { t } = useTranslation()
    const location = useLocation()
    const [header] = useHeader()
    const classes = useStyles()

    const makeBrand = pathname => {
        var name
        flattenConfig(menuConfig).map(menu => {
            if (menu.path === pathname) {
                name = menu.name
            }
            return null
        })
        if (pathname === '/user') {
            name = 'User'
        }

        return name || ''
    }

    const pathName = makeBrand(location.pathname)
    const headerRef = useRef()

    return (
        <AppBar position='sticky' className={classes.appBar + ' ' + classes.theme}>
            <Toolbar className={classes.container}>
                <Hidden smDown>
                    <div className={classes.sidebarMinimize}>
                        {!drawerOpen ? (
                            <IconButton color='primaryNoBackground' onClick={handleDrawerToggle}>
                                <ViewList fontSize='small' />
                            </IconButton>
                        ) : (
                            <IconButton color='primaryNoBackground' onClick={handleDrawerToggle}>
                                <MoreVert fontSize='small' />
                            </IconButton>
                        )}
                    </div>
                    {header || (
                        <Typography variant='subtitle1' className={classes.title}>
                            {pathName && t('NavBar.' + pathName)}
                        </Typography>
                    )}
                </Hidden>
                <Hidden mdUp>
                    {header || (
                        <Typography variant='subtitle1' className={classes.titleMobile}>
                            {pathName && t('NavBar.' + pathName)}
                        </Typography>
                    )}
                    <div className={classes.w100} ref={headerRef}></div>
                    <div className={classes.appResponsive}>
                        <IconButton color='themeWithBackground' aria-label='open drawer' onClick={handleDrawerToggle}>
                            <Menu fontSize='small' />
                        </IconButton>
                    </div>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    drawerOpen: PropTypes.bool.isRequired,
    handleDrawerToggle: PropTypes.func
}

export default Header
