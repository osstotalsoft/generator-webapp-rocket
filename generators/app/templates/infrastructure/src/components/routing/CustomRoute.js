import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Container } from "./CustomRouteStyle";
import {  getOidcConfigName } from "utils/functions";
import { <% if (withRights) { %>useOidcUser, <% } %> withOidcSecure } from '@axa-fr/react-oidc';
<%_ if (withRights) { _%>
import { emptyArray } from "utils/constants";
import { isEmpty } from "ramda";
import { useUserData } from "hooks/rights";
import { FakeText, Forbidden } from '@totalsoft/rocket-ui';
import { intersect } from "utils/functions";
<% } %>

function PrivateRoute({ component: Component, <% if (withRights) { %>roles, rights, <%}%> }) { 
    const SecuredComponent = useMemo(() => withOidcSecure(Component, undefined, undefined, getOidcConfigName()), [Component]);

    <%_ if (withRights) { _%>
    const { oidcUser } = useOidcUser(getOidcConfigName());
    const userRoles = oidcUser?.profile?.role || emptyArray;
    const { userData, loading } = useUserData();
    const userRights = userData?.rights || emptyArray

    let allow = false
    if (isEmpty(rights) && isEmpty(roles) && oidcUser) {
        allow = true
    } else {
        allow = isEmpty(rights)
            ? intersect(userRoles, roles) || !oidcUser
            : (intersect(userRights, rights) && intersect(userRoles, roles)) || !oidcUser
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

<%_ if (withRights) { _%>
PrivateRoute.defaultProps = {
    roles: emptyArray,
    rights: emptyArray
};
<%_ } _%>

PrivateRoute.propTypes = {
    component: PropTypes.func<% if (withRights) { %>,
    roles: PropTypes.array,
    rights: PropTypes.array
    <%_ } _%>
};

function CustomRoute({ isPrivate, component: Component, ...props }) {
    return <Container>{isPrivate ? <PrivateRoute component={Component} {...props} /> : <Component />}</Container>
  }

CustomRoute.defaultProps = {
  <% if (withRights) { %>
  roles: emptyArray,
  rights: emptyArray,
  <%_ } _%>
  isPrivate: true,
  fullWidth: false
}

CustomRoute.propTypes = {
  component: PropTypes.func,
  <% if (withRights) { %>
  roles: PropTypes.array,
  rights: PropTypes.array,
  <%_ } _%>
  isPrivate: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default CustomRoute
