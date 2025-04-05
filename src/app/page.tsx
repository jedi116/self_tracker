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
import {motion, AnimatePresence, useAnimation, AnimationControls, useScroll} from "motion/react";
import HeroSection from "@/app/landing/heroSection";
import {useEffect, useRef} from "react";

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
   const levelStages = [
        {
            id: 1,
            title: 'Super Sayian',
            imageUrl: SuperSaiyan,
        },
        {
            id: 2,
            title: 'Super Sayian 2',
            imageUrl: SuperSaiyan2,
            
        },
        {
            id: 3,
            title: 'Super Sayian 3',
            imageUrl: SuperSaiyan3,
            
        },
        {
            id: 4,
            title: 'Super Sayian 4',
            imageUrl: SuperSaiyan4,
            
        },
        {
            id: 5,
            title: 'Super Sayian God',
            imageUrl: SuperSaiyanGod,
            
        },
        {
            id: 6,
            title: 'Super Sayian Blue',
            imageUrl: SuperSaiyanBlue,
            
        },
        {
            id: 7,
            title: 'Super Sayian Mastered Ultra Instinct',
            imageUrl: MasteredUltraInstinct,
            
        }
    ];


    const { scrollYProgress } = useScroll()
  return (
      <Box
          display="flex"
          flexDirection="column"
          // overflow='scroll'
      >
          <motion.div
              id="scroll-indicator"
              style={{
                  scaleX: scrollYProgress,
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 10,
                  originX: 0,
                  backgroundColor: "#ff0088",
              }}
          />

              {levelStages.map((component) => {
                  return (
                      <motion.div
                          initial={{ opacity: 0, y: 50, transition: { duration: 0.8 } }}
                          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                          exit={{ opacity: 0 }}
                          key={component.id}
                      >
                          <HeroSection  name={component.title} image={component.imageUrl}/>

                      </motion.div>
                  )
              })}


          <Box maxWidth={240} maxHeight={405}>
              <AnimatePresence mode="wait">
                  <motion.div
                      key={levelStages[currentLevel].id}
                      initial={{opacity: 0, scale: 0.9}}
                      animate={{opacity: 1, scale: 1}}
                      exit={{opacity: 0, scale: 1.1}}
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
                  whileHover={{scale: 1.2}}
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