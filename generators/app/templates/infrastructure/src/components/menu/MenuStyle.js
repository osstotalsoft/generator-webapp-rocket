import { styled, List as MuiList, ListItemIcon as MuiListItemIcon, ListItemText as MuiListItemText } from '@mui/material'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { NavLink } from 'react-router'
import { includes } from 'ramda'
import styles from 'assets/jss/styles'

export const StyledList = styled(MuiList)(() => ({
  paddingLeft: '0',
  paddingTop: '0',
  paddingBottom: '0',
  marginBottom: '0'
}))

export const ListItemIcon = styled(MuiListItemIcon)(() => ({
  transition: 'all 300ms linear',
  color: 'inherit',
  alignItems: 'center',
  minWidth: '2rem',
  minHeight: '2rem',
  justifyContent: 'center',
  margin: '0 4px'
}))

export const ListItemText = styled(MuiListItemText, {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  ...styles(theme)?.defaultFont,
  transition: 'all 200ms ease-in',
  margin: '0',
  textOverflow: 'ellipsis',
  paddingLeft: '18px',
  lineHeight: '30px',
  fontWeight: 'bold',
  fontSize: '15px',
  visibility: drawerOpen ? 'visible' : 'hidden'
}))

export const StyledArrowDropUp = styled(ArrowDropUp, {
  shouldForwardProp: prop => !includes(prop, ['isSubMenuItem'])
})(({ isSubMenuItem }) => ({
  transition: 'all 200ms ease-in',
  marginLeft: 'auto',
  float: 'right',
  ...(isSubMenuItem && {
    display: 'none'
  })
}))

export const StyledArrowDropDown = styled(ArrowDropDown, {
  shouldForwardProp: prop => !includes(prop, ['isSubMenuItem'])
})(({ isSubMenuItem }) => ({
  transition: 'all 200ms ease-in',
  marginLeft: 'auto',
  float: 'right',
  ...(isSubMenuItem && {
    display: 'none'
  })
}))

export const StyledNavLink = styled(NavLink, {
  shouldForwardProp: prop => !includes(prop, ['isActive', 'withGradient'])
})(({ theme, isActive, withGradient }) => ({
  ...styles(theme)?.defaultFont,
  transition: 'all 300ms linear',
  margin: '5px 10px',
  borderRadius: '3px',
  display: 'flex',
  padding: '10px',
  textDecoration: 'unset',
  alignItems: 'center',
  '&:hover': {
    color: styles(theme)?.menuActiveColor,
    backgroundColor: styles(theme)?.menuActiveBkColor
  },
  color: styles(theme)?.menuColor,
  ...(isActive
    ? {
        color: styles(theme)?.menuActiveColor,
        backgroundColor: styles(theme)?.menuActiveBkColor,
        background: withGradient ? styles(theme)?.menuActiveBk : null
      }
    : {})
}))
