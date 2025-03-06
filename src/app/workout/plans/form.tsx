import React from 'react'
import {
    Box,
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Select,
    MenuItem,
    Typography,
    Button
} from "@mui/material";
import WorkoutGoal from "@/types/WorkoutGoal";
import {usePlanForm} from "@/app/workout/hooks/planForm.hook";
import Alert from '@mui/material/Alert';
import ErrorIcon from '@mui/icons-material/Error';

type props = {
    goals: WorkoutGoal[];
}
export default function PlanForm ({goals}: props)  {
    const {
        handleSubmit,
        goalsOptions,
        values,
        setValues,
        error
    } = usePlanForm(goals)
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {error && <Alert severity="error" icon={<ErrorIcon />}>{error}</Alert>}
            <Typography
                component="div"
                variant="h2"
            >
                Create Workout Plan
            </Typography>
            <FormControl>
                <InputLabel htmlFor="plan-name-input" sx={{fontSize: '25px!important'}}>Plan Name</InputLabel>
                <Input
                    id="plan-name-input"
                    aria-describedby="plan-name-input-text"
                    value={values?.name}
                    onChange={(event: any) => {
                        setValues((prev: any) => ({ ...prev, name: event.target.value }));
                    }}
                    sx={{
                        fontSize: '25px!important',
                        backgroundColor: '#0a6e80 !important'
                    }}
                />
                <FormHelperText id="plan-name-input-text" sx={{fontSize: '13px!important'}}>Enter a name for the Workout Plan.</FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="simple-select-label" sx={{fontSize: '25px!important'}}>Goals</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={values?.goalId}
                    label="Age"
                    onChange={(event: any) => {
                        setValues((prev: any) => ({ ...prev, goalId: event.target.value }));
                    }}
                    sx={{
                        fontSize: '18px!important',
                        backgroundColor: '#0a6e80 !important'
                    }}
                >
                    {goalsOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#0AB5D2 !important',
                    color: 'white !important',
                    '&.MuiButton-root:hover': { backgroundColor: '#077d92 !important' },
                    borderRadius: '2px !important',
                    padding: '2px !important',
                    marginTop: '10px !important',
                    marginLeft: '8% !important',
                    fontSize: '20px!important',
                }}
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </Box>
    )
}