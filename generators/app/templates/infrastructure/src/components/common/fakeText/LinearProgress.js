import React from "react";
import PropTypes from "prop-types";
import { makeStyles, LinearProgress } from "@material-ui/core";
import styles from "assets/jss/components/common/linearProgressStyle.js";

const useStyles = makeStyles(styles);

export default function CustomLinearProgress(props) {
    const { color, ...rest } = props;
    const classes = useStyles();
    return (
        <LinearProgress
            {...rest}
            classes={{
                root: classes.root + " " + classes[color + "Background"],
                bar: classes.bar + " " + classes[color]
            }}
        />
    );
}

CustomLinearProgress.defaultProps = {
    color: "gray"
};

CustomLinearProgress.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ])
};