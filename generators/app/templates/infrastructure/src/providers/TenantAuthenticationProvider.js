import React, { createContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import getAuthenticationConfiguration from 'utils/auth/authConfig'
import { Authenticating } from 'components/login/Authenticating'
import { CallbackPage } from 'components/login/CallbackPage'
import { NotAuthenticated } from 'components/login/NotAuthenticated'
import { SessionExpired } from 'components/login/SessionExpired'
import { Forbidden } from '@totalsoft/rocket-ui'
import { useSessionStorage } from 'hooks/sessionStorage'
import { OidcProvider } from '@axa-fr/react-oidc'
import { getOidcConfigName } from "utils/functions"

export const TenantContext = createContext()
const TenantAuthenticationProvider = props => {
  const { children } = props
  const [tenant, setTenant] = useSessionStorage('tenant')

  const setTenantCallback = useCallback(
    async e => {
      if ((!e && !tenant) || `${e}`.toUpperCase() === `${tenant}`.toUpperCase()) {
        return
      }

      setTenant(e)
    },
    [setTenant, tenant]
  )

  const configuration = getAuthenticationConfiguration(tenant)

  return (
    <TenantContext.Provider value={setTenantCallback}>
      <OidcProvider
        configuration={configuration}
        configurationName={getOidcConfigName()}
        authenticatingComponent={Authenticating}
        callbackSuccessComponent={CallbackPage}
        loadingComponent={NotAuthenticated}
        sessionLostComponent={SessionExpired}
        authenticatingErrorComponent={Forbidden}
      >
        {children}
      </OidcProvider>
    </TenantContext.Provider>
  )
}

TenantAuthenticationProvider.propTypes = { children: PropTypes.element.isRequired }

export default TenantAuthenticationProvider
