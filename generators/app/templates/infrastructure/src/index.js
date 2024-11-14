import 'url-search-params-polyfill'

import { createRoot } from 'react-dom/client'
import Root from './routes/root'
import ThemeProvider from 'providers/ThemeProvider'
import 'utils/i18n'
import './assets/css/index.css'
import 'moment/locale/ro'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { AreasWrapper } from './providers/AreasProvider'

import AuthApolloProvider from 'apollo/AuthApolloProvider'
<%_ if (withMultiTenancy) { _%>
import AuthProvider from 'providers/TenantAuthenticationProvider'; 
<%_} else {_%>
import AuthProvider from 'providers/AuthenticationProvider'; 
<%_}_%>

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ThemeProvider>
    <AreasWrapper>
      <AuthProvider>
        <AuthApolloProvider>
            <Root />
        </AuthApolloProvider>
      </AuthProvider>
    </AreasWrapper>
  </ThemeProvider>
)