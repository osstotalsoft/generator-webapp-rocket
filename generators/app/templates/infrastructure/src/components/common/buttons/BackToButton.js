import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import CustomIconButton from "./IconButton";

function BackToButton({ title, path }) {
    const history = useHistory();

    const onBackToList = useCallback(() => {
        history.push(path);
    }, [history, path])

    return (
        <CustomIconButton color="themeWithBackground" aria-label="Back" onClick={onBackToList} tooltip={title}>
            <ArrowBack fontSize="small" />
        </CustomIconButton>
    )
}

BackToButton.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string
}

export default BackToButton;