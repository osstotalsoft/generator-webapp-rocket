import { env } from "utils/env";
<%_ if (withMultiTenancy) { _%>
import { isNullOrWhitespace } from '../functions';
<%_}_%>

const root = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`
const AUTH = {
    CALLBACK: '/authentication/callback',
    SILENT_CALLBACK: '/authentication/silent_callback'
};

const getAuthenticationConfiguration = (<% if (withMultiTenancy) { %>tenant<%}%>) => {
    <%_ if (withMultiTenancy) { _%>
    const path = isNullOrWhitespace(tenant) ? "" : `/${tenant}` 
    <%_ } else { _%>
    const path = "" 
    <%_ } _%>
    return {
        client_id: env.REACT_APP_IDENTITY_CLIENT_ID,
        authority: env.REACT_APP_IDENTITY_AUTHORITY + path,
        redirect_uri: `${root}${AUTH.CALLBACK}`,
        silent_redirect_uri: `${root}${AUTH.SILENT_CALLBACK}`,
        response_type: 'code',
        scope: 'openid profile ' + env.REACT_APP_IDENTITY_SCOPE,
        post_logout_redirect_uri: `${root}`,
        automaticSilentRenew: true,
        loadUserInfo: true,
        triggerAuthFlow: true,
        revokeAccessTokenOnSignout: true,
        register_uri: `${env.REACT_APP_IDENTITY_AUTHORITY}/${env.REACT_APP_REGISTER_REDIRECT_URL}?returnUrl=${root}/register&clientId=${env.REACT_APP_IDENTITY_CLIENT_ID}`,
    }
}

export default getAuthenticationConfiguration;
