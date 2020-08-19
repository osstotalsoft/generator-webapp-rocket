// ##############################
// // // App styles
// #############################

import styles from "assets/jss/styles";

const appStyle = theme => {
  const { drawerWidth, rightDrawerWidth, drawerMiniWidth, defaultFont /*,transition*/ } = styles(theme);

  return {
    wrapper: {
      ...defaultFont,
      backgroundColor: theme.palette.bg.main,
      color: theme.palette.activeColor,
      position: "relative",
      top: "0",
      height: "100vh",
      "&:after": {
        display: "table",
        clear: "both",
        content: '" "'
      }
    },
    mainPanel: {
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`
      },
      overflow: "auto",
      overflowX: "hidden",
      position: "relative",
      float: "right",
      maxHeight: "100%",
      height: "100%",
      width: "100%",
      overflowScrolling: "touch"
    },
    mainPanelSidebarMini: {
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerMiniWidth}px)`
      }
    },
    appBarShift: {
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth + rightDrawerWidth}px)`
      },

    },
    appBarShiftMini: {
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerMiniWidth + rightDrawerWidth}px)`
      },

    },
    'appBarShift-right': {
      [theme.breakpoints.up("md")]: {
        marginRight: rightDrawerWidth
      }
    },

    mainPanelWithPerfectScrollbar: {
      overflow: "hidden !important"
    },
    progressBar: {
      height: 2,
      position: "absolute",
      zIndex: 2000,
      top: 0,
      left: 0,
      width: "100%",
      bottom: 0
    },
    stickySideButtons: {
      position: "sticky",
      top: 0,
      '@media (max-width: 480px)': {
        position: "inherit",
        zIndex: 1030
      },
      toastWrapper: {
        borderRadius: '6px',
        width: '500px',
        overflowWrap: 'anywhere'
      }

    }
  }
};

export default appStyle;