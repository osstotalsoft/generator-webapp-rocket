import 'url-search-params-polyfill'

import React from 'react'
import { createRoot } from 'react-dom/client'
import Root from './routes/root'
import * as serviceWorker from './serviceWorker'
import ThemeProvider from 'providers/ThemeProvider'
import 'utils/i18n'
import './assets/css/index.css'
import 'moment/locale/ro'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { AreasWrapper } from './providers/AreasProvider'

import AuthApolloProvider from 'apollo/AuthApolloProvider'
import AuthProvider from 'providers/TenantAuthenticationProvider'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <AreasWrapper>
    <AuthProvider>
      <AuthApolloProvider>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </AuthApolloProvider>
    </AuthProvider>
  </AreasWrapper>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
