'use client'
import * as React from "react";
import {Box, Button, ButtonGroup, Modal, Typography} from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AddTaskIcon from "@mui/icons-material/AddTask";
import WorkoutModal from "@/app/workout/modal";
import {useHeader} from "@/app/workout/hooks/header.hook";

const headerTextStyle = {
    marginLeft: '20%',
    paddingTop: { xs: "10%", sm: "5%", md: "5%", lg: "5%" },
    fontSize: { xs: "1rem", sm: "3rem", md: "5rem", lg: "8rem" },
}
const headerButtonStyle = {
    fontSize: { xs: "0.5rem !important", sm: "1rem !important", md: "1.5rem !important", lg: '1.5rem !important' }, // Adjust font size
    padding: { xs: "6px 12px", sm: "8px 16px", md: "12px 20px" }, // Adjust padding
    minWidth: { xs: "30px", sm: "50px", md: "70px" },
    marginRight: '2% !important'
}
export default function  Header () {
    const {
        openModal,
        getModalName,
        closeModal,
        modalOpen
    } = useHeader()
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" }, // Adjust width per device
            margin: "auto",
            borderRadius: 2,
        }}>
            <Typography
                component="div"
                variant="h1"
                sx={headerTextStyle}
            >
                Workout
            </Typography>
            <Image src={'/powering_up_goku.png'} alt={'powering up goku'} width={80} height={80}/>
            <ButtonGroup size="large" aria-label="Large button group">
                <Button sx={headerButtonStyle} onClick={() => openModal("create workout goal")}> <AddTaskIcon/>  create workout goal</Button>
                <Button sx={headerButtonStyle} onClick={() => openModal("add workout")}> <AddIcon/> add workout </Button>
            </ButtonGroup>
            <Modal
                open={modalOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <WorkoutModal name={getModalName()} />
            </Modal>
        </Box>
    )
}