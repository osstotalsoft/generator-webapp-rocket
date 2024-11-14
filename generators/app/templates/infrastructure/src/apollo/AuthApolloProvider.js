<% if (withSubscription) { %> import { useEffect } from 'react' <% } %>
import PropTypes from 'prop-types'
import { ApolloProvider } from '@apollo/client'
import { useOidcUser, OidcUserStatus <% if (withSubscription) { %>, useOidcAccessToken <% } %> } from '@axa-fr/react-oidc'

import { getApolloClient <% if (withSubscription) { %>, setAccessToken <% } %> } from './client'
import { getOidcConfigName } from "utils/functions"

export function AuthApolloProvider({ children }) {
  const { oidcUserLoadingState } = useOidcUser(getOidcConfigName())
<%_ if (withSubscription) { _%>
  const { accessToken } = useOidcAccessToken(getOidcConfigName())

  useEffect(() => {
    setAccessToken(accessToken)
  }, [accessToken])
<%_ } _%>

  if (oidcUserLoadingState === OidcUserStatus.Loading) {
    return <>auth loading</>
  }

  return <ApolloProvider client={getApolloClient()}>{children}</ApolloProvider>
}

AuthApolloProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default AuthApolloProvider