import {Box, ListItem, ListItemButton, ListItemText, List} from '@mui/material'
import Workout from "@/types/Workout";
import * as React from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type WorkoutsProps = {
    workouts: Workout[]
}

const columnDef:  GridColDef[] = [
    {field: 'plan', headerName: 'Plan', width: 200},
    {field: 'goal', headerName: 'Goal', width: 200},
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'description', headerName: 'Description', width: 300},
    {field: 'sets', headerName: 'Sets'},
    {field: 'reps', headerName: 'Reps'},
    {field: 'duration', headerName: 'Duration'},
    {field: 'date', headerName: 'Date'}
]

export default function Workouts({workouts}: WorkoutsProps) {

    return (
        <Box
            sx={{height: '50vh', width: '100%'}}
        >
            <DataGrid
                rows={workouts}
                columns={columnDef}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Box>
    );
}
