import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { SidebarRef } from './SidebarStyle'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { sidebarWrapperHeight } from 'utils/constants'

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.
function SidebarWrapper({ children, drawerOpen }) {
  const sidebarWrapperRef = useRef()
  return (
    <SidebarRef ref={sidebarWrapperRef} drawerOpen={drawerOpen}>
      <SimpleBar style={{ height: sidebarWrapperHeight, overflowX: 'hidden' }}>{children}</SimpleBar>
    </SidebarRef>
  )
}

SidebarWrapper.propTypes = {
  children: PropTypes.array.isRequired,
  drawerOpen: PropTypes.bool.isRequired
}

export default SidebarWrapper
