/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../components/routing/PrivateRoute';

import Dashboard from 'features/dashboard/Dashboard'
import Settings from 'features/settings/Settings'
import { Forbidden, NotFound } from '@bit/totalsoft.react-mui.core';
<%_ if (withRights) { _%>
import identityUserRoles from 'constants/identityUserRoles';
import permissions from 'constants/permissions';
<%_}_%>
<%_ if (withRights && withMultiTenancy) { _%>
const { globalAdmin, admin, user } = identityUserRoles;
const { viewSettings } = permissions;
<%_ } _%>
<%_ if (withRights && !withMultiTenancy) { _%>
const { admin, user } = identityUserRoles;
const { viewSettings } = permissions;
<%_ } _%>

export default function AppRoutes() {
    return (
        <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} <%_ if (withRights) { _%> roles={[]} rights={[]} <%_}_%>/>
            <PrivateRoute exact path="/settings" component={Settings} <%_ if (withRights) { _%> roles={[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>]} rights={[viewSettings]} <%_}_%>/>
            <Redirect exact from="/" to="/dashboard" />
            <Route exact path="/forbidden" component={Forbidden} />
            <Route render={() => <NotFound title="PageNotFound"></NotFound>} />
        </Switch>
    )
};