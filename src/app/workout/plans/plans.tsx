import {
    Box, Button
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import * as React from "react";
import {usePlans} from "@/app/workout/hooks/plans.hook";

export const  styles = {
    tableHeaders : {
        fontSize: {xs: '20px!important', sm: '20px!important', md: '25px!important', lg: '30px!important'},
        backgroundColor: '#ccffe6!important',
        color: 'black',
        fontFamily: 'SaiyanFont!important'
    },
    tableRows: {
        fontSize: {xs: '13px!important', sm: '15px!important', md: '17px!important', lg: '20px!important'},
    }
}
export default function Plans() {
    const {
        plans,
        handleEdit,
        handleDelete
    } = usePlans()

    const columns = React.useMemo(() => [
        { field: 'name', headerName: 'Plan Name', flex: 1, minWidth: 150, headerClassName: 'custom-header' },
        { field: 'goalId', headerName: 'Goal', flex: 1, minWidth: 100, headerClassName: 'custom-header'  },
        { field: 'active', headerName: 'Active', flex: 1, minWidth: 100, renderCell: (params: any) => (params.value ? 'Yes' : 'No'), headerClassName: 'custom-header'  },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            minWidth: 200,
            sortable: false,
            renderCell: (params: any) => (
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
        headerClassName: 'custom-header'
},
    ], [handleEdit, handleDelete]);

    return (
        <Box     sx={{
            height: 500,
            width: '100%',
            '& .custom-header': {
                ...styles.tableHeaders
            },
            '& .MuiDataGrid-cell': {
                ...styles.tableRows
            }
        }}>
            <DataGrid
                rows={plans}
                columns={columns}
                pageSizeOptions={[5, 10, 20]}
                disableRowSelectionOnClick
                autoPageSize
            />
        </Box>
    );
}
