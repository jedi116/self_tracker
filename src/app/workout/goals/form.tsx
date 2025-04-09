import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import ErrorIcon from '@mui/icons-material/Error';
import { Button, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material';
import { useGoalForm } from '@/app/workout/hooks/goalsForm.hook';
import { formStyles } from '@/app/workout/forms/styles';

export default function GoalsForm() {
  const { error, values, handleChange, handleSubmit } = useGoalForm();
  return (
    <Box component="form" sx={formStyles.formContainer} noValidate autoComplete="off">
      {error && (
        <Alert severity="error" icon={<ErrorIcon />}>
          {error}
        </Alert>
      )}
      <Typography sx={formStyles.formTitle}>Create Workout Goal</Typography>
      <FormControl sx={formStyles.formControl}>
        <InputLabel htmlFor="goal-name-input" sx={formStyles.inputLabel}>
          Goal Name
        </InputLabel>
        <Input
          id="goal-name-input"
          aria-describedby="gaol-name-input-text"
          value={values?.name}
          onChange={handleChange('name')}
          sx={{ ...formStyles.input, ...formStyles.inputMediumWidth }}
        />
        <FormHelperText id="goal-name-input-text" sx={formStyles.helperText}>
          Enter a name for the Workout Goal.
        </FormHelperText>
      </FormControl>
      <FormControl sx={formStyles.formControl}>
        <InputLabel htmlFor="goal-description-input" sx={formStyles.inputLabel}>
          Goal Description
        </InputLabel>
        <Input
          id="goal-description-input"
          aria-describedby="gaol-description-input-text"
          value={values?.description}
          onChange={handleChange('description')}
          sx={{ ...formStyles.input, ...formStyles.inputFullWidth }}
          multiline
          minRows={3}
          maxRows={6}
        />
        <FormHelperText id="goal-description-input-text" sx={formStyles.helperText}>
          Enter a description for the Workout Goal.
        </FormHelperText>
      </FormControl>
      <FormControl sx={formStyles.formControl}>
        <InputLabel htmlFor="goal-bodyfat-input" sx={formStyles.inputLabel}>
          Body Fat Percentage
        </InputLabel>
        <Input
          id="goal-bodyfat-input"
          aria-describedby="gaol-bodyfat-input-text"
          value={values?.bodyFatGoal}
          onChange={handleChange('bodyFatGoal')}
          sx={{ ...formStyles.input, ...formStyles.inputStandardWidth }}
        />
        <FormHelperText id="goal-bodyfat-input-text" sx={formStyles.helperText}>
          Enter body fat percentage you want to achieve
        </FormHelperText>
      </FormControl>
      <FormControl sx={formStyles.formControl}>
        <InputLabel htmlFor="goal-weight-input" sx={formStyles.inputLabel}>
          Weight Goal{' '}
        </InputLabel>
        <Input
          id="goal-weight-input"
          aria-describedby="goal-weight-input-text"
          value={values?.weightGoal}
          onChange={handleChange('weightGoal')}
          sx={{ ...formStyles.input, ...formStyles.inputStandardWidth }}
        />
        <FormHelperText id="goal-weight-input-text" sx={formStyles.helperText}>
          Enter weight goal.
        </FormHelperText>
      </FormControl>
      <FormControl sx={formStyles.formControl}>
        <Typography sx={formStyles.dateLabel}>Start Date</Typography>
        <Input
          id="goal-beginDate-input"
          aria-describedby="goal-beginDate-input-text"
          value={values?.beginDate}
          type={'date'}
          onChange={handleChange('beginDate')}
          sx={{ ...formStyles.input, ...formStyles.inputStandardWidth }}
        />
        <FormHelperText id="goal-beginDate-input-text" sx={formStyles.helperText}>
          Enter goal begin date.
        </FormHelperText>
      </FormControl>
      <FormControl sx={formStyles.formControl}>
        <Typography sx={formStyles.dateLabel}>End Date</Typography>
        <Input
          id="goal-endDate-input"
          aria-describedby="goal-endDate-input-text"
          type={'date'}
          value={values?.endDate}
          onChange={handleChange('endDate')}
          sx={{ ...formStyles.input, ...formStyles.inputStandardWidth }}
        />
        <FormHelperText id="goal-endDate-input-text" sx={formStyles.helperText}>
          Enter goal end date.
        </FormHelperText>
      </FormControl>
      <Button variant="contained" sx={formStyles.submitButton} onClick={handleSubmit}>
        Save Goal
      </Button>
    </Box>
  );
}
