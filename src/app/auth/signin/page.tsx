import {Box} from '@mui/material'
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {getLatestPassPhrase} from "@/service/passphrase";
import {auth, signIn} from "@/auth";
import {redirect} from "next/navigation";

export default async function SignIn() {
    const session = await auth()
    if (session) redirect('/')

    const signInFormHandler = async (payload: FormData) => {
        'use server'
        const passphrase = await getLatestPassPhrase();
        const formData = payload?.get('passphrase')
        if (passphrase === formData) await signIn()
        else redirect('/auth/failure')
    }
    return (
        <Box
            sx={{height: '90vh'}}
        >
            <Paper sx={{
                marginLeft: '25%',
                marginTop:'5%',
                minHeight: '40vh',
                width: '50%'
            }}>
                <Typography
                    component="div"
                    variant="h3"
                    sx={{marginLeft: '25%'}}
                >
                    Enter passphrase to sign in
                </Typography>
                <form action={signInFormHandler} style={{
                    marginTop: '5%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between !important'
                }}>
                    <TextField
                        id="passphrase"
                        label="passphrase"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'lightblue', // Background color
                                color: 'black', // Text color for the input
                                '& input': {
                                    color: 'black', // Ensure text color applies
                                },
                                '&.Mui-focused': {
                                    backgroundColor: '#9fe7d6', // Background color on focus
                                    color: 'black', // Text color on focus
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white', // Label color
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'white', // Label color when focused
                            },
                            width: '50%', marginLeft: '30%'
                        }}
                        name='passphrase'
                    />
                    <Button
                        type='submit'
                        sx={{
                            marginTop: '10px !important',
                            marginLeft: '35% !important',
                            backgroundColor: '#0AB5D2 !important',
                            color: 'white !important',
                            '&.MuiButton-root:hover': { backgroundColor: '#077d92 !important' },
                            borderRadius: '2px !important',
                            padding: '2px !important',
                            width: '40% !important'
                        }}
                    >
                        Submit
                    </Button>
                </form>
            </Paper>

        </Box>
    );
}
