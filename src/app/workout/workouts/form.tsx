import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import Alert from '@mui/material/Alert';
import ErrorIcon from '@mui/icons-material/Error';
import { WorkoutTypeForm } from '@/app/workout/workouts/workoutTypeForm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useWorkoutsForm } from '@/app/workout/hooks/workoutsForm.hook';
import { formStyles } from '@/app/workout/forms/styles';

export default function WorkoutsForm() {
  const { handleChange, handleSubmit, error, nameOptions, values, setValues, goalOptions } =
    useWorkoutsForm();
  return (
    <Box component="form" sx={formStyles.formContainer} noValidate autoComplete="off">
      {error && (
        <Alert severity="error" icon={<ErrorIcon />}>
          {error}
        </Alert>
      )}
      <Typography sx={formStyles.formTitle}>Create Workout Entry</Typography>
      <FormControl sx={formStyles.formControl}>
        <InputLabel id="goal-select-label" sx={formStyles.inputLabel}>
          Workout Goal
        </InputLabel>
        <Select
          labelId="goal-select-label"
          id="goal-select"
          value={values?.goalId}
          label="goal"
          onChange={event => {
            setValues(prev => ({ ...prev, goalId: event.target.value }));
          }}
          sx={formStyles.select}
        >
          {goalOptions.map(option => (
            <MenuItem
              key={option.value as string}
              value={option.value as string}
              sx={formStyles.menuItem}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={formStyles.formControl}>
        <InputLabel id="name-select-label" sx={formStyles.inputLabel}>
          Workout Type
        </InputLabel>
        <Select
          labelId="name-select-label"
          id="name-select"
          value={values?.name}
          label="name"
          onChange={event => {
            setValues(prev => ({ ...prev, name: event.target.value }));
          }}
          sx={formStyles.select}
        >
          {nameOptions.map(option => (
            <MenuItem
              key={option.value as string}
              value={option.value as string}
              sx={formStyles.menuItem}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Accordion sx={formStyles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={formStyles.accordionTitle}>Add New Workout Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <WorkoutTypeForm />
        </AccordionDetails>
      </Accordion>
      <FormControl sx={formStyles.formControl}>
        <InputLabel htmlFor="workout-description-input" sx={formStyles.inputLabel}>
          Description
        </InputLabel>
        <Input
          id="workout-description-input"
          aria-describedby="workout-description-input-text"
          value={values?.description}
          onChange={handleChange('description')}
          sx={{ ...formStyles.input, ...formStyles.inputMediumWidth }}
          multiline
          minRows={3}
          maxRows={6}
        />
        <FormHelperText id="workout-description-input-text" sx={formStyles.helperText}>
          Enter description
        </FormHelperText>
      </FormControl>
      <FormControl sx={formStyles.formControl}>
        <InputLabel htmlFor="workout-sets-input" sx={formStyles.inputLabel}>
          Sets
        </InputLabel>
        <Input
          id="workout-sets-input"
          aria-describedby="workout-sets--input-text"
          value={values?.sets}
          onChange={handleChange('sets')}
          sx={{ ...formStyles.input, ...formStyles.inputStandardWidth }}
          type="number"
        />
        <FormHelperText id="workout-sets-input-text" sx={formStyles.helperText}>
          Enter number of sets.
        </FormHelperText>
      </FormControl>
      <FormControl sx={formStyles.formControl}>
        <InputLabel htmlFor="workout-reps-input" sx={formStyles.inputLabel}>
          Reps
        </InputLabel>
        <Input
          id="workout-reps-input"
          aria-describedby="workout-reps-input-text"
          value={values?.reps}
          onChange={handleChange('reps')}
          sx={{ ...formStyles.input, ...formStyles.inputStandardWidth }}
          type="number"
        />
        <FormHelperText id="workout-reps-input-text" sx={formStyles.helperText}>
          Enter number of reps.
        </FormHelperText>
      </FormControl>
      <FormControl sx={formStyles.formControl}>
        <InputLabel htmlFor="workout-duration-input" sx={formStyles.inputLabel}>
          Duration
        </InputLabel>
        <Input
          id="workout-duration-input"
          aria-describedby="workout-duration-input-text"
          value={values?.duration}
          onChange={handleChange('duration')}
          sx={{ ...formStyles.input, ...formStyles.inputStandardWidth }}
        />
        <FormHelperText id="workout-date-input-text" sx={formStyles.helperText}>
          Enter Duration.
        </FormHelperText>
      </FormControl>
      <FormControl sx={formStyles.formControl}>
        <Typography sx={formStyles.dateLabel}>Date</Typography>
        <Input
          id="goal-date-input"
          aria-describedby="goal-date-input-text"
          type={'date'}
          value={values?.date}
          onChange={handleChange('date')}
          sx={{ ...formStyles.input, ...formStyles.inputStandardWidth }}
        />
        <FormHelperText id="goal-date-input-text" sx={formStyles.helperText}>
          Enter date.
        </FormHelperText>
      </FormControl>
      <Button variant="contained" sx={formStyles.submitButton} onClick={handleSubmit}>
        Save Workout
      </Button>
    </Box>
  );
}
