'use client';
import Image from 'next/image';
import React from 'react';
import Box from '@mui/material/Box';
import { styles } from './styles';

const LoadingOverlay = () => {
  return (
    <Box sx={styles.loading.overlay}>
      <Image src="/blue_goku_kamehameha.gif" alt="Loading..." width={800} height={800} priority />
    </Box>
  );
};

export default LoadingOverlay;
