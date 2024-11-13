import { styled, AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material'
import styles from 'assets/jss/styles'

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  top: 0,
  bottom: 'auto',
  backgroundColor: styles(theme)?.topBarBkColor,
  ...styles(theme)?.themeBoxSecondaryShadow
}))

export const Toolbar = styled(MuiToolbar)(() => ({
  '@media (min-width: 600px)': {
    padding: '0px 16px'
  }
}))
