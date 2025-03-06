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
                            sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black' , fontFamily: 'SaiyanFont!important'}}
                        >
                            Goal name
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black', fontFamily: 'SaiyanFont!important'}}
                        >
                            Description
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black', fontFamily: 'SaiyanFont!important'}}
                        >weightGoal&nbsp;
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black', fontFamily: 'SaiyanFont!important'}}
                        >bodyFatGoal&nbsp;
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black', fontFamily: 'SaiyanFont!important'}}
                        >beginDate&nbsp;
                        </TableCell>
                        <TableCell align="right"
                                   sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black', fontFamily: 'SaiyanFont!important'}}
                        >endDate&nbsp;
                        </TableCell>
                        <TableCell align="right" sx={{fontSize: '23px!important', backgroundColor: '#ccffe6!important', color: 'black', fontFamily: 'SaiyanFont!important'}}>
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
