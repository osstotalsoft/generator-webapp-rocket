import React, { Fragment } from 'react'
import { Typography, Grid } from '@mui/material'

function SecuritySettings() {
  return (
    <Fragment>
      <Typography>Here you can configure your security settings...</Typography>
      <Grid>Only certain users can see this page</Grid>
    </Fragment>
  )
}

export default SecuritySettings
