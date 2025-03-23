import {useContext} from "react";
import {WorkoutContext} from "@/context/workout";
import {WorkoutFormContext} from "@/context/workout/form";
import {Effect, pipe} from "effect"
import {deleteGoals} from "@/app/workout/hooks/effects";
import WorkoutGoal from "@/types/WorkoutGoal";

export const useGoals = () => {
    const context = useContext(WorkoutContext)
    const formContext = useContext(WorkoutFormContext)
    const handleDelete =(id: string) => async() => {
        await pipe(
            deleteGoals(id),
            Effect.match({
                onSuccess: () => {
                    if (context.refreshGoals) context.refreshGoals()
                },
                onFailure: (error) => console.error(error)

            }),
            Effect.runPromise
        )
    }

    const handleEdit = (row: WorkoutGoal) => () => {
        const parsedGoal = {
            ...row,
            beginDate: row.beginDate.toISOString().split('T')[0],
            endDate: row.endDate.toISOString().split('T')[0]
        }
        if (formContext.setFormState) formContext.setFormState((prev) => ({
            ...prev,
            selectedGoal: parsedGoal as any || null,
            goalFormType: 'edit'
        }))
        if (context.updateWorkoutContext) context.updateWorkoutContext((prevState) => ({
            ...prevState,
            createGoalModalOpen: true
        }))
    }

    return {
        handleEdit,
        handleDelete,
        goals: context.goals
    }
}