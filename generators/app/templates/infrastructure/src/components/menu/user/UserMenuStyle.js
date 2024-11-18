import { styled, ListItem as MuiListItem } from '@mui/material'
import styles from 'assets/jss/styles'
import { includes } from 'ramda'

export const Avatar = styled('img')(({ theme }) => ({
  transition: 'all 300ms linear',
  width: '34px',
  height: '34px',
  overflow: 'hidden',
  float: 'left',
  zIndex: '5',
  borderRadius: '50%',
  verticalAlign: 'middle',
  border: '0',
  ...styles(theme)?.boxShadow
}))

export const StyledListItem = styled(MuiListItem, {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen', 'withGradient'])
})(({ theme, drawerOpen, withGradient }) => ({
  ...styles(theme)?.defaultFont,
  transition: 'all 300ms linear',
  margin: '5px 10px',
  borderRadius: '3px',
  padding: '10px',
  width: 'auto',
  cursor: 'pointer',
  justifyContent: drawerOpen ? 'flex-start' : 'center',
  '&:hover': {
    color: styles(theme)?.menuActiveColor,
    backgroundColor: styles(theme)?.menuActiveBkColor,
    background: withGradient ? styles(theme)?.menuActiveBk : null
  }
}))
