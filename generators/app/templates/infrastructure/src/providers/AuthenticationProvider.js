import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import getAuthenticationConfiguration from 'utils/auth/authConfig'
import { AuthenticationProvider as DefaultProvider, getUserManager, oidcLog, useReactOidc } from '@axa-fr/react-oidc-context'
import { Authenticating } from 'components/login/Authenticating'
import { CallbackPage } from 'components/login/CallbackPage'
import { NotAuthenticated } from 'components/login/NotAuthenticated'
import { SessionExpired } from 'components/login/SessionExpired'
import { Forbidden } from '@bit/totalsoft_oss.react-mui.kit.core'

const AuthenticationProvider = props => {
  const { children } = props
  const configuration = getAuthenticationConfiguration()

  return (
    <DefaultProvider
      configuration={configuration}
      loggerLevel={oidcLog.DEBUG}
      isEnabled={true}
      authenticating={Authenticating}
      callbackComponentOverride={CallbackPage}
      notAuthenticated={NotAuthenticated}
      sessionLostComponent={SessionExpired}
      notAuthorized={Forbidden}
    >
      <Reader>{children}</Reader>
    </DefaultProvider>
  )
}

AuthenticationProvider.propTypes = { children: PropTypes.element.isRequired }

const userSignedOut = async () => {
  const userManager = getUserManager()
  await userManager.removeUser()
  await userManager.signinRedirect()
}

const Reader = props => {
  const { children } = props
  const { events } = useReactOidc()

  useEffect(() => {
    if (!events) {
      return
    }

    events.addUserSignedOut(userSignedOut)
    return () => {
      events.removeUserSignedOut(userSignedOut)
    }
  }, [events])

  return children
}
Reader.propTypes = { children: PropTypes.element.isRequired }

export default AuthenticationProvider
