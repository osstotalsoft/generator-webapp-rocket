import styles from 'assets/jss/styles'
import { emptyObject } from 'utils/constants'

const userMenuStyle = (theme, props) => {
  const { isActive, withGradient } = props || emptyObject
  const { boxShadow, defaultFont, menuActiveColor, menuActiveBk, menuActiveBkColor } = styles(theme)

  return {
    collapseWrapper: {
      display: 'block'
    },
    itemText: {
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
      fontWeight: 'bold'
    },
    itemTextMini: {
      transform: 'translate3d(-25px, 0, 0)',
      opacity: '0'
    },
    itemIcon: {
      color: 'inherit',
      width: '34px',
      height: '34px',
      float: 'left',
      position: 'inherit',
      verticalAlign: 'middle',
      opacity: '0.8'
    },
    myProfileIcon: {
      alignItems: 'center'
    },
    userMenuContainer: {
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        right: '15px',
        height: '1px',
        width: 'calc(100% - 30px)',
        backgroundColor: theme.palette.primary.main
      }
    },
    photo: {
      transition: 'all 300ms linear',
      overflow: 'hidden',
      float: 'left',
      zIndex: '5',
      borderRadius: '50%',
      verticalAlign: 'middle',
      border: '0',
      ...boxShadow
    },
    list: {
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
    item: {
      color: 'inherit',
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      margin: '0',
      padding: '0'
    },
    userItem: {
      '&:last-child': {
        paddingBottom: '0px'
      }
    },
    itemLink: {
      transition: 'all 300ms linear',
      margin: '0px 15px',
      borderRadius: '3px',
      position: 'relative',
      display: 'flex',
      padding: '10px 15px',
      ...defaultFont,
      textDecoration: 'unset',
      width: 'auto',
      '&:hover,&:focus': {
        color: isActive ? menuActiveColor : 'inherit',
        backgroundColor: isActive ? menuActiveBkColor : 'transparent'
      },
      color: isActive ? menuActiveColor : 'inherit',
      backgroundColor: isActive ? menuActiveBkColor : 'transparent',
      background: isActive && withGradient ? menuActiveBk : null
    },
    caret: {
      position: 'relative',
      float: 'right',
      transition: 'all 150ms ease-in',
      verticalAlign: 'middle'
    },
    collapseList: {
      marginTop: '0'
    },
    collapseItem: {
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      margin: 0,
      padding: 0
    },
    selectorItem: {
      color: 'inherit',
      display: 'block',
      padding: '0px',
      transition: 'all 300ms linear',
      margin: '10px 15px 0',
      borderRadius: '3px',
      position: 'relative',
      backgroundColor: 'transparent',
      ...defaultFont,
      textDecoration: 'unset',
      width: 'auto',
      '&:hover': {
        outline: 'none',
        backgroundColor: 'rgba(200, 200, 200, 0.2)',
        boxShadow: 'none'
      },
      '&,&:hover,&:focus': {
        color: 'inherit'
      }
    }
  }
}

export default userMenuStyle
