const addButtonStyle = _theme => ({
    buttonColor: {
        backgroundColor: 'white',
        color: "#1FC1D5",
        "&:hover": {
            textDecoration: "none",
            backgroundColor: '#1FC1D5',
            "@media (hover: none)": {
                backgroundColor: '#1FC1D5'
            }
        }
    }
});

export default addButtonStyle;