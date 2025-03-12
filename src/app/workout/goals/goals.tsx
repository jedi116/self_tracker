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
import {useGoals} from "@/app/workout/hooks/goals.hook";
import {styles} from "@/app/workout/plans/plans";

export default function Goals() {
    const {
        handleEdit,
        handleDelete,
        goals
    } = useGoals()
    return (
        <TableContainer component={Box}>
            <Table sx={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={styles.tableHeaders}
                        >
                            Goal name
                        </TableCell>
                        <TableCell align="right"
                                   sx={styles.tableHeaders}
                        >
                            Description
                        </TableCell>
                        <TableCell align="right"
                                   sx={styles.tableHeaders}
                        >weightGoal&nbsp;
                        </TableCell>
                        <TableCell align="right"
                                   sx={styles.tableHeaders}
                        >bodyFatGoal&nbsp;
                        </TableCell>
                        <TableCell align="right"
                                   sx={styles.tableHeaders}
                        >beginDate&nbsp;
                        </TableCell>
                        <TableCell align="right"
                                   sx={styles.tableHeaders}
                        >endDate&nbsp;
                        </TableCell>
                        <TableCell align="right" sx={styles.tableHeaders}>
                            &nbsp;
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {goals.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={styles.tableRows}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right" sx={styles.tableRows}>{row.description}</TableCell>
                            <TableCell align="right" sx={styles.tableRows}>{row.weightGoal}</TableCell>
                            <TableCell align="right" sx={styles.tableRows}>{row.bodyFatGoal}</TableCell>
                            <TableCell align="right" sx={styles.tableRows}>{row.beginDate.toString()}</TableCell>
                            <TableCell align="right" sx={styles.tableRows}>{row.endDate.toString()}</TableCell>
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
