'use client'
import React from 'react'
import {Box, Typography, Paper} from "@mui/material";
import PlanForm from "@/app/workout/forms/plans";


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
                    props.name === "plan" ?
                        <PlanForm/>
                        : props.name === "goal"
                            ? <div>goal</div>
                            : <div>workouts</div>
                }
            </Paper>
        </Box>
    )
}