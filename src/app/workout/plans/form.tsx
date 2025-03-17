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
const styles =  {
    formLabels: {
        fontSize: {xs: '20px!important', sm: '20px!important', md: '22px!important', lg: '25px!important'},
        backgroundColor: '#0a6e80 !important',
        width: '60%',
        marginLeft: '8% !important'
    }
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
                width: '600px',
                display: 'flex',
                flexDirection: 'column',
            }}
            noValidate
            autoComplete="off"
        >
            {error && <Alert severity="error" icon={<ErrorIcon />}>{error}</Alert>}
            <Typography
                component="div"
                sx={{fontSize: {xs: '35px!important', sm: '45px!important', md: '65px!important', lg: '80px!important'}, fontFamily: 'SaiyanFont!important'}}
            >
                Create Workout Plan
            </Typography>
            <FormControl>
                <InputLabel htmlFor="plan-name-input" sx={{
                    fontSize: styles.formLabels.fontSize,
                    marginLeft: '8% !important'
                }}>Plan Name</InputLabel>
                <Input
                    id="plan-name-input"
                    aria-describedby="plan-name-input-text"
                    value={values?.name}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                        setValues((prev: any) => ({ ...prev, name: event.target.value }));
                    }}
                    sx={styles.formLabels}
                />
                <FormHelperText id="plan-name-input-text" sx={{fontSize: '13px!important',marginLeft: '8% !important'}}>Enter a name for the Workout Plan.</FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="simple-select-label" sx={{
                    fontSize: styles.formLabels.fontSize,
                    marginLeft: '8% !important'}}>Goals</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={values?.goalId}
                    label="Age"
                    onChange={(event: any) => {
                        setValues((prev: any) => ({ ...prev, goalId: event.target.value }));
                    }}
                    sx={styles.formLabels}
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
                    width: '60%'
                }}
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </Box>
    )
}