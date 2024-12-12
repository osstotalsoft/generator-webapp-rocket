import { useState, useRef, useEffect, useCallback, Suspense } from 'react'
import { Outlet, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { getTheme, ToastContainer } from '@totalsoft/rocket-ui'

import logo from 'assets/img/logo.png'
import miniLogo from 'assets/img/miniLogo.png'
import { Content } from './AppStyle'

import Sidebar from './layout/sidebar/Sidebar'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

const isWeb = () => window.matchMedia(`(min-width: ${getTheme().breakpoints.values.md})`)?.matches

export default function App() {
  const location = useLocation()
  const mainPanelRef = useRef()

  const [drawerOpen, setDrawerOpen] = useState(isWeb())
  window.onresize = _e => setDrawerOpen(isWeb())

  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen(!drawerOpen)
  }, [drawerOpen])

  const handleCloseDrawer = useCallback(() => {
    if (!drawerOpen) return
    setDrawerOpen(false)
  }, [drawerOpen])

  useEffect(() => {
    if (mainPanelRef?.current?.scrollTop) mainPanelRef.current.scrollTop = 0
  }, [location.pathname])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Sidebar logo={drawerOpen ? logo : miniLogo} closeDrawer={handleCloseDrawer} drawerOpen={drawerOpen} withGradient={false} />
      <Content ref={mainPanelRef} drawerOpen={drawerOpen}>
        <Header drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
        <Outlet />
        <Footer />
      </Content>
      <ToastContainer theme='colored' />
    </Suspense>
  )
}
