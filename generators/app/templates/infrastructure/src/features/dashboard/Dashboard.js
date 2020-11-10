import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core';

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
