import React from 'react';
import { WorkoutContext } from '@/context/workout';
import { Effect, pipe } from 'effect';
import { createOrEditWorkoutTypes } from '@/app/workout/hooks/effects';

export const useWorkoutTypeForm = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [message, setMessage] = React.useState<string | null>(null);
  const context = React.useContext(WorkoutContext);
  const [values, setValues] = React.useState<{ name?: string }>();
  const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
    setError(null);
    setMessage(null);
  };

  const handleSubmit = async () => {
    if (values?.name) {
      await pipe(
        createOrEditWorkoutTypes(values, 'POST'),
        Effect.match({
          onSuccess: () => {
            if (context.refreshWorkoutTypes) context.refreshWorkoutTypes();
            setError(null);
            setMessage('Workout Type Created Successfully');
          },
          onFailure: error => {
            console.error('Error creating workout type:', error);
            setError('Error creating workout type');
          },
        }),
        Effect.runPromise
      );
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    message,
    error,
  };
};
