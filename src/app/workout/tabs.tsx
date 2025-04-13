'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Workouts from '@/app/workout/workouts/workouts';
import Goals from '@/app/workout/goals/goals';
import WorkoutSummary from '@/app/workout/summary/summary';
import { useWorkoutTabs } from '@/app/workout/hooks/tab.hook';
import { styles } from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: Readonly<TabPanelProps>) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={styles.tabPanel}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const { value, handleChange } = useWorkoutTabs();
  return (
    <Box sx={styles.tabsContainer}>
      <Box sx={styles.tabsHeader}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Workout Summary" {...a11yProps(0)} sx={styles.tabTextStyles} />
          <Tab label="Workout goals" {...a11yProps(1)} sx={styles.tabTextStyles} />
          <Tab label="Workouts" {...a11yProps(2)} sx={styles.tabTextStyles} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <WorkoutSummary />
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
