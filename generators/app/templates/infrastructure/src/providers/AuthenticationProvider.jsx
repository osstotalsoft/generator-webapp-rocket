import PropTypes from 'prop-types'
import getAuthenticationConfiguration from 'utils/auth/authConfig'
import { OidcProvider } from '@axa-fr/react-oidc'
import { Authenticating } from 'components/login/Authenticating'
import { CallbackPage } from 'components/login/CallbackPage'
import { NotAuthenticated } from 'components/login/NotAuthenticated'
import { SessionExpired } from 'components/login/SessionExpired'
import { Forbidden } from '@totalsoft/rocket-ui'
import { getOidcConfigName } from "utils/functions"

const AuthenticationProvider = props => {
  const { children } = props
  const configuration = getAuthenticationConfiguration()
  const configName = getOidcConfigName()

  return (
    <OidcProvider
      configuration={configuration}
      configurationName={configName}
      authenticatingComponent={Authenticating}
      callbackSuccessComponent={CallbackPage}
      loadingComponent={NotAuthenticated}
      sessionLostComponent={SessionExpired}
      authenticatingErrorComponent={Forbidden}
    >
      {children}
    </OidcProvider>
  )
}

AuthenticationProvider.propTypes = { children: PropTypes.element.isRequired }

export default AuthenticationProvider