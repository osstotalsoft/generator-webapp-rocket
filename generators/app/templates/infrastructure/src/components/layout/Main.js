import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import mainStyle from 'assets/jss/components/mainStyle'

const useStyles = makeStyles(mainStyle);

function Main({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <div className={classes.container}>
                {children}
            </div>
        </div>
    );
}

Main.propTypes = {
    children: PropTypes.node.isRequired
};

export default Main;