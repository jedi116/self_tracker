import {Box} from '@mui/material'
import Typography from "@mui/material/Typography";
import {SignIn} from "@/components/auth/signin";
import {SignOut} from "@/components/auth/signout";
import {auth, signOut} from '@/auth'

export default async  function Home() {
  const session = await auth()
  if (!session) {
    return <div>Not authenticated <SignIn /></div>
  }
  return (
    <Box
        sx={{height: '90vh'}}
    >
      <Typography component="h1" variant="h5">Home</Typography>
      <SignIn />
      <SignOut />
      {session.user?.name}
    </Box>
  );
}
