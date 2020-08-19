// ##############################
// // // Footer styles
// #############################

import styles from "assets/jss/styles";

const footerStyle = (theme) => {
  const {
    defaultFont,
    container,
    containerFluid,
    primaryColor,
    activeColor
  } = styles(theme);

  return {
    block: {},
    left: {
      float: "left!important",
      display: "block"
    },
    right: {
      ...defaultFont,
      margin: "0",
      float: "right!important",
      padding: "15px"
    },
    footer: {
      ...defaultFont,
      bottom: "0",
      borderTop: "1px solid #e7e7e7",
      padding: "0",
      zIndex: 4
    },
    container: {
      ...container,
      zIndex: 3,
      display: "block",
      marginLeft: "unset",
      marginRight: "unset",
      width: "100%"
    },
    content: {
      padding: "20px 25px",
    },
    containerFluid: {
      zIndex: 3,
      ...containerFluid,
      position: "relative"
    },
    a: {
      color: primaryColor,
      textDecoration: "none",
      backgroundColor: "transparent"
    },
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0"
    },
    inlineBlock: {
      display: "inline-block",
      padding: "0",
      width: "auto"
    },
    whiteColor: {
      "&,&:hover,&:focus": {
        color: "#FFFFFF"
      }
    },
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "0",
      marginBottom: "0",
      width: "100%",
      paddingTop: "10px",
      zIndex: "1029",
      color: activeColor,
      border: "0",
      borderRadius: "3px",
      padding: "10px 0",
      transition: "all 150ms ease 0s",
      minHeight: "50px",
      display: "block",
      '@media (max-width: 480px)': {
        position: "relative",
        backgroundColor: theme.palette.sideMenu.bkColor + "!important",
        paddingTop: "10px",
        padding: 0
      },
    },
    flex: {
      flex: 1
    },
    w100: {
      width: "100%",
      flex: 1,
      '@media (max-width: 480px)': {
        width: "calc(100% - 30px)",
        marginRight: "30px"
      },
    },
  };
}

export default footerStyle;