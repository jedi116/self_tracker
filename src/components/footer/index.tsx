'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Image from "next/image";


export default function Footer() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            gap={2}
            sx={{ width: '100%', backgroundColor: '#012721', color: 'white' }}

        >
            <Image
                src="/Kaizen.png"
                alt="Logo"
                width={40}
                height={40}
                style={{ marginRight: 16 }}
            />
            <Typography variant="h6">Kaizen</Typography>
        </Box>
    )
}