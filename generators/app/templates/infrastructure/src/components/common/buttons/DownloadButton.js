import React from "react";
import PropTypes from "prop-types";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CustomIconButton from "./IconButton";

const DownloadButton = ({ title, onClick, disabled }) => (
    <CustomIconButton size={"small"} color={"themeNoBackground"} aria-label="Download" onClick={onClick} disabled={disabled} tooltip={title}>
        <CloudDownloadIcon />
    </CustomIconButton>
)

DownloadButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

export default DownloadButton;