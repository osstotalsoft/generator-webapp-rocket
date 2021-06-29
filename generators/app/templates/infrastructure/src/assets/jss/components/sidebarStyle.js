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
    primaryColor,
    primaryBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    roseColor,
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
      [theme.breakpoints.down('sm')]: {
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
    blackBackground: {
      color: '#FFFFFF',
      '&:after': {
        background: '#000',
        opacity: '.8'
      }
    },
    themeBackground: {
      color: menuColor,
      '&:after': {
        background: menuBkColor,
        opacity: menuBkOpacity
      }
    },
    blueBackground: {
      color: '#FFFFFF',
      '&:after': {
        background: '#00acc1',
        opacity: '.93'
      }
    },
    whiteBackground: {
      color: '#3C4858',
      '&:after': {
        background: '#FFFFFF',
        opacity: '.93'
      }
    },
    whiteAfter: {
      '&:after': {
        backgroundColor: 'hsla(0,0%,71%,.3) !important'
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
    background: {
      position: 'absolute',
      zIndex: '1',
      height: '100%',
      width: '100%',
      display: 'block',
      top: '0',
      left: '0',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      transition: 'all 300ms linear'
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
    purple: {
      '&,&:hover,&:focus': {
        color: '#FFFFFF',
        backgroundColor: primaryColor,
        ...primaryBoxShadow
      }
    },
    blue: {
      '&,&:hover,&:focus': {
        color: '#bce4fa',
        backgroundColor: infoColor,
        boxShadow: '0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)'
      }
    },
    green: {
      '&,&:hover,&:focus': {
        color: '#FFFFFF',
        backgroundColor: successColor,
        boxShadow: '0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)'
      }
    },
    orange: {
      '&,&:hover,&:focus': {
        color: '#FFFFFF',
        backgroundColor: warningColor,
        boxShadow: '0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)'
      }
    },
    red: {
      '&,&:hover,&:focus': {
        color: '#FFFFFF',
        backgroundColor: dangerColor,
        boxShadow: '0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)'
      }
    },
    white: {
      '&,&:hover,&:focus': {
        color: '#3C4858',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(60,72,88,.4)'
      }
    },
    rose: {
      '&,&:hover,&:focus': {
        color: '#FFFFFF',
        backgroundColor: roseColor,
        boxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4)'
      }
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
