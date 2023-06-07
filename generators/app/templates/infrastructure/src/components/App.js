import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ToastContainer } from '@totalsoft/rocket-ui'

import logo from 'assets/img/logo.png'
import miniLogo from 'assets/img/miniLogo.png'
import { Container, Content } from './AppStyle'

import Sidebar from './layout/sidebar/Sidebar'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import AppRoutes from 'routes/AppRoutes'

const isWeb = () => window.matchMedia('(min-width: 480px)')?.matches

export default function App() {
  const location = useLocation()
  const mainPanelRef = useRef()
  const { i18n } = useTranslation()

  const [drawerOpen, setDrawerOpen] = useState(isWeb())
  window.onresize = _e => setDrawerOpen(isWeb())

  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen(!drawerOpen)
  }, [drawerOpen])

  const handleCloseDrawer = useCallback(() => {
    if (!drawerOpen) return
    setDrawerOpen(false)
  }, [drawerOpen])

  const changeLanguage = useCallback(
    lng => {
      i18n.changeLanguage(lng.target.value)
    },
    [i18n]
  )

  useEffect(() => {
    mainPanelRef.current.scrollTop = 0
  }, [location.pathname])

  return (
    <Container>
      <Sidebar
        logo={drawerOpen ? logo : miniLogo}
        closeDrawer={handleCloseDrawer}
        changeLanguage={changeLanguage}
        drawerOpen={drawerOpen}
        withGradient={false}
      />
      <Content ref={mainPanelRef} drawerOpen={drawerOpen}>
        <Header drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
        <AppRoutes />
        <Footer fluid />
      </Content>
      <ToastContainer theme='colored'/>
    </Container>
  )
}