'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type WorkoutContextType = {
    createWorkoutModalOpen: boolean,
    createGoalModalOpen: boolean,
    createPlanModalOpen: boolean,
    updateModalState?:  React.Dispatch<React.SetStateAction<WorkoutContextType>>
};

type WorkoutContextProviderProps = {
    children: ReactNode;
};

export const WorkoutContext = createContext<WorkoutContextType>({
    createWorkoutModalOpen: false,
    createGoalModalOpen: false,
    createPlanModalOpen: false,
})

export const WorkoutProvider = ({children}: WorkoutContextProviderProps) => {
    const [modalStates, setModalStates] = useState<WorkoutContextType>({
        createWorkoutModalOpen: false,
        createGoalModalOpen: false,
        createPlanModalOpen: false,
    });
    return (
        <WorkoutContext.Provider value={{
            ...modalStates,
            updateModalState: setModalStates
        }}>
            {children}
        </WorkoutContext.Provider>
    )
}