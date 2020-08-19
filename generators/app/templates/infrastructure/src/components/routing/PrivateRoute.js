import React, { useMemo } from "react";
import { Route } from "react-router-dom";
import Forbidden from "../common/Forbidden";
import PropTypes from "prop-types";
import { useReactOidc, withOidcSecure } from '@axa-fr/react-oidc-context';
import { emptyArray } from "utils/constants";
<%_ if (withRights) { _%>
import { isEmpty } from "ramda";
import { useUserData } from "hooks/rights";
import LoadingFakeText from "components/common/fakeText/LoadingFakeText";
import { intersect } from "utils/functions";
<% } %>
function PrivateRoute({ component: Component, <% if (withRights) { %>roles, rights, <%}%>...rest }) {
    const { oidcUser } = useReactOidc();
    
    const SecuredComponent = useMemo(() => withOidcSecure(Component), [Component]);
    <%_ if (withRights) { _%>
    const userRoles = oidcUser?.profile?.role || emptyArray;
    const { userData, loading } = useUserData();
    const userRights = userData?.rights || emptyArray

    if (loading) {
        return <LoadingFakeText lines={10} />
    }<% } %>
    <%_ if (withRights) { _%>
    const allow = isEmpty(rights)
            ? intersect(userRoles, roles) || oidcUser
            : (intersect(userRights, rights) && intersect(userRoles, roles)) || oidcUser <% } %>
    <% if (!withRights) { %>const allow = oidcUser <% } %>
    return <Route {...rest} component={allow ? SecuredComponent : Forbidden} />;
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
