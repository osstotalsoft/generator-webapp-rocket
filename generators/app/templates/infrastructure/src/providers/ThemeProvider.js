import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import getTheme from 'utils/theme'
import { StyledEngineProvider } from '@mui/material/styles'

const theme = getTheme()

const ThemeProvider = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </StyledEngineProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export default ThemeProvider
