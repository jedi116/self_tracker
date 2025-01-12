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
import {WorkoutPlan} from "@prisma/client";

export default function Plans({plans}: {plans: WorkoutPlan[]}) {

    return (
        <TableContainer component={Box}>
            <Table sx={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}
                        >
                            Plan name
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}
                        >
                            Goal
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}
                        >active&nbsp;
                        </TableCell>
                        <TableCell align="right" sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}>
                            &nbsp;
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {plans.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{fontSize: '20px!important'}}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right" sx={{fontSize: '20px!important'}}>{row.goalId}</TableCell>
                            <TableCell align="right" sx={{fontSize: '20px!important'}}>{row.active ? 'yes' : 'no'}</TableCell>
                            <TableCell align="right" sx={{fontSize: '20px!important'}}>
                                <Button
                                    sx={{
                                        backgroundColor: '#0AB5D2 !important',
                                    }}
                                >
                                    edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
