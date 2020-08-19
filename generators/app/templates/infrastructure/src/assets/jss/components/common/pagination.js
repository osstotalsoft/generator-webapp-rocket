import mainStyles from "assets/jss/styles";

const styles = theme => {
    const { defaultFont } = mainStyles(theme);

    return {
        floatRight: {
            float: "right"
        },
        refreshButton: {
            lineHeight: "50px",
            float: "right"
        },
        selectRoot: {
            margin: "0!important"
        },
        actions: {
            margin: "0px"
        },
        root: {
            margin: "10px"
        },
        select: {
            ...defaultFont
        },
        caption: {
            ...defaultFont,
            fontSize: "0.85rem"
        }
    };
}

export default styles;