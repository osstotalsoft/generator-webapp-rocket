import { styled, AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material'
import styles from 'assets/jss/styles'

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  ...styles(theme)?.transition,
  bottom: 0,
  top: 'auto',
  backgroundColor: styles(theme)?.topBarBkColor
}))

export const Toolbar = styled(MuiToolbar)(() => ({
  '@media (min-width: 600px)': {
    padding: '0px 16px'
  }
}))
