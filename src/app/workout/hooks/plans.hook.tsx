import {useContext, useCallback} from "react";
import {WorkoutContext} from "@/context/workout";
import {WorkoutFormContext} from "@/context/workout/form";
import {WorkoutPlan} from "@prisma/client";

export const usePlans = () => {
    const context = useContext(WorkoutContext)
    const formContext = useContext(WorkoutFormContext)
    const handleDelete = useCallback((id: string) => async () => {
        try {
            await fetch(`api/workout/plan?id=${id}`, {method: 'DELETE'})
            if (context.refreshPlans) context.refreshPlans()
        } catch (error: unknown) {
            console.log(error)
        }
    }, [context])
    const handleEdit = useCallback((row: WorkoutPlan) => () => {
        console.log(formContext.setFormState, context.plans, row)
        if (formContext.setFormState) formContext.setFormState((prev) => ({
            ...prev,
            selectedPlan: context.plans.find(d => d.id === row.id) || null,
            planFormType: 'edit'
        }))
        if (context.updateWorkoutContext) context.updateWorkoutContext((prevState) => ({
            ...prevState,
            createPlanModalOpen: true
        }))
    }, [context, formContext])

    return {
        plans: context.plans.map(data => {
            const goalName = context.goals.find(d => d.id === data.goalId)
            return {...data, goalId: goalName?.name || ''}
        }),
        handleDelete,
        handleEdit
    }
}