import styles from "assets/jss/styles";

const langSelectorStyle = theme => {
    const { defaultFont } = styles(theme);

    return {
        tenantSelectorContainer: {
            ...theme.palette.sideMenu,
            padding: "0px",
            width: "100%",
            verticalAlign: "middle"
        },
        tenantSelector: {
            color: "inherit",
            width: "100%",
            verticalAlign: "middle",
            "&:before,&:after": {
                display: "none !important"
            }
        },
        tenantSelectorText: {
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
            lineHeight: "30px",
        },
        tenantSelectorItem: {
            padding: "2px 16px"
        },
        tenantSelectMenu: {
            textOverflow: "unset"
        },
        collapseItemMini: {
            ...defaultFont,
            color: "inherit",
            textTransform: "uppercase",
            width: "30px",
            marginRight: "15px",
            textAlign: "center",
            letterSpacing: "1px",
            position: "relative",
            float: "left",
            display: "inherit",
            transition: "transform 300ms ease 0s, opacity 300ms ease 0s",
        }
    };
}
export default langSelectorStyle;
