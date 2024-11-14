import { styled } from '@mui/material'
import styles from 'assets/jss/styles'
import { includes } from 'ramda'

export const Container = styled('div')(({ theme }) => ({
  ...styles(theme)?.defaultFont,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main
}))

export const Content = styled('div', {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  [theme.breakpoints.up('md')]: {
    float: 'right',
    width: `calc(100% - ${drawerOpen ? styles(theme)?.drawerWidth : styles(theme)?.drawerMiniWidth}px)`
  },
  ...styles(theme)?.transition
}))
