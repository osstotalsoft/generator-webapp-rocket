import React from "react";
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import { Paper, makeStyles } from '@material-ui/core';

const styles = {
    wrapper: {
        width: '100%'
    },
    fake: {
        backgroundColor: grey[200],
        height: 10,
        margin: 20,
        // Selects every two elements among any group of siblings.
        '&:nth-child(2n)': {
            marginRight: '20%',
        },
    },
    fakeTextPaper: {
        padding: "10px"
    }
}

const useStyles = makeStyles(styles);

function LoadingFakeText({ lines = 4, onPaper = false, ...props }) {
    const classes = useStyles();
    const fakeText = <div className={classes.wrapper} {...props}>{
        [...Array(lines)].map((e, i) => <div className={classes.fake} key={i}></div>)
    }
    </div>

    if (onPaper) {
        return <Paper className={classes.fakeTextPaper}>
            {fakeText}
        </Paper>
    }

    return fakeText
}

LoadingFakeText.propTypes = {
    lines: PropTypes.number,
    onPaper: PropTypes.bool
};

export default LoadingFakeText;