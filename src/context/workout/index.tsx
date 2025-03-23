'use client'
import React, { createContext, useState, ReactNode } from 'react';
import WorkoutGoal from "@/types/WorkoutGoal"
import Workout from "@/types/Workout";
import {WorkoutTypes} from "@/types/WorkoutTypes";
import { Effect, pipe } from "effect"
import {getGoals, getWorkouts, getWorkoutTypes} from "@/context/workout/effects";

type WorkoutContextType = {
    createWorkoutModalOpen: boolean,
    createGoalModalOpen: boolean,
    updateWorkoutContext?:  React.Dispatch<React.SetStateAction<WorkoutContextType>>,
    goals: WorkoutGoal[],
    workouts: Workout[],
    workoutTypes: Partial<WorkoutTypes>[]
    refreshGoals?: () => void,
    refreshWorkouts?: () => void,
    refreshWorkoutTypes?: () => void
};

type WorkoutContextProviderProps = {
    children: ReactNode;
    goals: WorkoutGoal[],
    workouts: Workout[],
    workoutTypes: Partial<WorkoutTypes>[]
};

export const WorkoutContext = createContext<WorkoutContextType>({
    createWorkoutModalOpen: false,
    createGoalModalOpen: false,
    goals: [],
    workouts: [],
    workoutTypes: []
})

export const WorkoutProvider = ({
                                    children,
    goals,
    workouts,
    workoutTypes
}: WorkoutContextProviderProps) => {
    const [modalStates, setModalStates] = useState<WorkoutContextType>({
        createWorkoutModalOpen: false,
        createGoalModalOpen: false,
        goals,
        workouts : workouts.map((workout: Workout) => ({
            ...workout,
            name: workoutTypes.find(d => d.id === workout.name)?.name || '',
            date: new Date(workout.date).toISOString().split('T')[0]
        })),
        workoutTypes
    });


    const refreshGoals = async () => pipe(getGoals, Effect.match({
        onSuccess: (goals) => {
            setModalStates(prevState => ({
                ...prevState,
                goals,
            }))
        },
        onFailure: (error) => {
            console.error("Error refreshing goals:", error)
        }
    }), Effect.runPromise)

    const refreshWorkoutTypes =  () => pipe(getWorkoutTypes, Effect.match({
        onSuccess: (workoutTypes) => {
            setModalStates(prevState => ({
                ...prevState,
                workoutTypes,
            }))
        },
        onFailure: (error) => {
            console.error("Error refreshing workout types:", error)
        }
    }), Effect.runPromise)

    const refreshWorkouts =  () => pipe(getWorkouts, Effect.match({
        onSuccess: (workouts) => {
            setModalStates(prevState => ({
                ...prevState,
                workouts: workouts.map((workout: Workout) => ({
                    ...workout,
                    name: prevState.workoutTypes.find(d => d.id === workout.name)?.name || '',
                    date: new Date(workout.date).toISOString().split('T')[0]
                }))
            }))
        },
        onFailure: (error) => {
            console.error("Error refreshing workouts:", error)
        }
    }),Effect.runPromise)

    return (
        <WorkoutContext.Provider value={{
            ...modalStates,
            updateWorkoutContext: setModalStates,
            refreshGoals,
            refreshWorkoutTypes,
            refreshWorkouts
        }}>
            {children}
        </WorkoutContext.Provider>
    )
}