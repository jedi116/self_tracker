import {Box} from '@mui/material'
import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';

import {styles} from "@/app/workout/styles";
import {useWorkouts} from "@/app/workout/hooks/workouts.hooks";


export default function Workouts() {
    const {workouts, columnDef} = useWorkouts()
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
                rows={workouts}
                columns={columnDef}
                pageSizeOptions={[5, 10, 20]}
                disableRowSelectionOnClick
                autoPageSize
            />
        </Box>
    );
}
