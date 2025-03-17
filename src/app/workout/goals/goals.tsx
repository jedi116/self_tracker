import {
    Box,
    Button
} from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from "react";
import {useGoals} from "@/app/workout/hooks/goals.hook";
import {styles} from "@/app/workout/plans/plans";

export default function Goals() {
    const {
        handleEdit,
        handleDelete,
        goals
    } = useGoals()
    const columns: GridColDef[] = React.useMemo(() => [
        {
            field: 'name',
            headerName: 'Goal Name',
            flex: 1,
            minWidth: 150,
            headerClassName: 'custom-header'
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 2,
            minWidth: 400,
            headerClassName: 'custom-header'
        },
        {
            field: 'weightGoal',
            headerName: 'Weight Goal',
            flex: 1,
            minWidth: 150,
            headerClassName: 'custom-header'
        },
        {
            field: 'bodyFatGoal',
            headerName: 'Body Fat Goal',
            flex: 1,
            minWidth: 150,
            headerClassName: 'custom-header'
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
            renderCell: (params) => (
                <Box>
                    <Button
                        sx={{ backgroundColor: '#0AB5D2 !important', marginRight: '8px' }}
                        onClick={handleEdit(params.row)}
                    >
                        Edit
                    </Button>
                    <Button
                        sx={{ backgroundColor: '#eb4034 !important' }}
                        onClick={handleDelete(params.row.id)}
                    >
                        Delete
                    </Button>
                </Box>
            ),
        },
    ], [handleEdit, handleDelete]);

    // Add id to rows if not already present
    const rowsWithId = React.useMemo(() => {
        return goals.map((goal, index) => ({
            ...goal,
            id: goal.id || `goal-${index}`
        }));
    }, [goals]);

    return (
        <Box
            sx={{
                height: 500,
                width: '100%',
                '& .custom-header': {
                    ...styles.tableHeaders
                },
                '& .MuiDataGrid-cell': {
                    ...styles.tableRows
                }
            }}
        >
            <DataGrid
                rows={rowsWithId}
                columns={columns}
                pageSizeOptions={[5, 10, 20]}
                disableRowSelectionOnClick
                autoPageSize
            />
        </Box>
    );
}
