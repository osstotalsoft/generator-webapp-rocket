import React from "react";
import PropTypes from "prop-types";
import { ArrowUpward } from '@material-ui/icons';
import CustomIconButton from "./IconButton";

function UpwardButton({ title, onClick, disabled }) {
    return (
        <CustomIconButton size={"small"} color={"themeNoBackground"} aria-label="Upward" disabled={disabled} onClick={onClick} tooltip={title}>
            <ArrowUpward fontSize="small" />
        </CustomIconButton>
    )
}

UpwardButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default UpwardButton;