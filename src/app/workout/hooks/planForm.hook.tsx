import React, {useContext, useState} from "react";
import WorkoutPlan from "@/types/WorkoutPlan";
import WorkoutGoal from "@/types/WorkoutGoal";
import {WorkoutContext} from "@/context/workout";
import {WorkoutFormContext} from "@/context/workout/form";


export const usePlanForm = (
    goals: WorkoutGoal[]
) => {
    const formContext = useContext(WorkoutFormContext)
    const [goalsOptions, setGoalsOptions] = useState<{value: string, label: string}[]>([])
    const [values, setValues] = useState<Omit<WorkoutPlan, 'id' | 'userId' | 'active'>>(formContext.selectedPlan || {
        name: '', goalId: ''
    });
    const [error, setError] = useState<string | null>(null);
    const context = useContext(WorkoutContext)
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const response = await fetch("/api/workout/plan", {
            method: formContext.planFormType === 'create' ? "POST" : "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...values,
                id: formContext.selectedPlan?.id,
            }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            setError("Error creating workout plan")
            console.error("Error creating workout plan:", errorData);
            return;
        }

        context.updateWorkoutContext && context.updateWorkoutContext((prevState) => ({
            ...prevState,
            createPlanModalOpen: false
        }))
        context.refreshPlans && context.refreshPlans()
    }
    React.useEffect(() => {
        setGoalsOptions(goals.map(goal => {
            return {
                value: goal.id,
                label: goal.name,
            }
        }));
        console.log(formContext)
    }, [goals, formContext])

    return {
        handleSubmit,
        goalsOptions,
        values,
        setValues,
        error
    }
}