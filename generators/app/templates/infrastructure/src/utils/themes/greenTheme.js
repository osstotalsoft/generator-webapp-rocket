import defaultLogo from 'assets/img/logo.png';

const defaultFont = {
    fontFamily: "Source Sans Pro",
    fontSize: 14,
    lineHeight: "1.5em"
}

const palette = {
    primary: {
        main: '#005604'
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
        bkColor: '#7eb58b',
        activeLinkColor: '#fff',
        activeBkColor: '#005604',
        hoverBgColor: 'rgb(239,247,240, 0.5)',
        color: "#005604",
        bkOpacity: "0.8"
    },
    topBar: {
        bkColor: 'transparent'
    },
    timColors: {
        primary: '#005604',
        primaryRGBA: 'rgba(0, 73, 123, 0.28)',
        warningColor: '#ff9800',
        dangerColor: '#005604',
        successColor: '#4caf50',
        infoColor: '#00acc1',
        blueColor: '#26C6DA',
        themeColor: '#005604',
        themeColorRGBA: 'rgba(0, 73, 123, 0.28)',
        themeShadowColor: '#2ab773',
        themeShadowColorRGBA: 'rgb(39 108 37)'
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
        main: "#eff7f0"
    },
    activeColor: '#555555',
    button: {
        theme: '#005604',
        themeShadow: "0 2px 2px 0 rgba(39, 108, 37, 0.14), 0 3px 1px -2px rgba(39, 108, 37, 0.2), 0 1px 5px 0 rgba(39, 108, 37,  0.12)"
    }
}

export const theme = {
    logo: defaultLogo,
    input: {
        height: "1.1875em"
    },
    defaultFont,
    palette,
    typography: {
        ...defaultFont,
        useNextVariants: true,
        htmlFontSize: 14,
        fontWeightMedium: 300,
        button: {
            ...defaultFont,
            textAlign: "center",
            fontStretch: "normal",
            fontStyle: "normal"
        },
        body: {
            ...defaultFont,
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
            backgroundColor: '#005604',
            padding: "10px",
            color: "white",
            borderBottom: '1px solid #ddd'
        },
        tableContent: {
            textAlign: "left",
            padding: "0px 0px 0px 10px ",
            borderBottom: '1px solid #eee'
        },
        itemSelected: {
            background: '#c1c1c1',
            color: 'white'
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