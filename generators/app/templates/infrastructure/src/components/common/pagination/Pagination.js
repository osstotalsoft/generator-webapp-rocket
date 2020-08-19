import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { TablePagination, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import styles from 'assets/jss/components/common/pagination';
import TablePaginationActions from './PaginationActions';
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from '../../common/buttons/IconButton';
import { emptyFunction } from 'utils/constants';

const useStyles = makeStyles(styles);

export const Pagination = ({ loading, totalCount, pageSize, page, rowsPerPageOptions, onRefresh, onChangePage, onChangeRowsPerPage }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const displayedRows = useCallback(({ from, to, count }) => {
    return `${from}-${to} ${t('RowsOf')} ${count}`;
  }, [t])

  const internalChangePage = useCallback((_event, newPage, direction) => {
    onChangePage(newPage, direction);
  }, [onChangePage])

  const internalChangePageSize = useCallback(event => {
    onChangeRowsPerPage(event.target.value);
  }, [onChangeRowsPerPage])

  const actualRowsPerPage = rowsPerPageOptions ? rowsPerPageOptions : [10, 25, 50, 100];

  return !loading && (
    <div>
      <div className={classes.floatRight}>
        <TablePagination
          ActionsComponent={TablePaginationActions}
          component="div"
          count={totalCount}
          rowsPerPage={pageSize}
          page={page}
          onChangePage={internalChangePage}
          onChangeRowsPerPage={internalChangePageSize}
          labelRowsPerPage={t('RowsPerPage')}
          labelDisplayedRows={displayedRows}
          SelectProps={{
            inputProps: { 'aria-label': 'Rows per page' },
            native: true
          }}
          rowsPerPageOptions={actualRowsPerPage}
          classes={{ caption: classes.caption }}
        />
      </div>
      <div className={classes.refreshButton}>
        <IconButton onClick={onRefresh} color="defaultNoBackground">
          <RefreshIcon />
        </IconButton >
      </div>
    </div>
  );
}

Pagination.defaultProps = {
  onRefresh: emptyFunction
}

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChangeRowsPerPage: PropTypes.func,
  onChangePage: PropTypes.func,
  onRefresh: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  rowsPerPageOptions: PropTypes.array
};

export default Pagination;