import React from "react";
import PropTypes from "prop-types";
import AddIcon from '@material-ui/icons/Add';
import CustomIconButton from "./IconButton";

const AddButton = ({ title, onClick, disabled }) => (
    <CustomIconButton color={"theme"} aria-label="Add" onClick={onClick} disabled={disabled} tooltip={title}>
        <AddIcon fontSize={"small"} />
    </CustomIconButton>
)

AddButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

export default AddButton;