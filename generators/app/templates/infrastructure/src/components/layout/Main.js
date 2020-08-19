import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import mainStyle from 'assets/jss/components/mainStyle'

const useStyles = makeStyles(mainStyle);

function Main(props) {
    const { routes } = props;
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <div className={classes.container}>
                {routes}
            </div>
        </div>
    );
}

Main.propTypes = {
    routes: PropTypes.object.isRequired
};

export default Main;