import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';
import { authStyles } from '@/app/auth/styles';

export default function Failure() {
  return (
    <Box sx={authStyles.container}>
      <Typography sx={authStyles.title}>You entered the wrong Passphrase</Typography>

      <Box sx={authStyles.failureImage}>
        <Image
          src={'/Disapointed_vegeta.png'}
          alt={'Disapointed vegeta'}
          width={540}
          height={805}
        />
      </Box>
    </Box>
  );
}
