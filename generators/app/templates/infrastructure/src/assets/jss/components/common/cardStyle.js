import styles from "assets/jss/styles";

const cardStyle = theme => {
  const {
    whiteColor,
    roseColor,
    successColor,
    dangerColor,
    warningColor,
    infoColor,
    blackColor,
    hexToRgb
  } = styles(theme);

  return ({
    card: {
      ...theme.card
    },

    image: {
      borderRadius: "50% !important",
      boxShadow:
        "0 5px 15px -8px rgba(" +
        hexToRgb(blackColor) +
        ", 0.24), 0 8px 10px -5px rgba(" +
        hexToRgb(blackColor) +
        ", 0.2)"
    },

    s: {
      height: '80px',
      width: '80px'
    },

    m: {
      height: '163px',
      width: '163px'
    },

    l: {
      height: '280px',
      width: '280px'
    },

    primary: {
      background: theme.palette.primary.main,
      color: whiteColor
    },
    info: {
      background:
        "linear-gradient(60deg," + infoColor[1] + "," + infoColor[2] + ")",
      "& h1 small": {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
      },
      color: whiteColor
    },
    success: {
      background:
        "linear-gradient(60deg," + successColor[1] + "," + successColor[2] + ")",
      "& h1 small": {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
      },
      color: whiteColor
    },
    warning: {
      background:
        "linear-gradient(60deg," + warningColor[1] + "," + warningColor[2] + ")",
      "& h1 small": {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
      },
      color: whiteColor
    },
    danger: {
      background:
        "linear-gradient(60deg," + dangerColor[1] + "," + dangerColor[2] + ")",
      "& h1 small": {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
      },
      color: whiteColor
    },
    rose: {
      background:
        "linear-gradient(60deg," + roseColor[1] + "," + roseColor[2] + ")",
      "& h1 small": {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
      },
      color: whiteColor
    }
  })
};

export default cardStyle;