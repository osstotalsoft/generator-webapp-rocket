import {
  styled,
  List as MuiList,
  ListItem as MuiListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText
} from '@mui/material'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { includes } from 'ramda'
import styles from 'assets/jss/styles'

export const List = styled(MuiList)(() => ({
  marginTop: '15px',
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

export const ListItem = styled(MuiListItem)(() => ({
  color: 'inherit',
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
  margin: '0',
  padding: '0'
}))

export const ListItemIcon = styled(MuiListItemIcon, {
  shouldForwardProp: prop => !includes(prop, ['isSubMenuItem', 'drawerOpen'])
})(({ isSubMenuItem, drawerOpen }) => ({
  color: 'inherit',
  width: '30px',
  height: '24px',
  float: 'left',
  position: 'inherit',
  textAlign: 'center',
  verticalAlign: 'middle',
  opacity: '0.8',
  ...(isSubMenuItem &&
    drawerOpen && {
      paddingLeft: '18px'
    })
}))

export const ListItemText = styled(MuiListItemText, {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen', 'isSubMenuItem'])
})(({ theme, drawerOpen, isSubMenuItem }) => ({
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
  fontWeight: 'bold',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
  paddingLeft: isSubMenuItem ? '18px' : null
}))

export const StyledArrowDropUp = styled(ArrowDropUp)(() => ({
  position: 'relative',
  float: 'right',
  transition: 'all 150ms ease-in',
  verticalAlign: 'middle'
}))

export const StyledArrowDropDown = styled(ArrowDropDown)(() => ({
  position: 'relative',
  float: 'right',
  transition: 'all 150ms ease-in',
  verticalAlign: 'middle'
}))

export const ListItemLink = styled(MuiListItem, {
  shouldForwardProp: prop => !includes(prop, ['isActive', 'isSubMenu', 'withGradient'])
})(({ theme, isActive, isSubMenu, withGradient }) => ({
  transition: 'all 300ms linear',
  margin: '10px 15px 0',
  borderRadius: '3px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '10px 15px',
  ...styles(theme)?.defaultFont,
  width: 'auto',
  textDecoration: 'unset',
  '&:hover,&:focus': {
    color: isSubMenu ? 'inherit' : styles(theme)?.menuActiveColor,
    backgroundColor: isSubMenu ? 'transparent' : styles(theme)?.menuActiveBkColor
  },
  color: isActive ? styles(theme)?.menuActiveColor : 'inherit',
  backgroundColor: isActive ? styles(theme)?.menuActiveBkColor : 'transparent',
  background: isActive && withGradient ? styles(theme)?.menuActiveBk : null
}))

export const StyledNavLink = styled(NavLink, {
  shouldForwardProp: prop => !includes(prop, ['isActive', 'isSubMenu', 'withGradient'])
})(({ theme, isActive, isSubMenu, withGradient }) => ({
  transition: 'all 300ms linear',
  margin: '10px 15px 0',
  borderRadius: '3px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '10px 15px',
  ...styles(theme)?.defaultFont,
  width: 'auto',
  textDecoration: 'unset',
  '&:hover,&:focus': {
    color: isSubMenu ? 'inherit' : styles(theme)?.menuActiveColor,
    backgroundColor: isSubMenu ? 'transparent' : styles(theme)?.menuActiveBkColor
  },
  color: isActive ? styles(theme)?.menuActiveColor : 'inherit',
  backgroundColor: isActive ? styles(theme)?.menuActiveBkColor : 'transparent',
  background: isActive && withGradient ? styles(theme)?.menuActiveBk : null
}))
