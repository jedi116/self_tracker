'use client'
import React, { createContext, useState, ReactNode } from 'react';
import WorkoutPlan from "@/types/WorkoutPlan";
import WorkoutGoal from "@/types/WorkoutGoal"
import Workout from "@/types/Workout";
import {WorkoutTypes} from "@/types/WorkoutTypes";

type WorkoutContextType = {
    createWorkoutModalOpen: boolean,
    createGoalModalOpen: boolean,
    createPlanModalOpen: boolean,
    updateWorkoutContext?:  React.Dispatch<React.SetStateAction<WorkoutContextType>>,
    goals: WorkoutGoal[],
    plans: WorkoutPlan[],
    workouts: Workout[],
    workoutTypes: Partial<WorkoutTypes>[]
    refreshPlans?: () => void,
    refreshGoals?: () => void,
    refreshWorkouts?: () => void,
    refreshWorkoutTypes?: () => void
};

type WorkoutContextProviderProps = {
    children: ReactNode;
    goals: WorkoutGoal[],
    plans: WorkoutPlan[],
    workouts: Workout[],
    workoutTypes: Partial<WorkoutTypes>[]
};

export const WorkoutContext = createContext<WorkoutContextType>({
    createWorkoutModalOpen: false,
    createGoalModalOpen: false,
    createPlanModalOpen: false,
    goals: [],
    plans: [],
    workouts: [],
    workoutTypes: []
})

export const WorkoutProvider = ({
                                    children,
    goals,
    plans,
    workouts,
    workoutTypes
}: WorkoutContextProviderProps) => {
    const [modalStates, setModalStates] = useState<WorkoutContextType>({
        createWorkoutModalOpen: false,
        createGoalModalOpen: false,
        createPlanModalOpen: false,
        goals,
        plans,
        workouts : workouts.map((workout: Workout) => ({
            ...workout,
            name: workoutTypes.find(d => d.id === workout.name)?.name || '',
            date: new Date(workout.date).toISOString().split('T')[0]
        })),
        workoutTypes
    });

    const refreshPlans = async () => {
        try {
            const response = await fetch("/api/workout/plan")
            const plans = await response.json() as WorkoutPlan[]
            setModalStates((prevState) => ({
                ...prevState,
                plans
            }))
        } catch (error: any) {
            console.error("Error refreshing plans", error)
        }
    }

    const refreshGoals = async () => {
        try {
            const response = await fetch("/api/workout/goals")
            const goals = await response.json() as WorkoutGoal[]
            setModalStates((prevState) => ({
                ...prevState,
                goals
            }))
        } catch (error: any) {
            console.error("Error refreshing goals", error)
        }
    }
    const refreshWorkoutTypes = async () => {
        try {
            const response = await fetch("/api/workout/types")
            const workoutTypes = await response.json() as WorkoutTypes[]
            setModalStates((prevState) => ({
                ...prevState,
                workoutTypes
            }))
        } catch (error: any) {
            console.error("Error refreshing workout types", error)
        }
    }
    const refreshWorkouts = async () => {
        try {
            const response = await fetch("/api/workout/workouts")
            const workouts = await response.json() as Workout[]
            setModalStates((prevState) => ({
                ...prevState,
                workouts: workouts.map((workout: Workout) => ({
                    ...workout,
                    name: prevState.workoutTypes.find(d => d.id === workout.name)?.name || '',
                    date: new Date(workout.date).toISOString().split('T')[0]
                }))
            }))
        } catch (error: any) {
            console.error("Error refreshing workouts", error)
        }
    }

    return (
        <WorkoutContext.Provider value={{
            ...modalStates,
            updateWorkoutContext: setModalStates,
            refreshPlans,
            refreshGoals,
            refreshWorkoutTypes,
            refreshWorkouts
        }}>
            {children}
        </WorkoutContext.Provider>
    )
}