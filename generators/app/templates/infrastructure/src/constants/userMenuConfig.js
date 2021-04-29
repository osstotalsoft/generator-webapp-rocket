import React from 'react';
import Person from '@material-ui/icons/Person';

const userMenuItems = [
    { icon: <Person />, text: 'MyProfile', path: '/myProfile', name: 'MyProfile' <%_ if (withRights) { _%>, roles:[], rights:[] <%_}_%>}
]

export default userMenuItems