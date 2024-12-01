'use client'
import {Box, Button } from '@mui/material'
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import {redirect} from "next/navigation";

export default  function Home() {
  return (
    <Box
        sx={{minHeight: '90vh', backgroundColor: 'rgb(33,33,57)'}}
        display="flex"
        flexDirection="column"
    >
        <Box
          sx={{
              height: '60vh',
              backgroundColor: 'rgb(33,33,57)', // 'rgb(15,15,39)' rgb(13,13,35)
          }}
          display="flex"
          flexDirection="row"
          justifyContent={'space-evenly'}
        >
        <Image src={'/blue_dark_glow_goku.png'} alt={'blue dark glowing goku'} width={540} height={405}/>
        </Box>
        <Box sx={{paddingLeft: '35%', paddingRight: '20%'}}>
            <Typography variant="h5" component="div">
                Power comes in response to a need, not a desire.
                You have to create that need.
            </Typography>
            <Button sx={{
                    backgroundColor: '#0AB5D2 !important',
                    color: 'white !important',
                    '&.MuiButton-root:hover': { backgroundColor: '#077d92 !important' },
                    borderRadius: '2px !important',
                    padding: '2px !important',
                    marginTop: '10px !important',
                }}
                onClick={() => redirect('/auth/signin')}
            >
                Get Started
            </Button>
        </Box>
    </Box>
  );
}
