/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CustomRoute from '../components/routing/CustomRoute';

import Dashboard from 'features/dashboard/Dashboard'
import Settings from 'features/settings/Settings'
import { Forbidden, NotFound } from '@bit/totalsoft_oss.react-mui.kit.core';
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
            <CustomRoute isPrivate={false} exact path="/dashboard" component={Dashboard} />
            <CustomRoute exact path="/settings" component={Settings} <%_ if (withRights) { _%> roles={[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>]} rights={[viewSettings]} <%_}_%>/>
            <Redirect exact from="/" to="/dashboard" />
            <CustomRoute isPrivate={false} exact path="/forbidden" component={Forbidden} />
            <CustomRoute isPrivate={false} render={() => <NotFound title="PageNotFound"></NotFound>} />
        </Switch>
    )
};