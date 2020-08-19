import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
// import { translate } from 'react-i18next';

function NotFound({ ...props }) {
    const { title } = props;
    return (
        <Card>
            <React.Fragment>
                {title}
            </React.Fragment>
        </Card>
    )
}


NotFound.propTypes = {
    title: PropTypes.string
}

// export default translate()(NotFound);
export default NotFound;