import React, {useState} from 'react'
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
import WorkoutPlan from "@/types/WorkoutPlan";

export default function PlanForm ()  {
    const [goals, setGoals] = useState<{value: string, label: string}[]>([{
        value: 'test',
        label: 'TEST'
    }])
    const [values, setValues] = useState<Omit<WorkoutPlan, 'id' | 'userId' | 'active'>>({
        goalId: '',
        name: '',
    });

    const handleChange = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography
                component="div"
                variant="h2"
                //sx={{marginLeft: '20%'}}
            >
                Create Workout Plan
            </Typography>
            <FormControl>
                <InputLabel htmlFor="plan-name-input" sx={{fontSize: '25px!important'}}>Plan Name</InputLabel>
                <Input
                    id="plan-name-input"
                    aria-describedby="plan-name-input-text"
                    value={values.name}
                    onChange={handleChange('name')}
                    sx={{
                        fontSize: '25px!important',
                        backgroundColor: '#0a6e80 !important'
                    }}
                />
                <FormHelperText id="plan-name-input-text" sx={{fontSize: '18px!important'}}>Enter a name for the Workout Plan.</FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="simple-select-label" sx={{fontSize: '25px!important'}}>Goals</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={values.goalId}
                    label="Age"
                    onChange={handleChange('goalId')}
                    sx={{
                        fontSize: '25px!important',
                        backgroundColor: '#0a6e80 !important'
                    }}
                >
                    {goals.map((option) => (
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
            >
                Submit
            </Button>
        </Box>
    )
}