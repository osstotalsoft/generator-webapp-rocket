import { styled, Drawer as MuiDrawer, Divider as MuiDivider, hexToRgb } from '@mui/material'
import { includes } from 'ramda'
import styles from 'assets/jss/styles'

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  [`& .MuiDrawer-paper`]: {
    ...styles(theme)?.transition,
    border: 'none',
    position: 'fixed',
    color: styles(theme)?.menuColor,
    background: styles(theme)?.menuBkColor,
    width: drawerOpen ? styles(theme)?.drawerWidth : styles(theme)?.drawerMiniWidth
  }
}))

export const StyledLogo = styled('div')(() => ({
  padding: '15px 0px 30px 0',
  margin: '0',
  display: 'block',
  position: 'relative',
  zIndex: '4'
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

export const Divider = styled(MuiDivider)(({ theme }) => {
  const baseColor = styles(theme).menuColor
  const rgb = hexToRgb(baseColor).replace(/rgb\(([^)]+)\)/, 'rgba($1, 0)')
  return {
    backgroundImage: `linear-gradient(to right, ${rgb}, ${baseColor}, ${rgb})`
  }
})