import React from "react";
import PropTypes from "prop-types";
import { ArrowDownward } from '@material-ui/icons';
import CustomIconButton from "./IconButton";

function DownwardButton({ title, onClick, disabled }) {
    return (
        <CustomIconButton size={"small"} color={"themeNoBackground"} aria-label="Downward" disabled={disabled} onClick={onClick} tooltip={title}>
            <ArrowDownward fontSize="small" />
        </CustomIconButton>
    )
}

DownwardButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default DownwardButton;