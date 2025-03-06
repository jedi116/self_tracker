import {
    Box,
    Paper
} from '@mui/material'
import * as React from "react";
import Header from './header';
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {getAllGoals, getAllPlans, getAllWorkouts} from "@/service/workout";
import WorkoutTabs from "@/app/workout/tabs";
import WorkoutPlan from "@/types/WorkoutPlan";
import WorkoutGoal from "@/types/WorkoutGoal";
import {WorkoutProvider} from "@/context/workout"
import {WorkoutFormProvider} from "@/context/workout/form";



export default async function Workout() {
    const session = await auth()
    if (!session) {
        redirect('/auth/signin')
    }
    const workouts = await getAllWorkouts(session.user?.id)
    const plans: WorkoutPlan[] = await getAllPlans(session.user?.id)
    const goals: WorkoutGoal[] = await getAllGoals(session.user?.id)
    return (
        <Box
            sx={{height: '90vh'}}
        >
            <Paper sx={{
                marginLeft: '2%',
                marginTop:'2%',
                minHeight: '85vh',
                width: '95%',
            }}>
                <WorkoutProvider workouts={workouts} plans={plans} goals={goals}>
                    <WorkoutFormProvider>
                        <Header />
                        <WorkoutTabs />
                    </WorkoutFormProvider>
                </WorkoutProvider>
            </Paper>
        </Box>
    );
}
