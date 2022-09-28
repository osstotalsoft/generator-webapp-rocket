import { styled, Typography, AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material'
import styles from 'assets/jss/styles'

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
    marginBottom: '0',
      width: '100%',
      zIndex: '1029',
      color: theme.palette.primary.main,
      border: '0',
      borderRadius: '3px',
      transition: 'all 150ms ease 0s',
      minHeight: '50px',
      display: 'block',
      '@media (max-width: 80px)': {
        position: 'relative',
        backgroundColor: theme.palette.sideMenu.bgColor + '!important',
        padding: 0
      },
      backgroundColor: styles(theme)?.topBarBkColor,
      ...styles(theme)?.themeBoxSecondaryShadow
}))

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
    ...styles(theme)?.containerFluid,
      minHeight: '50px',
      '@media (max-width: 80px)': {
        display: 'flex',
        flexDirection: 'column'
      }
}))

export const MinimizeSidebar = styled('div')(() => ({
    float: 'left',
    padding: '10px 15px',
    display: 'block',
    color: '#555555'
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
    borderRadius: '3px',
      textTransform: 'none',
      fontWeight: 'bold',
      color: styles(theme)?.primaryColor,
      '&:hover,&:focus': {
        background: 'transparent'
      }
}))

export const StyledMobileTitle = styled(Typography)(({ theme }) => ({
    borderRadius: '3px',
    textTransform: 'none',
    fontWeight: 'bold',
    color: styles(theme)?.primaryColor,
    '&:hover,&:focus': {
      background: 'transparent'
    } 
}))

export const HeaderRef = styled('div')(() => ({
    flex: 1,
      '@media (max-width: 80px)': {
        width: 'calc(100% - 30px)',
        marginRight: '30px'
      }
}))

export const HeaderResponsive = styled('div')(() => ({
    padding: '10px 0px',
      '@media (max-width: 80px)': {
        position: 'absolute',
        padding: '5px 15px',
        right: 0,
        top: 0
      }
}))