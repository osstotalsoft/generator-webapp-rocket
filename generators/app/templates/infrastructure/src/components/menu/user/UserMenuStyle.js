import {
  styled,
  List as MuiList,
  ListItem as MuiListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  Collapse as MuiCollapse
} from '@mui/material'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { includes } from 'ramda'
import styles from 'assets/jss/styles'

export const List = styled(MuiList)(({ theme }) => ({
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    right: '15px',
    height: '1px',
    width: 'calc(100% - 30px)',
    backgroundColor: theme.palette.primary.main
  }
}))

export const ListItem = styled(MuiListItem)(() => ({
  color: 'inherit',
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
  margin: '0',
  padding: '0',
  '&:last-child': {
    paddingBottom: '0px'
  }
}))

export const StyledNavLinkMenu = styled(NavLink, {
  shouldForwardProp: prop => !includes(prop, ['withGradient'])
})(({ theme, withGradient }) => ({
  transition: 'all 300ms linear',
  margin: '5px 10px',
  borderRadius: '3px',
  position: 'relative',
  display: 'flex',
  padding: '10px 15px',
  ...styles(theme)?.defaultFont,
  textDecoration: 'unset',
  width: 'auto',
  '&:hover': {
    outline: 'none',
    color: styles(theme)?.menuActiveColor,
    background: withGradient ? styles(theme)?.menuActiveBk : null,
    backgroundColor: styles(theme)?.menuActiveBkColor,
    boxShadow: 'none'
  },
  color: 'inherit'
}))

export const StyledNavLinkMenuItem = styled(NavLink, {
  shouldForwardProp: prop => !includes(prop, ['isActive', 'withGradient'])
})(({ theme, isActive, withGradient }) => ({
  transition: 'all 300ms linear',
  margin: '5px 10px',
  borderRadius: '3px',
  position: 'relative',
  display: 'flex',
  padding: '10px 15px',
  ...styles(theme)?.defaultFont,
  textDecoration: 'unset',
  width: 'auto',
  '&:hover': {
    outline: 'none',
    color: styles(theme)?.menuActiveColor,
    backgroundColor: styles(theme)?.menuActiveBkColor,
    boxShadow: 'none'
  },
  '&:hover,&:focus': {
    color: styles(theme)?.menuActiveColor,
    backgroundColor: styles(theme)?.menuActiveBkColor
  },
  color: isActive ? styles(theme)?.menuActiveColor : 'inherit',
  backgroundColor: isActive ? styles(theme)?.menuActiveBkColor : 'transparent',
  background: isActive && withGradient ? styles(theme)?.menuActiveBk : null
}))

export const ListItemIcon = styled(MuiListItemIcon)(() => ({
  color: 'inherit',
  width: '34px',
  height: '34px',
  float: 'left',
  position: 'inherit',
  verticalAlign: 'middle',
  opacity: '0.8'
}))

export const Avatar = styled('img')(({ theme }) => ({
  transition: 'all 300ms linear',
  overflow: 'hidden',
  float: 'left',
  zIndex: '5',
  borderRadius: '50%',
  verticalAlign: 'middle',
  border: '0',
  ...styles(theme)?.boxShadow
}))

export const ListItemText = styled(MuiListItemText, {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  ...styles(theme)?.defaultFont,
  color: 'inherit',
  margin: '0',
  lineHeight: '30px',
  transform: drawerOpen ? 'translate3d(0px, 0, 0)' : 'translate3d(-25px, 0, 0)',
  opacity: drawerOpen ? '1' : '0',
  transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
  position: 'relative',
  display: 'block',
  height: 'auto',
  whiteSpace: 'nowrap',
  fontWeight: 'bold'
}))

export const StyledArrowDropUp = styled(ArrowDropUp, {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ drawerOpen }) => ({
  position: 'relative',
  float: 'right',
  transition: 'all 150ms ease-in',
  verticalAlign: 'middle',
  marginTop: '5px',
  ...(!drawerOpen && {
    display: 'none'
  })
}))

export const StyledArrowDropDown = styled(ArrowDropDown, {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ drawerOpen }) => ({
  position: 'relative',
  float: 'right',
  transition: 'all 150ms ease-in',
  verticalAlign: 'middle',
  marginTop: '5px',
  ...(!drawerOpen && {
    display: 'none'
  })
}))

export const Collapse = styled(MuiCollapse)(() => ({
  [`.MuiCollapse-wrapper`]: {
    display: 'block'
  }
}))

export const MenuList = styled(MuiList)(() => ({
  marginTop: '0',
  paddingLeft: '0',
  paddingTop: '0',
  paddingBottom: '0',
  marginBottom: '0',
  listStyle: 'none',
  color: 'inherit',
  '&:before,&:after': {
    display: 'table',
    content: '" "'
  },
  '&:after': {
    clear: 'both'
  }
}))

export const StyledMenuItem = styled(MuiListItem)(() => ({
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
  margin: 0,
  padding: 0
}))

export const StyledSelector = styled(MuiListItem)(({ theme }) => ({
  color: 'inherit',
  display: 'block',
  padding: '0px',
  transition: 'all 300ms linear',
  margin: '10px 15px 0',
  borderRadius: '3px',
  position: 'relative',
  backgroundColor: 'transparent',
  ...styles(theme)?.defaultFont,
  textDecoration: 'unset',
  width: 'auto',
  '&:hover,&:focus': {
    color: 'inherit',
    backgroundColor: 'transparent'
  }
}))
