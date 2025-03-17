import React from 'react'
import {WorkoutContext} from "@/context/workout";


export const useWorkoutTypeForm = () => {
    const [error, setError] = React.useState<string | null>(null)
    const [message, setMessage] = React.useState<string | null>(null)
    const context = React.useContext(WorkoutContext)
    const [values, setValues] = React.useState({
        name: ''
    })
    const handleChange = (prop: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        setError(null)
        setMessage(null)
    }
    const handleSubmit = async () => {
        const response = await fetch("/api/workout/types", {
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
            console.error("Error creating workout type:", responseBody)
            setError("Error creating workout type")
            return
        }
        if (context.refreshWorkoutTypes) context.refreshWorkoutTypes()
        setError(null)
        setMessage("Workout Type Created Successfully")
    }

    return {
        values,
        handleChange,
        handleSubmit,
        message,
        error
    }
}