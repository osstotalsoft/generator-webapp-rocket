import React, { useRef } from 'react'
import { useFooter } from 'providers/AreasProvider'
import { AppBar, Toolbar, FooterRef, Content } from './FooterStyle'

function Footer() {
  const footerRef = useRef()
  const [footer] = useFooter()

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <FooterRef ref={footerRef}></FooterRef>
        <Content>{footer}</Content>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
