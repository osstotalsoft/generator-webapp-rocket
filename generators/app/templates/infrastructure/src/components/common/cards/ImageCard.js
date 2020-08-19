import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import Card from './Card';
import styles from "assets/jss/components/common/cardStyle.js";

const useStyles = makeStyles(styles);

export default function ImageCard(props) {
    const { children, image, imageSize, ...rest } = props;
    const classes = useStyles();

    return (
        <Card {...rest}>
            <Grid container justify='center'>
                <img className={classes.image + ' ' + classes[imageSize]} alt={image} />
            </Grid>
            {children}
        </Card>
    );
}

ImageCard.defaultProps = {
    imageSize: 's'
};

ImageCard.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ]),
    children: PropTypes.node,
    image: PropTypes.string,
    imageSize: PropTypes.oneOf(['s', 'm', 'l'])
};