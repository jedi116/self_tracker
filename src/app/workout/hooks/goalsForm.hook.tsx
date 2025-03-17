import React, {useContext} from "react";
import {WorkoutContext} from "@/context/workout";
import {WorkoutFormContext} from "@/context/workout/form";
import WorkoutGoal from "@/types/WorkoutGoal";

export const useGoalForm = () => {
    const context = useContext(WorkoutContext);
    const formContext = useContext(WorkoutFormContext)
    const [error, setError] = React.useState<string | null>(null);
    const [values, setValues] = React.useState<Partial<WorkoutGoal> | null>(formContext.selectedGoal);

    const handleChange = (prop: keyof WorkoutGoal) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        setError(null);
    }

    const validateData = (data: Partial<WorkoutGoal>) => {
        if (!data.name) {
            setError('Name is required');
            return false;
        }
        if (!data.description) {
            setError('Description is required');
            return false;
        }
        if (!data.bodyFatGoal) {
            setError('Body Fat Goal is required');
            return false;
        }
        if (!data.weightGoal) {
            setError('Weight Goal is required');
            return false;
        }
        if (!data.beginDate) {
            setError('Begin Date is required');
            return false;
        }
        if (!data.endDate) {
            setError('End Date is required');
            return false;
        }
        if (data.beginDate > data.endDate) {
            setError('Begin Date should be before End Date');
            return false;
        }
        return true;
    }
    const handleSubmit = async () => {
        if (values) {
            if (validateData(values)) {
                const response = await fetch("/api/workout/goals", {
                    method: formContext.goalFormType === 'create' ? "POST" : "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...values,
                    }),
                });
                const responseBody = await response.json();
                if (!response.ok) {
                    setError("Error creating workout goal")
                    console.error("Error creating workout goal:", responseBody);
                    return;
                }

                if (context.updateWorkoutContext) context.updateWorkoutContext((prevState) => ({
                    ...prevState,
                    createGoalModalOpen: false,
                    goals: [
                        ...prevState.goals.filter(data => data.id !== responseBody.data.id),
                        {
                            ...responseBody.data,
                            beginDate: new Date(responseBody.data.beginDate),
                            endDate: new Date(responseBody.data.endDate)
                        }
                    ]
                }))
            }
        }
    }

    return {
        error,
        values,
        handleChange,
        handleSubmit
    }
}