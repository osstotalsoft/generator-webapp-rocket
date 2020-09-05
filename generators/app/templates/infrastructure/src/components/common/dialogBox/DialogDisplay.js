import React from "react";
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, makeStyles, IconButton, DialogContent, DialogActions } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import dialogStyle from 'assets/jss/components/common/dialogStyle';

const useStyles = makeStyles(dialogStyle);

const DialogDisplay = (props) => {
    const { id, open, title, onClose, content, actions } = props
    const classes = useStyles()

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby={`${id}-dialog-display-title`}
            maxWidth="md"
        >
            <DialogTitle id={`${id}-dialog-display-title`} className={classes.text}>
                {title}
                <IconButton size="small" className={classes.modalCloseButton} aria-label="Close" onClick={onClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                {actions}
            </DialogActions>
        </Dialog>)
}

DialogDisplay.propTypes = {
    id: PropTypes.string.isRequired,
    open: PropTypes.bool,
    title: PropTypes.string,
    onClose: PropTypes.func,
    content: PropTypes.element,
    actions: PropTypes.element
}

export default DialogDisplay