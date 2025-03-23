import {useCallback, useContext} from "react";
import {WorkoutContext} from "@/context/workout";
import {WorkoutFormContext} from "@/context/workout/form";

export const useHeader = () => {
    const context = useContext(WorkoutContext)
    const formContext = useContext(WorkoutFormContext)
    const openModal = (modalName: string) => {
        if (context.updateWorkoutContext && formContext.setFormState) {
            switch (modalName) {
                case "add workout":
                    formContext.setFormState((prev) => ({
                        ...prev,
                        selectedWorkout:  null,
                        workoutFormType: 'create'
                    }))
                    context.updateWorkoutContext((prevState) => ({
                        ...prevState,
                        createWorkoutModalOpen: true
                    }))
                    break
                case "create workout goal":
                    formContext.setFormState((prev) => ({
                        ...prev,
                        selectedGoal:  null,
                        goalFormType: 'create'
                    }))
                    context.updateWorkoutContext((prevState) => ({
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
        if (context.createGoalModalOpen) {
            return 'goal'
        }
        if (context.createWorkoutModalOpen) {
            return 'workout'
        }
        return ''
    }, [context])
    const closeModal = () => {
        if (context.updateWorkoutContext) {
            context.updateWorkoutContext((prevState) => ({
                ...prevState,
                createWorkoutModalOpen: false,
                createGoalModalOpen: false
            }))
        }
    }

    return {
        openModal,
        getModalName,
        closeModal,
        modalOpen: context.createWorkoutModalOpen || context.createGoalModalOpen
    }
}