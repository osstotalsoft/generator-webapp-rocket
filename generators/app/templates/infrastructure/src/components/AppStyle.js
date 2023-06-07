import { styled } from '@mui/material'
import styles from 'assets/jss/styles'
import { includes } from 'ramda'

export const Container = styled('div')(({ theme }) => ({
  ...styles(theme)?.defaultFont,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main,
  position: 'relative',
  top: '0',
  height: '100vh',
  '&:after': {
    display: 'table',
    clear: 'both',
    content: '" "'
  }
}))

export const Content = styled('div', {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  [theme.breakpoints.up('md')]: {
    width: `calc(100% - ${styles(theme)?.drawerWidth}px)`
  },
  overflow: 'auto',
  overflowX: 'hidden',
  position: 'relative',
  float: 'right',
  maxHeight: '100%',
  height: '100%',
  width: '100%',
  overflowScrolling: 'touch',
  ...(!drawerOpen && {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${styles(theme)?.drawerMiniWidth}px)`
    }
  })
}))
