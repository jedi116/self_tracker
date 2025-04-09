import { Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

type props = {
  name: string;
  image: StaticImageData;
};
export default function HeroSection({ name, image }: props) {
  return (
    <Box
      sx={{ height: '100vh', width: '100%' }}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image src={image} alt={name} width={240} height={405} />
      <div className="shadow-dance-container">
        <h1 className="shadow-dance-text">{name}</h1>
      </div>
    </Box>
  );
}
