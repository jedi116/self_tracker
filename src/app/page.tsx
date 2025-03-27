'use client'
import {Box, Button, Grid2 } from '@mui/material'
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import {redirect} from "next/navigation";
import SuperSaiyan from '@/../public/Super_Saiyan_1.png'
import SuperSaiyan2 from '@/../public/Super_Saiyan_2.png'
import SuperSaiyan3 from '@/../public/Super_Saiyan_3.png'
import SuperSaiyan4 from '@/../public/Super_Saiyan_4.png'
import SuperSaiyanGod from '@/../public/Super_Saiyan_god.png'
import SuperSaiyanBlue from '@/../public/Goku-Super-Saiyan-Blue.png'
import MasteredUltraInstinct from '@/../public/mastered-ultra-instinct.png'
import PerfectedUltraInstinct from '@/../public/perfect-ultra-instinct.png'
import {motion, AnimatePresence} from "motion/react";
import {width} from "@mui/system";

const images = [
    SuperSaiyan,
    SuperSaiyan2,
    SuperSaiyan3,
    SuperSaiyan4,
    SuperSaiyanGod,
    SuperSaiyanBlue,
    MasteredUltraInstinct,
    PerfectedUltraInstinct
]


export default  function Home() {

    const [currentLevel, setCurrentLevel] = React.useState(0);
    const [isComplete, setIsComplete] = React.useState(false);

    // Example progression of items (could be characters, forms, etc.)
    const levelStages = [
        {
            id: 1,
            title: 'Super Sayian',
            imageUrl: SuperSaiyan
        },
        {
            id: 2,
            title: 'Super Sayian 2',
            imageUrl: SuperSaiyan2
        },
        {
            id: 3,
            title: 'Super Sayian 3',
            imageUrl: SuperSaiyan3
        },
        {
            id: 4,
            title: 'Super Sayian 4',
            imageUrl: SuperSaiyan4
        },
        {
            id: 5,
            title: 'Super Sayian God',
            imageUrl: SuperSaiyanGod
        },
        {
            id: 6,
            title: 'Super Sayian Blue',
            imageUrl: SuperSaiyanBlue
        },
        {
            id: 7,
            title: 'Super Sayian Mastered Ultra Instinct',
            imageUrl: MasteredUltraInstinct
        }
    ];

    React.useEffect(() => {
        // If not complete, continue leveling up
        if (!isComplete && currentLevel < levelStages.length - 1) {
            const timer = setTimeout(() => {
                setCurrentLevel(prev => prev + 1);
            }, 2500); // 1.5 seconds between each transformation

            // Reach final form and stop
            if (currentLevel === levelStages.length - 2) {
                setTimeout(() => setIsComplete(true), 2500);
            }

            return () => clearTimeout(timer);
        }
    }, [currentLevel, isComplete]);


    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        }
    };
  return (
      <Box
          sx={{minHeight: '90vh', backgroundColor: 'rgb(33,33,57)'}}
          display="flex"
          flexDirection="column"
      >
          <Box alignSelf='center'>
              <div className="shadow-dance-container">
                  <h1 className="shadow-dance-text">Kaizen</h1>
              </div>
          </Box>

         <Box maxWidth={240} maxHeight={405}>
             <AnimatePresence mode="wait">
                 <motion.div
                     key={levelStages[currentLevel].id}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 1.1 }}
                     transition={{
                         type: "spring",
                         stiffness: 300,
                         damping: 20
                     }}
                     style={{width: 200, height: 200}}
                 >
                     <Image
                         src={levelStages[currentLevel].imageUrl}
                         alt={levelStages[currentLevel].title}
                         width={240} height={405}
                         style={{
                             objectFit: 'contain', // or 'cover' depending on your preference
                         }}
                         sizes="(max-width: 240px) 200px, 240px"
                     />
                 </motion.div>
             </AnimatePresence>
         </Box>
          <Grid2 container spacing={1} sx={{paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%'}}>
              {images.map((image, index) => (
                  <motion.div whileHover={{scale: 1.2}} key={index}>
                      <Image key={index} src={image} alt={'super saiyan'} width={240} height={405}/>
                  </motion.div>
              ))}
          </Grid2>
          <Box sx={{paddingLeft: '35%', paddingRight: '20%'}}>

              <motion.div
                  animate={{
                      scale: 1.2,
                      transition: {duration: 5}
                  }}
              >
                  <Typography variant="h5" component="div">
                      Power comes in response to a need, not a desire.
                      You have to create that need.
                  </Typography>
                  <Button sx={{
                      backgroundColor: '#0AB5D2 !important',
                      color: 'white !important',
                      '&.MuiButton-root:hover': {backgroundColor: '#077d92 !important'},
                      borderRadius: '2px !important',
                      padding: '2px !important',
                      marginTop: '10px !important',
                  }}
                          onClick={() => redirect('/auth/signin')}
                  >
                      Get Started
                  </Button>
              </motion.div>

          </Box>
      </Box>
  );
}
/*
*
*  <Box
          sx={{
              height: '60vh',
              backgroundColor: 'rgb(33,33,57)', // 'rgb(15,15,39)' rgb(13,13,35)
          }}
          display="flex"
          flexDirection="row"
          justifyContent={'space-evenly'}
        >
        <Image src={'/blue_dark_glow_goku.png'} alt={'blue dark glowing goku'} width={540} height={405}/>
        </Box>*/