import styles from "assets/jss/styles";

const textFieldStyle = theme => {
    const { defaultFont, grayColor } = styles(theme);

    return {
        label: {
            ...defaultFont,
            color: grayColor[3] + " !important",
            fontWeight: "400",
            lineHeight: "1.42857",
            top: "0px",
            marginTop: "0px"
        },
        input: {
            color: grayColor[14],
            "&,&::placeholder": {
                ...defaultFont,
                fontWeight: "400",
                opacity: "1"
            },
            "&::placeholder": {
                color: grayColor[3]
            }
        },
    };
}

export default textFieldStyle;