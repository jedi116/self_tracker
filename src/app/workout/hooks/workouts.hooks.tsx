import { useContext } from 'react';
import { WorkoutContext } from '@/context/workout';
import Workout from '@/types/Workout';
import { GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { Box, Button } from '@mui/material';
import { WorkoutFormContext } from '@/context/workout/form';
import { Effect, pipe } from 'effect';
import { deleteWorkout } from '@/app/workout/hooks/effects';

export const useWorkouts = () => {
  const context = useContext(WorkoutContext);
  const formContext = useContext(WorkoutFormContext);
  const handleDelete = (id: string) => () =>
    pipe(
      deleteWorkout(id),
      Effect.match({
        onSuccess: () => {
          if (context.refreshWorkouts) context.refreshWorkouts();
        },
        onFailure: error => {
          console.error(error);
        },
      }),
      Effect.runPromise
    );
  const handleEdit = (workout: Workout) => () => {
    const goalId = context.goals.find(data => data.name === workout.goalId)?.id;
    const name = context.workoutTypes.find(data => data.name === workout.name)?.id;
    const parsedWorkout = {
      ...workout,
      date: new Date(workout.date).toISOString().split('T')[0],
      goalId,
      name,
    };
    if (formContext.setFormState)
      formContext.setFormState(prev => ({
        ...prev,
        selectedWorkout: (parsedWorkout as any) || null,
        workoutFormType: 'edit',
      }));
    if (context.updateWorkoutContext)
      context.updateWorkoutContext(prevState => ({
        ...prevState,
        createWorkoutModalOpen: true,
      }));
  };
  const columnDef: GridColDef[] = React.useMemo(
    () => [
      { field: 'goalId', headerName: 'Goal', width: 200, headerClassName: 'custom-header' },
      { field: 'name', headerName: 'Name', width: 200, headerClassName: 'custom-header' },
      {
        field: 'description',
        headerName: 'Description',
        width: 300,
        headerClassName: 'custom-header',
      },
      { field: 'sets', headerName: 'Sets', headerClassName: 'custom-header' },
      { field: 'reps', headerName: 'Reps', headerClassName: 'custom-header' },
      { field: 'duration', headerName: 'Duration', headerClassName: 'custom-header' },
      { field: 'date', headerName: 'Date', headerClassName: 'custom-header', width: 300 },
      {
        field: 'actions',
        headerName: 'Actions',
        flex: 1,
        minWidth: 200,
        sortable: false,
        headerClassName: 'custom-header',
        renderCell: params => (
          <Box>
            <Button
              sx={{
                backgroundColor: '#003d4d !important',
                color: 'white !important',
                marginRight: '8px',
                fontFamily: 'SaiyanFont, sans-serif',
                '&:hover': { backgroundColor: '#00526a !important' },
              }}
              onClick={handleEdit(params.row as Workout)}
            >
              Edit
            </Button>
            <Button
              sx={{
                backgroundColor: '#9a0e0e !important',
                color: 'white !important',
                fontFamily: 'SaiyanFont, sans-serif',
                '&:hover': { backgroundColor: '#c01717 !important' },
              }}
              onClick={handleDelete(params.row.id as string)}
            >
              Delete
            </Button>
          </Box>
        ),
      },
    ],
    [context]
  );

  return {
    workouts: context.workouts,
    columnDef,
  };
};
