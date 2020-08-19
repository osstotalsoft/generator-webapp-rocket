import React from "react";
import PropTypes from "prop-types";
import BackupIcon from '@material-ui/icons/Backup';
import CustomIconButton from "./IconButton";

const UploadButton = ({ title, onClick, disabled, children, ...rest }) => (
    <CustomIconButton size={"small"} color={"themeNoBackground"} aria-label="Upload" onClick={onClick} disabled={disabled} tooltip={title} {...rest}>
        {children}
        <BackupIcon />
    </CustomIconButton>
)

UploadButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node
};

export default UploadButton;