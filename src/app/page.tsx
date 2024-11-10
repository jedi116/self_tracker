import {Box} from '@mui/material'
import Typography from "@mui/material/Typography";
import {auth} from '@/auth'

export default async  function Home() {
  const session = await auth()
  if (!session) {
    return <div>Not authenticated</div>
  }
  return (
    <Box
        sx={{height: '90vh'}}
    >
      <Typography component="h1" variant="h5">Home</Typography>
    </Box>
  );
}
