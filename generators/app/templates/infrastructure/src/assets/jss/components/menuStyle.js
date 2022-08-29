import styles from 'assets/jss/styles'
import { emptyObject } from 'utils/constants'

const menuStyle = (theme, props) => {
  const { isActive, isSubMenu, withGradient } = props || emptyObject
  const { defaultFont, menuActiveColor, menuActiveBkColor, menuActiveBk } = styles(theme)

  return {
    menuList: {
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
    },
    menuItem: {
      color: 'inherit',
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      margin: '0',
      padding: '0'
    },
    menuItemLink: {
      transition: 'all 300ms linear',
      margin: '10px 15px 0',
      borderRadius: '3px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '10px 15px',
      ...defaultFont,
      width: 'auto',
      textDecoration: 'unset',
      '&:hover,&:focus': {
        color: isSubMenu ? 'inherit' : menuActiveColor,
        backgroundColor: isSubMenu ? 'transparent' : menuActiveBkColor
      },
      color: isActive ? menuActiveColor : 'inherit',
      backgroundColor: isActive ? menuActiveBkColor : 'transparent',
      background: isActive && withGradient ? menuActiveBk : null
    },
    menuItemIcon: {
      color: 'inherit',
      width: '30px',
      height: '24px',
      float: 'left',
      position: 'inherit',
      textAlign: 'center',
      verticalAlign: 'middle',
      opacity: '0.8'
    },
    paddingLeft: {
      paddingLeft: '18px'
    },
    caret: {
      position: 'relative',
      float: 'right',
      transition: 'all 150ms ease-in',
      verticalAlign: 'middle'
    },
    menuItemText: {
      ...defaultFont,
      color: 'inherit',
      margin: '0',
      lineHeight: '30px',
      transform: 'translate3d(0px, 0, 0)',
      opacity: '1',
      transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
      position: 'relative',
      display: 'block',
      height: 'auto',
      whiteSpace: 'nowrap',
      fontWeight: 'bold',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '100%'
    },
    menuItemTextMini: {
      transform: 'translate3d(-25px, 0, 0)',
      opacity: '0',
      fontWeight: 'bold'
    }
  }
}

export default menuStyle
