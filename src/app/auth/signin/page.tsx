import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getLatestPassPhrase } from '@/service/passphrase';
import { auth, signIn } from '@/auth';
import { redirect } from 'next/navigation';
import { authStyles } from '@/app/auth/styles';

export default async function SignIn() {
  const session = await auth();
  if (session) redirect('/');

  const signInFormHandler = async (payload: FormData) => {
    'use server';
    const passphrase = await getLatestPassPhrase();
    const formData = payload?.get('passphrase');
    if (passphrase === formData) await signIn();
    else redirect('/auth/failure');
  };
  return (
    <Box sx={authStyles.container}>
      <Paper sx={authStyles.paper}>
        <Typography sx={authStyles.title}>Enter passphrase to sign in</Typography>
        <form action={signInFormHandler} style={authStyles.form as any}>
          <TextField
            id="passphrase"
            label="passphrase"
            variant="outlined"
            sx={authStyles.textField}
            name="passphrase"
          />
          <Button type="submit" sx={authStyles.submitButton}>
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
