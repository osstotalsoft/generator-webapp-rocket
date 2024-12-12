import { styled, Select as MuiSelect, MenuItem as MuiMenuItem, Typography as MuiTypography } from '@mui/material'
import styles from 'assets/jss/styles'
import { includes, isNil } from 'ramda'

export const Select = styled(MuiSelect, {
  shouldForwardProp: prop => !includes(prop, ['drawerOpen'])
})(({ theme, drawerOpen }) => ({
  width: '100%',
  color: styles(theme)?.menuColor,
  paddingRight: 0,
  '&:before,&:after': {
    display: 'none !important'
  },
  [`.MuiSelect-select`]: {
    textOverflow: 'unset',
    justifyContent: Boolean(drawerOpen) || isNil(drawerOpen) ? 'flex-start' : 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  [`.MuiSelect-icon`]: {
    color: styles(theme)?.menuColor,
    float: 'right'
  },
  [`.MuiInputBase-input`]: {
    padding: 0,
    paddingRight: '0px !important'
  }
}))

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  padding: '5px 16px',
  '&:hover': {
    color: styles(theme)?.menuActiveColor,
    backgroundColor: styles(theme)?.menuActiveBkColor
  }
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
  paddingLeft: '19px'
}))
