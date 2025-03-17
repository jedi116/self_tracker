'use client';
import Image from 'next/image';
import React from 'react';
import Box from '@mui/material/Box';

const LoadingOverlay = () => {
    return (
        <Box
            sx={{
                position: 'fixed!important',
                top: '0!important',
                left: '0!important',
                width: '100%!important',
                height: '100%!important',
                backgroundColor: 'rgba(0, 0, 0, 0.5)!important',
                display: 'flex!important',
                justifyContent: 'center!important',
                alignItems: 'center!important',
                zIndex: '9999!important',
            }}
        >
            <Image
                src="/blue_goku_kamehameha.gif"
                alt="Loading..."
                width={800}
                height={800}
                priority
            />
        </Box>
    );
};

export default LoadingOverlay;