import { toast } from "react-toastify";
import { makeStyles } from "@material-ui/core";
import styles from "assets/jss/styles";
import cx from "classnames";

const snackStyles = theme => {
    const {
        snackDangerBgColor, snackWarningBgColor, snackSuccessBgColor,
        snackSuccessColor, snackWarningColor, snackDangerColor
    } = styles(theme);
    return {
        default: { borderRadius: '6px', padding: '6px 20px' },
        success: { backgroundColor: snackSuccessBgColor, color: snackSuccessColor },
        error: { backgroundColor: snackDangerBgColor, color: snackDangerColor },
        warning: { backgroundColor: snackWarningBgColor, color: snackWarningColor },
    }
}

const useStyles = makeStyles(snackStyles);

export const useToast = () => {
    const classes = useStyles();
    return (message, variant, autoClose = variant !== 'error') => {
        const toastClasses = cx({
            [classes[variant]]: variant,
            [classes['default']]: true
        });

        switch (variant) {
            case 'error':
                toast.error(message, { autoClose: false, className: toastClasses, closeOnClick: false, draggable: false })
                break;
            case 'info':
                toast.info(message, { autoClose, className: toastClasses })
                break;
            case 'success':
                toast.success(message, { autoClose, className: toastClasses })
                break;
            case 'warning':
                toast.warn(message, { autoClose, className: toastClasses })
                break;
            default:
                toast(message, { autoClose, className: toastClasses })
                break;
        }
    }
}