import { Box } from '@mui/material';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styles } from '../styles';
import { useWorkouts } from '@/app/workout/hooks/workouts.hooks';

export default function Workouts() {
  const { workouts, columnDef } = useWorkouts();
  return (
    <Box sx={styles.workouts.workoutWrapper}>
      <DataGrid
        rows={workouts}
        columns={columnDef}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
        autoPageSize
      />
    </Box>
  );
}
