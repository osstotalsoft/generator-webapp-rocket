// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const styles = (theme) => {

  // ##############################
  // // // Function that converts from hex color to rgb color
  // // // Example: input = #9c27b0 => output = 156, 39, 176
  // // // Example: input = 9c27b0 => output = 156, 39, 176
  // // // Example: input = #999 => output = 153, 153, 153
  // // // Example: input = 999 => output = 153, 153, 153
  // #############################
  const hexToRgb = input => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
      throw new Error("input is not a valid hex color.");
    }
    let first = input[0];
    let second = input[1];
    let last = input[2];
    if (input.length === 3) {
      input = first + first + second + second + last + last;
    }

    input = input.toUpperCase(input);
    first = input[0] + input[1];
    second = input[2] + input[3];
    last = input[4] + input[5];
    return (
      parseInt(first, 16) +
      ", " +
      parseInt(second, 16) +
      ", " +
      parseInt(last, 16)
    );
  };

  const whiteColor = "#FFF";

  const drawerWidth = 260;
  const rightDrawerWidth = 360;

  const drawerMiniWidth = 80;

  const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
  };

  const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    "&:before,&:after": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  };

  const container = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 768px)": {
      width: "750px"
    },
    "@media (min-width: 992px)": {
      width: "970px"
    },
    "@media (min-width: 1200px)": {
      width: "1170px"
    },
    "&:before,&:after": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  };

  const boxShadow = {
    boxShadow:
      "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  };

  const card = {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "6px",
    color: theme.palette.activeColor,
    background: "#fff",
    overflow: "visible"
  };

  const slimPadding = {
    padding: "2px",
    margin: "0 8px"
  };

  const defaultFont = {
    ...theme.defaultFont,
    fontWeight: "300",
    lineHeight: "1.5em"
  };

  const primaryColor = theme.palette.timColors.primary;
  const primaryColorRGBA = theme.palette.timColors.primaryRGBA;
  const warningColor = theme.palette.timColors.warningColor;
  const dangerColor = theme.palette.timColors.dangerColor;
  const successColor = theme.palette.timColors.successColor;
  const infoColor = theme.palette.timColors.infoColor;
  const blueColor = theme.palette.timColors.blueColor;
  const roseColor = "#e91e63";
  const grayColor = "#999999";
  const blackColor = "#000";
  //theme colors
  const themeColor = theme.palette.timColors.themeColor;
  const themeRGBAColor = theme.palette.timColors.themeColorRGBA;
  const themeShadowColor = theme.palette.timColors.themeShadowColor;
  const themeShadowRGBAColor = theme.palette.timColors.themeShadowColorRGBA;

  const menuActiveColor = theme.palette.sideMenu.activeLinkColor;
  const menuActiveBkColor = theme.palette.sideMenu.activeBkColor;
  const menuBkColor = theme.palette.sideMenu.bkColor;
  const menuColor = theme.palette.sideMenu.color;
  const menuBkOpacity = theme.palette.sideMenu.bkOpacity;
  const topBarBkColor = theme.palette.topBar.bkColor;

  const snackSuccessBgColor = theme.palette.snackbar.successBgColor;
  const snackSuccessColor = theme.palette.snackbar.successColor;
  const snackWarningBgColor = theme.palette.snackbar.warningBgColor;
  const snackWarningColor = theme.palette.snackbar.warningColor;
  const snackInfoBgColor = theme.palette.snackbar.infoBgColor;
  const snackInfoColor = theme.palette.snackbar.infoColor;
  const snackDangerBgColor = theme.palette.snackbar.dangerBgColor;
  const snackDangerColor = theme.palette.snackbar.dangerColor;
  const activeColor = theme.palette.activeColor;

  const primaryBoxShadow = {
    boxShadow:
      "0 12px 20px -10px " + primaryColorRGBA + ", 0 4px 20px 0px " + primaryColorRGBA + ", 0 7px 8px -5px " + primaryColorRGBA
  };
  const infoBoxShadow = {
    boxShadow:
      "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
  };
  const successBoxShadow = {
    boxShadow:
      "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
  };
  const warningBoxShadow = {
    boxShadow:
      "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
  };
  const dangerBoxShadow = {
    boxShadow:
      "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
  };
  const roseBoxShadow = {
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
  };
  const themeBoxShadow = {
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px " + themeRGBAColor
  };

  const themeBoxSecondaryShadow = {
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px " + themeShadowRGBAColor
  };

  const orangeCardHeader = {
    background: "linear-gradient(60deg, " + theme.palette.card.orange400 + ", " + theme.palette.card.orange500 + ")",
    ...warningBoxShadow
  };
  const greenCardHeader = {
    background: "linear-gradient(60deg, " + theme.palette.card.green400 + ", " + theme.palette.card.green500 + ")",
    ...successBoxShadow
  };
  const redCardHeader = {
    background: "linear-gradient(60deg, " + theme.palette.card.red400 + ", " + theme.palette.card.red500 + ")",
    ...dangerBoxShadow
  };
  const blueCardHeader = {
    background: "linear-gradient(60deg, " + theme.palette.card.blue400 + ", " + theme.palette.card.blue500 + ")",
    ...infoBoxShadow
  };
  const purpleCardHeader = {
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    ...primaryBoxShadow
  };
  const roseCardHeader = {
    background: "linear-gradient(60deg, #ec407a, #d81b60)",
    ...roseBoxShadow
  };
  const themeCardHeader = {
    background: "linear-gradient(60deg, " + themeColor + ", " + themeColor + ")",
    ...themeBoxShadow
  }

  const cardActions = {
    margin: "0 20px 10px",
    paddingTop: "10px",
    borderTop: "1px solid #eeeeee",
    height: "auto",
    ...defaultFont
  };

  const cardHeader = {
    margin: "-20px 15px 0",
    borderRadius: "3px",
    padding: "5px"
  };

  const defaultBoxShadow = {
    border: "0",
    borderRadius: "3px",
    boxShadow:
      "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    padding: "10px 0",
    transition: "all 150ms ease 0s"
  };

  const tooltip = {
    padding: "10px 15px",
    minWidth: "130px",
    color: "#FFFFFF",
    lineHeight: "1.7em",
    background: "rgba(85,85,85,0.9)",
    border: "none",
    borderRadius: "3px",
    opacity: "1!important",
    boxShadow:
      "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  };

  const capitalize = {
    textTransform: "capitalize"
  };

  const buttonColors = {
    primary: {
      backgroundColor: primaryColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(primaryColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(primaryColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(primaryColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: primaryColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(primaryColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(primaryColor) +
          ", 0.2)"
      }
    },
    theme: {
      backgroundColor: theme.palette?.button?.theme,
      boxShadow: theme.palette?.button?.themeShadow,
      "&:hover": {
        backgroundColor: whiteColor,
        color: theme.palette?.button?.theme,
        boxShadow: theme.palette?.button?.themeShadow
      }
    },
    themeNoBackground: {
      backgroundColor: "transparent",
      color: theme.palette?.button?.theme,
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "transparent",
        color: theme.palette?.button?.theme,
        boxShadow: theme.palette?.button?.themeShadow
      }
    },
    themeWithBackground: {
      backgroundColor: "transparent",
      color: theme.palette?.button?.theme,
      boxShadow: theme.palette?.button?.themeShadow,
      "&:hover": {
        backgroundColor: theme.palette?.button?.theme,
        color: whiteColor,
        boxShadow: theme.palette?.button?.themeShadow
      }
    },
    info: {
      backgroundColor: infoColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(infoColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(infoColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(infoColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: infoColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(infoColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(infoColor) +
          ", 0.2)"
      }
    },
    success: {
      backgroundColor: successColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(successColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(successColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(successColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: successColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(successColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(successColor) +
          ", 0.2)"
      }
    },
    warning: {
      backgroundColor: warningColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(warningColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(warningColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(warningColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: warningColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(warningColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(warningColor) +
          ", 0.2)"
      }
    },
    danger: {
      backgroundColor: dangerColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(dangerColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(dangerColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(dangerColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: dangerColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(dangerColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(dangerColor) +
          ", 0.2)"
      }
    },
    rose: {
      backgroundColor: roseColor,
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(roseColor) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(roseColor) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(roseColor) +
        ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: roseColor,
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(roseColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(roseColor) +
          ", 0.2)"
      }
    },
    white: {
      "&,&:focus,&:hover": {
        backgroundColor: whiteColor,
        color: grayColor
      }
    },
    simple: {
      "&,&:focus,&:hover": {
        color: whiteColor,
        background: "transparent",
        boxShadow: "none"
      },
      "&$primary": {
        "&,&:focus,&:hover,&:visited": {
          color: primaryColor
        }
      },
      "&$info": {
        "&,&:focus,&:hover,&:visited": {
          color: infoColor
        }
      },
      "&$success": {
        "&,&:focus,&:hover,&:visited": {
          color: successColor
        }
      },
      "&$warning": {
        "&,&:focus,&:hover,&:visited": {
          color: warningColor
        }
      },
      "&$rose": {
        "&,&:focus,&:hover,&:visited": {
          color: roseColor
        }
      },
      "&$danger": {
        "&,&:focus,&:hover,&:visited": {
          color: dangerColor
        }
      },
    },
    transparent: {
      "&,&:focus,&:hover": {
        color: "inherit",
        background: "transparent",
        boxShadow: "none"
      }
    },
    blue: {
      backgroundColor: blueColor,
      boxShadow:
        "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
      "&:hover": {
        backgroundColor: whiteColor,
        color: blueColor,
        boxShadow:
          "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
      }
    },
    blueNoBackground: {
      backgroundColor: "transparent",
      color: blueColor,
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "transparent",
        color: blueColor,
        boxShadow: "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
      }
    },
    blueWithBackground: {
      backgroundColor: "transparent",
      color: blueColor,
      boxShadow: "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
      "&:hover": {
        backgroundColor: blueColor,
        color: whiteColor,
        boxShadow:
          "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)"
      }
    },
    disabled: {
      opacity: "0.65",
      pointerEvents: "none",
      backgroundColor: grayColor,
      "& svg": {
        color: grayColor
      }
    },
    twitter: {
      backgroundColor: "#55acee",
      color: "#fff",
      boxShadow:
        "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#55acee",
        color: "#fff",
        boxShadow:
          "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
      }
    },
    twitterNoBackground: {
      "&,&:hover,&:focus": {
        color: "#55acee",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    facebook: {
      backgroundColor: "#3b5998",
      color: "#fff",
      boxShadow:
        "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#3b5998",
        color: "#fff",
        boxShadow:
          "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
      }
    },
    facebookNoBackground: {
      "&,&:hover,&:focus": {
        color: "#3b5998",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    google: {
      backgroundColor: "#dd4b39",
      color: "#fff",
      boxShadow:
        "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#dd4b39",
        color: "#fff",
        boxShadow:
          "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
      }
    },
    googleNoBackground: {
      "&,&:hover,&:focus": {
        color: "#dd4b39",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    linkedin: {
      backgroundColor: "#0976b4",
      color: "#fff",
      boxShadow:
        "0 2px 2px 0 rgba(9, 118, 180, 0.14), 0 3px 1px -2px rgba(9, 118, 180, 0.2), 0 1px 5px 0 rgba(9, 118, 180, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#0976b4",
        color: "#fff",
        boxShadow:
          "0 14px 26px -12px rgba(9, 118, 180, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(9, 118, 180, 0.2)"
      }
    },
    linkedinNoBackground: {
      "&,&:hover,&:focus": {
        color: "#0976b4",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    pinterest: {
      backgroundColor: "#cc2127",
      color: "#fff",
      boxShadow:
        "0 2px 2px 0 rgba(204, 33, 39, 0.14), 0 3px 1px -2px rgba(204, 33, 39, 0.2), 0 1px 5px 0 rgba(204, 33, 39, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#cc2127",
        color: "#fff",
        boxShadow:
          "0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2)"
      }
    },
    pinterestNoBackground: {
      "&,&:hover,&:focus": {
        color: "#cc2127",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    youtube: {
      backgroundColor: "#e52d27",
      color: "#fff",
      boxShadow:
        "0 2px 2px 0 rgba(229, 45, 39, 0.14), 0 3px 1px -2px rgba(229, 45, 39, 0.2), 0 1px 5px 0 rgba(229, 45, 39, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#e52d27",
        color: "#fff",
        boxShadow:
          "0 14px 26px -12px rgba(229, 45, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(229, 45, 39, 0.2)"
      }
    },
    youtubeNoBackground: {
      "&,&:hover,&:focus": {
        color: "#e52d27",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    tumblr: {
      backgroundColor: "#35465c",
      color: "#fff",
      boxShadow:
        "0 2px 2px 0 rgba(53, 70, 92, 0.14), 0 3px 1px -2px rgba(53, 70, 92, 0.2), 0 1px 5px 0 rgba(53, 70, 92, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#35465c",
        color: "#fff",
        boxShadow:
          "0 14px 26px -12px rgba(53, 70, 92, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(53, 70, 92, 0.2)"
      }
    },
    tumblrNoBackground: {
      "&,&:hover,&:focus": {
        color: "#35465c",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    github: {
      backgroundColor: "#333333",
      color: "#fff",
      boxShadow:
        "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#333333",
        color: "#fff",
        boxShadow:
          "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
      }
    },
    githubNoBackground: {
      "&,&:hover,&:focus": {
        color: "#333333",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    behance: {
      backgroundColor: "#1769ff",
      color: "#fff",
      boxShadow:
        "0 2px 2px 0 rgba(23, 105, 255, 0.14), 0 3px 1px -2px rgba(23, 105, 255, 0.2), 0 1px 5px 0 rgba(23, 105, 255, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#1769ff",
        color: "#fff",
        boxShadow:
          "0 14px 26px -12px rgba(23, 105, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(23, 105, 255, 0.2)"
      }
    },
    behanceNoBackground: {
      "&,&:hover,&:focus": {
        color: "#1769ff",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    dribbble: {
      backgroundColor: "#ea4c89",
      color: "#fff",
      boxShadow:
        "0 2px 2px 0 rgba(234, 76, 137, 0.14), 0 3px 1px -2px rgba(234, 76, 137, 0.2), 0 1px 5px 0 rgba(234, 76, 137, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#ea4c89",
        color: "#fff",
        boxShadow:
          "0 14px 26px -12px rgba(234, 76, 137, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(234, 76, 137, 0.2)"
      }
    },
    dribbbleNoBackground: {
      "&,&:hover,&:focus": {
        color: "#ea4c89",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    reddit: {
      backgroundColor: "#ff4500",
      color: " #fff",
      boxShadow:
        "0 2px 2px 0 rgba(255, 69, 0, 0.14), 0 3px 1px -2px rgba(255, 69, 0, 0.2), 0 1px 5px 0 rgba(255, 69, 0, 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#ff4500",
        color: " #fff",
        boxShadow:
          "0 14px 26px -12px rgba(255, 69, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 69, 0, 0.2)"
      }
    },
    redditNoBackground: {
      "&,&:hover,&:focus": {
        color: "#ff4500",
        backgroundColor: "transparent",
        boxShadow: "none"
      }
    },
    defaultNoBackground: {
      "&,&:hover,&:focus": {
        color: grayColor,
        boxShadow: "none",
        backgroundColor: "transparent"
      }
    },
    primaryNoBackground: {
      "&,&:hover,&:focus": {
        color: primaryColor,
        backgroundColor: "transparent",
        boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(primaryColor) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(primaryColor) +
          ", 0.2)"
      }
    },
    infoNoBackground: {
      "&,&:hover,&:focus": {
        color: infoColor,
        boxShadow: "none",
        backgroundColor: "transparent"
      }
    },
    successNoBackground: {
      "&,&:hover,&:focus": {
        color: successColor,
        boxShadow: "none",
        backgroundColor: "transparent"
      }
    },
    warningNoBackground: {
      "&,&:hover,&:focus": {
        color: warningColor,
        boxShadow: "none",
        backgroundColor: "transparent"
      }
    },
    dangerNoBackground: {
      "&,&:hover,&:focus": {
        color: dangerColor,
        boxShadow: "none",
        backgroundColor: "transparent"
      }
    },
    roseNoBackground: {
      "&,&:hover,&:focus": {
        color: roseColor,
        boxShadow: "none",
        backgroundColor: "transparent"
      }
    }
  }

  return {
    //variables
    drawerWidth,
    rightDrawerWidth,
    drawerMiniWidth,
    transition,
    container,
    containerFluid,
    boxShadow,
    card,
    defaultFont,
    themeColor,
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    blueColor,
    roseColor,
    grayColor,
    blackColor,
    primaryBoxShadow,
    infoBoxShadow,
    successBoxShadow,
    warningBoxShadow,
    dangerBoxShadow,
    roseBoxShadow,
    orangeCardHeader,
    greenCardHeader,
    redCardHeader,
    blueCardHeader,
    purpleCardHeader,
    roseCardHeader,
    themeCardHeader,
    themeBoxShadow,
    cardActions,
    cardHeader,
    defaultBoxShadow,
    tooltip,
    slimPadding,
    menuActiveColor,
    menuActiveBkColor,
    topBarBkColor,
    menuBkColor,
    menuColor,
    menuBkOpacity,
    primaryColorRGBA,
    capitalize,
    snackWarningBgColor,
    snackWarningColor,
    snackSuccessBgColor,
    snackSuccessColor,
    snackInfoBgColor,
    snackInfoColor,
    snackDangerBgColor,
    snackDangerColor,
    activeColor,
    whiteColor,
    themeShadowColor,
    themeBoxSecondaryShadow,
    buttonColors,
    hexToRgb
  };
};

export default styles;