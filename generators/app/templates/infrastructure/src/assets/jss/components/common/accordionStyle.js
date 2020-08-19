// ##############################
// // // Accordion component style
// #############################

import styles from "../../styles";

const accordionStyle = theme => {

  const { roseColor } = styles(theme);

  return {
    root: {
      flexGrow: 1,
      marginBottom: "20px",
      '@media (max-width: 480px)': {
        width: "100%"
      },

    },
    expansionPanel: {
      boxShadow: "none",
      "&:before": {
        display: "none !important"
      }
    },
    expansionPanelExpanded: {
      margin: "0"
    },
    expansionPanelSummary: {
      minHeight: "auto !important",
      backgroundColor: "transparent",
      // borderBottom: "1px solid #ddd",
      padding: "2px 2px 2px 0px",
      borderTopLeftRadius: "3px",
      borderTopRightRadius: "3px",
      color: "#3C4858",
      "&:hover": {
        color: roseColor
      }
    },
    expansionPanelSummaryExpaned: {
      color: roseColor
    },
    expansionPanelSummaryContent: {
      margin: "0"
    },
    expansionPanelSummaryExpandIcon: {
      [theme.breakpoints.up("md")]: {
        top: "auto !important"
      },
      transform: "rotate(0deg)",
      color: "inherit",
      [theme.breakpoints.down("sm")]: {
        top: "10px !important"
      }
    },
    expansionPanelSummaryExpandIconExpanded: {
      [theme.breakpoints.up("md")]: {
        top: "auto !important"
      },
      transform: "rotate(180deg)",
      [theme.breakpoints.down("sm")]: {
        top: "10px !important"
      }
    },
    title: {
      fontSize: "15px",
      fontWeight: "bolder",
      marginTop: "0",
      marginBottom: "0",
      color: "inherit"
    },
    expansionPanelDetails: {
      padding: "15px 0px 5px"
    }
  }
};

export default accordionStyle;