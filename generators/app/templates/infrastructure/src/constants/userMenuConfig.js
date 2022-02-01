<%_if(addQuickStart){ _%>
import React from 'react';
import Person from '@material-ui/icons/Person';

const userMenuItems = [
    { icon: <Person />, text: 'MyProfile', path: '/myProfile', name: 'MyProfile' <%_ if (withRights) { _%>, roles:[], rights:[] <%_}_%>}
]
<%_}else{_%>
const userMenuItems = []
<%_}_%>

export default userMenuItems