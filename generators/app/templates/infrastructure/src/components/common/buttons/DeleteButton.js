import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from '@material-ui/icons/Delete';
import CustomIconButton from "./IconButton";

const DeleteButton = ({ title, onClick, disabled }) => (
    <CustomIconButton size={"small"} color={"themeNoBackground"} aria-label="Delete" onClick={onClick} disabled={disabled} tooltip={title}>
        <DeleteIcon />
    </CustomIconButton>
)

DeleteButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

export default DeleteButton;