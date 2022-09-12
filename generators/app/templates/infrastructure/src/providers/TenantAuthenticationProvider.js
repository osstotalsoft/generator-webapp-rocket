import React, { createContext, useContext, useEffect, useCallback } from "react"
import PropTypes from "prop-types"
import getAuthenticationConfiguration from 'utils/auth/authConfig';
import { AuthenticationProvider, oidcLog, useReactOidc, getUserManager } from '@axa-fr/react-oidc-context';
import { setUserManager } from "@axa-fr/react-oidc-core/dist/services/authenticationService"
import { Authenticating } from "components/login/Authenticating";
import { CallbackPage } from "components/login/CallbackPage";
import { NotAuthenticated } from "components/login/NotAuthenticated";
import { SessionExpired } from "components/login/SessionExpired";
import { Forbidden } from '@totalsoft_oss/rocket-ui.core';
import { useSessionStorage } from "hooks/sessionStorage";

export const TenantContext = createContext()
const TenantAuthenticationProvider = props => {
    const { children } = props
    const [tenant, setTenant] = useSessionStorage("tid")

    const setTenantCallback = useCallback(async (e) => {
        if ((!e && !tenant) ||
            (`${e}`.toUpperCase() === `${tenant}`.toUpperCase())) {
            return
        }

        const userManager = getUserManager()
        await userManager.removeUser()

        setUserManager(null)
        setTenant(e)
    }, [setTenant, tenant])

    const configuration = getAuthenticationConfiguration(tenant)

    return <TenantContext.Provider value={setTenantCallback}>
        <AuthenticationProvider
            configuration={configuration}
            loggerLevel={oidcLog.INFO}
            isEnabled={true}
            authenticating={Authenticating}
            callbackComponentOverride={CallbackPage}
            notAuthenticated={NotAuthenticated}
            sessionLostComponent={SessionExpired}
            notAuthorized={Forbidden}
        >
            <TenantReader>
                {children}
            </TenantReader>
        </AuthenticationProvider>
    </TenantContext.Provider>
}

TenantAuthenticationProvider.propTypes = { children: PropTypes.element.isRequired }

const userSignedOut = callback => async () => {
    const userManager = getUserManager()
    await userManager.removeUser()
    callback()
}

const TenantReader = props => {
    const { children } = props

    const setTenant = useContext(TenantContext)
    const { events } = useReactOidc();

    useEffect(() => {
        if (!events) {
            return
        }

        const onUserSignedOut = userSignedOut(setTenant)
        events.addUserSignedOut(onUserSignedOut);
        return () => {
            events.removeUserSignedOut(onUserSignedOut);
        };
    }, [events, setTenant])

    return children
}
TenantReader.propTypes = { children: PropTypes.element.isRequired }

export default TenantAuthenticationProvider