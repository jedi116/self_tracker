import React from 'react';
import Box from '@mui/material/Box';
import Alert from "@mui/material/Alert";
import ErrorIcon from "@mui/icons-material/Error";
import {Button, FormControl, FormHelperText, Input, InputLabel, Typography} from "@mui/material";
import {useGoalForm} from "@/app/workout/hooks/goalsForm.hook";

const inputFontSize = {fontSize: {xs: '10px!important', sm: '10px!important', md: '12px!important', lg: '15px!important'},}

export default function GoalsForm() {
    const {
        error,
        values,
        handleChange,
        handleSubmit
    } = useGoalForm()
    return (
        <Box
            component="form"
            sx={{
                width: '600px',
                height: "400px",
                display: 'flex',
                flexDirection: 'column',
                overflowY: "auto",
                overflowX: "auto",
            }}
            noValidate
            autoComplete="off"
        >
            {error && <Alert severity="error" icon={<ErrorIcon />}>{error}</Alert>}
            <Typography
                component="div"
                sx={{fontSize: {xs: '25px!important', sm: '35px!important', md: '45px!important', lg: '70px!important'}, fontFamily: 'SaiyanFont!important'}}
            >
                Create Workout Goal
            </Typography>
            <FormControl>
                <InputLabel htmlFor="goal-name-input" sx={{fontSize: inputFontSize.fontSize}}>Goal Name</InputLabel>
                <Input
                    id="goal-name-input"
                    aria-describedby="gaol-name-input-text"
                    value={values?.name}
                    onChange={handleChange('name')}
                    sx={{
                        fontSize: inputFontSize.fontSize,
                        backgroundColor: '#0a6e80 !important',
                        width: '80%'
                    }}
                />
                <FormHelperText id="goal-name-input-text" sx={{fontSize: '10px!important'}}>Enter a name for the Workout Goal.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="goal-description-input" sx={{fontSize: inputFontSize.fontSize}}>Goal Description</InputLabel>
                <Input
                    id="goal-description-input"
                    aria-describedby="gaol-description-input-text"
                    value={values?.description}
                    onChange={handleChange('description')}
                    sx={{
                        fontSize: inputFontSize.fontSize,
                        backgroundColor: '#0a6e80 !important'
                    }}
                    multiline
                    minRows={3}
                    maxRows={6}
                />
                <FormHelperText id="goal-description-input-text" sx={{fontSize: '10px!important'}}>Enter a description for the Workout Goal.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="goal-bodyfat-input" sx={{fontSize: inputFontSize.fontSize}}>Body Fat Percentage</InputLabel>
                <Input
                    id="goal-bodyfat-input"
                    aria-describedby="gaol-bodyfat-input-text"
                    value={values?.bodyFatGoal}
                    onChange={handleChange('bodyFatGoal')}
                    sx={{
                        fontSize: inputFontSize.fontSize,
                        backgroundColor: '#0a6e80 !important',
                        width: '50%'
                    }}
                />
                <FormHelperText id="goal-bodyfat-input-text" sx={{fontSize: '10px!important'}}>Enter body fat percentage you want to achieve</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="goal-weight-input" sx={{fontSize: inputFontSize.fontSize}}>Weight Goal </InputLabel>
                <Input
                    id="goal-weight-input"
                    aria-describedby="goal-weight-input-text"
                    value={values?.weightGoal}
                    onChange={handleChange('weightGoal')}
                    sx={{
                        fontSize: inputFontSize.fontSize,
                        backgroundColor: '#0a6e80 !important',
                        width: '50%'
                    }}
                />
                <FormHelperText id="goal-weight-input-text" sx={{fontSize: '10px!important'}}>Enter weight goal.</FormHelperText>
            </FormControl>
            <FormControl>
                <Input
                    id="goal-beginDate-input"
                    aria-describedby="goal-beginDate-input-text"
                    value={values?.beginDate}
                    type={'date'}
                    onChange={handleChange('beginDate')}
                    sx={{
                        fontSize: inputFontSize.fontSize,
                        backgroundColor: '#0a6e80 !important',
                        width: '50%'
                    }}
                />
                <FormHelperText id="goal-beginDate-input-text" sx={{fontSize: '10px!important'}}>Enter goal begin date.</FormHelperText>
            </FormControl>
            <FormControl>
                <Input
                    id="goal-endDate-input"
                    aria-describedby="goal-endDate-input-text"
                    type={'date'}
                    value={values?.endDate}
                    onChange={handleChange('endDate')}
                    sx={{
                        fontSize: inputFontSize.fontSize,
                        backgroundColor: '#0a6e80 !important',
                        width: '50%'
                    }}
                />
                <FormHelperText id="goal-endDate-input-text" sx={{fontSize: '10px!important'}}>Enter goal end date.</FormHelperText>
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
                    fontSize: inputFontSize.fontSize,
                }}
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </Box>
    );
}