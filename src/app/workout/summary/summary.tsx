'use client';
import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { WorkoutContext } from '@/context/workout';
import Workout from '@/types/Workout';
import { styles } from '../styles';

type WorkoutTrend = {
  date: string;
  sets?: number;
  reps?: number;
  duration?: string;
  name?: string;
};

export default function WorkoutSummary() {
  const { workouts } = useContext(WorkoutContext);

  // Group workouts by type
  const workoutsByType = workouts.reduce((acc: Record<string, Workout[]>, workout) => {
    const typeName = workout.name || 'Unknown';
    if (!acc[typeName]) {
      acc[typeName] = [];
    }
    acc[typeName].push(workout);
    return acc;
  }, {});

  // Generate data for trend charts - sort by date
  const getWorkoutTrends = (workouts: Workout[]): WorkoutTrend[] => {
    return workouts
      .map(workout => ({
        date:
          typeof workout.date === 'string'
            ? workout.date
            : new Date(workout.date).toISOString().split('T')[0],
        sets: workout.sets || 0,
        reps: workout.reps || 0,
        duration: workout.duration || '0',
        name: workout.name || 'Unknown',
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  // Get overall progress data
  const getProgressData = () => {
    const sortedWorkouts = [...workouts].sort((a, b) => {
      const dateA = typeof a.date === 'string' ? new Date(a.date) : a.date;
      const dateB = typeof b.date === 'string' ? new Date(b.date) : b.date;
      return dateA.getTime() - dateB.getTime();
    });

    // Group by week
    const weeklyData = sortedWorkouts.reduce(
      (
        acc: Record<
          string,
          {
            week: string;
            workoutCount: number;
            totalSets: number;
            totalReps: number;
          }
        >,
        workout
      ) => {
        const date = typeof workout.date === 'string' ? new Date(workout.date) : workout.date;
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay());
        const weekKey = weekStart.toISOString().split('T')[0];

        if (!acc[weekKey]) {
          acc[weekKey] = {
            week: weekKey,
            workoutCount: 0,
            totalSets: 0,
            totalReps: 0,
          };
        }

        acc[weekKey].workoutCount += 1;
        acc[weekKey].totalSets += workout.sets || 0;
        acc[weekKey].totalReps += workout.reps || 0;

        return acc;
      },
      {}
    );

    return Object.values(weeklyData);
  };

  // Generate summary statistics
  const totalWorkouts = workouts.length;
  const uniqueWorkoutTypes = Object.keys(workoutsByType).length;
  const totalSets = workouts.reduce((sum, workout) => sum + (workout.sets ?? 0), 0);
  const totalReps = workouts.reduce((sum, workout) => sum + (workout.reps ?? 0), 0);

  // Get the most recent workouts of each type for comparison
  const progressByType = Object.entries(workoutsByType).map(([type, typeWorkouts]) => {
    const sortedWorkouts = [...typeWorkouts].sort((a, b) => {
      const dateA = typeof a.date === 'string' ? new Date(a.date) : a.date;
      const dateB = typeof b.date === 'string' ? new Date(b.date) : b.date;
      return dateB.getTime() - dateA.getTime();
    });

    const latestWorkout = sortedWorkouts[0];
    const previousWorkout = sortedWorkouts[1];

    const setsDiff = previousWorkout ? (latestWorkout.sets || 0) - (previousWorkout.sets || 0) : 0;
    const repsDiff = previousWorkout ? (latestWorkout.reps || 0) - (previousWorkout.reps || 0) : 0;

    return {
      type,
      latestWorkout,
      setsDiff,
      repsDiff,
    };
  });

  return (
    <Box sx={styles.summary.container}>
      <Typography variant="h4" component="h1" gutterBottom sx={styles.summary.title}>
        Workout Progress Summary
      </Typography>

      {/* Summary Cards */}
      <Stack
        direction="row"
        spacing={3}
        sx={styles.summary.summaryCards}
        flexWrap={{ xs: 'wrap', sm: 'wrap', md: 'nowrap' }}
      >
        <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: '25%' } }}>
          <Paper sx={styles.summary.card}>
            <Typography variant="h6">Total Workouts</Typography>
            <Typography variant="h3">{totalWorkouts}</Typography>
          </Paper>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: '25%' } }}>
          <Paper sx={styles.summary.card}>
            <Typography variant="h6">Workout Types</Typography>
            <Typography variant="h3">{uniqueWorkoutTypes}</Typography>
          </Paper>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: '25%' } }}>
          <Paper sx={styles.summary.card}>
            <Typography variant="h6">Total Sets</Typography>
            <Typography variant="h3">{totalSets}</Typography>
          </Paper>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: '25%' } }}>
          <Paper sx={styles.summary.card}>
            <Typography variant="h6">Total Reps</Typography>
            <Typography variant="h3">{totalReps}</Typography>
          </Paper>
        </Box>
      </Stack>

      {/* Weekly Progress Chart */}
      <Typography variant="h5" sx={styles.summary.sectionTitle}>
        Weekly Progress
      </Typography>
      <Paper sx={styles.summary.chartContainer}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={getProgressData()}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="week" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={styles.summary.tooltipStyle} />
            <Legend />
            <Bar dataKey="workoutCount" name="Workouts" fill="#8884d8" />
            <Bar dataKey="totalSets" name="Sets" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Workout Type Progress */}
      <Typography variant="h5" sx={styles.summary.sectionTitle}>
        Progress By Workout Type
      </Typography>
      {Object.entries(workoutsByType).map(([type, typeWorkouts]) => {
        const trendData = getWorkoutTrends(typeWorkouts);
        if (trendData.length < 2) return null; // Need at least 2 data points for a trend

        return (
          <Paper key={type} sx={styles.summary.chartContainer}>
            <Typography variant="h6" sx={styles.summary.workoutTypeTitle}>
              {type}
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip contentStyle={styles.summary.tooltipStyle} />
                <Legend />
                <Line type="monotone" dataKey="sets" stroke="#8884d8" name="Sets" dot={{ r: 4 }} />
                <Line type="monotone" dataKey="reps" stroke="#82ca9d" name="Reps" dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        );
      })}

      {/* Latest Progress Comparison */}
      <Typography variant="h5" sx={styles.summary.sectionTitle}>
        Latest Progress Changes
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {progressByType.map(({ type, setsDiff, repsDiff }) => (
          <Box
            key={type}
            sx={{
              width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.33% - 11px)' },
            }}
          >
            <Paper sx={styles.summary.progressCard}>
              <Typography variant="h6" sx={styles.summary.workoutTypeTitle}>
                {type}
              </Typography>
              <Box sx={styles.summary.metricRow}>
                <Typography sx={styles.summary.metricLabel}>Sets Change:</Typography>
                <Typography sx={styles.summary.getMetricValueStyle(setsDiff)}>
                  {setsDiff > 0 ? `+${setsDiff}` : setsDiff}
                </Typography>
              </Box>
              <Box sx={styles.summary.metricRow}>
                <Typography sx={styles.summary.metricLabel}>Reps Change:</Typography>
                <Typography sx={styles.summary.getMetricValueStyle(repsDiff)}>
                  {repsDiff > 0 ? `+${repsDiff}` : repsDiff}
                </Typography>
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
