import React, { useMemo } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { <% if (withRights) { %>useReactOidc, <% } %> withOidcSecure } from '@axa-fr/react-oidc-context';
<%_ if (withRights) { _%>
import { emptyArray } from "utils/constants";
import { isEmpty } from "ramda";
import { useUserData } from "hooks/rights";
import { LoadingFakeText, Forbidden } from '@totalsoft_oss/rocket-ui.core';
import { intersect } from "utils/functions";
<% } %>
function PrivateRoute({ component: Component, <% if (withRights) { %>roles, rights, <%}%>exact, path }) {
    const SecuredComponent = useMemo(() => withOidcSecure(Component), [Component]);

    <%_ if (withRights) { _%>
    const { oidcUser } = useReactOidc();
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
            return <LoadingFakeText lines={10} />
        }

        return <Route exact={exact} path={path} component={allow ? SecuredComponent : Forbidden} />}, [loading, exact, path, allow, SecuredComponent]);
    <%_ } else { _%>
    return useMemo(() => <Route exact={exact} path={path} component={SecuredComponent} />, [SecuredComponent, exact, path]);
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
    <%_ } _%>,
    exact: PropTypes.bool,
    path: PropTypes.string
};


import { makeStyles} from 'tss-react/mui'
import mainStyle from 'assets/jss/components/mainStyle'

const useStyles = makeStyles()(mainStyle)

function CustomRoute({ isPrivate, fullWidth, ...props }) {
  const { classes } = useStyles({ fullWidth })
  return <div className={classes.container}>{isPrivate ? <PrivateRoute {...props} /> : <Route {...props} />}</div>
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
  exact: PropTypes.bool,
  isPrivate: PropTypes.bool,
  fullWidth: PropTypes.bool,
  path: PropTypes.string
}

export default CustomRoute
