import {Box} from '@mui/material'
import * as React from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {useContext} from "react";
import {WorkoutContext} from "@/context/workout";
import {styles} from "@/app/workout/plans/plans";

const columnDef:  GridColDef[] = [
    {field: 'plan', headerName: 'Plan', width: 200, headerClassName: 'custom-header'},
    {field: 'goal', headerName: 'Goal', width: 200, headerClassName: 'custom-header'},
    {field: 'name', headerName: 'Name', width: 200, headerClassName: 'custom-header'},
    {field: 'description', headerName: 'Description', width: 300, headerClassName: 'custom-header'},
    {field: 'sets', headerName: 'Sets', headerClassName: 'custom-header'},
    {field: 'reps', headerName: 'Reps', headerClassName: 'custom-header'},
    {field: 'duration', headerName: 'Duration', headerClassName: 'custom-header'},
    {field: 'date', headerName: 'Date', headerClassName: 'custom-header', width: 300}
]

export default function Workouts() {
    const context = useContext(WorkoutContext)
    return (
        <Box
            sx={{ height: 500,
                width: '100%',
                '& .custom-header': {
                    ...styles.tableHeaders
                },
                '& .MuiDataGrid-cell': {
                    ...styles.tableRows
                }}}
        >
            <DataGrid
                rows={context.workouts}
                columns={columnDef}
                pageSizeOptions={[5, 10, 20]}
                disableRowSelectionOnClick
                autoPageSize
            />
        </Box>
    );
}
