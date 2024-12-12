import { styled } from '@mui/material'
import styles from 'assets/jss/styles'
import { includes } from 'ramda'

export const Content = styled('div', {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  [theme.breakpoints.up('md')]: {
    float: 'right',
    width: `calc(100% - ${drawerOpen ? styles(theme)?.drawerWidth : styles(theme)?.drawerMiniWidth}px)`
  },
  ...styles(theme)?.transition,
  backgroundColor: theme.palette.background.default,
  overflow: 'hidden'
}))
