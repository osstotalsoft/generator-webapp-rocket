import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from '@apollo/client'
import { useOidcUser, OidcUserStatus, useOidcAccessToken } from '@axa-fr/react-oidc'

import { getApolloClient, getAccessToken } from './client'
import { getOidcConfigName } from "utils/functions"

export function AuthApolloProvider({ children }) {
  const { oidcUserLoadingState } = useOidcUser(getOidcConfigName())
  const { accessToken } = useOidcAccessToken(getOidcConfigName())

  useEffect(() => {
    setAccessToken(accessToken)
  }, [accessToken])

  if (oidcUserLoadingState === OidcUserStatus.Loading) {
    return <>auth loading</>
  }

  return <ApolloProvider client={getApolloClient()}>{children}</ApolloProvider>
}

AuthApolloProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default AuthApolloProvider