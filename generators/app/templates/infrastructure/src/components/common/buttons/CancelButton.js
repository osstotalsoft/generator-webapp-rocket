import React from "react";
import PropTypes from "prop-types";
import CustomIconButton from "./IconButton";
import CancelIcon from '@material-ui/icons/Cancel';

const CancelButton = ({ title, onClick, disabled }) => (
    <CustomIconButton size={"small"} color={"themeNoBackground"} aria-label="Cancel" onClick={onClick} disabled={disabled} tooltip={title}>
        <CancelIcon fontSize={"small"} />
    </CustomIconButton>
)

CancelButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

export default CancelButton;