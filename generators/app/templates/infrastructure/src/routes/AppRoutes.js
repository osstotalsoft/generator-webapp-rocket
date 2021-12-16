/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Switch,  Redirect } from 'react-router-dom';

import CustomRoute from '../components/routing/CustomRoute';

import Dashboard from 'features/dashboard/Dashboard'
import SecuritySettings from 'features/settings/SecuritySettings'
import PrivacySettings from 'features/settings/PrivacySettings'
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
            <CustomRoute exact path="/settings/security" component={SecuritySettings} <%_ if (withRights) { _%> roles={[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>]} rights={[viewSettings]} <%_}_%>/>
            <CustomRoute exact path="/settings/privacy" component={PrivacySettings} <%_ if (withRights) { _%> roles={[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>]} rights={[viewSettings]} <%_}_%>/>
            <Redirect exact from="/" to="/dashboard" />
            <CustomRoute isPrivate={false} exact path="/forbidden" component={Forbidden} />
            <CustomRoute isPrivate={false} render={() => <NotFound title="PageNotFound"></NotFound>} />
        </Switch>
    )
};