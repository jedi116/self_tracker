import {useContext} from "react";
import {WorkoutContext} from "@/context/workout";
import {WorkoutFormContext} from "@/context/workout/form";
import {WorkoutPlan} from "@prisma/client";

export const usePlans = () => {
    const context = useContext(WorkoutContext)
    const formContext = useContext(WorkoutFormContext)
    const handleDelete = (id: string) => async () => {
        try {
            await fetch(`api/workout/plan?id=${id}`, {method: 'DELETE'})
            context.refreshPlans && context.refreshPlans()
        } catch (error: any) {
            console.log(error)
        }
    }
    const handleEdit = (row: WorkoutPlan) => () => {
        formContext.setFormState && formContext.setFormState((prev) => ({
            ...prev,
            selectedPlan: context.plans.find(d => d.id === row.id) || null,
            planFormType: 'edit'
        }))
        context.updateWorkoutContext && context.updateWorkoutContext((prevState) => ({
            ...prevState,
            createPlanModalOpen: true
        }))
    }

    return {
        plans: context.plans.map(data => {
            const goalName = context.goals.find(d => d.id === data.goalId)
            return {...data, goalId: goalName?.name || ''}
        }),
        handleDelete,
        handleEdit
    }
}