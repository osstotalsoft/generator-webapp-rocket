const styles = theme => {
  const whiteColor = theme.palette.white.main
  const defaultFont = theme.typography.defaultFont

  const drawerWidth = 260
  const rightDrawerWidth = 360

  const drawerMiniWidth = 80

  const transition = {
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
  }

  const containerFluid = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    '&:before,&:after': {
      display: 'table',
      content: '" "'
    },
    '&:after': {
      clear: 'both'
    }
  }

  const container = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media (min-width: 768px)': {
      width: '750px'
    },
    '@media (min-width: 992px)': {
      width: '970px'
    },
    '@media (min-width: 1200px)': {
      width: '1170px'
    },
    '&:before,&:after': {
      display: 'table',
      content: '" "'
    },
    '&:after': {
      clear: 'both'
    }
  }

  const boxShadow = {
    boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  }

  const primaryColor = theme.palette.primary.main
  const primaryColorRGBA = theme.palette.primary.rgba
  //theme colors
  const themeColor = theme.palette.secondary.main
  const themeRGBAColor = theme.palette.secondary.rgba

  const menuActiveColor = theme.palette.secondary.contrastText
  const menuActiveBkColor = theme.palette.secondary.main
  const menuActiveBk = theme.palette.gradients.secondary
  const menuBkColor = theme.palette.sideMenu.bgColor
  const menuColor = theme.palette.sideMenu.color
  const menuBkOpacity = theme.palette.sideMenu.bgOpacity
  const topBarBkColor = whiteColor

  const themeBoxSecondaryShadow = {
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ' + themeRGBAColor
  }

  return {
    drawerWidth,
    rightDrawerWidth,
    drawerMiniWidth,
    transition,
    container,
    containerFluid,
    boxShadow,
    defaultFont,
    themeColor,
    primaryColor,
    menuActiveColor,
    menuActiveBkColor,
    menuActiveBk,
    topBarBkColor,
    menuBkColor,
    menuColor,
    menuBkOpacity,
    primaryColorRGBA,
    whiteColor,
    themeBoxSecondaryShadow
  }
}

export default styles
