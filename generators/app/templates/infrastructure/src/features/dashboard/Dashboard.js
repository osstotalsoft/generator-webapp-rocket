import React, { Fragment } from 'react'
import { Typography, Grid } from '@mui/material'
import { useToast } from '@totalsoft_oss/rocket-ui.core';

function Dashboard() {
  const addToast = useToast();
  addToast("This is my toast", "success")
  return (
    <Fragment>
      <Typography>This is my dashboard...</Typography>
      <Grid>This can be seen by any logged in users.</Grid>
    </Fragment>
  )
}

export default Dashboard
