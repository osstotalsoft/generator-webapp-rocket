import styles from "assets/jss/styles";

const customLinearProgressStyle = (theme) => {
    const {
        warningColor,
        dangerColor,
        successColor,
        infoColor,
        roseColor,
        grayColor,
        hexToRgb
    } = styles(theme);

    return {
        root: {
            height: "4px",
            marginBottom: "20px",
            overflow: "hidden"
        },
        bar: {
            height: "4px"
        },
        primary: {
            backgroundColor: theme.palette.primary.main
        },
        warning: {
            backgroundColor: warningColor
        },
        danger: {
            backgroundColor: dangerColor
        },
        success: {
            backgroundColor: successColor
        },
        info: {
            backgroundColor: infoColor
        },
        rose: {
            backgroundColor: roseColor
        },
        gray: {
            backgroundColor: grayColor
        },
        primaryBackground: {
            background: "rgba(" + hexToRgb(theme.palette.primary.main) + ", 0.2)"
        },
        warningBackground: {
            background: "rgba(" + hexToRgb(warningColor) + ", 0.2)"
        },
        dangerBackground: {
            background: "rgba(" + hexToRgb(dangerColor) + ", 0.2)"
        },
        successBackground: {
            background: "rgba(" + hexToRgb(successColor) + ", 0.2)"
        },
        infoBackground: {
            background: "rgba(" + hexToRgb(infoColor) + ", 0.2)"
        },
        roseBackground: {
            background: "rgba(" + hexToRgb(roseColor) + ", 0.2)"
        },
        grayBackground: {
            background: "rgba(" + hexToRgb(grayColor) + ", 0.2)"
        }
    }
};

export default customLinearProgressStyle;