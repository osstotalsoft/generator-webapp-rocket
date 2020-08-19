// ##############################
// // // IconCard styles
// #############################

import styles from "assets/jss/styles";

const iconCardStyle = theme => {
  const {
    card,
    cardHeader,
    orangeCardHeader,
    greenCardHeader,
    redCardHeader,
    blueCardHeader,
    purpleCardHeader,
    roseCardHeader,
    themeCardHeader
  } = styles(theme);

  return {
    card,
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardHeader: {
      ...cardHeader,
      float: "left"
    },
    orangeCardHeader,
    greenCardHeader,
    redCardHeader,
    blueCardHeader,
    purpleCardHeader,
    roseCardHeader,
    themeCardHeader,
    cardContent: {
      padding: "15px 20px",
      position: "relative"
    },
    cardAvatar: {
      margin: "0px"
    },
    cardIcon: {
      paddingTop: "3px",
      paddingLeft: "3px",
      paddingRight: "3px",
      color: "#FFFFFF",
      width: "30px",
      height: "30px"
    },
    cardTitle: {
      ...theme.header.title,
      display: 'flex',
      paddingBottom: "5px",
      marginBottom: "3px",
    },
    cardCategory: {
      color: "#999999",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1",
      marginBottom: "0"
    },
    cardFooter: {
      margin: "0 20px 10px",
      paddingTop: "10px",
      borderTop: "1px solid #eeeeee"
    },
    expansionPanelDetails: {
      '@media (max-width: 480px)': {
        padding: "4px"
      }
    }
  };
}

export default iconCardStyle;