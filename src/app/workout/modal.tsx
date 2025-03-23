'use client'
import React, {useContext} from 'react'
import {Box, Paper} from "@mui/material";
import {WorkoutContext} from "@/context/workout";
import GoalsForm from "@/app/workout/goals/form";
import WorkoutsForm from "@/app/workout/workouts/form";


interface WorkoutModalProps {
    name: string
}

export default function WorkoutModal(props: WorkoutModalProps) {
    return (
        <Box>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: '10%',
                    marginLeft: '10%',
                    width: '80%'
                }}
            >
                {
                    props.name === "goal"
                            ? <GoalsForm />
                            : <WorkoutsForm/>
                }
            </Paper>
        </Box>
    )
}