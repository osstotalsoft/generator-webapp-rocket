import { useMemo } from "react";
import PropTypes from "prop-types";
import { Container } from "./CustomRouteStyle";
import {  getOidcConfigName } from "utils/functions";
import { <% if (withRights) { %>useOidcUser, <% } %> withOidcSecure } from '@axa-fr/react-oidc';
import { useFooter, useHeader } from 'providers/AreasProvider'
<%_ if (withRights) { _%>
import { emptyArray } from "utils/constants";
import { isEmpty, defaultTo } from "ramda";
import { useUserData } from "hooks/rights";
import { FakeText, Forbidden } from '@totalsoft/rocket-ui';
import { intersect } from "utils/functions";
<% } %>

function PrivateRoute({ component: Component, <% if (withRights) { %>roles = emptyArray, rights = emptyArray <%}%> }) { 
    const SecuredComponent = useMemo(() => withOidcSecure(Component, undefined, undefined, getOidcConfigName()), [Component]);

    <%_ if (withRights) { _%>
    const { oidcUser } = useOidcUser(getOidcConfigName());
    const { userData, loading } = useUserData({ withRights: true });
    const userRoles = defaultTo(emptyArray, userData?.roles)
    const userRights = defaultTo(emptyArray, userData?.rights)

    let allow = false
    if (isEmpty(rights) && isEmpty(roles) && oidcUser) {
        allow = true
    } else {
        allow = isEmpty(rights)
            ? intersect(userRoles, roles) || !oidcUser
            : (intersect(userRights, rights) && (isEmpty(roles) || intersect(userRoles, roles))) || !oidcUser
    }

    return useMemo(() => {
        if (loading) {
            return <FakeText lines={10} />
        }

        return allow ? <SecuredComponent /> : <Forbidden />
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [loading, allow, SecuredComponent]);
    <%_ } else { _%>
    return <SecuredComponent />
    <%_ } _%>
}

PrivateRoute.propTypes = {
    component: PropTypes.func<% if (withRights) { %>,
    roles: PropTypes.array,
    rights: PropTypes.array
    <%_ } _%>
};

function CustomRoute({ isPrivate = true, component: Component, ...props }) {
    const [header] = useHeader()
    const [footer] = useFooter()
    return <Container  hasHeader={header} hasFooter={footer}>{isPrivate ? <PrivateRoute component={Component} {...props} /> : <Component />}</Container>
  }

CustomRoute.propTypes = {
  component: PropTypes.func,
  isPrivate: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default CustomRoute
