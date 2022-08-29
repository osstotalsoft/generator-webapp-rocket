/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Switch,  Redirect } from 'react-router-dom';

import CustomRoute from '../components/routing/CustomRoute';

import { Forbidden, NotFound } from '@totalsoft_oss/rocket-ui.core';
<%_if(addQuickStart){ _%>
import Dashboard from 'features/dashboard/Dashboard'
import SecuritySettings from 'features/settings/SecuritySettings'
import PrivacySettings from 'features/settings/PrivacySettings'
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
<%_ } _%>

export default function AppRoutes() {
    return (
        <Switch>
<%_if(addQuickStart){ _%>
            <CustomRoute isPrivate={false} exact path="/dashboard" component={Dashboard} />
            <CustomRoute exact path="/settings/security" component={SecuritySettings} <%_ if (withRights) { _%> roles={[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>]} rights={[viewSettings]} <%_}_%>/>
            <CustomRoute exact path="/settings/privacy" component={PrivacySettings} <%_ if (withRights) { _%> roles={[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>]} rights={[viewSettings]} <%_}_%>/>
            <Redirect exact from="/" to="/dashboard" />
<%_ } _%>
            <CustomRoute isPrivate={false} exact path="/forbidden" component={Forbidden} />
            <CustomRoute isPrivate={false} render={() => <NotFound title="PageNotFound"></NotFound>} />
        </Switch>
    )
};