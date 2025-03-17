import {useContext} from "react";
import {WorkoutContext} from "@/context/workout";
import {WorkoutFormContext} from "@/context/workout/form";

export const useGoals = () => {
    const context = useContext(WorkoutContext)
    const formContext = useContext(WorkoutFormContext)
    const handleDelete =(id: string) => async () => {
        try {
            await fetch(`api/workout/goals?id=${id}`, {method: 'DELETE'})
            if (context.refreshGoals) context.refreshGoals()
        } catch (error: unknown) {
            console.log(error)
        }
    }

    const handleEdit = (row: any) => () => {
        const goal = context.goals.find(d => d.id === row.id)
        const parsedGoal = {
            ...goal,
            beginDate: goal?.beginDate.toISOString().split('T')[0],
            endDate: goal?.endDate.toISOString().split('T')[0]
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