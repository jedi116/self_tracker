import React from 'react'
import {Box, Button, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import Alert from "@mui/material/Alert";
import ErrorIcon from "@mui/icons-material/Error";
import SuccessIcon from "@mui/icons-material/CheckCircle";
import {useWorkoutTypeForm} from "@/app/workout/hooks/workoutTypeForm.hook";


export const WorkoutTypeForm = () => {
    const {
        values,
        handleChange,
        handleSubmit,
        message,
        error
    } = useWorkoutTypeForm()
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            {error && <Alert severity="error" icon={<ErrorIcon />}>{error}</Alert>}
            {message && <Alert severity="success" icon={<SuccessIcon />}>{message}</Alert>}
            <FormControl>
                <InputLabel htmlFor="workout-type-name-input" sx={{fontSize: '19px!important'}}></InputLabel>
                <Input
                    id="workout-type-name-input"
                    aria-describedby="workout-type-name-input-text"
                    value={values?.name}
                    onChange={handleChange('name')}
                    sx={{
                        fontSize: '17px!important',
                        backgroundColor: '#0a6e80 !important',
                        width: '80%'
                    }}
                />
                <FormHelperText id="workout-type-name-input-text" sx={{fontSize: '10px!important'}}>Enter Name.</FormHelperText>
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
                create new workout type
            </Button>
        </Box>

    )
}