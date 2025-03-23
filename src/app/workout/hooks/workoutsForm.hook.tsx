import React from 'react';
import {WorkoutContext} from "@/context/workout";
import Workout from "@/types/Workout";
import {Effect, pipe} from "effect"
import {createOrEditWorkouts} from "@/app/workout/hooks/effects";
import {WorkoutFormContext} from "@/context/workout/form";

type DropdownOption = {value: string | null | undefined, label: string | null | undefined}

export const useWorkoutsForm = () => {
    const context = React.useContext(WorkoutContext)
    const formContext = React.useContext(WorkoutFormContext)
    const [error, setError] = React.useState<string | null>(null)
    const [goalOptions, setGoalOptions] = React.useState<DropdownOption[]>([])
    const [nameOptions, setNameOptions] = React.useState<DropdownOption[]>([])
    const [values, setValues] = React.useState<Partial<Workout>>({
        ...formContext.selectedWorkout
    })
    React.useEffect(() => {
        setGoalOptions(context.goals.map(goal => {
            return {
                value: goal.id,
                label: goal.name
            }
        }))
        setNameOptions(context.workoutTypes.map(type => {
            return {
                value: type.id,
                label: type.name
            }
        }))
    }, [context.goals, context.workoutTypes])

    const handleChange = (prop: keyof Workout) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const validateData = (data: Partial<Workout>) => {
        if (!data.name) {
            setError('Workout Type is required');
            return false;
        }
        if (!data.goalId) {
            setError('Plan is required');
            return false;
        }
        if (!data.date) {
            setError('Date is required');
            return false;
        }
        return true;
    }

    const handleSubmit = async() => {
        if (validateData(values)) {
            await pipe(
                createOrEditWorkouts(values, formContext.workoutFormType === 'create' ? 'POST' : 'PUT'),
                Effect.match({
                    onSuccess: () => {
                        setError(null)
                        if(context.refreshWorkouts) context.refreshWorkouts()
                        if (context.updateWorkoutContext) context.updateWorkoutContext((prevState) => ({
                            ...prevState,
                            createWorkoutModalOpen: false,
                        }))
                    },
                    onFailure: (error) => {
                        console.error("Error creating workout:", error)
                        setError("Error creating workout")
                    }

                }),
                Effect.runPromise
            )
        }
    }


    return {
        handleChange,
        handleSubmit,
        error,
        goalOptions,
        nameOptions,
        values,
        setValues
    }
}