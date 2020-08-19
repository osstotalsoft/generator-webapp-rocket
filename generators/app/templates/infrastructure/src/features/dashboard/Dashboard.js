import React, { Fragment } from 'react';
import { Typography, Grid } from '@material-ui/core';

function Dashboard() {
    return (
        <Fragment>
            <Typography>This is my dashboard...</Typography>
            <Grid>This can be seen by any logged in users.</Grid>
        </Fragment>
    );
}

export default Dashboard;