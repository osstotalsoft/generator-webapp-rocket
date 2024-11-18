import { styled, Select as MuiSelect, ListItem as MuiListItem, Typography as MuiTypography } from '@mui/material'
import styles from 'assets/jss/styles'
import { includes, isNil } from 'ramda'

export const Select = styled(MuiSelect, {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  width: '100%',
  color: styles(theme)?.menuColor,
  '&:before,&:after': {
    display: 'none !important'
  },
  [`.MuiSelect-select`]: {
    textOverflow: 'unset',
    padding: 0,
    justifyContent: Boolean(drawerOpen) || isNil(drawerOpen) ? 'flex-start' : 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  [`.MuiSelect-icon`]: {
    color: styles(theme)?.menuColor
  },
  [`.MuiInputBase-input`]: {
    padding: 0,
    paddingRight: '0px !important'
  }
}))

export const ListItem = styled(MuiListItem)(() => ({
  padding: '5px 16px'
}))

export const CollapseItem = styled('span')(({ theme }) => ({
  ...styles(theme)?.defaultFont,
  color: 'inherit',
  textTransform: 'uppercase',
  width: '30px',
  textAlign: 'center',
  letterSpacing: '1px',
  position: 'relative',
  float: 'left',
  display: 'inherit',
  transition: 'transform 300ms ease 0s, opacity 300ms ease 0s'
}))

export const Typography = styled(MuiTypography)(({ theme }) => ({
  ...styled(theme)?.defaultFont,
  margin: '0',
  position: 'relative',
  transform: 'translateX(0px)',
  color: 'inherit',
  opacity: '1',
  whiteSpace: 'nowrap',
  display: 'inline-block',
  transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
  fontSize: '15px',
  fontWeight: 'bold',
  lineHeight: '30px',
  paddingLeft: '22px'
}))
