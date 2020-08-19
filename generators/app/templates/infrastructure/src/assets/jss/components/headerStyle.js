// ##############################
// // // Header styles
// #############################

import styles from "assets/jss/styles";

const headerStyle = (theme) => {
  const {
    whiteColor,
    blackColor,
    themeBoxSecondaryShadow,
    containerFluid,
    primaryColor,
    defaultBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    topBarBkColor,
    activeColor
  } = styles(theme);

  return {
    appBar: {
      backgroundColor: whiteColor,
      boxShadow: "none",
      borderBottom: "0",
      marginBottom: "0",
      width: "100%",
      zIndex: "1029",
      color: activeColor,
      border: "0",
      borderRadius: "3px",
      transition: "all 150ms ease 0s",
      minHeight: "50px",
      display: "block",
      '@media (max-width: 80px)': {
        position: "relative",
        backgroundColor: theme.palette.sideMenu.primaryColor + "!important",
        padding: 0,
      },
    },
    container: {
      ...containerFluid,
      minHeight: "50px",
      '@media (max-width: 80px)': {
        display: "flex",
        flexDirection: "column"
      },
    },
    flex: {
      flex: 1
    },
    w100: {
      flex: 1,
      '@media (max-width: 80px)': {
        width: "calc(100% - 30px)",
        marginRight: "30px"
      },
    },
    title: theme.header.title,
    titleMobile: theme.header.titleMobile,
    primary: {
      backgroundColor: primaryColor,
      color: "#FFFFFF",
      ...defaultBoxShadow
    },
    info: {
      backgroundColor: infoColor,
      color: "#FFFFFF",
      ...defaultBoxShadow
    },
    success: {
      backgroundColor: successColor,
      color: "#FFFFFF",
      ...defaultBoxShadow
    },
    warning: {
      backgroundColor: warningColor,
      color: "#FFFFFF",
      ...defaultBoxShadow
    },
    danger: {
      backgroundColor: dangerColor,
      color: "#FFFFFF",
      ...defaultBoxShadow
    },
    transparent: {
      backgroundColor: "transparent !important",
      boxShadow: "none",
      paddingTop: "25px",
      color: whiteColor
    },
    dark: {
      color: whiteColor,
      backgroundColor: blackColor + " !important",
      ...defaultBoxShadow
    },
    white: {
      border: "0",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: primaryColor,
      backgroundColor: whiteColor + " !important",
      ...defaultBoxShadow
    },
    sidebarMinimize: {
      float: "left",
      padding: "10px 15px",
      display: "block",
      color: "#555555"
    },
    sidebarMiniIcon: {
      width: "20px",
      height: "17px"
    },
    theme: {
      backgroundColor: topBarBkColor,
      ...themeBoxSecondaryShadow
    },
    clone: {
      cursor: 'pointer',
      color: 'blue'
    },
    appResponsive: {
      padding: "10px 0px",
      '@media (max-width: 80px)': {
        position: "absolute",
        padding: "5px 15px",
        right: 0,
        top: 0
      }
    }
  }
}

export default headerStyle;