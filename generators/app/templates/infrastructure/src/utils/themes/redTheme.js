import logo from 'assets/img/logo.png';

const defaultFont = {
    fontFamily: "Source Sans Pro",
    fontSize: 14,
    lineHeight: "1.5em"
}

const palette = {
    primary: {
        main: '#e11932'
    },
    secondary: {
        main: '#2ab773',
    },
    text: {
        dark: 'rgb(3, 19, 3)',
        white: 'rgb(255, 255, 255)',
        darkGrey: 'rgb(169,169,169)',
        highlight: 'rgb(36, 76, 140)'
    },
    sideMenu: {
        bkColor: '#fff',
        activeLinkColor: '#fff',
        activeBkColor: '#e11932',
        hoverBgColor: 'rgba(200, 200, 200, 0.2)',
        color: "#e11932",
        bkOpacity: "0.8"
    },
    topBar: {
        bkColor: 'transparent'
    },
    timColors: {
        primary: '#e11932',
        primaryRGBA: 'rgba(0, 73, 123, 0.28)',
        warningColor: '#ff9800',
        dangerColor: '#e11932',
        successColor: '#4caf50',
        infoColor: '#00acc1',
        iconCardColor: '#e11932',
        iconCardColorRGBA: 'rgba(255, 121, 0, 0.4)',
        themeColor: '#26C6DA',
        themeColorRGBA: 'rgba(85, 85, 85, 1)',
        themeShadowColor: '#26C6DA',
        themeShadowColorRGBA: 'rgba(225, 25, 50, 1)'
    },
    snackbar: {
        infoBgColor: '#ccf1ff',
        infoColor: '#555555',
        dangerBgColor: '#f44336',
        dangerColor: '#ffffff',
        successBgColor: "#36b37e",
        successColor: "#ffffff",
        warningBgColor: "#ff9800",
        warningColor: "#ffffff"
    },
    card: {
        gray500: '#D7D7D7',
        orange800: '#B35500',
        orange500: '#fb8c00',
        orange400: '#ffa726',
        green500: '#43a047',
        green400: '#66bb6a',
        blue500: '#26c6da',
        blue400: '#00acc1',
        red400: '#FF6666',
        red500: '#FF5555'
    },
    amount: {
        positive: '#01b25a',
        negative: '#f55',
        faded: '#60768f',
        active: '#f44336'
    },
    bg: {
        main: "#fff"
    },
    activeColor: '#555555',
    button: {
        theme: '#26C6DA',
        themeShadow: "0 2px 2px 0 rgba(225, 25, 50, 0.14), 0 3px 1px -2px rgba(225, 25, 50, 0.2), 0 1px 5px 0 rgba(225, 25, 50, 0.12)"
    }
}

export const theme = {
    logo,
    input: {
        height: "1.1875em"
    },
    defaultFont,
    palette,
    typography: {
        ...defaultFont,
        useNextVariants: true,
        htmlFontSize: 14,
        fontSize: 14,
        fontWeightMedium: 300,
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 14
        }
    },
    overrides: {
        MuiCollapse: {
            entered: {
                height: "auto",
                overflow: "visible"
            }
        },
        MuiCardHeader: {
            content: {
                width: "100%"
            }
        },
        MuiDivider: {
            root: {
                height: "2px"
            }
        },
        MuiTablePagination: {
            actions: {
                marginLeft: 0
            },
            toolbar: {
                paddingLeft: 0
            }
        }
    },
    table: {
        main: {
            marginTop: "15px",
            marginBottom: "15px",
            borderSpacing: 0
        },
        tableHeader: {
            textAlign: "left",
            backgroundColor: '#f0fbff',
            padding: "10px",
            color: "#555555",
            borderBottom: '1px solid #ddd'
        },
        tableContent: {
            textAlign: "left",
            padding: "10px ",
            borderBottom: '1px solid #eee'
        },
        itemSelected: {
            background: '#ccf1ff',
            color: '#555555'
        }
    },
    autoComplete: {
        valueContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            flex: 1,
            alignItems: 'center',
            paddingBottom: '5px'
        },
        input: {
            fontFamily: 'Source Sans Pro !important',
            fontSize: '14px !important',
            fontWeight: 'normal !important',
            fontStretch: 'normal !important',
            fontStyle: 'normal !important',
            lineHeight: '1.29 !important',
            color: '#a8a8a8 !important',
        }
    },
    card: {
        height: 'auto',
        width: 'auto',
        borderRadius: '5px',
        boxShadow: '0 2px 9px 0 rgba(0, 0, 0, 0.14)',
        backgroundColor: '#ffffff',
    },
    header: {
        title: {
            borderRadius: "3px",
            textTransform: "none",
            fontWeight: "bold",
            color: palette.primary.main,
            "&:hover,&:focus": {
                background: "transparent"
            }
        },
        titleMobile: {
            borderRadius: "3px",
            textTransform: "none",
            fontWeight: "bold",
            color: palette.primary.main,
            "&:hover,&:focus": {
                background: "transparent"
            }
        }
    }
};