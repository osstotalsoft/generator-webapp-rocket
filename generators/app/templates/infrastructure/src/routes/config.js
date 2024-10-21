import React from 'react'
import { Navigate } from 'react-router-dom'
import CustomRoute from 'components/routing/CustomRoute'

import { Forbidden, NotFound } from '@totalsoft/rocket-ui'

<%_if(addQuickStart){ _%>
  import Dashboard from 'features/dashboard/Dashboard'
  import SecuritySettings from 'features/settings/SecuritySettings'
  import PrivacySettings from 'features/settings/PrivacySettings'

  <%_ if (withRights) { _%>
  import roles from 'constants/identityUserRoles'
  const { admin, user } = roles
  import permissions from 'constants/permissions'
  const { viewSettings } = permissions
  <%_ } _%>
<%_ } _%>


const routes = [
  <%_if(addQuickStart){ _%>
  { path: '/dashboard', element: <CustomRoute component={Dashboard} /> },
  { path: '/', element: <Navigate replace to='/dashboard' /> },
  { path: '/settings/security', element: <CustomRoute component={SecuritySettings} <%_ if (withRights) { _%> roles={[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>]} rights={[viewSettings]} <%_}_%>  /> },
  { path: '/settings/privacy', element: <CustomRoute component={PrivacySettings} <%_ if (withRights) { _%> roles={[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>]} rights={[]} <%_}_%>  /> },
  <%_ } _%>
  { path: '/forbidden', element: <Forbidden /> },
  { path: '*', element: <NotFound title='PageNotFound' /> }
]

export default routes
