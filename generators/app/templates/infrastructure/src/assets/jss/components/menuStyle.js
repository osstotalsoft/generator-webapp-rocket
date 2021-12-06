// ##############################
// // // Sidebar styles
// #############################

import styles from "assets/jss/styles";

const sidebarStyle = theme => {
  const { defaultFont, menuActiveColor, menuActiveBkColor, menuActiveBk } = styles(theme)

  return {
    menuList: {
      marginTop: "15px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      color: "inherit",
      "&:before,&:after": {
        display: "table",
        content: '" "'
      },
      "&:after": {
        clear: "both"
      }
    },
    menuItem: {
      color: "inherit",
      position: "relative",
      display: "block",
      textDecoration: "none",
      margin: "0",
      padding: "0"
    },
    menuItemLink: {
      paddingLeft: "10px",
      paddingRight: "10px",
      transition: "all 300ms linear",
      margin: "10px 15px 0",
      borderRadius: "3px",
      position: "relative",
      display: "flex",
      padding: "10px 15px",
      backgroundColor: "transparent",
      ...defaultFont,
      width: "auto",
      textDecoration: "unset",
      "&:hover": {
        outline: "none",
        backgroundColor: theme.palette.sideMenu.hoverBgColor,
        color: theme.palette.sideMenu.hoverTextColor,
        boxShadow: "none"
      },
      "&:focus": {
        outline: "none",
        backgroundColor: props => (props.isSubMenu ? "transparent" : theme.palette.sideMenu.focusBgColor),
        boxShadow: "none"
      },
      "&,&:focus": {
        color: "inherit"
      }
    },
    menuItemIcon: {
      color: "inherit",
      width: "30px",
      height: "24px",
      float: "left",
      position: "inherit",
      top: "3px",
      textAlign: "center",
      verticalAlign: "middle",
      opacity: "0.8"
    },
    menuItemText: {
      ...defaultFont,
      color: "inherit",
      margin: "0",
      lineHeight: "30px",
      transform: "translate3d(0px, 0, 0)",
      opacity: "1",
      transition: "transform 300ms ease 0s, opacity 300ms ease 0s",
      position: "relative",
      display: "block",
      height: "auto",
      whiteSpace: "nowrap",
      fontWeight: "bold"
    },
    menuItemTextMini: {
      transform: "translate3d(-25px, 0, 0)",
      opacity: "0",
      fontWeight: "bold"
    },
    menuActiveColor: {
      "&,&:hover,&:focus": {
        color: menuActiveColor,
        background: props => (props.withGradient ? menuActiveBk : menuActiveBkColor)
      }
    },
    paddingLeft: {
      paddingLeft: "18px"
    },
    caret: {
      position: "relative",
      float: "right",
      transition: "all 150ms ease-in",
      verticalAlign: "middle"
    }
  };
}

export default sidebarStyle;