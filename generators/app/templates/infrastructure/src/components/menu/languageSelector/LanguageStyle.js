import { styled, Select as MuiSelect, ListItem as MuiListItem, Typography as MuiTypography } from '@mui/material'
import styles from 'assets/jss/styles'

export const Select = styled(MuiSelect)(({ theme }) => ({
  width: '100%',
  verticalAlign: 'middle',
  color: theme?.palette?.sideMenu?.color,
  '&:before,&:after': {
    display: 'none !important'
  },
  [`.MuiSelect-select`]: {
    textOverflow: 'unset',
    paddingLeft: '10px'
  },
  [`.MuiSelect-icon`]: {
    color: theme.palette.sideMenu.color,
    right: '10px'
  }
}))

export const ListItem = styled(MuiListItem)(() => ({
  padding: '2px 16px'
}))

export const Typography = styled(MuiTypography)(({ theme }) => ({
  ...styles(theme)?.defaultFont,
  margin: '0',
  position: 'relative',
  transform: 'translateX(0px)',
  opacity: '1',
  whiteSpace: 'nowrap',
  display: 'inline-block',
  transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
  fontSize: '15px',
  fontWeight: 'bold',
  paddingLeft: '25px'
}))
