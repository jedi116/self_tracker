'use client'
import React, {useContext} from 'react'
import {Box, Paper} from "@mui/material";
import PlanForm from "@/app/workout/plans/form";
import {WorkoutContext} from "@/context/workout";
import GoalsForm from "@/app/workout/goals/form";


interface WorkoutModalProps {
    name: string
}

export default function WorkoutModal(props: WorkoutModalProps) {
    const context = useContext(WorkoutContext)
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
                        <PlanForm goals={context.goals}/>
                        : props.name === "goal"
                            ? <GoalsForm />
                            : <div>workouts</div>
                }
            </Paper>
        </Box>
    )
}