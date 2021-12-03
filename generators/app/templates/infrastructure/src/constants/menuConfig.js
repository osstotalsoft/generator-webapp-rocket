import React from 'react';
import Dashboard from '@material-ui/icons/Dashboard';
import Settings from '@material-ui/icons/Settings';
<%_ if (withRights) { _%>
import identityUserRoles from 'constants/identityUserRoles';
import permissions from 'constants/permissions';
<%_}_%>
<%_ if (withRights && withMultiTenancy) { _%>
const { globalAdmin, admin, user } = identityUserRoles;
const { viewSettings } = permissions;
<%_}_%>
<%_ if (withRights && !withMultiTenancy) { _%>
const { admin, user } = identityUserRoles;
const { viewSettings } = permissions;
<%_}_%>

const menuItems = [
    { icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' <%_ if (withRights) { _%>, roles:[], rights:[] <%_}_%>},
    {
        icon: <Settings />,
        text: 'NavBar.Settings',
        name: 'Settings',
        <%_ if (withRights) { _%>roles:[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>], 
        rights:[viewSettings], <%_}_%>
        children: [
          { icon: <Security />, text: 'NavBar.Security', path: '/security', name: 'Security' },
          {
            icon: <Lock />,
            text: 'NavBar.Privacy',
            path: '/privacy',
            name: 'Privacy'
          }
        ]
    }
]

export default menuItems