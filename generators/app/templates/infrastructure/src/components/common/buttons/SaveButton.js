import React from "react";
import PropTypes from "prop-types";
import SaveIcon from '@material-ui/icons/Save';
import CustomIconButton from "./IconButton";

const SaveButton = ({ title, onClick, disabled, ...rest }) => (
    <CustomIconButton color={"themeWithBackground"} aria-label="Save" onClick={onClick} disabled={disabled} tooltip={title} {...rest}>
        <SaveIcon fontSize={"small"} />
    </CustomIconButton>
)

SaveButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

export default SaveButton;