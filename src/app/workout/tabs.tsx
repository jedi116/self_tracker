'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Workouts from "@/app/workout/workouts/workouts";
import Goals from '@/app/workout/goals/goals'
import {useWorkoutTabs} from "@/app/workout/hooks/tab.hook";

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

const tabTextStyles = {
    fontSize: { xs: "0.8em !important", sm: "1.2em !important", md: "1.5em !important", lg: '2em !important' },
    marginLeft: { xs: "0.1% !important", sm: "2% !important", md: "5% !important", lg: '5% !important' },
}
export default function BasicTabs() {
   const {value, handleChange} = useWorkoutTabs()
    return (
        <Box sx={{
            width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" }, // Adjust width per device
            height: { xs: "auto", sm: "60vh", md: "70vh" }, // Dynamic height
            margin: "auto",
            borderRadius: 2,
        }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: '30%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Workout Summary" {...a11yProps(0)} sx={tabTextStyles}/>
                    <Tab label="Workout goals" {...a11yProps(1)} sx={tabTextStyles}/>
                    <Tab label="Workouts" {...a11yProps(2)} sx={tabTextStyles}/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Coming Soon
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Goals />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Workouts />
            </CustomTabPanel>
        </Box>
    );
}