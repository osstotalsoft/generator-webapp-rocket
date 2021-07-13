import styles from 'assets/jss/styles'

const userMenuStyle = theme => {
  const { boxShadow, defaultFont, menuActiveColor, menuActiveBkColor } = styles(theme)

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
    collapseItemText: {
      ...defaultFont,
      color: 'inherit',
      margin: '0',
      position: 'relative',
      transform: 'translateX(0px)',
      opacity: '1',
      whiteSpace: 'nowrap',
      display: 'block',
      transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
      fontWeight: 'bold'
    },
    collapseItemTextMini: {
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
      paddingLeft: '10px',
      paddingRight: '10px',
      transition: 'all 300ms linear',
      margin: '0px 15px',
      borderRadius: '3px',
      position: 'relative',
      display: 'flex',
      padding: '10px 15px',
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
    },
    userCollapseLinks: {
      marginTop: '-4px',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(200, 200, 200, 0.2)'
      }
    },
    caret: {
      position: 'relative',
      float: 'right',
      // right: '-9px',
      transition: 'all 150ms ease-in',
      verticalAlign: 'middle'
    },
    caretActive: {
      transform: 'rotate(180deg)'
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
    collapseItemMini: {
      ...defaultFont,
      color: 'inherit',
      textTransform: 'uppercase',
      width: '30px',
      marginRight: '15px',
      textAlign: 'center',
      letterSpacing: '1px',
      position: 'relative',
      float: 'left',
      display: 'inherit',
      transition: 'transform 300ms ease 0s, opacity 300ms ease 0s'
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
    },
    menuActiveColor: {
      '&,&:hover,&:focus': {
        color: menuActiveColor,
        backgroundColor: menuActiveBkColor
      }
    }
  }
}

export default userMenuStyle
