import { Typography, Grid } from '@mui/material'
import { useToast } from '@totalsoft/rocket-ui';

function Dashboard() {
  const addToast = useToast();
  addToast("This is my toast", "success")
  return (
    <>
      <Typography>This is my dashboard...</Typography>
      <Grid>This can be seen by any logged in users.</Grid>
    </>
  )
}

export default Dashboard
