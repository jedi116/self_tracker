import {
    TableContainer,
    Box,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Table, Button
} from '@mui/material'

import * as React from "react";
import {usePlans} from "@/app/workout/hooks/plans.hook";

export const  styles = {
    tableHeaders : {
        fontSize: {xs: '18px!important', sm: '22px!important', md: '25px!important', lg: '30px!important'},
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
    return (
        <TableContainer component={Box}>
            <Table sx={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={styles.tableHeaders}
                        >
                            Plan name
                        </TableCell>
                        <TableCell align="right"
                                   sx={styles.tableHeaders}
                        >
                            Goal
                        </TableCell>
                        <TableCell align="right"
                                   sx={styles.tableHeaders}
                        >active&nbsp;
                        </TableCell>
                        <TableCell align="right" sx={styles.tableHeaders}>
                            actions&nbsp;
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {plans.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={styles.tableRows}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right" sx={styles.tableRows}>{row.goalId}</TableCell>
                            <TableCell align="right" sx={styles.tableRows}>{row.active ? 'yes' : 'no'}</TableCell>
                            <TableCell align="right" sx={styles.tableRows}>
                                <Button
                                    sx={{
                                        backgroundColor: '#0AB5D2 !important',
                                    }}
                                    onClick={handleEdit(row)}
                                >
                                    edit
                                </Button>
                                <Button
                                    sx={{
                                        backgroundColor: '#eb4034 !important',
                                        marginLeft: '10px',
                                    }}
                                    onClick={handleDelete(row.id)}
                                >
                                    delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
