import React, { useMemo } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { <% if (withRights) { %>useReactOidc, <% } %> withOidcSecure } from '@axa-fr/react-oidc-context';
import { emptyArray } from "utils/constants";
<%_ if (withRights) { _%>
import Forbidden from "../common/Forbidden";
import { isEmpty } from "ramda";
import { useUserData } from "hooks/rights";
import { LoadingFakeText } from '@bit/totalsoft.react-mui.core';
import { intersect } from "utils/functions";
<% } %>
function PrivateRoute({ component: Component, <% if (withRights) { %>roles, rights, <%}%>...rest }) {
    const SecuredComponent = useMemo(() => withOidcSecure(Component), [Component]);

    <%_ if (withRights) { _%>
    const { oidcUser } = useReactOidc();
    const userRoles = oidcUser?.profile?.role || emptyArray;
    const { userData, loading } = useUserData();
    const userRights = userData?.rights || emptyArray

    if (loading) {
        return <LoadingFakeText lines={10} />
    }

    let allow = false
    if (isEmpty(rights) && isEmpty(roles) && oidcUser) {
        allow = true
    } else {
        allow = isEmpty(rights)
            ? intersect(userRoles, roles) || !oidcUser
            : (intersect(userRights, rights) && intersect(userRoles, roles)) || !oidcUser
    }
    
    return <Route {...rest} component={allow ? SecuredComponent : Forbidden} />;
    <%_ } else { _%>
    return <Route {...rest} component={SecuredComponent} />;
    <%_ } _%>
}

PrivateRoute.defaultProps = {
    roles: emptyArray,
    rights: emptyArray
};

PrivateRoute.propTypes = {
    component: PropTypes.func,
    roles: PropTypes.array,
    rights: PropTypes.array
};

export default PrivateRoute;
