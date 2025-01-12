'use client'
import * as React from "react";
import {Box, Button, ButtonGroup, Modal, Typography} from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AddTaskIcon from "@mui/icons-material/AddTask";
import {WorkoutContext} from "@/context/workout";
import {useCallback, useContext} from "react";
import WorkoutModal from "@/app/workout/modal";

export default function  header () {
    const context = useContext(WorkoutContext)
    const openModal = (modalName: string) => {
        if (context.updateModalState) {
            switch (modalName) {
                case "add workout":
                    context.updateModalState((prevState) => ({
                        ...prevState,
                        createWorkoutModalOpen: true
                    }))
                    break
                case "create workout plan":
                    context.updateModalState((prevState) => ({
                        ...prevState,
                        createPlanModalOpen: true
                    }))
                    break
                case "create workout goal":
                    context.updateModalState((prevState) => ({
                        ...prevState,
                        createGoalModalOpen: true
                    }))
                    break
                default:
                    break
            }
        }
    }
    const getModalName = useCallback(() => {
        if (context.createPlanModalOpen) {
            return 'plan'
        }
        if (context.createGoalModalOpen) {
            return 'goal'
        }
        if (context.createWorkoutModalOpen) {
            return 'workout'
        }
        return ''
    }, [context])
    const closeModal = () => {
        if (context.updateModalState) {
            context.updateModalState((prevState) => ({
                createWorkoutModalOpen: false,
                createGoalModalOpen: false,
                createPlanModalOpen: false,
            }))
        }
    }
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
                <Button sx={{marginRight: '2% !important'}} onClick={() => openModal("add workout")}> <AddIcon/> add workout </Button>
                <Button sx={{marginRight: '2% !important'}} onClick={() => openModal("create workout plan")}> <AddToPhotosIcon/> create workout plan</Button>
                <Button sx={{marginRight: '2% !important'}} onClick={() => openModal("create workout goal")}> <AddTaskIcon/>  create workout goal</Button>
            </ButtonGroup>
            <Modal
                open={context.createWorkoutModalOpen || context.createPlanModalOpen || context.createGoalModalOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <WorkoutModal name={getModalName()} />
            </Modal>
        </Box>
    )
}