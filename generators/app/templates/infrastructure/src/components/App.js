import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import appStyle from "assets/jss/components/appStyle";
import logo from 'assets/img/logo.png';
import miniLogo from 'assets/img/miniLogo.png';
import cx from "classnames";

import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import Footer from './layout/Footer';

import AppRoutes from 'routes/AppRoutes';

import { ToastContainer, CheckInternetConnection } from '@bit/totalsoft_oss.react-mui.kit.core'

const useStyles = makeStyles(appStyle);

function App(props) {
  const mainPanelRef = useRef();
  const classes = useStyles();
  const { location } = props;
  const { i18n } = useTranslation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [miniActive, setMiniActive] = useState(false);

  const handleDrawerToggle = useCallback(() => { setMobileOpen(!mobileOpen) }, [mobileOpen])
  const sidebarMinimize = useCallback(() => { setMiniActive(!miniActive) }, [miniActive])
  const changeLanguage = useCallback((lng) => { i18n.changeLanguage(lng.target.value); }, [i18n])

  useEffect(
    () => {
      mainPanelRef.current.scrollTop = 0;
    },
    [location.pathname]
  )

  const mainPanel = classes.mainPanel + " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive
    });

  return (
    <div className={classes.wrapper}>
      <Sidebar
        logo={miniActive ? miniLogo : logo}
        handleDrawerToggle={handleDrawerToggle}
        changeLanguage={changeLanguage}
        open={mobileOpen}
        miniActive={miniActive}
      />
      <div className={mainPanel} ref={mainPanelRef} >
        <Header
          sidebarMinimize={sidebarMinimize}
          miniActive={miniActive}
          handleDrawerToggle={handleDrawerToggle}
        />
        <AppRoutes />
        <Footer fluid />
      </div>
      <ToastContainer />
      <CheckInternetConnection />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.object.isRequired
};

export default App;
