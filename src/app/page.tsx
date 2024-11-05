import {Box} from '@mui/material'
import Typography from "@mui/material/Typography";
import {SignIn} from "@/components/auth/signin";

export default function Home() {
  return (
    <Box
        sx={{height: '90vh'}}
    >
      <Typography component="h1" variant="h5">Home</Typography>
      <SignIn />
    </Box>
  );
}
