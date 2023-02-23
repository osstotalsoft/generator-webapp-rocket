import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import App from 'components/App'

const WaitingComponent = () => {
  // eslint-disable-next-line react/display-name
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  )
}

export default (
  <Routes>
    <Route path={`*`} element={<WaitingComponent />} />
  </Routes>
)