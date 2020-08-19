// ##############################
// // // IconButton styles
// #############################

import styles from "assets/jss/styles";

const iconButtonStyle = theme => {
  const {
    whiteColor,
    grayColor,
    defaultFont,
    buttonColors
  } = styles(theme);

  return {
    button: {
      ...defaultFont,
      color: whiteColor,
      boxShadow:
        "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
      overflow: "hidden",
      position: "relative",
      border: "none",
      textTransform: "uppercase",
      willChange: "box-shadow, transform",
      transition:
        "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      display: "inline-block",
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      touchAction: "manipulation",
      cursor: "pointer",
      userSelect: "none",
      backgroundImage: "none",
      backgroundColor: grayColor,
      "&:hover": {
        backgroundColor: grayColor,
        boxShadow:
          "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
      }
    },
    primary: buttonColors.primary,
    info: buttonColors.info,
    success: buttonColors.success,
    warning: buttonColors.warning,
    danger: buttonColors.danger,
    rose: buttonColors.rose,
    white: buttonColors.white,
    simple: buttonColors.simple,
    defaultNoBackground: buttonColors.defaultNoBackground,
    primaryNoBackground: buttonColors.primaryNoBackground,
    infoNoBackground: buttonColors.infoNoBackground,
    successNoBackground: buttonColors.successNoBackground,
    warningNoBackground: buttonColors.warningNoBackground,
    dangerNoBackground: buttonColors.dangerNoBackground,
    roseNoBackground: buttonColors.roseNoBackground,
    theme: buttonColors.theme,
    themeNoBackground: buttonColors.themeNoBackground,
    themeWithBackground: buttonColors.themeWithBackground,
    disabled: buttonColors.disabled
  };
}

export default iconButtonStyle;