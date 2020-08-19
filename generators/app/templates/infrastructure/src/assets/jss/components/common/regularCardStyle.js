
// ##############################
// // // RegularCard styles
// #############################

import styles from "../../styles";

const regularCardStyle = theme => {
  const { card, defaultFont } = styles(theme);

  return {
    card,
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardHeader: {
      padding: "15px 20px 0",
      zIndex: "3"
    },
    cardTitle: {
      ...defaultFont,
      marginTop: "0",
      marginBottom: "3px",
      fontWeight: "bold",
      fontSize: "20px",
      "& small": {
        fontWeight: "bold",
        lineHeight: "24px",
        color: "#777"
      }
    },
    right: {
      textAlign: "right"
    },
    left: {
      textAlign: "left"
    },
    center: {
      textAlign: "center"
    },
    cardSubtitle: {
      ...defaultFont,
      color: "#999999",
      fontSize: "14px",
      margin: "0 0 10px"
    },
    cardContent: {
      padding: "15px 20px !important",
      position: "relative"
    }
  }
};

export default regularCardStyle;