import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Hidden } from '@mui/material'
import { MoreVert, ViewList, Menu } from '@mui/icons-material'
import { IconButton } from '@totalsoft/rocket-ui'
import { reduce } from 'ramda'

import menuConfig from 'constants/menuConfig'
import { emptyArray } from 'utils/constants'
import { useHeader } from 'providers/AreasProvider'
import { AppBar, Toolbar, MinimizeSidebar, StyledTitle, StyledMobileTitle, HeaderRef, HeaderResponsive } from './HeaderStyle'

const flatten = (arr, value) => arr.concat(value).concat(value.children ? flattenConfig(value.children) : emptyArray)
const flattenConfig = config =>  reduce(flatten, emptyArray, config)

function Header({ drawerOpen, handleDrawerToggle }) {
    const { t } = useTranslation()
    const location = useLocation()
    const [header] = useHeader()
    const headerRef = useRef()

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

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Hidden smDown>
                    <MinimizeSidebar>
                     { drawerOpen ? (
                        <IconButton color='white' onClick={handleDrawerToggle} size='medium'>
                            <MoreVert fontSize='small' />
                        </IconButton>
                    ) : (
                        <IconButton color='white' onClick={handleDrawerToggle} size='medium'>
                            <ViewList fontSize='small' />
                        </IconButton>
                    )}
                    </MinimizeSidebar>
                    {header || (
                        <StyledTitle variant='subtitle1'>
                            {pathName && t('NavBar.' + pathName)}
                        </StyledTitle>
                    )}
                </Hidden>
                <Hidden mdUp>
                    {header || (
                        <StyledMobileTitle variant='subtitle1'>
                            {pathName && t('NavBar.' + pathName)}
                        </StyledMobileTitle>
                    )}
                    <HeaderRef ref={headerRef}></HeaderRef>
                    <HeaderResponsive>
                        <IconButton color='secondary' aria-label='open drawer' onClick={handleDrawerToggle}>
                            <Menu fontSize='small' />
                        </IconButton>
                    </HeaderResponsive>
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
