'use client'
import * as React from "react";
import {Box, Button, ButtonGroup, Modal, Typography} from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AddTaskIcon from "@mui/icons-material/AddTask";
import WorkoutModal from "@/app/workout/modal";
import {useHeader} from "@/app/workout/hooks/header.hook";

export default function  Header () {
    const {
        openModal,
        getModalName,
        closeModal,
        modalOpen
    } = useHeader()
    return (
        <Box sx={{display: 'flex', flexDirection: 'row',}}>
            <Typography
                component="div"
                variant="h1"
                sx={{marginLeft: '20%'}}
            >
                Workout
            </Typography>
            <Image src={'/powering_up_goku.png'} alt={'powering up goku'} width={80} height={80}/>
            <ButtonGroup size="large" aria-label="Large button group">
                <Button sx={{marginRight: '2% !important'}} onClick={() => openModal("create workout plan")}> <AddToPhotosIcon/> create workout plan</Button>
                <Button sx={{marginRight: '2% !important'}} onClick={() => openModal("create workout goal")}> <AddTaskIcon/>  create workout goal</Button>
                <Button sx={{marginRight: '2% !important'}} onClick={() => openModal("add workout")}> <AddIcon/> add workout </Button>
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