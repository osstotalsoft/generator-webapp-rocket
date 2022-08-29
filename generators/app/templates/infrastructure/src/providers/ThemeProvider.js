import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import getTheme from 'utils/theme'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

const muiCache = createCache({
  key: 'mui',
  prepend: true
})

const theme = getTheme()

const ThemeProvider = ({ children }) => {
  return (
    <CacheProvider value={muiCache}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </CacheProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export default ThemeProvider
