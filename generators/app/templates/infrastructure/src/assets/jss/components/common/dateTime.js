import styles from "assets/jss/styles";

const dateTimeStyles = (theme) => {
    const { blackColor, blueColor, defaultFont } = styles(theme);
    return ({
        dateTimeInput: {
            ...defaultFont,
            minWidth: "100%",
            display: 'flex'
        },
        label: {
            ...defaultFont,
            fontWeight: "400",
            display: 'flex'
        },
        action: {
            cursor: 'pointer'
        },
        dateTimeIconButtons: {
            ...defaultFont,
            padding: '0px',
            color: blackColor
        },
        themeColor: blueColor,
        defaultFont
    })
}

export default dateTimeStyles;