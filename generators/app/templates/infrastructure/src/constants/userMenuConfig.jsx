<%_if(addQuickStart){ _%>
import PersonIcon from '@mui/icons-material/Person'

const userMenuItems = [
    { icon: <PersonIcon />, text: 'MyProfile', path: '/myProfile', name: 'MyProfile' <%_ if (withRights) { _%>, roles:[], rights:[] <%_}_%>}
]
<%_}else{_%>
const userMenuItems = []
<%_}_%>

export default userMenuItems