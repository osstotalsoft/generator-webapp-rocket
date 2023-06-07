/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {<% if (addQuickStart) { %> Navigate, <% } %> Route, Routes } from 'react-router-dom'
import CustomRoute from '../components/routing/CustomRoute';

import { Forbidden, NotFound } from '@totalsoft/rocket-ui';
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
    <Routes>
        <%_if(addQuickStart){ _%>
        <Route path='/dashboard' element={<CustomRoute isPrivate={false} component={Dashboard} />} />
        <Route path='/' element={<Navigate replace to='/dashboard' />} />
        <Route path='/settings/security' element={
            <CustomRoute component={SecuritySettings} 
            <%_ if (withRights) { _%> 
                roles={[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>]} 
                rights={[viewSettings]} 
            <%_}_%> 
            />} 
        />
        <Route path='/settings/privacy' element={
            <CustomRoute component={PrivacySettings} 
            <%_ if (withRights) { _%> 
                roles={[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>]} 
                rights={[]} 
            <%_}_%> 
            />} 
        />
        <%_ } _%>
        <Route path='/forbidden' element={<Forbidden />} />
        <Route path='*' element={<NotFound title='PageNotFound' />} />
      </Routes>
    )
};