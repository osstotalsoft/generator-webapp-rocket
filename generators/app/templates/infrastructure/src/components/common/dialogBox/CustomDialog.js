import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, useMediaQuery, useTheme } from "@material-ui/core";
import Button from 'components/common/buttons/Button';
import { useTranslation } from "react-i18next";
import dialogStyle from 'assets/jss/components/common/dialogStyle';

const useStyles = makeStyles(dialogStyle);

const CustomDialog = (props) => {
    const { id, open, title, content, textContent, onYes, onClose, buttonColor, buttonSize, showActions, fullWidth, maxWidth } = props;
    const { t } = useTranslation();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    return <Dialog
        PaperProps={{
            className: classes.paper
        }}
        open={open}
        onClose={onClose}
        aria-labelledby={`${id}-dialog-yes-no-title`}
        aria-describedby={`${id}-dialog-yes-no-description`}
        maxWidth={maxWidth}
        fullScreen={fullScreen}
        fullWidth={fullWidth}
    >
        <DialogTitle id={`${id}-dialog-yes-no-title`} className={classes.text}>
            {title}
        </DialogTitle>
        <DialogContent className={classes.content}>
            <Grid item lg={12}>
                {textContent &&
                    <DialogContentText id={`${id}-dialog-yes-no-description`}>
                        {textContent}
                    </DialogContentText>}
            </Grid>
            <Grid item lg={12}>
                {content}
            </Grid>
            <Grid item container justify="flex-end" alignItems="center" lg={12}>
                {showActions && <>
                    <Button right size={buttonSize} color={buttonColor} onClick={onYes}>{t("Dialog.Yes")}</Button>
                    <Button right size={buttonSize} color={buttonColor} onClick={onClose}>{t("Dialog.No")}</Button>
                </>
                }
            </Grid>
        </DialogContent>
    </Dialog >
}

CustomDialog.defaultProps = {
    buttonColor: "primary",
    buttonSize: "sm",
    showActions: false,
    maxWidth: "md",
    fullWidth: true
}

CustomDialog.propTypes = {
    id: PropTypes.string.isRequired,
    open: PropTypes.bool,
    title: PropTypes.string,
    buttonColor: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "defaultNoBackground",
        "primaryNoBackground",
        "infoNoBackground",
        "successNoBackground",
        "warningNoBackground",
        "dangerNoBackground",
        "roseNoBackground",
        "white",
        "simple",
        "transparent"
    ]),
    buttonSize: PropTypes.oneOf(["sm", "lg", "xs"]),
    textContent: PropTypes.string,
    content: PropTypes.node,
    onYes: PropTypes.func,
    onClose: PropTypes.func,
    showActions: PropTypes.bool,
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
    fullWidth: PropTypes.bool
}

export default CustomDialog