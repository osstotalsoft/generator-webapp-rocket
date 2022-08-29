// ##############################
// // // Header styles
// #############################

import styles from 'assets/jss/styles'

const headerStyle = theme => {
  const {
    themeBoxSecondaryShadow,
    containerFluid,
    primaryColor,
    topBarBkColor
  } = styles(theme)

  return {
    appBar: {
      marginBottom: '0',
      width: '100%',
      zIndex: '1029',
      color: theme.palette.primary.main,
      border: '0',
      borderRadius: '3px',
      transition: 'all 150ms ease 0s',
      minHeight: '50px',
      display: 'block',
      '@media (max-width: 80px)': {
        position: 'relative',
        backgroundColor: theme.palette.sideMenu.bgColor + '!important',
        padding: 0
      },
      backgroundColor: topBarBkColor,
      ...themeBoxSecondaryShadow
    },
    container: {
      ...containerFluid,
      minHeight: '50px',
      '@media (max-width: 80px)': {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    w100: {
      flex: 1,
      '@media (max-width: 80px)': {
        width: 'calc(100% - 30px)',
        marginRight: '30px'
      }
    },
    title: {
      borderRadius: '3px',
      textTransform: 'none',
      fontWeight: 'bold',
      color: primaryColor,
      '&:hover,&:focus': {
        background: 'transparent'
      }
    },
    titleMobile: {
      borderRadius: '3px',
      textTransform: 'none',
      fontWeight: 'bold',
      color: primaryColor,
      '&:hover,&:focus': {
        background: 'transparent'
      }
    },
    sidebarMinimize: {
      float: 'left',
      padding: '10px 15px',
      display: 'block',
      color: '#555555'
    },
    appResponsive: {
      padding: '10px 0px',
      '@media (max-width: 80px)': {
        position: 'absolute',
        padding: '5px 15px',
        right: 0,
        top: 0
      }
    }
  }
}

export default headerStyle
