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
import {useContext} from "react";
import {WorkoutContext} from "@/context/workout";
import {WorkoutFormContext} from "@/context/workout/form";
import {usePlans} from "@/app/workout/hooks/plans.hook";

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
                            sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black', fontFamily: 'SaiyanFont!important'}}
                        >
                            Plan name
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black', fontFamily: 'SaiyanFont!important'}}
                        >
                            Goal
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black', fontFamily: 'SaiyanFont!important'}}
                        >active&nbsp;
                        </TableCell>
                        <TableCell align="right" sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black', fontFamily: 'SaiyanFont!important'}}>
                            actions&nbsp;
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
