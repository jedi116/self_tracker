'use client';
import React, { useContext } from 'react';
import { Box, Paper, IconButton } from '@mui/material';
import { WorkoutContext } from '@/context/workout';
import GoalsForm from '@/app/workout/goals/form';
import WorkoutsForm from '@/app/workout/workouts/form';
import CloseIcon from '@mui/icons-material/Close';
import { styles } from '@/app/workout/styles';

interface WorkoutModalProps {
  name: string;
}

export default function WorkoutModal(props: Readonly<WorkoutModalProps>) {
  const { updateWorkoutContext } = useContext(WorkoutContext);

  const handleClose = () => {
    if (updateWorkoutContext) {
      updateWorkoutContext(prevState => ({
        ...prevState,
        createWorkoutModalOpen: false,
        createGoalModalOpen: false,
      }));
    }
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking directly on the backdrop, not on the modal content
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <Box onClick={handleBackdropClick} sx={styles.modal.backdrop}>
      <Paper sx={styles.modal.paper}>
        <IconButton onClick={handleClose} sx={styles.modal.closeButton}>
          <CloseIcon />
        </IconButton>
        {props.name === 'goal' ? <GoalsForm /> : <WorkoutsForm />}
      </Paper>
    </Box>
  );
}
