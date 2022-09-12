import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useFooter } from "providers/AreasProvider";

// material-ui components
import { AppBar, Toolbar } from '@mui/material';
import { makeStyles} from 'tss-react/mui'

import footerStyle from "assets/jss/components/footerStyle";

const useStyles = makeStyles()(footerStyle);

function Footer() {
  const footerRef = useRef();
  const { classes } = useStyles();
  const [footer] = useFooter();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.container}>
        <div className={classes.w100} ref={footerRef}></div>
        <div className={classes.content}>
          {footer}
        </div>
      </Toolbar>
    </AppBar>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool
};

export default Footer;
