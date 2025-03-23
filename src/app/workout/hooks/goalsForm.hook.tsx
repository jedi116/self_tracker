import React, {useContext} from "react";
import {WorkoutContext} from "@/context/workout";
import {WorkoutFormContext} from "@/context/workout/form";
import WorkoutGoal from "@/types/WorkoutGoal";
import {Effect, pipe} from "effect"
import {createOrEditGoals} from "@/app/workout/hooks/effects";

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
        if (values && validateData(values)) {
            await pipe(
                createOrEditGoals(values, formContext.goalFormType === 'create' ? "POST" : "PUT"),
                Effect.match({
                    onSuccess: (response) => {
                        if (context.updateWorkoutContext) context.updateWorkoutContext((prevState) => ({
                            ...prevState,
                            createGoalModalOpen: false,
                            goals: [
                                ...prevState.goals.filter(data => data.id !== response.data.id),
                                {
                                    ...response.data,
                                    beginDate: new Date(response.data.beginDate),
                                    endDate: new Date(response.data.endDate)
                                }
                            ]
                        }))
                    },
                    onFailure: (error) => console.error(error)
                }),
                Effect.runPromise
            )
        }
    }

    return {
        error,
        values,
        handleChange,
        handleSubmit
    }
}