import React from 'react';
import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import Alert from '@mui/material/Alert';
import ErrorIcon from '@mui/icons-material/Error';
import SuccessIcon from '@mui/icons-material/CheckCircle';
import { useWorkoutTypeForm } from '@/app/workout/hooks/workoutTypeForm.hook';
import { workoutTypeFormStyles } from './workoutTypeForm/styles';

export const WorkoutTypeForm = () => {
  const { values, handleChange, handleSubmit, message, error } = useWorkoutTypeForm();
  return (
    <Box component="form" sx={workoutTypeFormStyles.form} noValidate autoComplete="off">
      {error && (
        <Alert severity="error" icon={<ErrorIcon />}>
          {error}
        </Alert>
      )}
      {message && (
        <Alert severity="success" icon={<SuccessIcon />}>
          {message}
        </Alert>
      )}
      <FormControl>
        <InputLabel htmlFor="workout-type-name-input" sx={workoutTypeFormStyles.inputLabel}>
          Workout Type Name
        </InputLabel>
        <Input
          id="workout-type-name-input"
          aria-describedby="workout-type-name-input-text"
          value={values?.name}
          onChange={handleChange('name')}
          placeholder="e.g., Bench Press, Squat, Running"
          sx={workoutTypeFormStyles.input}
        />
        <FormHelperText id="workout-type-name-input-text" sx={workoutTypeFormStyles.helperText}>
          Enter a name for the new workout type
        </FormHelperText>
      </FormControl>
      <Button variant="contained" sx={workoutTypeFormStyles.button} onClick={handleSubmit}>
        Add Workout Type
      </Button>
    </Box>
  );
};
