import React from "react"
import PropTypes from "prop-types"
import getAuthenticationConfiguration from 'utils/auth/authConfig';
import { AuthenticationProvider as DefaultProvider, oidcLog } from '@axa-fr/react-oidc-context';
import { Authenticating } from "components/login/Authenticating";
import { CallbackPage } from "components/login/CallbackPage";
import { NotAuthenticated } from "components/login/NotAuthenticated";
import { SessionExpired } from "components/login/SessionExpired";
import Forbidden from "components/common/Forbidden";

const AuthenticationProvider = props => {
    const { children } = props
    const configuration = getAuthenticationConfiguration()

    return <DefaultProvider
        configuration={configuration}
        loggerLevel={oidcLog.INFO}
        isEnabled={true}
        authenticating={Authenticating}
        callbackComponentOverride={CallbackPage}
        notAuthenticated={NotAuthenticated}
        sessionLostComponent={SessionExpired}
        notAuthorized={Forbidden}
    >
        {children}
    </DefaultProvider>
}

AuthenticationProvider.propTypes = { children: PropTypes.element.isRequired }

export default AuthenticationProvider