'use client'
import {Box} from '@mui/material'
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";

export default  function Home() {
    const [speech, setSpeech] = React.useState("");
    const [reset, setReset] = React.useState(0);
    const displaySpeech = () => {
        const content = 'Keep improving'.split("")

        content.forEach((data,index) => {
            setTimeout(() => {
                setSpeech(prevState => prevState + data)
                if ((content.length - 1) === index) {
                    setReset(p => p + 1)
                }
            }, 1800 * index)
        })
    }
    React.useEffect(() => {
        setSpeech("")
        displaySpeech()
    },[reset])

  return (
    <Box
        sx={{minHeight: '90vh', backgroundColor: 'rgb(33,33,57)'}}
        display="flex"
        flexDirection="column"
    >
      <Box
          sx={{
              height: '30vh',
              backgroundColor: 'rgb(33,33,57)', // 'rgb(15,15,39)' rgb(13,13,35)
          }}
          display="flex"
          flexDirection="row"
          justifyContent={'space-evenly'}
      >
        <Image src={'/blue_dark_glow_goku.png'} alt={'blue dark glowing goku'} width={440} height={305}/>
      </Box>
    <Box sx={{paddingLeft: '30%', paddingRight: '20%'}}>
        <Typography variant="h2" component="div">{speech}</Typography>
        <Typography variant="h5" component="div">
            Power comes in response to a need, not a desire.
            You have to create that need.
        </Typography>
    </Box>

    </Box>
  );
}
