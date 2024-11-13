import { styled, Drawer as MuiDrawer, Typography as MuiTypography } from '@mui/material'
import { includes } from 'ramda'
import styles from 'assets/jss/styles'
import { sidebarWrapperHeight } from 'utils/constants'

export const SidebarRef = styled('div', {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  [theme.breakpoints.up('md')]: {
    ...styles(theme)?.transition
  },
  position: 'relative',
  height: sidebarWrapperHeight,
  overflow: 'none',
  width: '260px',
  zIndex: '4',
  overflowScrolling: 'touch',
  color: 'inherit',
  ...(!drawerOpen && {
    overflow: 'none',
    width: styles(theme)?.drawerMiniWidth + 'px!important'
  })
}))

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  [`& .MuiDrawer-paper`]: {
    ...styles(theme)?.transition,
    border: 'none',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    zIndex: '1032',
    overflowY: 'unset',
    ...styles(theme)?.boxShadow,
    width: styles(theme)?.drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: styles(theme)?.drawerWidth,
      position: 'fixed',
      height: '100%'
    },
    [theme.breakpoints.down('md')]: {
      width: styles(theme)?.drawerWidth,
      ...styles(theme)?.boxShadow,
      position: 'fixed',
      top: '0',
      height: '100vh',
      right: '0',
      left: 'auto',
      zIndex: '1032',
      visibility: 'visible',
      overflowY: 'visible',
      borderTop: 'none',
      textAlign: 'left',
      paddingRight: '0px',
      paddingLeft: '0',
      ...styles(theme)?.transition
    },
    '&:before,&:after': {
      position: 'absolute',
      zIndex: '3',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      top: '0'
    },
    ...(!drawerOpen && {
      overflow: 'none',
      width: styles(theme)?.drawerMiniWidth + 'px!important'
    }),
    color: styles(theme)?.menuColor,
    '&:after': {
      background: styles(theme)?.menuBkColor,
      opacity: styles(theme)?.menuBkOpacity
    }
  }
}))

export const StyledLogo = styled('div')(({ theme }) => ({
  padding: '15px 0px 30px 0',
  margin: '0',
  display: 'block',
  position: 'relative',
  zIndex: '4',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    height: '1px',
    right: '15px',
    width: 'calc(100% - 30px)',
    backgroundColor: theme.palette.primary.main
  }
}))

export const StyledLogoMini = styled('a')(({ theme }) => ({
  ...styles(theme)?.transition,
  opacity: 1,
  textAlign: 'center',
  display: 'inline-block',
  maxHeight: '30px',
  marginLeft: '22px',
  marginRight: '18px',
  marginTop: '7px',
  color: 'inherit'
}))

export const StyledImage = styled('img')(() => ({
  width: '100%',
  verticalAlign: 'middle',
  border: '0'
}))

export const StyledLogoDefault = styled('a', {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  ...styles(theme)?.defaultFont,
  ...styles(theme)?.transition,
  display: 'block',
  opacity: '1',
  transform: 'translate3d(0px, 0, 0)',
  textTransform: 'uppercase',
  padding: '5px 0px',
  fontSize: '18px',
  whiteSpace: 'nowrap',
  fontWeight: '400',
  lineHeight: '30px',
  overflow: 'hidden',
  '&,&:hover,&:focus': {
    color: 'inherit'
  },
  ...(!drawerOpen && {
    opacity: '0',
    transform: 'translate3d(-25px, 0, 0)'
  })
}))

export const Typography = styled(MuiTypography)(({ theme }) => ({
  ...styles(theme)?.defaultFont,
  padding: '0px 10px',
  margin: '0',
  display: 'block',
  zIndex: '4'
}))
