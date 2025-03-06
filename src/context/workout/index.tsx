'use client'
import React, { createContext, useState, ReactNode } from 'react';
import WorkoutPlan from "@/types/WorkoutPlan";
import WorkoutGoal from "@/types/WorkoutGoal"
import Workout from "@/types/Workout";

type WorkoutContextType = {
    createWorkoutModalOpen: boolean,
    createGoalModalOpen: boolean,
    createPlanModalOpen: boolean,
    updateWorkoutContext?:  React.Dispatch<React.SetStateAction<WorkoutContextType>>,
    goals: WorkoutGoal[],
    plans: WorkoutPlan[],
    workouts: Workout[],
    refreshPlans?: () => void,
    refreshGoals?: () => void
};

type WorkoutContextProviderProps = {
    children: ReactNode;
    goals: WorkoutGoal[],
    plans: WorkoutPlan[],
    workouts: Workout[],
};

export const WorkoutContext = createContext<WorkoutContextType>({
    createWorkoutModalOpen: false,
    createGoalModalOpen: false,
    createPlanModalOpen: false,
    goals: [],
    plans: [],
    workouts: []
})

export const WorkoutProvider = ({
                                    children,
    goals,
    plans,
    workouts
}: WorkoutContextProviderProps) => {
    const [modalStates, setModalStates] = useState<WorkoutContextType>({
        createWorkoutModalOpen: false,
        createGoalModalOpen: false,
        createPlanModalOpen: false,
        goals,
        plans,
        workouts
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
    return (
        <WorkoutContext.Provider value={{
            ...modalStates,
            updateWorkoutContext: setModalStates,
            refreshPlans,
            refreshGoals
        }}>
            {children}
        </WorkoutContext.Provider>
    )
}