import {
    Box,
    Paper
} from '@mui/material'
import * as React from "react";
import Header from './header';
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {getAllGoals, getAllWorkouts, getAllWorkoutTypes} from "@/service/workout";
import WorkoutTabs from "@/app/workout/tabs";
import WorkoutGoal from "@/types/WorkoutGoal";
import {WorkoutProvider} from "@/context/workout"
import {WorkoutFormProvider} from "@/context/workout/form";
import {WorkoutTypes} from "@/types/WorkoutTypes";
import Workout from "@/types/Workout";
import {Effect} from "effect";



export default async function WorkoutPage() {
    const session = await auth()
    if (!session || !session.user) {
        redirect('/auth/signin')
    }
    const workouts: Workout[] = await Effect.runPromise(getAllWorkouts(session.user?.id))
    const goals: WorkoutGoal[] = await Effect.runPromise(getAllGoals(session.user?.id))
    const workoutTypes: Partial<WorkoutTypes> [] = await Effect.runPromise(getAllWorkoutTypes(session.user?.id))
    return (
        <Box
            sx={{height: '100vh', flexGrow: 1}}
        >
            <Paper sx={{
                marginLeft: '2%',
                marginTop:'2%',
                width: '95%',
                height: '100vh',
                flexGrow: 1,
            }}>
                <WorkoutProvider workouts={workouts} goals={goals} workoutTypes={workoutTypes}>
                    <WorkoutFormProvider>
                        <Header />
                        <WorkoutTabs />
                    </WorkoutFormProvider>
                </WorkoutProvider>
            </Paper>
        </Box>
    );
}
