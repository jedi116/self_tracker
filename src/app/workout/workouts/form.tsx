import React from 'react'
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box,
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from '@mui/material'
import Alert from "@mui/material/Alert";
import ErrorIcon from "@mui/icons-material/Error";
import {WorkoutTypeForm} from "@/app/workout/workouts/workoutTypeForm";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useWorkoutsForm} from "@/app/workout/hooks/workoutsForm.hook";



export default function WorkoutsForm () {
    const {
        handleChange,
        handleSubmit,
        error,
        planOptions,
        nameOptions,
        values,
        setValues
    } = useWorkoutsForm()
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
                variant="h2"
            >
                Create Workout Entry
            </Typography>
            <FormControl sx={{width: '80%'}}>
                <InputLabel id="plan-select-label" sx={{fontSize: '17px!important'}}>Plan</InputLabel>
                <Select
                    labelId="plan-select-label"
                    id="plan-select"
                    value={values?.plan}
                    label="plan"
                    onChange={(event: any) => {
                        setValues((prev: any) => ({ ...prev, plan: event.target.value }));
                    }}
                    sx={{
                        fontSize: '17px!important',
                        backgroundColor: '#0a6e80 !important'
                    }}
                >
                    {planOptions.map((option) => (
                        <MenuItem key={option.value as string} value={option.value as string}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{width: '80%' , marginTop: '15px'}}>
                <InputLabel id="name-select-label" sx={{fontSize: '17px!important'}}>Workout Type</InputLabel>
                <Select
                    labelId="name-select-label"
                    id="name-select"
                    value={values?.name}
                    label="name"
                    onChange={(event: any) => {
                        setValues((prev: any) => ({ ...prev, name: event.target.value }));
                    }}
                    sx={{
                        fontSize: '17px!important',
                        backgroundColor: '#0a6e80 !important'
                    }}
                >
                    {nameOptions.map((option) => (
                        <MenuItem key={option.value as string } value={option.value as string}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Accordion sx={{ width: '80%' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Add new work out type to list </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <WorkoutTypeForm />
                </AccordionDetails>
            </Accordion>
            <FormControl>
                <InputLabel htmlFor="workout-description-input" sx={{fontSize: '19px!important'}}>Description</InputLabel>
                <Input
                    id="workout-description-input"
                    aria-describedby="workout-description-input-text"
                    value={values?.description}
                    onChange={handleChange('description')}
                    sx={{
                        fontSize: '17px!important',
                        backgroundColor: '#0a6e80 !important',
                        width: '80%'
                    }}
                    multiline
                    minRows={3}
                    maxRows={6}
                />
                <FormHelperText id="workout-description-input-text" sx={{fontSize: '10px!important'}}>Enter description</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="workout-sets-input" sx={{fontSize: '19px!important'}}></InputLabel>
                <Input
                    id="workout-sets-input"
                    aria-describedby="workout-sets--input-text"
                    value={values?.sets}
                    onChange={handleChange('sets')}
                    sx={{
                        fontSize: '17px!important',
                        backgroundColor: '#0a6e80 !important',
                        width: '80%'
                    }}
                    type='number'
                />
                <FormHelperText id="workout-sets-input-text" sx={{fontSize: '10px!important'}}>Enter number of sets.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="workout-reps-input" sx={{fontSize: '19px!important'}}></InputLabel>
                <Input
                    id="workout-reps-input"
                    aria-describedby="workout-reps-input-text"
                    value={values?.reps}
                    onChange={handleChange('reps')}
                    sx={{
                        fontSize: '17px!important',
                        backgroundColor: '#0a6e80 !important',
                        width: '80%'
                    }}
                    type='number'
                />
                <FormHelperText id="workout-reps-input-text" sx={{fontSize: '10px!important'}}>Enter number of reps.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="workout-duration-input" sx={{fontSize: '19px!important'}}></InputLabel>
                <Input
                    id="workout-duration-input"
                    aria-describedby="workout-duration-input-text"
                    value={values?.duration}
                    onChange={handleChange('duration')}
                    sx={{
                        fontSize: '17px!important',
                        backgroundColor: '#0a6e80 !important',
                        width: '80%'
                    }}
                />
                <FormHelperText id="workout-date-input-text" sx={{fontSize: '10px!important'}}>Enter Duration.</FormHelperText>
            </FormControl>
            <FormControl>
                <Input
                    id="goal-date-input"
                    aria-describedby="goal-date-input-text"
                    type={'date'}
                    value={values?.date}
                    onChange={handleChange('date')}
                    sx={{
                        fontSize: '17px!important',
                        backgroundColor: '#0a6e80 !important',
                        width: '50%'
                    }}
                />
                <FormHelperText id="goal-date-input-text" sx={{fontSize: '10px!important'}}>Enter date.</FormHelperText>
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
                    fontSize: '20px!important',
                }}
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </Box>
    )
}