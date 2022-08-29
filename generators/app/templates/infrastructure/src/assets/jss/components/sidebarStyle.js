// ##############################
// // // Sidebar styles
// #############################

import styles from 'assets/jss/styles'
import { sidebarWrapperHeight } from 'utils/constants'

const sidebarStyle = theme => {
  const {
    drawerWidth,
    drawerMiniWidth,
    transition,
    boxShadow,
    defaultFont,
    menuBkColor,
    menuColor,
    menuBkOpacity
  } = styles(theme)

  return {
    drawerPaper: {
      border: 'none',
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      zIndex: '1032',
      transitionProperty: 'top, bottom, width',
      transitionDuration: '.2s, .2s, .35s',
      transitionTimingFunction: 'linear, linear, ease',
      overflowY: 'unset',
      ...boxShadow,
      width: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        position: 'fixed',
        height: '100%'
      },
      [theme.breakpoints.down('md')]: {
        width: drawerWidth,
        ...boxShadow,
        position: 'fixed',
        top: '0',
        height: '100vh',
        right: '0',
        left: 'auto',
        zIndex: '1032',
        visibility: 'visible',
        overflowY: 'visible',
        borderTop: 'none',
        textAlign: 'left',
        paddingRight: '0px',
        paddingLeft: '0',
        transform: `translate3d(${drawerWidth}px, 0, 0)`,
        ...transition
      },
      '&:before,&:after': {
        position: 'absolute',
        zIndex: '3',
        width: '100%',
        height: '100%',
        content: '""',
        display: 'block',
        top: '0'
      }
    },
    themeBackground: {
      color: menuColor,
      '&:after': {
        background: menuBkColor,
        opacity: menuBkOpacity
      }
    },
    drawerPaperMini: {
      overflow: 'none',
      width: drawerMiniWidth + 'px!important'
    },
    logo: {
      padding: '15px 0px 30px 0',
      margin: '0',
      display: 'block',
      position: 'relative',
      zIndex: '4',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        height: '1px',
        right: '15px',
        width: 'calc(100% - 30px)',
        backgroundColor: theme.palette.primary.main
      }
    },
    logoMini: {
      transition: 'all 300ms linear',
      opacity: 1,
      textAlign: 'center',
      display: 'inline-block',
      maxHeight: '30px',
      marginLeft: '22px',
      marginRight: '18px',
      marginTop: '7px',
      color: 'inherit'
    },
    logoNormal: {
      ...defaultFont,
      transition: 'all 300ms linear',
      display: 'block',
      opacity: '1',
      transform: 'translate3d(0px, 0, 0)',
      textTransform: 'uppercase',
      padding: '5px 0px',
      fontSize: '18px',
      whiteSpace: 'nowrap',
      fontWeight: '400',
      lineHeight: '30px',
      overflow: 'hidden',
      '&,&:hover,&:focus': {
        color: 'inherit'
      }
    },
    logoNormalSidebarMini: {
      opacity: '0',
      transform: 'translate3d(-25px, 0, 0)'
    },
    img: {
      width: '100%',
      verticalAlign: 'middle',
      border: '0'
    },
    itemIcon: {
      color: 'inherit',
      width: '30px',
      height: '24px',
      float: 'left',
      position: 'inherit',
      top: '3px',
      marginRight: '15px',
      textAlign: 'center',
      verticalAlign: 'middle',
      opacity: '0.8'
    },
    sidebarWrapper: {
      position: 'relative',
      height: sidebarWrapperHeight,
      overflow: 'none',
      width: '260px',
      zIndex: '4',
      overflowScrolling: 'touch',
      transitionProperty: 'top, bottom, width',
      transitionDuration: '.2s, .2s, .35s',
      transitionTimingFunction: 'linear, linear, ease',
      color: 'inherit'
    },
    appVersion: {
      ...defaultFont,
      padding: '0px 10px',
      margin: '0',
      display: 'block',
      zIndex: '4'
    }
  }
}
export default sidebarStyle
