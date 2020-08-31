import styles from "assets/jss/styles";

const langSelectorStyle = theme => {
    const { defaultFont } = styles(theme);

    return {
        langSelectorContainer: {
            ...theme.palette.sideMenu,
            padding: "0px 10px",
            width: "100%",
            verticalAlign: "middle"
        },
        langSelector: {
            color: "inherit",
            width: "100%",
            verticalAlign: "middle",
            "&:before,&:after": {
                display: "none !important"
            }
        },
        langSelectorText: {
            ...defaultFont,
            margin: "0",
            position: "relative",
            transform: "translateX(0px)",
            color: "inherit",
            opacity: "1",
            whiteSpace: "nowrap",
            display: "inline-block",
            transition: "transform 300ms ease 0s, opacity 300ms ease 0s",
            fontSize: "15px",
            fontWeight: "bold",
            paddingLeft: "15px",
        },
        langSelectorItem: {
            padding: "2px 16px"
        },
        langSelectMenu: {
            textOverflow: "unset"
        }
    };
}
export default langSelectorStyle;
