// ##############################
// // // NavPills component style
// #############################
import styles from "../../styles";

const navPillsStyle = theme => {

  const {
    roseColor,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor
  } = styles(theme);

  return {
    tabsContainer: {
      marginTop: "20px",
      display: 'flex',
      flexGrow: 1,
      overflowX: 'auto',
      marginRight: '5px'
    },
    container: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    root: {
      paddingLeft: "0",
      marginBottom: "0",
      overflow: "visible !important"
    },
    displayNone: {
      display: "none !important"
    },
    horizontalDisplay: {
      display: "block"
    },
    pills: {
      float: "left",
      position: "relative",
      display: "block",
      borderRadius: "5px",
      minWidth: "100px",
      textAlign: "center",
      transition: "all .3s",
      padding: "6.5px 15px",
      color: "#555555",
      height: "fit-content",
      opacity: "1",
      maxWidth: "100%",
      fontSize: "12px",
      fontWeight: "bold",
      minHeight: "auto",
    },
    pillsWithIcons: {
      borderRadius: "4px"
    },
    tabIcon: {
      width: "30px",
      height: "30px",
      display: "block"
    },
    horizontalPills: {
      width: "100%",
      float: "none !important",
      "& + button": {
        margin: "10px 0"
      }
    },
    contentWrapper: {
      marginTop: "20px"
    },
    grid: {
      margin: "0 -15px",
      width: "calc(100% + 30px)"
    },
    itemGrid: {
      padding: "0 15px !important"
    },
    primary: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: primaryColor,
        boxShadow:
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
      }
    },
    info: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: infoColor,
        boxShadow:
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"
      }
    },
    success: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: successColor,
        boxShadow:
          "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)"
      }
    },
    warning: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: warningColor,
        boxShadow:
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
      }
    },
    danger: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: dangerColor,
        boxShadow:
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
      }
    },
    rose: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: roseColor,
        boxShadow:
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
      }
    },
    alignCenter: {
      alignItems: "center",
      justifyContent: "center"
    }
  }
};

export default navPillsStyle;