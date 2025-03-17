import React from 'react';
import {WorkoutContext} from "@/context/workout";
import Workout from "@/types/Workout";

type DropdownOption = {value: string | null | undefined, label: string | null | undefined}

export const useWorkoutsForm = () => {
    const [error, setError] = React.useState<string | null>(null)
    const context = React.useContext(WorkoutContext)
    const [planOptions, setPlanOptions] = React.useState<DropdownOption[]>([])
    const [nameOptions, setNameOptions] = React.useState<DropdownOption[]>([])
    React.useEffect(() => {
        setPlanOptions(context.plans.map(plan => {
            return {
                value: plan.id,
                label: plan.name
            }
        }))
        setNameOptions(context.workoutTypes.map(type => {
            return {
                value: type.id,
                label: type.name
            }
        }))
    }, [context.plans, context.workoutTypes])
    const [values, setValues] = React.useState<Partial<Workout>>({
        name: ''
    })
    const handleChange = (prop: keyof Workout) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const validateData = (data: Partial<Workout>) => {
        if (!data.name) {
            setError('Workout Type is required');
            return false;
        }
        if (!data.plan) {
            setError('Plan is required');
            return false;
        }
        if (!data.date) {
            setError('Date is required');
            return false;
        }
        return true;
    }
    const handleSubmit = async () => {
        if (validateData(values)) {
            const response = await fetch("/api/workout/workouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...values,
                }),
            });
            const responseBody = await response.json();
            if (!response.ok ) {
                console.error("Error creating workout:", responseBody)
                setError("Error creating workout")
                return
            }
            setError(null)
            if(context.refreshWorkouts) context.refreshWorkouts()
            if (context.updateWorkoutContext) context.updateWorkoutContext((prevState) => ({
                ...prevState,
                createWorkoutModalOpen: false,
            }))
        }
    }


    return {
        handleChange,
        handleSubmit,
        error,
        planOptions,
        nameOptions,
        values,
        setValues
    }
}