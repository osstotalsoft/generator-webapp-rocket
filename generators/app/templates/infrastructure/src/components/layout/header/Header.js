import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { reduce } from 'ramda'
import menuConfig from 'constants/menuConfig'
import { emptyArray, mobileWidth } from 'utils/constants'
import { AppBar, Toolbar } from './HeaderStyle'
import { useMediaQuery } from 'react-responsive'
import MobileHeader from './MobileHeader'
import WebHeader from './WebHeader'

const flatten = (arr, value) => arr.concat(value).concat(value.children ? flattenConfig(value.children) : emptyArray)
const flattenConfig = config => reduce(flatten, emptyArray, config)

function Header({ drawerOpen, handleDrawerToggle }) {
  const location = useLocation()
  const isMobile = useMediaQuery({ query: mobileWidth })

  const makeBrand = pathname => {
    var name
    flattenConfig(menuConfig).map(menu => {
      if (menu.path === pathname) {
        name = menu.name
      }
      if (menu.children) flattenConfig(menu.children)
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
        {isMobile ? (
          <MobileHeader drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} pathName={pathName} />
        ) : (
          <WebHeader handleDrawerToggle={handleDrawerToggle} pathName={pathName} />
        )}
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func
}

export default Header
