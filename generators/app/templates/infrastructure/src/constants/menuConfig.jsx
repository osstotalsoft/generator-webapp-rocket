<%_if(addQuickStart){ _%>
  import DashboardIcon from '@mui/icons-material/Dashboard'
  import SettingsIcon from '@mui/icons-material/Settings'
  import SecurityIcon from '@mui/icons-material/Security'
  import LockIcon from '@mui/icons-material/Lock'
  <%_ if (withRights) { _%>
  import identityUserRoles from 'constants/identityUserRoles'
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
  { icon: <DashboardIcon />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' <%_ if (withRights) { _%>, roles:[], rights:[] <%_}_%>},
    {
        icon: <SettingsIcon />,
        text: 'NavBar.Settings',
        name: 'Settings',
        <%_ if (withRights) { _%>roles:[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>], 
        rights:[viewSettings], <%_}_%>
        children: [
          { icon: <SecurityIcon />, text: 'NavBar.Security', path: '/settings/security', name: 'Security'
            <%_ if (withRights) { _%>,roles:[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>], 
            rights:[viewSettings], <%_}_%>
           },
          {
            icon: <LockIcon />,
            text: 'NavBar.Privacy',
            path: '/settings/privacy',
            name: 'Privacy'
            <%_ if (withRights) { _%>,roles:[admin, user<%_ if (withRights && withMultiTenancy) { _%>, globalAdmin<%}%>], 
            rights:[viewSettings], <%_}_%>
          }
        ]
    }
]
<%_}else{_%>
const menuItems = []
<%_}_%>

export default menuItems