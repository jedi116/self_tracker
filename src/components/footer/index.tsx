'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { footerStyles } from './styles';

export default function Footer() {
  return (
    <Box sx={footerStyles.container}>
      <Image src="/Kaizen.png" alt="Logo" width={40} height={40} style={footerStyles.logo} />
      <Typography variant="h5" component="div">
        Kaizen
      </Typography>
    </Box>
  );
}
