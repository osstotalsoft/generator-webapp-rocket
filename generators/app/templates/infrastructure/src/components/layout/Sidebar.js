import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { makeStyles, Drawer, Hidden } from '@material-ui/core';
import Typography from 'components/common/inputs/Typography';
import { useTranslation } from 'react-i18next';
import { env } from "utils/env";

import Menu from 'components/menu/Menu';
import UserMenu from '../menu/UserMenu';
import sidebarStyle from 'assets/jss/components/sidebarStyle'
import cx from "classnames";
import { withRouter } from 'react-router-dom';
import { sidebarWrapperHeight } from 'utils/constants';

const useStyles = makeStyles(sidebarStyle);

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.
function SidebarWrapper(props) {
    const { className, children } = props;
    const sidebarWrapperRef = useRef();

    return (
        <div className={className} ref={sidebarWrapperRef}>
            <SimpleBar style={{ height: sidebarWrapperHeight, overflowX: "hidden" }} >
                {children}
            </SimpleBar>
        </div>
    );
}


SidebarWrapper.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
}

function Sidebar(props) {
    const [currentMiniActive] = useState(true);
    const classes = useStyles();

    const { i18n, t } = useTranslation();
    const { logo, logoText, miniActive, changeLanguage, open, handleDrawerToggle } = props;

    const logoNormal = classes.logoNormal +
        " " +
        cx({
            [classes.logoNormalSidebarMini]: miniActive && currentMiniActive
        });

    var brand = (
        <div className={classes.logo}>
            <a href="/" className={classes.logoMini}>
                <img src={logo} alt="logo" className={classes.img} />
            </a>
            {logoText && <a href="/" className={logoNormal}>
                {logoText}
            </a>}
        </div>
    );

    var appVersion = (
        <Typography className={classes.appVersion} variant={"caption"}> {`${t("BuildVersion")} ${env.REACT_APP_VERSION}`}</Typography>
    );

    const drawerPaper = classes.drawerPaper +
        " " +
        cx({
            [classes.drawerPaperMini]: miniActive && currentMiniActive,
        });
    const sidebarWrapper = classes.sidebarWrapper +
        " " +
        cx({
            [classes.drawerPaperMini]: miniActive && currentMiniActive,
        });

    return (
        <div>
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: drawerPaper + " " + classes.themeBackground
                    }}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    {brand}
                    <SidebarWrapper className={sidebarWrapper} >
                        <UserMenu miniActive={miniActive && currentMiniActive}
                            changeLanguage={changeLanguage}
                            language={i18n.language} />
                        <Menu miniActive={miniActive && currentMiniActive} />
                    </SidebarWrapper>
                    {appVersion}
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    anchor="left"
                    variant="permanent"
                    open
                    classes={{
                        paper: drawerPaper + " " + classes.themeBackground
                    }}
                >
                    {brand}
                    <SidebarWrapper className={sidebarWrapper} >
                        <UserMenu miniActive={miniActive && currentMiniActive}
                            changeLanguage={changeLanguage}
                            language={i18n.language} />
                        <Menu miniActive={miniActive && currentMiniActive} />
                    </SidebarWrapper>
                    {appVersion}
                </Drawer>
            </Hidden>
        </div>
    );
}

Sidebar.propTypes = {
    miniActive: PropTypes.bool.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    changeLanguage: PropTypes.func.isRequired,
    logo: PropTypes.string,
    logoText: PropTypes.string,
    open: PropTypes.bool
}

//router is needed for re-rendering
export default withRouter(Sidebar);