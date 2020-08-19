import styles from "assets/jss/styles";

const buttonStyle = theme => {
  const {
    grayColor,
    whiteColor,
    hexToRgb,
    defaultFont,
    buttonColors
  } = styles(theme);

  return {
    button: {
      ...defaultFont,
      fontWeight: "bold",
      minHeight: "auto",
      minWidth: "auto",
      backgroundColor: grayColor,
      color: whiteColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(grayColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(grayColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(grayColor) +
        ", 0.12)",
      border: "none",
      borderRadius: "3px",
      position: "relative",
      padding: "12px 30px",
      margin: ".3125rem 1px",
      textTransform: "uppercase",
      letterSpacing: "0",
      willChange: "box-shadow, transform",
      transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      touchAction: "manipulation",
      cursor: "pointer",
      "&:hover,&:focus": {
        color: whiteColor,
        backgroundColor: grayColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(grayColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(grayColor) +
          ", 0.2)"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        position: "relative",
        display: "inline-block",
        top: "0",
        marginTop: "-1em",
        marginBottom: "-1em",
        fontSize: "1.1rem",
        marginRight: "4px",
        verticalAlign: "middle"
      },
      "& svg": {
        position: "relative",
        display: "inline-block",
        top: "0",
        width: "25px",
        height: "25px",
        marginRight: "4px",
        verticalAlign: "middle"
      },
      "&$justIcon": {
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          marginTop: "0px",
          position: "absolute",
          width: "100%",
          transform: "none",
          left: "0px",
          top: "0px",
          height: "100%",
          lineHeight: "41px",
          fontSize: "20px"
        }
      }
    },
    right: {
      float: "right"
    },
    fullWidth: {
      width: "100%"
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
    disabled: {
      ...buttonColors.disabled,
      "&$justIcon": {
        pointerEvents: "none",
        color: grayColor
      }
    },
    transparent: buttonColors.transparent,
    lg: {
      ...defaultFont,
      "&$justIcon": {
        "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
          marginTop: "-4px"
        }
      },
      padding: "1.125rem 2.25rem",
      fontSize: "14px",
      lineHeight: "1.333333",
      borderRadius: "0.2rem"
    },
    sm: {
      ...defaultFont,
      "&$justIcon": {
        "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
          marginTop: "1px"
        }
      },
      padding: "0.40625rem 1.25rem",
      fontSize: "12px",
      lineHeight: "1.5",
      borderRadius: "0.2rem"
    },
    xs: {
      ...defaultFont,
      padding: "4px 4px",
      fontSize: "10px"
    },
    round: {
      borderRadius: "30px"
    },
    block: {
      width: "100% !important"
    },
    link: {
      "&,&:hover,&:focus": {
        backgroundColor: "transparent",
        color: grayColor,
        boxShadow: "none"
      }
    },
    justIcon: {
      ...defaultFont,
      paddingLeft: "0px",
      paddingRight: "0px",
      height: "41px",
      minWidth: "41px",
      width: "41px",
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginRight: "0px"
      },
      "&$lg": {
        height: "57px",
        minWidth: "57px",
        width: "57px",
        lineHeight: "56px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          fontSize: "32px",
          lineHeight: "56px"
        },
        "& svg": {
          width: "32px",
          height: "32px"
        }
      },
      "&$sm": {
        height: "30px",
        minWidth: "30px",
        width: "30px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          fontSize: "17px",
          lineHeight: "29px"
        },
        "& svg": {
          width: "25px",
          height: "25px",
          padding: "0.40625rem 0.40625rem"
        }
      }
    }
  };
}

export default buttonStyle;