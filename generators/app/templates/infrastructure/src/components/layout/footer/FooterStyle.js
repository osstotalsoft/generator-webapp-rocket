import { styled, AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material'
import styles from 'assets/jss/styles'

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '0',
    marginBottom: '0',
    width: '100%',
    zIndex: '1029',
    color: theme.palette.primary.main,
    border: '0',
    borderRadius: '3px',
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
    display: 'block',
    '@media (max-width: 480px)': {
      backgroundColor: theme.palette.white.main + '!important',
      paddingTop: '10px',
      padding: 0
    },
    bottom: 0,
    left: 'auto',
    right: 0,
    position: 'sticky'
}))

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
    ...styles(theme)?.container,
    zIndex: 3,
    display: 'block',
    marginLeft: 'unset',
    marginRight: 'unset',
    width: '100% !important',
    backgroundColor: 'transparent',
    minHeight: '10px'
}))

export const FooterRef = styled('div')(() => ({
    width: '100%',
      flex: 1,
      '@media (max-width: 480px)': {
        width: 'calc(100% - 30px)',
        marginRight: '30px'
       }
}))

export const Content = styled('div')(() => ({
    padding: '0px 25px'
}))