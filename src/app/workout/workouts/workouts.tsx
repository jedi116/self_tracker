import {Box} from '@mui/material'
import * as React from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {useContext} from "react";
import {WorkoutContext} from "@/context/workout";

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

export default function Workouts() {
    const context = useContext(WorkoutContext)
    return (
        <Box
            sx={{height: '50vh', width: '100%'}}
        >
            <DataGrid
                rows={context.workouts}
                columns={columnDef}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Box>
    );
}
