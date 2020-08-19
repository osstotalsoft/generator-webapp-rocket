import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import menuConfig from 'constants/menuConfig';
import { useHeader } from "providers/AreasProvider";
// material-ui components
import { makeStyles, AppBar, Toolbar, Hidden, Typography } from '@material-ui/core';

import CustomIconButton from "components/common/buttons/IconButton";

// material-ui icons
import MoreVert from "@material-ui/icons/MoreVert";
import ViewList from "@material-ui/icons/ViewList";
import Menu from "@material-ui/icons/Menu";

// core components
import headerStyle from "assets/jss/components/headerStyle";

const useStyles = makeStyles(headerStyle);

function Header({ miniActive, sidebarMinimize, handleDrawerToggle }) {
    const { t } = useTranslation();
    const location = useLocation();
    const [header] = useHeader();
    const classes = useStyles();

    const makeBrand = (pathname) => {
        var name;
        menuConfig.map((menu) => {
            if (menu.path === pathname) {
                name = menu.name;
            }
            return null;
        });
        if (pathname === '/user') {
            name = 'User';
        }

        return name || "";
    }

    const pathName = makeBrand(location.pathname);
    const headerRef = useRef();

    return (
        <AppBar position="sticky" className={classes.appBar + " " + classes.theme}>
            <Toolbar className={classes.container}>
                <Hidden smDown>
                    <div className={classes.sidebarMinimize}>
                        {miniActive ? (
                            <CustomIconButton color="primaryNoBackground" onClick={sidebarMinimize}>
                                <ViewList fontSize="small" />
                            </CustomIconButton >
                        ) : (
                                <CustomIconButton color="primaryNoBackground" onClick={sidebarMinimize}>
                                    <MoreVert fontSize="small" />
                                </CustomIconButton >
                            )}
                    </div>
                    {header || <Typography variant='subtitle1' className={classes.title} > {(pathName && t('NavBar.' + pathName))}</Typography>}
                </Hidden>
                <Hidden mdUp>
                    {header || <Typography variant='subtitle1' className={classes.titleMobile}>{(pathName && t('NavBar.' + pathName))}</Typography>}
                </Hidden>
                <div className={classes.w100} ref={headerRef}></div>

                <Hidden mdUp>
                    <div className={classes.appResponsive}>
                        <CustomIconButton
                            color="themeWithBackground"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                        >
                            <Menu fontSize="small" />
                        </CustomIconButton>
                    </div>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    miniActive: PropTypes.bool.isRequired,
    sidebarMinimize: PropTypes.func.isRequired,
    handleDrawerToggle: PropTypes.func
};

export default Header;