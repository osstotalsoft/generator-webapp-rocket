import React from "react";
import PropTypes from "prop-types";
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CustomIconButton from "./IconButton";

const EditButton = ({ title, onClick, editMode, disabled }) => (
    <CustomIconButton size={"small"} color={"themeNoBackground"} aria-label="Edit" onClick={onClick} disabled={disabled} tooltip={title}>
        {editMode === true ? <EditIcon /> : <VisibilityIcon />}
    </CustomIconButton>
)

EditButton.defaultProps = {
    editMode: true
};

EditButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    editMode: PropTypes.bool,
    disabled: PropTypes.bool
};

export default EditButton;