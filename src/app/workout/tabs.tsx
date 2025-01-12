'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Workouts from "@/app/workout/workouts";
import Workout from "@/types/Workout";
import WorkoutPlan from "@/types/WorkoutPlan";
import WorkoutGoal from "@/types/WorkoutGoal";
import Plans from "@/app/workout/plans"
import Goals from '@/app/workout/goals'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface WorkoutTabsProps {
    workouts: Workout[],
    plans: WorkoutPlan[],
    goals: WorkoutGoal[]
}

export default function BasicTabs({workouts, plans, goals}: WorkoutTabsProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: '30%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Workout Plans" {...a11yProps(0)} sx={{ fontSize: '28px !important', marginLeft: '5% !important' }}/>
                    <Tab label="Workout goals" {...a11yProps(1)} sx={{ fontSize: '28px !important', marginLeft: '5% !important' }}/>
                    <Tab label="Workouts" {...a11yProps(2)} sx={{ fontSize: '28px !important', marginLeft: '5% !important' }}/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Plans plans={plans.map(data => {
                    const goalName = goals.find(d => d.id === data.goalId)
                    return {...data, goalId: goalName?.name || ''}
                    })} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Goals goals={goals}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Workouts  workouts={workouts}/>
            </CustomTabPanel>
        </Box>
    );
}