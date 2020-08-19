import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {

    const handleBackButtonClick = useCallback(event => {
        onChangePage(event, page - 1, 0);
    }, [onChangePage, page])

    const handleNextButtonClick = useCallback(event => {
        onChangePage(event, page + 1, 1);
    }, [onChangePage, page])

    return (
        <div style={{ display: "flex" }}>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="Previous Page"
            >
                <KeyboardArrowLeft />
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Next Page"
            >
                <KeyboardArrowRight />
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired
};

export default TablePaginationActions;