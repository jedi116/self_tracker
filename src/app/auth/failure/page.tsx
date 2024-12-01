import {Box} from '@mui/material'
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";

export default function Failure() {
    return (
        <Box
            sx={{height: '90vh'}}
        >
            <Typography
                component="div"
                variant="h3"
                sx={{marginLeft: '25%'}}
            >
                You entered the wrong Passphrase
            </Typography>

            <Box
                sx={{
                    height: '80vh',
                }}
                display="flex"
                flexDirection="row"
                justifyContent={'space-evenly'}
            >
                <Image src={'/Disapointed_vegeta.png'} alt={'Disapointed vegeta'} width={540} height={805}/>
            </Box>
        </Box>
    );
}
