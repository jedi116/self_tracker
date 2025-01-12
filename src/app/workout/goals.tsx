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
import WorkoutGoal from "@/types/WorkoutGoal";

export default function Goals({goals}: {goals: WorkoutGoal[]}) {

    return (
        <TableContainer component={Box}>
            <Table sx={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}
                        >
                            Goal name
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}
                        >
                            Description
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}
                        >weightGoal&nbsp;
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}
                        >bodyFatGoal&nbsp;
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}
                        >beginDate&nbsp;
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}
                        >endDate&nbsp;
                        </TableCell>
                        <TableCell align="right" sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black'}}>
                            &nbsp;
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {goals.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{fontSize: '20px!important'}}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right" sx={{fontSize: '20px!important'}}>{row.description}</TableCell>
                            <TableCell align="right" sx={{fontSize: '20px!important'}}>{row.weightGoal}</TableCell>
                            <TableCell align="right" sx={{fontSize: '20px!important'}}>{row.bodyFatGoal}</TableCell>
                            <TableCell align="right" sx={{fontSize: '20px!important'}}>{row.beginDate.toString()}</TableCell>
                            <TableCell align="right" sx={{fontSize: '20px!important'}}>{row.endDate.toString()}</TableCell>
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
