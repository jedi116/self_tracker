import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { useGoals } from '@/app/workout/hooks/goals.hook';
import WorkoutGoal from '@/types/WorkoutGoal';
import { goalsStyles } from './styles';

export default function Goals() {
  const { handleEdit, handleDelete, goals } = useGoals();
  const columns: GridColDef[] = React.useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Goal Name',
        flex: 1,
        minWidth: 150,
        headerClassName: 'custom-header',
      },
      {
        field: 'description',
        headerName: 'Description',
        flex: 2,
        minWidth: 400,
        headerClassName: 'custom-header',
      },
      {
        field: 'weightGoal',
        headerName: 'Weight Goal',
        flex: 1,
        minWidth: 150,
        headerClassName: 'custom-header',
      },
      {
        field: 'bodyFatGoal',
        headerName: 'Body Fat Goal',
        flex: 1,
        minWidth: 150,
        headerClassName: 'custom-header',
      },
      {
        field: 'beginDate',
        headerName: 'Begin Date',
        flex: 1,
        minWidth: 150,
        headerClassName: 'custom-header',
      },
      {
        field: 'endDate',
        headerName: 'End Date',
        flex: 1,
        minWidth: 150,
        headerClassName: 'custom-header',
      },
      {
        field: 'actions',
        headerName: 'Actions',
        flex: 1,
        minWidth: 200,
        sortable: false,
        headerClassName: 'custom-header',
        renderCell: params => (
          <Box>
            <Button sx={goalsStyles.editButton} onClick={handleEdit(params.row as WorkoutGoal)}>
              Edit
            </Button>
            <Button sx={goalsStyles.deleteButton} onClick={handleDelete(params.row.id)}>
              Delete
            </Button>
          </Box>
        ),
      },
    ],
    [handleEdit, handleDelete]
  );

  return (
    <Box sx={goalsStyles.container}>
      <DataGrid
        rows={goals}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
        autoPageSize
      />
    </Box>
  );
}
